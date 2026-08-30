import React, { useState } from 'react';
import { 
  MapPin, 
  CloudRain, 
  Thermometer, 
  Layers, 
  Sparkles, 
  Sprout, 
  TrendingUp, 
  AlertTriangle,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { agroClimaticZones } from '../data/regionalCropsData';

export function RegionalCropsView({ onSelectCropByName }) {
  const [selectedZoneId, setSelectedZoneId] = useState(agroClimaticZones[0].id);
  const activeZone = agroClimaticZones.find((z) => z.id === selectedZoneId) || agroClimaticZones[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-forest-800">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-emerald-400" />
            <span>Agro-Climatic Intelligence & Regional Crop Profiles</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Regional Crops & Climate Suitability Matrix
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-2 leading-relaxed">
            Detailed descriptions of regional crops across major agro-climatic zones, temperature requirements, rainfall thresholds, soil pH compatibility, yield projections, and companion planting strategies.
          </p>
        </div>
      </div>

      {/* Zone Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {agroClimaticZones.map((zone) => {
          const isSelected = selectedZoneId === zone.id;
          return (
            <button
              key={zone.id}
              onClick={() => setSelectedZoneId(zone.id)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-forest-900 text-white border-forest-700 shadow-lg shadow-forest-900/20 font-bold scale-[1.02]'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div>
                <div className="text-2xl mb-2">{zone.icon}</div>
                <h3 className="text-xs font-extrabold line-clamp-2 leading-tight">
                  {zone.zoneName}
                </h3>
              </div>
              <span className={`text-[10px] mt-3 font-semibold ${isSelected ? 'text-emerald-300' : 'text-slate-400'}`}>
                {zone.crops.length} Key Crops Profiled →
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Zone Comprehensive Climate & Soil Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-100">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">{activeZone.icon}</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                {activeZone.zoneName}
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1 font-medium">
              Major Cultivating States / Regions: <strong className="text-slate-800">{activeZone.majorStates}</strong>
            </p>
          </div>

          <span className="px-3 py-1 rounded-xl text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 self-start md:self-auto">
            {activeZone.climate}
          </span>
        </div>

        {/* Climate & Soil Key Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1 mb-1">
              <CloudRain className="w-3.5 h-3.5 text-blue-500" />
              <span>Annual Rainfall</span>
            </span>
            <span className="text-base font-extrabold text-slate-900">
              {activeZone.annualRainfall}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1 mb-1">
              <Thermometer className="w-3.5 h-3.5 text-amber-500" />
              <span>Temp Range</span>
            </span>
            <span className="text-base font-extrabold text-slate-900">
              {activeZone.temperatureRange}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1 mb-1">
              <Layers className="w-3.5 h-3.5 text-emerald-500" />
              <span>Soil Types</span>
            </span>
            <span className="text-xs font-bold text-slate-900 line-clamp-1">
              {activeZone.soilTypes.join(', ')}
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Optimal Soil pH
            </span>
            <span className="text-base font-extrabold text-emerald-700">
              {activeZone.soilPH}
            </span>
          </div>
        </div>

        {/* Crops Profile Grid in this Region */}
        <div className="space-y-4 pt-2">
          <h3 className="font-extrabold text-sm sm:text-base text-slate-900 flex items-center space-x-2">
            <Sprout className="w-4 h-4 text-emerald-600" />
            <span>Key Regional Crop Profiles & Agronomic Guidelines</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {activeZone.crops.map((crop, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 rounded-2xl p-5 border border-slate-200 space-y-3.5 hover:bg-white hover:border-emerald-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-black text-base text-slate-900">
                      {crop.name}
                    </h4>
                    <span className="text-xs font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-md inline-block mt-0.5">
                      {crop.type} • Season: {crop.season}
                    </span>
                  </div>
                  <span className="text-xs font-bold text-slate-700 bg-white px-2.5 py-1 rounded-xl border border-slate-200 shadow-sm shrink-0">
                    🌾 {crop.avgYield}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {crop.description}
                </p>

                <div className="space-y-2 text-xs pt-2 border-t border-slate-200/80">
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Temp Req:</span>
                    <span className="font-bold text-slate-800 text-right">{crop.tempReq}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Water / Rain Req:</span>
                    <span className="font-bold text-slate-800 text-right">{crop.rainfallReq}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400 font-medium">Soil Preference:</span>
                    <span className="font-bold text-slate-800 text-right">{crop.soilType}</span>
                  </div>
                </div>

                {/* Vulnerabilities & Companion Crops */}
                <div className="space-y-2 pt-2 border-t border-slate-200/80 text-xs">
                  <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-900">
                    <span className="font-bold flex items-center space-x-1 text-[11px] mb-0.5">
                      <AlertTriangle className="w-3 h-3 text-rose-600" />
                      <span>Major Diseases & Pests:</span>
                    </span>
                    <span className="text-[11px]">{crop.vulnerability}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                    <span className="font-bold text-[11px] mb-0.5 block">
                      🌱 Recommended Companion & Intercropping:
                    </span>
                    <span className="text-[11px]">{crop.companionCrops}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
