export const completeFertilizersCatalog = [
  // --- NITROGENOUS FERTILIZERS ---
  {
    id: "fert-urea",
    name: "Urea (Prilled / Granular 46% N)",
    category: "Nitrogenous",
    npk: "46-0-0",
    nitrogen: "46%",
    phosphorus: "0%",
    potassium: "0%",
    form: "White crystalline spherical prills",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-emerald-100 text-emerald-800",
    bestFor: ["Paddy / Rice", "Wheat", "Maize", "Sugarcane", "Cotton", "Vegetables"],
    optimalStage: "Vegetative Growth & Rapid Tillering / Canopy Expansion",
    dosage: "50 - 65 kg per acre (in 2 to 3 split applications)",
    applicationMethod: "Broadcasting / Side dressing / Top dressing (Always apply to moist soil)",
    soilSuitability: "All soil types (avoid applying on waterlogged surfaces without incorporation)",
    description: "The most concentrated and widely utilized solid nitrogenous fertilizer. Converts to ammonium and nitrate via soil urease enzymes to drive chlorophyll production and vegetative foliage.",
    benefits: [
      "Highest nitrogen content (46%) among solid fertilizers",
      "Accelerates vegetative foliage growth, tillering, and shoot vigor",
      "Promotes intense green chlorophyll synthesis and photosynthesis rate",
      "Completely water soluble and rapid acting"
    ],
    precautions: [
      "Never apply on standing water without incorporation to avoid ammonia volatilization loss",
      "Avoid excess application during flowering stage as it delays maturity and increases pest susceptibility",
      "Keep moisture sealed; highly hygroscopic"
    ]
  },
  {
    id: "fert-ammonium-sulfate",
    name: "Ammonium Sulfate (21% N + 24% S)",
    category: "Nitrogenous",
    npk: "21-0-0 + 24% S",
    nitrogen: "21%",
    phosphorus: "0%",
    potassium: "0%",
    secondaryNutrients: "24% Sulfur (S)",
    form: "White to beige crystalline granules",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-teal-100 text-teal-800",
    bestFor: ["Oilseeds (Mustard, Groundnut, Soybean)", "Tea", "Paddy (Flooded)", "Onion & Garlic"],
    optimalStage: "Basal application and early vegetative phase",
    dosage: "40 - 50 kg per acre",
    applicationMethod: "Broadcasting, Soil mixing prior to sowing",
    soilSuitability: "Alkaline and calcareous soils (provides beneficial acidification)",
    description: "Provides readily available ammoniacal nitrogen along with 24% sulfate sulfur, which is indispensable for protein synthesis and oil content in oilseed crops.",
    benefits: [
      "Supplies dual essential nutrients: Nitrogen (21%) and Sulfate Sulfur (24%)",
      "Ammoniacal form resists leaching under heavy rainfall and submerged paddy soils",
      "Significantly enhances oil percentage in mustard, soybean, and groundnut",
      "Helps lower pH in alkaline and saline soils"
    ],
    precautions: [
      "Avoid continuous use on highly acidic soils without liming",
      "Do not mix with alkaline fertilizers like lime or rock phosphate"
    ]
  },
  {
    id: "fert-can",
    name: "Calcium Ammonium Nitrate (CAN / Kisan Khad)",
    category: "Nitrogenous",
    npk: "25-0-0 + 8% Ca",
    nitrogen: "25%",
    phosphorus: "0%",
    potassium: "0%",
    secondaryNutrients: "8.1% Calcium (Ca)",
    form: "Grey/off-white spherical granules",
    image: "https://images.unsplash.com/photo-1599818816947-f32f228330ca?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-blue-100 text-blue-800",
    bestFor: ["Fruit Trees (Citrus, Apple, Mango)", "Vegetables (Tomato, Potato)", "Tobacco", "Sugarcane"],
    optimalStage: "Active vegetative, pre-flowering, and fruit development",
    dosage: "40 - 60 kg per acre",
    applicationMethod: "Broadcasting, Band placement, Soil incorporation",
    soilSuitability: "Acidic soils, Neutral soils (does not acidify the soil)",
    description: "A neutral fertilizer containing 50% ammoniacal nitrogen and 50% nitrate nitrogen. Enriched with calcium carbonate to strengthen plant cell walls and prevent blossom end rot.",
    benefits: [
      "Neutral reaction; safe for all soil types including sensitive acidic soils",
      "Instant nitrate uptake for immediate recovery plus sustained ammonium feeding",
      "Calcium strengthens fruit peel, prevents cracking, and increases shelf life",
      "Dust-free and easy to handle without caking"
    ],
    precautions: [
      "Store in dry conditions away from direct rain",
      "Do not combine with soluble phosphate in spray tanks"
    ]
  },

  // --- PHOSPHATIC FERTILIZERS ---
  {
    id: "fert-dap",
    name: "Diammonium Phosphate (DAP 18-46-0)",
    category: "Phosphatic",
    npk: "18-46-0",
    nitrogen: "18%",
    phosphorus: "46%",
    potassium: "0%",
    form: "Dark brown / black hard granules",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-amber-100 text-amber-900",
    bestFor: ["Wheat", "Paddy", "Pulses (Gram, Moong, Arhar)", "Mustard", "Potato", "Cotton"],
    optimalStage: "Basal Application at Sowing / Transplanting",
    dosage: "50 - 75 kg per acre at sowing time",
    applicationMethod: "Drill placement near root zone (2 inches below and beside seed)",
    soilSuitability: "Neutral to slightly alkaline soils",
    description: "The world's most widely used phosphorus source. Contains 46% P2O5 with 18% starter ammoniacal nitrogen, creating an optimal acidic micro-zone around roots for rapid seedling establishment.",
    benefits: [
      "High concentration of plant-available water-soluble phosphate (46%)",
      "Stimulates vigorous root system branching and early nodulation in legumes",
      "Provides starter Nitrogen (18%) for vigorous seedling shoot emergence",
      "Improves crop tillering, early flowering, and uniform maturity"
    ],
    precautions: [
      "Always place below the seed line; avoid direct seed contact to prevent ammonia burn",
      "Not recommended for top-dressing as phosphorus is immobile in soil"
    ]
  },
  {
    id: "fert-ssp",
    name: "Single Super Phosphate (SSP 16% P + 11% S + 19% Ca)",
    category: "Phosphatic",
    npk: "0-16-0 + 11% S + 19% Ca",
    nitrogen: "0%",
    phosphorus: "16%",
    potassium: "0%",
    secondaryNutrients: "11% Sulfur (S), 19% Calcium (Ca)",
    form: "Grey powder or uniform granules",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-stone-100 text-stone-800",
    bestFor: ["Groundnut", "Soybean", "Mustard", "Pulses", "Sunflower", "Potato"],
    optimalStage: "Basal dressing before sowing / plowing",
    dosage: "100 - 150 kg per acre",
    applicationMethod: "Broadcasting and plowing into soil before sowing",
    soilSuitability: "Neutral, alkaline, and sulfur-deficient soils",
    description: "A multi-nutrient powerhouse supplying 16% Phosphorus, 11% Sulfur, and 19% Calcium. Highly economical for legumes and oilseeds where sulfur is critical for oil yield.",
    benefits: [
      "Provides three essential plant nutrients (Phosphorus, Sulfur, Calcium)",
      "Significantly enhances nodulation in legumes and pod filling in groundnut",
      "Calcium content improves soil physical structure and prevents fruit rot",
      "Cost-effective alternative to DAP for oilseed cultivation"
    ],
    precautions: [
      "Requires higher bulk volume compared to high-analysis fertilizers",
      "Store away from humidity to prevent moisture absorption"
    ]
  },
  {
    id: "fert-tsp",
    name: "Triple Super Phosphate (TSP 0-46-0)",
    category: "Phosphatic",
    npk: "0-46-0",
    nitrogen: "0%",
    phosphorus: "46%",
    potassium: "0%",
    form: "Dark grey spherical granules",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-orange-100 text-orange-900",
    bestFor: ["Legumes & Pulses", "Alfalfa & Pastures", "Orchards & Tree Crops", "Cereals"],
    optimalStage: "Basal soil application before planting",
    dosage: "40 - 50 kg per acre",
    applicationMethod: "Sub-surface drill placement",
    soilSuitability: "Neutral to slightly acidic soils",
    description: "Highly concentrated non-nitrogenous phosphorus source containing 46% water-soluble P2O5. Ideal for leguminous crops that fix their own nitrogen and only need concentrated phosphorus.",
    benefits: [
      "Pure high-grade phosphorus without added nitrogen",
      "Allows independent precision management of nitrogen and phosphorus",
      "Stimulates deep taproot elongation and drought tolerance",
      "Over 90% water soluble for rapid root absorption"
    ],
    precautions: [
      "Do not mix with lime or unchelated calcium nitrate in irrigation lines"
    ]
  },

  // --- POTASSIC FERTILIZERS ---
  {
    id: "fert-mop",
    name: "Muriate of Potash (MOP / Potassium Chloride 60% K)",
    category: "Potassic",
    npk: "0-0-60",
    nitrogen: "0%",
    phosphorus: "0%",
    potassium: "60%",
    form: "Pink to brick-red crystalline granules",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-rose-100 text-rose-800",
    bestFor: ["Paddy", "Sugarcane", "Maize", "Cotton", "Wheat", "Banana"],
    optimalStage: "Basal application and panicle / reproductive development",
    dosage: "30 - 45 kg per acre",
    applicationMethod: "Band placement or broadcasting during final field preparation",
    soilSuitability: "All non-saline soils (avoid on chloride-sensitive crops)",
    description: "The most economical and concentrated source of Potassium (60% K2O). Crucial for regulating stomatal opening, enzyme activation, disease resistance, and carbohydrate translocation.",
    benefits: [
      "Highest potassium concentration (60% K2O) among commercial fertilizers",
      "Strengthens crop stalks and prevents lodging during high winds",
      "Improves crop drought resistance and disease immunity",
      "Increases grain weight, sugar content in cane, and starch filling"
    ],
    precautions: [
      "Do NOT use on chloride-sensitive crops (Tobacco, Potato, Grapes, Citrus, Berries) - use SOP instead",
      "Avoid excessive application in saline-alkali soils"
    ]
  },
  {
    id: "fert-sop",
    name: "Sulfate of Potash (SOP 50% K + 17.5% S)",
    category: "Potassic",
    npk: "0-0-50 + 17.5% S",
    nitrogen: "0%",
    phosphorus: "0%",
    potassium: "50%",
    secondaryNutrients: "17.5% Sulfur (S)",
    form: "Fine white crystalline powder / water-soluble granules",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-purple-100 text-purple-800",
    bestFor: ["Potato", "Tobacco", "Grapes & Berries", "Citrus & Fruits", "Greenhouse Crops"],
    optimalStage: "Fruit setting, tuber bulking, and ripening stages",
    dosage: "25 - 40 kg per acre (Soil) or 5 g/L (Foliar/Drip)",
    applicationMethod: "Drip fertigation, foliar spray, or soil basal application",
    soilSuitability: "Saline, alkaline soils and all chloride-sensitive environments",
    description: "Premium chloride-free potassium fertilizer combined with essential sulfur. Virtually free of chloride (<1%), making it safe for high-value horticultural crops and greenhouse fertigation.",
    benefits: [
      "Chloride-free formulation prevents leaf scorch and quality degradation",
      "Significantly increases starch content in potatoes and brix (sugar) in fruits",
      "Low salt index (index 46 vs MOP 116), preventing salinity burn",
      "Supplies 17.5% soluble sulfate sulfur for essential amino acid synthesis"
    ],
    precautions: [
      "Higher cost per unit potassium compared to MOP; best reserved for premium crops"
    ]
  },

  // --- NPK COMPLEX FERTILIZERS ---
  {
    id: "fert-npk-19-19-19",
    name: "NPK 19-19-19 (100% Water Soluble)",
    category: "Complex NPK",
    npk: "19-19-19",
    nitrogen: "19%",
    phosphorus: "19%",
    potassium: "19%",
    form: "White / pink completely water-soluble powder",
    image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-emerald-100 text-emerald-900",
    bestFor: ["All Horticultural Crops", "Drip Irrigation", "Foliar Sprays", "Nurseries"],
    optimalStage: "Early vegetative to reproductive transition phase",
    dosage: "5 - 7 g per liter of water for foliar spray (3 - 5 kg/acre via drip)",
    applicationMethod: "Drip fertigation or high-efficiency foliar spraying",
    soilSuitability: "Universal compatibility across all soil types",
    description: "A perfectly balanced equal-ratio NPK formulation enriched with chelated trace elements. 100% water soluble for instantaneous plant uptake through leaves and roots.",
    benefits: [
      "Equal 1:1:1 ratio provides comprehensive balanced nutrition in a single application",
      "Rapidly revives stressed, chlorotic, or stunted crops within 48 to 72 hours",
      "Zero residue; prevents clogging in drip emitters and micro-sprinklers",
      "Compatible with most neutral crop protection sprays"
    ],
    precautions: [
      "Avoid spraying during peak noon heat (>32°C) to prevent foliar evaporation",
      "Do not combine with unchelated calcium or copper-based fungicides in tank mix"
    ]
  },
  {
    id: "fert-npk-10-26-26",
    name: "NPK 10-26-26 (High Phos & Potash)",
    category: "Complex NPK",
    npk: "10-26-26",
    nitrogen: "10%",
    phosphorus: "26%",
    potassium: "26%",
    form: "Uniform grey / pinkish hard granules",
    image: "https://images.unsplash.com/photo-1599818451842-832c3f8582f3?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-indigo-100 text-indigo-900",
    bestFor: ["Sugarcane", "Cotton", "Potato", "Chili & Pepper", "Oilseeds", "Paddy"],
    optimalStage: "Basal dressing & early flowering/tuber initiation",
    dosage: "50 - 75 kg per acre",
    applicationMethod: "Band placement and root zone soil incorporation",
    soilSuitability: "Potassium and phosphorus-deficient soils",
    description: "High-grade complex fertilizer with high phosphorus and potassium combined with starter nitrogen. Perfect for flowering, fruit set, and tuber formation without excessive vine elongation.",
    benefits: [
      "High P & K ratio promotes heavy flowering and prevents flower drop",
      "Strengthens plant vascular bundles and disease resistance",
      "Homogeneous granules ensure uniform nutrient distribution in every grain",
      "Enhances tuber size in potatoes and boll weight in cotton"
    ],
    precautions: [
      "Apply with soil moisture for optimal granule dissolution"
    ]
  },

  // --- ORGANIC & BIO-FERTILIZERS ---
  {
    id: "fert-vermicompost",
    name: "Vermicompost (Earthworm Castings)",
    category: "Organic & Bio",
    npk: "2.5-1.5-1.8 + Microbes",
    nitrogen: "1.5 - 2.5%",
    phosphorus: "1.0 - 1.8%",
    potassium: "1.2 - 2.0%",
    organicCarbon: "18 - 25%",
    form: "Dark brown / black odorless crumbly compost",
    image: "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-amber-100 text-amber-900",
    bestFor: ["All Crops", "Organic Farming", "Orchards", "Vegetables", "Kitchen Gardens"],
    optimalStage: "Land preparation, transplanting, and ring dressing around tree canopy",
    dosage: "1 to 2 tonnes per acre (Field crops) or 5 kg per fruit tree",
    applicationMethod: "Soil incorporation and broadcasting before sowing",
    soilSuitability: "Degraded, low-organic matter, sandy, and clayey soils",
    description: "Nutrient-rich organic compost produced by earthworms (Eisenia fetida). Loaded with beneficial microflora, humic acid, auxins, and enzymes that permanently improve soil structure.",
    benefits: [
      "Increases soil organic carbon and cation exchange capacity (CEC)",
      "Improves water-holding capacity in sandy soils and aeration in heavy clays",
      "Contains living beneficial bacteria, mycorrhizae, and plant growth regulators",
      "Safe, eco-friendly, and prevents fertilizer burn"
    ],
    precautions: [
      "Keep moist and store under shade to preserve live beneficial microbial populations",
      "Do not mix directly with chemical insecticides or fungicides"
    ]
  },
  {
    id: "fert-neem-cake",
    name: "Neem Cake (De-oiled Neem Seed Meal)",
    category: "Organic & Bio",
    npk: "5.0-1.0-1.5 + Azadirachtin",
    nitrogen: "4.5 - 5.5%",
    phosphorus: "1.0 - 1.5%",
    potassium: "1.4 - 1.9%",
    bioActive: "Azadirachtin & Nimbin",
    form: "Brown organic coarse flakes / powder / pellets",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-lime-100 text-lime-900",
    bestFor: ["Ginger, Turmeric, Cardamom", "Vegetables & Tubers", "Sugarcane", "Fruit Orchards"],
    optimalStage: "Basal land preparation and pre-planting",
    dosage: "100 - 200 kg per acre",
    applicationMethod: "Broadcasting and mixing with top 15 cm soil",
    soilSuitability: "Nematode-infested, termite-prone, and sandy loam soils",
    description: "Dual-action organic fertilizer and natural bio-nematicide. Acts as a natural nitrification inhibitor when blended with Urea (Neem Coated Urea effect), cutting nitrogen leaching by 30%.",
    benefits: [
      "Controls soil-borne root-knot nematodes, white grubs, and termites naturally",
      "Slow-releases nitrogen over 60-90 days, reducing leaching losses",
      "Inhibits nitrifying bacteria, keeping nitrogen in crop-accessible ammonium form",
      "Supplies rich organic matter, sulfur, and micronutrients"
    ],
    precautions: [
      "Allow 7-10 days after soil incorporation before direct seed sowing"
    ]
  },
  {
    id: "fert-zinc-sulfate",
    name: "Zinc Sulfate Monohydrate (33% Zn + 15% S)",
    category: "Micronutrients",
    npk: "0-0-0 + 33% Zn + 15% S",
    zinc: "33%",
    sulfur: "15%",
    form: "Free-flowing white granules / crystalline powder",
    image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-cyan-100 text-cyan-900",
    bestFor: ["Paddy (Khaira Disease)", "Maize (White Bud)", "Wheat", "Citrus", "Cotton"],
    optimalStage: "Basal dressing or early foliar spray upon deficiency",
    dosage: "8 - 10 kg per acre (Soil) or 2 g/L with 1 g lime (Foliar)",
    applicationMethod: "Soil broadcasting before transplanting or foliar spray",
    soilSuitability: "High pH, calcareous, and intensively cropped paddy soils",
    description: "The primary cure and prevention for Zinc deficiency (Khaira disease in rice and White Bud in maize). Crucial for auxin hormone synthesis, enzyme activation, and internode elongation.",
    benefits: [
      "Cures bronzing, interveinal chlorosis, and stunted growth caused by zinc starvation",
      "Essential for tryptophan amino acid and natural auxin synthesis",
      "Increases grain yield by 15 - 25% in zinc-deficient fields",
      "High concentration (33% Zn) reduces handling volume"
    ],
    precautions: [
      "NEVER mix directly with phosphatic fertilizers (DAP/SSP) in the same slurry; forms insoluble zinc phosphate precipitate",
      "When foliar spraying, always add neutralizer (slaked lime or urea) to prevent leaf burn"
    ]
  },
  {
    id: "fert-boron",
    name: "Borax / Disodium Octaborate (20% Boron)",
    category: "Micronutrients",
    npk: "0-0-0 + 20% B",
    boron: "20%",
    form: "Fine white completely water-soluble powder",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=600&q=80",
    iconBg: "bg-sky-100 text-sky-900",
    bestFor: ["Mustard & Oilseeds", "Cauliflower (Browning)", "Tomato (Fruit Cracking)", "Cotton", "Papaya"],
    optimalStage: "Pre-flowering and early pod / fruit set",
    dosage: "1.0 - 1.5 g per liter of water (Foliar) or 2 - 3 kg/acre (Soil)",
    applicationMethod: "Foliar spray or soil application mixed with compost",
    soilSuitability: "Leached sandy soils and high pH calcareous soils",
    description: "Essential for pollen grain germination, pollen tube elongation, calcium translocation, and cell wall sugar transport. Prevents hollow heart, fruit cracking, and flower drop.",
    benefits: [
      "Enhances flower fertilization and dramatically reduces flower / fruit drop",
      "Prevents internal browning in cauliflower and skin cracking in tomato/citrus",
      "Improves sugar transport and oil synthesis in oilseeds",
      "100% water-soluble for instantaneous foliar correction"
    ],
    precautions: [
      "Strictly adhere to recommended dosage; narrow margin between boron requirement and toxicity",
      "Do not exceed 2 g/L in foliar applications"
    ]
  }
];
