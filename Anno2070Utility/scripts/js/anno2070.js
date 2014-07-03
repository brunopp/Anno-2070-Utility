

function BuildingProductionKgPerMin(building) {
	return 60000 * 1000 / (building.ProductionTime || 20000);
}

function BuildingGetRequiredBuildings(building, demandKgPerMin) {
	return demandKgPerMin / BuildingProductionKgPerMin(building);
}

function ChainPartProductionKgPerMin(chainPart) {
	return BuildingProductionKgPerMin(chainPart.building) * chainPart.numOfBuildings() * chainPart.buildingEfficiency();
}

function BuildingGetRawNeeded1KgPerMin(building) {
	return 60000 * (building.RawNeeded1 || 1000) / (building.ProductionTime || 20000);
}

function BuildingGetRawNeeded2KgPerMin(building) {
	return 60000 * (building.RawNeeded2 || 1000) / (building.ProductionTime || 20000);
}




function ProductionChain(building) {
	this.chain = [];
	this.dynamic = [];
	this.chainsAdded;
	this.raw = ko.observable();

	this.finalProduct = building.Product;
	this.finalBuilding = building;

	if (this.finalBuilding.Product) {
		this.finalProduct = this.finalBuilding.Product;
	}

	this.UpdateProductionChain();

	this.icon = (function (icon) {
		return icon;
	}(this.chain[0].icon))
	this.local = (function () {
		return anno.localNameFromProductionBuilding(building);
	}(this.chain[0].building))

	this.chainsAdded = true;
};

ProductionChain.prototype.UpdateProductionChain = function (raw) {
	if (!this.updating) {
		this.updating = true;

		if (!raw && raw !== 0) {
			if (this.raw()) {
				raw = this.raw();
			} else {
				var cp = this.FindChainPart(this.finalBuilding);
				if (cp) {
					raw = ChainPartProductionKgPerMin(cp);
				} else {
					raw = BuildingProductionKgPerMin(this.finalBuilding);
				}
			}
		} else {
			this.raw(raw);
		}

		this.GetProductionChain(this.finalProduct, raw, 0);
		this.updating = false;
	}
}

ProductionChain.prototype.Disable = function (chainPart) {
	var bs = this.GetChainPartByProduction(chainPart.building.Product, chainPart.building);

	var another;
	for (var i = 0; i < bs.length; i++) {
		if (!bs[i].disabled()) {
			another = bs[i];
			break;
		} else {
			if (!another) {
				another = bs[i];
			}
		}
	}

	if (another) {
		if (!chainPart.disabled()) {
			chainPart.disabled(true);
		} else {
			chainPart.disabled(false);
		}

		if (this.GetDynamicBuilding(chainPart.building.Product) == chainPart.building) {
			this.AddDynamic(chainPart.building.Product, chainPart.building);
		}

		var cp = this.FindChainPart(another.building);
		cp.disabled(false);
	}
}

ProductionChain.prototype.GetProductionChain = function (currentProduct, rawMaterialsPerMin, indent) {
	var producingBuildings = this.GetProducingBuildings(currentProduct, this.chainsAdded);

	for (var i = 0; i < producingBuildings.length; i++) {
		var b = producingBuildings[i];

		// get number of required buildings to meet demand
		var reqBuildings = this.GetNumberOfBuilding(b, rawMaterialsPerMin);

		if (reqBuildings !== 0)
		{
			this.AddChainPart(b, indent, reqBuildings);

			if (b.RawMaterial1) {
				this.GetProductionChain(b.RawMaterial1, BuildingGetRawNeeded1KgPerMin(b) * reqBuildings, indent + 1);
			}
			if (b.RawMaterial2) {
				this.GetProductionChain(b.RawMaterial2, BuildingGetRawNeeded2KgPerMin(b) * reqBuildings, indent + 1);
			}
		}
	}
}

