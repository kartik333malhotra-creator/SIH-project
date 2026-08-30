import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Search, 
  X, 
  Check, 
  Sparkles, 
  Building, 
  ChevronRight, 
  ArrowRight,
  Bell
} from 'lucide-react';

export const CityNotificationBanner = ({
  currentCity = 'Mohali',
  onSaveCity = () => {},
  isOpen = true,
  onDismiss = () => {}
}) => {
  const [cityNameInput, setCityNameInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [suggestedCities] = useState([
    'Mohali', 'Ludhiana', 'Chandigarh', 'Kharar', 'Patiala', 
    'Amritsar', 'Jalandhar', 'Bathinda', 'Karnal', 'Panchkula', 'New Delhi'
  ]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cityNameInput.trim()) {
      onSaveCity(cityNameInput.trim());
      setIsEditing(false);
      onDismiss();
    }
  };

  const handleSelectQuickCity = (city) => {
    onSaveCity(city);
    setIsEditing(false);
    onDismiss();
  };

  return (
    <div className="w-full bg-gradient-to-r from-forest-950 via-forest-900 to-emerald-950 text-white border-b border-emerald-500/30 px-4 py-3 shadow-md animate-in slide-in-from-top duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Notification Message */}
        <div className="flex items-center space-x-3 w-full md:w-auto">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0">
            <Bell className="w-4 h-4 animate-bounce" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-black tracking-wide text-emerald-300">
                📍 Software City Alert:
              </span>
              <span className="text-[10px] bg-emerald-500/30 px-2 py-0.5 rounded-full font-bold text-emerald-200">
                Current: {currentCity}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 font-medium">
              Please confirm your City / District to receive exact local OpenWeather, crop advisories, and regional disease alerts.
            </p>
          </div>
        </div>

        {/* Input Form & Quick District Buttons (100% Pure Software) */}
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-end">
          
          {!isEditing ? (
            <div className="flex items-center space-x-2 w-full sm:w-auto">
              {/* Popular Quick District Pills */}
              <div className="hidden lg:flex items-center space-x-1.5 overflow-x-auto py-0.5">
                {suggestedCities.slice(0, 5).map((city, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectQuickCity(city)}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                      currentCity.toLowerCase() === city.toLowerCase()
                        ? 'bg-emerald-500 text-slate-950 shadow-xs'
                        : 'bg-white/10 hover:bg-white/20 text-slate-200'
                    }`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setIsEditing(true)}
                className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs flex items-center space-x-1.5 transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Change City</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={onDismiss}
                className="p-1.5 rounded-lg text-white/50 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Dismiss Notification"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex items-center space-x-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64">
                <Building className="w-3.5 h-3.5 text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  autoFocus
                  value={cityNameInput}
                  onChange={(e) => setCityNameInput(e.target.value)}
                  placeholder="Type city name (e.g. Ludhiana, Karnal)..."
                  className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-slate-900 border border-emerald-400/50 text-xs text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
              </div>

              <button
                type="submit"
                className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs flex items-center space-x-1 cursor-pointer transition-all shadow-md"
              >
                <Check className="w-3.5 h-3.5" />
                <span>Save</span>
              </button>

              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-2.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-bold transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
