import React from 'react';
import {
  ChevronLeft,
  Calendar,
  Bug,
  AlertTriangle,
  Bookmark,
  Sparkles,
  Leaf,
  Database,
  Cpu,
  Key,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

export function SidebarDrawer({
  isOpen,
  onClose,
  selectedSeason,
  setSelectedSeason,
  selectedPathogen,
  setSelectedPathogen,
  selectedSeverity,
  setSelectedSeverity,
  savedBookmarks,
  onSelectCropById,
  activeTab,
  setActiveTab
}) {
  const seasons = [
    { id: 'All', label: 'All Seasons' },
    { id: 'Season-1', label: 'Season-1: Kharif (Monsoon)', sub: 'Jun - Oct (Paddy, Cotton, Soybean)' },
    { id: 'Season-2', label: 'Season-2: Rabi (Winter)', sub: 'Oct - Mar (Wheat, Mustard, Chickpea)' },
    { id: 'Season-3', label: 'Season-3: Zaid (Summer)', sub: 'Mar - Jun (Maize, Melons, Moong)' },
    { id: 'Season-4', label: 'Season-4: Perennial / Cash', sub: 'Year-Round (Sugarcane, Tomato, Potato)' },
  ];

  const pathogens = ['All', 'Fungal', 'Bacterial', 'Viral'];
  const severities = ['All', 'Critical', 'High', 'Moderate'];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Slide-over Drawer */}
      <aside
        className={`fixed top-0 left-0 bottom-0 w-80 max-w-[85vw] bg-slate-900 border-r border-slate-800 z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
              <span className="text-emerald-400 font-mono font-bold text-sm">&gt;&gt;</span>
            </div>
            <div>
              <h2 className="font-bold text-sm text-white">Navigation Drawer</h2>
              <p className="text-[10px] text-slate-400">Blueprint Filters & System Node</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Filters Content */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Season Selector */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                Seasonal Cropping
              </span>
            </div>
            <div className="space-y-1.5">
              {seasons.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSelectedSeason(s.id);
                    if (activeTab !== 'Crop-disease') setActiveTab('Crop-disease');
                  }}
                  className={`w-full text-left p-2.5 rounded-lg text-xs transition-all border ${
                    selectedSeason === s.id
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold'
                      : 'bg-slate-800/40 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  <div className="font-medium text-slate-200">{s.label}</div>
                  {s.sub && <div className="text-[10px] text-slate-500 mt-0.5">{s.sub}</div>}
                </button>
              ))}
            </div>
          </div>

          {/* Pathogen Type Filter */}
          <div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Bug className="w-3.5 h-3.5 text-amber-400" />
              Pathogen Category
            </span>
            <div className="grid grid-cols-2 gap-1.5">
              {pathogens.map((p) => (
                <button
                  key={p}
                  onClick={() => setSelectedPathogen(p)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                    selectedPathogen === p
                      ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                      : 'bg-slate-800/40 text-slate-400 border-slate-800 hover:bg-slate-800 hover:text-slate-200'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Severity Filter */}
          <div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
              Disease Severity
            </span>
            <div className="flex flex-wrap gap-1.5">
              {severities.map((sev) => (
                <button
                  key={sev}
                  onClick={() => setSelectedSeverity(sev)}
                  className={`px-3 py-1 rounded-full text-xs font-medium border transition-colors ${
                    selectedSeverity === sev
                      ? sev === 'Critical'
                        ? 'bg-rose-500/20 text-rose-300 border-rose-500/50'
                        : sev === 'High'
                        ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                        : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50'
                      : 'bg-slate-800/40 text-slate-400 border-slate-800 hover:bg-slate-800'
                  }`}
                >
                  {sev}
                </button>
              ))}
            </div>
          </div>

          {/* Saved Bookmarks */}
          <div>
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
              <Bookmark className="w-3.5 h-3.5 text-sky-400" />
              Saved Crop Diagnoses ({savedBookmarks.length})
            </span>
            {savedBookmarks.length === 0 ? (
              <p className="text-[11px] text-slate-500 italic p-2 bg-slate-800/30 rounded border border-slate-800">
                No crops bookmarked yet. Click the star on any card to save to LocalStorage.
              </p>
            ) : (
              <div className="space-y-1.5">
                {savedBookmarks.map((id) => (
                  <button
                    key={id}
                    onClick={() => {
                      onSelectCropById(id);
                      onClose();
                    }}
                    className="w-full text-left p-2 rounded bg-slate-800/60 hover:bg-slate-700/60 text-xs text-sky-300 flex items-center justify-between border border-slate-700/50 transition-colors"
                  >
                    <span className="truncate capitalize">{id.replace('crop-', '').replace(/-/g, ' ')}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Blueprint Architecture Live Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/90 text-xs space-y-2">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
            Connected Backend Stack
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span className="flex items-center gap-1 text-amber-400">
              <Key className="w-3 h-3" /> Auth Session
            </span>
            <span className="font-mono text-emerald-400">Bearer Token Valid</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span className="flex items-center gap-1 text-emerald-400">
              <Database className="w-3 h-3" /> MongoDB Cluster
            </span>
            <span className="font-mono text-slate-400">12 Documents</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-slate-300">
            <span className="flex items-center gap-1 text-cyan-400">
              <Cpu className="w-3 h-3" /> ML Engine
            </span>
            <span className="font-mono text-cyan-400">v2.4 PyTorch/FastAPI</span>
          </div>
        </div>
      </aside>
    </>
  );
}
