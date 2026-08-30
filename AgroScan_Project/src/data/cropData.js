export const cropDatabase = [
  // ----------------------------------------------------
  // SEASON 1: Kharif / Monsoon
  // ----------------------------------------------------
  {
    id: "crop-rice-blast",
    cropName: "Rice (Paddy)",
    scientificName: "Oryza sativa",
    season: "Season-1",
    seasonLabel: "Kharif (Monsoon)",
    category: "Cereals",
    diseaseName: "Rice Blast",
    pathogenType: "Fungal",
    pathogenName: "Magnaporthe oryzae",
    severity: "High",
    imageUrl: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=800&q=80",
    quickSummary: "Spindle-shaped diamond lesions with grey centers causing leaf blight and panicle neck rot.",
    symptoms: [
      "Diamond or spindle-shaped lesions with ash-grey center and dark brown margin on leaves",
      "Blackish-brown rotting at the leaf collar (Collar Blast)",
      "Breakage of panicle node causing 'Neck Blast' with empty or unfilled chaffy grains",
      "Severe drying resembling wildfire during heading stage"
    ],
    causes: [
      "High relative humidity (>90%) with cloudy rainy weather",
      "Night temperatures ranging between 20°C - 24°C with heavy dew deposition",
      "Excessive and late application of Nitrogenous fertilizers (Urea)"
    ],
    chemicalTreatment: [
      "Tricyclazole 75% WP @ 0.6 g/L of water at initial symptom appearance",
      "Isoprothiolane 40% EC @ 1.5 mL/L or Kasugamycin 3% SL @ 2.5 mL/L",
      "Carbendazim 50% WP @ 1 g/L of water at 50% panicle emergence"
    ],
    organicRemedies: [
      "Foliar spray of Pseudomonas fluorescens @ 5 g/L or 10 mL/L",
      "Neem seed kernel extract (NSKE 5%) spray at 10-day intervals",
      "Spray fermented butter-milk (Chaach) diluted 1:10 with water as a bio-fungicide"
    ],
    fertilizerRequirement: {
      npkRatio: "120:60:40 kg/ha",
      recommendation: "Apply Nitrogen in 3 splits (50% basal, 25% at tillering, 25% at panicle initiation). Avoid excess Urea; add 25 kg/ha Zinc Sulfate.",
      schedule: "Basal: DAP + MOP + ZnSO4. Tillering: 1st split Urea. Panicle stage: 2nd split Urea."
    },
    preventiveMeasures: [
      "Seed treatment with Carbendazim 2g/kg seed or Trichoderma viride 4g/kg seed",
      "Maintain 20cm x 15cm hill spacing for proper aeration",
      "Grow resistant varieties: IR-64, CO-47, Swarna-Sub1",
      "Destroy and burn infected stubbles after harvest"
    ]
  },
  {
    id: "crop-cotton-leaf-curl",
    cropName: "Cotton",
    scientificName: "Gossypium hirsutum",
    season: "Season-1",
    seasonLabel: "Kharif (Monsoon)",
    category: "Cash Crops",
    diseaseName: "Cotton Leaf Curl Virus (CLCuV)",
    pathogenType: "Viral",
    pathogenName: "Begomovirus (Whitefly Vector)",
    severity: "Critical",
    imageUrl: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
    quickSummary: "Upward leaf curling, vein thickening, and enations causing stunted growth and boll drop.",
    symptoms: [
      "Upward or downward cupping and curling of upper leaves",
      "Prominent thickening and darkening of leaf veins visible on the underside",
      "Enations (small leaf-like cup outgrowths) on the lower surface of leaves",
      "Severe stunting, reduced flowering, and premature boll shedding"
    ],
    causes: [
      "Transmitted by the Whitefly vector (Bemisia tabaci)",
      "High temperature (35-40°C) with intermittent dry spells and humidity",
      "Presence of weed hosts (Kanghi/Abutilon indicum) near field borders"
    ],
    chemicalTreatment: [
      "Vector management: Diafenthiuron 50% WP @ 1.2 g/L or Afidopyropen 50 g/L @ 2 mL/L",
      "Acetamiprid 20% SP @ 0.4 g/L or Spiromesifen 22.9% SC @ 1.5 mL/L",
      "Foliar spray of Potassium Nitrate (13:0:45) @ 1% to boost vigor"
    ],
    organicRemedies: [
      "Install Yellow Sticky Traps @ 20 traps/acre at crop canopy level",
      "Spray 1500 ppm Cold-pressed Neem Oil @ 4 mL/L with surfactant",
      "Apply Beauveria bassiana bio-insecticide @ 5 g/L in evening hours"
    ],
    fertilizerRequirement: {
      npkRatio: "150:60:60 kg/ha",
      recommendation: "Ensure balanced Potash to strengthen plant cell walls. Apply 10 kg/ha Boron & Zinc mix.",
      schedule: "Basal: Full P & 50% K. Nitrogen in 3 splits at 30, 60, and 90 days after sowing."
    },
    preventiveMeasures: [
      "Eradicate weed hosts (Parthenium, Abutilon) around field borders",
      "Sow CLCuV tolerant Bt-cotton hybrids certified for your zone",
      "Plant barrier crops (2 rows of Sorghum/Maize) on field perimeters"
    ]
  },
  {
    id: "crop-soybean-rust",
    cropName: "Soybean",
    scientificName: "Glycine max",
    season: "Season-1",
    seasonLabel: "Kharif (Monsoon)",
    category: "Pulses & Oilseeds",
    diseaseName: "Soybean Rust",
    pathogenType: "Fungal",
    pathogenName: "Phakopsora pachyrhizi",
    severity: "High",
    imageUrl: "https://images.unsplash.com/photo-1599580661271-e9432650058b?auto=format&fit=crop&w=800&q=80",
    quickSummary: "Tan to dark brown pustules on lower leaf surface leading to early defoliation.",
    symptoms: [
      "Tiny chlorotic flecks on lower leaves turning into tan/reddish-brown volcano-shaped pustules",
      "Premature yellowing and leaf fall from the bottom canopy upwards",
      "Reduced pod formation and shriveled grains"
    ],
    causes: [
      "Continuous leaf wetness for 6+ hours with temperatures between 18°C - 26°C",
      "Dense canopy with poor air circulation"
    ],
    chemicalTreatment: [
      "Hexaconazole 5% EC @ 2 mL/L or Propiconazole 25% EC @ 1 mL/L",
      "Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 mL/L"
    ],
    organicRemedies: [
      "Spray Trichoderma harzianum @ 5 g/L with 2% jaggery solution",
      "Neem Cake soil application @ 250 kg/ha prior to sowing"
    ],
    fertilizerRequirement: {
      npkRatio: "30:60:40 kg/ha + Rhizobium + PSB",
      recommendation: "Inoculate seeds with Rhizobium culture. Apply Single Super Phosphate (SSP) for sulfur.",
      schedule: "Apply full NPK as basal dose during sowing."
    },
    preventiveMeasures: [
      "Avoid excess plant density; maintain 45cm row-to-row spacing",
      "Crop rotation with non-leguminous crops (Maize, Sorghum)",
      "Timely sowing in early monsoon window"
    ]
  },

  // ----------------------------------------------------
  // SEASON 2: Rabi / Winter
  // ----------------------------------------------------
  {
    id: "crop-wheat-rust",
    cropName: "Wheat",
    scientificName: "Triticum aestivum",
    season: "Season-2",
    seasonLabel: "Rabi (Winter)",
    category: "Cereals",
    diseaseName: "Yellow / Stripe Rust",
    pathogenType: "Fungal",
    pathogenName: "Puccinia striiformis f. sp. tritici",
    severity: "Critical",
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    quickSummary: "Bright yellow powdery pustules arranged in parallel stripes along leaf veins.",
    symptoms: [
      "Small bright yellow to lemon-yellow pustules forming continuous narrow linear stripes",
      "Yellow dust (urediniospores) rubs off easily on clothes and fingertips",
      "Leaf tissue becomes necrotic, leading to complete foliage burnout",
      "Grains become severely shriveled with drastic yield loss"
    ],
    causes: [
      "Cool temperatures (10°C - 15°C) combined with high morning humidity (>85%) and dense fog",
      "Wind-blown spores traveling from foothill areas to plains"
    ],
    chemicalTreatment: [
      "Propiconazole 25% EC (Tilt) @ 1 mL/L of water at the first sign of yellow pustules",
      "Tebuconazole 25.9% EC @ 1 mL/L or Trifloxystrobin 25% + Tebuconazole 50% WG @ 0.6 g/L",
      "Repeat spray after 15 days if cloudy cool weather persists"
    ],
    organicRemedies: [
      "Foliar spray of 10% Cow urine solution mixed with Hing (Asafoetida @ 1g/L)",
      "Foliar application of Trichoderma viride culture @ 5 g/L"
    ],
    fertilizerRequirement: {
      npkRatio: "120:60:40 kg/ha",
      recommendation: "Split Urea in 2 top dressings at Crown Root Initiation (21 DAS) and Tillering (45 DAS). Apply Zinc Sulfate 25 kg/ha.",
      schedule: "Basal: 1/3 N + Full P + Full K + ZnSO4. 1st Irrigation: 1/3 N. 2nd Irrigation: 1/3 N."
    },
    preventiveMeasures: [
      "Cultivate certified rust-resistant varieties: HD-2967, HD-3086, DBW-187, PBW-550",
      "Avoid delayed December sowing; complete sowing between Nov 5 - Nov 25",
      "Monitor northern border zones for early warning bulletins"
    ]
  },
  {
    id: "crop-mustard-white-rust",
    cropName: "Mustard & Rapeseed",
    scientificName: "Brassica juncea",
    season: "Season-2",
    seasonLabel: "Rabi (Winter)",
    category: "Pulses & Oilseeds",
    diseaseName: "White Rust & Stag-head",
    pathogenType: "Fungal",
    pathogenName: "Albugo candida",
    severity: "High",
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    quickSummary: "White chalky pustules on lower leaf surface and floral malformation (staghead).",
    symptoms: [
      "Prominent white or creamy-yellow blister-like pustules on lower leaf epidermis",
      "Systemic infection causing swelling, twisting, and floral distortion into a 'staghead' shape",
      "No seed setting in deformed floral heads"
    ],
    causes: [
      "Overcast winter skies, temperatures around 12°C - 18°C, and heavy morning dew",
      "Infected crop debris and oospores in soil"
    ],
    chemicalTreatment: [
      "Metalaxyl 8% + Mancozeb 64% WP (Ridomil MZ) @ 2 g/L of water",
      "Mancozeb 75% WP @ 2.5 g/L or Copper Oxychloride 50% WP @ 2.5 g/L"
    ],
    organicRemedies: [
      "Seed treatment with Trichoderma harzianum @ 10 g/kg seed",
      "Spray garlic bulb extract (5%) mixed with soap nut solution"
    ],
    fertilizerRequirement: {
      npkRatio: "80:40:40 kg/ha + 20 kg/ha Sulphur",
      recommendation: "Sulphur (Bentonite Sulphur) is crucial for Brassica oil synthesis and disease defense.",
      schedule: "Apply full P, K, Sulphur and half N at sowing. Top dress remaining N at flowering."
    },
    preventiveMeasures: [
      "Timely sowing in October to escape peak fog periods in late December",
      "Collect and incinerate deformed stag-heads during field scouting",
      "Crop rotation with non-cruciferous crops for 2 seasons"
    ]
  },
  {
    id: "crop-chickpea-wilt",
    cropName: "Chickpea (Gram)",
    scientificName: "Cicer arietinum",
    season: "Season-2",
    seasonLabel: "Rabi (Winter)",
    category: "Pulses & Oilseeds",
    diseaseName: "Fusarium Wilt",
    pathogenType: "Fungal",
    pathogenName: "Fusarium oxysporum f. sp. ciceris",
    severity: "High",
    imageUrl: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=800&q=80",
    quickSummary: "Drooping of petioles, yellowing of leaves, and dark vascular browning inside split stems.",
    symptoms: [
      "Sudden drooping of leaves and petioles starting from upper branches",
      "Dark brown to purple xylem vascular discoloration when main root/stem is split open",
      "Partial wilting of one side of the plant followed by total plant collapse"
    ],
    causes: [
      "Soil-borne pathogen surviving as chlamydospores in soil for over 5 years",
      "Warm soil temperatures (25°C) during seedling and podding stages"
    ],
    chemicalTreatment: [
      "Seed treatment: Carbendazim 12% + Mancozeb 63% WP (SAAF) @ 2 g/kg seed",
      "Soil drenching around plant base with Carbendazim 50% WP @ 1 g/L"
    ],
    organicRemedies: [
      "Enrich soil with Trichoderma viride @ 2.5 kg mixed in 250 kg FYM per acre",
      "Seed inoculation with Rhizobium + Pseudomonas fluorescens @ 10 g/kg"
    ],
    fertilizerRequirement: {
      npkRatio: "20:50:20 kg/ha + PSB culture",
      recommendation: "Apply Phosphate Solubilizing Bacteria to mobilize soil-fixed phosphorus for strong root nodules.",
      schedule: "All fertilizers applied as basal band placement 5cm below seed level."
    },
    preventiveMeasures: [
      "Deep summer ploughing to expose fungal spores to solar heat",
      "Grow wilt-resistant cultivars: JG-11, JG-315, Vishal, Vijay",
      "Avoid early sowing in warm soils; sow when soil temp drops below 22°C"
    ]
  },

  // ----------------------------------------------------
  // SEASON 3: Zaid / Summer
  // ----------------------------------------------------
  {
    id: "crop-maize-blight",
    cropName: "Maize (Corn)",
    scientificName: "Zea mays",
    season: "Season-3",
    seasonLabel: "Zaid (Summer / Pre-Monsoon)",
    category: "Cereals",
    diseaseName: "Maydis Leaf Blight",
    pathogenType: "Fungal",
    pathogenName: "Bipolaris maydis",
    severity: "Moderate",
    imageUrl: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    quickSummary: "Small diamond-shaped tan to buff lesions with reddish-brown borders between veins.",
    symptoms: [
      "Elongated rectangular to diamond-shaped lesions between leaf veins",
      "Lesions show tan or straw-colored centers with distinct reddish-brown borders",
      "Coalescing lesions cause extensive leaf scorching ('leaf firing')",
      "Infection can spread to husk and ear rots"
    ],
    causes: [
      "Warm humid climate with temperatures between 24°C - 30°C",
      "Intermittent light showers with overcast skies"
    ],
    chemicalTreatment: [
      "Mancozeb 75% WP @ 2.5 g/L of water at 35-40 days after sowing",
      "Azoxystrobin 23% SC @ 1 mL/L or Propiconazole 25% EC @ 1 mL/L"
    ],
    organicRemedies: [
      "Spray 5% fermented Panchagavya solution at 15-day intervals",
      "Foliar spray of Ampelomyces quisqualis bio-fungicide @ 5 g/L"
    ],
    fertilizerRequirement: {
      npkRatio: "120:60:50 kg/ha",
      recommendation: "Zinc Sulfate (25 kg/ha) application at sowing is critical to prevent white bud deficiency.",
      schedule: "1/3 N + full P & K at sowing; 1/3 N at knee-high stage; 1/3 N at tasseling stage."
    },
    preventiveMeasures: [
      "Remove infected bottom leaves touching the soil",
      "Maintain adequate plant spacing (60cm x 20cm)",
      "Plant resistant hybrids: HQPM-1, Bio-9681, Pusa Composite"
    ]
  },
  {
    id: "crop-watermelon-anthracnose",
    cropName: "Watermelon & Melons",
    scientificName: "Citrullus lanatus",
    season: "Season-3",
    seasonLabel: "Zaid (Summer)",
    category: "Horticulture & Fruits",
    diseaseName: "Anthracnose",
    pathogenType: "Fungal",
    pathogenName: "Colletotrichum orbiculare",
    severity: "High",
    imageUrl: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    quickSummary: "Circular water-soaked sunken lesions on fruits with pinkish gelatinous spore masses.",
    symptoms: [
      "Small circular water-soaked spots on leaves turning dark brown or black with yellow halos",
      "Elongated black sunken lesions on vines causing stem girdling",
      "Circular sunken craters on fruits with pink gelatinous spore ooze during dampness",
      "Bitter fruit taste and unmarketable rotting"
    ],
    causes: [
      "Overhead irrigation splashing fungal spores onto leaves and fruit surfaces",
      "High daytime heat (28°C - 32°C) combined with high nighttime humidity"
    ],
    chemicalTreatment: [
      "Chlorothalonil 75% WP @ 2 g/L or Difenoconazole 25% EC @ 0.5 mL/L",
      "Carbendazim 12% + Mancozeb 63% WP @ 2 g/L at early vine development"
    ],
    organicRemedies: [
      "Mulching with silver-black polyethylene film to prevent soil-to-leaf splashing",
      "Foliar spray of Potassium Silicate @ 2 g/L to harden cuticle layer"
    ],
    fertilizerRequirement: {
      npkRatio: "100:60:80 kg/ha via fertigation",
      recommendation: "Provide Calcium Nitrate (5 g/L foliar) and Boron to prevent fruit cracking and strengthen rind.",
      schedule: "Apply 19:19:19 during vegetative phase; shift to 0:52:34 & 13:0:45 during fruiting."
    },
    preventiveMeasures: [
      "Use drip irrigation exclusively instead of overhead sprinklers",
      "Practice 3-year crop rotation with non-cucurbit crops",
      "Treat seeds with hot water (50°C for 20 mins) or Thiram @ 3 g/kg"
    ]
  },
  {
    id: "crop-moong-ymv",
    cropName: "Green Gram (Moong)",
    scientificName: "Vigna radiata",
    season: "Season-3",
    seasonLabel: "Zaid (Summer)",
    category: "Pulses & Oilseeds",
    diseaseName: "Yellow Mosaic Virus (MYMV)",
    pathogenType: "Viral",
    pathogenName: "Mungbean Yellow Mosaic Begomovirus",
    severity: "Critical",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    quickSummary: "Bright yellow and green mosaic mottling on leaves, stunted pods, and reduced yield.",
    symptoms: [
      "Irregular alternating bright yellow and dark green patches on young leaves",
      "Complete chlorosis/bleaching of entire foliage in severe infections",
      "Stunted pods with few, small, and wrinkled seeds"
    ],
    causes: [
      "Spread rapidly by the vector Whitefly (Bemisia tabaci)",
      "High temperatures (35°C - 42°C) with dry atmospheric conditions"
    ],
    chemicalTreatment: [
      "Thiamethoxam 25% WG @ 0.3 g/L or Dimethoate 30% EC @ 1.7 mL/L",
      "Acetamiprid 20% SP @ 0.3 g/L at first appearance of whiteflies"
    ],
    organicRemedies: [
      "Install 15 Yellow Sticky Traps per acre",
      "Foliar spray of 5% Neem seed kernel extract (NSKE) or Neem oil 1500ppm @ 3 mL/L"
    ],
    fertilizerRequirement: {
      npkRatio: "20:40:20 kg/ha",
      recommendation: "Apply Single Super Phosphate (SSP) at sowing. Foliar spray 2% DAP at 30 & 45 DAS.",
      schedule: "Apply full basal dose at sowing."
    },
    preventiveMeasures: [
      "Grow resistant varieties: IPM 02-3, Samrat, Shikha, MH-421",
      "Seed treatment with Imidacloprid 600 FS @ 5 mL/kg seed",
      "Destroy collateral weed hosts around field borders"
    ]
  },

  // ----------------------------------------------------
  // SEASON 4: Perennial / Cash Crops / Year-Round
  // ----------------------------------------------------
  {
    id: "crop-sugarcane-redrot",
    cropName: "Sugarcane",
    scientificName: "Saccharum officinarum",
    season: "Season-4",
    seasonLabel: "Perennial / Year-Round",
    category: "Cash Crops",
    diseaseName: "Red Rot",
    pathogenType: "Fungal",
    pathogenName: "Colletotrichum falcatum",
    severity: "Critical",
    imageUrl: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    quickSummary: "Yellowing and drying of crown leaves with internal red stalk tissue and white cross-patches.",
    symptoms: [
      "Third and fourth leaves from top show yellowing and gradual drying from tip to margin",
      "Splitting the cane longitudinally reveals dark red pith tissue interrupted by white horizontal bands",
      "Characteristic sour alcoholic odor emanating from split canes",
      "Shrinking and shriveling of entire cane with hollow pith"
    ],
    causes: [
      "Using infected seed cane setts during planting",
      "Waterlogged conditions and poor soil drainage during monsoon",
      "Continuous ratooning of diseased fields"
    ],
    chemicalTreatment: [
      "Sett treatment with Carbendazim 50% WP @ 1 g/L or Thiophanate Methyl 70% WP @ 1 g/L for 15 mins",
      "Soil drenching with Copper Oxychloride 50% WP @ 2.5 g/L"
    ],
    organicRemedies: [
      "Sett treatment with Trichoderma harzianum @ 10 g/L water",
      "Apply 2.5 kg Trichoderma enriched in 500 kg Farm Yard Manure (FYM) per acre"
    ],
    fertilizerRequirement: {
      npkRatio: "250:100:120 kg/ha",
      recommendation: "Sugarcane is a heavy feeder. Apply Ferrous Sulfate 25 kg/ha if chlorosis appears.",
      schedule: "Basal: Full P + 1/3 N + 1/3 K. Tillering: 1/3 N + 1/3 K. Earthing up: 1/3 N + 1/3 K."
    },
    preventiveMeasures: [
      "Use certified disease-free seed setts from registered nurseries (Co-0238, Co-86032, Co-11015)",
      "Strictly avoid ratooning in infected fields; rotate with paddy or green manure",
      "Ensure laser-leveled fields with active drainage channels"
    ]
  },
  {
    id: "crop-tomato-early-blight",
    cropName: "Tomato",
    scientificName: "Solanum lycopersicum",
    season: "Season-4",
    seasonLabel: "Perennial / Year-Round",
    category: "Horticulture & Vegetables",
    diseaseName: "Early Blight & Late Blight",
    pathogenType: "Fungal",
    pathogenName: "Alternaria solani & Phytophthora infestans",
    severity: "High",
    imageUrl: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=800&q=80",
    quickSummary: "Concentric target-like rings on older leaves and dark sunken rot on fruit stem ends.",
    symptoms: [
      "Concentric dark brown rings resembling an archery target on lower mature leaves",
      "Surrounding leaf tissue turns yellow (chlorotic halo) and drops prematurely",
      "Dark leathery sunken black rot on tomato fruits near the calyx stem end",
      "Rapid foliage wilting and brown water-soaked blotches in Late Blight"
    ],
    causes: [
      "Warm temperatures (24°C - 29°C) with frequent rainfall, heavy morning dew, or overhead sprinklers",
      "Soil-to-leaf splash during heavy rains"
    ],
    chemicalTreatment: [
      "Mancozeb 75% WP @ 2 g/L or Chlorothalonil 75% WP @ 2 g/L for Early Blight",
      "Cymoxanil 8% + Mancozeb 64% WP @ 2 g/L or Dimethomorph 50% WP @ 1 g/L for Late Blight",
      "Copper Hydroxide 53.8% DF @ 2 g/L as preventive contact spray"
    ],
    organicRemedies: [
      "Foliar spray of Bacillus subtilis bio-fungicide @ 5 g/L",
      "Neem seed kernel extract (NSKE 5%) spray every 10 days",
      "Bordeaux Mixture (1%) spray prior to monsoon"
    ],
    fertilizerRequirement: {
      npkRatio: "150:100:120 kg/ha",
      recommendation: "Provide regular Calcium Nitrate (5 g/L foliar) + Boron (1 g/L) to prevent blossom end rot and strengthen plant walls.",
      schedule: "Apply NPK through drip fertigation in weekly splits with humic acid."
    },
    preventiveMeasures: [
      "Stake tomato vines and prune bottom 12 inches of foliage to keep leaves off damp soil",
      "Mulch beds with plastic or straw to prevent splash dispersal",
      "Use drip irrigation; never wet foliage late in the afternoon"
    ]
  }
];

