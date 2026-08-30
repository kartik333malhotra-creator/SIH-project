import React, { useState } from 'react';
import { X, Headphones, CheckCircle2, ShieldCheck, Send } from 'lucide-react';

export const ExpertReviewModal = ({ isOpen, onClose, report }) => {
  const [submitted, setSubmitted] = useState(false);
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-forest-950 text-white">
          <div className="flex items-center space-x-2.5">
            <Headphones className="w-5 h-5 text-emerald-400" />
            <h3 className="font-extrabold text-base">Request Certified Agronomist Review</h3>
          </div>
          <button onClick={onClose} className="p-1 text-white/70 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-base text-slate-900">Review Request Dispatched</h4>
            <p className="text-xs text-slate-500">
              An Extension Agronomist will review Report {report?.code || '#AIA-4921'} and contact you within 2 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Target Report
              </label>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <span className="font-bold text-slate-900">{report?.diseaseName || 'Potato Late Blight'}</span>
                <p className="text-slate-500">{report?.sector || 'Field Sector 7'} • AI Confidence {report?.confidence || 98.4}%</p>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                Additional Field Notes or Symptom History
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Specify weather events, chemical application history, or unusual leaf curling..."
                rows={4}
                className="w-full px-3.5 py-2.5 rounded-xl text-xs bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-forest-800"
                required
              />
            </div>

            <div className="pt-2 flex justify-end space-x-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-bold hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-forest-900 hover:bg-forest-800 text-white text-xs font-bold shadow-md flex items-center space-x-1.5"
              >
                <Send className="w-3.5 h-3.5 text-emerald-400" />
                <span>Submit to Extension Specialist</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