ProductionChain.prototype.GetNumberOfBuilding = function (building, rawMaterialsPerMin) {
	if (this.chainsAdded) {
		var cp = this.FindChainPart(building);

		if (cp.disabled()) {
			return 0;
		} else {
			var consumption = 0;
			var cps = this.GetChainPartByProduction(building.Product, building)
			for (var i = 0; i < cps.length; i++) {
				if (!cps[i].disabled()) {
					consumption += ChainPartProductionKgPerMin(cps[i]);
				}
			}
			rawMaterialsPerMin -= consumption;

			return BuildingGetRequiredBuildings(building, rawMaterialsPerMin) / cp.buildingEfficiency();
		}
	} else {
		return BuildingGetRequiredBuildings(building, rawMaterialsPerMin);
	}
}

ProductionChain.prototype.AddChainPart = function (building, step, buildingCount) {
	var cp = this.FindChainPart(building);

	if (cp) {
		cp.numOfBuildings(buildingCount);
	} else {
		var disabled;

		if (this.GetChainPartByProduction(building.Product, null).length > 0) {
			disabled = true;
			buildingCount = 0;
		} else {
			disabled = false;
			this.AddDynamic(building.Product, building);
		}

		cp = new ChainPart(building, step, buildingCount, 1, disabled, (function (self) {
			return self;
		}(this)));
		this.chain.push(cp);
	}
}

ProductionChain.prototype.AddDynamic = function (product, building) {
	this.dynamic.push(building);
}

ProductionChain.prototype.GetDynamicBuilding = function (product) {
	for (var i = 0; i < this.dynamic.length; i++) {
		if (this.dynamic[i].Product === product) {
			return this.dynamic[i];
		}
	}
}

ProductionChain.prototype.FindChainPart = function (building) {
	for (var i = 0; i < this.chain.length; i++) {
		if (this.chain[i].building == building)
			return this.chain[i];
	}
}

ProductionChain.prototype.GetChainPartByProduction = function (product, ignoreBuilding) {
	var l = [];

	for (var i = 0; i < this.chain.length; i++) {
		var cp = this.chain[i];

		if (cp.building && cp.building != ignoreBuilding && cp.building.Product == product) {
			l.push(cp);
		}
	}

	return l;
}

ProductionChain.prototype.GetProducingBuildings = function (product, searchInternalList) {
	var buildings = [];

	if (!searchInternalList) {
		if (product) { // tangible product
			buildings = anno.buildingsByProduct(product);
		} else { // energy product
			buildings.push(anno.buildingByGuid(this.finalBuilding.GUID));
		}
	} else {
		var cp = this.GetChainPartByProduction(product, null);
		for (var i = 0; i < cp.length; i++) {
			buildings.push(cp[i].building)
		}
	}

	return buildings;
}


function ChainPart(building, indent, buildingCount, buildingEfficiency, disabled, PC) {
	this.indent = indent;
	this.numOfBuildings = ko.observable(buildingCount);
	this.buildingEfficiency = ko.observable(buildingEfficiency);
	this.disabled = ko.observable(disabled);
	
	this.building = building;

	this.icon = (function (guid) {
		return anno.iconFromGuid(guid);
	}(building.GUID))
	this.local = (function (guid) {
		return anno.localFromGuid(guid);
	}(building.GUID))


	this.changeDisabled = function () {
		PC.Disable(this);
	}
	this.numOfBuildings.subscribe(function () {
		PC.UpdateProductionChain();
	});
	this.buildingEfficiency.subscribe(function () {
		PC.UpdateProductionChain();
	});
	this.disabled.subscribe(function () {
		PC.UpdateProductionChain();
	});
}