// ----------------------------------------------------
// FERTILIZER CATALOG
// ----------------------------------------------------
export const fertilizerCatalog = [
  {
    id: "fert-urea",
    name: "Urea (46% N)",
    type: "Nitrogenous",
    composition: "46% Nitrogen (Amide form)",
    icon: "FlaskConical",
    color: "emerald",
    bestFor: "Vegetative growth, leaf canopy development, chlorophyll formation",
    crops: ["Rice", "Wheat", "Maize", "Sugarcane", "Cotton"],
    dosageGuide: "100 - 150 kg/hectare in 2-3 split applications",
    applicationMethod: "Broadcasting with light irrigation / Soil incorporation",
    precautions: "Do not apply on waterlogged fields without draining; avoid excessive single doses which cause disease susceptibility."
  },
  {
    id: "fert-dap",
    name: "Di-Ammonium Phosphate (DAP)",
    type: "Phosphatic + Nitrogen",
    composition: "18% Nitrogen, 46% Phosphorus (P2O5)",
    icon: "Layers",
    color: "amber",
    bestFor: "Strong root establishment, tillering, early vigor, flowering",
    crops: ["Wheat", "Mustard", "Chickpea", "Potato", "Paddy"],
    dosageGuide: "100 - 125 kg/hectare as basal dose at sowing",
    applicationMethod: "Basal placement 5 cm below and to the side of seeds",
    precautions: "Place below seed level to prevent seedling root burn; do not mix directly with zinc fertilizers."
  },
  {
    id: "fert-mop",
    name: "Muriate of Potash (MOP)",
    type: "Potassic",
    composition: "60% Potassium (K2O)",
    icon: "ShieldCheck",
    color: "rose",
    bestFor: "Disease resistance, drought tolerance, grain filling, tuber weight",
    crops: ["Potato", "Sugarcane", "Tomato", "Cotton", "Banana"],
    dosageGuide: "50 - 100 kg/hectare",
    applicationMethod: "Basal application and top dressing at fruit/grain filling",
    precautions: "For chloride-sensitive crops like Tobacco & Grapes, use Sulfate of Potash (SOP) instead."
  },
  {
    id: "fert-npk-191919",
    name: "Water Soluble NPK (19:19:19)",
    type: "Complex / Fertigation",
    composition: "19% N, 19% P, 19% K (100% water soluble)",
    icon: "Droplets",
    color: "sky",
    bestFor: "Balanced vegetative and reproductive growth, quick nutrient boost",
    crops: ["Tomato", "Watermelon", "Cotton", "Vegetables", "Flowers"],
    dosageGuide: "5 g/L foliar spray OR 3-5 kg/acre via drip irrigation weekly",
    applicationMethod: "Foliar spray / Drip Fertigation",
    precautions: "Spray during early morning or late evening to prevent leaf scorching."
  },
  {
    id: "fert-vermicompost",
    name: "Organic Vermicompost",
    type: "Organic / Bio",
    composition: "Humic acid, organic carbon (15-20%), beneficial microbes",
    icon: "Sprout",
    color: "emerald",
    bestFor: "Soil aeration, microbial diversity, moisture retention, root health",
    crops: ["All Crops", "Horticulture", "Organic Farming", "Nurseries"],
    dosageGuide: "2 - 5 tonnes/hectare incorporated into soil",
    applicationMethod: "Broadcasting during final land preparation",
    precautions: "Store in shade and keep slightly moist to maintain active micro-flora."
  },
  {
    id: "fert-zinc-sulfate",
    name: "Zinc Sulfate (ZnSO4 21% / 33%)",
    type: "Micronutrient",
    composition: "21% or 33% Zinc + 10-15% Sulfur",
    icon: "Sparkles",
    color: "violet",
    bestFor: "Preventing Khaira disease in Rice, White bud in Maize, leaf mottling",
    crops: ["Rice", "Maize", "Wheat", "Citrus", "Pulses"],
    dosageGuide: "25 kg/ha soil application OR 0.5% foliar spray with 0.25% lime",
    applicationMethod: "Soil application once every 2-3 years OR foliar correction",
    precautions: "Never mix Zinc Sulfate directly with DAP or Phosphate fertilizers in spray tank."
  }
];

