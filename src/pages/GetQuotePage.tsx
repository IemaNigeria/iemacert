import React from 'react';
import { QuoteCalculatorWidget } from '../components/QuoteCalculatorWidget';
import { ShieldCheck, Award, FileText, ExternalLink, ArrowRight } from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface GetQuotePageProps {
  onNavigate?: (page: string, params?: Record<string, string>) => void;
}

export const GetQuotePage: React.FC<GetQuotePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-12 pb-16">
      
      {/* SEO Head */}
      <SeoHead
        title="Request ISO Certification Quote | IEMA Standards"
        description="Request a fast, transparent quote for ISO 9001, 14001, 45001, 27001 certification, industrial testing, or technical inspection. Get your custom proposal."
        canonicalPath="quote"
        keywords={[
          'request iso certification quote',
          'iso audit cost calculator nigeria',
          'iso 9001 certification fee',
          'iso 14001 audit pricing',
          'accredited iso quote lagos'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Request a Quote', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header Banner */}
      <section className="bg-[#0A192F] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1600" 
            alt="ISO Audit Proposal Calculator" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 px-3 py-1 rounded-full text-xs font-bold border border-emerald-800">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>EGAC Accredited Audit Fees</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Request an ISO Certification Quote
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Calculate estimated fees and submit a formal audit proposal application for ISO 9001, 14001, 45001, 27001, 22000, material laboratory testing, or industrial inspection.
          </p>

          <div className="pt-2">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white px-7 py-3 rounded-full text-sm font-black shadow-xl shadow-red-900/40 hover:scale-105 transition-all border border-red-500"
            >
              <span>Go Directly to Official CRM Request Quote Portal</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Direct CRM Portal Callout */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0E2A47] to-[#070F2B] p-6 sm:p-7 rounded-2xl border border-amber-500/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Fast-Track Application</span>
            <h3 className="text-lg sm:text-xl font-black text-white font-serif">IEMA Standards Official CRM Quote Portal</h3>
            <p className="text-xs text-slate-300">Submit your corporate audit questionnaire directly to our client operations database for instant processing.</p>
          </div>
          <a
            href="https://crmops.iemacert.com/request-quote.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-xl font-black text-xs transition-all shadow-md flex items-center gap-2 shrink-0"
          >
            <span>Open CRM Quote Portal</span>
            <ExternalLink className="w-4 h-4 text-slate-950" />
          </a>
        </div>
      </section>

      {/* Main Quote Calculator Widget */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteCalculatorWidget />
      </section>

    </div>
  );
};