Calculator = (function () {
	var pub = {};

	pub.getInhabitants = function (faction, maxLevel, buildings, extraLivingSpace) {
		// New array to contain the number of inhabitants at each level.
		var inhabs = [];
		// Loop through and calculate the number of inhabitants at each level.
		for (i = 0; i < buildings.length; i++) {
			inhabs[i] = buildings[i] * getInhabitantsPerBuilding(faction, i + 1, extraLivingSpace);

			if (i >= maxLevel)
				break;
		}

		return inhabs;
	};

	pub.getBuildings = function (faction, level, maxLevel, buildings) {
		// Array containing the number of buildings for each level.
		var bs = [0, 0, 0, 0];

		// Get the total number of buildings.
		var buildingsRemaining;
		if (level) {
			buildingsRemaining = Math.floor(getFirstLevelNumOfBuildings(faction, level, maxLevel, buildings));
		}
		else {
			buildingsRemaining = buildings;
		}

		// Loop through all the upper levels and calculate the number of buildings each level has.
		for (i = 0; i <= maxLevel - 1; i++) {
			// subtract the buildings that are being upgraded from the previous level
			if (i !== 0) {
				bs[i - 1] = Math.ceil((buildingsRemaining * (1 - getPopulationUpgradePercent(faction, i))));
				buildingsRemaining -= bs[i - 1];
			}

			bs[i] = buildingsRemaining;
		}

		return bs;
	};

	pub.Population = function (faction, level) {
		if (level) {
			var factionLevel = faction + "s" + level;
		} else {
			var factionLevel = faction;
		}

		return anno.populationByLevel(factionLevel);
	};

	pub.getNumberOfBuildings = function (faction, level, extraLivingSpace, population) {
		// Get inhabitants per building.
		var inhabsPerBuilding = getInhabitantsPerBuilding(faction, level, extraLivingSpace);

		// Round up to a full building.
		return Math.ceil(population / inhabsPerBuilding);
	};

	// This method will go through all the prior levels and divide by each
	// level's upgrade percent to get the first's levels number of buildings.
	getFirstLevelNumOfBuildings = function (faction, level, maxLevel, buildings) {
		var b = buildings;

		// if we're not at max level, calculate how many buildings was upgraded to next level and take it back
		if (level != maxLevel) {
			b /= 1 - getPopulationUpgradePercent(faction, level);
		}

		for (i = level; i > 1; i--) {
			b /= getPopulationUpgradePercent(faction, i - 1);
		}

		return b;
	};

	getPopulationUpgradePercent = function (faction, level) {
		return pub.Population(faction, level).ResidenceUpgradeAmountMaxPercent / 100;
	};

	getInhabitantsPerBuilding = function (faction, level, extraLivingSpace) {
		var val = anno.buildingByFactionLevel(faction, level);

		if (extraLivingSpace) {
			val = Math.floor(val * 1.12);
		}

		return val;
	};
	
	return pub;
}());








