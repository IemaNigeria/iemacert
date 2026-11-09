import React, { useState, useEffect } from 'react';
import { X, Download, ShieldCheck, CheckCircle2, ArrowRight, FileText, Phone, Sparkles } from 'lucide-react';
import { trackConversionEvent } from '../utils/analytics';
import { downloadIsoHandbookPdf } from '../utils/handbookDownloader';
import { useLanguage } from '../context/LanguageContext';

interface ExitIntentModalProps {
  onNavigate?: (page: string, params?: Record<string, string>) => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDownloaded, setHasDownloaded] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedStandard, setSelectedStandard] = useState('ISO 9001:2015');
  const { language, t, isRTL } = useLanguage();

  useEffect(() => {
    // Only show once per session
    const hasSeenModal = sessionStorage.getItem('iema_exit_modal_seen');
    if (hasSeenModal) return;

    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse leaves the top boundary of the viewport
      if (e.clientY <= 10) {
        setIsVisible(true);
        sessionStorage.setItem('iema_exit_modal_seen', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleDownloadChecklist = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    trackConversionEvent('checklist_download', {
      email: email || 'anonymous',
      phone: phone || 'anonymous',
      standard: selectedStandard
    });
    downloadIsoHandbookPdf('IEMA-ISO-Readiness-Checklist-2026.pdf');
    setHasDownloaded(true);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white dark:bg-[#0B1E38] rounded-3xl shadow-2xl border-2 border-amber-500/40 overflow-hidden text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Badge */}
        <div className="bg-gradient-to-r from-[#070F2B] via-[#0D1F42] to-[#070F2B] text-white p-6 relative">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-amber-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Complimentary Readiness Kit</span>
          </div>

          <h2 id="exit-modal-title" className="text-xl sm:text-2xl font-black font-serif text-white">
            Before You Go: Download Your Free ISO Certification Readiness Checklist
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Official 2026 conformity roadmap for Nigerian organizations preparing for ISO 9001, 14001, 45001, 27001, or 22000 audits.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-4">
          {!hasDownloaded ? (
            <form onSubmit={handleDownloadChecklist} className="space-y-4">
              <div className="space-y-2 bg-slate-50 dark:bg-[#070F2B] p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>What’s Inside the 2026 Audit Checklist:</span>
                </div>
                <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 pl-6 list-disc">
                  <li>Mandatory documentation &amp; record-keeping requirements</li>
                  <li>Stage 1 readiness checklist to avoid audit non-conformances</li>
                  <li>NNPC, NCDMB, and Federal procurement conformity matrix</li>
                  <li>Typical budget ranges and accelerated timeline blueprints</li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Work Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A1633] text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                    Phone / WhatsApp (Optional)
                  </label>
                  <input
                    type="tel"
                    placeholder="+234 800 000 0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A1633] text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1">
                  Primary Standard Needed
                </label>
                <select
                  value={selectedStandard}
                  onChange={(e) => setSelectedStandard(e.target.value)}
                  className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#0A1633] text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 outline-none"
                >
                  <option value="ISO 9001:2015">ISO 9001:2015 (Quality Management)</option>
                  <option value="ISO 14001:2015">ISO 14001:2015 (Environmental Management)</option>
                  <option value="ISO 45001:2018">ISO 45001:2018 (Occupational Health &amp; Safety)</option>
                  <option value="ISO/IEC 27001:2022">ISO/IEC 27001:2022 (Information Security)</option>
                  <option value="ISO 22000:2018">ISO 22000:2018 &amp; HACCP (Food Safety)</option>
                  <option value="Integrated Management System">Integrated Management System (IMS: 9001+14001+45001)</option>
                </select>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  className="flex-1 bg-[#DC2626] hover:bg-[#b91c1c] text-white py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-900/30 transition-all hover:scale-102"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Free Checklist (PDF)</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    handleClose();
                    onNavigate?.('quote');
                  }}
                  className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 py-3 px-4 rounded-xl font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Request Full Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Checklist Downloaded Successfully!</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-sm mx-auto">
                  Your PDF readiness handbook has been saved. Would you also like a complimentary 20-minute discovery call with an IEMA Lead Auditor?
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <a
                  href="https://wa.me/2348134831027?text=Hello%20IEMA%20Standards%2C%20I%20just%20downloaded%20the%20ISO%20Readiness%20Checklist%20and%20would%20like%20to%20book%20a%20free%20technical%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <span>Book Free Auditor Call via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={handleClose}
                  className="border border-slate-300 dark:border-slate-700 px-4 py-2.5 rounded-xl font-bold text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
