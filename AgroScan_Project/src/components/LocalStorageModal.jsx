import React from 'react';
import {
  X,
  HardDrive,
  Trash2,
  Download,
  Database,
  CheckCircle2
} from 'lucide-react';
import { storage } from '../utils/localStorage';

export function LocalStorageModal({ isOpen, onClose, onRefreshData }) {
  if (!isOpen) return null;

  const rawData = storage.getRawData();

  const handleClearAll = () => {
    if (confirm('Are you sure you want to clear all LocalStorage bookmarks, notes, and chat history?')) {
      localStorage.clear();
      onRefreshData();
      onClose();
    }
  };

  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rawData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "agricure_localstorage_dump.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-2xl space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <HardDrive className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-white font-display">LocalStorage State Inspector</h3>
              <p className="text-xs text-slate-400">Blueprint Client Cache & Database Sync</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs font-mono overflow-x-auto max-h-60">
          <pre className="text-emerald-400">{JSON.stringify(rawData, null, 2)}</pre>
        </div>

        <div className="flex items-center justify-between">
          <button
            onClick={handleDownload}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON Dump</span>
          </button>

          <button
            onClick={handleClearAll}
            className="px-4 py-2 bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white font-bold text-xs rounded-xl border border-rose-500/40 transition-colors flex items-center gap-1.5"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear LocalStorage</span>
          </button>
        </div>
      </div>
    </div>
  );
}
