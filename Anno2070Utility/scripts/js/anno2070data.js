
var anno = (function () {
	var pub = {};

	pub.data = {
		buildings: [
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"BuildingModules": 2000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "tycoon_worker_residence",
		   	"GUID": 10021,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 8
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"BuildingModules": 2000,
		   		"Tools": 1000
		   	},
		   	"BuildingLevel": "Tycoons2",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "tycoon_citizen_residence",
		   	"GUID": 10076,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 15
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"Tools": 3000,
		   		"Concrete": 3000,
		   		"BuildingModules": 4000
		   	},
		   	"BuildingLevel": "Tycoons3",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "tycoon_executive_residence",
		   	"GUID": 10116,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 25
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Concrete": 6000,
		   		"Steel": 4000,
		   		"BuildingModules": 5000
		   	},
		   	"BuildingLevel": "Tycoons4",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "tycoon_leader_residence",
		   	"GUID": 10118,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 40
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 150,
		   	"ProductCost": {
		   		"BuildingModules": 2000,
		   		"Tools": 3000,
		   		"Concrete": 5000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 2,
		   	"Name": "flavor_lab",
		   	"GUID": 10150,
		   	"ProductionTime": null,
		   	"Product": "SuperFlavor",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 100,
		   	"ProductCost": {
		   		"BuildingModules": 1000,
		   		"Tools": 2000,
		   		"Concrete": 3000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 5,
		   	"ActiveEcoEffect": -3,
		   	"ActiveEnergyCost": 2,
		   	"Name": "meatfactory",
		   	"GUID": 10022,
		   	"ProductionTime": 40000,
		   	"Product": "Meat",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 200,
		   	"ProductCost": {
		   		"BuildingModules": 2000,
		   		"Tools": 4000,
		   		"Concrete": 7000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Meat",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "SuperFlavor",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -3,
		   	"ActiveEnergyCost": 4,
		   	"Name": "food_supply_factory",
		   	"GUID": 10152,
		   	"ProductionTime": null,
		   	"Product": "TVDinner",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 300,
		   	"ProductCost": {
		   		"Tools": 3000,
		   		"Steel": 4000,
		   		"BuildingModules": 5000,
		   		"Concrete": 6000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 30,
		   	"ActiveEcoEffect": -3,
		   	"ActiveEnergyCost": 3,
		   	"Name": "lobster_farm",
		   	"GUID": 10153,
		   	"ProductionTime": 30000,
		   	"Product": "Lobster",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 200,
		   	"ProductCost": {
		   		"Tools": 3000,
		   		"Concrete": 8000,
		   		"Steel": 3000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 3,
		   	"Name": "truffle_farm",
		   	"GUID": 10154,
		   	"ProductionTime": 80000,
		   	"Product": "Truffles",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"Concrete": 10000,
		   		"Steel": 6000,
		   		"BuildingModules": 8000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Lobster",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Truffles",
		   	"RawNeeded2": 1500,
		   	"ActiveCost": 30,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 6,
		   	"Name": "gourmet_factory",
		   	"GUID": 10156,
		   	"ProductionTime": 60000,
		   	"Product": "LuxuryMeal",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 50,
		   	"ProductCost": {
		   		"BuildingModules": 2000,
		   		"Tools": 1000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 5,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 1,
		   	"Name": "distillery",
		   	"GUID": 10046,
		   	"ProductionTime": 40000,
		   	"Product": "Liquor",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"Tools": 8000,
		   		"Concrete": 12000,
		   		"Steel": 5000,
		   		"BuildingModules": 7000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Grapes",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Sugar",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 30,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 6,
		   	"Name": "champagne_cellar",
		   	"GUID": 10158,
		   	"ProductionTime": 48000,
		   	"Product": "Champagne",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 200,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"Concrete": 7000,
		   		"Steel": 8000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 3,
		   	"Name": "vineyard",
		   	"GUID": 10157,
		   	"ProductionTime": 96000,
		   	"Product": "Grapes",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 150,
		   	"ProductCost": {
		   		"BuildingModules": 1000,
		   		"Tools": 1000,
		   		"Concrete": 3000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -3,
		   	"ActiveEnergyCost": 4,
		   	"Name": "oil_driller",
		   	"GUID": 10149,
		   	"ProductionTime": 60000,
		   	"Product": "RawOil",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 300,
		   	"ProductCost": {
		   		"BuildingModules": 2000,
		   		"Tools": 3000,
		   		"Concrete": 6000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Oil",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 2,
		   	"Name": "plastic_factory",
		   	"GUID": 10159,
		   	"ProductionTime": 30000,
		   	"Product": "Toys",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"Tools": 12000,
		   		"Steel": 8000,
		   		"BuildingModules": 7000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 30,
		   	"ActiveEcoEffect": -6,
		   	"ActiveEnergyCost": 4,
		   	"Name": "gold_refinery",
		   	"GUID": 10161,
		   	"ProductionTime": 45000,
		   	"Product": "GoldNuggets",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Concrete": 15000,
		   		"Steel": 6000,
		   		"BuildingModules": 8000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "GoldNuggets",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Coal",
		   	"RawNeeded2": 1500,
		   	"ActiveCost": 30,
		   	"ActiveEcoEffect": -5,
		   	"ActiveEnergyCost": 4,
		   	"Name": "gold_smeltery",
		   	"GUID": 10162,
		   	"ProductionTime": 45000,
		   	"Product": "Gold",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 600,
		   	"ProductCost": {
		   		"Tools": 8000,
		   		"Concrete": 18000,
		   		"Steel": 8000,
		   		"BuildingModules": 9000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Gold",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Diamonds",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 40,
		   	"ActiveEcoEffect": -5,
		   	"ActiveEnergyCost": 8,
		   	"Name": "jewelry_manufactory",
		   	"GUID": 10163,
		   	"ProductionTime": 45000,
		   	"Product": "Jewelry",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 100,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Concrete": 12000,
		   		"Steel": 14000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 3,
		   	"Name": "fat_factory",
		   	"GUID": 10164,
		   	"ProductionTime": 120000,
		   	"Product": "OmegaAcids",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"Tools": 20000,
		   		"Concrete": 20000,
		   		"Steel": 15000,
		   		"BuildingModules": 12000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "OmegaAcids",
		   	"RawNeeded1": 1500,
		   	"RawMaterial2": "Algae",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 25,
		   	"ActiveEcoEffect": -8,
		   	"ActiveEnergyCost": 6,
		   	"Name": "chemical_plant",
		   	"GUID": 10166,
		   	"ProductionTime": 60000,
		   	"Product": "SecretIngredient",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1000,
		   	"ProductCost": {
		   		"Tools": 20000,
		   		"Concrete": 25000,
		   		"Steel": 20000,
		   		"BuildingModules": 15000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "SecretIngredient",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "RareEarths",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 80,
		   	"ActiveEcoEffect": -8,
		   	"ActiveEnergyCost": 15,
		   	"Name": "pharmaceutical_factory",
		   	"GUID": 10168,
		   	"ProductionTime": 60000,
		   	"Product": "Pharmaceuticals",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 50,
		   	"ProductCost": {
		   		"BuildingModules": 1000,
		   		"Tools": 3000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": -5,
		   	"ActiveEnergyCost": null,
		   	"Name": "excavator",
		   	"GUID": 10024,
		   	"ProductionTime": 30000,
		   	"Product": "Coal",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Concrete": 8000,
		   		"BuildingModules": 6000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Iron",
		   	"RawNeeded1": 2000,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 20,
		   	"ActiveEcoEffect": -6,
		   	"ActiveEnergyCost": 6,
		   	"Name": "steelwork",
		   	"GUID": 10057,
		   	"ProductionTime": 30000,
		   	"Product": "Steel",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1000,
		   	"ProductCost": {
		   		"Tools": 8000,
		   		"Steel": 12000,
		   		"BuildingModules": 4000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Iron",
		   	"RawNeeded1": 2000,
		   	"RawMaterial2": "Explosives",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 70,
		   	"ActiveEcoEffect": -6,
		   	"ActiveEnergyCost": 6,
		   	"Name": "heavy_arsenal",
		   	"GUID": 10081,
		   	"ProductionTime": 30000,
		   	"Product": "HeavyWeapons",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 600,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Concrete": 8000,
		   		"Steel": 5000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Uranium",
		   	"RawNeeded1": 500,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 60,
		   	"ActiveEcoEffect": -6,
		   	"ActiveEnergyCost": 3,
		   	"Name": "explosive_factory",
		   	"GUID": 10093,
		   	"ProductionTime": 30000,
		   	"Product": "Explosives",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 250,
		   	"ProductCost": {
		   		"BuildingModules": 3000,
		   		"Tools": 4000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Sand",
		   	"RawNeeded1": 500,
		   	"RawMaterial2": "Limestone",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 4,
		   	"Name": "concrete_factory",
		   	"GUID": 10148,
		   	"ProductionTime": 30000,
		   	"Product": "Concrete",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 600,
		   	"ProductCost": {
		   		"Tools": 14000,
		   		"BuildingModules": 5000,
		   		"Steel": 8000,
		   		"Concrete": 4000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Uranium",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 60,
		   	"ActiveEcoEffect": -6,
		   	"ActiveEnergyCost": 4,
		   	"Name": "fuel_assembly_factory",
		   	"GUID": 10053,
		   	"ProductionTime": 120000,
		   	"Product": "FuleRod",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 50,
		   	"ProductCost": {
		   		"Tools": 1000
		   	},
		   	"BuildingLevel": null,
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 5,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 2,
		   	"Name": "basalt_crusher",
		   	"GUID": 10261,
		   	"ProductionTime": 40000,
		   	"Product": "Granulate",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "energy",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 350,
		   	"ProductCost": {
		   		"BuildingModules": 1000,
		   		"Tools": 4000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Coal",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": -15,
		   	"ActiveEnergyCost": null,
		   	"Name": "coalpowerplant",
		   	"GUID": 10025,
		   	"ProductionTime": 30000,
		   	"Product": null,
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "tycoons",
		   	"BuildingType": "energy",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 3000,
		   	"ProductCost": {
		   		"BuildingModules": 10000,
		   		"Tools": 24000,
		   		"Steel": 36000,
		   		"Concrete": 30000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "FuleRod",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 100,
		   	"ActiveEcoEffect": -10,
		   	"ActiveEnergyCost": null,
		   	"Name": "nuclearpowerplant",
		   	"GUID": 10050,
		   	"ProductionTime": 120000,
		   	"Product": null,
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"BuildingModules": 2000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "ecos_pioneer_residence",
		   	"GUID": 10011,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 8
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"BuildingModules": 2000,
		   		"Tools": 1000
		   	},
		   	"BuildingLevel": "Ecos2",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "ecos_villager_residence",
		   	"GUID": 10013,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 15
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"Tools": 3000,
		   		"Wood": 3000,
		   		"BuildingModules": 4000
		   	},
		   	"BuildingLevel": "Ecos3",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "ecos_builder_residence",
		   	"GUID": 10119,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 25
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Wood": 6000,
		   		"Glass": 4000,
		   		"BuildingModules": 5000
		   	},
		   	"BuildingLevel": "Ecos4",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "ecos_creator_residence",
		   	"GUID": 10117,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 40
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 200,
		   	"ProductCost": {
		   		"BuildingModules": 2000,
		   		"Tools": 2000,
		   		"Wood": 3000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 5,
		   	"ActiveEcoEffect": -1,
		   	"ActiveEnergyCost": 1,
		   	"Name": "vegetable_farm",
		   	"GUID": 10012,
		   	"ProductionTime": 40000,
		   	"Product": "Vegetables",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 250,
		   	"ProductCost": {
		   		"BuildingModules": 1000,
		   		"Tools": 3000,
		   		"Wood": 2000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": -1,
		   	"ActiveEnergyCost": 1,
		   	"Name": "rice_farm",
		   	"GUID": 10174,
		   	"ProductionTime": null,
		   	"Product": "Soy",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 300,
		   	"ProductCost": {
		   		"BuildingModules": 2000,
		   		"Tools": 2000,
		   		"Wood": 4000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": "Soy",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Vegetables",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -3,
		   	"ActiveEnergyCost": 2,
		   	"Name": "health_food_factory",
		   	"GUID": 10176,
		   	"ProductionTime": null,
		   	"Product": "HealthFood",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 150,
		   	"ProductCost": {
		   		"Tools": 5000,
		   		"Wood": 3000,
		   		"Glass": 4000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 2,
		   	"Name": "grain_farm",
		   	"GUID": 10177,
		   	"ProductionTime": 90000,
		   	"Product": "Grain",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Wood": 2000,
		   		"Glass": 6000,
		   		"BuildingModules": 4000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": "Grain",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 25,
		   	"ActiveEcoEffect": -5,
		   	"ActiveEnergyCost": 4,
		   	"Name": "water_mill",
		   	"GUID": 10179,
		   	"ProductionTime": 30000,
		   	"Product": "Flour",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 300,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"Wood": 4000,
		   		"Glass": 10000,
		   		"BuildingModules": 8000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": "Flour",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Vegetables",
		   	"RawNeeded2": 1500,
		   	"ActiveCost": 20,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 2,
		   	"Name": "bakery",
		   	"GUID": 10180,
		   	"ProductionTime": 60000,
		   	"Product": "ComfortFood",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 100,
		   	"ProductCost": {
		   		"BuildingModules": 2000,
		   		"Tools": 1000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 1,
		   	"Name": "tea_plantation",
		   	"GUID": 10048,
		   	"ProductionTime": 40000,
		   	"Product": "Tea",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 300,
		   	"ProductCost": {
		   		"Tools": 5000,
		   		"Wood": 5000,
		   		"Glass": 3000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -1,
		   	"ActiveEnergyCost": 1,
		   	"Name": "fruit_plantation",
		   	"GUID": 10181,
		   	"ProductionTime": 96000,
		   	"Product": "Fruits",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"Tools": 3000,
		   		"Wood": 6000,
		   		"Glass": 4000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 20,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 2,
		   	"Name": "dairy_farm",
		   	"GUID": 10183,
		   	"ProductionTime": 48000,
		   	"Product": "Milk",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 3000,
		   		"Wood": 6000,
		   		"Glass": 8000,
		   		"BuildingModules": 6000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": "Fruits",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Milk",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 30,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 2,
		   	"Name": "health_drink_factory",
		   	"GUID": 10185,
		   	"ProductionTime": 48000,
		   	"Product": "HealthDrink",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 300,
		   	"ProductCost": {
		   		"BuildingModules": 1000,
		   		"Tools": 6000,
		   		"Wood": 6000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": "Microchips",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 20,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 4,
		   	"Name": "communicator_factory",
		   	"GUID": 10186,
		   	"ProductionTime": 30000,
		   	"Product": "Communicator",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 700,
		   	"ProductCost": {
		   		"Tools": 10000,
		   		"Wood": 12000,
		   		"Glass": 8000,
		   		"BuildingModules": 8000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": "RareEarths",
		   	"RawNeeded1": 500,
		   	"RawMaterial2": "Diamonds",
		   	"RawNeeded2": 500,
		   	"ActiveCost": 50,
		   	"ActiveEcoEffect": -12,
		   	"ActiveEnergyCost": 25,
		   	"Name": "holograph_factory",
		   	"GUID": 10187,
		   	"ProductionTime": 40000,
		   	"Product": "Holographer",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Wood": 8000,
		   		"Glass": 6000,
		   		"BuildingModules": 4000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 50,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 4,
		   	"Name": "corn_farm",
		   	"GUID": 10188,
		   	"ProductionTime": 120000,
		   	"Product": "Corn",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1000,
		   	"ProductCost": {
		   		"Tools": 10000,
		   		"Wood": 12000,
		   		"Glass": 8000,
		   		"BuildingModules": 8000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": "Corn",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Algae",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 70,
		   	"ActiveEcoEffect": -8,
		   	"ActiveEnergyCost": 15,
		   	"Name": "biopolymer_factory",
		   	"GUID": 10190,
		   	"ProductionTime": 60000,
		   	"Product": "Biopolymer",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1200,
		   	"ProductCost": {
		   		"Tools": 12000,
		   		"Wood": 18000,
		   		"Glass": 16000,
		   		"BuildingModules": 12000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": "Microchips",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Biopolymer",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 90,
		   	"ActiveEcoEffect": -8,
		   	"ActiveEnergyCost": 25,
		   	"Name": "robot_factory",
		   	"GUID": 10191,
		   	"ProductionTime": 60000,
		   	"Product": "HomeRobot",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"BuildingModules": 1000,
		   		"Tools": 2000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 5,
		   	"ActiveEcoEffect": -3,
		   	"ActiveEnergyCost": 2,
		   	"Name": "saw_mill",
		   	"GUID": 10037,
		   	"ProductionTime": 60000,
		   	"Product": "Wood",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"BuildingModules": 4000,
		   		"Tools": 5000,
		   		"Wood": 5000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": "Sand",
		   	"RawNeeded1": 500,
		   	"RawMaterial2": "Limestone",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 60,
		   	"ActiveEcoEffect": -6,
		   	"ActiveEnergyCost": 3,
		   	"Name": "glassworks",
		   	"GUID": 10114,
		   	"ProductionTime": 30000,
		   	"Product": "Glass",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "ecos",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 100,
		   	"ProductCost": {
		   		"Tools": 1000
		   	},
		   	"BuildingLevel": "Ecos1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 5,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 1,
		   	"Name": "rubble_recycler",
		   	"GUID": 10102,
		   	"ProductionTime": 40000,
		   	"Product": "Granulate",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"BuildingModules": 3000,
		   		"Tools": 2000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "techs_laborant_residence",
		   	"GUID": 10088,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 5
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Carbon": 4000,
		   		"BuildingModules": 4000
		   	},
		   	"BuildingLevel": "Techs2",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "techs_scientist_residence",
		   	"GUID": 10209,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 30
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 2000,
		   		"BuildingModules": 6000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 40,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 3,
		   	"Name": "algae_farm",
		   	"GUID": 10031,
		   	"ProductionTime": 60000,
		   	"Product": "Algae",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 600,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"BuildingModules": 8000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Algae",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 40,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 6,
		   	"Name": "functional_food_factory",
		   	"GUID": 10194,
		   	"ProductionTime": 60000,
		   	"Product": "FunctionalFood",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"Carbon": 3000,
		   		"BuildingModules": 6000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 40,
		   	"ActiveEcoEffect": -3,
		   	"ActiveEnergyCost": 3,
		   	"Name": "coffee_plantation",
		   	"GUID": 10195,
		   	"ProductionTime": 48000,
		   	"Product": "Caffeine",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Carbon": 8000,
		   		"BuildingModules": 8000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Caffeine",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Sugar",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 60,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 6,
		   	"Name": "energy_drink_factory",
		   	"GUID": 10197,
		   	"ProductionTime": 48000,
		   	"Product": "EnergyDrink",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 8000,
		   		"BuildingModules": 12000,
		   		"Carbon": 10000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Oil",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 40,
		   	"ActiveEcoEffect": -6,
		   	"ActiveEnergyCost": 6,
		   	"Name": "fuel_factory",
		   	"GUID": 10086,
		   	"ProductionTime": 30000,
		   	"Product": "Kerosene",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 2000,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"BuildingModules": 6000,
		   		"Carbon": 6000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Iron",
		   	"RawNeeded1": 1500,
		   	"RawMaterial2": "Microchips",
		   	"RawNeeded2": 3000,
		   	"ActiveCost": 50,
		   	"ActiveEcoEffect": -8,
		   	"ActiveEnergyCost": 8,
		   	"Name": "advanced_arsenal",
		   	"GUID": 10100,
		   	"ProductionTime": 45000,
		   	"Product": "AdvancedWeapons",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 1000,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"Carbon": 8000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 60,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 4,
		   	"Name": "recycling_station",
		   	"GUID": 10108,
		   	"ProductionTime": null,
		   	"Product": "BuildingModules",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1500,
		   	"ProductCost": {
		   		"Tools": 5000,
		   		"BuildingModules": 8000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Coal",
		   	"RawNeeded1": 1500,
		   	"RawMaterial2": "Oil",
		   	"RawNeeded2": 1500,
		   	"ActiveCost": 40,
		   	"ActiveEcoEffect": -6,
		   	"ActiveEnergyCost": 6,
		   	"Name": "carbon_factory",
		   	"GUID": 10112,
		   	"ProductionTime": 45000,
		   	"Product": "Carbon",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 100,
		   	"ProductCost": {
		   		"Tools": 2000,
		   		"BuildingModules": 1000
		   	},
		   	"BuildingLevel": null,
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 5,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 1,
		   	"Name": "fishery",
		   	"GUID": 10045,
		   	"ProductionTime": 30000,
		   	"Product": "Fish",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 8000,
		   		"BuildingModules": 7000
		   	},
		   	"BuildingLevel": null,
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 30,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 3,
		   	"Name": "sugar_beet_plantation",
		   	"GUID": 10198,
		   	"ProductionTime": 48000,
		   	"Product": "Sugar",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 600,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"BuildingModules": 2000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 2,
		   	"Name": "iron_mine",
		   	"GUID": 10054,
		   	"ProductionTime": 30000,
		   	"Product": "IronOre",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"BuildingModules": 2000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Coal",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "IronOre",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": -3,
		   	"ActiveEnergyCost": 2,
		   	"Name": "iron_smeltery",
		   	"GUID": 10055,
		   	"ProductionTime": 30000,
		   	"Product": "Iron",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 3000,
		   		"BuildingModules": 2000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Iron",
		   	"RawNeeded1": 500,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 3,
		   	"Name": "tool_factory",
		   	"GUID": 10056,
		   	"ProductionTime": 30000,
		   	"Product": "Tools",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 600,
		   	"ProductCost": {
		   		"Tools": 2000,
		   		"BuildingModules": 2000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 2,
		   	"Name": "coal_mine",
		   	"GUID": 10098,
		   	"ProductionTime": 15000,
		   	"Product": "Coal",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 750,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"BuildingModules": 1000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 2,
		   	"Name": "copper_mine",
		   	"GUID": 10200,
		   	"ProductionTime": 15000,
		   	"Product": "Copper",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 1000,
		   	"ProductCost": {
		   		"Tools": 12000,
		   		"BuildingModules": 7000,
		   		"Concrete": 8000,
		   		"Steel": 2000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 50,
		   	"ActiveEcoEffect": -6,
		   	"ActiveEnergyCost": 4,
		   	"Name": "uranium_mine",
		   	"GUID": 10052,
		   	"ProductionTime": 120000,
		   	"Product": "Uranium",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 200,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"BuildingModules": 2000
		   	},
		   	"BuildingLevel": null,
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 20,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 2,
		   	"Name": "sand_extractor",
		   	"GUID": 10080,
		   	"ProductionTime": null,
		   	"Product": "Sand",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 300,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"BuildingModules": 4000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 20,
		   	"ActiveEcoEffect": -2,
		   	"ActiveEnergyCost": 2,
		   	"Name": "limestone_quarry",
		   	"GUID": 10083,
		   	"ProductionTime": 30000,
		   	"Product": "Limestone",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"BuildingModules": 1000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Sand",
		   	"RawNeeded1": 500,
		   	"RawMaterial2": "Copper",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 10,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 2,
		   	"Name": "chip_factory",
		   	"GUID": 10201,
		   	"ProductionTime": 30000,
		   	"Product": "Microchips",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1000,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"BuildingModules": 4000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "Iron",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 30,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 4,
		   	"Name": "arsenal",
		   	"GUID": 10120,
		   	"ProductionTime": 30000,
		   	"Product": "Weapons",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 3000,
		   	"ProductCost": {
		   		"Tools": 12000,
		   		"BuildingModules": 18000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 50,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 20,
		   	"Name": "oilrig",
		   	"GUID": 10075,
		   	"ProductionTime": null,
		   	"Product": "RawOil",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"BuildingModules": 2000,
		   		"Tools": 6000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "RawOil",
		   	"RawNeeded1": 1500,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 15,
		   	"ActiveEcoEffect": -4,
		   	"ActiveEnergyCost": 2,
		   	"Name": "oil_refinery",
		   	"GUID": 10092,
		   	"ProductionTime": 30000,
		   	"Product": "Oil",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 1000,
		   	"ProductCost": {
		   		"BuildingModules": 12000,
		   		"Tools": 6000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 40,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 8,
		   	"Name": "manganese_miner",
		   	"GUID": 10220,
		   	"ProductionTime": 45000,
		   	"Product": "ManganeseNodules",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1500,
		   	"ProductCost": {
		   		"BuildingModules": 15000,
		   		"Tools": 12000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": "ManganeseNodules",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 60,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 7,
		   	"Name": "manganese_harvesting_station",
		   	"GUID": 10202,
		   	"ProductionTime": 90000,
		   	"Product": "RareEarths",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 2000,
		   	"ProductCost": {
		   		"BuildingModules": 20000,
		   		"Tools": 12000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 60,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 10,
		   	"Name": "diamond_harvesting_station",
		   	"GUID": 10204,
		   	"ProductionTime": 45000,
		   	"Product": "Diamonds",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 4000,
		   	"ProductCost": {
		   		"BuildingModules": 50000,
		   		"Tools": 30000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 100,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 25,
		   	"Name": "black_smoker_miner",
		   	"GUID": 10239,
		   	"ProductionTime": null,
		   	"Product": "GoldNuggets",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 4000,
		   	"ProductCost": {
		   		"BuildingModules": 50000,
		   		"Tools": 30000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 150,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 25,
		   	"Name": "black_smoker_miner_gold",
		   	"GUID": 10206,
		   	"ProductionTime": 40000,
		   	"Product": "GoldNuggets",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 4000,
		   	"ProductCost": {
		   		"BuildingModules": 50000,
		   		"Tools": 30000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 100,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 25,
		   	"Name": "black_smoker_miner_copper",
		   	"GUID": 10207,
		   	"ProductionTime": 15000,
		   	"Product": "Copper",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 4000,
		   	"ProductCost": {
		   		"BuildingModules": 50000,
		   		"Tools": 30000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 200,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 25,
		   	"Name": "black_smoker_miner_uranium",
		   	"GUID": 10208,
		   	"ProductionTime": 60000,
		   	"Product": "Uranium",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 4000,
		   	"ProductCost": {
		   		"BuildingModules": 50000,
		   		"Tools": 30000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 100,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 25,
		   	"Name": "black_smoker_miner_iron",
		   	"GUID": 10269,
		   	"ProductionTime": null,
		   	"Product": "IronOre",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "others",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 50,
		   	"ProductCost": {
		   		"Tools": 2000
		   	},
		   	"BuildingLevel": null,
		   	"RawMaterial1": "Granulate",
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 5,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 1,
		   	"Name": "smelting_works",
		   	"GUID": 10262,
		   	"ProductionTime": 40000,
		   	"Product": "BuildingModules",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "residence",
		   	"Template": "ResidenceBuilding",
		   	"CreditCost": null,
		   	"ProductCost": {
		   		"Tools": 12000,
		   		"Carbon": 5000,
		   		"BuildingModules": 8000
		   	},
		   	"BuildingLevel": "Techs3",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": null,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": null,
		   	"Name": "techs_genius_residence",
		   	"GUID": 40000006,
		   	"ProductionTime": null,
		   	"Product": null,
		   	"MaxResidentCount": 50
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 400,
		   	"ProductCost": {
		   		"Tools": 2000,
		   		"BuildingModules": 4000,
		   		"Carbon": 1000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 30,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 3,
		   	"Name": "gene_pharming_laboratory",
		   	"GUID": 40000007,
		   	"ProductionTime": 60000,
		   	"Product": "Enzymes",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 3000,
		   	"ProductCost": {
		   		"Tools": 20000,
		   		"Carbon": 5000,
		   		"BuildingModules": 20000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 160,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 35,
		   	"Name": "electronic_recycler",
		   	"GUID": 40000009,
		   	"ProductionTime": null,
		   	"Product": "Microchips",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 600,
		   	"ProductCost": {
		   		"Tools": 2000,
		   		"BuildingModules": 6000,
		   		"Carbon": 2000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 45,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 12,
		   	"Name": "sponges_harvesting_station",
		   	"GUID": 40000010,
		   	"ProductionTime": 90000,
		   	"Product": "Sponges",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1500,
		   	"ProductCost": {
		   		"Tools": 8000,
		   		"BuildingModules": 12000,
		   		"Carbon": 5000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Sponges",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Microchips",
		   	"RawNeeded2": 1500,
		   	"ActiveCost": 70,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 20,
		   	"Name": "neurotechnology_factory",
		   	"GUID": 40000012,
		   	"ProductionTime": 90000,
		   	"Product": "NeuroImplants",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1200,
		   	"ProductCost": {
		   		"Tools": 6000,
		   		"BuildingModules": 10000,
		   		"Carbon": 6000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "OmegaAcids",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Lithium",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 40,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 15,
		   	"Name": "energy_cell_factory",
		   	"GUID": 40000013,
		   	"ProductionTime": 60000,
		   	"Product": "EnergyCells",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 800,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"BuildingModules": 8000,
		   		"Carbon": 6000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 30,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 10,
		   	"Name": "lithium_harvesting_station",
		   	"GUID": 40000014,
		   	"ProductionTime": 120000,
		   	"Product": "Lithium",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 3000,
		   	"ProductCost": {
		   		"Tools": 25000,
		   		"BuildingModules": 25000,
		   		"Carbon": 10000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Exoskeleton",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Biopolymer",
		   	"RawNeeded2": 1500,
		   	"ActiveCost": 90,
		   	"ActiveEcoEffect": -15,
		   	"ActiveEnergyCost": 40,
		   	"Name": "bio_suite_factory",
		   	"GUID": 40000016,
		   	"ProductionTime": 90000,
		   	"Product": "BioSuites",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1500,
		   	"ProductCost": {
		   		"Tools": 10000,
		   		"BuildingModules": 15000,
		   		"Carbon": 8000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Platinum",
		   	"RawNeeded1": 500,
		   	"RawMaterial2": "Iron",
		   	"RawNeeded2": 1500,
		   	"ActiveCost": 80,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 25,
		   	"Name": "equipment_factory",
		   	"GUID": 40000017,
		   	"ProductionTime": 45000,
		   	"Product": "LaboratoryInstruments",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1000,
		   	"ProductCost": {
		   		"Tools": 4000,
		   		"BuildingModules": 8000,
		   		"Carbon": 3000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Platinum",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "EnergyCells",
		   	"RawNeeded2": 1500,
		   	"ActiveCost": 50,
		   	"ActiveEcoEffect": -10,
		   	"ActiveEnergyCost": 20,
		   	"Name": "cybernatic_factory",
		   	"GUID": 40000018,
		   	"ProductionTime": 90000,
		   	"Product": "Exoskeleton",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FactoryBuilding",
		   	"CreditCost": 1000,
		   	"ProductCost": {
		   		"Tools": 5000,
		   		"BuildingModules": 12000,
		   		"Carbon": 5000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": "Enzymes",
		   	"RawNeeded1": null,
		   	"RawMaterial2": "Coral",
		   	"RawNeeded2": 1000,
		   	"ActiveCost": 60,
		   	"ActiveEcoEffect": -6,
		   	"ActiveEnergyCost": 20,
		   	"Name": "coral_extract_factory",
		   	"GUID": 40000019,
		   	"ProductionTime": 60000,
		   	"Product": "CoralExtract",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 2000,
		   	"ProductCost": {
		   		"BuildingModules": 50000,
		   		"Tools": 30000,
		   		"Carbon": 10000
		   	},
		   	"BuildingLevel": "Tycoons1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 80,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 30,
		   	"Name": "black_smoker_miner_platinum",
		   	"GUID": 40000025,
		   	"ProductionTime": 90000,
		   	"Product": "Platinum",
		   	"MaxResidentCount": 0
		   },
		   {
		   	"Faction": "techs",
		   	"BuildingType": "production",
		   	"Template": "FarmBuilding",
		   	"CreditCost": 500,
		   	"ProductCost": {
		   		"Tools": 3000,
		   		"BuildingModules": 4000,
		   		"Carbon": 1000
		   	},
		   	"BuildingLevel": "Techs1",
		   	"RawMaterial1": null,
		   	"RawNeeded1": null,
		   	"RawMaterial2": null,
		   	"RawNeeded2": null,
		   	"ActiveCost": 40,
		   	"ActiveEcoEffect": null,
		   	"ActiveEnergyCost": 4,
		   	"Name": "coral_breeder",
		   	"GUID": 40000159,
		   	"ProductionTime": 30000,
		   	"Product": "Coral",
		   	"MaxResidentCount": 0
		   }
		],
		populations: [
		   {
		   	"PopulationLevel": "Ecos1",
		   	"Demands": {
		   		"Fish": 800,
		   		"Tea": 400
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 80
		   },
		   {
		   	"PopulationLevel": "Ecos2",
		   	"Demands": {
		   		"Fish": 550,
		   		"HealthFood": 450,
		   		"Tea": 400,
		   		"Communicator": 350
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 60
		   },
		   {
		   	"PopulationLevel": "Ecos3",
		   	"Demands": {
		   		"Fish": 350,
		   		"ComfortFood": 150,
		   		"HealthFood": 350,
		   		"Tea": 300,
		   		"HealthDrink": 150,
		   		"Communicator": 250
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 40
		   },
		   {
		   	"PopulationLevel": "Ecos4",
		   	"Demands": {
		   		"Fish": 250,
		   		"ComfortFood": 110,
		   		"HealthFood": 300,
		   		"Tea": 200,
		   		"HealthDrink": 110,
		   		"Communicator": 160,
		   		"Holographer": 200,
		   		"HomeRobot": 150
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 0
		   },
		   {
		   	"PopulationLevel": "Techs1",
		   	"Demands": {
		   		"Fish": 250,
		   		"FunctionalFood": 335,
		   		"EnergyDrink": 415
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 60
		   },
		   {
		   	"PopulationLevel": "Techs2",
		   	"Demands": {
		   		"Fish": 250,
		   		"FunctionalFood": 225,
		   		"EnergyDrink": 170,
		   		"CoralExtract": 200,
		   		"NeuroImplants": 100
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 30
		   },
		   {
		   	"PopulationLevel": "Techs3",
		   	"Demands": {
		   		"Fish": 125,
		   		"FunctionalFood": 80,
		   		"EnergyDrink": 80,
		   		"CoralExtract": 150,
		   		"LaboratoryInstruments": 300,
		   		"NeuroImplants": 100,
		   		"BioSuites": 45
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 0
		   },
		   {
		   	"PopulationLevel": "Tycoons1",
		   	"Demands": {
		   		"Fish": 800,
		   		"Liquor": 500
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 80
		   },
		   {
		   	"PopulationLevel": "Tycoons2",
		   	"Demands": {
		   		"Fish": 550,
		   		"TVDinner": 520,
		   		"Liquor": 450,
		   		"Toys": 300
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 60
		   },
		   {
		   	"PopulationLevel": "Tycoons3",
		   	"Demands": {
		   		"Fish": 350,
		   		"TVDinner": 420,
		   		"LuxuryMeal": 120,
		   		"Liquor": 500,
		   		"Champagne": 120,
		   		"Toys": 200
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 40
		   },
		   {
		   	"PopulationLevel": "Tycoons4",
		   	"Demands": {
		   		"Fish": 250,
		   		"TVDinner": 350,
		   		"LuxuryMeal": 90,
		   		"Liquor": 200,
		   		"Champagne": 90,
		   		"Toys": 120,
		   		"Jewelry": 200,
		   		"Pharmaceuticals": 175
		   	},
		   	"ResidenceUpgradeAmountMaxPercent": 0
		   }
		],
		productIconGUIDs: [
		   {
		   	"Product": "Wood",
		   	"Icon": 2500000
		   },
		   {
		   	"Product": "Tools",
		   	"Icon": 2500001
		   },
		   {
		   	"Product": "Meat",
		   	"Icon": 2500003
		   },
		   {
		   	"Product": "Coal",
		   	"Icon": 2500005
		   },
		   {
		   	"Product": "Vegetables",
		   	"Icon": 2500002
		   },
		   {
		   	"Product": "Fish",
		   	"Icon": 2500004
		   },
		   {
		   	"Product": "Algae",
		   	"Icon": 2500013
		   },
		   {
		   	"Product": "FuleRod",
		   	"Icon": 2500012
		   },
		   {
		   	"Product": "Iron",
		   	"Icon": 2500009
		   },
		   {
		   	"Product": "IronOre",
		   	"Icon": 2500008
		   },
		   {
		   	"Product": "Liquor",
		   	"Icon": 2500007
		   },
		   {
		   	"Product": "Steel",
		   	"Icon": 2500010
		   },
		   {
		   	"Product": "Tea",
		   	"Icon": 2500006
		   },
		   {
		   	"Product": "Uranium",
		   	"Icon": 2500011
		   },
		   {
		   	"Product": "BuildingModules",
		   	"Icon": 2500014
		   },
		   {
		   	"Product": "Glass",
		   	"Icon": 2500015
		   },
		   {
		   	"Product": "Concrete",
		   	"Icon": 2500016
		   },
		   {
		   	"Product": "Carbon",
		   	"Icon": 2500017
		   },
		   {
		   	"Product": "ComfortFood",
		   	"Icon": 2500018
		   },
		   {
		   	"Product": "HealthFood",
		   	"Icon": 2500019
		   },
		   {
		   	"Product": "TVDinner",
		   	"Icon": 2500020
		   },
		   {
		   	"Product": "LuxuryMeal",
		   	"Icon": 2500021
		   },
		   {
		   	"Product": "FunctionalFood",
		   	"Icon": 2500022
		   },
		   {
		   	"Product": "HealthDrink",
		   	"Icon": 2500023
		   },
		   {
		   	"Product": "Champagne",
		   	"Icon": 2500024
		   },
		   {
		   	"Product": "EnergyDrink",
		   	"Icon": 2500025
		   },
		   {
		   	"Product": "Toys",
		   	"Icon": 2500026
		   },
		   {
		   	"Product": "Jewelry",
		   	"Icon": 2500027
		   },
		   {
		   	"Product": "Pharmaceuticals",
		   	"Icon": 2500028
		   },
		   {
		   	"Product": "Communicator",
		   	"Icon": 2500029
		   },
		   {
		   	"Product": "Holographer",
		   	"Icon": 2500030
		   },
		   {
		   	"Product": "HomeRobot",
		   	"Icon": 2500031
		   },
		   {
		   	"Product": "Copper",
		   	"Icon": 2500032
		   },
		   {
		   	"Product": "Limestone",
		   	"Icon": 2500033
		   },
		   {
		   	"Product": "Sand",
		   	"Icon": 2500034
		   },
		   {
		   	"Product": "RawOil",
		   	"Icon": 2500035
		   },
		   {
		   	"Product": "Oil",
		   	"Icon": 2500036
		   },
		   {
		   	"Product": "Microchips",
		   	"Icon": 2500037
		   },
		   {
		   	"Product": "Sugar",
		   	"Icon": 2500038
		   },
		   {
		   	"Product": "RareEarths",
		   	"Icon": 2500039
		   },
		   {
		   	"Product": "Diamonds",
		   	"Icon": 2500041
		   },
		   {
		   	"Product": "SuperFlavor",
		   	"Icon": 2500042
		   },
		   {
		   	"Product": "Explosives",
		   	"Icon": 2500044
		   },
		   {
		   	"Product": "Lobster",
		   	"Icon": 2500045
		   },
		   {
		   	"Product": "Truffles",
		   	"Icon": 2500046
		   },
		   {
		   	"Product": "Grapes",
		   	"Icon": 2500047
		   },
		   {
		   	"Product": "GoldNuggets",
		   	"Icon": 2500048
		   },
		   {
		   	"Product": "Gold",
		   	"Icon": 2500049
		   },
		   {
		   	"Product": "OmegaAcids",
		   	"Icon": 2500050
		   },
		   {
		   	"Product": "SecretIngredient",
		   	"Icon": 2500051
		   },
		   {
		   	"Product": "Soy",
		   	"Icon": 2500053
		   },
		   {
		   	"Product": "Fruits",
		   	"Icon": 2500054
		   },
		   {
		   	"Product": "Milk",
		   	"Icon": 2500055
		   },
		   {
		   	"Product": "Grain",
		   	"Icon": 2500056
		   },
		   {
		   	"Product": "Flour",
		   	"Icon": 2500057
		   },
		   {
		   	"Product": "Corn",
		   	"Icon": 2500058
		   },
		   {
		   	"Product": "Biopolymer",
		   	"Icon": 2500059
		   },
		   {
		   	"Product": "Caffeine",
		   	"Icon": 2500060
		   },
		   {
		   	"Product": "Kerosene",
		   	"Icon": 2500061
		   },
		   {
		   	"Product": "Weapons",
		   	"Icon": 2500062
		   },
		   {
		   	"Product": "HeavyWeapons",
		   	"Icon": 2500063
		   },
		   {
		   	"Product": "AdvancedWeapons",
		   	"Icon": 2500064
		   },
		   {
		   	"Product": "ManganeseNodules",
		   	"Icon": 2500065
		   },
		   {
		   	"Product": "Granulate",
		   	"Icon": 2500066
		   },
		   {
		   	"Product": "CoralExtract",
		   	"Icon": 41200000
		   },
		   {
		   	"Product": "LaboratoryInstruments",
		   	"Icon": 41200001
		   },
		   {
		   	"Product": "NeuroImplants",
		   	"Icon": 41200002
		   },
		   {
		   	"Product": "BioSuites",
		   	"Icon": 41200003
		   },
		   {
		   	"Product": "Enzymes",
		   	"Icon": 41200004
		   },
		   {
		   	"Product": "Platinum",
		   	"Icon": 41200005
		   },
		   {
		   	"Product": "Sponges",
		   	"Icon": 41200006
		   },
		   {
		   	"Product": "Lithium",
		   	"Icon": 41200007
		   },
		   {
		   	"Product": "EnergyCells",
		   	"Icon": 41200008
		   },
		   {
		   	"Product": "Exoskeleton",
		   	"Icon": 41200009
		   },
		   {
		   	"Product": "Coral",
		   	"Icon": 41200015
		   }
		],
		icons: [
		   {
		   	"GUID": 10011,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 70
			   }
		   	]
		   },
		   {
		   	"GUID": 10012,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 2
			   }
		   	]
		   },
		   {
		   	"GUID": 10013,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 70
			   }
		   	]
		   },
		   {
		   	"GUID": 10021,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 71
			   }
		   	]
		   },
		   {
		   	"GUID": 10022,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 3
			   }
		   	]
		   },
		   {
		   	"GUID": 10024,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 5
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 197
			   }
		   	]
		   },
		   {
		   	"GUID": 10025,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 12
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 304
			   }
		   	]
		   },
		   {
		   	"GUID": 10031,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 31
			   }
		   	]
		   },
		   {
		   	"GUID": 10037,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 0
			   }
		   	]
		   },
		   {
		   	"GUID": 10045,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 4
			   }
		   	]
		   },
		   {
		   	"GUID": 10046,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 20
			   }
		   	]
		   },
		   {
		   	"GUID": 10048,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 19
			   }
		   	]
		   },
		   {
		   	"GUID": 10050,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 21
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 304
			   }
		   	]
		   },
		   {
		   	"GUID": 10052,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 22
			   }
		   	]
		   },
		   {
		   	"GUID": 10053,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 30
			   }
		   	]
		   },
		   {
		   	"GUID": 10054,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 17
			   }
		   	]
		   },
		   {
		   	"GUID": 10055,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 29
			   }
		   	]
		   },
		   {
		   	"GUID": 10056,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 1
			   }
		   	]
		   },
		   {
		   	"GUID": 10057,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 34
			   }
		   	]
		   },
		   {
		   	"GUID": 10075,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 124
			   }
		   	]
		   },
		   {
		   	"GUID": 10076,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 71
			   }
		   	]
		   },
		   {
		   	"GUID": 10080,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 63
			   }
		   	]
		   },
		   {
		   	"GUID": 10081,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 55
			   }
		   	]
		   },
		   {
		   	"GUID": 10083,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 61
			   }
		   	]
		   },
		   {
		   	"GUID": 10086,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 47
			   }
		   	]
		   },
		   {
		   	"GUID": 10088,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 72
			   }
		   	]
		   },
		   {
		   	"GUID": 10092,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 51
			   }
		   	]
		   },
		   {
		   	"GUID": 10093,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 56
			   }
		   	]
		   },
		   {
		   	"GUID": 10098,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 5
			   }
		   	]
		   },
		   {
		   	"GUID": 10100,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 54
			   }
		   	]
		   },
		   {
		   	"GUID": 10102,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 212
			   }
		   	]
		   },
		   {
		   	"GUID": 10108,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 211
			   }
		   	]
		   },
		   {
		   	"GUID": 10112,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 73
			   }
		   	]
		   },
		   {
		   	"GUID": 10114,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 89
			   }
		   	]
		   },
		   {
		   	"GUID": 10116,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 71
			   }
		   	]
		   },
		   {
		   	"GUID": 10117,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 70
			   }
		   	]
		   },
		   {
		   	"GUID": 10118,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 71
			   }
		   	]
		   },
		   {
		   	"GUID": 10119,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 70
			   }
		   	]
		   },
		   {
		   	"GUID": 10120,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 53
			   }
		   	]
		   },
		   {
		   	"GUID": 10148,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 151
			   }
		   	]
		   },
		   {
		   	"GUID": 10149,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 124
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 197
			   }
		   	]
		   },
		   {
		   	"GUID": 10150,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 153
			   }
		   	]
		   },
		   {
		   	"GUID": 10152,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 203
			   }
		   	]
		   },
		   {
		   	"GUID": 10153,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 154
			   }
		   	]
		   },
		   {
		   	"GUID": 10154,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 155
			   }
		   	]
		   },
		   {
		   	"GUID": 10156,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 156
			   }
		   	]
		   },
		   {
		   	"GUID": 10157,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 157
			   }
		   	]
		   },
		   {
		   	"GUID": 10158,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 158
			   }
		   	]
		   },
		   {
		   	"GUID": 10159,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 160
			   }
		   	]
		   },
		   {
		   	"GUID": 10161,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 161
			   }
		   	]
		   },
		   {
		   	"GUID": 10162,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 162
			   }
		   	]
		   },
		   {
		   	"GUID": 10163,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 163
			   }
		   	]
		   },
		   {
		   	"GUID": 10164,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 164
			   }
		   	]
		   },
		   {
		   	"GUID": 10166,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 165
			   }
		   	]
		   },
		   {
		   	"GUID": 10168,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 167
			   }
		   	]
		   },
		   {
		   	"GUID": 10174,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 194
			   }
		   	]
		   },
		   {
		   	"GUID": 10176,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 134
			   }
		   	]
		   },
		   {
		   	"GUID": 10177,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 135
			   }
		   	]
		   },
		   {
		   	"GUID": 10179,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 136
			   }
		   	]
		   },
		   {
		   	"GUID": 10180,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 137
			   }
		   	]
		   },
		   {
		   	"GUID": 10181,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 138
			   }
		   	]
		   },
		   {
		   	"GUID": 10183,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 139
			   }
		   	]
		   },
		   {
		   	"GUID": 10185,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 140
			   }
		   	]
		   },
		   {
		   	"GUID": 10186,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 141
			   }
		   	]
		   },
		   {
		   	"GUID": 10187,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 142
			   }
		   	]
		   },
		   {
		   	"GUID": 10188,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 143
			   }
		   	]
		   },
		   {
		   	"GUID": 10190,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 144
			   }
		   	]
		   },
		   {
		   	"GUID": 10191,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 145
			   }
		   	]
		   },
		   {
		   	"GUID": 10194,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 171
			   }
		   	]
		   },
		   {
		   	"GUID": 10195,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 172
			   }
		   	]
		   },
		   {
		   	"GUID": 10197,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 173
			   }
		   	]
		   },
		   {
		   	"GUID": 10198,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 181
			   }
		   	]
		   },
		   {
		   	"GUID": 10200,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 182
			   }
		   	]
		   },
		   {
		   	"GUID": 10201,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 183
			   }
		   	]
		   },
		   {
		   	"GUID": 10202,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 184
			   }
		   	]
		   },
		   {
		   	"GUID": 10204,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 186
			   }
		   	]
		   },
		   {
		   	"GUID": 10206,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 281
			   }
		   	]
		   },
		   {
		   	"GUID": 10207,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 282
			   }
		   	]
		   },
		   {
		   	"GUID": 10208,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 283
			   }
		   	]
		   },
		   {
		   	"GUID": 10209,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 72
			   }
		   	]
		   },
		   {
		   	"GUID": 10220,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 210
			   }
		   	]
		   },
		   {
		   	"GUID": 10239,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 187
			   }
		   	]
		   },
		   {
		   	"GUID": 10261,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 212
			   }
		   	]
		   },
		   {
		   	"GUID": 10262,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 69
			   }
		   	]
		   },
		   {
		   	"GUID": 10269,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 280
			   }
		   	]
		   },
		   {
		   	"GUID": 2500000,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 0
			   }
		   	]
		   },
		   {
		   	"GUID": 2500001,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 1
			   }
		   	]
		   },
		   {
		   	"GUID": 2500002,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 2
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 483
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 2
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 483
			   }
		   	]
		   },
		   {
		   	"GUID": 2500003,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 3
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 461
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 3
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 461
			   }
		   	]
		   },
		   {
		   	"GUID": 2500004,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 4
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 439
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 4
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 439
			   }
		   	]
		   },
		   {
		   	"GUID": 2500005,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 5
			   }
		   	]
		   },
		   {
		   	"GUID": 2500006,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 19
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 417
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 19
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 417
			   }
		   	]
		   },
		   {
		   	"GUID": 2500007,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 20
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 395
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 20
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 395
			   }
		   	]
		   },
		   {
		   	"GUID": 2500008,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 17
			   }
		   	]
		   },
		   {
		   	"GUID": 2500009,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 29
			   }
		   	]
		   },
		   {
		   	"GUID": 2500010,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 34
			   }
		   	]
		   },
		   {
		   	"GUID": 2500011,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 22
			   }
		   	]
		   },
		   {
		   	"GUID": 2500012,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 30
			   }
		   	]
		   },
		   {
		   	"GUID": 2500013,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 31
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 373
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 31
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 373
			   }
		   	]
		   },
		   {
		   	"GUID": 2500014,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 211
			   }
		   	]
		   },
		   {
		   	"GUID": 2500015,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 89
			   }
		   	]
		   },
		   {
		   	"GUID": 2500016,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 151
			   }
		   	]
		   },
		   {
		   	"GUID": 2500017,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 73
			   }
		   	]
		   },
		   {
		   	"GUID": 2500018,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 137
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 351
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 137
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 351
			   }
		   	]
		   },
		   {
		   	"GUID": 2500019,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 134
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 329
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 134
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 329
			   }
		   	]
		   },
		   {
		   	"GUID": 2500020,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 203
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 307
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 203
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 307
			   }
		   	]
		   },
		   {
		   	"GUID": 2500021,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 156
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 285
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 156
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 285
			   }
		   	]
		   },
		   {
		   	"GUID": 2500022,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 171
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 482
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 171
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 482
			   }
		   	]
		   },
		   {
		   	"GUID": 2500023,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 140
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 460
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 140
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 460
			   }
		   	]
		   },
		   {
		   	"GUID": 2500024,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 158
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 438
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 158
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 438
			   }
		   	]
		   },
		   {
		   	"GUID": 2500025,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 173
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 416
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 173
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 416
			   }
		   	]
		   },
		   {
		   	"GUID": 2500026,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 160
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 394
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 160
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 394
			   }
		   	]
		   },
		   {
		   	"GUID": 2500027,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 163
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 372
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 163
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 372
			   }
		   	]
		   },
		   {
		   	"GUID": 2500028,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 167
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 350
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 167
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 350
			   }
		   	]
		   },
		   {
		   	"GUID": 2500029,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 141
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 328
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 141
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 328
			   }
		   	]
		   },
		   {
		   	"GUID": 2500030,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 142
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 306
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 142
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 306
			   }
		   	]
		   },
		   {
		   	"GUID": 2500031,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 145
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 284
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 145
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 284
			   }
		   	]
		   },
		   {
		   	"GUID": 2500032,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 182
			   }
		   	]
		   },
		   {
		   	"GUID": 2500033,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 61
			   }
		   	]
		   },
		   {
		   	"GUID": 2500034,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 63
			   }
		   	]
		   },
		   {
		   	"GUID": 2500035,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 124
			   }
		   	]
		   },
		   {
		   	"GUID": 2500036,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 51
			   }
		   	]
		   },
		   {
		   	"GUID": 2500037,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 183
			   }
		   	]
		   },
		   {
		   	"GUID": 2500038,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 181
			   }
		   	]
		   },
		   {
		   	"GUID": 2500039,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 184
			   }
		   	]
		   },
		   {
		   	"GUID": 2500041,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 186
			   }
		   	]
		   },
		   {
		   	"GUID": 2500042,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 153
			   }
		   	]
		   },
		   {
		   	"GUID": 2500044,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 56
			   }
		   	]
		   },
		   {
		   	"GUID": 2500045,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 154
			   }
		   	]
		   },
		   {
		   	"GUID": 2500046,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 155
			   }
		   	]
		   },
		   {
		   	"GUID": 2500047,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 157
			   }
		   	]
		   },
		   {
		   	"GUID": 2500048,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 161
			   }
		   	]
		   },
		   {
		   	"GUID": 2500049,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 162
			   }
		   	]
		   },
		   {
		   	"GUID": 2500050,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 164
			   }
		   	]
		   },
		   {
		   	"GUID": 2500051,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 165
			   }
		   	]
		   },
		   {
		   	"GUID": 2500053,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 194
			   }
		   	]
		   },
		   {
		   	"GUID": 2500054,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 138
			   }
		   	]
		   },
		   {
		   	"GUID": 2500055,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 139
			   }
		   	]
		   },
		   {
		   	"GUID": 2500056,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 135
			   }
		   	]
		   },
		   {
		   	"GUID": 2500057,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 136
			   }
		   	]
		   },
		   {
		   	"GUID": 2500058,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 143
			   }
		   	]
		   },
		   {
		   	"GUID": 2500059,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 144
			   }
		   	]
		   },
		   {
		   	"GUID": 2500060,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 172
			   }
		   	]
		   },
		   {
		   	"GUID": 2500061,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 47
			   }
		   	]
		   },
		   {
		   	"GUID": 2500062,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 53
			   }
		   	]
		   },
		   {
		   	"GUID": 2500063,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 55
			   }
		   	]
		   },
		   {
		   	"GUID": 2500064,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 54
			   }
		   	]
		   },
		   {
		   	"GUID": 2500065,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 210
			   }
		   	]
		   },
		   {
		   	"GUID": 2500066,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 212
			   }
		   	]
		   },
		   {
		   	"GUID": 40000006,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 72
			   }
		   	]
		   },
		   {
		   	"GUID": 40000007,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 101
			   }
		   	]
		   },
		   {
		   	"GUID": 40000009,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 183
			   }
		   	]
		   },
		   {
		   	"GUID": 40000010,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 13
			   }
		   	]
		   },
		   {
		   	"GUID": 40000012,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 32
			   }
		   	]
		   },
		   {
		   	"GUID": 40000013,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 23
			   }
		   	]
		   },
		   {
		   	"GUID": 40000014,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 32
			   }
		   	]
		   },
		   {
		   	"GUID": 40000016,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 12
			   }
		   	]
		   },
		   {
		   	"GUID": 40000017,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 7
			   }
		   	]
		   },
		   {
		   	"GUID": 40000018,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 13
			   }
		   	]
		   },
		   {
		   	"GUID": 40000019,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 80
			   }
		   	]
		   },
		   {
		   	"GUID": 40000025,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 279
			   }
		   	]
		   },
		   {
		   	"GUID": 40000159,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 81
			   }
		   	]
		   },
		   {
		   	"GUID": 40000167,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 124
			   }
		   	]
		   },
		   {
		   	"GUID": 41200000,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 80
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 481
			   },
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 80
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 481
			   }
		   	]
		   },
		   {
		   	"GUID": 41200001,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 7
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 459
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 7
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 459
			   }
		   	]
		   },
		   {
		   	"GUID": 41200002,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 32
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 415
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 32
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 415
			   }
		   	]
		   },
		   {
		   	"GUID": 41200003,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 12
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 437
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 12
			   },
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 437
			   }
		   	]
		   },
		   {
		   	"GUID": 41200004,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 101
			   }
		   	]
		   },
		   {
		   	"GUID": 41200005,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 94
			   }
		   	]
		   },
		   {
		   	"GUID": 41200006,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 13
			   }
		   	]
		   },
		   {
		   	"GUID": 41200007,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 32
			   }
		   	]
		   },
		   {
		   	"GUID": 41200008,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 23
			   }
		   	]
		   },
		   {
		   	"GUID": 41200009,
		   	"Layers": [
			   {
			   	"IconFileID": 30,
			   	"IconIndex": 13
			   }
		   	]
		   },
		   {
		   	"GUID": 41200015,
		   	"Layers": [
			   {
			   	"IconFileID": 27,
			   	"IconIndex": 81
			   }
		   	]
		   }
		],
		localizations: [
		   {
		   	"GUID": 10011,
		   	"Language": {
		   		"German": "Arbeiterwohnungen",
		   		"English": "Worker Barracks",
		   		"Czech": "Ubytovna dělníků",
		   		"French": "Quartiers d’ouvriers",
		   		"Italian": "Alloggio manodopera",
		   		"Spanish": "Barracones de trabajadores",
		   		"Polish": "Koszary robotników",
		   		"Russian": "Барак рабочего"
		   	}
		   },
		   {
		   	"GUID": 10013,
		   	"Language": {
		   		"German": "Angestelltenwohnhaus",
		   		"English": "Employee House",
		   		"Czech": "Dům zaměstnanců",
		   		"French": "Maison d’employés",
		   		"Italian": "Casa dipendente",
		   		"Spanish": "Casa de empleado",
		   		"Polish": "Dom pracowników",
		   		"Russian": "Дом служащего"
		   	}
		   },
		   {
		   	"GUID": 10119,
		   	"Language": {
		   		"German": "Ingenieurappartments",
		   		"English": "Engineer Apartments",
		   		"Czech": "Byty inženýrů",
		   		"French": "Appartements d’ingénieurs",
		   		"Italian": "Appartamenti ingegneri",
		   		"Spanish": "Apartamentos de ingenieros",
		   		"Polish": "Apartamenty Budowniczych",
		   		"Russian": "Квартира инженера"
		   	}
		   },
		   {
		   	"GUID": 10117,
		   	"Language": {
		   		"German": "Executiveresidenz",
		   		"English": "Executive Mansion",
		   		"Czech": "Sídlo manažerů",
		   		"French": "Manoir de responsables",
		   		"Italian": "Villa manager",
		   		"Spanish": "Mansión de director",
		   		"Polish": "Posiadłość kierownika",
		   		"Russian": "Особняк управляющего"
		   	}
		   },
		   {
		   	"GUID": 10012,
		   	"Language": {
		   		"German": "Gemüsefarm",
		   		"English": "Farmhouse",
		   		"French": "Ferme",
		   		"Italian": "Fattoria",
		   		"Spanish": "Casa rural",
		   		"Polish": "Gospodarstwo rolne",
		   		"Czech": "Farma",
		   		"Russian": "Ферма"
		   	}
		   },
		   {
		   	"GUID": 10048,
		   	"Language": {
		   		"German": "Teeplantage",
		   		"English": "Tea plantation",
		   		"French": "Plantation de thé",
		   		"Italian": "Piantagione di Tè",
		   		"Spanish": "Plantación de té",
		   		"Polish": "Plantacja herbaty",
		   		"Czech": "Čajová plantáž",
		   		"Russian": "Чайная плантация"
		   	}
		   },
		   {
		   	"GUID": 10102,
		   	"Language": {
		   		"German": "Basaltgewinnung",
		   		"English": "Basalt extraction",
		   		"French": "Extraction de basalte",
		   		"Italian": "Estrazione di Basalto",
		   		"Spanish": "Extracción de basalto",
		   		"Polish": "Wydobycie bazaltu",
		   		"Czech": "Těžba čediče",
		   		"Russian": "Извлечение базальта"
		   	}
		   },
		   {
		   	"GUID": 10114,
		   	"Language": {
		   		"German": "Glasfabrik",
		   		"English": "Glassworks",
		   		"French": "Verrerie",
		   		"Italian": "Fabbrica di Vetro",
		   		"Spanish": "Fábrica de vidrio",
		   		"Polish": "Wytwórnia szkła",
		   		"Czech": "Sklárna",
		   		"Russian": "Стекольный завод"
		   	}
		   },
		   {
		   	"GUID": 10174,
		   	"Language": {
		   		"German": "Reisplantage",
		   		"English": "Rice farm",
		   		"French": "Exploitation de riz",
		   		"Italian": "Fattoria risicola",
		   		"Spanish": "Granja de arroz",
		   		"Polish": "Uprawa ryżu",
		   		"Czech": "Rýžová farma",
		   		"Russian": "Рисовая ферма"
		   	}
		   },
		   {
		   	"GUID": 10176,
		   	"Language": {
		   		"German": "Biokost-Fabrik",
		   		"English": "Health food factory",
		   		"French": "Usine d’aliments diététiques",
		   		"Italian": "Fabbrica di Cibi salutari",
		   		"Spanish": "Fábrica de comida sana",
		   		"Polish": "Wytwórnia zdrowej żywności",
		   		"Czech": "Továrna na zdravé jídlo",
		   		"Russian": "Завод натуральной пищи"
		   	}
		   },
		   {
		   	"GUID": 10177,
		   	"Language": {
		   		"German": "Weizenfarm",
		   		"English": "Grain farm",
		   		"French": "Exploitation céréalière",
		   		"Italian": "Fattoria di Grano",
		   		"Spanish": "Granja de cereal",
		   		"Polish": "Farma zbożowa",
		   		"Czech": "Obilná farma",
		   		"Russian": "Зерновая ферма"
		   	}
		   },
		   {
		   	"GUID": 10179,
		   	"Language": {
		   		"German": "Teigwarenfabrik",
		   		"English": "Flour mill",
		   		"French": "Minoterie",
		   		"Italian": "Mulino",
		   		"Spanish": "Molino de harina",
		   		"Polish": "Młyn",
		   		"Czech": "Mlýn",
		   		"Russian": "Мельница"
		   	}
		   },
		   {
		   	"GUID": 10180,
		   	"Language": {
		   		"German": "Pastaproduktion",
		   		"English": "Pasta production",
		   		"French": "Production de pâtes",
		   		"Italian": "Produzione di pasta",
		   		"Spanish": "Producción de pasta",
		   		"Polish": "Wytwórnia makaronu",
		   		"Czech": "Továrna na těstoviny",
		   		"Russian": "Макаронная фабрика"
		   	}
		   },
		   {
		   	"GUID": 10181,
		   	"Language": {
		   		"German": "Obstplantage",
		   		"English": "Fruit plantation",
		   		"French": "Plantation d’arbres fruitiers",
		   		"Italian": "Piantagione di Frutta",
		   		"Spanish": "Plantación de frutas",
		   		"Polish": "Plantacja owoców",
		   		"Czech": "Ovocný sad",
		   		"Russian": "Фруктовая плантация"
		   	}
		   },
		   {
		   	"GUID": 10183,
		   	"Language": {
		   		"German": "Molkerei",
		   		"English": "Dairy farm",
		   		"French": "Exploitation laitière",
		   		"Italian": "Caseificio",
		   		"Spanish": "Vaquería",
		   		"Polish": "Przetwórnia mleka",
		   		"Czech": "Kravín",
		   		"Russian": "Молочная ферма"
		   	}
		   },
		   {
		   	"GUID": 10185,
		   	"Language": {
		   		"German": "Biodrinkhersteller",
		   		"English": "Health drink factory",
		   		"French": "Usine de boissons diététiques",
		   		"Italian": "Fabbrica di Bevande salutari",
		   		"Spanish": "Fábrica de bebidas sanas",
		   		"Polish": "Wytwórnia napojów regenerujących",
		   		"Czech": "Továrna na zdravé nápoje",
		   		"Russian": "Завод здоровых напитков"
		   	}
		   },
		   {
		   	"GUID": 10186,
		   	"Language": {
		   		"German": "Elektronikhersteller",
		   		"English": "Electronics factory",
		   		"French": "Usine de composants électroniques",
		   		"Italian": "Fabbrica di elettronica",
		   		"Spanish": "Fábrica de electrónica",
		   		"Polish": "Fabryka urządzeń elektronicznych",
		   		"Czech": "Továrna na elektroniku",
		   		"Russian": "Завод электроники"
		   	}
		   },
		   {
		   	"GUID": 10187,
		   	"Language": {
		   		"German": "Beamerfabrik",
		   		"English": "Projector plant",
		   		"French": "Usine de projecteurs",
		   		"Italian": "Fabbrica di Proiettori",
		   		"Spanish": "Fábrica de proyectores",
		   		"Polish": "Wytwórnia holografów",
		   		"Czech": "Továrna na holografy",
		   		"Russian": "Завод голографов"
		   	}
		   },
		   {
		   	"GUID": 10188,
		   	"Language": {
		   		"German": "Maisfarm",
		   		"English": "Corn farm",
		   		"French": "Exploitation de maïs",
		   		"Italian": "Fattoria di Mais",
		   		"Spanish": "Granja de maíz",
		   		"Polish": "Uprawa kukurydzy",
		   		"Czech": "Kukuřičná farma",
		   		"Russian": "Кукурузная ферма"
		   	}
		   },
		   {
		   	"GUID": 10190,
		   	"Language": {
		   		"German": "Biopolymererzeugung",
		   		"English": "Biopolymer factory",
		   		"French": "Usine de biopolymères",
		   		"Italian": "Fabbrica di Biopolimeri",
		   		"Spanish": "Fábrica de biopolímeros",
		   		"Polish": "Wytwórnia biopolimerów",
		   		"Czech": "Továrna na biopolymery",
		   		"Russian": "Завод биополимеров"
		   	}
		   },
		   {
		   	"GUID": 10191,
		   	"Language": {
		   		"German": "Robotikanlage",
		   		"English": "Robot factory",
		   		"French": "Usine de robots",
		   		"Italian": "Fabbrica di Robot",
		   		"Spanish": "Fábrica de robots",
		   		"Polish": "Wytwórnia robotów użytkowych",
		   		"Czech": "Továrna na roboty",
		   		"Russian": "Завод роботов"
		   	}
		   },
		   {
		   	"GUID": 10021,
		   	"Language": {
		   		"German": "Arbeiterwohnungen",
		   		"English": "Worker Barracks",
		   		"Czech": "Ubytovna dělníků",
		   		"French": "Quartiers d’ouvriers",
		   		"Italian": "Alloggio manodopera",
		   		"Spanish": "Barracones de trabajadores",
		   		"Polish": "Koszary Robotników",
		   		"Russian": "Барак рабочего"
		   	}
		   },
		   {
		   	"GUID": 10076,
		   	"Language": {
		   		"German": "Angestelltenwohnhaus",
		   		"English": "Employee House",
		   		"Czech": "Dům zaměstnanců",
		   		"French": "Maison d’employés",
		   		"Italian": "Casa dipendente",
		   		"Spanish": "Casa de empleado",
		   		"Polish": "Dom Pracowników",
		   		"Russian": "Дом бизнес-служащего"
		   	}
		   },
		   {
		   	"GUID": 10116,
		   	"Language": {
		   		"German": "Ingenieurappartments",
		   		"English": "Engineer Apartments",
		   		"Czech": "Byty inženýrů",
		   		"French": "Appartements d’ingénieurs",
		   		"Italian": "Appartamenti ingegneri",
		   		"Spanish": "Apartamentos de ingenieros",
		   		"Polish": "Apartamenty Budowniczych",
		   		"Russian": "Квартира инженера"
		   	}
		   },
		   {
		   	"GUID": 10118,
		   	"Language": {
		   		"German": "Executiveresidenz",
		   		"English": "Executive Mansion",
		   		"Czech": "Sídlo manažerů",
		   		"French": "Manoir de responsables",
		   		"Italian": "Villa manager",
		   		"Spanish": "Mansión de director",
		   		"Polish": "Posiadłość Kierownika",
		   		"Russian": "Особняк управляющего"
		   	}
		   },
		   {
		   	"GUID": 10022,
		   	"Language": {
		   		"German": "Fleischwarenfabrik",
		   		"English": "Meat factory",
		   		"French": "Usine de viande",
		   		"Italian": "Fabbrica di Carne",
		   		"Spanish": "Fábrica de carne",
		   		"Polish": "Mechaniczna rzeźnia",
		   		"Czech": "Jatka",
		   		"Russian": "Мясокомбинат"
		   	}
		   },
		   {
		   	"GUID": 10025,
		   	"Language": {
		   		"German": "Kohlekraftwerk",
		   		"English": "Coal power station",
		   		"French": "Centrale à charbon",
		   		"Italian": "Centrale elettrica a carbone",
		   		"Spanish": "Estación de energía de carbón",
		   		"Polish": "Elektrownia węglowa",
		   		"Czech": "Tepelná elektrárna",
		   		"Russian": "Угольная электростанция"
		   	}
		   },
		   {
		   	"GUID": 10024,
		   	"Language": {
		   		"German": "Schaufelradbagger",
		   		"English": "Rotary excavator",
		   		"French": "Pelleteuse rotative",
		   		"Italian": "Scavatore rotante",
		   		"Spanish": "Excavadora giratoria",
		   		"Polish": "Lemiesz obrotowy",
		   		"Czech": "Kolesové rypadlo",
		   		"Russian": "Роторный экскаватор"
		   	}
		   },
		   {
		   	"GUID": 10046,
		   	"Language": {
		   		"German": "Spirituosenfabrik",
		   		"English": "Distillery",
		   		"French": "Distillerie",
		   		"Italian": "Distilleria",
		   		"Spanish": "Destilería",
		   		"Polish": "Destylarnia",
		   		"Czech": "Lihovar",
		   		"Russian": "Перегонный завод"
		   	}
		   },
		   {
		   	"GUID": 10050,
		   	"Language": {
		   		"German": "Atomkraftwerk",
		   		"English": "Nuclear power plant",
		   		"French": "Usine atomique",
		   		"Italian": "Centrale atomica",
		   		"Spanish": "Planta nuclear",
		   		"Polish": "Elektrownia atomowa",
		   		"Czech": "Jaderná elektrárna",
		   		"Russian": "АЭС"
		   	}
		   },
		   {
		   	"GUID": 10052,
		   	"Language": {
		   		"German": "Uranmine",
		   		"English": "Uranium mine",
		   		"French": "Mine d'uranium",
		   		"Italian": "Miniera di Uranio",
		   		"Spanish": "Mina de uranio",
		   		"Polish": "Kopalnia uranu",
		   		"Czech": "Uranový důl",
		   		"Russian": "Урановая шахта"
		   	}
		   },
		   {
		   	"GUID": 10053,
		   	"Language": {
		   		"German": "Brennelementefabrik",
		   		"English": "Fuel element factory",
		   		"French": "Usine d'éléments combustibles",
		   		"Italian": "Fabbrica di carburante",
		   		"Spanish": "Fábrica de combustible",
		   		"Polish": "Fabryka prętów paliwowych",
		   		"Czech": "Továrna na palivové části",
		   		"Russian": "Завод ядерного топлива"
		   	}
		   },
		   {
		   	"GUID": 10075,
		   	"Language": {
		   		"German": "Ölplattform",
		   		"English": "Oil rig",
		   		"French": "Plate-forme pétrolière",
		   		"Italian": "Piattaforma petrolifera",
		   		"Spanish": "Plataforma petrolífera",
		   		"Polish": "Platforma wiertnicza",
		   		"Czech": "Ropná plošina",
		   		"Russian": "Нефтяная вышка"
		   	}
		   },
		   {
		   	"GUID": 10081,
		   	"Language": {
		   		"German": "Rüstungsbetrieb",
		   		"English": "Arsenal",
		   		"French": "Arsenal",
		   		"Italian": "Arsenale",
		   		"Spanish": "Arsenal",
		   		"Polish": "Arsenał",
		   		"Czech": "Arsenál",
		   		"Russian": "Арсенал"
		   	}
		   },
		   {
		   	"GUID": 10092,
		   	"Language": {
		   		"German": "Ölraffinerie",
		   		"English": "Oil refinery",
		   		"French": "Raffinerie de pétrole",
		   		"Italian": "Raffineria petrolifera",
		   		"Spanish": "Refinería de petróleo",
		   		"Polish": "Rafineria ropy naftowej",
		   		"Czech": "Ropná rafinérie",
		   		"Russian": "НПЗ"
		   	}
		   },
		   {
		   	"GUID": 10093,
		   	"Language": {
		   		"German": "Sprengstofffabrik",
		   		"English": "Explosives factory",
		   		"French": "Usine d’explosifs",
		   		"Italian": "Fabbrica di Esplosivi",
		   		"Spanish": "Fábrica de explosivos",
		   		"Polish": "Fabryka mat. wybuchowych",
		   		"Czech": "Továrna na výbušniny",
		   		"Russian": "Завод взрывчатки"
		   	}
		   },
		   {
		   	"GUID": 10148,
		   	"Language": {
		   		"German": "Betonfabrik",
		   		"English": "Concrete factory",
		   		"French": "Usine de béton",
		   		"Italian": "Fabbrica di Calcestruzzo",
		   		"Spanish": "Fábrica de hormigón",
		   		"Polish": "Cementownia",
		   		"Czech": "Továrna na beton",
		   		"Russian": "Бетонный завод"
		   	}
		   },
		   {
		   	"GUID": 10149,
		   	"Language": {
		   		"German": "Ölbohrer",
		   		"English": "Oil driller",
		   		"French": "Foreuse de pétrole",
		   		"Italian": "Perforatore petrolifero",
		   		"Spanish": "Perforador petrolífero",
		   		"Polish": "Żuraw pompowy",
		   		"Czech": "Ropný vrt",
		   		"Russian": "Бурильная установка"
		   	}
		   },
		   {
		   	"GUID": 10150,
		   	"Language": {
		   		"German": "Aromastoffproduktion",
		   		"English": "Flavor lab",
		   		"French": "Laboratoire d'arômes",
		   		"Italian": "Laboratorio Sapori",
		   		"Spanish": "Laboratorio de sabores",
		   		"Polish": "Laboratorium aromatów",
		   		"Czech": "Chuťová laboratoř",
		   		"Russian": "Аромалаборатория"
		   	}
		   },
		   {
		   	"GUID": 10152,
		   	"Language": {
		   		"German": "Lebensmittelkonzern",
		   		"English": "Food supply factory",
		   		"French": "Usine d’approvisionnement en nourriture",
		   		"Italian": "Fabbrica di Forniture alimentari",
		   		"Spanish": "Fábrica de alimentos",
		   		"Polish": "Fabryka sztucznej żywności",
		   		"Czech": "Továrna na jídlo",
		   		"Russian": "Завод продуктов питания"
		   	}
		   },
		   {
		   	"GUID": 10153,
		   	"Language": {
		   		"German": "Hummerzucht",
		   		"English": "Lobster farm",
		   		"French": "Élevage de homards",
		   		"Italian": "Vivaio di Aragoste",
		   		"Spanish": "Granja de langostas",
		   		"Polish": "Hodowla homarów",
		   		"Czech": "Humří farma",
		   		"Russian": "Ферма омаров"
		   	}
		   },
		   {
		   	"GUID": 10154,
		   	"Language": {
		   		"German": "Trüffelzucht",
		   		"English": "Truffle farm",
		   		"French": "Exploitation de truffes",
		   		"Italian": "Tartufaia",
		   		"Spanish": "Granja de trufas",
		   		"Polish": "Uprawa trufli",
		   		"Czech": "Lanýžová farma",
		   		"Russian": "Трюфельная ферма"
		   	}
		   },
		   {
		   	"GUID": 10156,
		   	"Language": {
		   		"German": "Menüservice",
		   		"English": "Gourmet factory",
		   		"French": "Usine de mets de luxe",
		   		"Italian": "Fabbrica Gourmet",
		   		"Spanish": "Fábrica de alimentos selectos",
		   		"Polish": "Fabryka przysmaków",
		   		"Czech": "Továrna na jídlo pro gurmány",
		   		"Russian": "Завод деликатесов"
		   	}
		   },
		   {
		   	"GUID": 10157,
		   	"Language": {
		   		"German": "Weingut",
		   		"English": "Vineyard",
		   		"French": "Vignoble",
		   		"Italian": "Vigneto",
		   		"Spanish": "Viñedo",
		   		"Polish": "Winnica",
		   		"Czech": "Vinice",
		   		"Russian": "Винный завод"
		   	}
		   },
		   {
		   	"GUID": 10158,
		   	"Language": {
		   		"German": "Kelterei",
		   		"English": "Champagne cellar",
		   		"French": "Cave à champagne",
		   		"Italian": "Cantine Champagne",
		   		"Spanish": "Bodega de champán",
		   		"Polish": "Rozlewnia szampana",
		   		"Czech": "Vinný sklep",
		   		"Russian": "Винный погреб"
		   	}
		   },
		   {
		   	"GUID": 10159,
		   	"Language": {
		   		"German": "Kunststofffabrik",
		   		"English": "Plastic factory",
		   		"French": "Usine de plastique",
		   		"Italian": "Fabbrica di Plastica",
		   		"Spanish": "Fábrica de plástico",
		   		"Polish": "Fabryka tworzyw sztucznych",
		   		"Czech": "Továrna na plasty",
		   		"Russian": "Фабрика пластика"
		   	}
		   },
		   {
		   	"GUID": 10161,
		   	"Language": {
		   		"German": "Goldwaschanlage",
		   		"English": "Gold refinery",
		   		"French": "Raffinerie d’or",
		   		"Italian": "Raffineria d'Oro",
		   		"Spanish": "Refinería de oro",
		   		"Polish": "Rafineria złota",
		   		"Czech": "Rafinerie zlata",
		   		"Russian": "Золотоочиститель"
		   	}
		   },
		   {
		   	"GUID": 10162,
		   	"Language": {
		   		"German": "Goldschmelze",
		   		"English": "Gold smeltery",
		   		"French": "Fonderie d’or",
		   		"Italian": "Fucina d'Oro",
		   		"Spanish": "Fundición de oro",
		   		"Polish": "Odlewnia złota",
		   		"Czech": "Tavírna zlata",
		   		"Russian": "Золотоплавильня"
		   	}
		   },
		   {
		   	"GUID": 10163,
		   	"Language": {
		   		"German": "Juwelier",
		   		"English": "Jewelry manufactory",
		   		"French": "Manufacture de bijoux",
		   		"Italian": "Fabbrica di Gioielli",
		   		"Spanish": "Fábrica de joyas",
		   		"Polish": "Fabryka biżuterii",
		   		"Czech": "Výroba šperků",
		   		"Russian": "Ювелирная фабрика"
		   	}
		   },
		   {
		   	"GUID": 10164,
		   	"Language": {
		   		"German": "Fettschmelze",
		   		"English": "Fat factory",
		   		"French": "Usine de matières grasses",
		   		"Italian": "Fabbrica di Grasso",
		   		"Spanish": "Fábrica de manteca",
		   		"Polish": "Ferma drobiu",
		   		"Czech": "Továrna na tuky",
		   		"Russian": "Жировая фабрика"
		   	}
		   },
		   {
		   	"GUID": 10166,
		   	"Language": {
		   		"German": "Chemiefabrik",
		   		"English": "Chemical plant",
		   		"French": "Usine de produits chimiques",
		   		"Italian": "Impianto chimico",
		   		"Spanish": "Planta química",
		   		"Polish": "Fabryka chemiczna",
		   		"Czech": "Chemická továrna",
		   		"Russian": "Химический завод"
		   	}
		   },
		   {
		   	"GUID": 10168,
		   	"Language": {
		   		"German": "Pharmakonzern",
		   		"English": "Healthcare office",
		   		"French": "Office de la santé",
		   		"Italian": "Ufficio sanitario",
		   		"Spanish": "Centro de asistencia médica",
		   		"Polish": "Biuro Funduszu Zdrowia",
		   		"Czech": "Centrum zdravotní péče",
		   		"Russian": "Завод лекарств"
		   	}
		   },
		   {
		   	"GUID": 10088,
		   	"Language": {
		   		"German": "Laboranten-Quartier",
		   		"English": "Assitants' domicile",
		   		"French": "Domicile d’assistants",
		   		"Italian": "Domicilio degli assistenti",
		   		"Spanish": "Domicilio de ayudantes",
		   		"Polish": "Mieszkanie Asystenta",
		   		"Czech": "Ubytovna asistentů",
		   		"Russian": "Жилье ассистентов"
		   	}
		   },
		   {
		   	"GUID": 10209,
		   	"Language": {
		   		"German": "Forscher-Appartment",
		   		"English": "Researchers' apartment",
		   		"French": "Domicile de chercheurs",
		   		"Italian": "Appartamento dei Ricercatori",
		   		"Spanish": "Apartamento de investigadores",
		   		"Polish": "Apartament Badacza",
		   		"Czech": "Byty výzkumníků",
		   		"Russian": "Дома исследователей"
		   	}
		   },
		   {
		   	"GUID": 10031,
		   	"Language": {
		   		"German": "Aquafarm",
		   		"English": "Aquafarm",
		   		"French": "Aquaferme",
		   		"Italian": "Allevamento ittico",
		   		"Spanish": "Granja marina",
		   		"Polish": "Uprawa wodna",
		   		"Czech": "Vodní farmy",
		   		"Russian": "Акваферма"
		   	}
		   },
		   {
		   	"GUID": 10086,
		   	"Language": {
		   		"German": "Kerosinfabrik",
		   		"English": "Fuel factory",
		   		"French": "Usine de carburant",
		   		"Italian": "Fabbrica di Carburante",
		   		"Spanish": "Fábrica de combustible",
		   		"Polish": "Rafineria nafty",
		   		"Czech": "Továrna na palivo",
		   		"Russian": "Топливный завод"
		   	}
		   },
		   {
		   	"GUID": 10098,
		   	"Language": {
		   		"German": "Kohlemine",
		   		"English": "Coal mine",
		   		"French": "Mine de charbon",
		   		"Italian": "Miniera di carbone",
		   		"Spanish": "Mina de carbón",
		   		"Polish": "Kopalnia węgla",
		   		"Czech": "Uhelný důl",
		   		"Russian": "Угольная шахта"
		   	}
		   },
		   {
		   	"GUID": 10100,
		   	"Language": {
		   		"German": "Hightech-Waffenfabrik",
		   		"English": "High-tech weapons factory",
		   		"French": "Usine d’armement high-tech",
		   		"Italian": "Fabbrica di Armi high-tech",
		   		"Spanish": "Fábrica de armas High-Tech",
		   		"Polish": "Fabryka nowoczesnej broni",
		   		"Czech": "Továrna na high-tech zbraně",
		   		"Russian": "Завод технологичного оружия"
		   	}
		   },
		   {
		   	"GUID": 10108,
		   	"Language": {
		   		"German": "U-Recyclingstation",
		   		"English": "Underwater Recycling Station",
		   		"French": "Station de recyclage sous-marine",
		   		"Italian": "Postazione di riciclaggio sottomarina",
		   		"Spanish": "Estación de reciclaje submarina",
		   		"Polish": "Podwodna stacja utylizacji",
		   		"Czech": "Podmořská recyklační stanice",
		   		"Russian": "Станция переработки"
		   	}
		   },
		   {
		   	"GUID": 10112,
		   	"Language": {
		   		"German": "Karbonfabrik",
		   		"English": "Carbon factory",
		   		"French": "Usine de carbone",
		   		"Italian": "Fabbrica di Carbonio",
		   		"Spanish": "Fábrica de carbono",
		   		"Polish": "Fabryka karbonu",
		   		"Czech": "Továrna na uhlík",
		   		"Russian": "Углеродный завод "
		   	}
		   },
		   {
		   	"GUID": 10194,
		   	"Language": {
		   		"German": "Nahrungsmittellabor",
		   		"English": "Functional food factory",
		   		"French": "Usine d’alicaments",
		   		"Italian": "Fabbrica di Cibo funzionale",
		   		"Spanish": "Fábrica de comida funcional",
		   		"Polish": "Fabryka żywności",
		   		"Czech": "Továrna na jídlo",
		   		"Russian": "Завод продовольствия"
		   	}
		   },
		   {
		   	"GUID": 10195,
		   	"Language": {
		   		"German": "Kaffeeplantage",
		   		"English": "Coffee plantation",
		   		"French": "Plantation de café",
		   		"Italian": "Piantagione di caffè",
		   		"Spanish": "Plantación de café",
		   		"Polish": "Plantacja kawy",
		   		"Czech": "Kávová plantáž",
		   		"Russian": "Кофейная плантация"
		   	}
		   },
		   {
		   	"GUID": 10197,
		   	"Language": {
		   		"German": "Synthetisierungsanlage",
		   		"English": "Energy drink factory",
		   		"French": "Usine de boissons énergisantes",
		   		"Italian": "Fabbrica di Bevande energetiche",
		   		"Spanish": "Fábrica de bebidas energéticas",
		   		"Polish": "Fabryka napojów energetycznych",
		   		"Czech": "Továrna na energetické nápoje",
		   		"Russian": "Завод энергетиков"
		   	}
		   },
		   {
		   	"GUID": 10037,
		   	"Language": {
		   		"German": "Sägewerk",
		   		"English": "Sawmill",
		   		"French": "Scierie",
		   		"Italian": "Segheria",
		   		"Spanish": "Aserradero",
		   		"Polish": "Tartak",
		   		"Czech": "Pila",
		   		"Russian": "Лесопилка"
		   	}
		   },
		   {
		   	"GUID": 10045,
		   	"Language": {
		   		"German": "Fischerei",
		   		"English": "Fishery",
		   		"French": "Pêcherie",
		   		"Italian": "Area di pesca",
		   		"Spanish": "Piscifactoría",
		   		"Polish": "Hodowla ryb",
		   		"Czech": "Rybárna",
		   		"Russian": "Рыбозавод"
		   	}
		   },
		   {
		   	"GUID": 10054,
		   	"Language": {
		   		"German": "Eisenerzmine",
		   		"English": "Iron ore mine",
		   		"French": "Mine de minerai de fer",
		   		"Italian": "Miniera Minerale di ferro",
		   		"Spanish": "Mina de hierro",
		   		"Polish": "Kopalnia rudy żelaza",
		   		"Czech": "Důl na železnou rudu",
		   		"Russian": "Железная шахта"
		   	}
		   },
		   {
		   	"GUID": 10055,
		   	"Language": {
		   		"German": "Eisenschmelze",
		   		"English": "Iron smelter",
		   		"French": "Fonderie de fer",
		   		"Italian": "Fonderia di ferro",
		   		"Spanish": "Fundición de hierro",
		   		"Polish": "Huta żelaza",
		   		"Czech": "Vysoké pece",
		   		"Russian": "Плавильня железа"
		   	}
		   },
		   {
		   	"GUID": 10056,
		   	"Language": {
		   		"German": "Werkzeugfabrik",
		   		"English": "Tools workshop",
		   		"French": "Atelier d'outillage",
		   		"Italian": "Officina degli Attrezzi",
		   		"Spanish": "Taller de herramientas",
		   		"Polish": "Fabryka narzędzi",
		   		"Czech": "Továrna na nářadí",
		   		"Russian": "Завод инструментов"
		   	}
		   },
		   {
		   	"GUID": 10057,
		   	"Language": {
		   		"German": "Stahlwerk",
		   		"English": "Steelworks",
		   		"French": "Aciérie",
		   		"Italian": "Acciaieria",
		   		"Spanish": "Planta siderúrgica",
		   		"Polish": "Stalownia",
		   		"Czech": "Ocelárna",
		   		"Russian": "Сталелитейный завод"
		   	}
		   },
		   {
		   	"GUID": 10080,
		   	"Language": {
		   		"German": "Sandextraktor",
		   		"English": "Sand extractor",
		   		"French": "Extracteur de sable",
		   		"Italian": "Estrattore di Sabbia",
		   		"Spanish": "Extractor de arena",
		   		"Polish": "Piaskopłukarka",
		   		"Czech": "Extraktor písku",
		   		"Russian": "Добыча песка"
		   	}
		   },
		   {
		   	"GUID": 10083,
		   	"Language": {
		   		"German": "Kalksteinbruch",
		   		"English": "Limestone quarry",
		   		"French": "Carrières de calcaire",
		   		"Italian": "Giacimento di Calcare",
		   		"Spanish": "Cantera de piedra caliza",
		   		"Polish": "Kamieniołom",
		   		"Czech": "Vápencový lom",
		   		"Russian": "Добыча известняка"
		   	}
		   },
		   {
		   	"GUID": 10120,
		   	"Language": {
		   		"German": "Munitionsfabrik",
		   		"English": "Munitions factory",
		   		"French": "Usine de munitions",
		   		"Italian": "Fabbrica di munizioni",
		   		"Spanish": "Fábrica de municiones",
		   		"Polish": "Fabryka amunicji",
		   		"Czech": "Továrna na munici",
		   		"Russian": "Оборонный завод"
		   	}
		   },
		   {
		   	"GUID": 10198,
		   	"Language": {
		   		"German": "Zuckerraffinerie",
		   		"English": "Sugar beet plantation",
		   		"French": "Plantation de betteraves à sucre",
		   		"Italian": "Piantagione di Barbabietola da zucchero",
		   		"Spanish": "Plantación de remolacha azucarera",
		   		"Polish": "Uprawa buraków cukrowych",
		   		"Czech": "Plantáž cukrové řepy",
		   		"Russian": "Плантация сахарной свеклы"
		   	}
		   },
		   {
		   	"GUID": 10200,
		   	"Language": {
		   		"German": "Kupfermine",
		   		"English": "Copper mine",
		   		"French": "Mine de cuivre",
		   		"Italian": "Miniera di rame",
		   		"Spanish": "Mina de cobre",
		   		"Polish": "Kopalnia miedzi",
		   		"Czech": "Důl na měď",
		   		"Russian": "Медная шахта"
		   	}
		   },
		   {
		   	"GUID": 10201,
		   	"Language": {
		   		"German": "Mikrochip-Hersteller",
		   		"English": "Chip factory",
		   		"French": "Usine de puces",
		   		"Italian": "Fabbrica di Chip",
		   		"Spanish": "Fábrica de microchips",
		   		"Polish": "Fabryka układów scalonych",
		   		"Czech": "Továrna na mikroprocesory",
		   		"Russian": "Фабрика микрочипов"
		   	}
		   },
		   {
		   	"GUID": 10202,
		   	"Language": {
		   		"German": "SE-Extraktor",
		   		"English": "Rare-earth borer",
		   		"French": "Foreuse de terres rares",
		   		"Italian": "Estrattore di lantanidi",
		   		"Spanish": "Barrena de tierras raras",
		   		"Polish": "Wiertnia metali ziem rzadkich",
		   		"Czech": "Vrták na vzácné zeminy",
		   		"Russian": "Редкоземельный бур"
		   	}
		   },
		   {
		   	"GUID": 10204,
		   	"Language": {
		   		"German": "Diamanten-Förderanlage",
		   		"English": "Diamond harvesting station",
		   		"French": "Station d’extraction de diamants",
		   		"Italian": "Postazione di raccolta Diamanti",
		   		"Spanish": "Estación de recogida de diamantes",
		   		"Polish": "Stacja wydobycia diamentów",
		   		"Czech": "Těžební stanice - diamanty",
		   		"Russian": "Добыча алмазов"
		   	}
		   },
		   {
		   	"GUID": 10206,
		   	"Language": {
		   		"German": "Metallkonverter Gold",
		   		"English": "Gold Metal converter",
		   		"French": "Convertisseur de métal en or",
		   		"Italian": "Metal-convertitore Oro",
		   		"Spanish": "Convertidor de oro",
		   		"Polish": "Konwerter warstw złotonośnych",
		   		"Czech": "Konvertor zlatých kovů",
		   		"Russian": "Конвертер золота"
		   	}
		   },
		   {
		   	"GUID": 10207,
		   	"Language": {
		   		"German": "Metallkonverter Kupfer",
		   		"English": "Copper Metal converter",
		   		"French": "Convertisseur de métal en cuivre",
		   		"Italian": "Metal-convertitore Rame",
		   		"Spanish": "Convertidor de cobre",
		   		"Polish": "Konwerter warstw miedzionośnych",
		   		"Czech": "Konvertor měděných kovů",
		   		"Russian": "Конвертер меди"
		   	}
		   },
		   {
		   	"GUID": 10208,
		   	"Language": {
		   		"German": "Metallkonverter Uran",
		   		"English": "Uranium Metal converter",
		   		"French": "Convertisseur de métal en uranium",
		   		"Italian": "Metal-convertitore Uranio",
		   		"Spanish": "Convertidor de uranio",
		   		"Polish": "Konwerter warstw bogatych w uran",
		   		"Czech": "Konvertor uranových kovů",
		   		"Russian": "Конвертер урана"
		   	}
		   },
		   {
		   	"GUID": 10220,
		   	"Language": {
		   		"German": "Mangan-Abbauroboter",
		   		"English": "Manganese Excavation Robot",
		   		"French": "Robot extracteur de manganèse",
		   		"Italian": "Robot di scavo Manganese",
		   		"Spanish": "Robot de excavación de manganeso",
		   		"Polish": "Robot wydobywający mangan",
		   		"Czech": "Těžební robot na mangan",
		   		"Russian": "Марганцевый экстрактор"
		   	}
		   },
		   {
		   	"GUID": 10239,
		   	"Language": {
		   		"German": "Metallkonverter",
		   		"English": "Metal converter",
		   		"French": "Convertisseur de métal",
		   		"Italian": "Metal-convertitore",
		   		"Spanish": "Convertidor de metales",
		   		"Polish": "Konwerter metali",
		   		"Czech": "Konvertor kovů",
		   		"Russian": "Конвертер металла"
		   	}
		   },
		   {
		   	"GUID": 10261,
		   	"Language": {
		   		"German": "Basaltbrecher",
		   		"English": "Basalt crusher",
		   		"Czech": "Drtička na čedič",
		   		"French": "Concasseur de basalte",
		   		"Italian": "Frantumatore di Basalto",
		   		"Spanish": "Trituradora de basalto",
		   		"Polish": "Rozdrabiarka bazaltu",
		   		"Russian": "Дробилка базальта"
		   	}
		   },
		   {
		   	"GUID": 10262,
		   	"Language": {
		   		"German": "Schmelzwerk",
		   		"English": "Smelter",
		   		"Czech": "Huť",
		   		"French": "Fonderie",
		   		"Italian": "Fonderia",
		   		"Spanish": "Horno de fundición",
		   		"Polish": "Huta",
		   		"Russian": "Плавильная печь"
		   	}
		   },
		   {
		   	"GUID": 10269,
		   	"Language": {
		   		"German": "Metallkonverter Eisen",
		   		"English": "Iron Metal converter",
		   		"French": "Convertisseur de métal en fer",
		   		"Italian": "Metal-convertitore Ferro",
		   		"Spanish": "Convertidor de hierro",
		   		"Polish": "Konwerter żelaza",
		   		"Czech": "Konvertor železných kovů",
		   		"Russian": "Конвертер железа"
		   	}
		   },
		   {
		   	"GUID": 40000006,
		   	"Language": {
		   		"German": "Genie-Residenz",
		   		"English": "Geniuses' residence",
		   		"French": "Résidence pour génies Techs",
		   		"Italian": "Residenza per Geni",
		   		"Spanish": "Residencia de los genios",
		   		"Polish": "Rezydencja Geniuszy",
		   		"Czech": "Domovy géniů",
		   		"Russian": "Резиденция гениев"
		   	}
		   },
		   {
		   	"GUID": 40000007,
		   	"Language": {
		   		"German": "Gen-Farm",
		   		"English": "Gen farming laboratory",
		   		"French": "Laboratoire d’agriculture transgénique",
		   		"Italian": "Laboratorio agricolo genetico",
		   		"Spanish": "Laboratorio genético",
		   		"Polish": "Laboratorium hodowli genów",
		   		"Czech": "Genová laboratoř",
		   		"Russian": "Генетическая лаборатория"
		   	}
		   },
		   {
		   	"GUID": 40000009,
		   	"Language": {
		   		"German": "Elektro-Recycler",
		   		"English": "Electronic recycler",
		   		"French": "Recycleur électronique",
		   		"Italian": "Riciclaggio elettronico",
		   		"Spanish": "Reciclador electrónico",
		   		"Polish": "Elektroniczny recykler",
		   		"Czech": "Elektrický recyklátor",
		   		"Russian": "Электронное устройство переработки"
		   	}
		   },
		   {
		   	"GUID": 40000010,
		   	"Language": {
		   		"German": "Schwammzucht",
		   		"English": "Sponge farm",
		   		"French": "Élevage d’éponges",
		   		"Italian": "Fattoria di spugne",
		   		"Spanish": "Granja de esponjas",
		   		"Polish": "Farma gąbek",
		   		"Czech": "Farma na houby",
		   		"Russian": "Ферма губок"
		   	}
		   },
		   {
		   	"GUID": 40000012,
		   	"Language": {
		   		"German": "Kybernetik-Fabrik",
		   		"English": "Cybernetic factory",
		   		"French": "Usine cybernétique",
		   		"Italian": "Fabbrica di cibernetica",
		   		"Spanish": "Fábrica cibernética",
		   		"Polish": "Zakład cybernetyczny",
		   		"Czech": "Kybernetická továrna",
		   		"Russian": "Кибернетический завод"
		   	}
		   },
		   {
		   	"GUID": 40000013,
		   	"Language": {
		   		"German": "Oxidations-Anlage",
		   		"English": "Oxidation facility",
		   		"French": "Installation d’oxydation ",
		   		"Italian": "Stabilimento di ossidazione",
		   		"Spanish": "Centro de oxidación",
		   		"Polish": "Obiekt natleniający",
		   		"Czech": "Okysličovací závod",
		   		"Russian": "Окислительная установка"
		   	}
		   },
		   {
		   	"GUID": 40000014,
		   	"Language": {
		   		"German": "Lithium-Förderanlage",
		   		"English": "Lithium production facility",
		   		"French": "Installation de production de lithium",
		   		"Italian": "Stabilimento di produzione di litio",
		   		"Spanish": "Centro de producción de litio",
		   		"Polish": "Wytwórnia litu",
		   		"Czech": "Závod na výrobu lithia",
		   		"Russian": "Установка для производства лития"
		   	}
		   },
		   {
		   	"GUID": 40000016,
		   	"Language": {
		   		"German": "Bionik-Fabrik",
		   		"English": "Bionics factory",
		   		"French": "Usine d’équipement bionique",
		   		"Italian": "Fabbrica di bionica",
		   		"Spanish": "Centro biónico",
		   		"Polish": "Zakład bioniczny",
		   		"Czech": "Bionická továrna",
		   		"Russian": "Бионический завод"
		   	}
		   },
		   {
		   	"GUID": 40000017,
		   	"Language": {
		   		"German": "Laborausstatter",
		   		"English": "Laboratory outfitter",
		   		"French": "Fournisseur d’articles de laboratoire",
		   		"Italian": "Fornitore Laboratorio",
		   		"Spanish": "Instalador de laboratorio",
		   		"Polish": "Pracownik laboratorium",
		   		"Czech": "Dodavatel laboratorních zařízení",
		   		"Russian": "Лабораторный поставщик"
		   	}
		   },
		   {
		   	"GUID": 40000018,
		   	"Language": {
		   		"German": "Hydraulikwerk",
		   		"English": "Hydraulic plant",
		   		"French": "Centrale hydraulique",
		   		"Italian": "Centrale idraulica",
		   		"Spanish": "Central hidráulica",
		   		"Polish": "Zakład hydrauliczny",
		   		"Czech": "Hydraulické zařízení",
		   		"Russian": "Гидравлическая установка"
		   	}
		   },
		   {
		   	"GUID": 40000019,
		   	"Language": {
		   		"German": "Immunpräparat-Hersteller",
		   		"English": "Immunity drug manufacturers",
		   		"French": "Usine de médicaments immunogènes",
		   		"Italian": "Produttori medicine immunitarie",
		   		"Spanish": "Fabricantes de fármacos inmunológicos",
		   		"Polish": "Wytwórcy leków na odporność",
		   		"Czech": "Výroba imunitních drog",
		   		"Russian": "Производители иммунопрепаратов"
		   	}
		   },
		   {
		   	"GUID": 40000025,
		   	"Language": {
		   		"German": "Metallkonverter Platin",
		   		"English": "Platinum metal converter",
		   		"French": "Convertisseur de métal en platine",
		   		"Italian": "Metal-convertitore platino",
		   		"Spanish": "Convertidor de platino",
		   		"Polish": "Konwerter platyny",
		   		"Czech": "Konvertor platiny",
		   		"Russian": "Платиновый преобразователь металла"
		   	}
		   },
		   {
		   	"GUID": 40000159,
		   	"Language": {
		   		"German": "Korallenbrüter",
		   		"English": "Coral breeder",
		   		"French": "Producteur de corail",
		   		"Italian": "Fertilizzante corallino",
		   		"Spanish": "Criadero de corales",
		   		"Polish": "Hodowca koralowca",
		   		"Czech": "Pěstírna korálu",
		   		"Russian": "Производитель кораллов"
		   	}
		   },
		   {
		   	"GUID": 40000167,
		   	"Language": {
		   		"German": "[GUIDNAME 10149] [GUIDNAME 2505001]"
		   	}
		   },
		   {
		   	"GUID": 41200000,
		   	"Language": {
		   		"German": "Immunpräparate",
		   		"English": "Immunity drugs",
		   		"French": "Médicaments immunogènes",
		   		"Italian": "Medicine immunitarie",
		   		"Spanish": "Fármacos de inmunidad",
		   		"Polish": "Leki na odporność",
		   		"Czech": "Imunitní drogy",
		   		"Russian": "Иммунопрепарат"
		   	}
		   },
		   {
		   	"GUID": 41200001,
		   	"Language": {
		   		"German": "Laborinstrumente",
		   		"English": "Laboratory instruments",
		   		"Russian": "Лабораторные инструменты",
		   		"French": "Instruments de laboratoire",
		   		"Italian": "Strumenti da Laboratorio",
		   		"Spanish": "Instrumentos de laboratorio",
		   		"Polish": "Narzędzia laboratoryjne",
		   		"Czech": "Laboratorní zařízení"
		   	}
		   },
		   {
		   	"GUID": 41200002,
		   	"Language": {
		   		"German": "Neuroimplantate",
		   		"English": "Neuroimplants",
		   		"Russian": "Нейроимпланты",
		   		"French": "Neuro-implants",
		   		"Italian": "Neuroimpianti",
		   		"Spanish": "Neuroimplantes",
		   		"Polish": "Neuroimplanty",
		   		"Czech": "Neuroimplantáty"
		   	}
		   },
		   {
		   	"GUID": 41200003,
		   	"Language": {
		   		"German": "Bionik-Anzüge",
		   		"English": "Bionic suits",
		   		"Russian": "Бионические костюмы",
		   		"French": "Combinaisons bioniques",
		   		"Italian": "Tute bioniche",
		   		"Spanish": "Trajes biónicos",
		   		"Polish": "Kombinezony bioniczne",
		   		"Czech": "Bionické obleky"
		   	}
		   },
		   {
		   	"GUID": 41200004,
		   	"Language": {
		   		"German": "Enzyme",
		   		"English": "Enzymes",
		   		"Russian": "Ферменты",
		   		"French": "Enzymes",
		   		"Italian": "Enzimi",
		   		"Spanish": "Enzimas",
		   		"Polish": "Enzymy",
		   		"Czech": "Enzymy"
		   	}
		   },
		   {
		   	"GUID": 41200005,
		   	"Language": {
		   		"German": "Platin",
		   		"English": "Platinum",
		   		"Russian": "Платина",
		   		"French": "Platine",
		   		"Italian": "Platino",
		   		"Spanish": "Platino",
		   		"Polish": "Platyna",
		   		"Czech": "Platina"
		   	}
		   },
		   {
		   	"GUID": 41200006,
		   	"Language": {
		   		"German": "Schwämme",
		   		"English": "Sponges",
		   		"Russian": "Губки",
		   		"French": "Éponges",
		   		"Italian": "Spugne",
		   		"Spanish": "Esponjas",
		   		"Polish": "Gąbki",
		   		"Czech": "Houby"
		   	}
		   },
		   {
		   	"GUID": 41200007,
		   	"Language": {
		   		"German": "Lithium",
		   		"English": "Lithium",
		   		"Russian": "Литий",
		   		"French": "Lithium",
		   		"Italian": "Litio",
		   		"Spanish": "Litio",
		   		"Polish": "Lit",
		   		"Czech": "Lithium"
		   	}
		   },
		   {
		   	"GUID": 41200008,
		   	"Language": {
		   		"German": "Elektrolytzellen",
		   		"English": "Electrolyte cells",
		   		"Russian": "Блоки с электролитом",
		   		"French": "Cellules électrolytiques",
		   		"Italian": "Cellule elettroliti",
		   		"Spanish": "Células de electrolitos",
		   		"Polish": "Ogniwa elektrolityczne",
		   		"Czech": "Elektrolytické buňky"
		   	}
		   },
		   {
		   	"GUID": 41200009,
		   	"Language": {
		   		"German": "Exoskelette",
		   		"English": "Exoskeletons",
		   		"Russian": "Экзоскелеты",
		   		"French": "Exosquelettes",
		   		"Italian": "Esoscheletri",
		   		"Spanish": "Exoesqueletos",
		   		"Polish": "Egzoszkielety",
		   		"Czech": "Exoskelety"
		   	}
		   },
		   {
		   	"GUID": 41200015,
		   	"Language": {
		   		"German": "Korallen",
		   		"English": "Coral",
		   		"Russian": "Коралл",
		   		"French": "Corail",
		   		"Italian": "Corallo",
		   		"Spanish": "Coral",
		   		"Polish": "Koralowiec",
		   		"Czech": "Korály"
		   	}
		   },
		   {
		   	"GUID": 2500000,
		   	"Language": {
		   		"German": "Holz",
		   		"English": "Wood",
		   		"French": "Bois",
		   		"Italian": "Legna",
		   		"Spanish": "Madera",
		   		"Czech": "Dřevo",
		   		"Polish": "Drewno",
		   		"Russian": "Древесина"
		   	}
		   },
		   {
		   	"GUID": 2500001,
		   	"Language": {
		   		"German": "Werkzeug",
		   		"English": "Tools",
		   		"French": "Outils",
		   		"Italian": "Attrezzi",
		   		"Spanish": "Herramientas",
		   		"Czech": "Nářadí",
		   		"Polish": "Narzędzia",
		   		"Russian": "Инструменты"
		   	}
		   },
		   {
		   	"GUID": 2500002,
		   	"Language": {
		   		"German": "Gemüse",
		   		"English": "Vegetables",
		   		"French": "Légumes",
		   		"Italian": "Verdure",
		   		"Spanish": "Verduras",
		   		"Czech": "Zelenina",
		   		"Polish": "Warzywa",
		   		"Russian": "Овощи"
		   	}
		   },
		   {
		   	"GUID": 2500003,
		   	"Language": {
		   		"German": "Fleisch",
		   		"English": "Meat",
		   		"French": "Viande",
		   		"Italian": "Carne",
		   		"Spanish": "Carne",
		   		"Czech": "Maso",
		   		"Polish": "Mięso",
		   		"Russian": "Мясо"
		   	}
		   },
		   {
		   	"GUID": 2500004,
		   	"Language": {
		   		"German": "Fisch",
		   		"English": "Fish",
		   		"French": "Poisson",
		   		"Italian": "Pesce",
		   		"Spanish": "Pescado",
		   		"Czech": "Ryby",
		   		"Polish": "Ryby",
		   		"Russian": "Рыба"
		   	}
		   },
		   {
		   	"GUID": 2500005,
		   	"Language": {
		   		"German": "Kohle",
		   		"English": "Coal",
		   		"French": "Charbon",
		   		"Italian": "Carbone",
		   		"Spanish": "Carbón",
		   		"Czech": "Uhlí",
		   		"Polish": "Węgiel",
		   		"Russian": "Уголь"
		   	}
		   },
		   {
		   	"GUID": 2500006,
		   	"Language": {
		   		"German": "Tee",
		   		"English": "Tea",
		   		"French": "Thé",
		   		"Italian": "Tè",
		   		"Spanish": "Té",
		   		"Czech": "Čaj",
		   		"Polish": "Herbata",
		   		"Russian": "Чай"
		   	}
		   },
		   {
		   	"GUID": 2500007,
		   	"Language": {
		   		"German": "Spirituosen",
		   		"English": "Liquor",
		   		"French": "Alcools",
		   		"Italian": "Liquori",
		   		"Spanish": "Licores",
		   		"Czech": "Alkohol",
		   		"Polish": "Alkohol",
		   		"Russian": "Алкоголь"
		   	}
		   },
		   {
		   	"GUID": 2500008,
		   	"Language": {
		   		"German": "Eisenerz",
		   		"English": "Iron Ore",
		   		"French": "Minerai de fer",
		   		"Italian": "Minerale di ferro",
		   		"Spanish": "Mineral de hierro",
		   		"Czech": "Železná ruda",
		   		"Polish": "Ruda żelaza",
		   		"Russian": "Железная руда"
		   	}
		   },
		   {
		   	"GUID": 2500009,
		   	"Language": {
		   		"German": "Eisen",
		   		"English": "Iron",
		   		"French": "Fer",
		   		"Italian": "Ferro",
		   		"Spanish": "Hierro",
		   		"Czech": "Železo",
		   		"Polish": "Żelazo",
		   		"Russian": "Железо"
		   	}
		   },
		   {
		   	"GUID": 2500010,
		   	"Language": {
		   		"German": "Stahl",
		   		"English": "Steel",
		   		"French": "Acier",
		   		"Italian": "Acciaio",
		   		"Spanish": "Acero",
		   		"Czech": "Ocel",
		   		"Polish": "Stal",
		   		"Russian": "Сталь"
		   	}
		   },
		   {
		   	"GUID": 2500011,
		   	"Language": {
		   		"German": "Uran",
		   		"English": "Uranium",
		   		"French": "Uranium",
		   		"Italian": "Uranio",
		   		"Spanish": "Uranio",
		   		"Czech": "Uran",
		   		"Polish": "Uran",
		   		"Russian": "Уран"
		   	}
		   },
		   {
		   	"GUID": 2500012,
		   	"Language": {
		   		"German": "Brennstäbe",
		   		"English": "Fuel rods",
		   		"French": "Barres de combustible",
		   		"Italian": "Barre di combustibile",
		   		"Spanish": "Varillas combustible",
		   		"Czech": "Palivové tyče",
		   		"Polish": "Pręty paliwowe",
		   		"Russian": "Топливные стержни"
		   	}
		   },
		   {
		   	"GUID": 2500013,
		   	"Language": {
		   		"German": "Algen",
		   		"English": "Algae",
		   		"French": "Algues",
		   		"Italian": "Alghe",
		   		"Spanish": "Algas",
		   		"Czech": "Řasy",
		   		"Polish": "Algi",
		   		"Russian": "Водоросли"
		   	}
		   },
		   {
		   	"GUID": 2500014,
		   	"Language": {
		   		"German": "Bauzellen",
		   		"English": "Building modules",
		   		"French": "Modules de construction",
		   		"Italian": "Moduli Edificio",
		   		"Spanish": "Módulos construcción",
		   		"Czech": "Stavební moduly",
		   		"Polish": "Moduły konstrukcyjne",
		   		"Russian": "Строительные мод."
		   	}
		   },
		   {
		   	"GUID": 2500015,
		   	"Language": {
		   		"German": "Glas",
		   		"English": "Glass",
		   		"French": "Verre",
		   		"Italian": "Vetro",
		   		"Spanish": "Cristal",
		   		"Czech": "Sklo",
		   		"Polish": "Szkło",
		   		"Russian": "Стекло"
		   	}
		   },
		   {
		   	"GUID": 2500016,
		   	"Language": {
		   		"German": "Beton",
		   		"English": "Concrete",
		   		"French": "Béton",
		   		"Italian": "Calcestruzzo",
		   		"Spanish": "Hormigón",
		   		"Czech": "Beton",
		   		"Polish": "Płyta betonowa",
		   		"Russian": "Бетон"
		   	}
		   },
		   {
		   	"GUID": 2500017,
		   	"Language": {
		   		"German": "Karbon",
		   		"English": "Carbon",
		   		"French": "Carbone",
		   		"Italian": "Carbonio",
		   		"Spanish": "Carbono",
		   		"Czech": "Uhlík",
		   		"Polish": "Karbon",
		   		"Russian": "Углерод"
		   	}
		   },
		   {
		   	"GUID": 2500018,
		   	"Language": {
		   		"German": "Pastagerichte",
		   		"English": "Pasta dishes",
		   		"French": "Plats de pâtes",
		   		"Italian": "Piatti di pasta",
		   		"Spanish": "Platos de pasta",
		   		"Czech": "Pokrmy z těstovin",
		   		"Polish": "Dania z makaronem",
		   		"Russian": "Макаронные блюда"
		   	}
		   },
		   {
		   	"GUID": 2500019,
		   	"Language": {
		   		"German": "Biokost",
		   		"English": "Health food",
		   		"French": "Aliments diététiques",
		   		"Italian": "Cibi salutari",
		   		"Spanish": "Comida sana",
		   		"Czech": "Zdravá výživa",
		   		"Polish": "Zdrowa żywność",
		   		"Russian": "Полезная еда"
		   	}
		   },
		   {
		   	"GUID": 2500020,
		   	"Language": {
		   		"German": "Fertiggerichte",
		   		"English": "Convenience Food",
		   		"French": "Plateau-repas",
		   		"Italian": "Pasti precotti",
		   		"Spanish": "Comida preparada",
		   		"Czech": "Instantní jídla",
		   		"Polish": "Zestaw obiadowy",
		   		"Russian": "Фастфуд"
		   	}
		   },
		   {
		   	"GUID": 2500021,
		   	"Language": {
		   		"German": "Gourmetmenüs",
		   		"English": "Luxury meal",
		   		"French": "Repas de luxe",
		   		"Italian": "Pasti di lusso",
		   		"Spanish": "Comida de lujo",
		   		"Czech": "Luxusní jídla",
		   		"Polish": "Doskonała żywność",
		   		"Russian": "Деликатесы"
		   	}
		   },
		   {
		   	"GUID": 2500022,
		   	"Language": {
		   		"German": "Funktionelles Essen",
		   		"English": "Functional food",
		   		"French": "Alicaments",
		   		"Italian": "Cibo funzionale",
		   		"Spanish": "Comida funcional",
		   		"Czech": "Zdravotní jídla",
		   		"Polish": "Żywność podstawowa",
		   		"Russian": "Здоровая еда"
		   	}
		   },
		   {
		   	"GUID": 2500023,
		   	"Language": {
		   		"German": "Biodrinks",
		   		"English": "Bio drinks",
		   		"French": "Boissons bio",
		   		"Italian": "Bevande bio",
		   		"Spanish": "Bebidas biológicas",
		   		"Czech": "Bio nápoje",
		   		"Polish": "Bio-drinki",
		   		"Russian": "Полезные напитки"
		   	}
		   },
		   {
		   	"GUID": 2500024,
		   	"Language": {
		   		"German": "Champagner",
		   		"English": "Champagne",
		   		"French": "Champagne",
		   		"Italian": "Champagne",
		   		"Spanish": "Champán",
		   		"Czech": "Šampaňské",
		   		"Polish": "Szampan",
		   		"Russian": "Шампанское"
		   	}
		   },
		   {
		   	"GUID": 2500025,
		   	"Language": {
		   		"German": "Funktionsdrinks",
		   		"English": "Functional drinks",
		   		"French": "Boissons alicaments",
		   		"Italian": "Bevande funzionali",
		   		"Spanish": "Bebidas funcionales",
		   		"Czech": "Zdravé nápoje",
		   		"Polish": "Energo-drinki",
		   		"Russian": "Энергетики"
		   	}
		   },
		   {
		   	"GUID": 2500026,
		   	"Language": {
		   		"German": "Kunststoffe",
		   		"English": "Plastics",
		   		"French": "Plastiques",
		   		"Italian": "Plastica",
		   		"Spanish": "Plásticos",
		   		"Czech": "Plasty",
		   		"Polish": "Tworzywa sztuczne",
		   		"Russian": "Пластик"
		   	}
		   },
		   {
		   	"GUID": 2500027,
		   	"Language": {
		   		"German": "Schmuck",
		   		"English": "Jewelery",
		   		"French": "Bijoux",
		   		"Italian": "Gioielli",
		   		"Spanish": "Joyas",
		   		"Czech": "Šperky",
		   		"Polish": "Ozdoby",
		   		"Russian": "Украшения"
		   	}
		   },
		   {
		   	"GUID": 2500028,
		   	"Language": {
		   		"German": "Pharmazeutika",
		   		"English": "Pharmaceuticals",
		   		"French": "Produits pharmaceutiques",
		   		"Italian": "Pillole anti-età",
		   		"Spanish": "Fármacos",
		   		"Polish": "Farmaceutyki",
		   		"Czech": "Léčiva",
		   		"Russian": "Лекарства"
		   	}
		   },
		   {
		   	"GUID": 2500029,
		   	"Language": {
		   		"German": "Kommunikatoren",
		   		"English": "Communicator",
		   		"French": "Transmetteur",
		   		"Italian": "Comunicatore",
		   		"Spanish": "Comunicador",
		   		"Czech": "Komunikátor",
		   		"Polish": "Komunikator",
		   		"Russian": "Коммуникатор"
		   	}
		   },
		   {
		   	"GUID": 2500030,
		   	"Language": {
		   		"German": "3D-Beamer",
		   		"English": "3D Projector",
		   		"French": "Holo-projecteur",
		   		"Italian": "Olovisore",
		   		"Spanish": "Hológrafo",
		   		"Czech": "Holograf",
		   		"Polish": "Holograf",
		   		"Russian": "Голографы"
		   	}
		   },
		   {
		   	"GUID": 2500031,
		   	"Language": {
		   		"German": "Servicebots",
		   		"English": "Service bots",
		   		"French": "Robots de service",
		   		"Italian": "Robot di servizio",
		   		"Spanish": "Robots de servicio",
		   		"Czech": "Servisní roboti",
		   		"Polish": "Robot użytkowy",
		   		"Russian": "Домашние роботы"
		   	}
		   },
		   {
		   	"GUID": 2500032,
		   	"Language": {
		   		"German": "Kupfer",
		   		"English": "Copper",
		   		"French": "Cuivre",
		   		"Italian": "Rame",
		   		"Spanish": "Cobre",
		   		"Czech": "Měď",
		   		"Polish": "Miedź",
		   		"Russian": "Медь"
		   	}
		   },
		   {
		   	"GUID": 2500033,
		   	"Language": {
		   		"German": "Kalkstein",
		   		"English": "Limestone",
		   		"French": "Calcaire",
		   		"Italian": "Calcare",
		   		"Spanish": "Caliza",
		   		"Czech": "Vápenec",
		   		"Polish": "Wapień",
		   		"Russian": "Известняк"
		   	}
		   },
		   {
		   	"GUID": 2500034,
		   	"Language": {
		   		"German": "Sand",
		   		"English": "Sand",
		   		"French": "Sable",
		   		"Italian": "Sabbia",
		   		"Spanish": "Arena",
		   		"Czech": "Písek",
		   		"Polish": "Kwarc",
		   		"Russian": "Песок"
		   	}
		   },
		   {
		   	"GUID": 2500035,
		   	"Language": {
		   		"German": "Rohöl",
		   		"English": "Crude oil",
		   		"French": "Pétrole brut",
		   		"Italian": "Petrolio greggio",
		   		"Spanish": "Crudo",
		   		"Czech": "Surová ropa",
		   		"Polish": "Ropa naftowa",
		   		"Russian": "Сырая нефть"
		   	}
		   },
		   {
		   	"GUID": 2500036,
		   	"Language": {
		   		"German": "Öl",
		   		"English": "Oil",
		   		"French": "Pétrole",
		   		"Italian": "Petrolio",
		   		"Spanish": "Petróleo",
		   		"Czech": "Ropa",
		   		"Polish": "Ropa oczyszczona",
		   		"Russian": "Нефть"
		   	}
		   },
		   {
		   	"GUID": 2500037,
		   	"Language": {
		   		"German": "Mikrochips",
		   		"English": "Microchips",
		   		"French": "Microprocesseurs",
		   		"Italian": "Microchip",
		   		"Spanish": "Microchips",
		   		"Czech": "Mikročipy",
		   		"Polish": "Mikroczipy",
		   		"Russian": "Микрочипы"
		   	}
		   },
		   {
		   	"GUID": 2500038,
		   	"Language": {
		   		"German": "Zucker",
		   		"English": "Sugar",
		   		"French": "Sucre",
		   		"Italian": "Zucchero",
		   		"Spanish": "Azúcar",
		   		"Czech": "Cukr",
		   		"Polish": "Cukier",
		   		"Russian": "Сахар"
		   	}
		   },
		   {
		   	"GUID": 2500039,
		   	"Language": {
		   		"German": "Seltenerdmetalle",
		   		"English": "Rare-earth elements",
		   		"French": "Terres rares",
		   		"Italian": "Lantanidi",
		   		"Spanish": "Elementos poco comunes",
		   		"Czech": "Vzácné kovy",
		   		"Polish": "Elementy z metali rzadkich",
		   		"Russian": "Редкоземельные элементы"
		   	}
		   },
		   {
		   	"GUID": 2500041,
		   	"Language": {
		   		"German": "Diamanten",
		   		"English": "Diamonds",
		   		"French": "Diamants",
		   		"Italian": "Diamanti",
		   		"Spanish": "Diamantes",
		   		"Czech": "Diamanty",
		   		"Polish": "Diamenty",
		   		"Russian": "Алмазы"
		   	}
		   },
		   {
		   	"GUID": 2500042,
		   	"Language": {
		   		"German": "Geschmacksverstärker",
		   		"English": "Super flavor",
		   		"French": "Super arôme",
		   		"Italian": "Super sapore",
		   		"Spanish": "Súper sabor",
		   		"Czech": "Dochucovadla",
		   		"Polish": "Super aromat",
		   		"Russian": "Усилитель вкуса"
		   	}
		   },
		   {
		   	"GUID": 2500044,
		   	"Language": {
		   		"German": "Sprengstoffe",
		   		"English": "Explosives",
		   		"French": "Explosifs",
		   		"Italian": "Esplosivi",
		   		"Spanish": "Explosivos",
		   		"Czech": "Výbušniny",
		   		"Polish": "Materiały wybuchowe",
		   		"Russian": "Взрывчатка"
		   	}
		   },
		   {
		   	"GUID": 2500045,
		   	"Language": {
		   		"German": "Hummer",
		   		"English": "Lobster",
		   		"French": "Homard",
		   		"Italian": "Aragoste",
		   		"Spanish": "Langosta",
		   		"Czech": "Humři",
		   		"Polish": "Homar",
		   		"Russian": "Омары"
		   	}
		   },
		   {
		   	"GUID": 2500046,
		   	"Language": {
		   		"German": "Trüffel",
		   		"English": "Truffle",
		   		"French": "Truffe",
		   		"Italian": "Tartufi",
		   		"Spanish": "Trufa",
		   		"Czech": "Lanýži",
		   		"Polish": "Trufle",
		   		"Russian": "Трюфели"
		   	}
		   },
		   {
		   	"GUID": 2500047,
		   	"Language": {
		   		"German": "Weintrauben",
		   		"English": "Grapes",
		   		"French": "Raisin",
		   		"Italian": "Uva",
		   		"Spanish": "Uvas",
		   		"Czech": "Hroznové víno",
		   		"Polish": "Winogrona",
		   		"Russian": "Виноград"
		   	}
		   },
		   {
		   	"GUID": 2500048,
		   	"Language": {
		   		"German": "Goldnuggets",
		   		"English": "Gold nuggets",
		   		"French": "Pépites d’or",
		   		"Italian": "Pepite d'oro",
		   		"Spanish": "Pepitas de oro",
		   		"Czech": "Zlaté valouny",
		   		"Polish": "Samorodki złota",
		   		"Russian": "Золотые самородки"
		   	}
		   },
		   {
		   	"GUID": 2500049,
		   	"Language": {
		   		"German": "Goldbarren",
		   		"English": "Gold",
		   		"French": "Or",
		   		"Italian": "Oro",
		   		"Spanish": "Oro",
		   		"Czech": "Zlato",
		   		"Polish": "Złoto",
		   		"Russian": "Золото"
		   	}
		   },
		   {
		   	"GUID": 2500050,
		   	"Language": {
		   		"German": "Omega-Fettsäuren",
		   		"English": "Omega acids",
		   		"French": "Acides oméga",
		   		"Italian": "Acidi omega",
		   		"Spanish": "Ácidos omega",
		   		"Czech": "Mastné kyseliny",
		   		"Polish": "Kwasy omega",
		   		"Russian": "Омега-кислоты"
		   	}
		   },
		   {
		   	"GUID": 2500051,
		   	"Language": {
		   		"German": "Geheime Zutaten",
		   		"English": "Secret ingredients",
		   		"French": "Ingrédients secrets",
		   		"Italian": "Ingredienti segreti",
		   		"Spanish": "Ingredientes secretos",
		   		"Czech": "Tajné přísady",
		   		"Polish": "Tajne składniki",
		   		"Russian": "Секретные ингредиенты"
		   	}
		   },
		   {
		   	"GUID": 2500053,
		   	"Language": {
		   		"German": "Reis",
		   		"English": "Rice",
		   		"French": "Riz",
		   		"Italian": "Riso",
		   		"Spanish": "Arroz",
		   		"Czech": "Rýže",
		   		"Polish": "Ryż",
		   		"Russian": "Рис"
		   	}
		   },
		   {
		   	"GUID": 2500054,
		   	"Language": {
		   		"German": "Früchte",
		   		"English": "Fruits",
		   		"French": "Fruits",
		   		"Italian": "Frutta",
		   		"Spanish": "Frutas",
		   		"Czech": "Ovoce",
		   		"Polish": "Owoce",
		   		"Russian": "Фрукты"
		   	}
		   },
		   {
		   	"GUID": 2500055,
		   	"Language": {
		   		"German": "Milch",
		   		"English": "Milk",
		   		"French": "Lait",
		   		"Italian": "Latte",
		   		"Spanish": "Leche",
		   		"Czech": "Mléko",
		   		"Polish": "Mleko",
		   		"Russian": "Молоко"
		   	}
		   },
		   {
		   	"GUID": 2500056,
		   	"Language": {
		   		"German": "Hartweizen",
		   		"English": "Durum wheat",
		   		"French": "Blé dur",
		   		"Italian": "Grano duro",
		   		"Spanish": "Trigo duro",
		   		"Czech": "Pšenice",
		   		"Polish": "Pszenica durum",
		   		"Russian": "Пшеница"
		   	}
		   },
		   {
		   	"GUID": 2500057,
		   	"Language": {
		   		"German": "Teigwaren",
		   		"English": "Pasta",
		   		"French": "Pâtes",
		   		"Italian": "Pasta",
		   		"Spanish": "Pasta",
		   		"Czech": "Těstoviny",
		   		"Polish": "Makaron",
		   		"Russian": "Макароны"
		   	}
		   },
		   {
		   	"GUID": 2500058,
		   	"Language": {
		   		"German": "Mais",
		   		"English": "Corn",
		   		"French": "Maïs",
		   		"Italian": "Mais",
		   		"Spanish": "Maíz",
		   		"Czech": "Kukuřice",
		   		"Polish": "Kukurydza",
		   		"Russian": "Кукуруза"
		   	}
		   },
		   {
		   	"GUID": 2500059,
		   	"Language": {
		   		"German": "Biopolymer",
		   		"English": "Biopolymers",
		   		"French": "Biopolymères",
		   		"Italian": "Biopolimeri",
		   		"Spanish": "Biopolímeros",
		   		"Czech": "Biopolymery",
		   		"Polish": "Biopolimery",
		   		"Russian": "Биополимеры"
		   	}
		   },
		   {
		   	"GUID": 2500060,
		   	"Language": {
		   		"German": "Koffein",
		   		"English": "Caffeine",
		   		"French": "Caféine",
		   		"Italian": "Caffeina",
		   		"Spanish": "Cafeína",
		   		"Czech": "Kofein",
		   		"Polish": "Kofeina",
		   		"Russian": "Кофеин"
		   	}
		   },
		   {
		   	"GUID": 2500061,
		   	"Language": {
		   		"German": "Kerosin",
		   		"English": "Kerosene",
		   		"French": "Kérosène",
		   		"Italian": "Cherosene",
		   		"Spanish": "Queroseno",
		   		"Czech": "Petrolej",
		   		"Polish": "Nafta",
		   		"Russian": "Керосин"
		   	}
		   },
		   {
		   	"GUID": 2500062,
		   	"Language": {
		   		"German": "Munition",
		   		"English": "Weapons",
		   		"French": "Armes",
		   		"Italian": "Armi",
		   		"Spanish": "Armas",
		   		"Czech": "Zbraně",
		   		"Polish": "Broń",
		   		"Russian": "Оружие"
		   	}
		   },
		   {
		   	"GUID": 2500063,
		   	"Language": {
		   		"German": "Schwere Waffen",
		   		"English": "Heavy weapons",
		   		"French": "Armes lourdes",
		   		"Italian": "Armi pesanti",
		   		"Spanish": "Armas pesadas",
		   		"Czech": "Těžké zbraně",
		   		"Polish": "Broń ciężka",
		   		"Russian": "Тяжелое вооружение"
		   	}
		   },
		   {
		   	"GUID": 2500064,
		   	"Language": {
		   		"German": "Hightech-Waffen",
		   		"English": "High-tech weapons",
		   		"French": "Armes high-tech",
		   		"Italian": "Armi high-tech",
		   		"Spanish": "Armas high-tech",
		   		"Czech": "High-tech zbraně",
		   		"Polish": "Nowoczesna broń",
		   		"Russian": "Технологичное оруж."
		   	}
		   },
		   {
		   	"GUID": 2500065,
		   	"Language": {
		   		"German": "Manganknollen",
		   		"English": "Manganese nodules",
		   		"French": "Nodules de manganèse",
		   		"Italian": "Noduli di manganese",
		   		"Spanish": "Nódulos de manganeso",
		   		"Czech": "Manganové pecky",
		   		"Polish": "Ruda manganu",
		   		"Russian": "Марганцевые массы"
		   	}
		   },
		   {
		   	"GUID": 2500066,
		   	"Language": {
		   		"German": "Granulat",
		   		"English": "Granules",
		   		"Czech": "Granulát",
		   		"French": "Granulés en plastique",
		   		"Italian": "Nuclei",
		   		"Spanish": "Microgránulos",
		   		"Polish": "Granulat",
		   		"Russian": "Гранулы"
		   	}
		   }
		]
	};


	pub.localFromGuid = function (guid) {
		for (var i = 0; i < pub.data.localizations.length; i++) {
			if (pub.data.localizations[i].GUID == guid) {
				return pub.data.localizations[i].Language.English;
			}
		}
	}

	pub.guidFromProduct = function (product) {
		for (var i = 0; i < pub.data.productIconGUIDs.length; i++) {
			if (pub.data.productIconGUIDs[i].Product == product) {
				return pub.data.productIconGUIDs[i].Icon;
			}
		}
	}

	pub.iconFromGuid = function (guid) {
		var IconFileID;
		var IconIndex = 0;

		for (var i = 0; i < pub.data.icons.length; i++) {
			if (pub.data.icons[i].GUID == guid) {
				var l = pub.data.icons[i].Layers[0];

				IconFileID = l.IconFileID;
				if (l.IconIndex !== undefined) {
					IconIndex = l.IconIndex;
				}

				return "images/icon_" + IconFileID + "_" + IconIndex + ".png";
			}
		}
	}

	pub.buildingByGuid = function (guid) {
		for (var i = 0; i < pub.data.buildings.length; i++) {
			if (pub.data.buildings[i].GUID == guid)
				return pub.data.buildings[i];
		}

		return null;
	};

	pub.buildingsByProduct = function (product) {
		var l = [];

		for (var i = 0; i < pub.data.buildings.length; i++) {
			if (pub.data.buildings[i].Product === product)
				l.push(pub.data.buildings[i]);
		}

		return l;
	}

	pub.localNameFromProductionBuilding = function (b) {
		if (b.Product !== null && b.Product !== undefined) {
			return pub.localFromGuid(pub.guidFromProduct(b.Product));
		} else {
			return pub.localFromGuid(b.GUID);
		}
	}

	pub.populationByLevel = function (populationLevel) {
		for (var i = 0; i < pub.data.populations.length; i++) {
			if (pub.data.populations[i].PopulationLevel === populationLevel) {
				return pub.data.populations[i];
			}
		}
	}

	pub.buildingByFactionLevel = function (faction, level) {
		var factionLevel = faction + "s" + level;

		for (var i = 0; i < pub.data.buildings.length; i++) {
			var b = pub.data.buildings[i];

			if (b.BuildingType === "residence" && b.BuildingLevel === factionLevel) {
				return b.MaxResidentCount;
			}
		}
	}

	return pub;
}())
