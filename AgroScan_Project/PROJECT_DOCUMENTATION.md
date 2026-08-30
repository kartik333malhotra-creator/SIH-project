# 🌿 AgroScan Sentinel — Full-Stack Technical Architecture & Integrated Pest Protection Guide

Welcome to the comprehensive technical documentation for **AgroScan Sentinel**, an enterprise-grade, full-stack AI precision agriculture platform engineered for real-time crop disease diagnosis, foliar pathology analysis, **IoT smart optical sticky-trap pest surveillance**, weather-based pest surge risk modeling, IoT sensor telemetry, live geospatial field tracking, and agronomist community consultation.

---

## 📑 Table of Contents
1. [Executive Summary & System Pillars](#1-executive-summary--system-pillars)
2. [Pest Protection & Integrated Pest Management (IPM) Architecture](#2-pest-protection--integrated-pest-management-ipm-architecture)
3. [High-Level System Architecture](#3-high-level-system-architecture)
4. [Comprehensive Technology Stack](#4-comprehensive-technology-stack)
5. [Core Modules & Functional Breakdown](#5-core-modules--functional-breakdown)
6. [Database Architecture & Persistence Strategy](#6-database-architecture--persistence-strategy)
7. [Authentication & Security Architecture](#7-authentication--security-architecture)
8. [Complete Directory & File Structure](#8-complete-directory--file-structure)
9. [Installation, Setup & Deployment Guide](#9-installation-setup--deployment-guide)
10. [REST API Specification](#10-rest-api-specification)

---

## 1. Executive Summary & System Pillars

**AgroScan Sentinel** is structured around **Four Core Agricultural Engineering Pillars**:

1. **AI Neural Foliar Diagnostics:** Multispectral deep learning vision model classifying foliar phytopathogens (fungal, bacterial, viral) with localized lesion bounding boxes.
2. **Integrated Pest Protection & IoT Sticky Traps:** Early warning insect population monitoring via automated optical sticky traps, pest damage pattern scanning (shot-hole chewing, sap-sucking chlorosis), weather-based pest multiplication models, and dual organic/chemical treatment prescriptions.
3. **Live GPS Geospatial Outbreak Sentinel:** HTML5 browser GPS geolocation + dual reverse geocoding resolving exact farm area/locality names on OpenStreetMap layers (Standard, Satellite, NDVI).
4. **IoT Microclimate Telemetry & Extension Network:** Real-time sensor telemetry (Soil Moisture, Temperature, Humidity, Nitrogen N-P-K, pH) and certified extension agronomist consultation dispatching.

---

## 2. Pest Protection & Integrated Pest Management (IPM) Architecture

### 2.1. Extended AI Leaf Vision Pipeline
* **Pest Damage Classification:** The vision model detects insect feeding patterns alongside phytopathogens:
  * *Sap-Sucking Insects:* Silverleaf Whitefly (*Bemisia tabaci*), Cotton Aphids (*Aphis gossypii*) — honeydew sooty mold & chlorotic stippling.
  * *Chewing Borers & Larvae:* Fall Armyworm (*Spodoptera frugiperda*), Corn Borer — shot-hole leaf perforation, whorl frass, and skeletonization.
  * *Mites & Micro-Parasites:* Two-Spotted Spider Mites (*Tetranychus urticae*) — foliar bronzing and silken webbing.

### 2.2. IoT Smart Optical Sticky-Trap Telemetry
* **Hardware Integration:** Optical sensor node mounted above the crop canopy captures periodic 24-hour insect counts.
* **Early Warning Action Thresholds:** Flags Economic Injury Levels (EIL) before visible foliar damage occurs (e.g. `46 Whiteflies / trap / day` triggering immediate bio-predator release).

### 2.3. Weather-Based Pest Surge Risk Forecasting
* **Dynamic Meteorological Rules:**
  * High Temperature (28°C - 34°C) + High Humidity (>70%) -> *High Risk: Whitefly & Aphid Rapid Multiplication Alert*.
  * Warm Night Temperatures (22°C) + Intermittent Showers -> *Moderate Risk: Armyworm Moth Oviposition Alert*.

### 2.4. Dual-Action Treatment Matrix
* **🌿 Organic / Biological:** Cold-pressed Neem Oil (Azadirachtin 10,000 ppm), *Bacillus thuringiensis* (Bt), *Beauveria bassiana*, *Encarsia formosa* parasitoid wasps, and Pheromone delta traps.
* **🧪 Targeted Chemical:** *Chlorantraniliprole 18.5% SC*, *Imidacloprid 17.8% SL*, *Spiromesifen 22.9% SC*, and *Cartap Hydrochloride 4% GR* with exact dosage per acre and pre-harvest intervals.
* **🛡️ Preventive Cultural:** Summer deep plowing, border trap crops (Maize/Sorghum), yellow sticky rolls, and reflective silver mulching.

---

## 3. High-Level System Architecture

* **Client SPA (React 18 + Vite):** Dashboard, Analysis Report, Pest Sentinel & Traps, Field Map, Crop Encyclopedia, Community Hub.
* **Backend Microservices (Node.js + Express):** Auth Gateway, AI Vision Inference, IoT Sticky-Trap Telemetry, Outbreak Notification Dispatcher.
* **Persistence Layer:** Hybrid JSON Document DB (`server_db.json`) + MongoDB Mongoose Cluster failover.

---

## 4. Comprehensive Technology Stack

| Category | Technology | Version | Role in AgroScan Sentinel |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | **React** | `v18.3.1` | Single Page Application (SPA), React Hooks (`useState`, `useEffect`, `useMemo`, `useRef`). |
| **Build Bundler** | **Vite** | `v5.4.21` | Lightning-fast Hot Module Replacement (HMR) and Rollup production packaging. |
| **Styling & CSS** | **Tailwind CSS** | `v3.4.17` | Utility-first CSS, custom botanical palettes (`forest`, `agri`), and class-based **Dark/Light Mode**. |
| **Icons** | **Lucide React** | `v0.468.0` | Modern SVG icons with theme-reactive coloring. |
| **Backend Runtime** | **Node.js** | `v18+` (ES Modules) | High-performance asynchronous runtime with native `import/export` syntax. |
| **Server Framework** | **Express.js** | `v4.21.2` | REST API routes, CORS middleware, and binary file streaming. |
| **Primary Database** | **JSON Document DB** | Native Engine | Atomic, zero-setup file-persisted JSON database (`server_db.json`). |
| **Enterprise Database**| **MongoDB & Mongoose** | `v8.9.0` | Object Data Modeling (ODM) with automatic cluster failover. |
| **GIS & Geocoding** | **OpenStreetMap** | Open APIs | Layered cartography (Standard, Satellite, NDVI) + Nominatim reverse geocoder. |

---

## 5. Complete Directory & File Structure

```
crop-disease-platform/
├── dist/                          # Compiled production build artifacts
├── src/
│   ├── components/
│   │   ├── AIWorkplaceWidget.jsx  # Floating AI assistant corner widget
│   │   ├── AnalysisReportScreen.jsx# Diagnostic view with bounding boxes & treatments
│   │   ├── AuthModal.jsx          # Dual Gmail & Mobile SMS OTP login modal
│   │   ├── BottomNav.jsx          # Mobile bottom navigation dock
│   │   ├── CommunityScreen.jsx    # Agronomist Q&A discussion forum
│   │   ├── CropDiseaseView.jsx    # Botanical disease encyclopedia
│   │   ├── DashboardScreen.jsx    # Telemetry HUD, in-page login & sticky-trap summary
│   │   ├── ExpertReviewModal.jsx  # Agronomist ticket generator
│   │   ├── FertilizersView.jsx    # N-P-K nutrient & fertilizer guide
│   │   ├── FieldMapScreen.jsx     # Live GPS map with reverse geocoding
│   │   ├── Header.jsx             # Top bar with search & animated theme toggle
│   │   ├── PestGuideView.jsx      # Integrated Pest Management & Sticky Trap radar
│   │   ├── QuickScanModal.jsx     # AI leaf camera & image analysis modal
│   │   ├── RegionalCropsView.jsx  # Regional crop recommendation catalog
│   │   ├── SettingsModal.jsx      # System settings & data reset modal
│   │   ├── Sidebar.jsx            # Desktop fixed navigation with Pest tab
│   │   └── WeatherModal.jsx       # 7-day forecast with weather pest risk index
│   ├── data/
│   │   ├── agroscanData.js        # Core telemetry, reports, and pest leaf samples
│   │   └── cropData.js            # IPM pest taxonomy, fertilizers & regional data
│   ├── utils/
│   │   └── agroscanStore.js       # Reactive LocalStorage manager
│   ├── App.jsx                    # Root component & theme controller
│   └── main.jsx                   # React DOM entrypoint
├── server.js                      # Node.js + Express REST API backend
├── server_db.json                 # Persistent local JSON document database
├── tailwind.config.js             # Tailwind CSS theme & dark mode config
├── vite.config.js                 # Vite bundler configuration
├── AgroScan_Sentinel_Documentation.pdf # Publication-ready PDF manual
└── PROJECT_DOCUMENTATION.md       # Complete markdown documentation
```

---

## 6. REST API Specification Table

| HTTP Method | Endpoint | Purpose | Description / Payload |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/health` | System Health | Returns backend status, uptime, and active DB engine. |
| `POST` | `/api/auth/login` | Authentication | Validates User ID / Gmail and returns session token. |
| `POST` | `/api/auth/register` | User Signup | Creates new farm operator or researcher account. |
| `GET` | `/api/sensors` | IoT Telemetry | Returns live microclimate and sticky trap counts. |
| `POST` | `/api/sensors/update` | Sensor Push | Receives telemetry updates from IoT gateway nodes. |
| `GET` | `/api/reports` | Scan History | Retrieves diagnostic foliar and pest scan reports. |
| `POST` | `/api/scan` | AI Inference | Analyzes uploaded specimen and returns diagnosis. |
| `GET` | `/api/alerts` | Outbreak Alerts | Returns active phytopathogen & pest surge warnings. |
| `POST` | `/api/expert-review`| Agronomist Dispatch| Dispatches consultation ticket to field specialist. |
| `GET` | `/api/download-pdf` | PDF Manual | Streams the compiled PDF architecture manual. |
| `GET` | `/api/download-zip` | Source Code ZIP | Streams the full-stack project ZIP archive. |

---

*Generated for AgroScan Sentinel Full-Stack Precision Agriculture & Pest Management Platform.*
