import React, { useState } from 'react';
import { 
  Film, 
  Play, 
  Pause, 
  Volume2, 
  Sparkles, 
  Trophy, 
  Clock, 
  CheckCircle2, 
  Layers, 
  Brain, 
  Satellite, 
  Radio, 
  Share2, 
  Download,
  Zap,
  Tv,
  Users,
  Compass,
  FileText
} from 'lucide-react';

export const SIHDocumentaryView = ({ onOpenQuickScan = () => {} }) => {
  const [activeScene, setActiveScene] = useState(0);

  const documentaryScenes = [
    {
      id: 1,
      title: "Act I: The Crisis in Indian Agriculture",
      duration: "0:00 - 0:45",
      icon: "🌾",
      subtitle: "The $220 Billion Silent Famine in Rural India",
      summary: "Highlighting how 120 million smallholder farmers lose up to 45% of annual harvest to foliar blights and invasive pests due to the severe lack of rural pathologists.",
      voiceover: "Every morning across rural India, millions of farmers walk through their fields, searching for the first signs of crop disease. But with just one agronomist for every thousand villages and laboratory testing taking upwards of five days, microscopic fungal spores spread unchecked, devastating livelihoods before a single cure can be applied.",
      keyVisual: "Satellite view zooming into an Indian farm parcel showing early yellowing rust patches and the farmer inspecting infected leaves.",
      techHighlight: "1:1,160 Extension Worker Deficit • ₹2.1 Lakh Crore Annual Harvest Loss"
    },
    {
      id: 2,
      title: "Act II: The Breakthrough — AgroScan Sentinel",
      duration: "0:45 - 1:30",
      icon: "🧠",
      subtitle: "Zero-Marginal-Cost Dual-Engine AI Architecture",
      summary: "Introducing our breakthrough hybrid AI: in-browser WebAssembly color matrix extraction for zero-cost instant scanning combined with Google Gemini 1.5 Flash multimodal vision.",
      voiceover: "Enter AgroScan Sentinel — an autonomous deep-tech platform engineered specifically for Smart India Hackathon. By running high-speed pixel matrix tensor analysis directly inside the farmer's web browser, we eliminate cloud server costs entirely, bringing sub-second diagnosis to any smartphone without requiring paid subscriptions.",
      keyVisual: "Split-screen demonstration showing client-side canvas RGB/HSV tensor extraction (<280ms) and cloud LMM multimodal taxonomy generating precise dosages.",
      techHighlight: "Dual AI Engine • < 1.2s Latency • 100% Free Edge Scanning Tier"
    },
    {
      id: 3,
      title: "Act III: Eyes in the Sky — Earth Observation",
      duration: "1:30 - 2:15",
      icon: "🛰️",
      subtitle: "Sentinel-2 NDVI & Doppler Meteorological Radar",
      summary: "Demonstrating how satellite remote sensing calculates vegetative biomass vigor 10 days before visual leaf yellowing and forecasts fungal spore outbreaks.",
      voiceover: "From orbit, AgroScan Sentinel taps into Sentinel-2 and Landsat-8 multi-spectral satellites, computing Normalized Difference Vegetation Indices in real time. We combine this with live Doppler weather radar to detect humidity spikes and alert farmers forty-eight hours before fungal spores can germinate.",
      keyVisual: "Interactive Leaflet GIS map with NDVI color heatmaps (NIR vs Red) over farm parcels and Doppler humidity forecast overlays.",
      techHighlight: "Sentinel-2 NDVI Spectral Band 8 • Open-Meteo Doppler Grid • 48h Early Spore Warning"
    },
    {
      id: 4,
      title: "Act IV: Sentinels in the Field — IoT Traps",
      duration: "2:15 - 3:00",
      icon: "📡",
      subtitle: "Autonomous Smart Optical Sticky-Traps (Node 4B)",
      summary: "Showcasing ESP32-CAM autonomous insect traps and soil sensors transmitting real-time NPK, moisture, and pest density thresholds over LoRaWAN mesh networks.",
      voiceover: "In the field, solar-powered Node 4B smart sticky traps continuously monitor insect populations using onboard camera computer vision. The moment pest densities cross economic thresholds, the system calculates targeted chemical and biological treatments, reducing overall pesticide usage by thirty-five percent.",
      keyVisual: "Close-up of ESP32-CAM trap classifying aphids and whiteflies, triggering automated alert notifications on the farmer's mobile dashboard.",
      techHighlight: "ESP32-CAM Computer Vision • RS485 Soil Moisture/NPK • 35% Chemical Reduction"
    },
    {
      id: 5,
      title: "Act V: Farmer Prosperity & Future Horizons",
      duration: "3:00 - 3:45",
      icon: "🏆",
      subtitle: "Empowering 120 Million Indian Farmers with Precision Agronomy",
      summary: "Summarizing the measurable financial returns: ₹14,500 extra income per acre, community active learning datasets, and autonomous drone micro-spraying APIs.",
      voiceover: "AgroScan Sentinel is more than an app — it is a self-improving agricultural intelligence ecosystem. With every verified specimen, our neural network evolves. By democratizing precision farming, we are safeguarding food security, protecting soil ecology, and transforming Indian agriculture for generations to come.",
      keyVisual: "Smiling farmer reviewing high-yield harvest in Punjab, with floating UI telemetry showing +22% yield preserved and ₹14,500 profit surge.",
      techHighlight: "+22% Yield Preserved • ₹14,500 Avg Profit Increase/Acre • Active Continuous Learning"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Documentary Hero Header */}
      <div className="bg-gradient-to-r from-forest-950 via-slate-900 to-forest-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-emerald-500/40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-10 -bottom-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black uppercase tracking-wider">
              <Film className="w-4 h-4 text-amber-400" />
              <span>Smart India Hackathon (SIH) • Official Project Documentary</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
              AgroScan Sentinel: The Journey to Autonomous Precision Agriculture
            </h1>
            
            <p className="text-xs sm:text-sm text-emerald-100/80 leading-relaxed font-medium">
              A 5-act cinematic visual documentary and pitch presentation explaining the crisis, technical breakthrough, dual-AI engine, satellite GIS, and socioeconomic transformation for Indian smallholders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="http://localhost:5000/sih-report.html"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-4 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-emerald-400" />
              <span>View Written Dossier</span>
            </a>

            <a
              href="http://localhost:5000/sih-presentation.html"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-4 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 flex items-center justify-center space-x-2 transition-all cursor-pointer"
            >
              <Tv className="w-4 h-4 text-amber-400" />
              <span>Launch 16:9 Deck</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Documentary Video Player & Storyboard Screen */}
      <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border-2 border-slate-800 shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Virtual Cinema Screen */}
        <div className="w-full bg-gradient-to-br from-slate-900 via-forest-950 to-slate-900 rounded-2xl p-6 sm:p-10 border border-emerald-500/30 relative min-h-[300px] flex flex-col justify-between overflow-hidden shadow-inner">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          
          {/* Cinema Header */}
          <div className="flex items-center justify-between z-10 border-b border-white/10 pb-4">
            <div className="flex items-center space-x-3">
              <span className="text-3xl">{documentaryScenes[activeScene].icon}</span>
              <div>
                <span className="text-[10px] uppercase font-extrabold text-amber-400 tracking-wider block">
                  {documentaryScenes[activeScene].duration} • Scene {activeScene + 1} of 5
                </span>
                <h2 className="text-lg sm:text-2xl font-black text-white">
                  {documentaryScenes[activeScene].title}
                </h2>
              </div>
            </div>

            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-700">
              4K HDR Master
            </span>
          </div>

          {/* Voiceover Narrative Display */}
          <div className="my-6 space-y-3 z-10">
            <div className="p-4 sm:p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 flex items-center space-x-1.5">
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                <span>Narrator Audio & Voiceover Script</span>
              </span>
              <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed italic">
                "{documentaryScenes[activeScene].voiceover}"
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-emerald-300 block mb-0.5">🎬 Visual Storyboard Direction:</strong>
                <span className="text-slate-300">{documentaryScenes[activeScene].keyVisual}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <strong className="text-amber-300 block mb-0.5">⚡ Deep-Tech Feature Highlight:</strong>
                <span className="text-slate-300">{documentaryScenes[activeScene].techHighlight}</span>
              </div>
            </div>
          </div>

          {/* Scene Navigation Timeline Bar */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10 z-10 gap-3">
            <button
              onClick={() => setActiveScene(prev => Math.max(0, prev - 1))}
              disabled={activeScene === 0}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:pointer-events-none text-xs font-bold text-white transition-all cursor-pointer"
            >
              ← Previous Act
            </button>

            <div className="flex items-center space-x-2">
              {documentaryScenes.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScene(idx)}
                  className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                    activeScene === idx ? 'bg-emerald-400 w-8' : 'bg-white/20 hover:bg-white/40'
                  }`}
                  title={`Jump to Scene ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveScene(prev => Math.min(documentaryScenes.length - 1, prev + 1))}
              disabled={activeScene === documentaryScenes.length - 1}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-30 disabled:pointer-events-none text-xs font-black text-slate-950 transition-all cursor-pointer"
            >
              Next Act →
            </button>
          </div>

        </div>

      </div>

      {/* 5-Scene Storyboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {documentaryScenes.map((scene, idx) => (
          <div
            key={idx}
            onClick={() => setActiveScene(idx)}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
              activeScene === idx 
                ? 'bg-emerald-950/40 border-emerald-500 shadow-lg shadow-emerald-500/10' 
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-400'
            }`}
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xl">{scene.icon}</span>
                <span className="text-[10px] font-bold font-mono text-slate-400">{scene.duration}</span>
              </div>
              <h3 className="font-black text-xs text-slate-900 dark:text-white line-clamp-1">
                {scene.title}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-3 leading-relaxed">
                {scene.summary}
              </p>
            </div>

            <span className={`text-[10px] font-extrabold uppercase ${activeScene === idx ? 'text-emerald-400' : 'text-slate-400'}`}>
              {activeScene === idx ? '● Playing Now' : 'Click to Play'}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};
