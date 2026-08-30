import { initialReports, defaultSensors, fieldSectors, communityDiscussions } from '../data/agroscanData';

const STORAGE_KEYS = {
  REPORTS: 'agroscan_reports_v3',
  SENSORS: 'agroscan_sensors_v3',
  ALERTS: 'agroscan_alerts_v3',
  DISCUSSIONS: 'agroscan_discussions_v3',
};

export const agroscanStore = {
  // Reports
  getReports: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.REPORTS);
      return saved ? JSON.parse(saved) : initialReports;
    } catch {
      return initialReports;
    }
  },

  addReport: (newReport) => {
    const current = agroscanStore.getReports();
    const updated = [newReport, ...current];
    try {
      localStorage.setItem(STORAGE_KEYS.REPORTS, JSON.stringify(updated));
    } catch (e) {
      console.warn('Storage quota exceeded');
    }

    // Automatically trigger alert ONLY IF disease is detected
    if (newReport.confidence && (newReport.confidence >= 70 || newReport.severity === 'High' || newReport.severity === 'Warning')) {
      const diseaseAlert = {
        id: `alt-${Date.now()}`,
        type: newReport.severity === 'High' ? 'critical' : 'warning',
        title: `Disease Detected: ${newReport.diseaseName}`,
        description: `${newReport.sector || 'Field Sector'} analysis detected ${newReport.commonName || newReport.diseaseName} (${newReport.confidence}% neural confidence). Immediate treatment recommended.`,
        time: 'Just now',
        unread: true,
        reportId: newReport.id
      };
      agroscanStore.addAlert(diseaseAlert);
    }

    return updated;
  },

  // Sensors
  getSensors: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SENSORS);
      return saved ? JSON.parse(saved) : defaultSensors;
    } catch {
      return defaultSensors;
    }
  },

  saveSensors: (newSensors) => {
    try {
      localStorage.setItem(STORAGE_KEYS.SENSORS, JSON.stringify(newSensors));
    } catch (e) {
      console.warn('Storage quota exceeded');
    }
    return newSensors;
  },

  // Alerts (Default is clean empty array: alerts only on disease detection)
  getAlerts: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.ALERTS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  },

  addAlert: (alert) => {
    const current = agroscanStore.getAlerts();
    const updated = [alert, ...current];
    try {
      localStorage.setItem(STORAGE_KEYS.ALERTS, JSON.stringify(updated));
    } catch (e) {
      console.warn('Storage quota exceeded');
    }
    return updated;
  },

  markAlertRead: (alertId) => {
    const current = agroscanStore.getAlerts();
    const updated = current.map((a) => (a.id === alertId ? { ...a, unread: false } : a));
    try {
      localStorage.setItem(STORAGE_KEYS.ALERTS, JSON.stringify(updated));
    } catch (e) {
      console.warn('Storage quota exceeded');
    }
    return updated;
  },

  clearAllAlerts: () => {
    try {
      localStorage.setItem(STORAGE_KEYS.ALERTS, JSON.stringify([]));
    } catch (e) {
      console.warn('Storage quota exceeded');
    }
    return [];
  },

  // Discussions
  getDiscussions: () => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.DISCUSSIONS);
      return saved ? JSON.parse(saved) : communityDiscussions;
    } catch {
      return communityDiscussions;
    }
  },

  resetAllData: () => {
    localStorage.removeItem(STORAGE_KEYS.REPORTS);
    localStorage.removeItem(STORAGE_KEYS.SENSORS);
    localStorage.removeItem(STORAGE_KEYS.ALERTS);
    localStorage.removeItem(STORAGE_KEYS.DISCUSSIONS);
  },
};
