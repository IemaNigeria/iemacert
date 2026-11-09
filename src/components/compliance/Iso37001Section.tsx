import React, { useState } from 'react';
import { 
  Scale, ShieldCheck, Award, FileCheck2, CheckCircle2, 
  AlertTriangle, ArrowRight, ExternalLink, Download, 
  HelpCircle, ChevronDown, ChevronUp, Check, Building2, 
  Users, Lock, DollarSign, Activity, FileText, Globe
} from 'lucide-react';

interface Iso37001SectionProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const Iso37001Section: React.FC<Iso37001SectionProps> = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeClause, setActiveClause] = useState<string>('c8');

  // Interactive Readiness Scorecard
  const [hasPolicy, setHasPolicy] = useState<boolean>(true);
  const [hasComplianceFunction, setHasComplianceFunction] = useState<boolean>(false);
  const [hasDueDiligence, setHasDueDiligence] = useState<boolean>(false);
  const [hasWhistleblowing, setHasWhistleblowing] = useState<boolean>(true);
  const [hasGiftRegister, setHasGiftRegister] = useState<boolean>(false);

  const calculateAbmsScore = () => {
    let score = 20;
    if (hasPolicy) score += 20;
    if (hasComplianceFunction) score += 25;
    if (hasDueDiligence) score += 20;
    if (hasWhistleblowing) score += 15;
    if (hasGiftRegister) score += 20;
    return Math.min(100, score);
  };

  const abmsScore = calculateAbmsScore();

  const iso37001Clauses = [
    {
      id: 'c4',
      number: "Clause 4",
      title: "Context of the Organization & Bribery Risk Assessment",
      desc: "Identifying internal and external corruption risks, regulatory jurisdictions, joint ventures, and conducting systematic enterprise-wide Bribery Risk Assessments (BRAs).",
      keyRequirements: [
        "Determining organizational boundaries and ABMS scope",
        "Assessing corruption exposure across government touchpoints & procurement",
        "Documented Bribery Risk Assessment methodology with risk-scoring criteria",
        "Periodic reassessment of high-risk operational divisions"
      ]
    },
    {
      id: 'c5',
      number: "Clause 5",
      title: "Leadership, Governing Body Commitment & Policy",
      desc: "Establishing ultimate governing body (Board) and top management accountability, publishing a zero-tolerance Anti-Bribery Policy, and assigning an independent Anti-Bribery Compliance Function.",
      keyRequirements: [
        "Board of Directors formal anti-bribery resolution and oversight",
        "Zero-tolerance Anti-Bribery Policy communicated in multiple languages",
        "Appointment of an independent Anti-Bribery Compliance Function with authority",
        "Direct reporting line from Compliance Officer directly to Board Audit Committee"
      ]
    },
    {
      id: 'c6',
      number: "Clause 6",
      title: "Planning & Anti-Bribery Objectives",
      desc: "Establishing measurable anti-bribery objectives, risk mitigation action plans, and resource allocations integrated into standard business operating budgets.",
      keyRequirements: [
        "Measurable anti-bribery performance indicators (KPIs)",
        "Resource allocation for independent audits and screening tools",
        "Action plans to mitigate identified high bribery risk areas",
        "Integration into annual corporate strategic plans"
      ]
    },
    {
      id: 'c7',
      number: "Clause 7",
      title: "Support, HR Vetting, Training & Whistleblowing",
      desc: "Enforcing pre-employment integrity screening, mandatory anti-bribery training for high-risk personnel, and establishing secure, non-retaliatory whistleblowing hotlines.",
      keyRequirements: [
        "Employment screening and conflict of interest declarations",
        "Mandatory tailored anti-bribery training for procurement, sales & executives",
        "Secure, anonymous whistleblowing reporting mechanisms",
        "Guaranteed protection from retaliation for whistleblowers"
      ]
    },
    {
      id: 'c8',
      number: "Clause 8",
      title: "Operation: Due Diligence, Financial & Non-Financial Controls",
      desc: "The core operational engine of ABMS: conducting third-party vendor due diligence, enforcing dual-signature financial controls, and governing gifts, hospitality, donations, and facilitation payments.",
      keyRequirements: [
        "Risk-based due diligence on contractors, suppliers, agents & intermediaries",
        "Strict prohibition of facilitation payments (kickbacks/speed money)",
        "Gifts, hospitality, entertainment & sponsorship register with threshold limits",
        "Dual-authorization financial controls, segregation of duties, and audit trails",
        "Pre-award procurement vetting and non-financial operational controls"
      ]
    },
    {
      id: 'c9',
      number: "Clause 9",
      title: "Performance Evaluation, ABMS Internal Audits & Review",
      desc: "Conducting regular internal ABMS audits, independent investigative reviews of reported violations, and formal top management and governing body reviews.",
      keyRequirements: [
        "Annual internal anti-bribery management system audits",
        "Documented investigation protocols for suspected bribery incidents",
        "Independent reporting of audit results to the Board of Directors",
        "Periodic review of third-party contract compliance"
      ]
    },
    {
      id: 'c10',
      number: "Clause 10",
      title: "Improvement, Non-Conformity & Corrective Actions",
      desc: "Root-cause forensic analysis of identified anti-bribery failures, enforcing corrective disciplinary measures, and continuously hardening organizational controls.",
      keyRequirements: [
        "Root cause analysis of compliance breakdowns and internal red flags",
        "Implementation of corrective actions to prevent recurrence",
        "Disciplinary actions up to contract termination and law enforcement reporting",
        "Continual updating of risk registers and internal control procedures"
      ]
    }
  ];

  const legalFrameworks = [
    {
      name: "United Kingdom Bribery Act 2010 (UKBA)",
      scope: "Extraterritorial reach criminalizing commercial bribery, bribery of foreign public officials, and failure of commercial organizations to prevent bribery worldwide.",
      defense: "Adequate Procedures Defense: Having an accredited ISO 37001 system serves as the primary legal defense against corporate criminal liability."
    },
    {
      name: "United States Foreign Corrupt Practices Act (FCPA)",
      scope: "Enforced by DOJ and SEC, prohibiting corrupt payments to foreign officials to obtain or retain business globally. Levies billions in corporate fines.",
      defense: "Compliance Program Credit: US DOJ explicitly credits ISO 37001-aligned compliance programs during deferred prosecution negotiations."
    },
    {
      name: "Nigerian ICPC & EFCC Acts",
      scope: "Corrupt Practices and Other Related Offences Act (ICPC) & Economic and Financial Crimes Commission Act (EFCC), prosecuting bribery in public and private transactions.",
      defense: "Statutory Defense: Documented anti-bribery controls demonstrate lack of corporate intent and protect corporate directors."
    },
    {
      name: "Public Procurement Act 2007 (BPP)",
      scope: "Regulates federal government procurement in Nigeria. Requires bidders to provide certified anti-corruption declarations and compliance proofs.",
      defense: "Tender Prequalification: ISO 37001 certified bidders receive maximum compliance scoring during major multi-billion Naira government tenders."
    }
  ];

  const abmsFaqs = [
    {
      q: "What is ISO 37001:2016 and why is it essential for commercial organizations?",
      a: "ISO 37001:2016 is the internationally recognized benchmark standard for Anti-Bribery Management Systems (ABMS). It specifies requirements and provides guidance for establishing, implementing, maintaining, reviewing, and improving an anti-bribery management system. Certification proves to international partners, governments, investors, and regulators that your organization has established robust, world-class controls to prevent, detect, and address bribery and corruption."
    },
    {
      q: "How does ISO 37001 protect companies under the UK Bribery Act and US FCPA?",
      a: "Both the UK Bribery Act (Section 7) and the US Foreign Corrupt Practices Act (FCPA) penalize companies for acts of bribery committed by employees, agents, or third-party intermediaries anywhere in the world. Under the UKBA, the only statutory defense is proving that the organization had in place 'Adequate Procedures' designed to prevent bribery. An accredited ISO 37001 certification provides internationally verified evidence that adequate procedures are active and effective."
    },
    {
      q: "What are Facilitation Payments and how does ISO 37001 treat them?",
      a: "Facilitation payments (often termed 'speed money' or 'grease payments') are unofficial, small payments made to low-level public officials to secure or expedite the performance of a routine, non-discretionary governmental action (such as customs clearance, visa processing, or utility connections). ISO 37001 strictly prohibits facilitation payments, requiring organizations to eliminate them entirely and establish clear escalation channels for extortion attempts."
    },
    {
      q: "What is the role of an Anti-Bribery Compliance Function under ISO 37001?",
      a: "Clause 5.3.2 of ISO 37001 requires the governing body and top management to assign an Anti-Bribery Compliance Function. This person or committee must have appropriate competence, status, authority, and complete independence. They must have direct, unimpeded access to the Board of Directors/Governing Body to report anti-bribery performance and escalate suspected violations without interference from operational executives."
    },
    {
      q: "What is the certification process for ISO 37001 with IEMA Standards?",
      a: "IEMA Standards delivers accredited ISO 37001 certification through our recognized audit protocol: 1) Initial Scope Definition & Gap Analysis, 2) Stage 1 Documentation Audit (evaluating anti-bribery policies, risk assessment registers, and compliance structure), 3) Stage 2 On-Site Implementation Audit (sampling high-risk procurement contracts, financial disbursements, gifts registers, and conducting confidential staff interviews), 4) Certification Decision & Issuance of 3-Year EGAC/IAF Accredited Certificate, and 5) Annual Surveillance Audits in Years 2 and 3."
    }
  ];

  return (
    <div className="space-y-12 animate-fadeIn text-slate-900 dark:text-slate-100">
      
      {/* Executive Hero Intro */}
      <div className="bg-gradient-to-br from-[#1E1B4B] via-[#0A192F] to-[#070F2B] text-white p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold border border-amber-500/30">
            <Award className="w-4 h-4 text-amber-400" />
            <span>EGAC & IAF MLA Accredited Anti-Bribery Certification Body</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white leading-tight">
            ISO 37001:2016 Anti-Bribery Management Systems (ABMS)
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            ISO 37001:2016 empowers organizations to prevent, detect, and resolve bribery risks across global operations, public procurement tenders, joint venture partnerships, and complex supply chain networks in compliance with the UK Bribery Act, US FCPA, and Nigerian anti-corruption laws.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-red-700 text-white px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 shadow-lg transition-transform hover:scale-105"
            >
              <span>Get ISO 37001 Certification Quote</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => onNavigate('certifications', { standardId: 'iso-37001' })}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
            >
              <span>View ISO 37001 Standard Specs</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Global Anti-Corruption Legal Defense Matrix */}
      <div className="space-y-6">
        <div className="border-l-4 border-amber-500 pl-4">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Global Legal Shield</span>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            International Anti-Corruption Legal Frameworks
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-3xl">
            ISO 37001 certification provides verifiable evidence of "Adequate Procedures" across the world's most aggressively enforced anti-bribery statutes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {legalFrameworks.map((law, idx) => (
            <div key={idx} className="bg-white dark:bg-[#0E2A47] p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-3 hover:border-amber-500/50 transition-colors">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-800">
                  <Scale className="w-5 h-5" />
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">{law.name}</h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{law.scope}</p>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-xl border border-emerald-200 dark:border-emerald-800 text-[11px] text-emerald-800 dark:text-emerald-300">
                <span className="font-bold">ISO 37001 Defense Impact:</span> {law.defense}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ISO 37001 High-Level Structure Clauses 4-10 Interactive Explorer */}
      <div className="bg-white dark:bg-[#0E2A47] p-8 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-6">
        <div>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Standard Specifications</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">
            ISO 37001:2016 Clauses 4 Through 10 Deep Breakdown
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
            Click through each clause of the ISO Annex SL High-Level Structure to view mandatory audit verification points:
          </p>
        </div>

        {/* Clause Selector Tabs */}
        <div className="flex flex-wrap gap-2">
          {iso37001Clauses.map((clause) => (
            <button
              key={clause.id}
              onClick={() => setActiveClause(clause.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeClause === clause.id
                  ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                  : 'bg-slate-100 dark:bg-[#0A192F] text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-[#12365B]'
              }`}
            >
              {clause.number}
            </button>
          ))}
        </div>

        {/* Active Clause Details Display */}
        {(() => {
          const clause = iso37001Clauses.find(c => c.id === activeClause) || iso37001Clauses[4];
          return (
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0A192F] border border-slate-200 dark:border-slate-800 space-y-4 animate-fadeIn">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-600 dark:text-amber-400">{clause.number}</span>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{clause.title}</h4>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300 rounded-full border border-amber-200 dark:border-amber-800/80 w-fit">
                  Accredited Audit Scope
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {clause.desc}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-900 dark:text-white">Lead Auditor Verification Points:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {clause.keyRequirements.map((req, rIdx) => (
                    <div key={rIdx} className="p-2.5 bg-white dark:bg-[#0E2A47] rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Interactive Anti-Bribery Readiness Scorecard */}
      <div className="bg-gradient-to-r from-slate-900 via-[#1E1B4B] to-[#0A192F] text-white p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Self-Assessment Tool</span>
            <h3 className="text-xl sm:text-2xl font-bold font-serif text-white">ISO 37001 Anti-Bribery Readiness Scorecard</h3>
          </div>
          <div className="p-3 bg-slate-800/80 rounded-2xl border border-slate-700 text-right shrink-0">
            <span className="text-[10px] text-slate-400 uppercase font-bold block">Audit Readiness</span>
            <span className={`text-xl font-black ${abmsScore > 75 ? 'text-emerald-400' : abmsScore > 50 ? 'text-amber-400' : 'text-red-400'}`}>
              {abmsScore}% — {abmsScore > 75 ? 'Stage 1 Ready' : abmsScore > 50 ? 'Gap Remediation Needed' : 'Baseline Formulation Needed'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2">
            <span className="font-bold text-slate-300 block">Anti-Bribery Policy & Code of Conduct:</span>
            <button
              type="button"
              onClick={() => setHasPolicy(!hasPolicy)}
              className={`w-full py-2 rounded-lg font-bold border transition-colors ${hasPolicy ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-700 text-slate-400 border-slate-600'}`}
            >
              {hasPolicy ? '✓ Board Approved Policy' : '✗ Missing / Informal'}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2">
            <span className="font-bold text-slate-300 block">Independent Compliance Function:</span>
            <button
              type="button"
              onClick={() => setHasComplianceFunction(!hasComplianceFunction)}
              className={`w-full py-2 rounded-lg font-bold border transition-colors ${hasComplianceFunction ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-700 text-slate-400 border-slate-600'}`}
            >
              {hasComplianceFunction ? '✓ Formally Designated' : '✗ No Dedicated Role'}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2">
            <span className="font-bold text-slate-300 block">Third-Party Vendor Due Diligence:</span>
            <button
              type="button"
              onClick={() => setHasDueDiligence(!hasDueDiligence)}
              className={`w-full py-2 rounded-lg font-bold border transition-colors ${hasDueDiligence ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-700 text-slate-400 border-slate-600'}`}
            >
              {hasDueDiligence ? '✓ Standardized Vetting' : '✗ Ad-Hoc / None'}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2">
            <span className="font-bold text-slate-300 block">Confidential Whistleblowing Channel:</span>
            <button
              type="button"
              onClick={() => setHasWhistleblowing(!hasWhistleblowing)}
              className={`w-full py-2 rounded-lg font-bold border transition-colors ${hasWhistleblowing ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-700 text-slate-400 border-slate-600'}`}
            >
              {hasWhistleblowing ? '✓ Secure Hotline Active' : '✗ No Whistleblowing Desk'}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 space-y-2">
            <span className="font-bold text-slate-300 block">Gifts & Hospitality Register:</span>
            <button
              type="button"
              onClick={() => setHasGiftRegister(!hasGiftRegister)}
              className={`w-full py-2 rounded-lg font-bold border transition-colors ${hasGiftRegister ? 'bg-emerald-500 text-slate-950 border-emerald-400' : 'bg-slate-700 text-slate-400 border-slate-600'}`}
            >
              {hasGiftRegister ? '✓ Enforced Gift Register' : '✗ No Gift Register'}
            </button>
          </div>

          <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700 flex items-end">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#DC2626] hover:bg-red-700 text-white py-2 px-3 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow"
            >
              <span>Book Certification Audit</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ISO 37001 FAQs */}
      <div className="space-y-4">
        <div className="border-l-4 border-amber-500 pl-4">
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">Expert Knowledge Base</span>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white font-serif">
            Frequently Asked Questions: ISO 37001 Anti-Bribery Certification
          </h3>
        </div>

        <div className="space-y-3">
          {abmsFaqs.map((faq, idx) => (
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
