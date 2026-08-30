export const agroClimaticZones = [
  {
    id: "zone-northern-plains",
    zoneName: "Northern Fertile Plains (Indo-Gangetic & Midwest Corridors)",
    climate: "Subtropical Continental (Hot Summers, Cold Winters)",
    annualRainfall: "650 - 1,100 mm",
    temperatureRange: "4°C (Winter) to 44°C (Summer)",
    soilTypes: ["Deep Alluvial Loam", "Sandy Loam", "Clay Loam"],
    soilPH: "6.5 - 7.8",
    majorStates: "Punjab, Haryana, Uttar Pradesh, Bihar, Iowa, Illinois",
    icon: "🌾",
    accentColor: "emerald",
    crops: [
      {
        name: "Wheat (Triticum aestivum)",
        type: "Rabi / Winter Cereal",
        season: "Nov - April",
        tempReq: "15°C - 22°C (Cool growing, warm ripening)",
        rainfallReq: "450 - 650 mm (or 4 - 6 irrigations)",
        soilType: "Well-drained clayey and fertile alluvial loam",
        avgYield: "20 - 28 Quintals / Acre (4.5 - 5.5 t/ha)",
        description: "The staple food grain of the northern plains. Highly responsive to split nitrogen application and timely crown root initiation (CRI) irrigation at 21 days.",
        economicValue: "High commercial value, government minimum support price, straw used for cattle fodder.",
        vulnerability: "Yellow/Stripe Rust (Puccinia striiformis), Karnal Bunt, Aphids.",
        companionCrops: "Mustard (as border crop), Chickpea, Sugarcane (intercropped)."
      },
      {
        name: "Basmati & Non-Basmati Paddy (Oryza sativa)",
        type: "Kharif / Monsoon Cereal",
        season: "June - Nov",
        tempReq: "24°C - 34°C (High humidity)",
        rainfallReq: "1,200 - 1,800 mm (Standing water requirement)",
        soilType: "Heavy clay and clayey loam with high water-retention capacity",
        avgYield: "22 - 32 Quintals / Acre",
        description: "Primary staple crop grown under flooded or direct-seeded conditions with high nitrogen and zinc requirements.",
        economicValue: "Premium export commodity (Basmati), domestic food security pillar.",
        vulnerability: "Rice Blast, Bacterial Leaf Blight, Stem Borer, Brown Plant Hopper.",
        companionCrops: "Sesbania (Dhaincha as pre-monsoon green manure), Azolla in flood water."
      },
      {
        name: "Sugarcane (Saccharum officinarum)",
        type: "Annual Cash Crop",
        season: "Feb - March (Spring) / Oct (Autumn)",
        tempReq: "20°C - 35°C",
        rainfallReq: "1,500 - 2,200 mm",
        soilType: "Deep, rich loam with excellent drainage",
        avgYield: "320 - 450 Quintals / Acre",
        description: "Long-duration cash crop requiring heavy fertigation and pest vigilance against Red Rot and Top Borer.",
        economicValue: "Sugar mills, bio-ethanol distilleries, jaggery production.",
        vulnerability: "Red Rot (Colletotrichum falcatum), Pyrilla, Early Shoot Borer.",
        companionCrops: "Potato, Mustard, Onion, Garlic (intercropped in furrow spaces)."
      },
      {
        name: "Mustard & Rapeseed (Brassica juncea)",
        type: "Rabi Oilseed",
        season: "Oct - March",
        tempReq: "10°C - 25°C",
        rainfallReq: "250 - 400 mm",
        soilType: "Light to heavy alluvial loam",
        avgYield: "7 - 11 Quintals / Acre",
        description: "Premier winter oilseed crop with high sulfur and boron demand for oil synthesis.",
        economicValue: "Edible cooking oil, mustard meal protein cake for livestock.",
        vulnerability: "White Rust (Albugo candida), Alternaria Blight, Mustard Aphid.",
        companionCrops: "Wheat (9:1 strip cropping ratio), Gram / Chickpea."
      }
    ]
  },
  {
    id: "zone-black-cotton",
    zoneName: "Central & Western Black Soil Belt (Deccan Plateau)",
    climate: "Semi-Arid Tropical to Sub-Humid",
    annualRainfall: "700 - 1,200 mm",
    temperatureRange: "18°C to 42°C",
    soilTypes: ["Deep Black Clay (Regur)", "Medium Black Soil", "Basaltic Loam"],
    soilPH: "7.2 - 8.5 (High Calcium & Magnesium)",
    majorStates: "Maharashtra, Gujarat, Madhya Pradesh, Telangana",
    icon: "☁️",
    accentColor: "indigo",
    crops: [
      {
        name: "Bt-Cotton (Gossypium hirsutum)",
        type: "Kharif Commercial Fiber Crop",
        season: "May/June - Dec/Jan",
        tempReq: "21°C - 35°C (Abundant sunshine)",
        rainfallReq: "600 - 1,000 mm",
        soilType: "Deep moisture-retentive black cotton soil",
        avgYield: "8 - 14 Quintals seed cotton / Acre",
        description: "The 'White Gold' of Central India. Deep taproot system thrives in moisture-retentive vertisols.",
        economicValue: "Textile fiber export, cotton seed oil, and de-oiled cake.",
        vulnerability: "Pink Bollworm, Cotton Leaf Curl Virus (Whitefly vector), Bacterial Blight.",
        companionCrops: "Cowpea, Pigeonpea (intercropped 4:1 as refuge/trap crop), Maize borders."
      },
      {
        name: "Soybean (Glycine max)",
        type: "Kharif Oilseed & Protein Legume",
        season: "June - Oct",
        tempReq: "20°C - 30°C",
        rainfallReq: "650 - 900 mm",
        soilType: "Well-drained black loam and medium heavy soil",
        avgYield: "8 - 12 Quintals / Acre",
        description: "Dual-purpose wonder crop providing 40% protein and 20% edible oil while fixing atmospheric nitrogen.",
        economicValue: "Soymeal export, refined oil, industrial protein products.",
        vulnerability: "Asian Soybean Rust, Yellow Mosaic Virus, Girdle Beetle, Tobacco Caterpillar.",
        companionCrops: "Sorghum, Pigeonpea, Maize (intercropped)."
      },
      {
        name: "Pigeonpea / Arhar (Cajanus cajan)",
        type: "Long Duration Pulse",
        season: "June - Jan/Feb",
        tempReq: "20°C - 35°C",
        rainfallReq: "600 - 850 mm",
        soilType: "Deep black soil with no waterlogging",
        avgYield: "6 - 10 Quintals / Acre",
        description: "Major source of vegetarian protein (Dal). Deep taproot breaks hardpans and enriches soil with leaf litter.",
        economicValue: "High retail market demand for staple protein food.",
        vulnerability: "Fusarium Wilt, Phytophthora Blight, Pod Borer (Helicoverpa).",
        companionCrops: "Cotton, Soybean, Groundnut, Sorghum."
      }
    ]
  },
  {
    id: "zone-southern-peninsula",
    zoneName: "Southern Coastal & Peninsular Zone",
    climate: "Tropical Maritime & Humid Tropical",
    annualRainfall: "1,100 - 2,500 mm",
    temperatureRange: "22°C to 38°C",
    soilTypes: ["Red Sandy Loam", "Laterite Soil", "Coastal Alluvium"],
    soilPH: "5.5 - 6.8",
    majorStates: "Andhra Pradesh, Tamil Nadu, Karnataka, Kerala",
    icon: "🥥",
    accentColor: "amber",
    crops: [
      {
        name: "Spices: Black Pepper & Cardamom",
        type: "Perennial Plantation Spice",
        season: "Year-Round (Harvest: Nov - Feb)",
        tempReq: "15°C - 32°C (High humidity >80%)",
        rainfallReq: "2,000 - 3,500 mm",
        soilType: "Humus-rich laterite and virgin forest loam",
        avgYield: "800 - 1,500 kg dry pepper / Acre",
        description: "Known as the 'King of Spices', grown as climbers on support trees in shade-protected plantations.",
        economicValue: "High-value export commodity with strong international market demand.",
        vulnerability: "Quick Wilt (Phytophthora capsici), Pollu Beetle, Nematodes.",
        companionCrops: "Arecanut, Coffee, Coconut, Cardamom (multi-tier cropping system)."
      },
      {
        name: "Coconut (Cocos nucifera)",
        type: "Perennial Tree Crop",
        season: "Year-Round (Monthly Harvesting)",
        tempReq: "24°C - 32°C",
        rainfallReq: "1,500 - 2,500 mm",
        soilType: "Coastal sandy loam and lateritic gravelly soils",
        avgYield: "60 - 90 nuts per palm / year",
        description: "The 'Tree of Heaven' (Kalpavriksha) providing tender water, copra, fiber, and wood.",
        economicValue: "Copra, virgin coconut oil, coir fiber, coconut water beverage industry.",
        vulnerability: "Bud Rot, Rhinoceros Beetle, Red Palm Weevil, Root Wilt.",
        companionCrops: "Cocoa, Banana, Pineapple, Pepper vines trained on trunk."
      },
      {
        name: "Chili / Red Pepper (Capsicum annuum)",
        type: "Cash Spice & Vegetable",
        season: "Aug - Jan (Kharif / Rabi)",
        tempReq: "20°C - 30°C",
        rainfallReq: "600 - 900 mm",
        soilType: "Fertile red loam and black clayey loam",
        avgYield: "15 - 22 Quintals dry chili / Acre",
        description: "Intensively managed crop requiring high potassium for fruit color (capsanthin) and pungency (capsaicin).",
        economicValue: "Domestic consumption, oleoresin extraction, export spice.",
        vulnerability: "Chili Leaf Curl (Thrips & Mite complex), Anthracnose (Dieback/Fruit Rot).",
        companionCrops: "Marigold (as trap crop for nematodes and thrips), Onion."
      }
    ]
  },
  {
    id: "zone-eastern-delta",
    zoneName: "Eastern Delta & Wetland Zone",
    climate: "Warm Humid Tropical & Monsoonal",
    annualRainfall: "1,400 - 2,200 mm",
    temperatureRange: "14°C to 36°C",
    soilTypes: ["Deltaic Silt Alluvium", "Saline Coastal Clay", "Peaty Bog Soils"],
    soilPH: "6.0 - 7.5",
    majorStates: "West Bengal, Odisha, Assam, Eastern UP",
    icon: "🌱",
    accentColor: "blue",
    crops: [
      {
        name: "Jute (Corchorus olitorius / Golden Fiber)",
        type: "Commercial Fiber Crop",
        season: "March - July",
        tempReq: "24°C - 37°C (High relative humidity 70-90%)",
        rainfallReq: "1,200 - 1,600 mm",
        soilType: "New silt alluvium deposited by flood rivers",
        avgYield: "12 - 18 Quintals dry fiber / Acre",
        description: "The golden fiber of the east. Requires clean slow-moving freshwater for microbial retting.",
        economicValue: "Eco-friendly biodegradable packaging, sacks, geotextiles, handicrafts.",
        vulnerability: "Stem Rot (Macrophomina phaseolina), Yellow Mite, Semilooper.",
        companionCrops: "Followed immediately by Aman Paddy in 200% cropping intensity."
      },
      {
        name: "Tea (Camellia sinensis)",
        type: "Perennial Plantation Bush",
        season: "March - Nov (Flushes: First, Second, Autumn)",
        tempReq: "18°C - 30°C (Never below 10°C)",
        rainfallReq: "2,000 - 3,000 mm (Well-distributed)",
        soilType: "Deep, well-drained acidic soil rich in humus (pH 4.5 - 5.5)",
        avgYield: "800 - 1,400 kg made tea / Acre",
        description: "World-famous beverage crop cultivated on gentle mountain slopes with shade trees.",
        economicValue: "High-value global export (Assam CTC, Darjeeling Orthodox).",
        vulnerability: "Red Spider Mite, Tea Mosquito Bug, Blister Blight.",
        companionCrops: "Shade trees (Albizia lebbeck), nitrogen-fixing legumes."
      }
    ]
  },
  {
    id: "zone-western-arid",
    zoneName: "Western Arid & Semi-Arid Zone",
    climate: "Arid & Desert (Extreme Heat, Low Humidity, High Evaporation)",
    annualRainfall: "200 - 500 mm",
    temperatureRange: "2°C (Winter) to 48°C (Summer)",
    soilTypes: ["Desert Sandy Soil", "Sierozem", "Saline Silt"],
    soilPH: "7.8 - 8.8 (Low Organic Matter, Rich in Minerals)",
    majorStates: "Rajasthan, North Gujarat, Southern Haryana",
    icon: "☀️",
    accentColor: "amber",
    crops: [
      {
        name: "Pearl Millet / Bajra (Pennisetum glaucum)",
        type: "Kharif Nutri-Cereal / Millet",
        season: "June - Sept",
        tempReq: "25°C - 38°C (High drought & heat tolerance)",
        rainfallReq: "300 - 500 mm",
        soilType: "Light sandy soils and shallow gravelly lands",
        avgYield: "12 - 18 Quintals / Acre",
        description: "Super-grain millet with high iron, zinc, and fiber. Thrives where most other cereals fail due to heat.",
        economicValue: "Nutritious human food, cattle dry stover fodder, poultry feed.",
        vulnerability: "Downy Mildew / Green Ear (Sclerospora graminicola), Ergot, Smut.",
        companionCrops: "Moth Bean, Cluster Bean (Guar), Cowpea."
      },
      {
        name: "Cluster Bean / Guar (Cyamopsis tetragonoloba)",
        type: "Kharif Legume & Industrial Gum",
        season: "July - Oct",
        tempReq: "25°C - 40°C",
        rainfallReq: "250 - 450 mm",
        soilType: "Sandy and loamy sand with good drainage",
        avgYield: "5 - 8 Quintals / Acre",
        description: "Drought-hardy legume whose seed endosperm contains high-viscosity galactomannan gum.",
        economicValue: "Guar gum export for oil shale drilling, food stabilizers, cosmetics.",
        vulnerability: "Bacterial Blight (Xanthomonas cyamopsidis), Alternaria Leaf Spot.",
        companionCrops: "Bajra (intercropped 2:1), Sesame."
      },
      {
        name: "Cumin & Isabgol (Cuminum cyminum)",
        type: "Rabi High-Value Seed Spice",
        season: "Nov - March",
        tempReq: "15°C - 28°C (Requires dry, sunny ripening)",
        rainfallReq: "150 - 250 mm (Sensitive to high humidity & dew)",
        soilType: "Sandy loam rich in organic matter",
        avgYield: "3 - 5 Quintals / Acre",
        description: "Delicate medicinal and seed spice crop yielding extraordinary economic return per acre.",
        economicValue: "Global culinary spice export and pharmaceutical dietary fiber.",
        vulnerability: "Fusarium Wilt (Fusarium oxysporum f. sp. cumini), Powdery Mildew, Blight.",
        companionCrops: "Mustard, Fenugreek (Methi)."
      }
    ]
  }
];
