export const initialReports = [
  {
    id: "report-AIA-4921",
    code: "#AIA-4921",
    diseaseName: "Potato Late Blight Detection",
    scientificName: "Phytophthora infestans",
    commonName: "Potato Late Blight",
    sector: "Field Sector 7 • Prairie Ridge",
    quadrant: "Northeast Quadrant",
    crop: "Solanum tuberosum (Potato)",
    scannedAgo: "Scanned 2 hours ago by Sentinel Drone Alpha-2",
    scanTimestamp: "Today at 09:42 AM",
    confidence: 98.4,
    severity: "High",
    camera: "Multispectral 16MP 4K",
    resolution: "3840x2160 Ultra HD",
    lightCond: "Overcast (Calibrated Diffuse)",
    gpsCoords: "41.4025°N, 93.2841°W",
    imageUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1200&q=80",
    boundingBoxes: [
      {
        id: "lesion-a",
        label: "Lesion A",
        stage: "Early Stage Necrosis",
        x: 24,
        y: 22,
        width: 36,
        height: 42,
        confidence: 98.4,
        severity: "High",
        color: "red",
        description: "Water-soaked irregular necrotic lesion with active translucent chlorotic border."
      },
      {
        id: "spore-b",
        label: "Spore Cluster B",
        stage: "Active Sporulation",
        x: 64,
        y: 36,
        width: 22,
        height: 28,
        confidence: 95.1,
        severity: "High",
        color: "red",
        description: "White downy mildew sporulation visible along leaf margin veins."
      }
    ],
    criticalAlert: {
      title: "CRITICAL DETECTION: Phytophthora infestans",
      subtitle: "High risk of rapid airborne zoospore transmission across Sector 7 under current 65% humidity."
    },
    treatments: [
      {
        step: 1,
        title: "Systemic Fungicide Application",
        text: "Apply Metalaxyl 8% + Mancozeb 64% WP @ 2.5 g/L of water or Cymoxanil @ 2 g/L immediately to halt mycelial expansion."
      },
      {
        step: 2,
        title: "Irrigation Protocol Switch",
        text: "Halt overhead sprinklers in Sector 7; convert immediately to sub-canopy drip lines to maintain dry foliar canopy."
      },
      {
        step: 3,
        title: "Buffer Quarantine Perimeter",
        text: "Establish a 15-meter buffer zone around Sector 7 and monitor adjacent Solanaceae rows."
      }
    ],
    prevention: [
      {
        step: 1,
        title: "Resistant Seed Cultivars",
        text: "Sow certified blight-resistant seed tubers (e.g., Kufri Girdhari, Defender) in next cropping cycle."
      },
      {
        step: 2,
        title: "3-Year Crop Rotation",
        text: "Rotate Sector 7 with non-host cereals or legumes (Wheat, Soybean) for minimum 3 seasons."
      },
      {
        step: 3,
        title: "Spore Trapping Sentinels",
        text: "Install autonomous air spore samplers at prevailing wind borders for early zoospore detection."
      }
    ]
  },
  {
    id: "report-892-A",
    code: "#892-A",
    diseaseName: "Late Blight Detection",
    scientificName: "Phytophthora infestans",
    commonName: "Potato Late Blight",
    sector: "Field Sector 4 • North Field",
    quadrant: "Northwest Quadrant",
    crop: "Solanum tuberosum (Potato)",
    scannedAgo: "Scanned Today at 08:15 AM",
    scanTimestamp: "Today at 08:15 AM",
    confidence: 98.4,
    severity: "High",
    camera: "Mobile Sentinel Lens 12MP",
    resolution: "3000x2000 HD",
    lightCond: "Direct Sunlight (Clear)",
    gpsCoords: "41.4150°N, 93.2750°W",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d69107936?auto=format&fit=crop&w=1200&q=80",
    boundingBoxes: [
      {
        id: "box-1",
        label: "Late Blight",
        stage: "98% Confidence",
        x: 20,
        y: 20,
        width: 32,
        height: 38,
        confidence: 98.4,
        severity: "High",
        color: "red"
      },
      {
        id: "box-2",
        label: "Late Blight",
        stage: "95% Confidence",
        x: 58,
        y: 30,
        width: 30,
        height: 34,
        confidence: 95.2,
        severity: "High",
        color: "red"
      }
    ],
    treatments: [
      {
        step: 1,
        title: "Fungicide Spray",
        text: "Apply copper octanoate or Mancozeb 75% WP @ 2.5 g/L across lower foliage."
      },
      {
        step: 2,
        title: "Moisture Reduction",
        text: "Prune dense lower foliage to enhance air circulation and eliminate damp pockets."
      }
    ],
    prevention: [
      {
        step: 1,
        title: "Air Ventilation Spacing",
        text: "Maintain optimal 60cm row spacing in subsequent planting."
      }
    ]
  },
  {
    id: "report-SB-204",
    code: "#SB-204",
    diseaseName: "Soybean Rust Anomaly",
    scientificName: "Phakopsora pachyrhizi",
    commonName: "Asian Soybean Rust",
    sector: "Field Sector 4B • Prairie Corridor",
    quadrant: "Canopy Layer",
    crop: "Glycine max (Soybean)",
    scannedAgo: "Scanned 4 hours ago by Sentinel Pro",
    scanTimestamp: "Today at 07:30 AM",
    confidence: 87.0,
    severity: "High",
    camera: "Multispectral 16MP",
    resolution: "3840x2160 UHD",
    lightCond: "Direct Sunlight",
    gpsCoords: "41.4300°N, 93.2650°W",
    imageUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80",
    boundingBoxes: [
      {
        id: "rust-1",
        label: "Rust Pustule",
        stage: "Uredinia Pustule",
        x: 32,
        y: 28,
        width: 38,
        height: 42,
        confidence: 87.0,
        severity: "High",
        color: "red"
      }
    ],
    treatments: [
      {
        step: 1,
        title: "Triazole + Strobilurin Spray",
        text: "Apply Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1 mL/L prior to pod development."
      }
    ],
    prevention: [
      {
        step: 1,
        title: "Early Canopy Scouting",
        text: "Inspect abaxial lower leaf surfaces for polygonal tan rust flecks."
      }
    ]
  },
  {
    id: "report-TM-109",
    code: "#TM-109",
    diseaseName: "Tomato Early Blight",
    scientificName: "Alternaria solani",
    commonName: "Tomato Target Spot",
    sector: "Field Sector 4 • Vegetable Block",
    quadrant: "Lower Canopy",
    crop: "Solanum lycopersicum (Tomato)",
    scannedAgo: "Scanned 1 hour ago",
    scanTimestamp: "Today at 10:15 AM",
    confidence: 85.0,
    severity: "Warning",
    camera: "RGB Sensor Array 14MP",
    resolution: "3200x2400 HD",
    lightCond: "Bright Daylight",
    gpsCoords: "41.4020°N, 93.2840°W",
    imageUrl: "https://images.unsplash.com/photo-1592417817098-8f3d69107936?auto=format&fit=crop&w=1200&q=80",
    boundingBoxes: [
      {
        id: "target-1",
        label: "Target Spot",
        stage: "Concentric Rings",
        x: 30,
        y: 24,
        width: 40,
        height: 48,
        confidence: 85.0,
        severity: "Warning",
        color: "amber"
      }
    ],
    treatments: [
      {
        step: 1,
        title: "Copper Hydroxide Spray",
        text: "Apply Copper Hydroxide 53.8% DF @ 2 g/L at 7-day intervals on lower leaves."
      },
      {
        step: 2,
        title: "Bottom Foliage Pruning",
        text: "Prune bottom 12 inches of foliage touching soil to eliminate rain splash transmission."
      }
    ],
    prevention: [
      {
        step: 1,
        title: "Organic Straw Mulching",
        text: "Apply 3-inch clean straw mulch around root base."
      }
    ]
  }
];

