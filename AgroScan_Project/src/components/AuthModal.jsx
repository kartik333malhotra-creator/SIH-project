import React, { useState, useEffect } from 'react';
import { 
  X, 
  Mail, 
  Phone, 
  Sprout, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  KeyRound, 
  Smartphone, 
  Sparkles, 
  RotateCw,
  Lock,
  User,
  Building,
  LogIn,
  UserPlus,
  Send,
  Radio,
  ExternalLink,
  Zap,
  Check
} from 'lucide-react';

export const AuthModal = ({ isOpen, onClose, onLoginSuccess, authNotice = '' }) => {
  const [activeTab, setActiveTab] = useState('mobile-sms'); // 'mobile-sms' | 'email-otp' | 'password'
  const [passwordMode, setPasswordMode] = useState('signin');

  // Form Fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [farmName, setFarmName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // OTP Verification States
  const [otpStep, setOtpStep] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [devOtpHint, setDevOtpHint] = useState('');
  const [emailPreviewUrl, setEmailPreviewUrl] = useState(null);
  const [resendTimer, setResendTimer] = useState(30);

  // Status
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval = null;
    if (otpStep && resendTimer > 0) {
      interval = setInterval(() => setResendTimer((prev) => prev - 1), 1000);
    }
    return () => clearInterval(interval);
  }, [otpStep, resendTimer]);

  if (!isOpen) return null;

  const resetOtpFlow = () => {
    setOtpStep(false);
    setOtpCode('');
    setDevOtpHint('');
    setEmailPreviewUrl(null);
    setError('');
    setSuccessMsg('');
  };

  // 1. SEND MOBILE SMS OTP
  const handleSendMobileOtp = async (e) => {
    if (e) e.preventDefault();
    const clean = mobileNumber.replace(/[^0-9+]/g, '') || '+919876543210';
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/send-phone-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: clean })
      });
      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) throw new Error(data.error || 'Failed to dispatch SMS.');

      setOtpStep(true);
      setDevOtpHint(data.devOtp || '4829');
      setOtpCode(data.devOtp || '4829'); // Auto-populate for 1-click convenience
      setSuccessMsg(`Verification code generated for ${clean}`);
      setResendTimer(30);

    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  // 2. VERIFY MOBILE SMS OTP
  const handleVerifyMobileOtp = async (e) => {
    if (e) e.preventDefault();
    const code = otpCode || devOtpHint;
    if (!code) {
      setError('Please enter verification code.');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/verify-phone-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: mobileNumber || '+919876543210', otp: code, name: name || 'Farmer' })
      });
      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) throw new Error(data.error || 'Invalid OTP code.');

      if (data.token) localStorage.setItem('agroscan_auth_token', data.token);

      setSuccessMsg('Phone verified successfully! Logging you in...');
      setTimeout(() => {
        onLoginSuccess(data.user);
        onClose();
      }, 300);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  // 3. SEND EMAIL OTP
  const handleSendEmailOtp = async (e) => {
    if (e) e.preventDefault();
    const targetEmail = email || 'farmer@agroscan.io';
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/send-email-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: targetEmail, name: name || 'Farmer' })
      });
      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) throw new Error(data.error || 'Failed to send email verification code.');

      setOtpStep(true);
      setDevOtpHint(data.devOtp || '4829');
      setOtpCode(data.devOtp || '4829');
      setEmailPreviewUrl(data.previewUrl || null);
      setSuccessMsg(`Verification code sent to ${targetEmail}`);
      setResendTimer(30);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  // 4. VERIFY EMAIL OTP
  const handleVerifyEmailOtp = async (e) => {
    if (e) e.preventDefault();
    const code = otpCode || devOtpHint;
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/verify-email-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email || 'farmer@agroscan.io', otp: code, name })
      });
      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) throw new Error(data.error || 'Invalid verification code.');

      if (data.token) localStorage.setItem('agroscan_auth_token', data.token);

      setSuccessMsg('Email verified successfully! Logging you in...');
      setTimeout(() => {
        onLoginSuccess(data.user);
        onClose();
      }, 300);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  // 5. EMAIL + PASSWORD (SIGN IN / REGISTER)
  const handlePasswordAuth = async (e) => {
    if (e) e.preventDefault();
    setIsLoading(true);
    setError('');
    const endpoint = passwordMode === 'signup' 
      ? 'http://localhost:5000/api/auth/register' 
      : 'http://localhost:5000/api/auth/login';

    const payload = passwordMode === 'signup' 
      ? { name, email, password, farmName } 
      : { email, password };

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) throw new Error(data.error || 'Authentication failed');

      if (data.token) localStorage.setItem('agroscan_auth_token', data.token);

      onLoginSuccess(data.user);
      onClose();
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  // 6. GOOGLE SIGN IN
  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError('');
    try {
      const res = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email || 'alex.rivera@agroscan.io',
          name: name || 'Alex Rivera',
          avatar: '👩‍🌾'
        })
      });
      const data = await res.json();
      setIsLoading(false);

      if (!res.ok) throw new Error(data.error || 'Google Sign-In failed');

      if (data.token) localStorage.setItem('agroscan_auth_token', data.token);

      onLoginSuccess(data.user);
      onClose();
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };

  // 7. INSTANT 1-CLICK VERIFIED ACCESS
  const handleInstantDemoLogin = () => {
    const defaultUser = {
      id: 'usr-farmer-demo',
      name: 'Ramesh Singh',
      role: 'Farm Manager',
      avatar: '👨‍🌾',
      farmName: 'Green Valley Eco-Farms',
      email: 'ramesh.singh@agroscan.io',
      phone: '+91 9876543210',
      loginType: 'Verified Farm Manager',
      verified: true
    };
    localStorage.setItem('agroscan_auth_token', 'agroscan-verified-session-token');
    onLoginSuccess(defaultUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-850">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-forest-900 dark:bg-emerald-600 text-emerald-400 dark:text-white flex items-center justify-center shadow-md shadow-forest-900/20">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                Sign In to AgroScan
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Instant Verification & Secure Login
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notice Banner */}
        {authNotice && (
          <div className="px-6 py-2.5 bg-amber-50 dark:bg-amber-950/50 border-b border-amber-200 dark:border-amber-800/60 flex items-center space-x-2 text-xs text-amber-900 dark:text-amber-300 font-semibold">
            <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{authNotice}</span>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          
          {/* Method Selection Tabs */}
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl text-xs font-bold">
            <button
              onClick={() => { setActiveTab('mobile-sms'); resetOtpFlow(); }}
              className={`py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                activeTab === 'mobile-sms'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Phone SMS</span>
            </button>
            <button
              onClick={() => { setActiveTab('email-otp'); resetOtpFlow(); }}
              className={`py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                activeTab === 'email-otp'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Code</span>
            </button>
            <button
              onClick={() => { setActiveTab('password'); resetOtpFlow(); }}
              className={`py-2 rounded-xl transition-all cursor-pointer flex items-center justify-center space-x-1 ${
                activeTab === 'password'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Lock className="w-3.5 h-3.5" />
              <span>Password</span>
            </button>
          </div>

          {/* Feedback Messages */}
          {error && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/50 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold flex items-center space-x-2 animate-in fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-500" />
              <span>{error}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold flex items-center space-x-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* TAB 1: PHONE SMS */}
          {activeTab === 'mobile-sms' && (
            <div className="space-y-3">
              {!otpStep ? (
                <form onSubmit={handleSendMobileOtp} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Enter Mobile Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        required
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-2xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 dark:hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md flex items-center justify-center space-x-2 cursor-pointer transition-all active:scale-95"
                  >
                    {isLoading ? <RotateCw className="w-4 h-4 animate-spin" /> : <span>Send OTP Code</span>}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyMobileOtp} className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                        Verification Code (Auto-Detected)
                      </label>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.5 rounded font-bold">
                        Code: {devOtpHint}
                      </span>
                    </div>
                    <input
                      type="text"
                      maxLength={4}
                      required
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="e.g. 4829"
                      className="w-full px-4 py-2.5 text-center tracking-[0.5em] text-lg font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                      autoFocus
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-forest-900 to-emerald-600 hover:from-forest-800 hover:to-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-900/20 flex items-center justify-center space-x-2 cursor-pointer transition-all active:scale-95"
                  >
                    {isLoading ? <RotateCw className="w-4 h-4 animate-spin" /> : (
                      <>
                        <Zap className="w-4 h-4 text-amber-300" />
                        <span>1-Click Verify & Enter Platform</span>
                      </>
                    )}
                  </button>

                  <div className="text-center pt-1">
                    <button
                      type="button"
                      onClick={() => setOtpStep(false)}
                      className="text-xs text-slate-500 hover:text-emerald-600 font-bold cursor-pointer"
                    >
                      ← Change Mobile Number
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* TAB 2: EMAIL OTP */}
          {activeTab === 'email-otp' && (
            <div className="space-y-3">
              {!otpStep ? (
                <form onSubmit={handleSendEmailOtp} className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Enter Your Email Address
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@gmail.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 font-medium"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-2xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 dark:hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md flex items-center justify-center space-x-2 cursor-pointer transition-all active:scale-95"
                  >
                    {isLoading ? <RotateCw className="w-4 h-4 animate-spin" /> : <span>Send Code to Email</span>}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyEmailOtp} className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase">
                        Verification Code (Auto-Detected)
                      </label>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950 px-1.5 py-0.5 rounded font-bold">
                        Code: {devOtpHint}
                      </span>
                    </div>
                    <input
                      type="text"
                      maxLength={4}
                      required
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="e.g. 4829"
                      className="w-full px-4 py-2.5 text-center tracking-[0.5em] text-lg font-mono rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-emerald-500 font-bold"
                      autoFocus
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 rounded-2xl bg-gradient-to-r from-forest-900 to-emerald-600 hover:from-forest-800 hover:to-emerald-500 text-white font-extrabold text-xs shadow-lg shadow-emerald-900/20 flex items-center justify-center space-x-2 cursor-pointer transition-all active:scale-95"
                  >
                    {isLoading ? <RotateCw className="w-4 h-4 animate-spin" /> : (
                      <>
                        <Zap className="w-4 h-4 text-amber-300" />
                        <span>1-Click Verify & Enter Platform</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: PASSWORD LOGIN & REGISTER */}
          {activeTab === 'password' && (
            <form onSubmit={handlePasswordAuth} className="space-y-3">
              {passwordMode === 'signup' && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ramesh Singh"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                      Farm Name
                    </label>
                    <input
                      type="text"
                      value={farmName}
                      onChange={(e) => setFarmName(e.target.value)}
                      placeholder="Green Valley Farms"
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ramesh.singh@agroscan.io"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 dark:text-slate-300 uppercase mb-1">
                  Password
                </label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-2xl bg-forest-900 dark:bg-emerald-600 hover:bg-forest-800 dark:hover:bg-emerald-500 text-white font-extrabold text-xs shadow-md flex items-center justify-center space-x-2 cursor-pointer transition-all"
              >
                {isLoading ? <RotateCw className="w-4 h-4 animate-spin" /> : <span>{passwordMode === 'signup' ? 'Create Account' : 'Sign In'}</span>}
              </button>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => setPasswordMode(passwordMode === 'signin' ? 'signup' : 'signin')}
                  className="text-xs text-emerald-600 font-bold cursor-pointer"
                >
                  {passwordMode === 'signin' ? "Don't have an account? Register Free ➔" : "Already have an account? Sign In ➔"}
                </button>
              </div>
            </form>
          )}

          {/* 1-CLICK INSTANT VERIFIED FARMER ACCESS BUTTON */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={handleInstantDemoLogin}
              className="w-full py-2.5 px-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 border border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 font-extrabold text-xs flex items-center justify-between transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <div className="flex items-center space-x-2">
                <span className="text-base">👨‍🌾</span>
                <span>1-Click Instant Verified Access</span>
              </div>
              <span className="text-[10px] bg-emerald-600 text-white font-bold px-2 py-0.5 rounded-full">Instant</span>
            </button>
          </div>

          {/* GOOGLE SIGN IN BUTTON */}
          <div>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full py-2.5 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center justify-center space-x-2 transition-colors cursor-pointer shadow-xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Continue with Google</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
