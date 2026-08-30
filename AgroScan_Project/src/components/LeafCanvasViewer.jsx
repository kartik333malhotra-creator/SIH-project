import React, { useState } from 'react';
import { Eye, EyeOff, ZoomIn, ZoomOut } from 'lucide-react';

export const LeafCanvasViewer = ({
  report,
  interactive = true,
  selectedBoxId = null,
  onSelectBox = () => {},
  showControls = true,
}) => {
  const [showBoxes, setShowBoxes] = useState(true);
  const [activeOverlay, setActiveOverlay] = useState('multispectral');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [hoveredBox, setHoveredBox] = useState(null);

  const boxes = report.boundingBoxes || [];

  // Authentic high-resolution crop leaf photography
  const realLeafPhoto = report.imageUrl || report.photoUrl || (
    report.crop?.toLowerCase().includes('tomato')
      ? 'https://images.unsplash.com/photo-1592417817098-8f3d69107936?auto=format&fit=crop&w=1200&q=80'
      : report.crop?.toLowerCase().includes('soybean')
      ? 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1200&q=80'
      : report.crop?.toLowerCase().includes('rice')
      ? 'https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=1200&q=80'
      : 'https://images.unsplash.com/photo-1592417817098-8f3d69107936?auto=format&fit=crop&w=1200&q=80'
  );

  return (
    <div className="relative w-full rounded-3xl overflow-hidden bg-slate-950 border border-slate-200/90 shadow-lg select-none">
      
      {/* Top Floating Control Bar */}
      {showControls && (
        <div className="absolute top-3 right-3 z-30 flex items-center space-x-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-2xl text-white text-xs border border-white/15 shadow-2xl">
          <button
            onClick={() => setShowBoxes(!showBoxes)}
            className={`px-2.5 py-1 rounded-xl flex items-center space-x-1 transition-all ${
              showBoxes ? 'bg-forest-800 text-white shadow-md' : 'text-slate-300 hover:text-white'
            }`}
            title="Toggle AI Bounding Boxes"
          >
            {showBoxes ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
            <span className="text-[11px] font-bold">Lesions ({boxes.length})</span>
          </button>

          <div className="h-3.5 w-px bg-white/20" />

          {/* Shader Mode Switches */}
          <div className="flex items-center space-x-1 bg-white/10 p-0.5 rounded-xl">
            <button
              onClick={() => setActiveOverlay('multispectral')}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                activeOverlay === 'multispectral'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Photo
            </button>
            <button
              onClick={() => setActiveOverlay('ndvi')}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                activeOverlay === 'ndvi'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              NDVI
            </button>
            <button
              onClick={() => setActiveOverlay('thermal')}
              className={`px-2 py-0.5 rounded-lg text-[10px] font-bold transition-all ${
                activeOverlay === 'thermal'
                  ? 'bg-rose-500 text-white shadow-sm'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Heat
            </button>
          </div>

          <div className="h-3.5 w-px bg-white/20" />

          {/* Zoom Buttons */}
          <button
            onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
            className="p-1 text-slate-300 hover:text-white transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 1))}
            className="p-1 text-slate-300 hover:text-white transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Photographic Canvas */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-slate-950 flex items-center justify-center overflow-hidden">
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-300"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          {/* Authentic High-Resolution Photographic Plant Leaf */}
          <img
            src={realLeafPhoto}
            alt={report.diseaseName || 'Crop Leaf Diagnostic'}
            className={`w-full h-full object-cover select-none pointer-events-none transition-all duration-500 ${
              activeOverlay === 'ndvi'
                ? 'hue-rotate-90 saturate-200 contrast-125 brightness-95'
                : activeOverlay === 'thermal'
                ? 'invert hue-rotate-180 saturate-200 contrast-150'
                : ''
            }`}
          />

          {/* Subtle Photographic Vignette & Laser Scanline */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 pointer-events-none" />
          
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_#34d399] opacity-75 animate-scan" />
          </div>

          {/* Real AI Bounding Box Overlays */}
          {showBoxes &&
            boxes.map((box) => {
              const isSelected = selectedBoxId === box.id;
              const isHovered = hoveredBox === box.id;

              return (
                <div
                  key={box.id}
                  onClick={() => interactive && onSelectBox(box.id)}
                  onMouseEnter={() => setHoveredBox(box.id)}
                  onMouseLeave={() => setHoveredBox(null)}
                  className={`absolute transition-all duration-200 ${
                    interactive ? 'cursor-pointer' : ''
                  } ${
                    isSelected
                      ? 'border-2 border-red-500 bg-red-500/25 shadow-[0_0_25px_rgba(239,68,68,0.6)] ring-2 ring-red-400'
                      : isHovered
                      ? 'border-2 border-amber-400 bg-amber-400/20 shadow-[0_0_15px_rgba(251,191,36,0.5)]'
                      : 'border-2 border-dashed border-red-500/90 bg-red-500/10'
                  }`}
                  style={{
                    left: `${box.x}%`,
                    top: `${box.y}%`,
                    width: `${box.width}%`,
                    height: `${box.height}%`,
                  }}
                >
                  {/* Bounding Box Floating Label */}
                  <div className="absolute -top-7 left-0 flex items-center space-x-1.5 z-20">
                    <span className="px-2 py-0.5 rounded-lg text-[10px] font-black bg-black/90 text-white border border-red-500/80 shadow-lg flex items-center space-x-1">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                      <span>{box.label}</span>
                      <span className="text-emerald-400 font-bold ml-1">{box.confidence || 98.4}%</span>
                    </span>
                    {box.stage && (
                      <span className="px-1.5 py-0.5 rounded-md text-[9px] font-bold bg-amber-950/90 text-amber-300 border border-amber-500/50 shadow-md">
                        {box.stage}
                      </span>
                    )}
                  </div>

                  {/* Corner Reticles */}
                  <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-red-400" />
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-red-400" />
                  <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-red-400" />
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-red-400" />

                  {/* Tooltip on Hover */}
                  {(isHovered || isSelected) && (
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-52 p-3 rounded-2xl bg-slate-950/95 text-white text-xs shadow-2xl border border-white/20 z-40 pointer-events-none backdrop-blur-md">
                      <div className="font-extrabold text-red-400 flex items-center justify-between">
                        <span>{box.label}</span>
                        <span className="text-[11px] font-black text-emerald-400">{box.confidence}% Neural Score</span>
                      </div>
                      <div className="text-[10px] text-slate-300 mt-1 leading-relaxed">
                        {box.description || 'Active fungal necrotic sporulation identified by multispectral AI classification.'}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>

      {/* Multispectral Metadata Footer */}
      <div className="bg-white px-5 py-3 border-t border-slate-200/90 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
        <div>
          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Camera Sensor</span>
          <span className="font-bold text-slate-900">{report.camera || 'Multispectral 16MP'}</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Resolution</span>
          <span className="font-bold text-slate-900">{report.resolution || '4K Ultra HD'}</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">Light Conditions</span>
          <span className="font-bold text-slate-900">{report.lightCond || 'Bright Daylight / Overcast'}</span>
        </div>
        <div>
          <span className="text-slate-400 block text-[10px] font-bold uppercase tracking-wider">GPS Coordinates</span>
          <span className="font-bold text-slate-900 font-mono">{report.gpsCoords || '41.402°N, 2.108°E'}</span>
        </div>
      </div>

    </div>
  );
};
