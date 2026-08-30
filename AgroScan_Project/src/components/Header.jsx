import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Sprout, 
  AlertTriangle, 
  X, 
  LogIn, 
  LogOut, 
  Settings, 
  Sun, 
  Moon, 
  CloudSun
} from 'lucide-react';

export const Header = ({
  currentCity = 'Mohali',
  onOpenCityPrompt = () => {},
  searchQuery,
  setSearchQuery,
  onOpenQuickScan,
  onOpenSettings,
  onOpenWeather,
  unreadAlertsCount = 2,
  alerts = [],
  onSelectAlert = () => {},
  currentUser = null,
  onOpenAuth = () => {},
  onLogout = () => {},
  theme = 'light',
  toggleTheme = () => {},
  liveWeather = null
}) => {
  const [isAlertsOpen, setIsAlertsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const tempVal = liveWeather?.temperature !== undefined && liveWeather?.temperature !== null
    ? Math.round(Number(liveWeather.temperature))
    : 31;
  
  const weatherIcon = liveWeather?.weatherIcon || '⛅';
  const weatherCond = liveWeather?.weatherCondition || 'Optimal Weather';

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800 px-4 sm:px-6 py-3 transition-colors duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        {/* Brand / Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-2xl bg-forest-900 dark:bg-emerald-600 flex items-center justify-center text-white shadow-md shadow-forest-900/20 dark:shadow-emerald-600/20 ring-2 ring-emerald-500/20 transition-all">
            <Sprout className="w-5 h-5 text-emerald-400 dark:text-white" />
          </div>
          <div>
            <span className="font-black text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white font-sans transition-colors">
              AgroScan
            </span>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold hidden sm:block">
              Precision Crop Diagnostics & Field Sentinel
            </p>
          </div>
        </div>

        {/* Global Live Search Bar */}
        <div className="flex-1 max-w-md hidden md:block">
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search crop analysis, diseases, treatments, fertilizers..."
              className="w-full pl-9 pr-4 py-2 rounded-full text-xs bg-slate-100/90 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:bg-white dark:focus:bg-slate-800 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Right Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          {/* THEME TOGGLE BUTTON */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            title={theme === 'dark' ? 'Switch to Daylight Mode ☀️' : 'Switch to Dark Sentinel Mode 🌙'}
            className={`relative p-1.5 sm:px-3 sm:py-1.5 rounded-full border transition-all duration-300 flex items-center space-x-2 group cursor-pointer shadow-xs active:scale-90 ${
              theme === 'dark'
                ? 'bg-slate-800 border-slate-700 text-amber-300 hover:bg-slate-750 hover:border-amber-400/50 shadow-amber-500/10'
                : 'bg-slate-100 border-slate-200/90 text-slate-700 hover:bg-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-300 animate-in spin-in-180 duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 animate-in spin-in-180 duration-300" />
              )}
            </div>
            <span className="text-[11px] font-extrabold hidden sm:inline-block select-none">
              {theme === 'dark' ? 'Dark' : 'Light'}
            </span>
          </button>



          {/* UNIFIED WEATHER & CITY PILL */}
          <button
            onClick={onOpenWeather}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-forest-900 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700 text-xs font-extrabold shadow-xs transition-colors cursor-pointer"
            title={`Live Satellite Weather: ${tempVal}°C in ${currentCity} (${weatherCond}). Click for Doppler radar & forecast.`}
          >
            <span className="text-sm">{weatherIcon}</span>
            <span className="text-xs font-black text-slate-900 dark:text-white">{tempVal}°C</span>
            <span className="text-[11px] text-emerald-800 dark:text-emerald-300 font-extrabold inline-block pl-0.5">
              {currentCity}
            </span>
          </button>

          {/* Notification Bell */}
          <div className="relative">
            <button
              onClick={() => setIsAlertsOpen(!isAlertsOpen)}
              className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadAlertsCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center shadow-sm animate-pulse">
                  {unreadAlertsCount}
                </span>
              )}
            </button>

            {/* Dropdown Menu */}
            {isAlertsOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 py-3 z-50 animate-in fade-in">
                <div className="px-4 pb-2 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-extrabold text-xs text-slate-900 dark:text-white">Notifications & Outbreak Alerts</span>
                  <span className="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full font-bold text-slate-600 dark:text-slate-300">
                    {alerts.length} Total
                  </span>
                </div>

                <div className="max-h-64 overflow-y-auto divide-y divide-slate-100 dark:divide-slate-800">
                  {alerts.length === 0 ? (
                    <div className="p-6 text-center text-xs text-slate-400 dark:text-slate-500">
                      🌿 No active disease anomalies detected in your region.
                    </div>
                  ) : (
                    alerts.map((alert) => (
                      <div
                        key={alert.id}
                        onClick={() => { onSelectAlert(alert); setIsAlertsOpen(false); }}
                        className="p-3.5 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer flex items-start space-x-3"
                      >
                        <div className="w-7 h-7 rounded-lg bg-rose-100 dark:bg-rose-950/80 text-rose-600 dark:text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                          <AlertTriangle className="w-4 h-4" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="text-xs font-bold text-slate-900 dark:text-white truncate">{alert.title}</p>
                            <span className="text-[10px] text-slate-400">{alert.time}</span>
                          </div>
                          <p className="text-[11px] text-slate-600 dark:text-slate-300 line-clamp-2 mt-0.5">{alert.description}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>

          {/* HIGH-CONTRAST LOGIN BUTTON / USER BADGE */}
          {currentUser ? (
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 pl-2 pr-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-700 transition-all cursor-pointer shadow-xs"
              >
                <div className="w-7 h-7 rounded-full bg-forest-900 dark:bg-emerald-600 flex items-center justify-center text-white text-xs font-bold ring-2 ring-emerald-500 shadow-sm">
                  {currentUser.avatar || '👩‍🌾'}
                </div>
                <div className="text-left hidden sm:block">
                  <span className="text-xs font-bold text-slate-900 dark:text-white block leading-tight">
                    {currentUser.name}
                  </span>
                  <span className="text-[9px] text-emerald-800 dark:text-emerald-300 font-bold block leading-none">
                    {currentUser.loginType || 'Verified Farmer'}
                  </span>
                </div>
              </button>

              {/* User Dropdown Menu */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 py-2 z-50 animate-in fade-in">
                  <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{currentUser.name}</p>
                    <p className="text-[10px] text-slate-400 truncate">{currentUser.email}</p>
                  </div>

                  <button
                    onClick={() => { onOpenSettings(); setIsUserMenuOpen(false); }}
                    className="w-full px-4 py-2 text-left text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center space-x-2 cursor-pointer"
                  >
                    <Settings className="w-3.5 h-3.5 text-slate-400" />
                    <span>Farm Settings</span>
                  </button>

                  <button
                    onClick={() => { onLogout(); setIsUserMenuOpen(false); }}
                    className="w-full px-4 py-2 text-left text-xs font-bold text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/50 flex items-center space-x-2 border-t border-slate-100 dark:border-slate-800 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={onOpenAuth}
              className="px-4 py-2 rounded-xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 dark:hover:bg-emerald-500 active:scale-95 text-white text-xs font-extrabold shadow-md shadow-forest-900/20 dark:shadow-emerald-600/20 flex items-center space-x-2 transition-all cursor-pointer ring-2 ring-emerald-500/30"
            >
              <LogIn className="w-4 h-4 text-emerald-400 dark:text-white" />
              <span>Log In</span>
            </button>
          )}

        </div>
      </div>
    </header>
  );
};
