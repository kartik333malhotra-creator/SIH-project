import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { BottomNav } from './components/BottomNav';
import { DashboardScreen } from './components/DashboardScreen';
import { AnalysisReportScreen } from './components/AnalysisReportScreen';
import { FieldMapScreen } from './components/FieldMapScreen';
import { PestGuideView } from './components/PestGuideView';
import { SIHTechnologySlideView } from './components/SIHTechnologySlideView';
import { SIHDocumentaryView } from './components/SIHDocumentaryView';
import { CropDiseaseView } from './components/CropDiseaseView';
import { FertilizersView } from './components/FertilizersView';
import { RegionalCropsView } from './components/RegionalCropsView';
import { CommunityScreen } from './components/CommunityScreen';
import { QuickScanModal } from './components/QuickScanModal';
import { ExpertReviewModal } from './components/ExpertReviewModal';
import { SettingsModal } from './components/SettingsModal';
import { WeatherModal } from './components/WeatherModal';
import { AuthModal } from './components/AuthModal';
import { AIWorkplaceWidget } from './components/AIWorkplaceWidget';
import { initialReports, initialSensors, initialAlerts } from './data/agroscanData';
import { fetchLiveMeteorologicalWeather } from './utils/realLiveWeatherEngine';

export function App() {
  // 1. ALL REACT HOOK STATES AT THE VERY TOP
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('agroscan_theme') || 'light';
    } catch {
      return 'light';
    }
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  
  const [userCity, setUserCity] = useState(() => {
    try {
      return localStorage.getItem('agroscan_user_city') || 'Sangrur';
    } catch {
      return 'Sangrur';
    }
  });

  const [reports, setReports] = useState(() => {
    try {
      const saved = localStorage.getItem('agroscan_reports');
      return saved ? JSON.parse(saved) : initialReports;
    } catch {
      return initialReports;
    }
  });

  const [currentReport, setCurrentReport] = useState(reports[0] || initialReports[0]);
  const [sensors, setSensors] = useState(initialSensors);
  const [alerts, setAlerts] = useState(initialAlerts);
  const [unreadAlertsCount, setUnreadAlertsCount] = useState(2);
  const [searchQuery, setSearchQuery] = useState('');

  // Modals & Overlays State
  const [isQuickScanOpen, setIsQuickScanOpen] = useState(false);
  const [isExpertReviewOpen, setIsExpertReviewOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isWeatherOpen, setIsWeatherOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authNotice, setAuthNotice] = useState('');

  // Authentication State
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('agroscan_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // 2. THEME SYNC EFFECT
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem('agroscan_theme', theme);
    } catch {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // 3. LIVE WEATHER & SENSORS SYNCHRONIZATION EFFECT
  useEffect(() => {
    let isMounted = true;

    const syncWeather = async () => {
      try {
        const live = await fetchLiveMeteorologicalWeather(30.2458, 75.8421, userCity);
        if (isMounted && live && live.temperature !== undefined) {
          setSensors(prev => ({
            ...prev,
            temperature: live.temperature,
            humidity: live.humidity,
            windSpeed: live.windSpeed,
            weatherCondition: live.weatherCondition,
            weatherIcon: live.weatherIcon,
            weatherSource: live.source,
            pressure: live.pressure
          }));
        }
      } catch (err) {}
    };

    syncWeather();
    const interval = setInterval(syncWeather, 60000);
    return () => { isMounted = false; clearInterval(interval); };
  }, [userCity]);

  // 4. ACTION HANDLERS
  const handleSaveCity = async (newCity) => {
    setUserCity(newCity);
    try {
      localStorage.setItem('agroscan_user_city', newCity);
      const live = await fetchLiveMeteorologicalWeather(30.2458, 75.8421, newCity);
      if (live && live.temperature !== undefined) {
        setSensors(prev => ({
          ...prev,
          temperature: live.temperature,
          humidity: live.humidity,
          windSpeed: live.windSpeed,
          weatherCondition: live.weatherCondition,
          weatherIcon: live.weatherIcon,
          weatherSource: live.source,
          pressure: live.pressure
        }));
      }
    } catch {}
  };

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    try {
      localStorage.setItem('agroscan_user', JSON.stringify(user));
    } catch {}
    setIsAuthOpen(false);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem('agroscan_user');
    } catch {}
  };

  const handleTriggerScan = () => {
    if (!currentUser) {
      setAuthNotice('🔒 Scanner Locked: Sign in with Gmail or Mobile Number to unlock AI leaf diagnostics.');
      setIsAuthOpen(true);
      return;
    }
    setIsQuickScanOpen(true);
  };

  const handleScanComplete = (newReport) => {
    setReports(prev => [newReport, ...prev]);
    setCurrentReport(newReport);
    setActiveTab('analysis');
    setIsQuickScanOpen(false);
  };

  const handleSelectReport = (report) => {
    setCurrentReport(report);
    setActiveTab('analysis');
  };

  const handleSelectAlert = (alert) => {
    if (unreadAlertsCount > 0) setUnreadAlertsCount(prev => Math.max(0, prev - 1));
    setActiveTab('dashboard');
  };

  const handleSimulateSensorFluctuation = (newValues) => {
    setSensors(prev => ({ ...prev, ...newValues }));
  };

  const handleResetApp = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-300 selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Top Header */}
      <Header
        currentCity={userCity}
        onOpenCityPrompt={() => setIsWeatherOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        alerts={alerts}
        unreadAlertsCount={unreadAlertsCount}
        onSelectAlert={handleSelectAlert}
        onOpenQuickScan={handleTriggerScan}
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenWeather={() => setIsWeatherOpen(true)}
        sensors={sensors}
        theme={theme}
        toggleTheme={toggleTheme}
        currentUser={currentUser}
        onOpenAuth={() => { setAuthNotice(''); setIsAuthOpen(true); }}
        onLogout={handleLogout}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Responsive Grid Layout Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex px-3 sm:px-6 py-4 sm:py-6 gap-6">
        
        {/* Desktop Left Sidebar Navigation */}
        <div className="hidden md:block">
          <Sidebar
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            onOpenQuickScan={handleTriggerScan}
            onOpenSettings={() => setIsSettingsOpen(true)}
            currentUser={currentUser}
            onOpenAuth={() => { setAuthNotice(''); setIsAuthOpen(true); }}
          />
        </div>

        {/* Dynamic Main Workspace Container */}
        <main className="flex-1 min-w-0 pb-16 md:pb-6">
          
          {activeTab === 'dashboard' && (
            <DashboardScreen
              sensors={sensors}
              currentCity={userCity}
              onOpenQuickScan={handleTriggerScan}
              onSelectReport={handleSelectReport}
              onNavigateToTab={setActiveTab}
              alerts={alerts}
              onOpenWeather={() => setIsWeatherOpen(true)}
              onSimulateSensorFluctuation={() => handleSimulateSensorFluctuation({
                temperature: Math.round(28 + Math.random() * 8),
                humidity: Math.round(50 + Math.random() * 25),
                windSpeed: `${Math.round(8 + Math.random() * 12)} km/h`
              })}
              currentUser={currentUser}
              onLoginSuccess={handleLoginSuccess}
              onOpenAuth={() => setIsAuthOpen(true)}
            />
          )}



          {activeTab === 'analysis' && (
            <AnalysisReportScreen
              report={currentReport}
              allReports={reports}
              onSelectReport={handleSelectReport}
              onOpenQuickScan={handleTriggerScan}
              onOpenExpertReview={() => setIsExpertReviewOpen(true)}
            />
          )}

          {activeTab === 'map' && (
            <FieldMapScreen
              onSelectReport={handleSelectReport}
              onOpenQuickScan={handleTriggerScan}
              currentCity={userCity}
              onSaveCity={handleSaveCity}
            />
          )}

          {activeTab === 'field-map' && (
            <FieldMapScreen
              onSelectReport={handleSelectReport}
              onOpenQuickScan={handleTriggerScan}
              currentCity={userCity}
              onSaveCity={handleSaveCity}
            />
          )}

          {activeTab === 'pest-guide' && (
            <PestGuideView
              onOpenQuickScan={handleTriggerScan}
            />
          )}

          {activeTab === 'sih-tech-stack' && (
            <SIHTechnologySlideView
              onOpenQuickScan={handleTriggerScan}
            />
          )}

          {activeTab === 'sih-documentary' && (
            <SIHDocumentaryView
              onOpenQuickScan={handleTriggerScan}
            />
          )}

          {activeTab === 'crop-diseases' && (
            <CropDiseaseView
              onSelectDiseaseReport={handleSelectReport}
              onOpenQuickScan={handleTriggerScan}
            />
          )}

          {activeTab === 'fertilizers' && (
            <FertilizersView
              onOpenQuickScan={handleTriggerScan}
            />
          )}

          {activeTab === 'regional-crops' && (
            <RegionalCropsView
              onSelectCrop={(cropId) => {
                setActiveTab('crop-diseases');
              }}
              onOpenQuickScan={handleTriggerScan}
            />
          )}

          {activeTab === 'community' && (
            <CommunityScreen
              onOpenExpertReview={() => setIsExpertReviewOpen(true)}
            />
          )}

        </main>

      </div>

      {/* Mobile Sticky Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenQuickScan={handleTriggerScan}
      />

      {/* Interactive AI Workplace Assistant Floating Corner Widget */}
      <AIWorkplaceWidget
        sensors={sensors}
        currentReport={currentReport}
        onOpenQuickScan={handleTriggerScan}
        onNavigateToTab={setActiveTab}
      />

      {/* Modals & Overlays */}
      <QuickScanModal
        isOpen={isQuickScanOpen}
        onClose={() => setIsQuickScanOpen(false)}
        onScanComplete={handleScanComplete}
        currentUser={currentUser}
        onOpenAuth={() => { setAuthNotice('🔒 Scanner Locked: Sign in with Gmail or Mobile Number to unlock diagnostic leaf scanning.'); setIsAuthOpen(true); }}
      />

      <ExpertReviewModal
        isOpen={isExpertReviewOpen}
        onClose={() => setIsExpertReviewOpen(false)}
        currentReport={currentReport}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onResetData={handleResetApp}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <WeatherModal
        isOpen={isWeatherOpen}
        onClose={() => setIsWeatherOpen(false)}
        sensors={sensors}
        currentCity={userCity}
        onSaveCity={handleSaveCity}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => { setIsAuthOpen(false); setAuthNotice(''); }}
        onLoginSuccess={handleLoginSuccess}
        authNotice={authNotice}
      />

    </div>
  );
}

export default App;
