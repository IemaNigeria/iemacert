import React, { useState } from 'react';
import { 
  Building2, ShieldCheck, CheckCircle2, ArrowRight, 
  ExternalLink, Sparkles, Award, ChevronRight, Layers, FileCheck2 
} from 'lucide-react';
import { CLIENTS_LIST, ClientItem } from './ClientLogos';

interface ClientShowcaseSectionProps {
  onNavigate?: (page: string, params?: Record<string, string>) => void;
  title?: string;
  subtitle?: string;
}

export const ClientShowcaseSection: React.FC<ClientShowcaseSectionProps> = ({
  onNavigate,
  title = "Trusted by Leading Nigerian & African Enterprises",
  subtitle = "From tier-1 commercial banks and upstream energy majors to multinational civil contractors and heavy manufacturers, industry leaders rely on IEMA Standards for accredited ISO audits, testing, and compliance certification."
}) => {
  const [selectedSector, setSelectedSector] = useState<string>('All');

  const sectors = [
    'All',
    'Banking & Financial Services',
    'Energy & Oil/Gas',
    'Infrastructure & Construction',
    'Heavy Manufacturing & Steel',
    'Healthcare & Medical',
    'Engineering & Technical Systems'
  ];

  const filteredClients = selectedSector === 'All'
    ? CLIENTS_LIST
    : CLIENTS_LIST.filter(c => c.sector === selectedSector);

  return (
    <section className="space-y-10">
      
      {/* Header and Filter */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Our Esteemed Clients &amp; Industry Leaders</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white font-serif tracking-tight">
            {title}
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
          <a
            href="https://crmops.iemacert.com/request-quote.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DC2626] hover:bg-[#B91C1C] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-md shadow-red-900/20"
          >
            <span>Request Audit Quote</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => onNavigate?.('approach')}
            className="border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 px-4 py-2.5 rounded-xl font-bold text-xs transition-colors flex items-center gap-1.5"
          >
            <FileCheck2 className="w-3.5 h-3.5 text-amber-500" />
            <span>Our Audit Process</span>
          </button>
        </div>
      </div>

      {/* CONTINUOUS LOGO MARQUEE / TICKER STRIP */}
      <div className="relative overflow-hidden bg-white dark:bg-[#08152D] rounded-2xl border border-slate-200 dark:border-slate-800 py-6 px-4 shadow-sm">
        <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 text-center mb-4 flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Major Corporate Entities Audited &amp; Certified by IEMA Standards</span>
        </div>

        {/* Scrollable / Flex Wrap Logo Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center">
          {CLIENTS_LIST.map((client) => (
            <div 
              key={client.id}
              onClick={() => setSelectedSector(client.sector)}
              className="bg-slate-50 dark:bg-[#0B1E38] p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/60 hover:border-amber-500 dark:hover:border-amber-400 transition-all cursor-pointer flex flex-col items-center justify-center text-center group h-28 shadow-sm hover:shadow"
              title={`View ${client.name} details`}
            >
              <div className="h-12 w-full flex items-center justify-center p-1 bg-white rounded-lg overflow-hidden shadow-inner">
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-10 max-w-[90%] object-contain group-hover:scale-105 transition-transform"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (client.altLogo && target.src !== client.altLogo) {
                      target.src = client.altLogo;
                    }
                  }}
                />
              </div>
              <span className="text-[10px] font-bold text-slate-800 dark:text-slate-200 mt-2 truncate w-full px-1 group-hover:text-amber-500 transition-colors">
                {client.shortName}
              </span>
              <span className="text-[9px] text-slate-500 dark:text-slate-400 truncate w-full px-1">
                {client.badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTOR FILTER TABS */}
      <div className="flex flex-wrap items-center gap-2">
        {sectors.map((sec) => (
          <button
            key={sec}
            onClick={() => setSelectedSector(sec)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
              selectedSector === sec
                ? 'bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-950 shadow-md'
                : 'bg-white dark:bg-[#0B1E38] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
            }`}
          >
            {sec === 'All' ? `All Clients (${CLIENTS_LIST.length})` : sec}
          </button>
        ))}
      </div>

      {/* DETAILED CLIENT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div
            key={client.id}
            className="bg-white dark:bg-[#0B1E38] rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-xl hover:border-amber-500 transition-all flex flex-col justify-between group space-y-4"
          >
            <div className="space-y-4">
              {/* Card Header with Logo & Sector Badge */}
              <div className="flex items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="h-14 w-32 bg-white rounded-xl p-2 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm overflow-hidden shrink-0">
                  <img
                    src={client.logo}
                    alt={`${client.name} Logo`}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (client.altLogo && target.src !== client.altLogo) {
                        target.src = client.altLogo;
                      }
                    }}
                  />
                </div>
                <div className="text-right">
                  <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 px-2.5 py-1 rounded-full">
                    {client.badge}
                  </span>
                  <div className="text-[10px] font-semibold text-slate-400 mt-1">
                    {client.sector}
                  </div>
                </div>
              </div>

              {/* Title & Standards */}
              <div className="space-y-1.5">
                <h3 className="text-base font-black text-slate-900 dark:text-white font-serif leading-snug group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {client.name}
                </h3>
                <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{client.standards}</span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {client.summary}
              </p>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1 font-semibold text-slate-700 dark:text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-500" />
                <span>EGAC CAB 12203 Audit</span>
              </span>
              <a
                href="https://certificates.iiema.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 dark:text-amber-400 font-bold hover:underline flex items-center gap-1"
              >
                <span>Verify Status</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
