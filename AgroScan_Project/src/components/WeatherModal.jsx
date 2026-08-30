import React, { useState, useEffect } from 'react';
import { 
  X, 
  Sun, 
  CloudSun, 
  CloudRain, 
  CloudLightning, 
  Wind, 
  Droplets, 
  Compass, 
  Thermometer, 
  Activity, 
  Sparkles, 
  AlertTriangle, 
  ShieldCheck, 
  Calendar, 
  Layers, 
  RefreshCw, 
  Clock, 
  Radio, 
  ExternalLink,
  Key,
  CheckCircle2,
  Gauge,
  MapPin,
  Search,
  Check,
  Building
} from 'lucide-react';
import { fetchLiveMeteorologicalWeather, getDistrictCoordinates } from '../utils/realLiveWeatherEngine';

export const WeatherModal = ({
  isOpen,
  onClose,
  sensors,
  currentCity = 'Sangrur',
  onSaveCity = () => {}
}) => {
  const [activeTab, setActiveTab] = useState('hourly'); // 'hourly' | 'weekly' | 'spray' | 'city' | 'apikey'
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [customKey, setCustomKey] = useState('');
  const [keySaved, setKeySaved] = useState(false);
  const [cityInput, setCityInput] = useState('');

  const popularCities = [
    'Sangrur', 'Ludhiana', 'Mohali', 'Chandigarh', 'Patiala', 
    'Bathinda', 'Amritsar', 'Jalandhar', 'Karnal', 'New Delhi'
  ];

  const currentTemp = weatherData?.temperature ?? (sensors?.temperature || 31);
  const currentHumidity = weatherData?.humidity ?? (sensors?.humidity || 58);
  const currentWind = weatherData?.windSpeed ?? (sensors?.windSpeed || 12);
  const currentPressure = weatherData?.pressure ?? (sensors?.pressure || 1012);
  const currentCondition = weatherData?.weatherCondition || sensors?.weatherCondition || 'Optimal Weather';
  const weatherSource = weatherData?.source || sensors?.weatherSource || 'OpenWeather / Doppler Grid';

  const loadWeatherForCity = async (cityName) => {
    setLoading(true);
    try {
      const coords = getDistrictCoordinates(cityName);
      const live = await fetchLiveMeteorologicalWeather(coords.lat, coords.lng, cityName);
      if (live) setWeatherData(live);
    } catch (e) {
      console.warn('Weather fetch fallback:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    loadWeatherForCity(currentCity);
  }, [isOpen, currentCity]);

  if (!isOpen) return null;

  const handleCitySelect = (selectedCity) => {
    onSaveCity(selectedCity);
    loadWeatherForCity(selectedCity);
  };

  const handleCustomCitySubmit = (e) => {
    e.preventDefault();
    if (cityInput.trim()) {
      handleCitySelect(cityInput.trim());
      setCityInput('');
    }
  };

  const weeklyForecast = weatherData?.weekly || [
    { day: 'Today', maxTemp: currentTemp + 1, minTemp: currentTemp - 6, condition: currentCondition, icon: '⛅', rainChance: 15, sprayAdvice: 'Ideal Spray Window (06:00 - 09:30 AM)' },
    { day: 'Tomorrow', maxTemp: currentTemp + 2, minTemp: currentTemp - 5, condition: 'Sunny / Clear', icon: '☀️', rainChance: 5, sprayAdvice: 'Optimal Foliar Nutrition Window' },
    { day: 'Day 3', maxTemp: currentTemp, minTemp: currentTemp - 7, condition: 'Scattered Clouds', icon: '⛅', rainChance: 25, sprayAdvice: 'Good Window Before Afternoon' },
    { day: 'Day 4', maxTemp: currentTemp - 2, minTemp: currentTemp - 8, condition: 'Scattered Rain', icon: '🌦️', rainChance: 70, sprayAdvice: 'Delay Chemical Fungicide Spray' },
    { day: 'Day 5', maxTemp: currentTemp + 1, minTemp: currentTemp - 6, condition: 'Clear Sky', icon: '🌤️', rainChance: 10, sprayAdvice: 'Safe for Soil Drenching' },
    { day: 'Day 6', maxTemp: currentTemp + 3, minTemp: currentTemp - 5, condition: 'Breezy & Warm', icon: '⛅', rainChance: 15, sprayAdvice: 'Monitor Canopy Humidity' },
  ];

  const hourlyForecast = weatherData?.hourly || [
    { time: '06:00', temp: currentTemp - 6, icon: '🌤️', humidity: currentHumidity + 15, wind: 6, sporeRisk: 'Low' },
    { time: '09:00', temp: currentTemp - 2, icon: '☀️', humidity: currentHumidity, wind: 10, sporeRisk: 'Optimal Spray' },
    { time: '12:00', temp: currentTemp + 2, icon: '☀️', humidity: Math.max(30, currentHumidity - 15), wind: 14, sporeRisk: 'High Evaporation' },
    { time: '15:00', temp: currentTemp + 3, icon: '⛅', humidity: Math.max(30, currentHumidity - 10), wind: 16, sporeRisk: 'Wind Warning' },
    { time: '18:00', temp: currentTemp - 1, icon: '🌤️', humidity: currentHumidity + 5, wind: 11, sporeRisk: 'Good Evening Window' },
    { time: '21:00', temp: currentTemp - 4, icon: '🌙', humidity: currentHumidity + 12, wind: 8, sporeRisk: 'Dew Condensation' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-forest-900 dark:bg-emerald-600 text-emerald-400 dark:text-white flex items-center justify-center shadow-md shadow-forest-900/20">
              <CloudSun className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center space-x-1.5">
                  <span>Weather in</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">{currentCity}</span>
                </h2>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 flex items-center space-x-1">
                  <Radio className="w-2.5 h-2.5 animate-pulse text-emerald-500" />
                  <span>Live Doppler</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                {weatherSource}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <button
              onClick={() => loadWeatherForCity(currentCity)}
              disabled={loading}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Refresh Live Weather"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {/* Quick City Switcher Card */}
          <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs font-black text-slate-800 dark:text-slate-200">
                  Switch City / District:
                </span>
              </div>

              {/* City Search Form */}
              <form onSubmit={handleCustomCitySubmit} className="flex items-center space-x-2">
                <div className="relative flex-1 sm:w-48">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={cityInput}
                    onChange={(e) => setCityInput(e.target.value)}
                    placeholder="Type any city name..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                  />
                </div>
                <button
                  type="submit"
                  disabled={!cityInput.trim()}
                  className="px-3 py-1.5 rounded-xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 text-white font-extrabold text-xs shadow-xs disabled:opacity-40 cursor-pointer"
                >
                  Set City
                </button>
              </form>
            </div>

            {/* Popular District Buttons */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {popularCities.map((city, idx) => {
                const isActive = currentCity.toLowerCase() === city.toLowerCase();
                return (
                  <button
                    key={idx}
                    onClick={() => handleCitySelect(city)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                      isActive
                        ? 'bg-forest-900 dark:bg-emerald-600 text-white shadow-xs'
                        : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'
                    }`}
                  >
                    {isActive && <Check className="w-3 h-3 text-emerald-300" />}
                    <span>{city}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Live Weather Card */}
          <div className="p-5 rounded-3xl bg-gradient-to-br from-forest-900 via-forest-850 to-emerald-900 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-emerald-300 font-bold uppercase tracking-wider block mb-1">
                  Live Meteorological Conditions in {currentCity}
                </span>
                <div className="flex items-baseline space-x-3">
                  <span className="text-4xl sm:text-5xl font-black font-sans tracking-tight">
                    {currentTemp}°C
                  </span>
                  <span className="text-sm font-semibold text-emerald-100">
                    {currentCondition}
                  </span>
                </div>
              </div>

              {/* 3 Microclimate Badges */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 bg-black/20 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-center">
                <div>
                  <Droplets className="w-4 h-4 text-blue-300 mx-auto mb-1" />
                  <span className="text-[10px] text-emerald-200 block">Humidity</span>
                  <strong className="text-xs font-bold">{currentHumidity}%</strong>
                </div>
                <div>
                  <Wind className="w-4 h-4 text-emerald-300 mx-auto mb-1" />
                  <span className="text-[10px] text-emerald-200 block">Wind</span>
                  <strong className="text-xs font-bold">{currentWind} km/h</strong>
                </div>
                <div>
                  <Gauge className="w-4 h-4 text-amber-300 mx-auto mb-1" />
                  <span className="text-[10px] text-emerald-200 block">Pressure</span>
                  <strong className="text-xs font-bold">{currentPressure} hPa</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center space-x-2 border-b border-slate-100 dark:border-slate-800 pb-2">
            <button
              onClick={() => setActiveTab('hourly')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'hourly'
                  ? 'bg-forest-900 dark:bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Hourly Microclimate
            </button>
            <button
              onClick={() => setActiveTab('weekly')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'weekly'
                  ? 'bg-forest-900 dark:bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              6-Day Weather Outlook
            </button>
            <button
              onClick={() => setActiveTab('spray')}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
                activeTab === 'spray'
                  ? 'bg-forest-900 dark:bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              AI Spray Advisory
            </button>
            <button
              onClick={() => setActiveTab('apikey')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center space-x-1 ${
                activeTab === 'apikey'
                  ? 'bg-forest-900 dark:bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Key className="w-3.5 h-3.5" />
              <span>API Key</span>
            </button>
          </div>

          {/* Tab 1: Hourly Forecast */}
          {activeTab === 'hourly' && (
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {hourlyForecast.map((h, i) => (
                <div 
                  key={i} 
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 text-center space-y-1.5"
                >
                  <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 block">{h.time}</span>
                  <span className="text-xl block">{h.icon}</span>
                  <strong className="text-sm font-black text-slate-900 dark:text-white block">{h.temp}°C</strong>
                  <span className="text-[10px] text-blue-600 dark:text-blue-400 font-bold block">{h.humidity}% rh</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-extrabold block truncate">
                    {h.sporeRisk}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: 6-Day Weekly Forecast */}
          {activeTab === 'weekly' && (
            <div className="space-y-2">
              {weeklyForecast.map((w, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/80 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-3 w-1/3">
                    <span className="text-2xl">{w.icon}</span>
                    <div>
                      <strong className="text-xs font-black text-slate-900 dark:text-white block">{w.day}</strong>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">{w.condition}</span>
                    </div>
                  </div>

                  <div className="text-center w-1/3">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">🌧️ {w.rainChance}% rain</span>
                    <span className="text-[10px] text-slate-500 block truncate">{w.sprayAdvice}</span>
                  </div>

                  <div className="text-right w-1/3">
                    <span className="text-xs font-black text-slate-900 dark:text-white">{w.maxTemp}°</span>
                    <span className="text-xs text-slate-400 ml-1">/ {w.minTemp}°C</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: AI Spray Advisory */}
          {activeTab === 'spray' && (
            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-xs space-y-2">
                <div className="flex items-center space-x-2 font-bold text-emerald-900 dark:text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Optimal Agrochemical Spray Windows in {currentCity}:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                  <li><strong>Early Morning (06:00 AM - 09:30 AM):</strong> Low wind speeds (&lt; 8 km/h) prevent droplet drift. Foliar absorption is optimal.</li>
                  <li><strong>Late Evening (05:30 PM - 07:00 PM):</strong> Ideal for biological fungicide applications (Trichoderma viride) before overnight spore germination.</li>
                  <li><strong>Midday Warning (12:00 PM - 03:00 PM):</strong> High ambient temperature increases pesticide evaporation and foliar scorching risk.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-xs space-y-1">
                <strong className="text-amber-900 dark:text-amber-300 block font-bold">
                  ⚠️ Fungal Spore Pressure Index:
                </strong>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  Relative canopy humidity ({currentHumidity}%) combined with temperature ({currentTemp}°C) in {currentCity} creates moderate incubation pressure for <em>Alternaria solani</em> and <em>Puccinia striiformis</em>. Inspect lower leaves during routine scouting.
                </p>
              </div>
            </div>
          )}

          {/* Tab 4: OpenWeather Key Configuration */}
          {activeTab === 'apikey' && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center space-x-2">
                <Key className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">Custom OpenWeatherMap API Key</h4>
              </div>
              <p className="text-[11px] text-slate-600 dark:text-slate-400">
                You can paste your personal OpenWeatherMap API key below (or set <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">OPENWEATHER_API_KEY</code> in <code className="bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">.env</code>).
              </p>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={customKey}
                  onChange={(e) => setCustomKey(e.target.value)}
                  placeholder="Paste your 32-character OpenWeather key..."
                  className="flex-1 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-mono outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button
                  onClick={async () => {
                    if (customKey.trim()) {
                      try {
                        const coords = getDistrictCoordinates(currentCity);
                        const res = await fetch(`http://localhost:5000/api/weather?lat=${coords.lat}&lon=${coords.lng}&apiKey=${customKey.trim()}`);
                        if (res.ok) {
                          setKeySaved(true);
                          loadWeatherForCity(currentCity);
                        }
                      } catch (e) {}
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-forest-900 dark:bg-emerald-600 text-white font-bold text-xs cursor-pointer hover:bg-forest-800"
                >
                  Save & Test
                </button>
              </div>

              {keySaved && (
                <div className="flex items-center space-x-1.5 text-emerald-600 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Key tested and live weather updated!</span>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
          <span className="text-[11px] text-slate-400">Location: {currentCity} • Updated: {weatherData?.lastUpdated || 'Live'}</span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-forest-900 dark:bg-emerald-600 text-white font-bold text-xs cursor-pointer hover:bg-forest-800"
          >
            Done
          </button>
        </div>

      </div>
    </div>
  );
};