var ProductionChainsViewModel = function () {
	var self = this;

	self.CurrentFaction = ko.observable("Eco");
	self.CurrentProductionChain = ko.observable();
	self.ProductionChains = {
		"Eco": [],
		"Tycoon": [],
		"Tech": [],
	};

	self.ShowProductionChain = function(b) {
		self.CurrentProductionChain(b);

		$("#pcs").hide();
		$("#pc").show();

		UpdatePC();
	};

	self.ShowFaction = function (faction) {
		self.CurrentFaction(faction);

		$("#pcs").show();
		$("#pc").hide();
	};

	self.Back = function () {
		$("#pcs").show();
		$("#pc").hide();
	};

	function Population(faction, icon, maxLevel, levels) {
		this.Icon = icon;
		this.MaxLevel = ko.observable();
		this.MaxLevelNum = ko.computed(function () {
			return this.MaxLevel() && parseInt(this.MaxLevel().Level.substring(this.MaxLevel().Level.length - 1, this.MaxLevel().Level.length)) || 0;
		}, this);
		this.BuildingCount = ko.observable();
		this.ExtraLivingSpace = ko.observable();
		this.Levels = [];

		this.Focus = ko.observable();

		for (var i = 0; i < levels.length; i++) {
			this.Levels.push({
				Level: levels[i].level,
				Icon: levels[i].icon,
				Text: levels[i].text,
				Count: ko.observable(),
				Disabled: ko.computed(function (level) {
					return function () {
						var lvl = level.substring(level.length - 1, level.length);

						if (this.MaxLevelNum() < lvl) {
							return true;
						} else {
							return false;
						}
					}
				}(levels[i].level), this)
			});
		}

		this.MaxLevel(this.FindLevel(maxLevel));

		// subscribe to all factions' LevelSelected
		this.MaxLevel.subscribe(function (obj) {
			self.UpdatePopulation("MaxLevel", obj);
		});

		// subscribe to all faction's BuildingCount
		this.BuildingCount.subscribe(function (faction) {
			return function () {
				self.UpdatePopulation("BuildingCount");
			}
		}(faction));

		// subscribe to all factions' levels' count
		for (var i = 0; i < this.Levels.length; i++) {
			var lvl = this.Levels[i];

			lvl.Count.subscribe(function (lvl) {
				return function () {
					self.UpdatePopulation("Level", lvl);
				}
			}(lvl));
		}

		// subscribe to extra living space
		this.ExtraLivingSpace.subscribe(function () {
			self.UpdatePopulation("ExtraLivingSpace");
		});
	}

	Population.prototype.FindLevel = function (d) {
		for (var i = 0; i < this.Levels.length; i++) {
			var a = this.Levels[i];

			if (a.Text === d) {
				return a;
			}
		}
	};

	self.Population = {

	};

	self.Population["Eco"] = new Population("Eco", "icon_27_98", "Executives",
		[
			{ level: "Ecos1", icon: "icon_27_131", text: "Workers" },
			{ level: "Ecos2", icon: "icon_27_65", text: "Employees" },
			{ level: "Ecos3", icon: "icon_27_201", text: "Engineers" },
			{ level: "Ecos4", icon: "icon_27_130", text: "Executives" },
		]);

	self.Population["Tycoon"] = new Population("Tycoon", "icon_27_99", "Executives",
		[
			{ level: "Tycoons1", icon: "icon_27_38", text: "Workers" },
			{ level: "Tycoons2", icon: "icon_27_64", text: "Employees" },
			{ level: "Tycoons3", icon: "icon_27_108", text: "Engineers" },
			{ level: "Tycoons4", icon: "icon_27_109", text: "Executives" },
		]);

	self.Population["Tech"] = new Population("Tech", "icon_27_100", "Genies",
		[
			{ level: "Techs1", icon: "icon_27_230", text: "Lab Assistants" },
			{ level: "Techs2", icon: "icon_27_200", text: "Researchers" },
			{ level: "Techs3", icon: "icon_27_110", text: "Genies" }
		]);

	self.UpdatePopulation = function (focus, focusObj) {
		if (!self.updating) {
			self.updating = true;

			var faction = self.CurrentFaction();
			var p = self.Population[faction];
			var extraLiving = p.ExtraLivingSpace();
			var maxLevel = p.MaxLevelNum();

			var buildingCount;
			var level = null;
			if (focus === "BuildingCount" || focus === "MaxLevel" || focus === "ExtraLivingSpace") {
				buildingCount = p.BuildingCount() % 1 === 0 ? p.BuildingCount() : 0;
			} else {
				population = focusObj.Count() % 1 === 0 ? focusObj.Count() : 0;

				level = parseInt(focusObj.Level.substring(focusObj.Level.length - 1, focusObj.Level.length)) || 0;
				// convert populations to buildings
				buildingCount = Calculator.getNumberOfBuildings(faction, level, extraLiving, population);
			}

			// get buildings for each level, and convert it to populations
			var b = Calculator.getBuildings(faction, level, maxLevel, buildingCount);
			var inhabs = Calculator.getInhabitants(faction, maxLevel, b, extraLiving);

			// update population observables
			for (var i = 0; i < p.Levels.length; i++) {
				if (!inhabs[i]) {
					inhabs[i] = 0;
				}

				if (focus !== "Level" || p.Levels[i] !== focusObj) {
					p.Levels[i].Count(inhabs[i]);
				}
			}
			// update total buildings observable
			if (focus !== "BuildingCount") {
				var num = 0;
				for (var i = 0; i < b.length; i++) {
					num += b[i];
				}

				if (maxLevel === 0) {
					num = buildingCount;
				}
				p.BuildingCount(num);
			}

			self.updating = false;
		}
	};

	self.ApplyPopulation = function () {
		var demands = {};

		// get demands for current population
		for (var i = 0; i < self.Population[self.CurrentFaction()].Levels.length; i++) {
			var lvl = self.Population[self.CurrentFaction()].Levels[i];

			for (var d in Calculator.Population(lvl.Level).Demands) {
				if (!demands[d]) {
					demands[d] = 0;
				}
				demands[d] += Calculator.Population(lvl.Level).Demands[d] * lvl.Count() / 100;
			}
		}

		// update production chains with new demands
		for (var d in demands) {
			for (var i = 0; i < self.ProductionChains[self.CurrentFaction()].length; i++) {
				var p = self.ProductionChains[self.CurrentFaction()][i];

				if (p.finalBuilding.Product === d) {
					p.UpdateProductionChain(demands[d]);
				}
			}
		}
	};

	// setup
	(function () {
		var PCS = {
			"Eco": [10045, 10056, 10120, 10262, 10037, 10114, 10048, 10176, 10186, 10185, 10180, 10187, 10191],
			"Tycoon": [10045, 10056, 10120, 10262, 10025, 10046, 10148, 10152, 10159, 10057, 10156, 10050, 10158, 10081, 10163, 10168],
			"Tech": [10045, 10056, 10120, 10262, 10194, 10197, 10112, 10086, 10201, 10100, 40000019, 40000012, 40000017, 40000016]
		};

		for (var f in self.ProductionChains) {
			for (var j = 0; j < PCS[f].length; j++) {
				var b = anno.buildingByGuid(PCS[f][j]);
				if (b !== null) {
					self.ProductionChains[f].push(new ProductionChain(b));
				}
			}
		}
	}());
}

