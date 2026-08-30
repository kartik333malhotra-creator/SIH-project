import React, { useState } from 'react';
import { X, Sliders, RotateCw, CheckCircle2, Shield, Bell, Moon, Sun, MapPin, Radio } from 'lucide-react';

export const SettingsModal = ({ isOpen, onClose, onResetData, theme = 'light', toggleTheme = () => {}, liveLocation, onRefreshLocation }) => {
  const [resetSuccess, setResetSuccess] = useState(false);
  const [droneName, setDroneName] = useState('Sentinel Drone Alpha-2');

  if (!isOpen) return null;

  const handleReset = () => {
    onResetData();
    setResetSuccess(true);
    setTimeout(() => {
      setResetSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in">
      <div className="w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-855">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-xl bg-forest-900 dark:bg-emerald-600 text-emerald-400 dark:text-white flex items-center justify-center shadow-md">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Farm & System Settings</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Configure live GPS parameters & telemetry</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* Live GPS Location Display */}
          <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-950 dark:text-emerald-200 flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Live Detected GPS Field Location:</span>
              </span>
              <button
                onClick={onRefreshLocation}
                className="text-[10px] font-bold bg-emerald-200 dark:bg-emerald-800 text-emerald-900 dark:text-emerald-200 px-2 py-0.5 rounded cursor-pointer hover:bg-emerald-300"
              >
                Sync GPS
              </button>
            </div>
            <p className="text-xs text-emerald-900 dark:text-emerald-300 font-medium">
              {liveLocation?.fullAddress || 'Detecting live GPS location...'}
            </p>
            <span className="text-[10px] font-mono text-emerald-700 dark:text-emerald-400 block">
              Coordinates: {liveLocation?.coordsFormatted || '30.7046°N, 76.7179°E'}
            </span>
          </div>

          {/* Theme Switcher in Settings */}
          <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div>
              <span className="text-xs font-bold text-slate-900 dark:text-white block">Theme Mode</span>
              <span className="text-[11px] text-slate-500 dark:text-slate-400">Toggle between Daylight & Dark Sentinel</span>
            </div>
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-xl bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 text-xs font-bold text-slate-800 dark:text-slate-100 flex items-center space-x-1.5"
            >
              {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-slate-700" />}
              <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
            </button>
          </div>

          {/* Hardware Drone Name */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
              Surveillance Sentinel Drone Name
            </label>
            <input
              type="text"
              value={droneName}
              onChange={(e) => setDroneName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Reset All App Data */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold text-rose-600 block">Factory Reset & Recalibrate</span>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Clear all local scan logs and reset telemetry caches to fresh baseline values.
            </p>
            <button
              onClick={handleReset}
              className="w-full py-2.5 px-4 rounded-xl bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 text-rose-700 dark:text-rose-300 border border-rose-200 dark:border-rose-800 font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer"
            >
              {resetSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Data Reset Successfully!</span>
                </>
              ) : (
                <>
                  <RotateCw className="w-4 h-4" />
                  <span>Reset All Local Data</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
