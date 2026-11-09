import React, { useState } from 'react';
import { 
  Scale, ShieldAlert, FileText, CheckCircle2, AlertTriangle, 
  Building2, Users, ArrowRight, ExternalLink, Download, 
  HelpCircle, ChevronDown, ChevronUp, Clock, FileCheck2, 
  Check, Lock, Activity, DollarSign, Search, ShieldCheck
} from 'lucide-react';

interface AmlComplianceSectionProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const AmlComplianceSection: React.FC<AmlComplianceSectionProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Interactive Risk Scorer State
  const [businessType, setBusinessType] = useState<'dnfbp_high' | 'dnfbp_med' | 'fintech' | 'corporate'>('dnfbp_high');
  const [cashVolume, setCashVolume] = useState<'high' | 'med' | 'low'>('high');
  const [crossBorder, setCrossBorder] = useState<boolean>(true);
  const [hasComplianceOfficer, setHasComplianceOfficer] = useState<boolean>(false);
  const [hasAmlPolicy, setHasAmlPolicy] = useState<boolean>(false);

  const calculateRiskScore = () => {
    let score = 30;
    if (businessType === 'dnfbp_high') score += 25;
    if (businessType === 'fintech') score += 20;
    if (businessType === 'dnfbp_med') score += 15;
    if (businessType === 'corporate') score += 10;

    if (cashVolume === 'high') score += 20;
    if (cashVolume === 'med') score += 10;

    if (crossBorder) score += 15;
    if (!hasComplianceOfficer) score += 20;
    if (!hasAmlPolicy) score += 20;

    return Math.min(100, score);
  };

  const riskScore = calculateRiskScore();
  const riskCategory = riskScore > 70 ? 'High Risk / Immediate Audit Required' : riskScore > 40 ? 'Moderate Risk / Control Enhancements Needed' : 'Low Risk / Routine Monitoring';

  const dnfbpCategories = [
    { title: "Real Estate Developers & Brokers", desc: "Mandatory SCUML registration, buyer UBO verification, and reporting of property transactions exceeding statutory cash thresholds.", code: "DNFBP Tier 1" },
    { title: "Legal Practitioners & Law Firms", desc: "Client account escrow monitoring, trust account AML controls, and non-litigation corporate transaction reporting.", code: "DNFBP Tier 1" },
    { title: "Chartered Accountants & Auditors", desc: "Independent audit standards, forensic bookkeeping, and statutory duty to report suspicious client accounting structures.", code: "DNFBP Tier 1" },
    { title: "Dealers in Precious Metals & Stones", desc: "High-value cash transaction reporting, supplier provenance validation, and precious inventory tracing.", code: "DNFBP Tier 1" },
    { title: "Automobile & Heavy Equipment Dealers", desc: "Cash payment threshold monitoring, vehicle buyer KYC, and verification of offshore wire transfers.", code: "DNFBP Tier 2" },
    { title: "Casinos, Gaming & Betting Operators", desc: "Player account verification, continuous payout monitoring, anti-structuring controls, and daily AML reporting.", code: "DNFBP Tier 1" },
    { title: "Hotels, Hospitality & Luxury Merchants", desc: "High-value cash guest billing controls, event rental vetting, and supplier AML verification.", code: "DNFBP Tier 2" },
    { title: "Consulting & Trust Service Providers", desc: "Company formation vetting, nominee director screening, and corporate asset holding structure audits.", code: "DNFBP Tier 2" }
  ];

  const amlPillars = [
    {
      number: "01",
      title: "Comprehensive Written AML/CFT/CPF Policy Manual",
      desc: "Tailored, board-approved standard operating procedures (SOPs) defining client onboarding, risk rating, transaction thresholds, and escalation pathways.",
      details: ["Customer Acceptance Policy (CAP)", "Customer Identification Procedures (CIP)", "Sanction & PEP Screening SOPs", "Document Retention (Minimum 5 Years)"]
    },
    {
      number: "02",
      title: "Designation of Anti-Money Laundering Compliance Officer",
      desc: "Formal appointment of a certified, competent AML Compliance Officer with direct, unimpeded access to the Board of Directors and senior management.",
      details: ["Senior management status", "Direct reporting to Board Audit Committee", "Liaison with SCUML, NFIU & EFCC", "Annual compliance status reporting"]
    },
    {
      number: "03",
      title: "Risk-Based Customer Due Diligence (CDD & EDD)",
      desc: "Multi-tiered KYC protocols assessing customer risk profiles, beneficial ownership verification (UBO), and Enhanced Due Diligence for Politically Exposed Persons (PEPs).",
      details: ["Ultimate Beneficial Owner (UBO) tracing (≥5% threshold)", "Source of Wealth & Source of Funds validation", "Adverse media and international sanctions screening", "Ongoing transaction pattern monitoring"]
    },
    {
      number: "04",
      title: "NFIU & SCUML Statutory Reporting Protocols",
      desc: "Automated and manual triggers for filing Currency Transaction Reports (CTR) and Suspicious Transaction Reports (STR) via the NFIU goAML platform.",
      details: ["CTR: Cash deposits >₦5M (Individual) / >₦10M (Corporate)", "STR: Suspicious or unexplainable economic activity", "Foreign Transfer Reports (>USD $10,000 equivalent)", "Zero tipping-off compliance protocols"]
    },
    {
      number: "05",
      title: "Independent Annual AML/CFT Compliance Audits",
      desc: "Statutory requirement for regular, independent testing of internal AML controls conducted by qualified external compliance auditing firms.",
      details: ["Evaluation of KYC file completeness", "Sample testing of high-value transactions", "Testing of sanctions screening algorithms", "Formal management letter & corrective action plans"]
    },
    {
      number: "06",
      title: "Continuous Employee Training & Capacity Building",
      desc: "Regular, role-specific AML/CFT training programs ensuring staff identify red flags, money laundering typologies, and emerging financial crime schemes.",
      details: ["Annual mandatory staff certification", "Role-specific training for front-line & finance staff", "Red flag typology scenario workshops", "Comprehensive training log documentation"]
    }
  ];

  const statutoryActs = [
    {
      act: "Money Laundering (Prevention and Prohibition) Act, 2022 (MLPPA)",
      scope: "The primary anti-money laundering statute in Nigeria, imposing stringent customer identification, transaction reporting, and severe criminal/civil sanctions for non-compliant entities.",
      penalty: "Fines up to ₦50 Million for corporate bodies, forfeiture of assets, and mandatory license withdrawal."
    },
    {
      act: "Terrorism (Prevention and Prohibition) Act, 2022 (TPPA)",
      scope: "Prohibits the financing of terrorist acts, terrorist organizations, and proliferation financing. Requires immediate asset freezing upon UN/Nigerian Consolidated Sanctions List matches.",
      penalty: "Life imprisonment for convicted facilitators, complete corporate liquidation, and asset forfeiture."
    },
    {
      act: "Nigerian Financial Intelligence Unit (NFIU) Act, 2018",
      scope: "Establishes the NFIU as the central national agency responsible for receiving, analyzing, and disseminating financial intelligence related to money laundering and terrorist financing.",
      penalty: "Mandatory reporting compliance; failure to submit STRs/CTRs carries heavy regulatory fines and operational suspension."
    },
    {
      act: "Special Control Unit Against Money Laundering (SCUML) Regulations",
      scope: "Empowers SCUML (under EFCC and Federal Ministry of Industry, Trade and Investment) to register, supervise, monitor, and audit Designated Non-Financial Businesses and Professions (DNFBPs).",
      penalty: "Bank account freezing, inability to execute public contracts, and operational shutdown for uncertified DNFBPs."
    }
  ];

  const amlFaqs = [
    {
      q: "What is SCUML certification and who is legally required to obtain it in Nigeria?",
      a: "The Special Control Unit Against Money Laundering (SCUML) certificate is a statutory compliance certificate issued to Designated Non-Financial Businesses and Professions (DNFBPs) pursuant to the Money Laundering (Prevention and Prohibition) Act, 2022. It is mandatory for real estate developers, law firms, accounting firms, car dealers, hotels, casinos, consulting companies, and NGOs. Without a valid SCUML certificate, commercial banks in Nigeria are legally prohibited from opening corporate bank accounts or processing international transactions for DNFBPs."
    },
    {
      q: "What is the difference between Currency Transaction Reporting (CTR) and Suspicious Transaction Reporting (STR)?",
      a: "Currency Transaction Reports (CTR) are mandatory, objective reports triggered whenever a single or cumulative cash transaction exceeds the statutory limit set by the MLPPA 2022 (₦5,000,000 for individuals and ₦10,000,000 for corporate bodies). Suspicious Transaction Reports (STR), on the other hand, are subjective and must be filed immediately whenever a transaction—regardless of amount—exhibits red flags, lacks economic sense, involves high-risk jurisdictions, or suggests unlawful proceeds. STRs must be filed with the NFIU within 24 to 48 hours without 'tipping off' the client."
    },
    {
      q: "How does IEMA Standards assist organizations with SCUML clearance and AML audits?",
      a: "IEMA Standards Limited provides end-to-end institutional support: 1) Performing initial AML gap analyses, 2) Drafting customized, board-approved AML/CFT policy manuals and SOPs, 3) Preparing and submitting full SCUML registration and certificate clearance dossiers, 4) Assisting in the appointment and mentoring of designated AML Compliance Officers, 5) Conducting independent annual statutory AML compliance audits required by regulatory authorities, and 6) Delivering certified staff training workshops."
    },
    {
      q: "What is Ultimate Beneficial Ownership (UBO) and why is it critical under Nigerian law?",
      a: "An Ultimate Beneficial Owner (UBO) is the natural person who ultimately owns or controls a legal entity or on whose behalf a transaction is being conducted. Under the Companies and Allied Matters Act (CAMA 2020) and MLPPA 2022, organizations must identify and verify any individual who holds 5% or more voting rights, shares, or significant control. Concealing beneficial ownership through shell corporations or nominee directors is a major regulatory offense."
    },
    {
      q: "What are the penalties for non-compliance with AML/CFT regulations in Nigeria?",
      a: "Under the MLPPA 2022 and CBN/SCUML frameworks, failure to comply with AML/CFT obligations attracts severe administrative, civil, and criminal penalties. These include corporate fines ranging from ₦10 Million to ₦50 Million+, personal criminal liability and imprisonment for directors/officers (up to 5 years), immediate freezing of corporate bank accounts, revocation of business licenses, and blacklisting from public tenders."
    },
    {
      q: "How frequently must an organization conduct an independent AML audit?",
      a: "Regulatory frameworks require all reporting entities (DNFBPs and financial institutions) to conduct an independent AML/CFT audit at least once every calendar year. The audit must be performed by an independent, qualified external compliance and audit firm to ensure objectivity, test internal controls, evaluate sample transaction records, and produce an auditable report for submission to the Board of Directors, SCUML, NFIU, or primary regulators upon request."
    }
  ];

  return (
    <div className="space-y-12 animate-fadeIn text-slate-900 dark:text-slate-100">
      
      {/* Executive Hero Intro */}
      <div className="bg-gradient-to-br from-[#070F2B] via-[#0A192F] to-[#1E293B] text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-500/30">
            <Scale className="w-4 h-4 text-amber-400" />
            <span>NFIU & SCUML Institutional Regulatory Practice</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white leading-tight">
            Anti-Money Laundering & Counter-Terrorist Financing (AML/CFT) Audits
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            IEMA Standards Limited delivers risk-based AML/CFT/CPF governance frameworks, Special Control Unit Against Money Laundering (SCUML) registration and clearance audits, KYC/CDD automation, and statutory independent annual compliance audits for Designated Non-Financial Businesses and Professions (DNFBPs), fintechs, and multinational corporations across Nigeria and West Africa.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <span>Schedule AML Compliance Audit</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <span>Speak with Lead AML Auditor</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Statutory Mandates & Legal Framework */}
      <div className="space-y-6">
        <div className="border-l-4 border-amber-500 pl-4">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Enforcement Standards</span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            Statutory Legal Framework in Nigeria
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
            Our audit programs and policy frameworks are meticulously aligned with the latest statutory enactments and regulatory circulars governing anti-financial crime in Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {statutoryActs.map((item, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm space-y-4 hover:border-amber-500/50 transition-colors">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 shrink-0 border border-amber-200 dark:border-amber-800/60">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">{item.act}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">{item.scope}</p>
                </div>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-950/30 rounded-xl border border-red-200 dark:border-red-900/40 text-[11px] text-red-700 dark:text-red-300">
                <span className="font-bold">Non-Compliance Sanction:</span> {item.penalty}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DNFBP Scope Grid */}
      <div className="bg-slate-100 dark:bg-[#0A192F] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest">Designated Sectors</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">
            Designated Non-Financial Businesses and Professions (DNFBPs) Covered
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            Section 30 of the MLPPA 2022 designates the following commercial sectors as legally bound to establish AML compliance programs and register with SCUML:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dnfbpCategories.map((cat, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0E2A47] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <Building2 className="w-4 h-4 text-amber-500" />
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">{cat.code}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white">{cat.title}</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{cat.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                <Check className="w-3.5 h-3.5" /> Full Audit Coverage
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The 6 Core Pillars of AML Governance */}
      <div className="space-y-6">
        <div className="border-l-4 border-emerald-500 pl-4">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">Audit Blueprint</span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            The 6 Pillars of Institutional AML/CFT Governance
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
            Our certified lead auditors design and inspect your organizational framework across the complete six-pillar structure required by the Financial Action Task Force (FATF) and the Central Bank of Nigeria:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amlPillars.map((pillar, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between space-y-4 hover:border-emerald-500/50 transition-colors">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-emerald-600 dark:text-emerald-400 font-mono">{pillar.number}</span>
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">{pillar.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                {pillar.details.map((detail, dIdx) => (
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

      {/* Interactive AML Risk & SCUML Readiness Calculator */}
      <div className="bg-gradient-to-r from-slate-900 to-[#0A192F] text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Self-Assessment Tool</span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">Interactive AML/CFT Risk & Regulatory Exposure Calculator</h3>
          </div>
          <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700 text-right shrink-0">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Estimated Risk Exposure</span>
            <span className={`text-xl font-black ${riskScore > 70 ? 'text-red-400' : riskScore > 40 ? 'text-amber-400' : 'text-emerald-400'}`}>
              {riskScore}/100 — {riskCategory}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          <div className="space-y-2">
            <label className="font-bold text-slate-300">Business Sector Category:</label>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value as any)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
            >
              <option value="dnfbp_high">High-Tier DNFBP (Real Estate, Legal, Gold/Gems)</option>
              <option value="dnfbp_med">Mid-Tier DNFBP (Auto, Hotels, Consulting)</option>
              <option value="fintech">Fintech / Payment Switch / Lending</option>
              <option value="corporate">General Corporate / Manufacturing</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-300">Cash Transaction Volume:</label>
            <select
              value={cashVolume}
              onChange={(e) => setCashVolume(e.target.value as any)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
            >
              <option value="high">High (&gt;₦10M monthly cash turnover)</option>
              <option value="med">Moderate (&gt;₦2M - ₦10M monthly)</option>
              <option value="low">Low / 100% Digital Electronic Transfers</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-300">Cross-Border & FX Transactions:</label>
            <div className="flex gap-4 pt-1">
              <button
                type="button"
                onClick={() => setCrossBorder(true)}
                className={`flex-1 py-2 px-3 rounded-xl font-bold border transition-colors ${crossBorder ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                Yes (Cross-Border)
              </button>
              <button
                type="button"
                onClick={() => setCrossBorder(false)}
                className={`flex-1 py-2 px-3 rounded-xl font-bold border transition-colors ${!crossBorder ? 'bg-amber-500 text-slate-950 border-amber-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                No (Domestic Only)
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-300">Designated Compliance Officer:</label>
            <div className="flex gap-4 pt-1">
              <button
                type="button"
                onClick={() => setHasComplianceOfficer(true)}
                className={`flex-1 py-2 px-3 rounded-xl font-bold border transition-colors ${hasComplianceOfficer ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                Formally Appointed
              </button>
              <button
                type="button"
                onClick={() => setHasComplianceOfficer(false)}
                className={`flex-1 py-2 px-3 rounded-xl font-bold border transition-colors ${!hasComplianceOfficer ? 'bg-red-500 text-white border-red-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                Not Appointed
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-300">Documented AML/CFT Policy Manual:</label>
            <div className="flex gap-4 pt-1">
              <button
                type="button"
                onClick={() => setHasAmlPolicy(true)}
                className={`flex-1 py-2 px-3 rounded-xl font-bold border transition-colors ${hasAmlPolicy ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                Active & Approved
              </button>
              <button
                type="button"
                onClick={() => setHasAmlPolicy(false)}
                className={`flex-1 py-2 px-3 rounded-xl font-bold border transition-colors ${!hasAmlPolicy ? 'bg-red-500 text-white border-red-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                None / Outdated
              </button>
            </div>
          </div>

          <div className="flex items-end">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#DC2626] hover:bg-red-700 text-white py-2.5 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
            >
              <span>Get Targeted Audit Quotation</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Step-by-Step SCUML & Audit Workflow */}
      <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Operational Roadmap</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">
            IEMA Standards 5-Stage AML Audit & SCUML Clearance Workflow
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            We guide your management from initial risk evaluation through statutory SCUML clearance and ongoing NFIU reporting:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "Stage 01", title: "Institutional Gap Analysis", desc: "Comprehensive diagnostic of current KYC files, transaction monitoring procedures, and regulatory vulnerability exposure." },
            { step: "Stage 02", title: "Framework & Policy Drafting", desc: "Formulation of customized AML/CFT/CPF policy manuals, customer risk assessment matrices, and escalation protocols." },
            { step: "Stage 03", title: "Compliance Officer Setup", desc: "Structuring the compliance office, establishing direct Board reporting lines, and configuring goAML reporting interfaces." },
            { step: "Stage 04", title: "SCUML Clearance Dossier", desc: "Compilation of certified corporate records, tax clearances, and representation before SCUML/EFCC for certificate clearance." },
            { step: "Stage 05", title: "Annual Independent Audit", desc: "Independent statutory audit execution, transaction sample testing, issuing formal audit clearance reports and certificate." }
          ].map((s, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0A192F] border border-slate-200 dark:border-slate-800 space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-950 px-2 py-0.5 rounded-md">{s.step}</span>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-2">{s.title}</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{s.desc}</p>
              </div>
              <div className="pt-2 border-t border-slate-200 dark:border-slate-800 text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> Fully Managed
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AML Frequently Asked Questions */}
      <div className="space-y-4">
        <div className="border-l-4 border-amber-500 pl-4">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Expert Knowledge Base</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">
            Frequently Asked Questions: AML, SCUML & Financial Crime Compliance
          </h3>
        </div>

        <div className="space-y-3">
          {amlFaqs.map((faq, idx) => (
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
                  <ChevronUp className="w-4 h-4 text-amber-500 shrink-0" />
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
