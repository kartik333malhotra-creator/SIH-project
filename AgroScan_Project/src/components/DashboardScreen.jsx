import React, { useState } from 'react';
import { 
  Scan, 
  ArrowRight, 
  CloudSun, 
  Droplet, 
  FlaskConical, 
  Activity, 
  Sun, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp,
  RotateCw,
  Sparkles,
  Sprout,
  Mail,
  Smartphone,
  KeyRound,
  LogIn,
  Check,
  ChevronDown,
  Bug,
  Zap,
  Radio,
  MapPin,
  Globe,
  LocateFixed
} from 'lucide-react';
import { smartStickyTrapSensors } from '../data/cropData';

export const DashboardScreen = ({
  sensors,
  currentCity = 'Sangrur',
  onOpenQuickScan,
  onSelectReport,
  onNavigateToTab,
  alerts = [],
  onOpenWeather,
  onSimulateSensorFluctuation,
  currentUser = null,
  onLoginSuccess = () => {},
  onOpenAuth = () => {},
  onOpenLocationPicker = () => {},
  liveLocation = null
}) => {
  // In-Page Login State
  const [authTab, setAuthTab] = useState('gmail'); // 'gmail' | 'mobile'
  const [inPageGmail, setInPageGmail] = useState('');
  const [countryCode, setCountryCode] = useState('+91');
  const [inPageMobile, setInPageMobile] = useState('');
  const [inPageOtpSent, setInPageOtpSent] = useState(false);
  const [inPageOtpCode, setInPageOtpCode] = useState(['', '', '', '']);
  const [generatedOtp, setGeneratedOtp] = useState('4829');
  const [inPageLoading, setInPageLoading] = useState(false);
  const [inPageError, setInPageError] = useState('');

  const displayAreaName = liveLocation?.areaName || 'Live Farm Sector';
  const displayCityName = liveLocation?.cityName || 'Regional Hub';
  const displayFullAddress = liveLocation?.fullAddress || (liveLocation?.cityName ? `${liveLocation.cityName}, ${liveLocation.stateName || 'India'}` : 'Live Farm Coordinates');
  const displayCoords = liveLocation?.coordsFormatted || '30.7046°N, 76.7179°E';

  // 1-Click Google Sign In
  const handleDirectGoogleLogin = (customEmail) => {
    setInPageLoading(true);
    setInPageError('');
    const email = customEmail || inPageGmail || 'farmer.rivera@gmail.com';
    const name = email.split('@')[0].replace('.', ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());

    setTimeout(() => {
      setInPageLoading(false);
      onLoginSuccess({
        id: `usr-gmail-${Date.now().toString().slice(-4)}`,
        name: name || 'Alex Rivera',
        email: email,
        loginType: 'Gmail (Google Workspace)',
        role: 'Verified Farm Manager',
        avatar: '👩‍🌾',
        farmName: `${displayCityName} Agro-Hub`,
        verified: true,
        token: 'google-oauth-session-token'
      });
    }, 400);
  };

  // Send Mobile OTP
  const handleSendMobileOtp = (e) => {
    e.preventDefault();
    setInPageError('');
    const cleanNumber = inPageMobile.replace(/\D/g, '');
    if (cleanNumber.length < 8 || cleanNumber.length > 13) {
      setInPageError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setInPageLoading(true);
    const randomOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(randomOtp);

    setTimeout(() => {
      setInPageLoading(false);
      setInPageOtpSent(true);
    }, 400);
  };

  // Verify OTP
  const handleVerifyOtp = (e) => {
    e?.preventDefault();
    setInPageError('');
    const entered = inPageOtpCode.join('');
    if (entered.length < 4) {
      setInPageError('Please enter the 4-digit code sent to your phone.');
      return;
    }

    setInPageLoading(true);
    setTimeout(() => {
      setInPageLoading(false);
      const fullPhone = `${countryCode} ${inPageMobile}`;
      onLoginSuccess({
        id: `usr-mob-${Date.now().toString().slice(-4)}`,
        name: `Farmer (${inPageMobile.slice(-4)})`,
        email: fullPhone,
        mobileNumber: fullPhone,
        loginType: 'Mobile Phone OTP Verified',
        role: 'Farm Operator',
        avatar: '🌾',
        farmName: `${displayCityName} Agro-Hub`,
        verified: true,
        token: 'mobile-otp-session-token'
      });
    }, 400);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* 2. VISIBLE DIRECT LOGIN & REGISTRATION CARD */}
      {!currentUser ? (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border-2 border-emerald-500/40 dark:border-emerald-500/30 shadow-xl relative overflow-hidden transition-colors duration-300">
          
          {/* Top Header Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-900 dark:bg-emerald-600 text-emerald-400 dark:text-white flex items-center justify-center shadow-md">
                <KeyRound className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">Sign In to AgroScan Sentinel</h2>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
                    Required for AI Scanner
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  Sign in instantly with Gmail or Mobile Number to access neural diagnostics and field maps.
                </p>
              </div>
            </div>

            {/* Switch Tabs: Gmail vs Mobile */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => { setAuthTab('gmail'); setInPageError(''); setInPageOtpSent(false); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  authTab === 'gmail' ? 'bg-white dark:bg-slate-700 text-forest-900 dark:text-emerald-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Gmail</span>
              </button>
              <button
                type="button"
                onClick={() => { setAuthTab('mobile'); setInPageError(''); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  authTab === 'mobile' ? 'bg-white dark:bg-slate-700 text-forest-900 dark:text-emerald-400 shadow-sm' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>Mobile OTP</span>
              </button>
            </div>
          </div>

          {/* In-Page Error Banner */}
          {inPageError && (
            <div className="mt-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/80 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
              <span>{inPageError}</span>
            </div>
          )}

          {/* Form Content Area */}
          <div className="mt-5">
            {authTab === 'gmail' ? (
              /* --- GMAIL AUTH FORM --- */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                {/* 1-Click Google Button */}
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Fast 1-Click Access
                  </label>
                  <button
                    type="button"
                    onClick={() => handleDirectGoogleLogin()}
                    disabled={inPageLoading}
                    className="w-full py-3 px-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50/40 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-100 font-bold text-xs shadow-xs transition-all flex items-center justify-center space-x-3 cursor-pointer group"
                  >
                    <svg className="w-4 h-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                    <span>1-Click Sign In with Google (Gmail)</span>
                  </button>
                </div>

                {/* Direct Gmail Input Space */}
                <form
                  onSubmit={(e) => { e.preventDefault(); handleDirectGoogleLogin(inPageGmail); }}
                  className="space-y-1.5"
                >
                  <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                    Or Enter Your Gmail Address:
                  </label>
                  <div className="flex space-x-2">
                    <div className="relative flex-1">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        value={inPageGmail}
                        onChange={(e) => setInPageGmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={inPageLoading}
                      className="px-5 py-2.5 rounded-xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 dark:hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-forest-900/20 shrink-0 transition-all flex items-center space-x-1.5 cursor-pointer"
                    >
                      <span>Sign In</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400 dark:text-white" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* --- MOBILE OTP AUTH FORM --- */
              <div>
                {!inPageOtpSent ? (
                  <form onSubmit={handleSendMobileOtp} className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                        Enter Mobile Phone Number
                      </label>
                      <div className="flex space-x-2">
                        {/* Country Code */}
                        <div className="relative w-28 shrink-0">
                          <select
                            value={countryCode}
                            onChange={(e) => setCountryCode(e.target.value)}
                            className="w-full pl-2.5 pr-6 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500 appearance-none text-xs"
                          >
                            <option value="+91">🇮🇳 +91 (IN)</option>
                            <option value="+1">🇺🇸 +1 (US)</option>
                            <option value="+44">🇬🇧 +44 (UK)</option>
                            <option value="+61">🇦🇺 +61 (AU)</option>
                            <option value="+49">🇩🇪 +49 (DE)</option>
                            <option value="+971">🇦🇪 +971 (UAE)</option>
                          </select>
                          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>

                        {/* Phone Input */}
                        <div className="relative flex-1">
                          <Smartphone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="tel"
                            value={inPageMobile}
                            onChange={(e) => setInPageMobile(e.target.value)}
                            placeholder="98765 43210"
                            className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium tracking-wider"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-end">
                      <button
                        type="submit"
                        disabled={inPageLoading}
                        className="w-full py-3 px-4 rounded-xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 dark:hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-forest-900/20 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <span>Send 4-Digit SMS Code</span>
                        <ArrowRight className="w-4 h-4 text-emerald-400 dark:text-white" />
                      </button>
                    </div>
                  </form>
                ) : (
                  /* OTP Verification Step */
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
                    <div className="text-xs">
                      <span className="font-bold text-emerald-950 dark:text-emerald-300 block">
                        SMS code sent to: {countryCode} {inPageMobile}
                      </span>
                      <span className="text-[11px] text-emerald-700 dark:text-emerald-400 font-mono mt-0.5 block">
                        Test Code: <strong>{generatedOtp}</strong>
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-2">
                        {inPageOtpCode.map((digit, idx) => (
                          <input
                            key={idx}
                            id={`inpage-otp-${idx}`}
                            type="text"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => {
                              const val = e.target.value.slice(-1);
                              const copy = [...inPageOtpCode];
                              copy[idx] = val;
                              setInPageOtpCode(copy);
                              if (val && idx < 3) {
                                document.getElementById(`inpage-otp-${idx + 1}`)?.focus();
                              }
                            }}
                            className="w-10 h-10 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 text-center text-base font-black text-slate-900 dark:text-white focus:border-emerald-500 focus:outline-none"
                            autoFocus={idx === 0}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={handleVerifyOtp}
                        className="px-4 py-2.5 rounded-xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 dark:hover:bg-emerald-500 text-white font-bold text-xs shadow-md shadow-forest-900/20 shrink-0 cursor-pointer"
                      >
                        Verify & Login
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setInPageOtpCode(generatedOtp.split(''));
                          setTimeout(() => {
                            const fullPhone = `${countryCode} ${inPageMobile || '9876543210'}`;
                            onLoginSuccess({
                              id: `usr-mob-${Date.now().toString().slice(-4)}`,
                              name: `Farmer (${(inPageMobile || '9876543210').slice(-4)})`,
                              email: fullPhone,
                              mobileNumber: fullPhone,
                              loginType: 'Mobile Phone OTP Verified',
                              role: 'Farm Operator',
                              avatar: '🌾',
                              farmName: `${displayCityName} Agro-Hub`,
                              verified: true,
                              token: 'mobile-otp-session-token'
                            });
                          }, 200);
                        }}
                        className="px-3 py-2 rounded-lg bg-emerald-100 dark:bg-emerald-900 hover:bg-emerald-200 dark:hover:bg-emerald-800 text-emerald-900 dark:text-emerald-200 font-bold text-[11px] shrink-0 cursor-pointer"
                      >
                        ⚡ 1-Click ({generatedOtp})
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>
      ) : (
        /* Authenticated Active User Banner */
        <div className="bg-gradient-to-r from-forest-950 to-forest-900 dark:from-slate-900 dark:to-slate-850 text-white rounded-3xl p-5 sm:p-6 shadow-xl border border-forest-800 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-300">
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-2xl flex items-center justify-center shadow-inner">
              {currentUser.avatar || '👩‍🌾'}
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-base sm:text-lg text-white">{currentUser.name}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-400/20 text-emerald-300 border border-emerald-400/30">
                  {currentUser.loginType || 'Verified Active'}
                </span>
              </div>
              <p className="text-xs text-emerald-200/80 dark:text-slate-300 font-medium">
                {currentUser.email} • 📍 {displayAreaName}, {displayCityName}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onOpenQuickScan}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-black text-xs shadow-lg shadow-emerald-500/20 flex items-center space-x-2 transition-all cursor-pointer active:scale-95"
            >
              <Scan className="w-4 h-4" />
              <span>Launch Dual AI Scanner</span>
            </button>
          </div>
        </div>
      )}

      
      {/* DUAL AI SCANNER HERO ACTION CARD */}
      <div className="rounded-3xl bg-gradient-to-r from-forest-950 via-forest-900 to-forest-950 dark:from-slate-900 dark:via-slate-850 dark:to-slate-900 p-6 sm:p-7 border border-forest-800 dark:border-slate-800 shadow-xl text-white space-y-4 relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Dual Neural AI Vision Scanner</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Scan Leaves for Crop Diseases & Pest Infestations
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/75 max-w-2xl font-medium">
              4K multispectral leaf diagnosis covering 45,000+ fungal/bacterial diseases and entomological insect damage (Whiteflies, Aphids, Armyworms, Spider Mites).
            </p>
          </div>

          <button
            onClick={onOpenQuickScan}
            className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-forest-950 font-black text-xs shadow-lg shadow-emerald-500/20 flex items-center justify-center space-x-2.5 transition-all cursor-pointer active:scale-95 shrink-0"
          >
            <Scan className="w-4 h-4" />
            <span>Launch Scanner</span>
          </button>
        </div>

        {/* 2 Fast Sub-Scan Action Triggers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-forest-800/80 dark:border-slate-800">
          <button
            onClick={onOpenQuickScan}
            className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between transition-all text-left cursor-pointer group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <Sprout className="w-4 h-4" />
              </div>
              <div>
                <span className="font-extrabold text-xs text-white block group-hover:text-emerald-300">
                  🔬 Scan for Foliar Diseases
                </span>
                <span className="text-[10px] text-emerald-200/70">
                  Late Blights, Rusts, Mildews & Spot Necrosis
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenQuickScan}
            className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-between transition-all text-left cursor-pointer group"
          >
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center">
                <Bug className="w-4 h-4" />
              </div>
              <div>
                <span className="font-extrabold text-xs text-white block group-hover:text-rose-300">
                  🐛 Scan for Pest & Insect Damage
                </span>
                <span className="text-[10px] text-emerald-200/70">
                  Whitefly clusters, Chewed holes, Frass & Mite webbing
                </span>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Overview Cards: Field Health Index & Weather Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Field Health Progress Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm relative overflow-hidden flex flex-col justify-between transition-colors duration-300">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>FIELD HEALTH INDEX</span>
              </span>
              <button
                onClick={onSimulateSensorFluctuation}
                title="Simulate live sensor telemetry update"
                className="text-slate-400 hover:text-slate-700 dark:hover:text-white p-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <RotateCw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="mt-3 flex items-baseline space-x-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {sensors.fieldHealth || 92}
              </span>
              <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                /{sensors.fieldHealthMax || 100}
              </span>
            </div>

            <div className="w-full bg-slate-100 dark:bg-slate-800 h-2.5 rounded-full mt-4 overflow-hidden">
              <div
                className="bg-forest-900 dark:bg-emerald-500 h-full rounded-full transition-all duration-700"
                style={{ width: `${(sensors.fieldHealth / (sensors.fieldHealthMax || 100)) * 100}%` }}
              />
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
            <span className="flex items-center space-x-1 text-emerald-700 dark:text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Optimal Growth Conditions</span>
            </span>
            <span className="text-[11px] font-medium text-slate-400 dark:text-slate-500">
              Updated Live
            </span>
          </div>
        </div>

        {/* Live Microclimate Weather Card */}
        <div
          onClick={onOpenWeather}
          className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/90 dark:border-slate-800 shadow-sm cursor-pointer hover:border-emerald-300 dark:hover:border-emerald-600 transition-all flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5">
                <CloudSun className="w-3.5 h-3.5 text-amber-500" />
                <span>MICROCLIMATE TELEMETRY</span>
              </span>
              <span className="text-[11px] font-bold text-forest-800 dark:text-emerald-400 group-hover:underline flex items-center space-x-1">
                <span>View Forecast</span>
                <ArrowRight className="w-3 h-3" />
              </span>
            </div>

            <div className="mt-3 flex items-baseline space-x-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {sensors.temperature || 24}°C
              </span>
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                Partly Sunny
              </span>
            </div>

            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Humidity: {sensors.humidity || 65}% • Wind: {sensors.windSpeed || '11 km/h'} • Barometric: 1013 hPa
            </p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 dark:border-slate-800 text-center">
            <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-[10px] text-slate-400 font-bold block uppercase">Soil Moist</span>
              <span className="text-xs font-extrabold text-slate-800 dark:text-white">{sensors.soilMoisture || 42}%</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-[10px] text-slate-400 font-bold block uppercase">Nitrogen</span>
              <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400">{sensors.nitrogen || 28} mg</span>
            </div>
            <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800">
              <span className="text-[10px] text-slate-400 font-bold block uppercase">pH Level</span>
              <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-400">{sensors.phLevel || 6.5}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Dynamic Alerts List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
            Sector Outbreak Surveillance
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {alerts.length === 0 ? 'All Systems Normal' : `${alerts.length} Active Notice`}
          </span>
        </div>

        {alerts.length === 0 ? (
          <div className="p-5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between text-emerald-950 dark:text-emerald-200">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-300 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-emerald-900 dark:text-emerald-300">🌿 All Sectors Normal • No Disease or Pest Anomalies Detected</p>
                <p className="text-[11px] text-emerald-700 dark:text-emerald-400 font-medium">Autonomous Sentinel monitoring active across 12 sectors.</p>
              </div>
            </div>
            <button
              onClick={onOpenLocationPicker}
              className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center space-x-1.5 transition-all cursor-pointer shadow-sm shrink-0"
              title="Change / Calibrate GPS Location"
            >
              <LocateFixed className="w-3.5 h-3.5" />
              <span>Calibrate GPS</span>
            </button>

            <button
              onClick={() => onNavigateToTab('field-map')}
              className="text-xs font-bold text-emerald-900 dark:text-emerald-300 hover:underline flex items-center space-x-1"
            >
              <span>View Field Map</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                onClick={() => onSelectReport(alert.reportId)}
                className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 flex items-center justify-between cursor-pointer hover:bg-rose-100/70 dark:hover:bg-rose-900/40 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-300 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-xs text-slate-900 dark:text-white block">{alert.title}</span>
                    <span className="text-[11px] text-slate-600 dark:text-slate-300">{alert.description}</span>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