export const sampleScannerLeaves = [
  {
    id: 'sample-armyworm-1',
    title: 'Fall Armyworm Chewing',
    diseaseName: 'Fall Armyworm (Spodoptera frugiperda)',
    crop: 'Maize / Corn',
    confidence: 98.6,
    severity: 'Critical',
    previewUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=400&q=80",
    photoUrl: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?auto=format&fit=crop&w=1200&q=80",
    boundingBoxes: [
      { id: 'bx-aw-1', label: 'Larval Shot-Hole Chewing', stage: 'Instar 3 Feeding', x: 24, y: 18, width: 44, height: 48, confidence: 99.1, severity: 'High', color: 'red' }
    ]
  },

  {
    id: "sample-potato",
    title: "Potato Leaf Specimen",
    crop: "Solanum tuberosum (Potato)",
    diseaseName: "Late Blight (Phytophthora infestans)",
    confidence: 98.4,
    severity: "High",
    previewUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=400&q=80",
    photoUrl: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=1200&q=80",
    boundingBoxes: [
      { id: "bx-1", label: "Late Blight", stage: "Necrotic Stage", x: 22, y: 20, width: 38, height: 44, confidence: 98.4, severity: "High", color: "red" }
    ]
  },
  {
    id: "sample-soybean",
    title: "Soybean Leaf Specimen",
    crop: "Glycine max (Soybean)",
    diseaseName: "Asian Soybean Rust (Phakopsora pachyrhizi)",
    confidence: 87.0,
    severity: "High",
    previewUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    photoUrl: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80",
    boundingBoxes: [
      { id: "bx-rust", label: "Soybean Rust", stage: "Active Pustule", x: 28, y: 26, width: 44, height: 46, confidence: 87.0, severity: "High", color: "red" }
    ]
  },
  {
    id: "sample-tomato",
    title: "Tomato Leaf Specimen",
    crop: "Solanum lycopersicum (Tomato)",
    diseaseName: "Early Blight (Alternaria solani)",
    confidence: 85.0,
    severity: "Warning",
    previewUrl: "https://images.unsplash.com/photo-1592417817098-8f3d69107936?auto=format&fit=crop&w=800&q=80",
    photoUrl: "https://images.unsplash.com/photo-1592417817098-8f3d69107936?auto=format&fit=crop&w=1200&q=80",
    boundingBoxes: [
      { id: "bx-tomato", label: "Target Spot", stage: "Concentric Rings", x: 30, y: 24, width: 40, height: 48, confidence: 85.0, severity: "Warning", color: "amber" }
    ]
  },
  {
    id: "sample-healthy",
    title: "Healthy Foliage Control",
    crop: "Triticum aestivum (Wheat)",
    diseaseName: "Healthy Tissue (No Pathogen Detected)",
    confidence: 99.2,
    severity: "Optimal",
    previewUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80",
    photoUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80",
    boundingBoxes: []
  }
];

