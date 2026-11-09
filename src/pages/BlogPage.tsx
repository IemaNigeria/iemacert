import React, { useState } from 'react';
import { 
  BookOpen, Calendar, User, ArrowRight, Search, 
  ExternalLink, X, CheckCircle2, ShieldCheck, Sparkles, Tag, ArrowUpRight 
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import articleIso17020Image from '../assets/images/regenerated_image_1790563435645.jpg';
import article1Image from '../assets/images/regenerated_image_1787147659716.jpg';
import article2Image from '../assets/images/regenerated_image_1787148784888.jpg';
import article3Image from '../assets/images/regenerated_image_1787579974079.jpg';

interface BlogPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

export interface Article {
  id: number;
  title: string;
  keyword: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  summary: string;
  extendedParagraph?: string;
  keyTakeaways?: string[];
  nigeriaRelevance?: string;
  image: string;
  linkedinUrl: string;
  isFeatured?: boolean;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalArticle, setActiveModalArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      id: 1,
      title: "What the New ISO/IEC 17020:2026 Means for Inspection Bodies",
      keyword: "what the new iso iec 17020 2026 means for inspection bodies transition requirements",
      date: "September 2026",
      author: "Eng. Raymond Smith & IEMA Technical Inspection Directorate",
      category: "Inspection & Engineering",
      readTime: "8 to 10 min read",
      summary: "Published to supersede the 2012 edition, the new ISO/IEC 17020:2026 standard introduces landmark revisions for inspection bodies worldwide. It streamlines independence classifications, embeds pervasive risk-based thinking, and establishes rigorous conformity criteria for digital inspection platforms, AI tools, and remote evaluations.",
      extendedParagraph: "For inspection bodies in Nigeria—particularly those operating in oil and gas, lifting gear, pressure vessels, non-destructive testing (NDT), and civil engineering—this standard establishes a mandatory three-year transition window ending March 2029. Crucially, the rigid Type A, B, and C taxonomy has been overhauled to prioritize demonstrable impartiality risk governance over formal corporate structure alone.",
      keyTakeaways: [
        "Streamlined Independence Categories: Replacement of traditional Type A/B/C boundaries with an outcome-driven Type A and Non-Type A impartiality governance structure.",
        "Pervasive Risk-Based Thinking: Preventive action clauses are formally replaced with systematic identification and management of operational, impartiality, and result validity risks.",
        "Digital Systems & Software Validation: Explicit mandatory controls for inspection software, remote camera/drone video feeds, sensor networks, and electronic data logging.",
        "Externally Provided Services: Mandatory qualification registers and continuous monitoring for IT providers and calibration subcontractors influencing inspection validity.",
        "3-Year Mandatory Transition: Accreditation bodies begin assessments against the 2026 version, with full global transition required by March 27, 2029."
      ],
      nigeriaRelevance: "Crucial for Nigerian inspection agencies accredited under NiNAS, EGAC, and approved by NUPRC, NMDPRA, and COREN. Prepares NDT service providers and QA/QC inspection firms for oilfield operator audits (Shell, NNPC, Chevron, Dangote) requiring verified alignment with the new 2026 edition.",
      image: articleIso17020Image,
      linkedinUrl: "https://www.linkedin.com/pulse/what-new-isoiec-170202026-means-inspection-bodies-4ejie",
      isFeatured: true,
    },
    {
      id: 2,
      title: "Cyber Threats on the Rise: Here’s Why ISO/IEC 27001 Certification is Non-Negotiable",
      keyword: "cyber threats on the rise why iso iec 27001 certification is non negotiable nigeria ndpa",
      date: "September 2026",
      author: "IEMA Information Security & Cyber Governance Council",
      category: "Cybersecurity & Privacy",
      readTime: "7 to 9 min read",
      summary: "As cyber attacks, ransomware syndicates, phishing campaigns, and third-party supply chain vulnerabilities escalate across West Africa, traditional IT defenses are no longer sufficient. ISO/IEC 27001:2022 provides an internationally recognized, audit-proven Information Security Management System (ISMS) that transforms cybersecurity from a reactive expense into a competitive business asset.",
      extendedParagraph: "In Nigeria's rapidly maturing digital ecosystem, regulatory mandates from the Nigeria Data Protection Act (NDPA 2023) and Central Bank of Nigeria (CBN) Cybersecurity Directives impose heavy fines for breaches. An accredited ISO 27001 certificate gives fintechs, commercial banks, healthcare providers, and enterprise vendors demonstrable proof that customer data, financial records, and operational infrastructure are protected under global best practices.",
      keyTakeaways: [
        "Modernized 93 Control Set: Restructured across 4 domains (Organizational, People, Physical, and Technological), including specific controls for Threat Intelligence (5.7) and Cloud Security (8.23).",
        "Defensible Compliance with NDPA & CBN: Provides structured evidentiary proof required by the Nigeria Data Protection Commission (NDPC) and CBN audit frameworks.",
        "Elimination of Vendor Security Roadblocks: Accelerates B2B enterprise sales cycles by satisfying international enterprise RFPs and tier-1 vendor risk assessments.",
        "Proactive Breach Prevention & Resilience: Institutionalizes rapid incident response protocols, disaster recovery testing, and continuous employee security awareness."
      ],
      nigeriaRelevance: "Essential for Nigerian financial institutions, payment service banks (PSBs), telcos, healthtechs, and government contractors bound by NDPA 2023 statutory obligations and NITDA/NDPC compliance deadlines.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
      linkedinUrl: "https://www.linkedin.com/pulse/cyber-threats-rise-heres-why-isoiec-27001-certification-4sree",
      isFeatured: true,
    },
    {
      id: 3,
      title: "AI is Moving Fast. Governance Needs to Keep Up: Here’s Why ISO/IEC 42001 Matters",
      keyword: "ai moving fast governance needs to keep up iso iec 42001 artificial intelligence management system",
      date: "September 2026",
      author: "IEMA Digital Trust & Artificial Intelligence Taskforce",
      category: "AI & Emerging Tech",
      readTime: "8 to 11 min read",
      summary: "Artificial intelligence is revolutionizing productivity across finance, healthcare, telecommunications, and industrial automation. However, rapid AI adoption without governance introduces severe risks: unvetted Shadow AI, IP leakage, algorithmic bias, model hallucinations, and regulatory liabilities. ISO/IEC 42001:2023 represents the world's premier certifiable Artificial Intelligence Management System (AIMS) standard.",
      extendedParagraph: "Unlike fragmented AI principles or voluntary guidelines, ISO/IEC 42001 delivers a structured, certifiable framework for managing AI responsibly throughout its entire lifecycle—from training data acquisition and model tuning to deployment, monitoring, and decommission. For forward-looking enterprises in Africa and globally, ISO 42001 certification demonstrates that AI innovation is backed by transparency, explainability, safety guardrails, and ethical accountability.",
      keyTakeaways: [
        "First Certifiable AI Standard: An internationally accredited framework specifically crafted for organizations designing, integrating, or utilizing AI systems.",
        "Mitigating 'Shadow AI' Risks: Establishes enterprise policies and controls to prevent unauthorized employee transmission of proprietary data into public AI models.",
        "Algorithmic Transparency & Traceability: Mandates data provenance tracking, model explainability documentation, and bias monitoring across automated workflows.",
        "Continuous AI Risk & Impact Assessments: Embeds structured evaluations of societal, legal, and operational risks before deploying autonomous or generative models.",
        "Human-in-the-Loop Safeguards: Ensures mission-critical decisions remain subject to verified human oversight, intervention, and fail-safe overrides."
      ],
      nigeriaRelevance: "Positions Nigerian software innovators, digital banks, telecommunications operators, and government automation projects ahead of emerging AI regulatory bills and global partner due diligence.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      linkedinUrl: "https://www.linkedin.com/pulse/ai-moving-fast-governance-needs-keep-up-heres-why-hcu1e",
      isFeatured: true,
    },
    {
      id: 4,
      title: "ISO 14001:2026: Here’s What Nigerian Businesses Need to Know",
      keyword: "iso 14001 2026 what nigerian businesses need to know environmental management nesrea nuprc",
      date: "September 2026",
      author: "Esther Onovo & IEMA Environmental Assessment Directorate",
      category: "Environmental & Sustainability",
      readTime: "7 to 9 min read",
      summary: "Environmental sustainability has transitioned from a corporate social responsibility talking point to a decisive commercial requirement. The anticipated ISO 14001:2026 revision modernizes the international Environmental Management System (EMS) benchmark, integrating climate resilience, decarbonization metrics, biodiversity, and circular economy principles into core organizational governance.",
      extendedParagraph: "For Nigerian businesses operating in oil & gas exploration, petrochemicals, manufacturing, mining, and export agriculture, regulatory scrutiny from NESREA, NUPRC (EGASPIN), NMDPRA, and state environmental protection agencies (such as LASEPA) is intensifying. Transitioning to ISO 14001:2026 equips Nigerian enterprises to avoid punitive environmental levies, reduce operational waste and energy costs, and qualify for green financing and multinational supply chains.",
      keyTakeaways: [
        "Climate Change & Resilience Integration: Requires organizations to explicitly evaluate climate impacts and extreme weather vulnerabilities within their environmental context.",
        "Harmony with NESREA & NUPRC Mandates: Streamlines compliance with Nigerian environmental regulations, EIA approvals, and statutory environmental audit reports.",
        "Life-Cycle & Circular Economy Mandate: Expands operational focus beyond facility gates to address sustainable sourcing, raw material recyclability, and post-consumer disposal.",
        "Green Finance & Tender Qualification: Essential prerequisite for securing climate-linked funding from multilateral development banks and participating in global EPC bids."
      ],
      nigeriaRelevance: "Directly impacts oil & gas upstream/midstream operators, manufacturing plants in Lagos/Ogun industrial zones, and civil infrastructure contractors seeking environmental clearances and ESG capital.",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200",
      linkedinUrl: "https://www.linkedin.com/pulse/iso-140012026-here-what-nigerian-businesses-need-dynpe",
      isFeatured: true,
    },
    {
      id: 5,
      title: "What Is ISO Certification and Why Does Your Business Need It?",
      keyword: "what is iso certification and why does your business need it",
      date: "August 18, 2026",
      author: "IEMA Quality Assurance & Lead Technical Team",
      category: "ISO Certification & Standards",
      readTime: "7 to 9 min read",
      summary: "In today's competitive business environment, organizations are expected to demonstrate quality, reliability, safety, compliance, and consistency. Customers, regulators, and business partners increasingly want credible evidence that businesses have effective systems and structured processes in place. ISO certification confirms through independent assessment that an organization meets rigorous international management system standards.",
      extendedParagraph: "Implementing recognized frameworks such as ISO 9001 (Quality), ISO 14001 (Environmental), ISO 45001 (Health & Safety), and ISO/IEC 27001 (Information Security) helps organizations establish clear responsibilities, reduce operational inefficiencies, proactively mitigate risks, and qualify for high-value tenders. Modern business assurance combines accredited certification with on-site technical inspection, testing, and regulatory compliance to build lasting stakeholder confidence.",
      keyTakeaways: [
        "Credible Third-Party Verification: Independent proof that organizational management systems satisfy rigorous international ISO criteria.",
        "Prerequisite for High-Value Contracts: Required by major Nigerian operators including NNPC, Shell, Chevron, and government procurement boards.",
        "Process Efficiency & Defect Reduction: Standardized operating procedures drastically lower rework, operational waste, and client churn.",
        "Multi-Standard Integration: Easily harmonize ISO 9001, 14001, and 45001 under an Integrated Management System (IMS)."
      ],
      nigeriaRelevance: "Essential baseline for Nigerian SMEs and conglomerates seeking NIPEX registration, NCDMB Nigerian Content compliance, and cross-border export trade under AfCFTA.",
      image: article1Image,
      linkedinUrl: "https://www.linkedin.com/pulse/what-iso-certification-why-does-your-business-need-zrs5e",
      isFeatured: false,
    },
    {
      id: 6,
      title: "Why Choosing an Accredited ISO Certification Body Is Critical for International Recognition",
      keyword: "why choosing an accredited iso certification body is critical for international recognition",
      date: "August 15, 2026",
      author: "IEMA Lead Technical & Accreditation Board",
      category: "Accreditation & Trust",
      readTime: "7 to 8 min read",
      summary: "In 2019, a Lagos-based industrial equipment supplier secured what they believed was a major milestone: ISO 9001 certification. Six months later, a European manufacturing partner rejected their supply proposal because the certification body was not accredited by any recognized authority, rendering the certificate meaningless outside Nigeria and forcing costly re-audits.",
      extendedParagraph: "The International Organization for Standardization creates frameworks but never assesses companies or issues certificates. Independent certification bodies do, yet only bodies accredited under the International Accreditation Forum (IAF) Mutual Recognition Arrangement (such as UKAS, ANAB, DAkkS, or EGAC) provide certificates that carry global validity. Without verified accreditation, certificates face scrutiny or rejection in multinational supply chains like Shell, Nestlé, and Unilever.",
      keyTakeaways: [
        "Unaccredited Certificates Carry Zero International Value: Frequently rejected in major global supply chains, international bank letters of credit, and foreign joint ventures.",
        "The Role of IAF MLA: Ensures that accredited certificates issued in one signatory country are automatically recognized across over 100 member nations.",
        "Verify Before You Audit: Always demand proof of the certification body's accreditation certificate number (e.g. EGAC CAB 12203) before signing audit engagements."
      ],
      nigeriaRelevance: "Protects Nigerian businesses from unaccredited 'paper-mill' certifiers, guaranteeing that audits fulfill NNPC, NIPEX, and international supplier pre-qualifications.",
      image: article2Image,
      linkedinUrl: "https://www.linkedin.com/pulse/why-choosing-accredited-iso-certification-critical-fh8te",
      isFeatured: false,
    },
    {
      id: 7,
      title: "The Difference Between ISO Certification and Accreditation: What Every Business Must Know",
      keyword: "difference between iso certification and accreditation",
      date: "August 24, 2026",
      author: "IEMA Lead Technical & Accreditation Board",
      category: "Accreditation & Trust",
      readTime: "6 to 8 min read",
      summary: "While the terms 'ISO certification' and 'ISO accreditation' are frequently used interchangeably in corporate conversations, they refer to fundamentally distinct levels of conformity assessment and regulatory oversight. Confusing the two can lead organizations to purchase unverified certificates that fail international tender criteria and multinational vendor audits.",
      extendedParagraph: "ISO Certification is awarded to an organization by a Conformity Assessment Body (CAB) to confirm that its management system complies with an international standard like ISO 9001, ISO 14001, or ISO 45001. Accreditation, however, is the formal third-party endorsement of the Certification Body itself by an authoritative National Accreditation Body (such as EGAC or NiNAS under IAF MLA oversight). In short: accreditation certifies the certifier, ensuring genuine global validity and cross-border acceptance.",
      keyTakeaways: [
        "Certification = Verification of the Enterprise: Evaluates that your business processes comply with an ISO standard.",
        "Accreditation = Formal Authorization of the Certifier: Official validation by national bodies (e.g. EGAC, NiNAS) that the certification body possesses technical competence.",
        "IAF Oversight Hierarchy: Companies are Certified -> Certification Bodies are Accredited -> Accreditation Bodies are IAF MLA Signatories."
      ],
      nigeriaRelevance: "Provides Nigerian C-suite executives and procurement directors with the exact technical criteria to audit their certification providers and safeguard their compliance investments.",
      image: article3Image,
      linkedinUrl: "https://www.linkedin.com/pulse/difference-between-iso-certification-accreditation-5jbwe",
      isFeatured: false,
    },
    {
      id: 8,
      title: "How to Get ISO 9001 Certified in Nigeria: Complete 2026 Step-by-Step Guide",
      keyword: "how to get iso 9001 certified in nigeria step by step audit process requirements",
      date: "October 2026",
      author: "Eng. Raymond Smith & IEMA Lead Quality Auditors",
      category: "ISO Certification & Standards",
      readTime: "10 to 12 min read",
      summary: "Achieving accredited ISO 9001:2015 Quality Management certification in Nigeria is a strategic differentiator for winning tenders with NNPC, Shell, NLNG, and international EPC contractors. This guide breaks down the full roadmap—from leadership commitment and gap analysis to Stage 1 documentation reviews and Stage 2 certification audits.",
      extendedParagraph: "Many Nigerian enterprises struggle when preparing for ISO 9001 because they mistake certification for mere paperwork. In reality, modern ISO 9001 audits focus on process ownership, customer satisfaction metrics, risk-based thinking, and measurable continuous improvement. Working with an IAF MLA-accredited Conformity Assessment Body like IEMA Standards ensures your certification is recognized across all 110+ IAF signatory countries without redundant assessments.",
      keyTakeaways: [
        "Phase 1 - Diagnostic Gap Analysis: Compare current Standard Operating Procedures (SOPs) against the 10 clauses of ISO 9001:2015 to identify compliance gaps.",
        "Phase 2 - System Design & Implementation: Define process KPIs, quality objectives, organizational risk registers, and conduct mandatory internal audits.",
        "Phase 3 - Stage 1 Audit (Document Review): Independent IEMA auditor reviews management manual, mandatory records, and evaluates organizational readiness.",
        "Phase 4 - Stage 2 Audit (On-Site Verification): Lead auditors verify practical execution across Lagos, Abuja, or field operational sites to confirm conformity.",
        "Certification & 3-Year Surveillance: Issuance of official accredited certificate with instant QR code verification, followed by annual surveillance audits."
      ],
      nigeriaRelevance: "Mandatory qualification for Nigerian Local Content (NCDMB) certification, NIPEX Joint Qualification Scheme (JQS) pre-qualification, and export contracts under AfCFTA.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
      linkedinUrl: "https://www.linkedin.com/pulse/how-get-iso-9001-certified-nigeria-step-by-step-guide",
      isFeatured: true,
    },
    {
      id: 9,
      title: "Difference Between ISO 22000 and HACCP: Food Safety Standards Explained",
      keyword: "difference between iso 22000 and haccp food safety certification nigeria nafdac",
      date: "October 2026",
      author: "IEMA Food Safety & Agro-Allied Assessment Division",
      category: "ISO Certification & Standards",
      readTime: "8 to 10 min read",
      summary: "Food processors, agricultural exporters, and FMCG manufacturers in Nigeria frequently ask whether they should pursue HACCP or ISO 22000 certification. While both frameworks aim to prevent foodborne hazards, ISO 22000 incorporates HACCP principles into a comprehensive, high-level management system standard aligned with Annex SL.",
      extendedParagraph: "HACCP (Hazard Analysis and Critical Control Points) is a targeted operational tool focusing on biological, chemical, and physical food safety hazards at specific critical control points. ISO 22000 builds upon HACCP by embedding prerequisite programs (PRPs), interactive supplier/customer communication, and executive management oversight. For food businesses targeting global export markets, supermarket chains, or hotel suppliers, ISO 22000 provides total supply chain assurance.",
      keyTakeaways: [
        "Scope Differences: HACCP addresses production line hazard controls; ISO 22000 covers end-to-end organizational management including procurement and logistics.",
        "Structural Alignment: ISO 22000 follows Annex SL, enabling seamless integration with ISO 9001 (Quality) and ISO 14001 (Environment).",
        "Prerequisite Programs (PRPs): ISO 22000 mandates sector-specific PRPs (ISO/TS 22002 series) for facility hygiene, waste management, and pest control.",
        "Global Acceptance: ISO 22000 is universally recognized by international food safety initiatives, retail buyers, and customs authorities worldwide.",
        "Regulatory Synergy: Fulfills statutory requirements of NAFDAC, the Federal Ministry of Health, and CODEX Alimentarius."
      ],
      nigeriaRelevance: "Essential for Nigerian food processing plants in Ikeja, Agbara, Kano, and Port Harcourt seeking export clearance and local retail shelf placement.",
      image: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&q=80&w=1200",
      linkedinUrl: "https://www.linkedin.com/pulse/difference-between-iso-22000-and-haccp-food-safety-explained",
      isFeatured: false,
    },
    {
      id: 10,
      title: "Cost of ISO Certification in Nigeria: 2026 Pricing Breakdown & Budget Guide",
      keyword: "cost of iso certification in nigeria pricing breakdown auditor fees sme budget",
      date: "October 2026",
      author: "IEMA Corporate Advisory & Commercial Audit Operations",
      category: "ISO Certification & Standards",
      readTime: "10 to 12 min read",
      summary: "How much does ISO certification really cost in Nigeria? This transparent pricing guide explains the key variables determining audit fees—including organization headcount, multi-site logistics, IAF MD 5 auditor man-day tables, and Stage 1/Stage 2 assessments.",
      extendedParagraph: "Many Nigerian business owners encounter wildly fluctuating quotes when searching for ISO certification. Some cheap certifiers offer certificates within days without audits—these unaccredited 'paper-mill' certificates are routinely rejected by NNPC, NIPEX, and international banks. Accredited certification costs depend on strictly regulated auditor man-days prescribed by the International Accreditation Forum (IAF MD 5:2019). This guide breaks down the true cost factors for SMEs and large corporations.",
      keyTakeaways: [
        "Headcount & Risk Level: Number of employees and operational complexity dictate the mandatory auditor days required by IAF guidelines.",
        "Two-Stage Audit Fees: Covers Stage 1 (readiness evaluation) and Stage 2 (on-site full audit assessment across physical locations).",
        "Transparent 3-Year Investment: Audit costs encompass the initial certification plus Year 1 and Year 2 annual surveillance audits.",
        "Cost-Saving Through IMS: Combining ISO 9001, 14001, and 45001 into an Integrated Management System reduces total audit time by up to 25%.",
        "Avoiding Fake Certifiers: Unaccredited certificates costing ₦200,000 carry zero IAF validity and disqualify businesses from major public tenders."
      ],
      nigeriaRelevance: "Provides Nigerian CFOs, procurement heads, and SME founders with clear budgeting benchmarks for ISO 9001, 14001, 45001, and 27001 certifications.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=1200",
      linkedinUrl: "https://www.linkedin.com/pulse/cost-of-iso-certification-nigeria-pricing-breakdown-guide",
      isFeatured: false,
    },
    {
      id: 11,
      title: "EGAC vs. IAF Accreditation Explained: Why Genuine Recognition Matters",
      keyword: "egac vs iaf accreditation explained why genuine recognition matters cab 12203",
      date: "October 2026",
      author: "IEMA Technical Governance & Legal Conformity Council",
      category: "Accreditation & Trust",
      readTime: "8 to 10 min read",
      summary: "Understanding the distinction between a National Accreditation Body like EGAC (Egyptian Accreditation Council) and the International Accreditation Forum (IAF) is crucial for validating commercial trust. Learn how the IAF Multilateral Recognition Arrangement (MLA) gives Nigerian businesses global legitimacy.",
      extendedParagraph: "A common question from Nigerian corporate compliance directors is: 'What is the relationship between EGAC and IAF?' EGAC is an authoritative government accreditation body legally established under Presidential Decree 248/2006. EGAC is a full signatory to the IAF Multilateral Recognition Arrangement (MLA). Because IEMA Standards is accredited by EGAC as CAB 12203, every ISO certificate issued by IEMA carries both EGAC and IAF MLA marks, providing identical legal validity to certificates issued by UKAS (UK), ANAB (USA), or DAkkS (Germany).",
      keyTakeaways: [
        "The Governance Pyramid: Enterprises -> Certified by CAB (IEMA Standards) -> Accredited by National Body (EGAC) -> Mutually Recognized Globally (IAF MLA).",
        "'Certified Once, Accepted Worldwide': Under the IAF MLA treaty, member economies must accept certificates issued by accredited CABs without re-auditing.",
        "Direct Listing on IAF CertSearch: Real-time global registry validation prevents counterfeiting and speeds up international vendor verifications.",
        "Tender Pre-Qualification: Recognized by international oil companies (IOCs), multilateral lenders (World Bank, AfDB), and Nigerian public procurement (BPP)."
      ],
      nigeriaRelevance: "Ensures Nigerian oilfield suppliers, EPC contractors, financial institutions, and manufacturers are never disqualified in foreign tenders due to accreditation doubts.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1200",
      linkedinUrl: "https://www.linkedin.com/pulse/egac-vs-iaf-accreditation-explained-why-recognition-matters",
      isFeatured: false,
    }
  ];

  const categories = [
    'All', 
    'Inspection & Engineering',
    'Cybersecurity & Privacy',
    'AI & Emerging Tech',
    'Environmental & Sustainability',
    'ISO Certification & Standards',
    'Accreditation & Trust'
  ];

  const filteredArticles = articles.filter(art => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.keyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-12 pb-16 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-200">
      
      {/* Dynamic SEO Meta Tags */}
      <SeoHead
        title="ISO Certification & Technical Compliance Insights | IEMA Standards"
        description="Official technical articles on ISO/IEC 17020:2026 inspection standards, ISO 27001 cybersecurity, ISO 42001 AI governance, and ISO 14001:2026 environmental standards for Nigerian businesses."
        canonicalPath="blog"
        keywords={[
          'what the new iso iec 17020 2026 means for inspection bodies',
          'cyber threats on the rise why iso iec 27001 certification is non negotiable',
          'ai moving fast governance needs to keep up iso iec 42001',
          'iso 14001 2026 what nigerian businesses need to know',
          'what is iso certification and why does your business need it',
          'why choosing an accredited iso certification body is critical for international recognition',
          'difference between iso certification and accreditation',
          'iso certification in lagos nigeria',
          'EGAC accredited certification body nigeria'
        ]}
      />

      {/* JSON-LD Schema for Blog & BlogPosting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            "name": "IEMA Standards Official Insights & Technical Knowledge Base",
            "url": "https://www.iemacert.com/blog/",
            "description": "Authoritative technical guides, timelines, cost breakdowns, and regulatory insights on ISO certification, technical inspection, and cybersecurity in Nigeria.",
            "publisher": {
              "@type": "Organization",
              "name": "IEMA STANDARDS LIMITED",
              "url": "https://www.iemacert.com",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.iemacert.com/fme_logo.png"
              }
            },
            "blogPost": articles.map(art => ({
              "@type": "BlogPosting",
              "headline": art.title,
              "description": art.summary,
              "datePublished": "2026-09-28",
              "author": {
                "@type": "Person",
                "name": art.author
              },
              "url": art.linkedinUrl,
              "image": art.image,
              "articleSection": art.category
            }))
          })
        }}
      />

      {/* Breadcrumbs Navigation */}
      <Breadcrumbs 
        items={[
          { label: 'Knowledge Base & Insights', isCurrent: true }
        ]} 
        onNavigate={onNavigate} 
      />

      {/* Header Banner */}
      <section className="bg-[#070F2B] text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600" 
            alt="Knowledge Base & Insights" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-bold border border-amber-500/30">
            <BookOpen className="w-4 h-4 text-amber-400" />
            <span>Official Insights &amp; Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-serif">
            ISO Certification, Audit &amp; Regulatory Guides
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed font-sans">
            Authoritative technical guides, standards transitions, cybersecurity strategies, and regulatory insights authored by EGAC certified lead auditors and conformity assessment specialists for Nigerian and international enterprises.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0E2A47] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#DC2626] text-white shadow'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search standards & keywords..."
              className="pl-9 pr-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-xs text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:border-amber-500 w-full"
            />
          </div>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            Showing <span className="font-bold text-slate-900 dark:text-white">{filteredArticles.length}</span> published articles &amp; regulatory insights
          </div>
          {selectedCategory !== 'All' && (
            <button
              onClick={() => setSelectedCategory('All')}
              className="text-xs text-amber-600 dark:text-amber-400 font-bold hover:underline"
            >
              Reset filter
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art) => (
            <div 
              key={art.id} 
              className="bg-white dark:bg-[#0E2A47] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group text-slate-900 dark:text-white"
            >
              <div>
                <div className="relative overflow-hidden h-60 sm:h-64">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    referrerPolicy="no-referrer" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex flex-wrap items-center gap-2">
                    <span className="bg-[#070F2B]/90 backdrop-blur-sm text-amber-400 text-[10px] font-black px-3 py-1 rounded-full border border-slate-700">
                      {art.category}
                    </span>
                    {art.isFeatured && (
                      <span className="bg-[#DC2626] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full shadow">
                        NEW
                      </span>
                    )}
                  </div>

                  <span className="absolute bottom-3 right-3 text-slate-300 text-[10px] bg-slate-900/80 px-2 py-0.5 rounded font-medium">
                    {art.readTime}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-[11px] font-medium">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-amber-500" /> {art.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 truncate"><User className="w-3.5 h-3.5 text-slate-400 shrink-0" /> <span className="truncate">{art.author}</span></span>
                  </div>

                  <h3 className="font-black text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug font-serif text-lg sm:text-xl">
                    {art.title}
                  </h3>

                  <div className="space-y-2.5">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
                      {art.summary}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800 mt-4 space-y-2">
                <div className="grid grid-cols-2 gap-2 pt-4">
                  <button
                    onClick={() => setActiveModalArticle(art)}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs py-2.5 px-3 rounded-xl transition-all"
                  >
                    <span>Summary</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={art.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0077B5] hover:bg-[#005f93] text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-all shadow-sm hover:shadow"
                    title="Read on LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.92-.74-1.66-1.65-1.66Z"/>
                    </svg>
                    <span>On LinkedIn</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ARTICLE DETAIL MODAL */}
      {activeModalArticle && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setActiveModalArticle(null)}
        >
          <div 
            className="bg-white dark:bg-[#0B1E38] rounded-3xl max-w-3xl w-full border border-slate-300 dark:border-slate-700 shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden">
              <img 
                src={activeModalArticle.image} 
                alt={activeModalArticle.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <button 
                onClick={() => setActiveModalArticle(null)}
                className="absolute top-4 right-4 bg-slate-950/70 hover:bg-slate-950 text-white p-2 rounded-full transition-colors border border-slate-700"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 space-y-2">
                <span className="bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeModalArticle.category}
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-white font-serif leading-tight">
                  {activeModalArticle.title}
                </h2>
                <div className="flex items-center gap-3 text-slate-300 text-xs">
                  <span>{activeModalArticle.date}</span>
                  <span>•</span>
                  <span>{activeModalArticle.author}</span>
                  <span>•</span>
                  <span>{activeModalArticle.readTime}</span>
                </div>
              </div>
            </div>

            {/* Modal Content Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto text-slate-800 dark:text-slate-200">
              
              <div className="space-y-4">
                <h4 className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
                  Executive Brief
                </h4>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {activeModalArticle.summary}
                </p>
                {activeModalArticle.extendedParagraph && (
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    {activeModalArticle.extendedParagraph}
                  </p>
                )}
              </div>

              {/* Key Takeaways */}
              {activeModalArticle.keyTakeaways && activeModalArticle.keyTakeaways.length > 0 && (
                <div className="bg-slate-50 dark:bg-slate-900/70 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="text-xs font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    <span>Key Technical Takeaways &amp; Standards Changes</span>
                  </h4>
                  <ul className="space-y-2.5">
                    {activeModalArticle.keyTakeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Nigeria & Regional Relevance */}
              {activeModalArticle.nigeriaRelevance && (
                <div className="bg-emerald-50 dark:bg-emerald-950/30 p-5 rounded-2xl border border-emerald-200 dark:border-emerald-800/50 space-y-2">
                  <h4 className="text-xs font-black text-emerald-900 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Regulatory Relevance for Nigerian &amp; African Businesses</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200/90 leading-relaxed">
                    {activeModalArticle.nigeriaRelevance}
                  </p>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 dark:bg-[#071329] border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500 dark:text-slate-400">
                Published on official LinkedIn Pulse publication series by IEMA Standards Limited.
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setActiveModalArticle(null)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto"
                >
                  Close
                </button>
                <a
                  href={activeModalArticle.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#0077B5] hover:bg-[#005f93] text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.65 1.65 1.65 0 0 0 1.65-1.65c0-.92-.74-1.66-1.65-1.66Z"/>
                  </svg>
                  <span>Read Full Article on LinkedIn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Audit Readiness Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#070F2B] to-[#0A192F] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Conformity Assessment &amp; Gap Audit</span>
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-serif">
              Need Guidance on Standard Transitions or Audits?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Our EGAC accredited lead auditors in Lagos and Abuja conduct pre-assessments, gap audits, and technical conformity reviews for ISO 9001, 14001, 27001, 42001, and ISO/IEC 17020:2026.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://crmops.iemacert.com/request-quote.php"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#DC2626] hover:bg-red-700 text-white font-black px-6 py-3 rounded-full text-xs transition-all shadow-md flex items-center gap-2"
            >
              <span>Request Audit Quote</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-6 py-3 rounded-full text-xs transition-all"
            >
              <span>Contact Audit Secretariat</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
