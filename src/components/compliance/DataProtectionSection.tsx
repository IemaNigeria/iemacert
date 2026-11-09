import React, { useState } from 'react';
import { 
  Lock, ShieldCheck, FileCheck2, Database, AlertCircle, 
  Users, CheckCircle2, ArrowRight, ExternalLink, Download, 
  ChevronDown, ChevronUp, Check, ShieldAlert, Cpu, Globe, 
  FileText, Activity, Key, Eye, HelpCircle, Layers
} from 'lucide-react';

interface DataProtectionSectionProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const DataProtectionSection: React.FC<DataProtectionSectionProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive DCMI Calculator
  const [dataSubjectCount, setDataSubjectCount] = useState<'high' | 'med' | 'low'>('high');
  const [processesSensitiveData, setProcessesSensitiveData] = useState<boolean>(true);
  const [crossBorderTransfers, setCrossBorderTransfers] = useState<boolean>(true);
  const [sectorType, setSectorType] = useState<'fintech_bank' | 'health_pharma' | 'ecommerce_retail' | 'general'>('fintech_bank');

  const determineDcmiTier = () => {
    if (sectorType === 'fintech_bank' || sectorType === 'health_pharma' || dataSubjectCount === 'high' || processesSensitiveData) {
      return {
        tier: "Data Controller of Major Importance (Ultra-High / Extra-High Significance)",
        statutoryDuty: "Mandatory statutory registration with NDPC, Annual DPCO Audit Filing by March 15, Mandatory Appointment of Certified DPO, and Mandatory DPIA prior to new processing operations.",
        badgeColor: "bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 border-purple-300 dark:border-purple-800"
      };
    }
    if (dataSubjectCount === 'med' || crossBorderTransfers) {
      return {
        tier: "Data Controller of Ordinary Importance (Standard Significance)",
        statutoryDuty: "Mandatory adherence to NDPA principles, Data Protection Policy documentation, 72-hour breach reporting protocols, and biannual privacy reviews.",
        badgeColor: "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-800"
      };
    }
    return {
      tier: "Standard Data Processor / Micro-Entity",
      statutoryDuty: "Baseline compliance with NDPA statutory rules, internal records of processing activities (ROPA), and employee confidentiality agreements.",
      badgeColor: "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700"
    };
  };

  const dcmiStatus = determineDcmiTier();

  const ndpaPrinciples = [
    {
      title: "Lawfulness, Fairness & Transparency",
      desc: "Personal data must be processed lawfully, fairly, and in a transparent manner in relation to the data subject. Clear privacy notices and explicit legal bases are required.",
      icon: Eye
    },
    {
      title: "Purpose Limitation",
      desc: "Data must be collected for specified, explicit, and legitimate purposes and not further processed in a manner incompatible with those initial purposes.",
      icon: Database
    },
    {
      title: "Data Minimisation (Adequacy)",
      desc: "Data collection must be adequate, relevant, and strictly limited to what is necessary in relation to the purposes for which they are processed.",
      icon: Layers
    },
    {
      title: "Accuracy & Rectification",
      desc: "Personal data must be accurate and kept up to date. Reasonable steps must be taken to erase or rectify inaccurate or outdated data without delay.",
      icon: CheckCircle2
    },
    {
      title: "Storage Limitation",
      desc: "Data must be retained in a form which permits identification of data subjects for no longer than is necessary for the purposes for which it is processed.",
      icon: Activity
    },
    {
      title: "Integrity & Confidentiality (Security)",
      desc: "Data must be processed in a manner ensuring appropriate security, including protection against unauthorized processing, accidental loss, destruction, or damage.",
      icon: Key
    },
    {
      title: "Accountability & Governance",
      desc: "The data controller is responsible for and must be able to demonstrate verifiable compliance with all data protection principles to the NDPC.",
      icon: ShieldCheck
    }
  ];

  const dataSubjectRights = [
    { name: "Right to be Informed", desc: "Clear, transparent communication regarding how personal data is collected, stored, processed, and shared." },
    { name: "Right of Access", desc: "Statutory right of data subjects to obtain a copy of their personal data and confirmation of ongoing processing activities." },
    { name: "Right to Rectification", desc: "Right to have inaccurate, incomplete, or misleading personal data corrected without undue delay." },
    { name: "Right to Erasure ('Forgotten')", desc: "Right to demand complete deletion of personal data when consent is withdrawn or processing is no longer lawful." },
    { name: "Right to Restrict Processing", desc: "Right to limit the processing of personal data under specific contested accuracy or legal dispute conditions." },
    { name: "Right to Data Portability", desc: "Right to receive personal data in a structured, commonly used, and machine-readable format to transfer to another provider." },
    { name: "Right to Object", desc: "Right to object at any time to data processing based on legitimate interests or direct marketing profiling." },
    { name: "Automated Decision-Making Rights", desc: "Protection against decisions made solely on automated processing (including AI profiling) having legal or significant effects." }
  ];

  const dpcoAuditModules = [
    {
      phase: "Module 1",
      title: "Data Inventory & Mapping of Data Flows",
      desc: "Comprehensive auditing of all ingress, storage, processing, third-party vendor transfers, and egress points across HR, CRM, Cloud DBs, and customer portals."
    },
    {
      phase: "Module 2",
      title: "Legal Basis & Consent Mechanism Audit",
      desc: "Reviewing cookie policies, terms of service, customer opt-in protocols, employment contracts, and third-party Data Processing Agreements (DPAs)."
    },
    {
      phase: "Module 3",
      title: "Technical & Cybersecurity Controls Review",
      desc: "Auditing database encryption standards (AES-256, TLS 1.3), Multi-Factor Authentication (MFA), role-based access control (RBAC), and vulnerability management."
    },
    {
      phase: "Module 4",
      title: "Data Protection Impact Assessment (DPIA)",
      desc: "Conducting rigorous risk assessments for high-risk data processing operations, biometric databases, AI models, and cross-border transfer pipelines."
    },
    {
      phase: "Module 5",
      title: "Statutory NDPC Regulatory Filing & Certificate",
      desc: "Drafting the official statutory Data Protection Audit Report (CAR), submitting returns to the Nigeria Data Protection Commission (NDPC), and securing the Compliance Certificate."
    }
  ];

  const dpFaqs = [
    {
      q: "What is the Nigeria Data Protection Act (NDPA) 2023 and who is regulated?",
      a: "Signed into law in June 2023, the Nigeria Data Protection Act (NDPA) is the overarching data privacy legislation in Nigeria, establishing the Nigeria Data Protection Commission (NDPC) as the regulatory authority. It applies to all data controllers and processors domiciled, operating, or processing the personal data of data subjects residing in Nigeria. All organizations handling customer, employee, or third-party personal data are legally bound by its provisions."
    },
    {
      q: "What is a Data Protection Compliance Organization (DPCO) and why do you need one?",
      a: "A Data Protection Compliance Organization (DPCO) is an entity licensed and authorized by the Nigeria Data Protection Commission (NDPC) to conduct statutory data protection audits, provide advisory services, train organizations, and submit annual audit returns on behalf of data controllers. Under the NDPA, statutory compliance audit reports submitted to the NDPC must be conducted and endorsed by a licensed DPCO like IEMA Standards Limited."
    },
    {
      q: "What are the penalties for non-compliance under the NDPA 2023?",
      a: "The NDPA 2023 empowers the NDPC to impose substantial financial sanctions and criminal penalties. For Data Controllers of Major Importance (DCMI), fines can reach up to ₦10,000,000 or 2% of the entity's annual gross revenue from the preceding financial year (whichever is greater). In addition, convicted corporate officers face imprisonment of up to 1 year, and data subjects may claim uncapped civil compensation for damages."
    },
    {
      q: "What is a Data Protection Impact Assessment (DPIA) and when is it mandatory?",
      a: "A DPIA is a formal risk evaluation process designed to identify and minimize privacy risks associated with data processing activities. Under Section 28 of the NDPA 2023, a DPIA is legally mandatory prior to launching any processing activity that involves high risks to the rights and freedoms of individuals—such as processing biometric data, deploying automated AI decision systems, large-scale health records, or pervasive public monitoring."
    },
    {
      q: "What are the statutory rules for reporting a data breach to the NDPC?",
      a: "Under Section 40 of the NDPA 2023, where a personal data breach occurs that is likely to result in a risk to the rights and freedoms of individuals, the data controller must notify the NDPC within 72 hours of becoming aware of the breach. Furthermore, if the breach is likely to result in high risk (e.g., identity theft, financial fraud, exposure of sensitive health data), the affected data subjects must be notified immediately in clear, plain language."
    },
    {
      q: "What services does IEMA Standards provide as a Data Protection Partner?",
      a: "IEMA Standards provides comprehensive privacy lifecycle support: 1) Annual NDPA/NDPR Compliance Audits and official NDPC filings, 2) External Data Protection Officer (DPO-as-a-Service) retainership, 3) Data Protection Impact Assessments (DPIA), 4) Drafting Data Privacy Policies, Consent Frameworks, and third-party Data Processing Agreements (DPAs), 5) 72-Hour Data Breach Incident Response & Forensic Advisory, and 6) Executive & Staff Privacy Awareness Certification."
    }
  ];

  return (
    <div className="space-y-12 animate-fadeIn text-slate-900 dark:text-slate-100">
      
      {/* Executive Hero Intro */}
      <div className="bg-gradient-to-br from-[#0B1739] via-[#0E2A47] to-[#1E1B4B] text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold border border-purple-500/30">
            <Lock className="w-4 h-4 text-purple-400" />
            <span>NDPC Licensed Data Protection Compliance Organization (DPCO)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white leading-tight">
            Nigeria Data Protection Act (NDPA) & GDPR Audits & Advisory
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            Under the NDPA 2023, data controllers and processors are legally required to conduct comprehensive data protection audits, maintain records of processing activities (ROPA), execute Data Protection Impact Assessments (DPIA), and file annual statutory compliance returns with the Nigeria Data Protection Commission (NDPC).
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <span>File Statutory NDPA Audit</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <span>Retain External DPO</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 7 Core Principles of NDPA */}
      <div className="space-y-6">
        <div className="border-l-4 border-purple-500 pl-4">
          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">Statutory Foundation</span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            The 7 Principles of Lawful Data Processing (NDPA 2023)
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
            Every data processing pipeline—from employee databases to client e-commerce platforms—must satisfy the seven fundamental pillars defined under Section 24 of the Nigeria Data Protection Act:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {ndpaPrinciples.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="bg-white dark:bg-[#0E2A47] p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 hover:border-purple-500/50 transition-colors flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 w-fit border border-purple-200 dark:border-purple-800/60">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">{item.title}</h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Audited Clause
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive DCMI Status Assessment */}
      <div className="bg-gradient-to-r from-slate-900 via-[#0B1739] to-[#0E2A47] text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Interactive Compliance Classifier</span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">NDPC Data Controller of Major Importance (DCMI) Assessment</h3>
          </div>
          <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700 max-w-sm text-right shrink-0">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Assessed Classification</span>
            <span className="text-xs font-extrabold text-purple-300 block mt-0.5">
              {dcmiStatus.tier}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-xs">
          <div className="space-y-2">
            <label className="font-bold text-slate-300">Industry / Sector Profile:</label>
            <select
              value={sectorType}
              onChange={(e) => setSectorType(e.target.value as any)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-purple-500"
            >
              <option value="fintech_bank">Banking, Fintech, Insurance & Capital Markets</option>
              <option value="health_pharma">Healthcare, Hospitals, HMOs & Pharma</option>
              <option value="ecommerce_retail">E-Commerce, Aviation, Telecoms & Logistics</option>
              <option value="general">Manufacturing, General Services & Real Estate</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-300">Active Data Subjects Managed:</label>
            <select
              value={dataSubjectCount}
              onChange={(e) => setDataSubjectCount(e.target.value as any)}
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-2.5 text-white focus:outline-none focus:border-purple-500"
            >
              <option value="high">&gt; 10,000 individuals (Customers/Staff)</option>
              <option value="med">1,000 - 10,000 individuals</option>
              <option value="low">&lt; 1,000 individuals</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-300">Sensitive Data (Biometrics/Health/Financials):</label>
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setProcessesSensitiveData(true)}
                className={`flex-1 py-2 px-2 rounded-xl font-bold border transition-colors ${processesSensitiveData ? 'bg-purple-600 text-white border-purple-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                Yes (High Risk)
              </button>
              <button
                type="button"
                onClick={() => setProcessesSensitiveData(false)}
                className={`flex-1 py-2 px-2 rounded-xl font-bold border transition-colors ${!processesSensitiveData ? 'bg-purple-600 text-white border-purple-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                No (Standard)
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-300">Cross-Border Cloud/Vendor Transfers:</label>
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setCrossBorderTransfers(true)}
                className={`flex-1 py-2 px-2 rounded-xl font-bold border transition-colors ${crossBorderTransfers ? 'bg-purple-600 text-white border-purple-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                Yes (AWS/GCP/Global)
              </button>
              <button
                type="button"
                onClick={() => setCrossBorderTransfers(false)}
                className={`flex-1 py-2 px-2 rounded-xl font-bold border transition-colors ${!crossBorderTransfers ? 'bg-purple-600 text-white border-purple-400' : 'bg-slate-800 text-slate-400 border-slate-700'}`}
              >
                Domestic Only
              </button>
            </div>
          </div>
        </div>

        <div className="p-4 bg-purple-950/40 rounded-2xl border border-purple-800/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-purple-300">Statutory Obligation Summary:</span>
            <p className="text-xs text-slate-300">{dcmiStatus.statutoryDuty}</p>
          </div>
          <a
            href="https://crmops.iemacert.com/request-quote.php"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DC2626] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shrink-0 transition-colors shadow"
          >
            <span>Commission DPCO Audit</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 8 Data Subject Fundamental Rights */}
      <div className="bg-slate-100 dark:bg-[#0A192F] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-6">
        <div>
          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">Enforceable Rights</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">
            8 Data Subject Fundamental Rights Under the NDPA 2023
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            Organizations must establish automated workflows and Subject Access Request (SAR) standard operating procedures to honor these 8 statutory rights within 30 days:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {dataSubjectRights.map((r, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0E2A47] p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-2 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded-md">Right #{idx + 1}</span>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-1.5">{r.name}</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{r.desc}</p>
              </div>
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <Check className="w-3 h-3" /> Audited in DPCO Audit
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The 5 DPCO Audit Modules */}
      <div className="space-y-6">
        <div className="border-l-4 border-purple-500 pl-4">
          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">Audit Lifecycle</span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            The IEMA Standards DPCO Regulatory Audit Lifecycle
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
            From data mapping through technical penetration verification and formal filing before the Nigeria Data Protection Commission (NDPC):
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {dpcoAuditModules.map((m, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0E2A47] p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 flex flex-col justify-between hover:border-purple-500/50 transition-colors">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-950 px-2.5 py-1 rounded-md">{m.phase}</span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{m.title}</h4>
                <p className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">{m.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-3.5 h-3.5" /> DPCO Certified
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* External DPO Retainership & 72-Hour Breach Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#0E2A47] p-7 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 rounded-2xl border border-purple-200 dark:border-purple-800">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">External DPO-as-a-Service Retainership</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Statutory Certified Compliance Officer</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Avoid the overhead of a full-time executive by retaining IEMA Standards as your dedicated Data Protection Officer (DPO). We oversee ongoing privacy assessments, manage customer SAR requests, advise the board, and serve as your official primary liaison with the NDPC.
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Full DPO representation before NDPC & international regulators</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Drafting & reviewing third-party Data Processing Agreements (DPAs)</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" /> Quarterly privacy compliance health checks & management briefings</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-[#0E2A47] p-7 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 rounded-2xl border border-red-200 dark:border-red-800">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">72-Hour Data Breach Incident Management</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">Section 40 NDPA Statutory Protocols</p>
            </div>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            In the event of a security breach, ransomware attack, or unauthorized data leakage, our rapid-response forensic team steps in within hours to contain the incident, evaluate data subject risk exposure, and draft statutory notifications to the NDPC within the strict 72-hour window.
          </p>
          <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" /> Emergency breach triage & forensic root-cause containment</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" /> Statutory 72-hour formal NDPC regulatory notification filing</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0" /> Affected data subject notification & crisis communication support</li>
          </ul>
        </div>
      </div>

      {/* Data Protection FAQs */}
      <div className="space-y-4">
        <div className="border-l-4 border-purple-500 pl-4">
          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">Expert Knowledge Base</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">
            Frequently Asked Questions: NDPA, GDPR & Privacy Governance
          </h3>
        </div>

        <div className="space-y-3">
          {dpFaqs.map((faq, idx) => (
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
                  <ChevronUp className="w-4 h-4 text-purple-500 shrink-0" />
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
