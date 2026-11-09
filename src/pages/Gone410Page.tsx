import React, { useEffect } from 'react';
import { ShieldAlert, ArrowRight, Home, Award, Search, Phone, ChevronRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';

interface Gone410PageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
  removedPath?: string;
}

export const Gone410Page: React.FC<Gone410PageProps> = ({ onNavigate, removedPath }) => {
  useEffect(() => {
    // Add meta robots noindex to ensure search crawlers de-index this URL immediately
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'noindex, follow, noarchive');

    return () => {
      // Reset when unmounting
      if (robotsMeta) {
        robotsMeta.setAttribute('content', 'index, follow');
      }
    };
  }, []);

  const pathDisplay = removedPath || (typeof window !== 'undefined' ? window.location.pathname : '/product/ninja-silhouette-2/');

  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 transition-colors">
      <SeoHead
        title="410 Gone - Page Permanently Removed | IEMA Standards Limited"
        description="The requested legacy product page has been permanently removed from iemacert.com. Explore our accredited ISO certification and compliance services."
        canonicalPath="410"
      />

      <div className="max-w-2xl w-full bg-white dark:bg-[#0B1E38] rounded-3xl p-8 sm:p-12 border border-slate-200 dark:border-slate-700/80 shadow-2xl text-center space-y-6">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-mono font-bold">
          <ShieldAlert className="w-4 h-4 text-amber-500" />
          <span>HTTP 410 — Permanently Removed (Gone)</span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black font-serif text-slate-900 dark:text-white">
            Resource Permanently Removed
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed max-w-lg mx-auto">
            The item at <code className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-amber-600 dark:text-amber-400 font-mono text-xs">{pathDisplay}</code> was a legacy demo placeholder from a previous site installation. It has been permanently purged and will not return.
          </p>
        </div>

        {/* Search Engine De-indexing Notice */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 text-left text-xs space-y-1.5">
          <div className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
            <span>Notice for Search Engines &amp; Visitors:</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            IEMA Standards Limited (<a href="https://www.iemacert.com" className="text-amber-600 dark:text-amber-400 underline">iemacert.com</a>) is an accredited international certification and testing body. We do not sell retail merchandise or software apparel. Please update your bookmarks or remove this URL from search indexes.
          </p>
        </div>

        {/* Navigation Guidance Links */}
        <div className="pt-2 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Looking for IEMA Conformity Services?
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="bg-[#0A192F] hover:bg-[#0E2A47] text-white px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-colors shadow"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Return to Homepage</span>
            </button>

            <button
              onClick={() => onNavigate('certifications')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-5 py-3 rounded-xl font-bold text-xs flex items-center gap-2 transition-colors shadow"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Explore ISO Certifications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Quick Contact Footer */}
        <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <span>Need help?</span>
          <a href="tel:+2348134831027" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold flex items-center gap-1">
            <Phone className="w-3 h-3" />
            <span>+234 813 483 1027</span>
          </a>
          <span>·</span>
          <button onClick={() => onNavigate('contact')} className="hover:underline">Contact Desk</button>
        </div>

      </div>
    </div>
  );
};