// ----------------------------------------------------
// REGIONAL CROPS DATA
// ----------------------------------------------------
export const regionalData = [
  {
    id: "region-north",
    regionName: "Northern Alluvial Plains",
    states: "Punjab, Haryana, Uttar Pradesh, Bihar",
    climate: "Sub-tropical: Hot summers, chilly winters with fog",
    soilType: "Deep Alluvial, Loamy to Clay Loam (pH 7.0 - 8.2)",
    rainfall: "600 - 1100 mm annually",
    majorCrops: [
      { name: "Wheat (Rabi)", season: "Nov - Apr", diseaseRisk: "Yellow Stripe Rust, Karnal Bunt" },
      { name: "Paddy / Basmati (Kharif)", season: "Jun - Nov", diseaseRisk: "Rice Blast, Bacterial Leaf Blight" },
      { name: "Sugarcane (Perennial)", season: "Feb - Dec", diseaseRisk: "Red Rot, Top Borer" },
      { name: "Mustard (Rabi)", season: "Oct - Mar", diseaseRisk: "White Rust, Alternaria Blight" }
    ],
    recommendedRotations: ["Paddy - Wheat - Moong", "Maize - Mustard - Cowpea", "Sugarcane - Ratoon - Wheat"]
  },
  {
    id: "region-west",
    regionName: "Western Arid & Semi-Arid Zone",
    states: "Rajasthan, Gujarat, Western Madhya Pradesh",
    climate: "Arid to Semi-arid: Extreme heat, low erratic rainfall",
    soilType: "Sandy, Desert soils, Medium Black soils (pH 7.5 - 8.8)",
    rainfall: "300 - 650 mm annually",
    majorCrops: [
      { name: "Pearl Millet / Bajra", season: "Jun - Sep", diseaseRisk: "Downy Mildew, Ergot" },
      { name: "Mustard & Rapeseed", season: "Oct - Mar", diseaseRisk: "White Rust, Powdery Mildew" },
      { name: "Cotton (Bt)", season: "May - Dec", diseaseRisk: "Leaf Curl Virus, Pink Bollworm" },
      { name: "Groundnut", season: "Jun - Oct", diseaseRisk: "Tikka Leaf Spot, Collar Rot" },
      { name: "Cumin & Spices", season: "Nov - Mar", diseaseRisk: "Blight, Wilt" }
    ],
    recommendedRotations: ["Bajra - Mustard - Fallow", "Groundnut - Wheat", "Cotton - Summer Pulses"]
  },
  {
    id: "region-south",
    regionName: "Southern Peninsular Plateau",
    states: "Karnataka, Tamil Nadu, Andhra Pradesh, Telangana",
    climate: "Tropical Semi-arid to Humid: Moderate winters, dual monsoon",
    soilType: "Red Sandy Loam, Deep Black Cotton Regur Soil (pH 6.5 - 8.0)",
    rainfall: "750 - 1300 mm annually",
    majorCrops: [
      { name: "Rice (Dual Season)", season: "Kuruvai / Samba", diseaseRisk: "Blast, Brown Spot, Sheath Blight" },
      { name: "Cotton", season: "Jul - Jan", diseaseRisk: "Boll Rot, Leaf Curl, Spodoptera" },
      { name: "Red Gram / Pigeonpea", season: "Jun - Jan", diseaseRisk: "Sterility Mosaic, Fusarium Wilt" },
      { name: "Tomato & Chillies", season: "Year-Round", diseaseRisk: "Early Blight, Anthracnose, Leaf Curl" },
      { name: "Ragi & Millets", season: "Jul - Nov", diseaseRisk: "Blast, Smut" }
    ],
    recommendedRotations: ["Rice - Rice - Pulses", "Cotton - Groundnut", "Ragi - Groundnut - Vegetables"]
  },
  {
    id: "region-east",
    regionName: "Eastern Coastal & Delta Plains",
    states: "West Bengal, Odisha, Assam, Coastal Andhra",
    climate: "Humid Tropical: Heavy monsoon rainfall, mild winters",
    soilType: "Deltaic Alluvial, Coastal Saline, Acidic Clay (pH 5.2 - 6.8)",
    rainfall: "1400 - 2500 mm annually",
    majorCrops: [
      { name: "Rice (Aman & Boro)", season: "Tri-seasonal", diseaseRisk: "Bacterial Blight, Sheath Rot, Blast" },
      { name: "Jute", season: "Mar - Aug", diseaseRisk: "Stem Rot, Root Rot" },
      { name: "Potato", season: "Nov - Mar", diseaseRisk: "Late Blight (Severe), Black Scurf" },
      { name: "Tea & Spices", season: "Year-Round", diseaseRisk: "Red Rust, Blister Blight" }
    ],
    recommendedRotations: ["Aman Rice - Potato - Boro Rice", "Jute - Aman Rice - Mustard"]
  },
  {
    id: "region-central",
    regionName: "Central Deccan Plateau",
    states: "Maharashtra, Chhattisgarh, Eastern MP",
    climate: "Sub-humid to Semi-arid: Hot dry summers, well-defined monsoon",
    soilType: "Heavy Black Regur Soil, High clay content (pH 7.2 - 8.5)",
    rainfall: "800 - 1200 mm annually",
    majorCrops: [
      { name: "Soybean", season: "Jun - Oct", diseaseRisk: "Soybean Rust, Yellow Mosaic" },
      { name: "Cotton", season: "Jun - Dec", diseaseRisk: "Grey Mildew, Bacterial Blight" },
      { name: "Sugarcane", season: "Jan - Dec", diseaseRisk: "Red Rot, Grassy Shoot" },
      { name: "Chickpea (Gram)", season: "Oct - Mar", diseaseRisk: "Fusarium Wilt, Dry Root Rot" },
      { name: "Onion", season: "Kharif & Rabi", diseaseRisk: "Purple Blotch, Stemphylium Blight" }
    ],
    recommendedRotations: ["Soybean - Gram - Summer Moong", "Cotton - Wheat/Gram", "Soybean - Onion"]
  }
];
// ================= INTEGRATED PEST MANAGEMENT (IPM) DATASET =================
export const pestCategories = [
  { id: 'all', name: 'All Crop Pests', count: 4 },
  { id: 'sucking', name: 'Sap-Sucking Insects', count: 1 },
  { id: 'borers', name: 'Caterpillars & Borers', count: 2 },
  { id: 'mites', name: 'Mites & Micro-Parasites', count: 1 }
];

