import { handleImageError } from '../utils/imageFallbacks';
import React, { useState, useMemo } from 'react';
import { 
  Microscope, 
  Search, 
  AlertTriangle, 
  ShieldCheck, 
  Droplet, 
  Sparkles, 
  Bookmark, 
  CheckCircle2, 
  ChevronRight,
  Filter,
  ExternalLink,
  Flame,
  Bug,
  Activity
} from 'lucide-react';
import { cropDatabase } from '../data/cropData';

export function CropDiseaseView({
  onSelectCrop,
  onOpenScanner,
  savedBookmarks = [],
  onToggleBookmark = () => {},
}) {
  const [selectedPathogen, setSelectedPathogen] = useState('All');
  const [selectedSeverity, setSelectedSeverity] = useState('All');
  const [selectedSeason, setSelectedSeason] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalCrop, setActiveModalCrop] = useState(null);

  const pathogens = ['All', 'Fungal', 'Bacterial', 'Viral', 'Oomycete', 'Nematode'];
  const severities = ['All', 'Critical', 'High', 'Moderate'];
  const seasons = ['All', 'Season-1', 'Season-2', 'Season-3', 'Season-4'];

  const filteredCrops = useMemo(() => {
    return cropDatabase.filter((crop) => {
      if (selectedPathogen !== 'All' && crop.pathogenType !== selectedPathogen) return false;
      if (selectedSeverity !== 'All' && crop.severity !== selectedSeverity) return false;
      if (selectedSeason !== 'All' && crop.season !== selectedSeason) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const mCrop = crop.cropName.toLowerCase().includes(q);
        const mDis = crop.diseaseName.toLowerCase().includes(q);
        const mPath = crop.pathogenName.toLowerCase().includes(q);
        const mSym = crop.symptoms.some((s) => s.toLowerCase().includes(q));
        if (!mCrop && !mDis && !mPath && !mSym) return false;
      }
      return true;
    });
  }, [selectedPathogen, selectedSeverity, selectedSeason, searchQuery]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-forest-800">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Microscope className="w-3.5 h-3.5 text-emerald-400" />
            <span>Phytopathology Encyclopedia & Crop Disease Cures</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Crop Diseases, Symptoms, Cures & Preventions
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-2 leading-relaxed">
            Detailed breakdown of fungal, bacterial, viral, and oomycete crop diseases. Complete step-by-step chemical dosages, certified organic remedies, foliar symptom patterns, and seasonal prevention protocols.
          </p>
        </div>
      </div>

      {/* Filter Toolbar & Search */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Search */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search crop, disease (e.g. Blight, Rust, Blast), pathogen, chemical..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-forest-800"
            />
          </div>

          {/* Pathogen Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto pb-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-1">
              Pathogen:
            </span>
            {pathogens.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPathogen(p)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  selectedPathogen === p
                    ? 'bg-forest-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {p}
              </button>
            ))}
          </div>

        </div>

        {/* Severity & Season Secondary Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 text-xs">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-500 text-[11px]">Severity:</span>
            {severities.map((sev) => (
              <button
                key={sev}
                onClick={() => setSelectedSeverity(sev)}
                className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${
                  selectedSeverity === sev
                    ? 'bg-rose-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {sev}
              </button>
            ))}
          </div>

          <div className="text-[11px] text-slate-400 font-semibold">
            Showing {filteredCrops.length} disease profiles
          </div>
        </div>
      </div>

      {/* Disease Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <div
            key={crop.id}
            onClick={() => setActiveModalCrop(crop)}
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col cursor-pointer group"
          >
            {/* Visual Header */}
            <div className="relative h-44 w-full overflow-hidden bg-slate-950">
              <img src={crop.imageUrl} alt={crop.diseaseName} onError={(e) => handleImageError(e, crop.diseaseName, "leaf")} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

              {/* Pathogen Type Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-xl text-xs font-black bg-white/95 text-slate-900 shadow-md">
                  {crop.pathogenType}
                </span>
              </div>

              {/* Severity Pill */}
              <div className="absolute top-3 right-3">
                <span
                  className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold shadow-md ${
                    crop.severity === 'Critical' || crop.severity === 'High'
                      ? 'bg-rose-600 text-white'
                      : 'bg-amber-500 text-white'
                  }`}
                >
                  {crop.severity} Risk
                </span>
              </div>

              {/* Bottom Disease Title on Image */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                  {crop.cropName} ({crop.scientificName})
                </span>
                <h3 className="font-extrabold text-base tracking-tight leading-snug drop-shadow-md">
                  {crop.diseaseName}
                </h3>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Pathogen
                </span>
                <p className="text-xs font-bold text-slate-800 italic">
                  {crop.pathogenName}
                </p>
                <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                  {crop.quickSummary}
                </p>
              </div>

              {/* Symptoms Preview */}
              <div className="space-y-1.5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                  Primary Visual Symptoms:
                </span>
                <ul className="space-y-1 text-slate-700">
                  {crop.symptoms.slice(0, 2).map((sym, idx) => (
                    <li key={idx} className="flex items-start space-x-1.5 line-clamp-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chemical Treatment Tag Preview */}
              <div className="text-xs">
                <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-1">
                  Chemical Cure (Fast-Acting):
                </span>
                <p className="text-xs font-bold text-slate-800 line-clamp-1">
                  {crop.chemicalTreatment[0]}
                </p>
              </div>

              {/* Card Footer Button */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-forest-800 group-hover:text-forest-900 flex items-center space-x-1">
                  <span>View Cures & Preventions</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Disease Detail Full-Featured Modal */}
      {activeModalCrop && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Header Image */}
            <div className="relative h-56 w-full bg-slate-950">
              <img
                src={activeModalCrop.imageUrl}
                alt={activeModalCrop.diseaseName}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <button
                onClick={() => setActiveModalCrop(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-emerald-500 text-slate-950">
                    {activeModalCrop.cropName}
                  </span>
                  <span className="px-2 py-0.5 rounded-lg text-xs font-semibold bg-white/20 text-white backdrop-blur-md">
                    {activeModalCrop.pathogenType} Pathogen
                  </span>
                  <span className="px-2 py-0.5 rounded-lg text-xs font-bold bg-rose-600 text-white">
                    {activeModalCrop.severity} Severity
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black">{activeModalCrop.diseaseName}</h2>
                <p className="text-xs text-slate-300 italic">{activeModalCrop.pathogenName}</p>
              </div>
            </div>

            {/* Modal Body with Symptoms, Chemical Cures, Organic Remedies, Preventions */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs">
              
              {/* Symptoms */}
              <div>
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center space-x-1.5">
                  <Activity className="w-4 h-4 text-rose-600" />
                  <span>Comprehensive Field Symptoms</span>
                </h4>
                <ul className="space-y-1.5 p-3.5 rounded-2xl bg-rose-50/50 border border-rose-100 text-slate-700">
                  {activeModalCrop.symptoms.map((s, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chemical Cures */}
              <div>
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center space-x-1.5">
                  <Flame className="w-4 h-4 text-emerald-600" />
                  <span>Chemical Treatment & Fungicide/Bactericide Schedule</span>
                </h4>
                <div className="space-y-2">
                  {activeModalCrop.chemicalTreatment.map((c, i) => (
                    <div key={i} className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-slate-800 flex items-start space-x-2">
                      <span className="font-bold text-emerald-800 shrink-0">{i + 1}.</span>
                      <span className="leading-relaxed">{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Organic Remedies */}
              <div>
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center space-x-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Organic Remedies & Bio-Control Agents</span>
                </h4>
                <div className="space-y-2">
                  {activeModalCrop.organicRemedies.map((org, i) => (
                    <div key={i} className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-slate-800 flex items-start space-x-2">
                      <span className="font-bold text-amber-800 shrink-0">{i + 1}.</span>
                      <span className="leading-relaxed">{org}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preventive Measures */}
              <div>
                <h4 className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px] mb-2 flex items-center space-x-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Preventive Cultural Practices</span>
                </h4>
                <ul className="space-y-1.5 p-3.5 rounded-2xl bg-blue-50/50 border border-blue-100 text-slate-700">
                  {activeModalCrop.preventiveMeasures.map((p, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button
                onClick={() => setActiveModalCrop(null)}
                className="px-5 py-2 rounded-xl bg-forest-900 text-white font-bold text-xs hover:bg-forest-800"
              >
                Close Diagnosis
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
