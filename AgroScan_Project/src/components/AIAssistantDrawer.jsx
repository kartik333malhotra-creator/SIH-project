import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  Send,
  Bot,
  User,
  Sparkles,
  UploadCloud,
  Image as ImageIcon,
  ScanLine,
  CheckCircle2,
  Trash2,
  Cpu,
  RefreshCw
} from 'lucide-react';
import { storage } from '../utils/localStorage';
import { cropDatabase } from '../data/cropData';

export function AIAssistantDrawer({
  isOpen,
  onClose,
  initialQuestion,
  onSelectCropById
}) {
  const [messages, setMessages] = useState(() => storage.getChatHistory());
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [scanResult, setScanResult] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (initialQuestion) {
      handleSendMessage(initialQuestion);
    }
  }, [initialQuestion]);

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputValue;
    if (!text.trim()) return;

    const userMsg = {
      id: 'msg-' + Date.now(),
      sender: 'user',
      text: text.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updated = storage.saveChatMessage(userMsg);
    setMessages(updated);
    setInputValue('');
    setIsTyping(true);

    // AI Simulation Engine with knowledge of cropDatabase
    setTimeout(() => {
      let aiResponseText = '';
      const lower = text.toLowerCase();

      if (lower.includes('rice') || lower.includes('paddy') || lower.includes('blast')) {
        aiResponseText = `🌾 **Rice Blast Diagnosis & Treatment:**\n\n- **Cause:** *Magnaporthe oryzae* fungus triggered by >90% humidity & night temp of 20-24°C.\n- **Chemical Spray:** Apply **Tricyclazole 75% WP @ 0.6g/L** immediately.\n- **Organic Control:** Foliar spray *Pseudomonas fluorescens* @ 5g/L.\n- **Fertilizer Alert:** Hold off on excess Urea (split into 3 doses).`;
      } else if (lower.includes('wheat') || lower.includes('rust')) {
        aiResponseText = `🌾 **Wheat Yellow Stripe Rust Protocol:**\n\n- **Cause:** *Puccinia striiformis* in cool foggy weather (10-15°C).\n- **Emergency Treatment:** Spray **Propiconazole 25% EC (Tilt) @ 1 mL/L**.\n- **Fertilizer:** Ensure adequate Potash (MOP) to enhance stem strength.`;
      } else if (lower.includes('cotton') || lower.includes('curl')) {
        aiResponseText = `🌿 **Cotton Leaf Curl Virus Management:**\n\n- **Vector:** Transmitted by Whiteflies (*Bemisia tabaci*).\n- **Action:** Spray **Diafenthiuron 50% WP @ 1.2g/L** or **Acetamiprid 20% SP @ 0.4g/L**.\n- **Physical:** Install 20 Yellow Sticky Traps per acre.`;
      } else if (lower.includes('fertilizer') || lower.includes('urea') || lower.includes('dap') || lower.includes('npk')) {
        aiResponseText = `🧪 **Fertilizer & NPK Advisory:**\n\n- **General Rule:** Apply Phosphorus (DAP) & Potash (MOP) as basal at sowing.\n- **Nitrogen (Urea):** Always apply in 2-3 split doses with irrigation to prevent leaching & disease vulnerability.\n- **Micronutrient:** Zinc Sulfate (25 kg/ha) boosts disease resilience.`;
      } else {
        aiResponseText = `🤖 **AgriCure ML Diagnostic Engine:**\n\nBased on your query: *"${text}"*\n\n1. **Scout your crop:** Inspect under leaves for spore pustules or water-soaked lesions.\n2. **Immediate measure:** Avoid sprinkler irrigation in the late evening.\n3. **Recommendation:** You can also drop a leaf photo into the ML Scanner above for instant computer-vision disease recognition!`;
      }

      const aiMsg = {
        id: 'msg-' + (Date.now() + 1),
        sender: 'ai',
        text: aiResponseText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      const finalHistory = storage.saveChatMessage(aiMsg);
      setMessages(finalHistory);
      setIsTyping(false);
    }, 900);
  };

  const handleClearChat = () => {
    const fresh = storage.clearChat();
    setMessages(fresh);
  };

  // ML Leaf Scanner Simulation
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
      runMLInference();
    };
    reader.readAsDataURL(file);
  };

  const runMLInference = () => {
    setIsScanning(true);
    setScanResult(null);

    setTimeout(() => {
      // Pick random crop diagnosis or matched diagnosis
      const sample = cropDatabase[Math.floor(Math.random() * cropDatabase.length)];
      setScanResult({
        cropName: sample.cropName,
        diseaseName: sample.diseaseName,
        confidence: (94 + Math.random() * 5).toFixed(1),
        pathogen: sample.pathogenName,
        chemical: sample.chemicalTreatment[0],
        cropId: sample.id
      });
      setIsScanning(false);
    }, 1500);
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        />
      )}

      {/* Right Slide-over Drawer (Matching wireframe right panel) */}
      <aside
        className={`fixed top-0 right-0 bottom-0 w-96 max-w-[90vw] bg-slate-900 border-l border-slate-800 z-50 transform transition-transform duration-300 ease-in-out flex flex-col shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <Bot className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white font-display">Agri-AI & ML Engine</h3>
              <p className="text-[10px] text-slate-400">Blueprint Inference Module (🧪 ⚡)</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={handleClearChat}
              className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded transition-colors"
              title="Clear Chat History (LocalStorage)"
            >
              <Trash2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ML Leaf Scanner Dropzone */}
        <div className="p-3 bg-slate-950/80 border-b border-slate-800">
          <div className="p-3 rounded-xl border-2 border-dashed border-emerald-500/30 bg-emerald-950/10 text-center hover:border-emerald-500/60 transition-colors">
            {!uploadedImage ? (
              <label className="cursor-pointer block">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                <ScanLine className="w-6 h-6 text-emerald-400 mx-auto mb-1 animate-pulse" />
                <span className="text-xs font-bold text-emerald-300 block">
                  ML Leaf Disease Scanner
                </span>
                <span className="text-[10px] text-slate-400">
                  Upload leaf photo to run instant diagnostic model
                </span>
              </label>
            ) : (
              <div className="space-y-2">
                <div className="relative h-24 w-full rounded-lg overflow-hidden bg-slate-900">
                  <img src={uploadedImage} alt="Uploaded leaf" className="w-full h-full object-cover" />
                  {isScanning && (
                    <div className="absolute inset-0 bg-slate-950/80 flex items-center justify-center gap-2 text-xs font-mono text-emerald-400">
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Running ML Model...</span>
                    </div>
                  )}
                </div>

                {scanResult && (
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-emerald-500/30 text-left text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-emerald-400">{scanResult.diseaseName}</span>
                      <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                        {scanResult.confidence}% Confidence
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 font-mono">Crop: {scanResult.cropName}</p>
                    <p className="text-[10px] text-slate-400">Rx: {scanResult.chemical}</p>
                    <button
                      onClick={() => onSelectCropById(scanResult.cropId)}
                      className="w-full mt-1 py-1 text-[11px] bg-emerald-500 text-slate-950 font-bold rounded hover:bg-emerald-400 transition-colors"
                    >
                      View Full Cure Blueprint
                    </button>
                  </div>
                )}

                <button
                  onClick={() => {
                    setUploadedImage(null);
                    setScanResult(null);
                  }}
                  className="text-[10px] text-slate-400 hover:text-rose-400 underline"
                >
                  Upload different photo
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Chat Messages Conversation Thread */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-wrap leading-relaxed shadow-sm ${
                  m.sender === 'user'
                    ? 'bg-rose-600 text-white rounded-br-none'
                    : 'bg-slate-800/90 text-slate-200 border border-slate-700/80 rounded-bl-none'
                }`}
              >
                {m.text}
              </div>
              <span className="text-[9px] text-slate-500 mt-1 px-1">{m.timestamp}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-slate-400 p-2 bg-slate-800/50 rounded-xl w-24">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 border-t border-slate-800 bg-slate-950 flex gap-1.5 overflow-x-auto text-[11px]">
          {['Rice Blast cure?', 'Wheat Yellow Rust', 'NPK for Cotton', 'Tomato blight spray'].map((chip) => (
            <button
              key={chip}
              onClick={() => handleSendMessage(chip)}
              className="whitespace-nowrap px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Input Bar Matching Wireframe: "Type here" + ✈️ */}
        <div className="p-3 border-t border-slate-800 bg-slate-950">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center bg-slate-900 border border-slate-700 rounded-xl px-3 py-1.5 focus-within:border-emerald-500 focus-within:ring-1 focus-within:ring-emerald-500 transition-all shadow-inner"
          >
            <input
              type="text"
              placeholder="Type here"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-transparent text-xs text-slate-100 placeholder-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-1.5 text-emerald-400 hover:text-emerald-300 disabled:text-slate-600 transition-colors"
              title="Send (Blueprint: ✈️)"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </aside>
    </>
  );
}
