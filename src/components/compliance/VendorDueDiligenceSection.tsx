import React, { useState } from 'react';
import { 
  ShieldCheck, Search, Building2, UserCheck, AlertTriangle, 
  FileText, CheckCircle2, ArrowRight, ExternalLink, Download, 
  HelpCircle, ChevronDown, ChevronUp, Check, Globe, 
  Layers, Users, Activity, FileCheck2, Scale
} from 'lucide-react';

interface VendorDueDiligenceSectionProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const VendorDueDiligenceSection: React.FC<VendorDueDiligenceSectionProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive Vendor Risk Tier Calculator
  const [contractValue, setContractValue] = useState<'tier1' | 'tier2' | 'tier3'>('tier1');
  const [hasGovTouchpoint, setHasGovTouchpoint] = useState<boolean>(true);
  const [vendorLocation, setVendorLocation] = useState<'domestic' | 'high_risk_offshore' | 'oecd'>('high_risk_offshore');
  const [isCriticalSupply, setIsCriticalSupply] = useState<boolean>(true);

  const calculateVendorRisk = () => {
    let score = 20;
    if (contractValue === 'tier1') score += 30;
    if (contractValue === 'tier2') score += 15;
    if (hasGovTouchpoint) score += 25;
    if (vendorLocation === 'high_risk_offshore') score += 25;
    if (vendorLocation === 'domestic') score += 10;
    if (isCriticalSupply) score += 15;

    const finalScore = Math.min(100, score);
    return {
      score: finalScore,
      level: finalScore > 75 ? 'Tier 1 (High Risk / Enhanced Due Diligence - EDD)' : finalScore > 45 ? 'Tier 2 (Moderate Risk / Standard Due Diligence)' : 'Tier 3 (Low Risk / Simplified Screening)',
      recommendedAction: finalScore > 75 
        ? 'Mandatory Ultimate Beneficial Ownership (UBO) forensic tracing, on-site physical facility audit, 5-year litigation check, and PEP/Sanction adverse media screening.' 
        : finalScore > 45 
        ? 'Standard CAC verification, tax clearance verification, director identity check, and automated sanction list screening.' 
        : 'Basic statutory registration verification and automated global watchlist screening.'
    };
  };

  const vendorRisk = calculateVendorRisk();

  const diligenceServices = [
    {
      title: "Ultimate Beneficial Ownership (UBO) Tracing",
      desc: "Unmasking hidden ownership layers, shell corporations, and nominee shareholding structures using the CAC Beneficial Ownership Register (BOR) and international corporate registries.",
      details: ["Corporate Registry Verification (CAC, Companies House, Delaware, etc.)", "Identification of natural persons with ≥5% equity or voting control", "Tracing offshore holding companies & trust instruments", "Cross-checking with PEP & Sanction watchlists"]
    },
    {
      title: "PEP, Sanctions & Adverse Media Screening",
      desc: "Automated and manual cross-referencing of corporate entities, directors, and key beneficial owners against 200+ international databases updated in real-time.",
      details: ["UN, OFAC (US), EU, UK OFSI & Nigerian Consolidated Lists", "Global Politically Exposed Persons (PEPs) & close associates", "Adverse media screening across 50,000+ news & investigative journals", "World Bank & Regional Development Bank Debarment Lists"]
    },
    {
      title: "M&A Integrity & Pre-Investment Forensic Diligence",
      desc: "Independent compliance health checks for private equity, venture capital, and corporate buyers prior to mergers, joint ventures, or equity acquisitions.",
      details: ["Historical anti-bribery & AML liability exposure analysis", "Tax, pension (PENCOM), and ITF regulatory standing checks", "Pending corporate litigation and undisclosed liabilities", "Assessment of key customer/vendor contract integrity"]
    },
    {
      title: "Supply Chain ESG & Factory Labor Audits",
      desc: "Physical on-site inspections of contractor and supplier manufacturing sites, fabrication yards, and warehousing facilities across Nigeria and West Africa.",
      details: ["Modern slavery, child labor & fair wage compliance verification", "Workplace health, safety & PPE standards (ISO 45001 alignment)", "Environmental discharge & hazardous waste audits (NESREA/FMEnv)", "Supply chain continuity & sub-tier contractor dependency mapping"]
    }
  ];

  const tprmLifecycle = [
    { phase: "Stage 01", title: "Vendor Ingestion & Risk Scoring", desc: "Automated onboarding questionnaire assessing commercial scope, contract value, geographic footprint, and regulatory exposure." },
    { phase: "Stage 02", title: "Evidentiary Verification & Background Checks", desc: "Verifying statutory certificates (CAC, Tax Clearance, PENCOM, NSITF, DPR/NUPRC) and conducting automated UBO/PEP screening." },
    { phase: "Stage 03", title: "On-Site Physical & Forensic Audits", desc: "For Tier 1 high-risk vendors, deploying lead auditors to inspect operational facilities, interview management, and audit HSE practices." },
    { phase: "Stage 04", title: "Risk Rating & Remediation Roadmap", desc: "Issuing formal Due Diligence Reports with quantitative risk ratings, red flag disclosures, and corrective remediation conditions." },
    { phase: "Stage 05", title: "Continuous Monitoring & Re-Audit", desc: "Real-time automated alerts for sudden director changes, adverse media hits, sanctions additions, and annual recertification audits." }
  ];

  const diligenceFaqs = [
    {
      q: "What is Vendor Due Diligence and why is it legally essential for enterprise procurement?",
      a: "Vendor Due Diligence is the independent, systematic evaluation of third-party suppliers, contractors, agents, and joint venture partners prior to contract execution and throughout the vendor relationship. Under the Money Laundering Act, UK Bribery Act, US FCPA, and Nigerian procurement guidelines, organizations can be held criminally and civilly liable for corrupt or unlawful acts committed by third-party suppliers acting on their behalf."
    },
    {
      q: "How does IEMA Standards verify Ultimate Beneficial Ownership (UBO) in Nigeria?",
      a: "IEMA Standards accesses primary corporate registries including the Corporate Affairs Commission (CAC) Beneficial Ownership Register (BOR), state land registries, court litigation archives, and proprietary international intelligence databases. Our forensic analysts trace multi-layered shareholding structures, trust instruments, and offshore shell entities to identify the living, natural persons who ultimately control the entity."
    },
    {
      q: "What are the common red flags uncovered during corporate due diligence audits?",
      a: "Frequent red flags include: 1) Company incorporated immediately prior to high-value tender publication, 2) Undisclosed Politically Exposed Persons (PEPs) or government officials holding beneficial shares, 3) Shared registered office addresses with competing bidders (bid rigging), 4) Inability to provide verified audited financial statements or tax clearance certificates, 5) Adverse media linking directors to financial crime investigations, and 6) Lack of physical operating facilities or legitimate staff commensurate with contract value."
    },
    {
      q: "What is the difference between Standard Due Diligence (SDD) and Enhanced Due Diligence (EDD)?",
      a: "Standard Due Diligence (SDD) is applied to low-to-moderate risk vendors and covers statutory incorporation checks, director identity verification, tax standing, and automated watchlist screening. Enhanced Due Diligence (EDD) is mandatory for high-risk vendors (high-value contracts, government-facing agents, cross-border suppliers in sanctioned jurisdictions, or PEP-linked firms) and involves on-site physical facility inspections, forensic asset tracing, 5-year litigation audits, and in-depth reputational source inquiries."
    },
    {
      q: "How does IEMA Standards ensure confidentiality during due diligence investigations?",
      a: "All diligence operations are governed by strict Non-Disclosure Agreements (NDAs), encrypted data handling protocols, and adherence to the Nigeria Data Protection Act (NDPA 2023). Reports are delivered via secure encrypted channels exclusively to authorized corporate legal officers and procurement steering committees."
    }
  ];

  return (
    <div className="space-y-12 animate-fadeIn text-slate-900 dark:text-slate-100">
      
      {/* Executive Hero Intro */}
      <div className="bg-gradient-to-br from-[#064E3B] via-[#0A192F] to-[#070F2B] text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-500/30">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Institutional Third-Party Risk Management (TPRM) Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white leading-tight">
            Corporate Integrity & Vendor Due Diligence Audits
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            Protect your organization from supply chain corruption, corporate fraud, statutory sanctions, and counterparty defaults through independent background vetting, Ultimate Beneficial Ownership (UBO) tracing, and on-site vendor audits across Nigeria and international commercial corridors.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <span>Commission Due Diligence Audit</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <span>Request Diligence Specimen Report</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 4 Core Diligence Service Modules */}
      <div className="space-y-6">
        <div className="border-l-4 border-emerald-500 pl-4">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Service Modules</span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            Comprehensive Corporate & Vendor Diligence Capabilities
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
            From basic supplier pre-qualification through complex cross-border M&A forensic asset tracing:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diligenceServices.map((service, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4 hover:border-emerald-500/50 transition-colors flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    <Search className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{service.title}</h4>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{service.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                {service.details.map((detail, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-[11px] text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Vendor Risk Tiering Calculator */}
      <div className="bg-gradient-to-r from-slate-900 via-[#064E3B] to-[#0A192F] text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Interactive TPRM Classifier</span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">Vendor Risk Tiering & Due Diligence Scope Calculator</h3>
          </div>
          <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700 max-w-sm text-right shrink-0">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Assessed Risk Tier</span>
            <span className="text-xs font-black text-emerald-300 block mt-0.5">
              {vendorRisk.level}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
          <div className="space-y-2">
            <label className="font-bold text-slate-300">Annual Contract / Procurement Value:</label>
            <select
              value={contractValue}
              onChange={(e) => setContractValue(e.target.value as any)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="tier1">&gt; ₦100 Million / Critical EPC Contract</option>
              <option value="tier2">₦10 Million - ₦100 Million</option>
              <option value="tier3">&lt; ₦10 Million / Routine Supplies</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-300">Government Touchpoint / Licensing Agent:</label>
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setHasGovTouchpoint(true)}
                className={`flex-1 py-2 px-2 rounded-xl font-bold border transition-colors ${hasGovTouchpoint ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                Yes (High Risk)
              </button>
              <button
                type="button"
                onClick={() => setHasGovTouchpoint(false)}
                className={`flex-1 py-2 px-2 rounded-xl font-bold border transition-colors ${!hasGovTouchpoint ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                No Touchpoints
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-300">Vendor Domicile / Jurisdiction:</label>
            <select
              value={vendorLocation}
              onChange={(e) => setVendorLocation(e.target.value as any)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-emerald-500"
            >
              <option value="high_risk_offshore">Offshore Free Trade Zone / High Risk</option>
              <option value="domestic">Domestic Nigerian Registered</option>
              <option value="oecd">OECD / Financial Action Task Force Member</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-300">Critical Supply Chain Dependency:</label>
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setIsCriticalSupply(true)}
                className={`flex-1 py-2 px-2 rounded-xl font-bold border transition-colors ${isCriticalSupply ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                Yes (Sole Source)
              </button>
              <button
                type="button"
                onClick={() => setIsCriticalSupply(false)}
                className={`flex-1 py-2 px-2 rounded-xl font-bold border transition-colors ${!isCriticalSupply ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                Standard (Multiple)
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-emerald-950/50 rounded-2xl border border-emerald-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-emerald-300">Mandatory Diligence Protocol:</span>
            <p className="text-xs text-slate-300">{vendorRisk.recommendedAction}</p>
          </div>
          <a
            href="https://crmops.iemacert.com/request-quote.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DC2626] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shrink-0 transition-colors shadow"
          >
            <span>Commission Vetting</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 5-Stage TPRM Lifecycle */}
      <div className="bg-slate-100 dark:bg-[#0A192F] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">End-to-End Governance</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">
            Third-Party Risk Management (TPRM) 5-Stage Lifecycle
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            We partner with corporate procurement, legal, and audit teams to institutionalize continuous vendor oversight:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {tprmLifecycle.map((stage, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0E2A47] p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded-md">{stage.phase}</span>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-2">{stage.title}</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{stage.desc}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3 h-3" /> Fully Audited
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vendor Due Diligence FAQs */}
      <div className="space-y-4">
        <div className="border-l-4 border-emerald-500 pl-4">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Expert Knowledge Base</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">
            Frequently Asked Questions: Corporate & Vendor Due Diligence
          </h3>
        </div>

        <div className="space-y-3">
          {diligenceFaqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-[#0E2A47] rounded-2xl border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-sm transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 hover:bg-slate-50 dark:hover:bg-[#12365B] transition-colors"
              >
                <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-4 h-4 text-emerald-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
