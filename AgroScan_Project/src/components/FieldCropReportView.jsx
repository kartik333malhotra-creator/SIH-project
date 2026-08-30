import React, { useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Sprout, 
  Bug, 
  Droplet, 
  Wind, 
  Sun, 
  Calendar, 
  Printer, 
  Download, 
  Sparkles, 
  Scan, 
  Map, 
  Bot, 
  Clock, 
  ChevronRight, 
  Layers, 
  CheckSquare, 
  Square,
  Radio,
  ExternalLink,
  Flame,
  Wheat
} from 'lucide-react';

export const FieldCropReportView = ({
  currentCity = 'Sangrur',
  sensors = {},
  onOpenQuickScan = () => {},
  onNavigateToTab = () => {}
}) => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Apply Cymoxanil 8% + Mancozeb 64% WP (Curzate @ 3g/L) to Sector 4B Potato crop.', completed: false, sector: 'Sector 4B' },
    { id: 2, text: 'Halt overhead sprinkler irrigation in Sector 4B; activate sub-canopy drip lines.', completed: true, sector: 'Sector 4B' },
    { id: 3, text: 'Schedule 1st Top Dressing for Sector 1 Wheat: Urea (45 kg) + Sulfur 90% (5 kg/acre).', completed: false, sector: 'Sector 1' },
    { id: 4, text: 'Apply foliar spray of Chelated Zinc (Zn-EDTA 12% @ 200g/acre) in Sector 1.', completed: false, sector: 'Sector 1' },
    { id: 5, text: 'Monitor Sector 7 Mustard border for Aphid / Chepa colony expansion.', completed: true, sector: 'Sector 7' },
    { id: 6, text: 'Spray Cold-Pressed Neem Oil (10,000 PPM @ 3 ml/L) on Sector 7 floral canopy in evening.', completed: false, sector: 'Sector 7' },
  ]);

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const handlePrint = () => {
    window.print();
  };

  const temp = sensors?.temperature || 31;
  const humidity = sensors?.humidity || 58;
  const wind = sensors?.windSpeed || 12;

  return (
    <div className="space-y-6 animate-in fade-in duration-300 pb-16">
      
      {/* Top Dossier Header & Print Toolbar */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>AgroScan Neural Agronomy Copilot</span>
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
              ID: AGRO-RPT-2026-0828
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 flex items-center space-x-1">
              <Radio className="w-3 h-3 animate-pulse text-emerald-500" />
              <span>Live Telemetry Active</span>
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Field Crop Health & Diagnostic Intelligence Report
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
            Geographic Coverage: <strong className="text-slate-800 dark:text-slate-200">{currentCity} Agricultural District</strong> • Powered by Sentinel-2 10m NDVI & OpenWeather Grid
          </p>
        </div>

        {/* Action Toolbar */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center space-x-2 transition-all cursor-pointer shadow-xs"
          >
            <Printer className="w-4 h-4 text-slate-600 dark:text-slate-300" />
            <span>Print Official Dossier</span>
          </button>
          <button
            onClick={onOpenQuickScan}
            className="px-5 py-2.5 rounded-2xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 text-white font-extrabold text-xs flex items-center space-x-2 transition-all cursor-pointer shadow-md shadow-forest-900/20 active:scale-95"
          >
            <Scan className="w-4 h-4 text-emerald-400 dark:text-white" />
            <span>Launch Dual Leaf Scanner</span>
          </button>
        </div>
      </div>

      {/* 4 Executive KPI Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase">
            <span>Overall Field Health</span>
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white">87.6%</span>
            <span className="text-[11px] font-bold text-emerald-600">Stable Vigor</span>
          </div>
          <p className="text-[11px] text-slate-500">Across 3 active sectors in {currentCity}</p>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase">
            <span>NDVI Biomass Vigor</span>
            <Sprout className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-emerald-600 dark:text-emerald-400">0.84</span>
            <span className="text-[11px] font-bold text-slate-500">Sentinel-2 Grid</span>
          </div>
          <p className="text-[11px] text-slate-500">High photosynthetic activity index</p>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase">
            <span>Soil Moisture (VWC)</span>
            <Droplet className="w-4 h-4 text-blue-500" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-blue-600 dark:text-blue-400">31.4%</span>
            <span className="text-[11px] font-bold text-emerald-600">Optimal</span>
          </div>
          <p className="text-[11px] text-slate-500">Root-zone hydration at healthy capacity</p>
        </div>

        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-slate-500 text-xs font-bold uppercase">
            <span>Live Microclimate</span>
            <Sun className="w-4 h-4 text-amber-500" />
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-black text-slate-900 dark:text-white">{temp}°C</span>
            <span className="text-[11px] font-bold text-slate-500">{humidity}% RH</span>
          </div>
          <p className="text-[11px] text-slate-500">Wind: {wind} km/h • OpenWeather live</p>
        </div>

      </div>

      {/* Sector Diagnostic Cards (The Heart of the Report) */}
      <div className="space-y-4">
        <h2 className="text-lg font-black text-slate-900 dark:text-white flex items-center space-x-2">
          <span>🌾 Sector-by-Sector Crop Diagnostic Breakdown</span>
        </h2>

        {/* SECTOR 1: WHEAT */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 flex items-center justify-center text-xl font-bold">
                🌾
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                  <span>Sector 1 • {currentCity} North Field</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    Health: 94% (Optimal)
                  </span>
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Crop: <strong>Wheat (PBW 824)</strong> • Stage: Tillering & Crown Root Initiation (35 Days)
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-xl self-start sm:self-auto">
              NDVI: 0.88
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white font-bold block text-sm">
                🔍 AI Pathology Diagnosis:
              </strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Leaf canopy is vibrant with no active Yellow Rust (<em>Puccinia striiformis</em>) pustules. Relative humidity ({humidity}%) is safe from critical fog incubation.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/80">
              <strong className="text-emerald-950 dark:text-emerald-300 font-bold block text-sm">
                🧪 Prescribed Nutrition Schedule:
              </strong>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li><strong>1st Top Dressing:</strong> Urea (46% N) @ 45 kg (1 bag) + Bentonite Sulfur 90% @ 5 kg/acre.</li>
                <li><strong>Micronutrient Spray:</strong> Chelated Zinc (Zn-EDTA 12%) @ 200g in 150 L water per acre.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTOR 4B: POTATO (ALERT ITEM) */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-amber-400 dark:border-amber-600/80 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-amber-100 dark:border-amber-900/40 pb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xl font-bold">
                🥔
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                  <span>Sector 4B • {currentCity} East Field</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-amber-500 text-slate-950 animate-pulse">
                    ⚠️ ALERT: Action Required (78% Health)
                  </span>
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Crop: <strong>Potato (Kufri Pukhraj)</strong> • Stage: Tuber Bulking & Canopy Closure (60 Days)
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-xl self-start sm:self-auto">
              NDVI: 0.76 (Stress Detected)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2 p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800">
              <strong className="text-amber-950 dark:text-amber-300 font-bold block text-sm">
                ⚠️ Phytopathology Detection (98.4% Confidence):
              </strong>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Early-stage <strong>Potato Late Blight (<em>Phytophthora infestans</em>)</strong>. Water-soaked necrotic lesions on lower leaf canopy margins. Rapid zoospore spread risk if overhead irrigation continues.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-rose-50/70 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800">
              <strong className="text-rose-950 dark:text-rose-300 font-bold block text-sm">
                💊 Urgent Curative Protocol:
              </strong>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li><strong>Chemical Spray:</strong> Cymoxanil 8% + Mancozeb 64% WP (<em>Curzate</em>) @ 600g in 200 L water per acre (3g/L) immediately.</li>
                <li><strong>Irrigation Switch:</strong> Halt overhead sprinklers; switch to sub-canopy drip lines.</li>
                <li><strong>Quarantine:</strong> Maintain 15-meter buffer perimeter around Sector 4B.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTOR 7: MUSTARD */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 flex items-center justify-center text-xl font-bold">
                🌼
              </div>
              <div>
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center space-x-2">
                  <span>Sector 7 • {currentCity} South Field</span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
                    Health: 91% (Good)
                  </span>
                </h3>
                <p className="text-xs text-slate-500 font-medium">
                  Crop: <strong>Mustard / Sarson (RH 725)</strong> • Stage: Flowering & Siliqua Formation (50 Days)
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1 rounded-xl self-start sm:self-auto">
              NDVI: 0.85
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="space-y-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
              <strong className="text-slate-900 dark:text-white font-bold block text-sm">
                🐛 Entomological Scouting:
              </strong>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Minor <strong>Mustard Aphids / Chepa (<em>Lipaphis erysimi</em>)</strong> colonies observed on peripheral border twigs (5% incidence). Below economic injury threshold.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/80">
              <strong className="text-emerald-950 dark:text-emerald-300 font-bold block text-sm">
                🌿 Integrated Pest Management (IPM):
              </strong>
              <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                <li><strong>Organic Spray:</strong> Cold-Pressed Neem Oil (10,000 PPM) @ 3 ml/L water with liquid soap surfactant.</li>
                <li><strong>Chemical Fallback:</strong> If pest exceeds 10%, spray Dimethoate 30% EC @ 250 ml/acre in late evening.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Agrometeorological Spray Calculator Table */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
            Agrometeorological Spray Windows in {currentCity}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 space-y-1.5">
            <div className="flex items-center justify-between">
              <strong className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">
                06:00 AM – 09:30 AM
              </strong>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-600 text-white">
                🟢 OPTIMAL
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Dew drying complete, wind speed &lt; 8 km/h prevents chemical drift, maximum foliar stomatal absorption.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-300 dark:border-rose-700 space-y-1.5">
            <div className="flex items-center justify-between">
              <strong className="font-bold text-rose-900 dark:text-rose-200 text-sm">
                12:00 PM – 03:30 PM
              </strong>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-600 text-white">
                🔴 AVOID
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              High ambient UV and rapid droplet evaporation cause severe foliar scorching and reduced efficacy.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-700 space-y-1.5">
            <div className="flex items-center justify-between">
              <strong className="font-bold text-blue-900 dark:text-blue-200 text-sm">
                05:30 PM – 07:00 PM
              </strong>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-600 text-white">
                🟢 GOOD
              </span>
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
              Ideal for biological agents (<em>Trichoderma viride</em>) and systemic insecticides before overnight spore germination.
            </p>
          </div>

        </div>
      </div>

      {/* Interactive Farmer Action To-Do Checklist */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              Farmer Action Checklist ({tasks.filter(t => t.completed).length}/{tasks.length} Completed)
            </h3>
          </div>
          <span className="text-xs text-slate-400">Click task to mark done</span>
        </div>

        <div className="space-y-2">
          {tasks.map(task => (
            <div
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`p-3.5 rounded-2xl border transition-all flex items-center space-x-3 cursor-pointer text-xs ${
                task.completed
                  ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400 line-through'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-emerald-500 font-medium'
              }`}
            >
              {task.completed ? (
                <CheckSquare className="w-4 h-4 text-emerald-500 shrink-0" />
              ) : (
                <Square className="w-4 h-4 text-slate-400 shrink-0" />
              )}
              <span className="flex-1">{task.text}</span>
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0">
                {task.sector}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Action Navigation Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <button
          onClick={onOpenQuickScan}
          className="p-4 rounded-3xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 text-white font-extrabold text-xs shadow-md flex items-center justify-between cursor-pointer transition-all active:scale-98"
        >
          <div className="flex items-center space-x-2.5">
            <Scan className="w-4 h-4" />
            <span>Launch Dual AI Scanner</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigateToTab('map')}
          className="p-4 rounded-3xl bg-white dark:bg-slate-900 hover:bg-slate-50 text-slate-800 dark:text-slate-100 font-extrabold text-xs border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between cursor-pointer transition-all active:scale-98"
        >
          <div className="flex items-center space-x-2.5">
            <Map className="w-4 h-4 text-emerald-600" />
            <span>View {currentCity} Satellite Map</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>

        <button
          onClick={() => onNavigateToTab('fertilizers')}
          className="p-4 rounded-3xl bg-white dark:bg-slate-900 hover:bg-slate-50 text-slate-800 dark:text-slate-100 font-extrabold text-xs border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between cursor-pointer transition-all active:scale-98"
        >
          <div className="flex items-center space-x-2.5">
            <Sprout className="w-4 h-4 text-emerald-600" />
            <span>Fertilizer Dosages & Cures</span>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400" />
        </button>
      </div>

    </div>
  );
};
