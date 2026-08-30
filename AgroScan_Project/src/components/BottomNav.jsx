import React from 'react';
import { LayoutDashboard, Microscope, Map as MapIcon, Users, Bug, FlaskConical, Globe2 } from 'lucide-react';

export const BottomNav = ({ activeTab, setActiveTab }) => {
  const items = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'analysis', label: 'Analysis', icon: Microscope },
    { id: 'field-map', label: 'Map', icon: MapIcon },
    { id: 'crop-diseases', label: 'Diseases', icon: Bug },
    { id: 'fertilizers', label: 'Fertilizers', icon: FlaskConical },
    { id: 'regional-crops', label: 'Regions', icon: Globe2 },
    { id: 'community', label: 'Community', icon: Users },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 py-1.5 px-2 shadow-lg lg:hidden overflow-x-auto">
      <div className="flex items-center justify-around min-w-[360px] max-w-lg mx-auto">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center py-1 px-2 rounded-xl transition-all ${
                isActive
                  ? 'bg-forest-900 text-white font-bold shadow-sm'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span className="text-[9px] mt-0.5 whitespace-nowrap">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