export const fieldSectors = [
  {
    id: "sector-1",
    name: "Sector 1",
    crop: "Corn (Maize)",
    healthStatus: "Healthy",
    healthScore: 96,
    soilMoisture: 44,
    statusColor: "emerald",
    anomaly: null,
    plantingDate: "Apr 04, 2024",
    gpsCoords: "41.4025°N, 93.2841°W",
    x: 28,
    y: 35
  },
  {
    id: "sector-2",
    name: "Sector 2",
    crop: "Winter Wheat",
    healthStatus: "Healthy",
    healthScore: 94,
    soilMoisture: 41,
    statusColor: "emerald",
    anomaly: null,
    plantingDate: "Oct 15, 2023",
    gpsCoords: "41.4150°N, 93.2750°W",
    x: 62,
    y: 28
  },
  {
    id: "sector-3",
    name: "Sector 3",
    crop: "Sweet Corn",
    healthStatus: "Warning",
    healthScore: 78,
    soilMoisture: 36,
    statusColor: "amber",
    anomaly: "Moisture Deficit (36% ↓)",
    plantingDate: "Apr 20, 2024",
    gpsCoords: "41.4250°N, 93.2700°W",
    x: 75,
    y: 65
  },
  {
    id: "sector-4b",
    name: "Sector 4B",
    crop: "Soybeans • North Field",
    healthStatus: "Infected",
    healthScore: 64,
    soilMoisture: 32,
    statusColor: "rose",
    anomaly: "Soybean Rust (87% Probability in canopy layer)",
    plantingDate: "Apr 12, 2024",
    reportId: "report-SB-204",
    gpsCoords: "41.4300°N, 93.2650°W",
    x: 42,
    y: 62,
    highRisk: true
  },
  {
    id: "sector-7",
    name: "Sector 7",
    crop: "Russet Potatoes",
    healthStatus: "Infected",
    healthScore: 58,
    soilMoisture: 48,
    statusColor: "rose",
    anomaly: "Potato Late Blight (Phytophthora infestans)",
    plantingDate: "Apr 02, 2024",
    reportId: "report-AIA-4921",
    gpsCoords: "41.4025°N, 93.2841°W",
    x: 32,
    y: 80,
    highRisk: true
  }
];

export const initialSensors = {
  fieldHealth: 92,
  fieldHealthMax: 100,
  temperature: 24,
  tempUnit: "°C",
  humidity: 65,
  soilMoisture: 42,
  soilMoistureStatus: "Optimal",
  nitrogen: 28,
  nitrogenUnit: "mg",
  nitrogenStatus: "Low",
  phLevel: 6.5,
  sunlight: 8.2,
  sunlightUnit: "hrs",
  windSpeed: "11 km/h",
  uvIndex: 4.2,
  droneName: "Sentinel Drone Alpha-2",
  droneBattery: 88,
  lastScanTime: "2 hours ago",
  location: "Sector 4B • Prairie Ridge Farm",
  gpsCoords: "41.4025°N, 93.2841°W"
};

export const defaultSensors = initialSensors;
export const initialAlerts = [];

export const communityDiscussions = [
  {
    id: "post-1",
    author: "Dr. Michael Hansen",
    role: "Certified Extension Agronomist",
    avatar: "👨‍🔬",
    title: "Midwest Spore Alert: High Humidity Spreading Late Blight in Iowa & Illinois",
    content: "Recent rainfall followed by 85%+ relative humidity is accelerating Phytophthora infestans sporulation. Recommend preventive copper or metalaxyl application across all potato and tomato sectors immediately.",
    time: "3 hours ago",
    likes: 42,
    replies: 14,
    tags: ["Late Blight", "Weather Alert", "Fungicides"],
    verified: true
  },
  {
    id: "post-2",
    author: "Alex Rivera",
    role: "Farm Manager • Prairie Ridge",
    avatar: "👩‍🌾",
    title: "Managing Asian Rust in Sector 4B Soybeans: Drip vs Overhead Fertigation",
    content: "Switched our 120-acre soybean sector to night-time subsurface drip. Leaf wetness duration dropped by 60%, significantly reducing secondary urediniospore spread.",
    time: "Yesterday",
    likes: 29,
    replies: 8,
    tags: ["Soybean Rust", "Irrigation", "Case Study"],
    verified: false
  }
];

export const initialDiscussions = communityDiscussions;