export const pestDiseasesData = [
  {
    id: 'pest-aphids',
    commonName: 'Cotton & Melon Aphids',
    scientificName: 'Aphis gossypii',
    category: 'sucking',
    affectedCrops: ['Cotton', 'Tomato', 'Cucumber', 'Potato', 'Eggplant'],
    season: 'Early Spring to Mid Summer (Warm & Humid)',
    riskWeather: 'Temperatures 24°C - 30°C and Humidity > 65%',
    stickyTrapThreshold: '50 aphids / yellow sticky trap / 24h',
    severity: 'High',
    damageSymptoms: 'Leaf curling, yellow chlorotic stippling, honeydew secretion leading to black sooty mold, vector for Cucumber Mosaic Virus.',
    photoUrl: 'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=1000&q=80',
    organicTreatment: {
      name: 'Neem Oil & Bio-Predators',
      method: 'Spray 0.5% cold-pressed Neem Oil (Azadirachtin 10,000 ppm) at 5ml/L water during late evening. Release Ladybird Beetles (Coccinella septempunctata) and Green Lacewings (Chrysoperla carnea) at 5,000 predators/hectare.'
    },
    chemicalTreatment: {
      name: 'Systemic Neonicotinoid',
      activeIngredient: 'Imidacloprid 17.8% SL',
      dosage: '0.5 ml per liter of water (200 ml/hectare)',
      waitingPeriod: '7-10 days before harvest'
    },
    preventiveCultural: [
      'Install 20-25 Yellow Sticky Traps per acre at canopy height.',
      'Grow border crops of Maize or Sorghum as natural windbreaks and barrier trap crops.',
      'Avoid excessive synthetic Nitrogen fertilization which fosters rapid aphid colonies.'
    ]
  },
  {
    id: 'pest-fall-armyworm',
    commonName: 'Fall Armyworm & Bollworm',
    scientificName: 'Spodoptera frugiperda / Helicoverpa armigera',
    category: 'borers',
    affectedCrops: ['Maize', 'Sorghum', 'Rice', 'Cotton', 'Sweet Corn'],
    season: 'Monsoon / Kharif & Post-Rainy Season',
    riskWeather: 'Warm nights (22°C - 28°C) following rain showers favoring moth flight',
    stickyTrapThreshold: '8-10 adult moths / pheromone delta trap / night',
    severity: 'Critical',
    damageSymptoms: 'Severe defoliation, shot-hole chewing on central whorl leaves, sawdust-like larval frass accumulation, destroyed tassels and cobs.',
    photoUrl: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=1000&q=80',
    organicTreatment: {
      name: 'Bacillus thuringiensis (Bt) & Pheromone Trapping',
      method: 'Foliar application of Bt kurstaki (Dipel) @ 2g/L or Beauveria bassiana 1x10^8 CFU/g @ 5g/L. Deploy Funnel Pheromone Traps @ 5 traps/acre.'
    },
    chemicalTreatment: {
      name: 'Diamide Insecticide',
      activeIngredient: 'Chlorantraniliprole 18.5% SC',
      dosage: '0.4 ml per liter of water (60 ml/acre in 150L water)',
      waitingPeriod: '14 days'
    },
    preventiveCultural: [
      'Deep summer plowing to expose pupae to predatory birds and solar heat.',
      'Intercropping maize with pulses (Cowpea / Pigeon pea) in 4:1 ratio.',
      'Application of sand + wood ash (9:1) into leaf whorls in early vegetative stages.'
    ]
  },
  {
    id: 'pest-stem-borer',
    commonName: 'Yellow Stem Borer',
    scientificName: 'Scirpophaga incertulas',
    category: 'borers',
    affectedCrops: ['Rice / Paddy', 'Sugarcane', 'Wheat'],
    season: 'Tillering to Panicle Initiation Stage',
    riskWeather: 'High relative humidity (>80%) and moderate temp (25°C - 30°C)',
    stickyTrapThreshold: '5 egg masses / m² or 1 adult moth / m²',
    severity: 'High',
    damageSymptoms: 'Death of central vegetative shoot ("Dead Heart") in early stage, and empty white unfilled panicles ("Whitehead") in reproductive stage.',
    photoUrl: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1000&q=80',
    organicTreatment: {
      name: 'Egg Parasitoid Biocontrol',
      method: 'Release Trichogramma japonicum egg parasitoids @ 100,000/hectare (5 tricho-cards/ha) released 3 times at weekly intervals.'
    },
    chemicalTreatment: {
      name: 'Granular Systemic Cartap',
      activeIngredient: 'Cartap Hydrochloride 4% GR',
      dosage: '10 kg per acre applied directly in standing water (2-3 cm)',
      waitingPeriod: '21 days'
    },
    preventiveCultural: [
      'Clip off top 2-3 inches of seedling leaves before transplanting to remove egg masses.',
      'Install solar-powered LED light traps @ 1 trap / hectare to monitor moth emergence.',
      'Synchronized community planting within a 15-day window to break pest cycle.'
    ]
  },
  {
    id: 'pest-spider-mites',
    commonName: 'Two-Spotted Red Spider Mite',
    scientificName: 'Tetranychus urticae',
    category: 'mites',
    affectedCrops: ['Tomato', 'Eggplant', 'Capsicum', 'Strawberry', 'Cotton'],
    season: 'Dry Warm Summer Months',
    riskWeather: 'Dry hot winds, temperatures > 32°C, low humidity < 40%',
    stickyTrapThreshold: '5 mites / leaf sample under 10x lens',
    severity: 'Medium',
    damageSymptoms: 'Fine speckling on upper leaf surface, dense silken webbing on lower surface, bronzed brittle foliage, premature leaf drop.',
    photoUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1000&q=80',
    organicTreatment: {
      name: 'Sulfur Dusting & Phytoseiid Predatory Mites',
      method: 'Dust Micronized Wettable Sulfur 80% WP @ 3g/L or release predatory mites (Phytoseiulus persimilis) @ 20 mites/m².'
    },
    chemicalTreatment: {
      name: 'Specific Acaricide',
      activeIngredient: 'Abamectin 1.9% EC',
      dosage: '0.5 ml per liter of water (150 ml/acre)',
      waitingPeriod: '7 days'
    },
    preventiveCultural: [
      'Maintain regular overhead sprinkler irrigation to wash mites off leaf canopies.',
      'Avoid dusty field roads by watering perimeters (dust protects mites from natural predators).'
    ]
  }
];

export const smartStickyTrapSensors = {
  id: 'trap-sentinel-04',
  name: 'Optical Smart Sticky-Trap Node 4B',
  status: 'Online',
  battery: 94,
  location: 'Sector 4B (Northwest Quadrant)',
  lastImageCapturedAgo: '6 minutes ago',
  pestCounts: [
        { name: 'Cotton Aphids', count: 28, threshold: 50, status: 'Moderate', color: 'amber' },
    { name: 'Thrips', count: 12, threshold: 30, status: 'Normal', color: 'emerald' },
    { name: 'Armyworm Moths', count: 3, threshold: 8, status: 'Normal', color: 'emerald' }
  ],
  economicThresholdBreached: true,
  recommendedAction: 'Immediate release of Encarsia formosa bio-predators or targeted 0.5% neem oil foliar spray across Sector 4B.'
};
