import React, { useState } from 'react';
import {
  X,
  Bookmark,
  AlertTriangle,
  Bug,
  Sparkles,
  FlaskConical,
  Sprout,
  ShieldCheck,
  Calendar,
  Save,
  MessageSquare,
  Droplets,
  CheckCircle2
} from 'lucide-react';
import { storage } from '../utils/localStorage';

export function CropDetailsModal({
  crop,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onAskAI
}) {
  const [activeSubTab, setActiveSubTab] = useState('symptoms');
  const [userNote, setUserNote] = useState(() => {
    const notes = storage.getNotes();
    return notes[crop?.id]?.text || '';
  });
  const [noteSaved, setNoteSaved] = useState(false);

  if (!crop) return null;

  const handleSaveNote = () => {
    storage.saveNote(crop.id, userNote);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-slate-900 border-2 border-slate-700/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        {/* Modal Top Banner */}
        <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-slate-950 shrink-0">
          <img
            src={crop.imageUrl}
            alt={crop.cropName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>

          {/* Close & Action Buttons */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <button
              onClick={() => onToggleBookmark(crop.id)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-colors ${
                isBookmarked
                  ? 'bg-amber-500 text-slate-950 font-bold'
                  : 'bg-slate-900/80 text-slate-200 hover:text-white'
              }`}
              title="Bookmark to Local Storage"
            >
              <Bookmark className="w-5 h-5 fill-current" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-slate-900/80 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title Header */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-mono font-bold">
                  {crop.season}
                </span>
                <span className="text-xs text-emerald-400 font-semibold">
                  {crop.seasonLabel}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
                {crop.cropName}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 italic">
                Scientific: {crop.scientificName}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                crop.severity === 'Critical'
                  ? 'bg-rose-600 text-white'
                  : crop.severity === 'High'
                  ? 'bg-amber-600 text-white'
                  : 'bg-emerald-600 text-white'
              }`}>
                {crop.severity} Severity
              </span>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex overflow-x-auto border-b border-slate-800 bg-slate-950 px-6 shrink-0">
          {[
            { id: 'symptoms', label: 'Symptoms & Causes', icon: AlertTriangle },
            { id: 'treatment', label: 'Chemical & Organic Remedies', icon: FlaskConical },
            { id: 'fertilizer', label: 'Fertilizer & NPK Plan', icon: Droplets },
            { id: 'prevention', label: 'Preventive Measures', icon: ShieldCheck },
            { id: 'notes', label: 'Farmer Field Notes (LocalStorage)', icon: Save },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeSubTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex items-center space-x-2 py-3 px-4 text-xs font-bold whitespace-nowrap transition-colors border-b-2 ${
                  isActive
                    ? 'text-rose-400 border-rose-500 bg-rose-500/5'
                    : 'text-slate-400 border-transparent hover:text-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Body Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-200 text-sm">
          {/* Tab 1: Symptoms & Causes */}
          {activeSubTab === 'symptoms' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-800/40">
                <div className="flex items-center gap-2 text-rose-400 font-bold text-base mb-1">
                  <Bug className="w-5 h-5" />
                  <span>Primary Disease: {crop.diseaseName}</span>
                </div>
                <div className="text-xs text-slate-300 font-mono">
                  Pathogen: {crop.pathogenName} ({crop.pathogenType})
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-100 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Key Visual Symptoms Checklist
                </h4>
                <ul className="space-y-2.5">
                  {crop.symptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                      <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-100 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  Environmental Triggers & Causes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {crop.causes.map((cause, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-800/30 border border-slate-800 text-xs text-slate-300">
                      🌡️ {cause}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Treatment & Remedies */}
          {activeSubTab === 'treatment' && (
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-rose-400 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4" />
                  Chemical Fungicide / Bactericide Dosage
                </h4>
                <div className="space-y-2.5">
                  {crop.chemicalTreatment.map((chem, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-800/50 border border-rose-500/20 text-xs sm:text-sm text-slate-200">
                      🧪 <strong className="text-white">{chem.split('@')[0]}</strong> {chem.includes('@') ? `@ ${chem.split('@')[1]}` : ''}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-emerald-400 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sprout className="w-4 h-4" />
                  Eco-Friendly & Organic Bio-Control Remedies
                </h4>
                <div className="space-y-2.5">
                  {crop.organicRemedies.map((org, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs sm:text-sm text-emerald-200">
                      🌿 {org}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Fertilizer & NPK Plan */}
          {activeSubTab === 'fertilizer' && (
            <div className="space-y-6">
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950/40 to-slate-900 border border-emerald-500/30">
                <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Recommended Macro-Nutrient Formulation
                </div>
                <div className="text-3xl font-extrabold text-white font-mono mt-1">
                  NPK {crop.fertilizerRequirement.npkRatio}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  {crop.fertilizerRequirement.recommendation}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/50 border border-slate-800">
                <h5 className="font-bold text-xs uppercase tracking-wider text-slate-300 mb-2">
                  Split Application Schedule
                </h5>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-mono">
                  {crop.fertilizerRequirement.schedule}
                </p>
              </div>
            </div>
          )}

          {/* Tab 4: Prevention */}
          {activeSubTab === 'prevention' && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-100 text-sm uppercase tracking-wider mb-2">
                Seasonal Farm Protection Checklist
              </h4>
              <div className="space-y-2.5">
                {crop.preventiveMeasures.map((prev, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/40 border border-slate-800">
                    <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">{prev}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 5: Farmer Field Notes (LocalStorage) */}
          {activeSubTab === 'notes' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300">Custom Farmer Notes for {crop.cropName}</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Auto-saved to LocalStorage</span>
                </div>
                <textarea
                  rows={6}
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  placeholder="Record your field observations, spraying dates, fertilizer amounts applied, or local weather conditions..."
                  className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <div className="flex items-center justify-between mt-3">
                  <span className="text-[11px] text-slate-500">
                    {noteSaved ? '✅ Saved to browser LocalStorage!' : 'Notes remain persistent even after closing.'}
                  </span>
                  <button
                    onClick={handleSaveNote}
                    className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>Save Note</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={() => onAskAI(crop)}
            className="px-4 py-2 bg-rose-500 hover:bg-rose-400 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-rose-500/20 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Ask Agri-AI about {crop.diseaseName}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs sm:text-sm rounded-xl transition-colors"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
