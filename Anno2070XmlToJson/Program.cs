using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace Anno2070XmlToJson
{
	class Building
	{
		public string Faction { get; set; }
		public string Template { get; set; }
		public string BuildingType { get; set; }
		public string BuildingLevel { get; set; }

		public int GUID { get; set; }
		public string Name { get; set; }
		public Dictionary<string, int> ProductCost { get; set; }

		public int? CreditCost { get; set; }
		public int? ActiveCost { get; set; }
		public int? ActiveEcoEffect { get; set; }
		public int? ActiveEnergyCost { get; set; }

		public string Product { get; set; }
		public int? ProductionTime { get; set; }
		public string RawMaterial1 { get; set; }
		public int? RawNeeded1 { get; set; }
		public string RawMaterial2 { get; set; }
		public int? RawNeeded2 { get; set; }

		public int MaxResidentCount { get; set; }
	}

	class Population
	{
		public string PopulationLevel { get; set; }
		public Dictionary<string, int> Demands { get; set; }
		public int ResidenceUpgradeAmountMaxPercent { get; set; }
	}

	class ProductIconGUID
	{
		public string Product { get; set; }
		public int Icon { get; set; }
	}

	class Icon
	{
		public int GUID;
		public List<IconLayer> Layers = new List<IconLayer>();
	}

	public class IconLayer
	{
		public int IconFileID;
		public int IconIndex;
	}

	class Localization
	{
		public int GUID;
		public Dictionary<string, string> Language = new Dictionary<string, string>();
	}


	class Program
	{
		static void Main(string[] args)
		{
			new XmlToJson();
		}
	}

	class XmlToJson
	{
		const string path = @"C:\Users\Bruno\Downloads\1404RDAEx_1034\ANNO2700FILES\";

		XmlDocument stdAssets = new XmlDocument();
		XmlDocument stdGameIcons = new XmlDocument();
		XmlDocument xpAssets = new XmlDocument();

		List<Building> buildings = new List<Building>();
		List<Population> populations = new List<Population>();
		List<ProductIconGUID> productIconGUIDs = new List<ProductIconGUID>();
		List<Icon> icons = new List<Icon>();
		List<Localization> localizations = new List<Localization>();

		public XmlToJson()
		{
			stdAssets.Load(path + @"patch8\data\config\game\assets.xml");
			xpAssets.Load(path + @"addon1\addondata\config\balancing\addon_01_assets.xml");
			stdGameIcons.Load(path + @"patch8\data\config\game\icons.xml");

			parseBuildings();
			parsePopulations();
			parseProductIconGUIDs();
			parseIcons();
			parseLocalizations();


			//
			// Remove superfluous icon and local info
			//
			int[] ignore = new int[] { 40000167 /* oil_driller_variation_Sokow */ };
			buildings.RemoveAll(i => ignore.Any(v => v == i.GUID));

			icons.RemoveAll(i => !buildings.Any(b => b.GUID == i.GUID) && !productIconGUIDs.Any(p => p.Icon == i.GUID));
			localizations.RemoveAll(l => !buildings.Any(b => b.GUID == l.GUID) && !productIconGUIDs.Any(p => p.Icon == l.GUID));


			string s;
			s = "var data = {";
			s += "buildings: " + ToJson(buildings) + ",";
			s += "populations: " + ToJson(populations) + ",";
			s += "productIconGUIDs: " + ToJson(productIconGUIDs) + ",";
			s += "icons: " + ToJson(icons) + ",";
			s += "localizations: " + ToJson(localizations);
			s += "}";

			Console.ReadLine();
		}

		private string ToJson(Object o)
		{
			JsonSerializerSettings settings = new JsonSerializerSettings();
			//settings.NullValueHandling = NullValueHandling.Ignore;
			return JsonConvert.SerializeObject(o, settings);
		}

		private void parseLocalizations()
		{
			XmlDocument doc6 = new XmlDocument();
			doc6.Load(path + @"patch8\data\config\texteditor\centralinterface.xml");
			XmlNodeList nodes6 = doc6.SelectNodes("//Asset[Values/Standard/GUID and Values/Text/LocaText]");

			XmlDocument doc = new XmlDocument();
			doc.Load(path + @"patch8\data\config\texteditor\guids.xml");
			XmlNodeList nodes = doc.SelectNodes("//Asset[Values/Standard/GUID and Values/Text/LocaText]");

			XmlDocument doc4 = new XmlDocument();
			doc4.Load(path + @"patch8\data\config\texteditor\icons.xml");
			XmlNodeList nodes4 = doc4.SelectNodes("//Asset[Values/Standard/GUID and Values/Text/LocaText]");

			XmlDocument doc2 = new XmlDocument();
			doc2.Load(path + @"addon1\addondata\config\texteditor\guids.xml");
			XmlNodeList nodes2 = doc2.SelectNodes("//Asset[Values/Standard/GUID and Values/Text/LocaText]");

			XmlDocument doc5 = new XmlDocument();
			doc5.Load(path + @"addon1\addondata\config\texteditor\interface.xml");
			XmlNodeList nodes5 = doc5.SelectNodes("//Asset[Values/Standard/GUID and Values/Text/LocaText]");

			XmlDocument doc3 = new XmlDocument();
			doc3.Load(path + @"addon1\addondata\config\balancing\addon_01_texts.xml");
			XmlNodeList nodes3 = doc3.SelectNodes("//Asset[Values/Standard/GUID and Values/Text/LocaText]");

			var list = nodes.Cast<XmlNode>().Concat(nodes2.Cast<XmlNode>()).Concat(nodes3.Cast<XmlNode>()).Concat(nodes4.Cast<XmlNode>()).Concat(nodes5.Cast<XmlNode>()).Concat(nodes6.Cast<XmlNode>()).ToList();

			foreach (XmlNode n in list)
			{
				Localization local = new Localization();
				local.Language = new Dictionary<string, string>();

				// Add GUID.
				XmlNode guid = n.SelectSingleNode("Values/Standard/GUID");
				local.GUID = int.Parse(guid.InnerText);

				// Get locals.
				XmlNodeList localNodes = n.SelectNodes("Values/Text/LocaText/*[Text]");
				foreach (XmlNode localNode in localNodes)
				{
					local.Language.Add(localNode.Name, localNode.SelectSingleNode("Text").InnerText);
				}

				localizations.Add(local);
			}
		}

		private void parseIcons()
		{
			XmlNodeList iconNodes = stdGameIcons.SelectNodes("/Icons/i");

			foreach (XmlNode n in iconNodes)
			{
				Icon i = new Icon();
				i.Layers = new List<IconLayer>();

				i.GUID = int.Parse(n.SelectSingleNode("GUID").InnerText);

				XmlNodeList iconLayers = n.SelectNodes("Icons/i");
				foreach (XmlNode layerN in iconLayers)
				{
					IconLayer layer = new IconLayer();

					XmlNode IconFileIDNode = layerN.SelectSingleNode("IconFileID");
					layer.IconFileID = int.Parse(IconFileIDNode.InnerText);

					XmlNode IconIndexNode = layerN.SelectSingleNode("IconIndex");
					if (IconIndexNode != null)
						layer.IconIndex = int.Parse(IconIndexNode.InnerText);
					else
						layer.IconIndex = 0;

					i.Layers.Add(layer);
				}

				icons.Add(i);
			}
		}

		private void parseProductIconGUIDs()
		{
			XmlNodeList nodes = xpAssets.SelectNodes("/Group/Assets/Asset/Values/GUIBalancing/ProductIconGUID/*");

			foreach (XmlNode n in nodes)
			{
				ProductIconGUID p = new ProductIconGUID();

				p.Product = n.Name;
				p.Icon = int.Parse(n.InnerText);

				productIconGUIDs.Add(p);
			}
		}

		private void parsePopulations()
		{
			XmlNode balancingNode = xpAssets.SelectSingleNode("/Group/Assets/Asset/Values/Balancing");

			XmlNodeList demandAmountNodes = balancingNode.SelectNodes("DemandAmount/*[*]");
			foreach (XmlNode n in demandAmountNodes)
			{
				Population p = new Population();
				p.Demands = new Dictionary<string, int>();

				p.PopulationLevel = n.Name;
				foreach (XmlNode demandN in n.ChildNodes)
				{
					p.Demands.Add(demandN.Name, int.Parse(demandN.InnerText));
				}

				populations.Add(p);
			}

			XmlNodeList residenceUpgradeAmountMaxPercentNodes = balancingNode.SelectNodes("ResidenceUpgradeAmountMaxPercent/*");
			foreach (XmlNode n in residenceUpgradeAmountMaxPercentNodes)
			{
				populations.Find(p => p.PopulationLevel == n.Name).ResidenceUpgradeAmountMaxPercent = int.Parse(n.InnerText);
			}
		}

		private void parseBuildings()
		{
			string x1 = "//Asset[(Template=\"FarmBuilding\" or Template=\"FactoryBuilding\") and Values/WareProduction/Product or (Values/WareProduction/SpecialProductIcon=\"Energy\" and (Values/Factory/RawMaterial1 or Values/Factory/RawMaterial2)) or Template = \"ResidenceBuilding\" and Values/ResidenceBuilding/MaxResidentCount]";

			XmlNodeList stdNodes = stdAssets.SelectNodes(x1);
			XmlNodeList xpNodes = xpAssets.SelectNodes(x1);

			List<XmlNode> nodes = stdNodes.Cast<XmlNode>().Concat(xpNodes.Cast<XmlNode>()).ToList();
			foreach (XmlNode n in nodes)
			{
				XmlNode c;
				Building b = new Building();

				c = n.SelectSingleNode("Values/MaintenanceCost/ActiveCost");
				if (c != null)
					b.ActiveCost = int.Parse(c.InnerText);

				c = n.SelectSingleNode("Values/MaintenanceCost/ActiveEcoEffect");
				if (c != null)
					b.ActiveEcoEffect = int.Parse(c.InnerText) >> 12;

				c = n.SelectSingleNode("Values/MaintenanceCost/ActiveEnergyCost");
				if (c != null)
					b.ActiveEnergyCost = int.Parse(c.InnerText) >> 12;

				c = n.SelectSingleNode("Values/Building/BuildingLevel");
				if (c != null)
					b.BuildingLevel = c.InnerText;


				c = n.ParentNode.ParentNode.SelectSingleNode("Name");
				b.BuildingType = c.InnerText;


				c = n.SelectSingleNode("Values/BuildCost/ResourceCost/Credits");
				if (c != null)
					b.CreditCost = int.Parse(c.InnerText);


				c = n.ParentNode.ParentNode.ParentNode.ParentNode.SelectSingleNode("Name");
				b.Faction = c.InnerText;


				c = n.SelectSingleNode("Values/Standard/GUID");
				b.GUID = int.Parse(c.InnerText);

				c = n.SelectSingleNode("Values/Standard/Name");
				b.Name = c.InnerText;

				c = n.SelectSingleNode("Values/WareProduction/Product");
				if (c != null)
					b.Product = c.InnerText;

				foreach (XmlNode cost in n.SelectNodes("Values/BuildCost/ProductCost/*"))
				{
					if (b.ProductCost == null)
						b.ProductCost = new Dictionary<string, int>();
					b.ProductCost.Add(cost.Name, int.Parse(cost.InnerText));
				}

				c = n.SelectSingleNode("Values/WareProduction/ProductionTime");
				if (c != null)
					b.ProductionTime = int.Parse(c.InnerText);


				c = n.SelectSingleNode("Values/Factory/RawMaterial1");
				if (c != null)
					b.RawMaterial1 = c.InnerText;

				c = n.SelectSingleNode("Values/Factory/RawNeeded1");
				if (c != null)
					b.RawNeeded1 = int.Parse(c.InnerText);

				c = n.SelectSingleNode("Values/Factory/RawMaterial2");
				if (c != null)
					b.RawMaterial2 = c.InnerText;

				c = n.SelectSingleNode("Values/Factory/RawNeeded2");
				if (c != null)
					b.RawNeeded2 = int.Parse(c.InnerText);


				c = n.SelectSingleNode("Template");
				if (c != null)
					b.Template = c.InnerText;



				c = n.SelectSingleNode("Values/ResidenceBuilding/MaxResidentCount");
				if (c != null)
					b.MaxResidentCount = int.Parse(c.InnerText);


				buildings.Add(b);
			}
		}
	}
}
