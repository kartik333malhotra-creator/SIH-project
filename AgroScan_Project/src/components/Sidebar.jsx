import React from 'react';
import { 
  Film,
  Trophy,
  LayoutDashboard, 
  FileText, 
  Map, 
  Sprout, 
  FlaskConical, 
  Compass, 
  Users, 
  Plus, 
  Battery, 
  Radio, 
  Settings,
  ShieldCheck,
  KeyRound,
  LogIn,
  Bug,
  Sparkles
} from 'lucide-react';

export const Sidebar = ({
  activeTab,
  setActiveTab,
  onOpenQuickScan,
  onOpenSettings,
  currentUser = null,
  onOpenAuth = () => {},
  droneStatus = { name: 'Drone Alpha-2', battery: 88, status: 'Online' }
}) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'field-map', label: 'Satellite Field Map', icon: Map },
    { id: 'pest-guide', label: 'Pests & Sticky Traps', icon: Bug },
    { id: 'crop-diseases', label: 'Crop Diseases', icon: Sprout },
    { id: 'fertilizers', label: 'Fertilizers Guide', icon: FlaskConical },
    { id: 'regional-crops', label: 'Regional Recommendations', icon: Compass },
    { id: 'community', label: 'Community Q&A', icon: Users },
  ];

  return (
    <aside className="sticky top-[61px] h-[calc(100vh-61px)] overflow-y-auto w-64 bg-white dark:bg-slate-900 border-r border-slate-200/90 dark:border-slate-800 p-4 flex flex-col justify-between shrink-0 transition-colors duration-300 shadow-xs">
      
      {/* Top Action + Navigation Links */}
      <div className="space-y-4">
        
        {/* + New Analysis CTA */}
        <button
          onClick={onOpenQuickScan}
          className="w-full py-3 px-4 rounded-2xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 dark:hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md shadow-forest-900/20 dark:shadow-emerald-600/20 flex items-center justify-center space-x-2 transition-all active:scale-98 cursor-pointer"
        >
          <Plus className="w-4 h-4 text-emerald-400 dark:text-white" />
          <span>+ New Analysis</span>
        </button>

        {/* Navigation List */}
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-left cursor-pointer ${
                  isActive
                    ? 'bg-forest-900/10 dark:bg-emerald-950/60 text-forest-950 dark:text-emerald-400 border border-forest-900/20 dark:border-emerald-800/80 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 border border-transparent'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-forest-900 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'}`} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

      </div>

      {/* Bottom Live Hardware / Autonomous Drone Card */}
      <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 space-y-3">
        
        {/* Drone Telemetry Card */}
        <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/60 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Radio className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 animate-pulse" />
              <span className="text-[11px] font-bold text-slate-900 dark:text-white">{droneStatus.name}</span>
            </div>
            <span className="px-2 py-0.5 rounded-full text-[9px] font-black bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
              {droneStatus.status}
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
              <span className="flex items-center space-x-1">
                <Battery className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                <span>Battery Level</span>
              </span>
              <span className="font-bold text-slate-700 dark:text-slate-200">{droneStatus.battery}%</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 overflow-hidden">
              <div
                className="bg-emerald-600 dark:bg-emerald-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${droneStatus.battery}%` }}
              />
            </div>
          </div>
        </div>

      </div>

    </aside>
  );
};
