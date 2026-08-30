import { handleImageError } from '../utils/imageFallbacks';
import React, { useState } from 'react';
import { 
  Bug, 
  ShieldCheck, 
  AlertTriangle, 
  Search, 
  Filter, 
  Sparkles, 
  CheckCircle2, 
  Camera, 
  Scan, 
  Sprout, 
  ArrowRight, 
  CloudSun, 
  Activity, 
  Radio, 
  FlaskConical, 
  Info,
  ChevronRight,
  Eye
} from 'lucide-react';
import { pestDiseasesData, pestCategories, smartStickyTrapSensors } from '../data/cropData';

export const PestGuideView = ({ onOpenQuickScan = () => {} }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPest, setSelectedPest] = useState(pestDiseasesData[0]);
  const [trapData, setTrapData] = useState(smartStickyTrapSensors);

  // Filtered pests
  const filteredPests = pestDiseasesData.filter((pest) => {
    const matchesCategory = selectedCategory === 'all' || pest.category === selectedCategory;
    const matchesSearch = pest.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pest.scientificName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pest.affectedCrops.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-forest-800 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
              <Bug className="w-3.5 h-3.5" />
              <span>Integrated Pest Management (IPM) & IoT Sentinel</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Pest Protection & Smart Sticky-Trap Radar
            </h1>
            <p className="text-xs sm:text-sm text-emerald-100/75 leading-relaxed font-medium">
              Early warning insect detection, optical IoT sticky-trap insect counts, weather-based pest surge risk models, and dual organic/chemical treatment guides.
            </p>
          </div>

          <button
            onClick={onOpenQuickScan}
            className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-black text-xs shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2.5 transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <Scan className="w-4 h-4" />
            <span>Scan Leaf for Pest Damage</span>
          </button>
        </div>
      </div>

      {/* IoT SMART STICKY-TRAP HARDWARE INTEGRATION TELEMETRY */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border-2 border-emerald-500/40 dark:border-emerald-500/30 shadow-lg space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-forest-900 dark:bg-emerald-600 text-emerald-400 dark:text-white flex items-center justify-center shadow-md">
              <Radio className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                  {trapData.name}
                </h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
                  ⚠️ Action Threshold Breached
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {trapData.location} • Optical Camera Snapshot: {trapData.lastImageCapturedAgo} • Battery: {trapData.battery}%
              </p>
            </div>
          </div>

          <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-xl border border-emerald-200 dark:border-emerald-800 self-start sm:self-auto">
            📡 Live IoT Optical Feed Active
          </span>
        </div>

        {/* Pest Counts Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {trapData.pestCounts.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-3.5 rounded-2xl border ${
                item.color === 'rose' 
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-800' 
                  : item.color === 'amber'
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-800'
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-700 dark:text-slate-300 truncate">{item.name}</span>
                <span className={`w-2 h-2 rounded-full ${item.color === 'rose' ? 'bg-rose-500 animate-ping' : item.color === 'amber' ? 'bg-amber-500' : 'bg-emerald-500'}`} />
              </div>
              <div className="mt-2 flex items-baseline space-x-1.5">
                <span className="text-2xl font-black text-slate-900 dark:text-white">{item.count}</span>
                <span className="text-[10px] text-slate-400 font-medium">/ {item.threshold} max</span>
              </div>
              <span className={`text-[9px] font-bold block mt-1 ${item.color === 'rose' ? 'text-rose-700 dark:text-rose-400' : item.color === 'amber' ? 'text-amber-700 dark:text-amber-400' : 'text-emerald-700 dark:text-emerald-400'}`}>
                {item.status}
              </span>
            </div>
          ))}
        </div>

        {/* Recommended Action Alert */}
        <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 flex items-start space-x-2.5 text-xs text-amber-950 dark:text-amber-200 font-medium">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold block">Early-Warning Pest Surge Intervention:</span>
            <span>{trapData.recommendedAction}</span>
          </div>
        </div>
      </div>

      {/* WEATHER-BASED PEST SURGE RISK RADAR */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Whitefly & Aphid High Risk Alert */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <CloudSun className="w-4 h-4 text-amber-500" />
              <span>WEATHER PEST MULTIPLICATION RISK</span>
            </span>
            <span className="text-[10px] font-bold bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300 px-2 py-0.5 rounded-full">
              High Risk
            </span>
          </div>

          <div>
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
              Conditions Favor Whitefly & Aphid Outbreak (Sector 4B & 2A)
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Ambient temperature (24°C - 32°C) combined with dry winds creates peak oviposition window. Inspect lower leaf surfaces and deploy sticky trap barriers immediately.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span>Preventive neem oil spray recommended</span>
            <span>7-Day Risk Index: 84%</span>
          </div>
        </div>

        {/* Nocturnal Armyworm Flight Advisory */}
        <div className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
              <Activity className="w-4 h-4 text-emerald-500" />
              <span>NOCTURNAL MOTH SURVEILLANCE</span>
            </span>
            <span className="text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-full">
              Moderate Risk
            </span>
          </div>

          <div>
            <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">
              Fall Armyworm & Corn Borer Oviposition Warning
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
              Warm nocturnal temperatures (22°C) favor adult moth migration and egg-laying in maize central whorls. Check central leaf whorls for pin-hole feeding signs.
            </p>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-emerald-700 dark:text-emerald-400">
            <span>Install 5 pheromone funnel traps / acre</span>
            <span>7-Day Risk Index: 42%</span>
          </div>
        </div>

      </div>

      {/* FILTERABLE PEST IDENTIFICATION CATALOG */}
      <div className="space-y-4">
        
        {/* Search & Category Pills */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 sm:pb-0">
            {pestCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-forest-900 dark:bg-emerald-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search pest, crop, symptoms..."
              className="w-full pl-9 pr-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
            />
          </div>
        </div>

        {/* Master-Detail Pest Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left Pest Cards List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredPests.map((pest) => (
              <div
                key={pest.id}
                onClick={() => setSelectedPest(pest)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center space-x-3.5 ${
                  selectedPest.id === pest.id
                    ? 'bg-emerald-50/70 dark:bg-slate-800 border-emerald-500 dark:border-emerald-500 shadow-sm ring-1 ring-emerald-500'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
                }`}
              >
                <img
                  src={pest.photoUrl}
                  alt={pest.commonName}
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-slate-200 dark:border-slate-700"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-xs text-slate-900 dark:text-white truncate">
                      {pest.commonName}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${pest.severity === 'Critical' ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300' : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'}`}>
                      {pest.severity}
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 italic block font-mono">
                    {pest.scientificName}
                  </span>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 truncate mt-1">
                    Crops: {pest.affectedCrops.join(', ')}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
              </div>
            ))}
          </div>

          {/* Right Pest Deep-Dive Treatment Card */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-5">
            
            {/* Header with Photo */}
            <div className="flex flex-col sm:flex-row gap-4">
              <img
                src={selectedPest.photoUrl}
                alt={selectedPest.commonName}
                className="w-full sm:w-44 h-36 rounded-2xl object-cover border border-slate-200 dark:border-slate-700 shadow-sm"
              />
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-forest-900 dark:bg-emerald-600 text-emerald-300 dark:text-white">
                    {selectedPest.category.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    Sticky Threshold: {selectedPest.stickyTrapThreshold}
                  </span>
                </div>

                <h2 className="text-lg font-black text-slate-900 dark:text-white">
                  {selectedPest.commonName}
                </h2>
                <p className="text-xs text-emerald-800 dark:text-emerald-400 font-mono italic">
                  {selectedPest.scientificName}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-300 font-medium leading-relaxed pt-1">
                  <strong>Damage Symptoms:</strong> {selectedPest.damageSymptoms}
                </p>
              </div>
            </div>

            {/* DUAL TREATMENT CARDS: ORGANIC VS CHEMICAL */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              
              {/* 🌿 ORGANIC BIOCONTROL */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-emerald-900 dark:text-emerald-300">
                  <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Organic / Biological Control</span>
                </div>
                <span className="font-extrabold text-[11px] text-slate-900 dark:text-white block">
                  {selectedPest.organicTreatment.name}
                </span>
                <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedPest.organicTreatment.method}
                </p>
              </div>

              {/* 🧪 CHEMICAL TARGETED CONTROL */}
              <div className="p-4 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 space-y-1.5">
                <div className="flex items-center space-x-1.5 text-xs font-bold text-blue-900 dark:text-blue-300">
                  <FlaskConical className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span>Targeted Chemical Prescription</span>
                </div>
                <span className="font-extrabold text-[11px] text-slate-900 dark:text-white block">
                  {selectedPest.chemicalTreatment.activeIngredient}
                </span>
                <p className="text-[11px] text-slate-700 dark:text-slate-300 leading-relaxed">
                  <strong>Dosage:</strong> {selectedPest.chemicalTreatment.dosage}<br/>
                  <strong>Pre-Harvest Interval:</strong> {selectedPest.chemicalTreatment.waitingPeriod}
                </p>
              </div>

            </div>

            {/* PREVENTIVE CULTURAL PRACTICES */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                🛡️ Preventive Cultural Protocols:
              </span>
              <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-300 list-disc list-inside">
                {selectedPest.preventiveCultural.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