ko.applyBindings(new ProductionChainsViewModel());


ko.extenders.numeric = function (target, precision) {
	var result = ko.computed({
		read: function () {
			return target().toFixed(precision);
		},
		write: target
	});

	result.raw = target;
	return result;
};

ko.extenders.percent = function (target, option) {
	var result = ko.computed({
		read: function () {
			return (target() * 100).toFixed(0);
		},
		write: function (val) {
			if (option === "set") {
				target(val / 100);
			} else {
				target(val);
			}
		}
	});

	result.raw = target;
	return result;
};


// http://www.programico.com/1/post/2012/12/knockoutjs-jquerymobile-slider.html
// add data binding to JQuery mobile slider
ko.bindingHandlers.slider = {
	init: function (element, valueAccessor) {
		// use setTimeout with 0 to run this after Knockout is done
		setTimeout(function () {
			// $(element) doesn't work as that has been removed from the DOM
			var curSlider = $('#' + element.id);
			// helper function that updates the slider and refreshes the thumb location
			function setSliderValue(newValue) {
				curSlider.val(newValue).slider('refresh');
			}
			// subscribe to the bound observable and update the slider when it changes
			valueAccessor().subscribe(setSliderValue);
			// set up the initial value, which of course is NOT stored in curSlider, but the original element :\
			setSliderValue($(element).val());
			// subscribe to the slider's change event and update the bound observable
			curSlider.bind('change', function () {
				valueAccessor()(curSlider.val());
			});
		}, 0);
	}
};