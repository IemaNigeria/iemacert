import React, { useState } from 'react';
import { 
  FileCheck2, ShieldCheck, Award, CheckCircle2, 
  ArrowRight, Download, Check, FileText,
  ExternalLink, Eye, BookOpen, X, CheckCheck
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { downloadIsoHandbookPdf } from '../utils/handbookDownloader';

interface OurApproachPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export const OurApproachPage: React.FC<OurApproachPageProps> = ({ onNavigate }) => {
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

  const approachSteps = [
    {
      step: '01',
      title: 'Pre-Assessment & Operating Environment Review',
      description: 'A pre-assessment of all operating environments across client locations to determine their varying operating statuses and to review existing standard operating documents for adequacy and standard maturity level.'
    },
    {
      step: '02',
      title: 'Initial Document Review',
      description: 'Initial document review to assess the availability and adequacy of standard documents supporting the intended certification.'
    },
    {
      step: '03',
      title: 'Substantive Standard Audit',
      description: 'Substantive standard audit of company processes, mapping them to desired ISO clauses to identify variances and non-conformities.'
    },
    {
      step: '04',
      title: 'Gap Analysis & Corrective Action Implementation',
      description: 'Gap analysis, non-conformance reporting, and collaboration with the client’s team to implement standard corrective actions and test process nodes accordingly.'
    },
    {
      step: '05',
      title: 'Certification Audit (Stage 1 & Stage 2)',
      description: 'Stage 1 audit to determine process alignment with ISO requirements, followed by Stage 2 on-site audit to ensure operational conformity and that non-conformities are adequately addressed.'
    },
    {
      step: '06',
      title: 'Staff Awareness Training',
      description: 'Staff awareness training on the required standards to ensure understanding of quality policies, operational procedures, and compliance culture across the organization.'
    },
    {
      step: '07',
      title: 'Standard Audit Reports & Certification Sign-Offs',
      description: 'Development and issuance of standard audit reports and corrective actions, leading to independent technical review and official certification sign-offs.'
    }
  ];

  return (
    <div className="space-y-12 pb-16 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      
      {/* SEO Head */}
      <SeoHead
        title="Our 4-Stage Audit Methodology | IEMA Standards"
        description="Learn our structured 4-stage ISO certification process: preliminary assessment, documentation review, substantive audit, and accredited certification issuance."
        canonicalPath="approach"
        keywords={[
          'our approach iemacert',
          'iso certification approach',
          'iso audit process nigeria',
          'pre-assessment iso audit',
          'substantive standard audit',
          'iso certification handbook download'
        ]}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'About Us', page: 'about' },
          { label: 'Our 4-Stage Approach', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Hero Header Banner */}
      <section className="bg-[#070F2B] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600" 
            alt="IEMA Standards Approach" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold border border-amber-500/30">
            <Award className="w-4 h-4 text-amber-400" />
            <span>EGAC Accredited Certification Body • CAB 12203</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            Our Approach
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
            At IEMACERT, our approach to ISO certification and compliance services is a structured, value-adding process designed to ensure your organization meets international standards seamlessly.
          </p>
        </div>
      </section>

      {/* Main Content: Step by Step Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-white dark:bg-[#0E2A47] rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-xl space-y-8 text-slate-900 dark:text-white">
          <div className="space-y-2 border-b border-slate-100 dark:border-slate-700 pb-4">
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 dark:text-white">
              Our Step-by-Step Approach Includes:
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Our systematic methodology ensures thorough audit rigor, transparent communication, and international compliance across every phase.
            </p>
          </div>

          {/* Steps List */}
          <div className="space-y-4">
            {approachSteps.map((step) => (
              <div 
                key={step.step}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-[#0B1E38] border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-amber-500 transition-colors"
              >
                <span className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-black flex items-center justify-center shrink-0 text-sm shadow">
                  {step.step}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Downloadable ISO Certification Handbook */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0E2A47] rounded-3xl p-8 sm:p-10 border border-slate-200 dark:border-slate-700 shadow-xl space-y-6 text-slate-900 dark:text-white">
          <div className="border-b border-slate-100 dark:border-slate-700 pb-4 space-y-1">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              Official Publication
            </span>
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-slate-900 dark:text-white pt-2">
              ISO Certification Handbook
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Download the official IEMA Management System Certification Handbook containing complete guidelines on certification procedures, audit protocols, and requirements.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-[#0B1E38] p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-2xl border border-amber-500/30 shrink-0">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                    PP168
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">PDF Document</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  IEMA Management System Certification Handbook
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-xl">
                  Comprehensive guide to IEMA management system certification procedures, audit protocols, client obligations, and surveillance cycles under EGAC / IAF MLA accreditation.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0">
              <button
                onClick={() => setShowPreviewModal(true)}
                className="px-4 py-2.5 rounded-xl bg-white dark:bg-[#0E2A47] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4 text-amber-500" />
                <span>Preview</span>
              </button>

              <a
                href="/pdf/Certificate-Handbook.pdf"
                download="Certificate-Handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  downloadIsoHandbookPdf();
                }}
                className="flex-1 md:flex-none bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shadow transition-all active:scale-95 cursor-pointer no-underline"
              >
                <Download className="w-4 h-4 text-slate-950" />
                <span>ISO certification handbook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {showPreviewModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setShowPreviewModal(false)}
        >
          <div 
            className="bg-white dark:bg-[#070F2B] w-full max-w-2xl rounded-2xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-slate-900 dark:text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 bg-[#0E2A47] text-white flex items-center justify-between border-b border-slate-700">
              <div className="space-y-1">
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  PP168 • Official Publication
                </span>
                <h3 className="text-lg font-bold font-serif text-white mt-1">
                  IEMA Management System Certification Handbook
                </h3>
              </div>
              <button
                onClick={() => setShowPreviewModal(false)}
                className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-4 flex-1 text-xs sm:text-sm">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                This handbook establishes the policies, processes, and general requirements governing the audit and certification of management systems by IEMA Standards Limited in compliance with ISO/IEC 17021-1 and under the accreditation of the Egyptian Accreditation Council (EGAC).
              </p>

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Key Topics Included in Handbook:
                </h4>
                <ul className="space-y-2 text-slate-700 dark:text-slate-200">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Accreditation Scope &amp; IAF MLA Mutual Recognition Framework</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Stage 1 Document Adequacy and Stage 2 Substantive On-Site Audit Procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Non-Conformity Categorization, Root Cause Analysis &amp; Corrective Actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Surveillance Audits, Scope Extension, and Re-certification Cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Rules Governing the Use of IEMA and EGAC Certification Marks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Impartiality, Appeals, and Dispute Resolution Protocols</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 dark:bg-[#0E2A47] border-t border-slate-200 dark:border-slate-700 flex items-center justify-between gap-4">
              <button
                onClick={() => setShowPreviewModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              >
                Close
              </button>

              <a
                href="/pdf/Certificate-Handbook.pdf"
                download="Certificate-Handbook.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  setShowPreviewModal(false);
                  downloadIsoHandbookPdf();
                }}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2 rounded-xl text-xs flex items-center gap-2 shadow cursor-pointer active:scale-95 no-underline"
              >
                <Download className="w-4 h-4" />
                <span>Download Handbook (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Contact / Quote CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#070F2B] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-black font-serif text-white">
              Ready to Begin Your Certification Journey?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Get in touch with our team to discuss your management system requirements, audit timelines, or request an official quote.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-6 py-3 rounded-full text-xs sm:text-sm transition-all shadow-lg hover:scale-105"
            >
              <span>Request an Audit Quote</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="border border-slate-600 hover:border-amber-400 text-slate-200 hover:text-amber-400 font-bold px-5 py-3 rounded-full text-xs sm:text-sm transition-all cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
