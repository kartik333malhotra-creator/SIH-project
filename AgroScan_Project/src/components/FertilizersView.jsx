import { handleImageError } from '../utils/imageFallbacks';
import React, { useState, useMemo } from 'react';
import { 
  FlaskConical, 
  Droplet, 
  Layers, 
  Calculator, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Search, 
  Sprout, 
  Info, 
  ShieldCheck,
  ChevronRight,
  TrendingUp
} from 'lucide-react';
import { completeFertilizersCatalog } from '../data/fertilizerData';

export function FertilizersView() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFertilizer, setSelectedFertilizer] = useState(null);

  // Calculator State
  const [calcCrop, setCalcCrop] = useState('Wheat');
  const [fieldArea, setFieldArea] = useState(2);
  const [areaUnit, setAreaUnit] = useState('Acres');

  const cropFormulas = {
    Wheat: { urea: 65, dap: 55, mop: 25, zinc: 8, compost: 1000 },
    Paddy: { urea: 70, dap: 50, mop: 30, zinc: 10, compost: 1200 },
    Cotton: { urea: 85, dap: 60, mop: 40, zinc: 10, compost: 1500 },
    Sugarcane: { urea: 140, dap: 90, mop: 75, zinc: 15, compost: 2500 },
    Potato: { urea: 75, dap: 80, mop: 60, zinc: 8, compost: 2000 },
    Soybean: { urea: 15, dap: 60, mop: 25, zinc: 5, compost: 800 },
    Maize: { urea: 70, dap: 50, mop: 30, zinc: 10, compost: 1000 },
    Mustard: { urea: 45, dap: 40, mop: 20, zinc: 5, compost: 800 },
    Tomato: { urea: 60, dap: 70, mop: 50, zinc: 6, compost: 1500 },
  };

  const multiplier = areaUnit === 'Hectares' ? fieldArea * 2.47 : fieldArea;
  const currentReq = cropFormulas[calcCrop] || cropFormulas.Wheat;

  const categories = [
    'All',
    'Nitrogenous',
    'Phosphatic',
    'Potassic',
    'Complex NPK',
    'Organic & Bio',
    'Micronutrients'
  ];

  const filteredFertilizers = useMemo(() => {
    return completeFertilizersCatalog.filter((f) => {
      if (selectedCategory !== 'All' && f.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const mName = f.name.toLowerCase().includes(q);
        const mNpk = f.npk.toLowerCase().includes(q);
        const mCat = f.category.toLowerCase().includes(q);
        const mBest = f.bestFor.some((b) => b.toLowerCase().includes(q));
        if (!mName && !mNpk && !mCat && !mBest) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-forest-950 via-forest-900 to-emerald-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-forest-800 relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3">
            <FlaskConical className="w-3.5 h-3.5 text-emerald-400" />
            <span>Soil Nutrient Science & Fertilizer Catalogue</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Fertilizer Guide with Photographic Identification
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 mt-2 leading-relaxed">
            Explore complete technical specifications, N-P-K nutrient profiles, dosage schedules, soil compatibility, and safety precautions for chemical, organic, and micronutrient fertilizers.
          </p>
        </div>
      </div>

      {/* Interactive Acreage Dosage Calculator */}
      <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
        <div className="flex items-center space-x-3 pb-4 border-b border-slate-100">
          <div className="w-10 h-10 rounded-2xl bg-forest-900 flex items-center justify-center text-white shadow-md shadow-forest-900/20">
            <Calculator className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <h2 className="font-extrabold text-base sm:text-lg text-slate-900">
              Interactive Precision Nutrient Calculator
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              Calculate exact fertilizer bag quantities required for your farm acreage
            </p>
          </div>
        </div>

        {/* Calculator Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Select Target Crop
            </label>
            <select
              value={calcCrop}
              onChange={(e) => setCalcCrop(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-forest-800"
            >
              {Object.keys(cropFormulas).map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Farm Area Size
            </label>
            <input
              type="number"
              min="0.5"
              step="0.5"
              value={fieldArea}
              onChange={(e) => setFieldArea(Math.max(0.1, parseFloat(e.target.value) || 0))}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-forest-800"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Measurement Unit
            </label>
            <div className="flex bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setAreaUnit('Acres')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  areaUnit === 'Acres'
                    ? 'bg-white text-forest-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Acres
              </button>
              <button
                onClick={() => setAreaUnit('Hectares')}
                className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  areaUnit === 'Hectares'
                    ? 'bg-white text-forest-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                Hectares
              </button>
            </div>
          </div>
        </div>

        {/* Calculated Dosage Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6 pt-5 border-t border-slate-100">
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
              Urea (46% N)
            </span>
            <span className="text-xl font-black text-slate-900 mt-1 block">
              {Math.round(currentReq.urea * multiplier)} kg
            </span>
            <span className="text-[10px] text-emerald-700 font-medium">
              ~{Math.ceil((currentReq.urea * multiplier) / 45)} Bags (45kg)
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 block">
              DAP (18-46-0)
            </span>
            <span className="text-xl font-black text-slate-900 mt-1 block">
              {Math.round(currentReq.dap * multiplier)} kg
            </span>
            <span className="text-[10px] text-amber-800 font-medium">
              ~{Math.ceil((currentReq.dap * multiplier) / 50)} Bags (50kg)
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-rose-800 block">
              MOP (0-0-60)
            </span>
            <span className="text-xl font-black text-slate-900 mt-1 block">
              {Math.round(currentReq.mop * multiplier)} kg
            </span>
            <span className="text-[10px] text-rose-700 font-medium">
              ~{Math.ceil((currentReq.mop * multiplier) / 50)} Bags (50kg)
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-cyan-50 border border-cyan-200 text-center">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-900 block">
              Zinc Sulfate (33%)
            </span>
            <span className="text-xl font-black text-slate-900 mt-1 block">
              {Math.round(currentReq.zinc * multiplier)} kg
            </span>
            <span className="text-[10px] text-cyan-800 font-medium">
              Micro-nutrient
            </span>
          </div>

          <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-center col-span-2 sm:col-span-1">
            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-800 block">
              Vermicompost / FYM
            </span>
            <span className="text-xl font-black text-slate-900 mt-1 block">
              {Math.round((currentReq.compost * multiplier) / 1000 * 10) / 10} t
            </span>
            <span className="text-[10px] text-stone-600 font-medium">
              Organic base
            </span>
          </div>
        </div>
      </div>

      {/* Category Pills & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Filter Tabs */}
        <div className="flex items-center space-x-1.5 overflow-x-auto pb-1 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                selectedCategory === cat
                  ? 'bg-forest-900 text-white shadow-md shadow-forest-900/15'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search fertilizer, NPK, crop..."
            className="w-full pl-9 pr-4 py-2 rounded-xl text-xs bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-forest-800"
          />
        </div>
      </div>

      {/* Fertilizers Grid with High-Resolution Visual Picture Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFertilizers.map((fert) => (
          <div
            key={fert.id}
            onClick={() => setSelectedFertilizer(fert)}
            className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col cursor-pointer group"
          >
            {/* Visual Image Header with NPK Badge */}
            <div className="relative h-48 w-full overflow-hidden bg-slate-950">
              <img src={fert.image} alt={fert.name} onError={(e) => handleImageError(e, fert.name, "fertilizer")} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

              {/* NPK Formula Tag */}
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-xl text-xs font-black bg-white/95 backdrop-blur-md text-slate-900 border border-white/40 shadow-lg">
                  NPK {fert.npk}
                </span>
              </div>

              {/* Category Pill */}
              <div className="absolute top-3 right-3">
                <span className="px-2.5 py-0.5 rounded-lg text-[10px] font-bold bg-forest-900/90 backdrop-blur-md text-emerald-300 border border-emerald-500/30 shadow-md">
                  {fert.category}
                </span>
              </div>

              {/* Bottom Title on Image */}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="font-extrabold text-base tracking-tight leading-snug drop-shadow-md">
                  {fert.name}
                </h3>
                <p className="text-[11px] text-slate-200 line-clamp-1 mt-0.5">
                  {fert.form}
                </p>
              </div>
            </div>

            {/* Card Content Body */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
              
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                {fert.description}
              </p>

              {/* Quick Spec Matrix */}
              <div className="space-y-2 text-xs pt-2 border-t border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Optimal Stage:</span>
                  <span className="font-bold text-slate-800 text-right truncate ml-2">
                    {fert.optimalStage}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400 font-medium">Standard Dosage:</span>
                  <span className="font-bold text-emerald-700 text-right">
                    {fert.dosage}
                  </span>
                </div>
              </div>

              {/* Best Suitable Crops Tags */}
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                  Recommended Crops
                </span>
                <div className="flex flex-wrap gap-1">
                  {fert.bestFor.slice(0, 4).map((crop) => (
                    <span
                      key={crop}
                      className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-slate-100 text-slate-700"
                    >
                      {crop}
                    </span>
                  ))}
                  {fert.bestFor.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-500">
                      +{fert.bestFor.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-forest-800 group-hover:text-forest-900 flex items-center space-x-1">
                  <span>View Full Technical Guide</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Detailed Fertilizer Full-Screen Modal */}
      {selectedFertilizer && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
          <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Image Header */}
            <div className="relative h-56 w-full bg-slate-950">
              <img
                src={selectedFertilizer.image}
                alt={selectedFertilizer.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <button
                onClick={() => setSelectedFertilizer(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                ✕
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-emerald-500 text-slate-950">
                    NPK {selectedFertilizer.npk}
                  </span>
                  <span className="px-2 py-0.5 rounded-lg text-xs font-semibold bg-white/20 text-white backdrop-blur-md">
                    {selectedFertilizer.category}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black">{selectedFertilizer.name}</h2>
                <p className="text-xs text-slate-300">{selectedFertilizer.form}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs">
              
              <div>
                <h4 className="font-bold text-slate-900 uppercase tracking-wider text-[11px] mb-1">
                  Description & Chemical Action
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedFertilizer.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div>
                  <span className="text-slate-400 font-medium block">Optimal Application Stage:</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{selectedFertilizer.optimalStage}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Standard Dosage:</span>
                  <span className="font-bold text-emerald-700 mt-0.5 block">{selectedFertilizer.dosage}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Application Method:</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{selectedFertilizer.applicationMethod}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-medium block">Soil Suitability:</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{selectedFertilizer.soilSuitability}</span>
                </div>
              </div>

              {/* Key Agronomic Benefits */}
              <div>
                <h4 className="font-bold text-emerald-800 uppercase tracking-wider text-[11px] mb-2 flex items-center space-x-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Key Agronomic Benefits</span>
                </h4>
                <ul className="space-y-1.5">
                  {selectedFertilizer.benefits.map((b, i) => (
                    <li key={i} className="flex items-start space-x-2 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Precautions */}
              <div>
                <h4 className="font-bold text-amber-800 uppercase tracking-wider text-[11px] mb-2 flex items-center space-x-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Application Safety & Precautions</span>
                </h4>
                <ul className="space-y-1.5">
                  {selectedFertilizer.precautions.map((p, i) => (
                    <li key={i} className="flex items-start space-x-2 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 border-t border-slate-100 bg-slate-50 flex justify-end">
              <button
                onClick={() => setSelectedFertilizer(null)}
                className="px-5 py-2 rounded-xl bg-forest-900 text-white font-bold text-xs hover:bg-forest-800"
              >
                Close Guide
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
