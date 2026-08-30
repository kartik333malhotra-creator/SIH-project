const BOOKMARKS_KEY = 'agricure_saved_bookmarks';
const CHAT_KEY = 'agricure_chat_history';
const NOTES_KEY = 'agricure_crop_notes';
const STATS_KEY = 'agricure_usage_stats';

export const storage = {
  // Bookmarks
  getBookmarks: () => {
    try {
      const data = localStorage.getItem(BOOKMARKS_KEY);
      return data ? JSON.parse(data) : ['crop-rice-blast', 'crop-wheat-rust'];
    } catch {
      return ['crop-rice-blast', 'crop-wheat-rust'];
    }
  },
  toggleBookmark: (cropId) => {
    try {
      const existing = storage.getBookmarks();
      const next = existing.includes(cropId)
        ? existing.filter(id => id !== cropId)
        : [...existing, cropId];
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next));
      return next;
    } catch {
      return [];
    }
  },

  // Chat History
  getChatHistory: () => {
    try {
      const data = localStorage.getItem(CHAT_KEY);
      if (data) return JSON.parse(data);
      return [
        {
          id: 'welcome-1',
          sender: 'ai',
          text: '🌱 **Welcome to AgriCure AI Diagnostic Engine!**\n\nI am your smart agricultural advisor powered by ML. You can ask me about crop diseases, dosage calculations for Urea/DAP, or upload leaf symptoms for diagnosis.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ];
    } catch {
      return [];
    }
  },
  saveChatMessage: (msg) => {
    try {
      const history = storage.getChatHistory();
      const updated = [...history, msg];
      localStorage.setItem(CHAT_KEY, JSON.stringify(updated));
      return updated;
    } catch {
      return [];
    }
  },
  clearChat: () => {
    try {
      localStorage.removeItem(CHAT_KEY);
      return [];
    } catch {
      return [];
    }
  },

  // Farmer Notes
  getNotes: () => {
    try {
      const data = localStorage.getItem(NOTES_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },
  saveNote: (cropId, noteText) => {
    try {
      const notes = storage.getNotes();
      notes[cropId] = {
        text: noteText,
        updatedAt: new Date().toLocaleString()
      };
      localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
      return notes;
    } catch {
      return {};
    }
  },

  // Raw Storage dump for inspector
  getRawData: () => {
    try {
      return {
        bookmarks: storage.getBookmarks(),
        chatHistoryCount: storage.getChatHistory().length,
        notes: storage.getNotes(),
        lastSync: new Date().toISOString()
      };
    } catch {
      return {};
    }
  }
};
