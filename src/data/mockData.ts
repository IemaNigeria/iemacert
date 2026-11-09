import { IsoStandard, ServiceCategory, VerifiedCertificate, DownloadableResource, CaseStudy, TeamMember, NewsArticle, TrainingCourse, InspectionDetail } from '../types';
import raymondSmithPhoto from '../assets/images/regenerated_image_1786972154158.jpg';
import estherOnovoPhoto from '../assets/images/regenerated_image_1786974916865.jpg';
import rachelOludarePhoto from '../assets/images/regenerated_image_1787579822488.png';
import fortuneAnthonyPhoto from '../assets/images/regenerated_image_1786973774379.jpg';
import oluwatoyinAbubakarPhoto from '../assets/images/oluwatoyin_abubakar.jpg';
import oyebodeDorcasPhoto from '../assets/images/regenerated_image_1787755721375.jpg';
import gamboDoraParyaPhoto from '../assets/images/regenerated_image_1789476014628.png';
import yanatamJacksonPhoto from '../assets/images/regenerated_image_1787579828421.jpg';

export const COMPANY_INFO = {
  name: "IEMA STANDARDS LIMITED",
  shortName: "IEMA Standards",
  tagline: "Global Excellence in ISO Certification, Inspection & Testing Conformity Assessment",
  accreditation: "Accredited by Egyptian Accreditation Council (EGAC) | Compliant with ISO/IEC 17021-1, ISO/IEC 17025, ISO/IEC 17065 & IAF Standards",
  phone: "+234 813 483 1027",
  altPhone: "+234 806 964 0868",
  email: "info@iemacert.com",
  supportEmail: "certifications@iemacert.com",
  address: "27A Alternative Drive, near Waterbrook School, Chevron, Lekki, Lagos, Nigeria",
  abujaAddress: "Suite B12, Transcorp Hilton Commercial Arcade, Maitama, Abuja, FCT, Nigeria",
  workingHours: "Monday - Friday: 08:00 AM - 05:00 PM (WAT)",
  socials: {
    instagram: "https://www.instagram.com/iemastandard/",
    twitter: "https://x.com/iemacert",
    facebook: "https://www.facebook.com/iemacert",
    linkedin: "https://www.linkedin.com/company/iema-standards-limited/"
  },
  stats: {
    certificatesIssued: "1,450+",
    auditsCompleted: "3,200+",
    clientSatisfaction: "99.4%",
    accreditedCountries: "35+",
    expertAuditors: "85+"
  }
};

export const ISO_STANDARDS: IsoStandard[] = [
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    name: "Quality Management Systems (QMS)",
    slug: "quality-management-system-iso-9001",
    category: "Quality",
    standardsFamily: "ISO 9000 Family",
    validityYears: 3,
    shortDesc: "Internationally recognized certification that helps your organization deliver consistent quality, increase efficiency, and build customer trust worldwide.",
    fullDesc: "Benefits of ISO 9001 certification for Nigerian companies are enormous for businesses seeking growth, trust and global recognition. In today's competitive Nigerian market, customers demand consistent quality. Therefore, understanding the advantages of ISO 9001 Nigeria is essential for any company that wants to win more contracts. A Quality Management System (QMS) is a formalized framework that documents your processes, responsibilities, and procedures for achieving quality objectives. ISO 9001:2015 is suitable for any organization regardless of size or sector—whether in oil and gas, manufacturing, engineering, or services.",
    targetIndustries: [
      "Manufacturing & Heavy Engineering",
      "Oil & Gas EPC and Technical Services (NNPC, Shell, Chevron, Dangote)",
      "Construction, Civil Engineering & Real Estate",
      "Information Technology, Telecommunications & SaaS",
      "Healthcare, Medical Devices & Pharmaceuticals",
      "Financial Institutions & Professional Services",
      "Logistics, Supply Chain & Maritime Operations"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context of the Organization", desc: "Determining external/internal factors, interested party requirements, and defining QMS boundaries." },
      { number: "Clause 5", title: "Leadership & Commitment", desc: "Top management policy establishment, customer focus, and organizational roles & responsibilities." },
      { number: "Clause 6", title: "Planning & Risk Management", desc: "Addressing operational risks, capitalizing on opportunities, and setting measurable quality objectives." },
      { number: "Clause 7", title: "Support & Resource Management", desc: "Ensuring competent personnel, adequate infrastructure, calibration control, and documented information." },
      { number: "Clause 8", title: "Operational Planning & Control", desc: "Managing design & development, supplier controls, production delivery, and non-conforming outputs." },
      { number: "Clause 9", title: "Performance Evaluation", desc: "Customer satisfaction monitoring, internal audits, process KPIs, and formal management reviews." },
      { number: "Clause 10", title: "Continual Improvement", desc: "Root cause analysis, corrective actions, and systemic optimization cycles." }
    ],
    keyBenefits: [
      "Enhanced Customer Satisfaction: Systematically understand customer needs to deliver conforming products, reducing complaints and boosting customer loyalty.",
      "Improved Operational Efficiency: Streamline processes, reduce waste, minimize rework and errors, lowering operational costs and increasing productivity.",
      "Global Recognition & Market Access: Recognized in over 170 countries, satisfying mandatory prerequisites for major Nigerian tenders and global contracts.",
      "Better Risk Management for Nigerian Businesses: Proactive risk-based thinking to identify potential operational issues early and ensure business continuity.",
      "Winning High-Value Tenders: Major operators like NNPC, Shell, and Dangote require suppliers to be ISO 9001 certified. Certified companies are 3x more likely to win large contracts."
    ],
    principles: [
      {
        number: 1,
        title: "Customer Focus",
        desc: "The primary focus of quality management is to meet customer requirements and strive to exceed customer expectations, creating sustained value and repeat business."
      },
      {
        number: 2,
        title: "Leadership",
        desc: "Leaders at all levels establish unity of purpose and direction, creating conditions in which people are engaged in achieving the organization's quality objectives."
      },
      {
        number: 3,
        title: "Engagement of People",
        desc: "Competent, empowered and engaged people at all levels throughout the organization are essential to enhance its capability to create and deliver value."
      },
      {
        number: 4,
        title: "Process Approach",
        desc: "Consistent and predictable results are achieved more effectively and efficiently when activities are understood and managed as interrelated processes."
      },
      {
        number: 5,
        title: "Improvement",
        desc: "Successful organizations have an ongoing focus on improvement to maintain current levels of performance, respond to changes, and create new opportunities."
      },
      {
        number: 6,
        title: "Evidence-Based Decision Making",
        desc: "Decisions based on the analysis and evaluation of data and information are more likely to produce desired results and reduce operational uncertainty."
      },
      {
        number: 7,
        title: "Relationship Management",
        desc: "For sustained success, organizations manage their relationships with interested parties, such as suppliers and contractors, to optimize their impact on performance."
      }
    ],
    marketContext: {
      qmsDefinition: "A Quality Management System (QMS) is a formalized framework that documents your processes, responsibilities, and procedures for achieving quality objectives. Furthermore, it ensures that customer and regulatory requirements are consistently met and helps you achieve the benefits of ISO 9001 certification for Nigerian companies.",
      whyItMatters: "In today's competitive environment, customers demand reliability. However, without a structured system, quality can become inconsistent. Consequently, ISO 9001 provides you with a proven approach to maintain excellence in every operation and is a key reason to get ISO 9001 certified in Nigeria.",
      tenderAdvantage: "When you consider benefits of ISO 9001 certification for Nigerian companies, winning tenders is crucial. Major oil and gas operators like NNPC, Shell, and Dangote require suppliers to be ISO 9001 certified. Certified companies are 3x more likely to win large contracts.",
      keyDetailedBenefits: [
        {
          title: "1. Enhanced Customer Satisfaction",
          desc: "Because you systematically understand customer needs, you can consistently deliver conforming products. As a result, customer complaints decrease and loyalty increases significantly. This is a major benefit of ISO 9001 certification for Nigerian companies."
        },
        {
          title: "2. Improved Operational Efficiency",
          desc: "ISO 9001 helps you streamline processes and reduce waste. Similarly, it minimizes rework and errors. Therefore, your operational costs are reduced while productivity improves for your team."
        },
        {
          title: "3. Global Recognition and Market Access",
          desc: "Since ISO 9001 is recognized in over 170 countries, your certificate is globally accepted. Furthermore, many tenders in Nigeria require ISO 9001 as a prerequisite. In other words, it gives you a competitive edge and is one of the top benefits of ISO 9001 certification for Nigerian companies."
        },
        {
          title: "4. Better Risk Management for Nigerian Businesses",
          desc: "Through risk-based thinking, you can identify potential issues before they occur. Thus, you become more proactive rather than reactive. Additionally, this approach ensures business continuity, which is why getting ISO 9001 certified in Nigeria is critical."
        }
      ],
      whyChooseUs: [
        "Accredited by Egyptian Accreditation Council (EGAC), a signatory to IAF and ILAC with worldwide acceptance.",
        "Experienced Lead Auditors with extensive industry experience in oil & gas, maritime, manufacturing, and services.",
        "Practical implementation focus that converts complex ISO requirements into simple, easy-to-understand modules.",
        "Transparent pricing, efficient audit scheduling, and 24/7 dedicated support worldwide."
      ],
      valueAddedPoints: [
        "Accredited and internationally recognized certification process delivering real ROI",
        "Experienced auditors who provide practical business insights on ISO 9001 in Nigeria",
        "Transparent pricing and efficient audit scheduling",
        "24/7 expertise and customer support worldwide"
      ]
    },
    deliverables: [
      "Comprehensive Stage 1 Document Review & Gap Analysis Report",
      "Stage 2 On-Site Audit Findings & Corrective Action Request (CAR) Log",
      "Formal IEMA Standards / EGAC Accredited 3-Year ISO Certificate",
      "Authorized High-Resolution IEMA & EGAC Certification Marks for marketing",
      "Listing on central international certificate registries (IAF CertSearch)"
    ],
    prerequisites: [
      "Documented Quality Policy, Scope, and measurable Quality Objectives",
      "Process flowcharts and standard operating procedures (SOPs)",
      "At least 3 months of operational records implementing the QMS",
      "Completed internal audit cycle and formal Top Management Review"
    ],
    auditSteps: [
      "Step 1: Application & Pre-Assessment (scoping, gap analysis, and readiness evaluation)",
      "Step 2: Stage 1 Audit (desktop documentation and policy review)",
      "Step 3: Stage 2 Audit (on-site implementation verification, staff interviews, and record checks)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    faq: [
      { q: "How long is the ISO 9001 certificate valid?", a: "ISO 9001 certificates are valid for three (3) years from the date of issue, subject to mandatory annual surveillance audits at Month 12 and Month 24 to ensure continued compliance and improvement." },
      { q: "Can small businesses achieve ISO 9001 certification?", a: "Yes. ISO 9001 is fully scalable and applies equally to 5-person startups, mid-sized enterprises, and multinational corporations across oil and gas, manufacturing, construction, and services." },
      { q: "Why is ISO 9001 required for tenders in Nigeria?", a: "Major operators such as NNPC, Shell, Chevron, and Dangote mandate ISO 9001 certification to pre-qualify vendors, ensuring consistent quality, statutory compliance, and minimal supply chain risks." },
      { q: "What accreditation marks will be on our certificate?", a: "Certificates issued by IEMA Standards Limited feature the Egyptian Accreditation Council (EGAC) accreditation mark and IAF MLA signatory logo, guaranteeing global recognition." }
    ],
    iconName: "Award",
    badgeColor: "bg-blue-600 text-white",
    popular: true
  },
  {
    id: "iso-14001",
    code: "ISO 14001:2015",
    name: "Environmental Management Systems (EMS)",
    category: "Environment & Energy",
    standardsFamily: "ISO 14000 Family",
    validityYears: 3,
    shortDesc: "Systematic framework to identify environmental aspects, lower carbon footprint, cut waste, and ensure environmental legal compliance.",
    fullDesc: "ISO 14001:2015 specifies the requirements for an environmental management system that an organization can use to enhance its environmental performance. ISO 14001 provides a structured approach to managing environmental aspects—such as atmospheric emissions, wastewater discharge, hazardous waste disposal, soil contamination, and resource consumption—while maintaining strict compliance with national environmental regulations (e.g., NESREA, FMEnv, DPR/NUPRC) and international environmental conventions.",
    targetIndustries: [
      "Oil & Gas Exploration, Refining & Petrochemicals",
      "Chemical Processing & Pharmaceutical Manufacturing",
      "Mining, Quarrying & Mineral Extraction",
      "Power Generation, Renewable Energy & Utilities",
      "Construction, Civil Works & Infrastructure Projects",
      "Waste Management & Industrial Recycling Facilities",
      "Food & Beverage Processing Plants"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & Environmental Scope", desc: "Evaluating internal/external environmental conditions and stakeholder expectations." },
      { number: "Clause 5", title: "Leadership & Environmental Policy", desc: "Top management commitments to environmental protection, pollution prevention, and legal compliance." },
      { number: "Clause 6", title: "Planning & Aspect-Impact Evaluation", desc: "Assessing normal/abnormal environmental aspects, lifecycle perspective, and regulatory compliance obligations." },
      { number: "Clause 7", title: "Support & Environmental Competency", desc: "Staff training, spill response drills, communication protocols, and documented EMS procedures." },
      { number: "Clause 8", title: "Operational Control & Emergency Preparedness", desc: "Emission controls, effluent treatment monitoring, waste management, and emergency spill response plans." },
      { number: "Clause 9", title: "Performance Evaluation & Compliance Audits", desc: "Periodic legal compliance evaluations, emissions testing, internal audits, and management review." },
      { number: "Clause 10", title: "Continual Environmental Improvement", desc: "Non-conformity mitigation, proactive sustainability targets, and environmental footprint reduction." }
    ],
    keyBenefits: [
      "Reduces utility, raw material, and waste disposal operational costs",
      "Ensures continuous compliance with national environmental guidelines and statutory permits",
      "Lowers risk of costly environmental penalties, litigation, and community friction",
      "Strengthens Environmental, Social, and Governance (ESG) investment ratings",
      "Enhances brand reputation among eco-conscious enterprise clients and institutional lenders"
    ],
    principles: [
      {
        number: 1,
        title: "Environmental Policy & Top Management Commitment",
        desc: "Establishing a visionary environmental policy with clear leadership accountability for pollution prevention, regulatory compliance, and climate resilience."
      },
      {
        number: 2,
        title: "Aspect & Impact Identification",
        desc: "Systematically mapping operational activities to identify air emissions, effluent discharge, hazardous waste, and resource depletion with life-cycle perspectives."
      },
      {
        number: 3,
        title: "Legal & Regulatory Compliance",
        desc: "Maintaining an airtight legal register complying with NESREA guidelines, Federal Ministry of Environment (FMEnv) permits, and NUPRC/DPR environmental mandates."
      },
      {
        number: 4,
        title: "Pollution Prevention & Waste Hierarchy",
        desc: "Implementing circular economy strategies: prioritize source reduction, recycling, and responsible effluent treatment before final disposal."
      },
      {
        number: 5,
        title: "Operational Control & Lifecycle Management",
        desc: "Enforcing standard operating procedures, containment barriers, chemical handling protocols, and contractor environmental oversight."
      },
      {
        number: 6,
        title: "Emergency Preparedness & Response",
        desc: "Conducting regular spill response drills, leak containment tests, and maintaining immediate incident mitigation procedures."
      },
      {
        number: 7,
        title: "Continual Environmental Performance Improvement",
        desc: "Setting quantifiable environmental targets (carbon footprint reduction, water conservation, energy optimization) and auditing progress periodically."
      }
    ],
    marketContext: {
      qmsDefinition: "An Environmental Management System (EMS) is a structured framework that enables your organization to manage environmental responsibilities systematically. In addition, it reduces your ecological footprint, ensures full compliance with statutory environmental laws, and drives long-term sustainability across all operational sites.",
      whyItMatters: "In today's resource-constrained industrial landscape, environmental responsibility is no longer optional. Regulatory agencies (such as NESREA and FMEnv) and major multinational partners enforce strict penalties for environmental non-compliance. ISO 14001 provides Nigerian and international businesses with a structured methodology to cut waste, lower utility expenses, avoid costly litigations, and build a trusted green reputation.",
      tenderAdvantage: "In oil & gas, mining, construction, and manufacturing, having an EGAC/IAF-accredited ISO 14001 certificate is mandatory for NIPEX pre-qualification and major tenders with Shell, Chevron, NNPC, TotalEnergies, and international joint ventures.",
      keyDetailedBenefits: [
        {
          title: "1. Waste Reduction & Operational Cost Savings",
          desc: "By streamlining raw material usage, conserving electricity and water, and minimizing hazardous waste generation, organizations report up to 25% reductions in waste handling and operational utility expenditures."
        },
        {
          title: "2. Guaranteed Statutory Compliance (NESREA & FMEnv)",
          desc: "Maintains a live regulatory register that ensures you consistently meet EIA approvals, effluent standards, emission caps, and statutory reporting obligations, eliminating fines and regulatory shutdowns."
        },
        {
          title: "3. Tender Winning & NIPEX Competitive Advantage",
          desc: "Provides verified proof of sustainable operations, scoring maximum technical points during NIPEX evaluations and international joint venture procurement bids."
        },
        {
          title: "4. Enhanced ESG Ratings & Community Relations",
          desc: "Strengthens corporate Environmental, Social, and Governance (ESG) performance, facilitating access to green finance, bank credit lines, and peaceful host community relations."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with worldwide IAF MLA international recognition",
        "Lead Auditors with specialized expertise in upstream oil & gas, industrial chemistry, and manufacturing",
        "Pragmatic approach focused on real operational waste reduction and compliance simplification",
        "Fast-track Stage 1 & Stage 2 audit scheduling with responsive 24/7 client support"
      ],
      valueAddedPoints: [
        "Accredited ISO 14001 certification delivering measurable reductions in OPEX and waste",
        "Expert environmental auditors with deep Nigerian industrial and regulatory insights",
        "Transparent pricing with clear multi-site certification pathways",
        "Global IAF CertSearch international database registration"
      ]
    },
    deliverables: [
      "Aspect-Impact Register Assessment & Compliance Gap Report",
      "On-Site Facility Environmental Audit Report",
      "Accredited ISO 14001:2015 3-Year Certificate with EGAC & IAF Seal",
      "Annual Environmental Surveillance Verification Reports"
    ],
    prerequisites: [
      "Environmental Aspects and Impacts Register covering all site operations",
      "Legal Compliance Register identifying applicable statutory environmental laws",
      "Emergency Preparedness & Response Procedure (with spill containment drill records)",
      "Internal audit report and documented management review minutes"
    ],
    auditSteps: [
      "Step 1: Application & Pre-Assessment (baseline environmental scope definition)",
      "Step 2: Stage 1 Audit (documentation, aspect-impact matrix & legal registers review)",
      "Step 3: Stage 2 Audit (on-site facility inspection, emission point checks, and staff interviews)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Leaf",
    badgeColor: "bg-emerald-600 text-white",
    popular: true
  },
  {
    id: "iso-45001",
    code: "ISO 45001:2018",
    name: "Occupational Health & Safety Management Systems (OHSMS)",
    slug: "occupational-health-safety-management-system",
    category: "Health & Safety",
    standardsFamily: "ISO 45000 Family",
    validityYears: 3,
    shortDesc: "Comprehensive framework to prevent workplace injuries, eliminate hazards, reduce health risks, and foster a proactive safety culture.",
    fullDesc: "ISO 45001:2018 is the world's premier international standard for occupational health and safety (OH&S). It provides a robust, proactive framework for identifying workplace hazards, assessing occupational risks, managing worker consultation, and executing hazard control hierarchies. ISO 45001 enables organizations to systematically reduce Lost Time Injuries (LTI), prevent fatal incidents, lower workers' compensation liabilities, and demonstrate unyielding commitment to workforce well-being.",
    targetIndustries: [
      "Oil & Gas Drilling, Marine & Offshore Facilities",
      "Heavy Construction, Civil Contracting & Demolition",
      "Mining, Quarrying & Metal Smelting",
      "Manufacturing, Assembly Plants & Foundries",
      "Logistics, Warehousing & Fleet Transportation",
      "Power Transmission & Telecommunications Rigging",
      "Healthcare Facilities & High-Risk Laboratories"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & Worker Consultation", desc: "Understanding safety risks, legal landscape, and contractor safety obligations." },
      { number: "Clause 5", title: "Leadership & Worker Participation", desc: "Active management safety leadership, safety committees, and non-punitive incident reporting." },
      { number: "Clause 6", title: "Planning & Hazard Identification (HIRA)", desc: "Hazard identification, risk assessment, opportunity management, and legal safety registers." },
      { number: "Clause 7", title: "Support, Resources & HSE Competency", desc: "HSE training, toolbox talks, PPE provision, safety signage, and emergency communication." },
      { number: "Clause 8", title: "Operational Controls & Emergency Response", desc: "Hierarchy of controls (elimination, substitution, engineering controls, PPE), PTW systems, and rescue drills." },
      { number: "Clause 9", title: "Performance Evaluation & Incident Analysis", desc: "LTI rate tracking, safety inspections, legal compliance audits, and management safety reviews." },
      { number: "Clause 10", title: "Incident Investigation & Continual Improvement", desc: "Systematic root-cause accident investigation, preventive measures, and safety culture growth." }
    ],
    keyBenefits: [
      "Drastically minimizes Lost Time Injuries (LTIs), occupational illnesses, and fatalities",
      "Substantially lowers insurance premiums, compensation claims, and legal liabilities",
      "Ensures strict compliance with Factory Acts, Labor Laws, and OSHA standards",
      "Enhances worker morale, retention, and active participation in safety reporting",
      "Crucial prerequisite for pre-qualification in international oil & gas and mining tenders"
    ],
    principles: [
      {
        number: 1,
        title: "Leadership Commitment & Worker Participation",
        desc: "Establishing active executive safety leadership with non-punitive safety reporting and empowered worker consultation through Health & Safety Committees."
      },
      {
        number: 2,
        title: "Hazard Identification & Risk Assessment (HIRA)",
        desc: "Proactively identifying physical, chemical, biological, ergonomic, and psychosocial hazards before they lead to workplace incidents."
      },
      {
        number: 3,
        title: "Hierarchy of Hazard Controls",
        desc: "Applying the proven control hierarchy: Elimination, Substitution, Engineering Controls, Administrative Controls, and Personal Protective Equipment (PPE)."
      },
      {
        number: 4,
        title: "Legal & Statutory Compliance",
        desc: "Ensuring full adherence to Nigerian Factories Acts, Labor Laws, OSHA requirements, and NUPRC/DPR offshore safety regulations."
      },
      {
        number: 5,
        title: "Competence, Awareness & Safety Culture",
        desc: "Empowering personnel through regular toolbox talks, specialized HSE drills, task-specific training, and hazard communication."
      },
      {
        number: 6,
        title: "Emergency Preparedness & Response",
        desc: "Developing and testing realistic emergency evacuation, fire suppression, first aid response, and offshore medical evacuation protocols."
      },
      {
        number: 7,
        title: "Continual OH&S Improvement & Zero-Harm Pursuit",
        desc: "Pursuing zero Lost Time Injuries (LTI) through systematic root-cause incident investigations, safety trend analysis, and management reviews."
      }
    ],
    marketContext: {
      qmsDefinition: "An Occupational Health & Safety Management System (OHSMS) is a structured framework that enables organizations to provide safe and healthy workplaces, prevent work-related injuries and illnesses, and continually improve OH&S performance across high-risk operations.",
      whyItMatters: "Workplace accidents cause severe human suffering, costly project halts, astronomical compensation liabilities, and reputational damage. In Nigeria's energy, construction, and manufacturing sectors, achieving zero Lost Time Injuries (LTI) is a prerequisite for corporate credibility. ISO 45001 transforms safety from a reactive checklist into a proactive, life-saving organizational culture.",
      tenderAdvantage: "ISO 45001 is mandatory for vendor pre-qualification in Nigerian oil & gas (NIPEX), major civil engineering consortia, mining concessions, and multinational EPC contracts with Shell, Chevron, ExxonMobil, TotalEnergies, and Dangote Refinery.",
      keyDetailedBenefits: [
        {
          title: "1. Drastic Reduction in Workplace Accidents & LTIs",
          desc: "Systematic hazard identification eliminates dangerous conditions before injuries happen, driving your Lost Time Injury Frequency Rate (LTIFR) towards zero."
        },
        {
          title: "2. Reduced Insurance Premiums & Legal Liabilities",
          desc: "Certified organizations benefit from lower employee compensation insurance premiums and eliminate expensive worker injury litigation and statutory fines."
        },
        {
          title: "3. Maximum Technical Scores on Energy & Mining Tenders",
          desc: "Demonstrates world-class HSE governance, satisfying the rigorous safety audits conducted by IOCs, NOCs, and EPC contractors during contract awards."
        },
        {
          title: "4. Enhanced Worker Morale & Retention",
          desc: "Fosters an environment where workers feel valued and safe, drastically improving employee engagement, trust, and operational productivity."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited and globally recognized by IAF member nations",
        "Lead Auditors with seasoned field experience in offshore rigs, heavy manufacturing, and construction",
        "Practical audit focus that enhances site safety protocols rather than creating bureaucratic paperwork",
        "Fast-track certification timeline with clear milestone execution"
      ],
      valueAddedPoints: [
        "Accredited ISO 45001 certification demonstrating verifiable commitment to workforce safety",
        "Practical hazard mitigation insights provided by industry-veteran auditors",
        "Transparent pricing and flexible audit scheduling across onshore and offshore sites",
        "IAF CertSearch international certificate validation"
      ]
    },
    deliverables: [
      "Hazard Identification & Risk Assessment (HIRA) Audit Findings",
      "Stage 1 & 2 Comprehensive OHSMS Evaluation Report",
      "Accredited ISO 45001:2018 3-Year Certificate with EGAC / IAF Mark",
      "Annual Surveillance Verification Audits"
    ],
    prerequisites: [
      "Occupational Health & Safety Policy signed by Top Executive",
      "Hazard Identification and Risk Assessment (HIRA) Register",
      "Permit to Work (PTW) system, PPE matrix, and emergency drill records",
      "Documented safety committee meeting minutes and worker consultation evidence"
    ],
    auditSteps: [
      "Step 1: Application & Pre-Assessment (headcount scoping, risk tier classification)",
      "Step 2: Stage 1 Audit (desktop review of OHS policy, HIRA registers, and legal compliance)",
      "Step 3: Stage 2 Audit (on-site safety walkthrough, PPE checks, PTW audits, and worker interviews)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "ShieldCheck",
    badgeColor: "bg-amber-600 text-white",
    popular: true
  },
  {
    id: "iso-27001",
    code: "ISO/IEC 27001:2022",
    name: "Information Security Management Systems (ISMS)",
    category: "Information Security",
    standardsFamily: "ISO 27000 Family",
    validityYears: 3,
    shortDesc: "The premier global standard for enterprise information security, cyber resilience, data privacy, cloud protection, and asset management.",
    fullDesc: "ISO/IEC 27001:2022 provides an internationally recognized framework for establishing, implementing, maintaining, and continually improving an Information Security Management System (ISMS). Featuring 93 modernized information security controls across organizational, people, physical, and technological themes (Annex A), ISO 27001 empowers organizations to defend against ransomware, data breaches, insider threats, and intellectual property theft while ensuring rigorous alignment with GDPR, NDPR, and global banking data privacy mandates.",
    targetIndustries: [
      "Fintech, Payment Gateways & Commercial Banks",
      "Cloud Service Providers, SaaS Platforms & Data Centers",
      "Software Development & IT Managed Service Providers (MSPs)",
      "Telecommunications & Internet Service Providers",
      "E-Commerce & Digital Marketplaces",
      "Healthcare Networks & Electronic Health Record (EHR) Providers",
      "Government Agencies & Critical National Infrastructure"
    ],
    coreClauses: [
      { number: "Clause 4", title: "ISMS Context & Scope", desc: "Defining boundaries of information assets, cloud environments, and external regulatory requirements." },
      { number: "Clause 5", title: "Leadership & Information Security Policy", desc: "Top management commitment, security governance committees, and acceptable use policies." },
      { number: "Clause 6", title: "Information Security Risk Assessment & Treatment", desc: "Asset-based risk assessments, threat modeling, and Statement of Applicability (SoA) formulation." },
      { number: "Clause 7", title: "Support, Awareness & Competency", desc: "Employee cybersecurity awareness training, phishing simulations, and access control policies." },
      { number: "Clause 8", title: "Operation & Annex A Control Implementation", desc: "Executing 93 Annex A controls: Organizational (37), People (8), Physical (14), and Technological (34)." },
      { number: "Clause 9", title: "Performance Evaluation & Vulnerability Audits", desc: "Penetration testing oversight, internal ISMS audits, SOC metric reviews, and management reviews." },
      { number: "Clause 10", title: "Incident Response & Continual Improvement", desc: "Data breach forensics, CSIRT procedures, lessons learned, and system hardening." }
    ],
    keyBenefits: [
      "Bulletproof protection for client data, financial transactions, and proprietary source code",
      "Mitigates disastrous cyber attack downtime, ransomware extortion, and regulatory fines",
      "Mandatory requirement for SOC 2 alignment, global venture capital due diligence, and enterprise B2B sales",
      "Strict compliance with NDPR, GDPR, HIPAA, and Central Bank cybersecurity directives",
      "Instills unshakeable customer trust in your digital platforms and cloud services"
    ],
    principles: [
      {
        number: 1,
        title: "Confidentiality, Integrity & Availability (CIA Triad)",
        desc: "Ensuring sensitive data is only accessible to authorized entities (Confidentiality), remains accurate and uncorrupted (Integrity), and is accessible when needed (Availability)."
      },
      {
        number: 2,
        title: "Risk-Based Security Governance",
        desc: "Evaluating information security threats, vulnerabilities, and potential business impacts to tailor controls proportionately."
      },
      {
        number: 3,
        title: "Executive Leadership & Policy Framework",
        desc: "Establishing high-level information security policies, governance committees, and clear ownership of digital risk."
      },
      {
        number: 4,
        title: "Defense-in-Depth & Annex A Controls",
        desc: "Deploying multi-layered technical, physical, organizational, and human controls across cloud, on-premise, and remote workspaces."
      },
      {
        number: 5,
        title: "Security Awareness & Human Factor Defense",
        desc: "Conducting continuous staff cybersecurity training, anti-phishing simulations, and enforcing strict password and access hygiene."
      },
      {
        number: 6,
        title: "Continuous Monitoring & Rapid Incident Response",
        desc: "Maintaining real-time log monitoring, intrusion detection, disaster recovery backups, and well-rehearsed CSIRT response playbooks."
      },
      {
        number: 7,
        title: "Regulatory Compliance & Continual Hardening",
        desc: "Ensuring dynamic alignment with NDPR, GDPR, CBN Cybersecurity Guidelines, and continuous vulnerability remediation."
      }
    ],
    marketContext: {
      qmsDefinition: "An Information Security Management System (ISMS) is a systematic approach to managing sensitive company and customer information so that it remains secure. It encompasses people, processes, and IT systems by applying a comprehensive risk management process.",
      whyItMatters: "Cyber threats, data breaches, ransomware attacks, and financial fraud are skyrocketing across Africa and globally. For fintechs, banks, healthcare platforms, and cloud service providers, a single security lapse can lead to catastrophic financial losses and regulatory sanctions by the Nigeria Data Protection Commission (NDPC) and Central Bank of Nigeria (CBN). ISO 27001 proves that your digital infrastructure meets world-class cybersecurity standards.",
      tenderAdvantage: "ISO 27001 is mandatory for enterprise SaaS vendors, fintech payment switches, government cloud contracts, and international B2B software partnerships requiring SOC 2 / NDPR compliance.",
      keyDetailedBenefits: [
        {
          title: "1. Complete Defense Against Ransomware & Cyber Breaches",
          desc: "Implements 93 rigorous security controls that safeguard customer databases, API endpoints, encryption keys, and proprietary algorithms against sophisticated cyber threats."
        },
        {
          title: "2. Full Compliance with NDPR, GDPR & CBN Guidelines",
          desc: "Satisfies statutory data protection frameworks (Nigeria Data Protection Act, GDPR, CBN Cyber Framework), eliminating crushing regulatory fines and operating license suspensions."
        },
        {
          title: "3. Accelerated Enterprise Sales & VC Investment Due Diligence",
          desc: "Enterprise buyers and global venture capital funds mandate ISO 27001 certification before signing high-value enterprise contracts or finalizing funding rounds."
        },
        {
          title: "4. Business Resilience & Zero Data Loss Recovery",
          desc: "Enforces automated offsite backups, cloud disaster recovery failover, and strict RTO/RPO targets, ensuring 99.99% operational continuity during outages."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full IAF MLA international validity",
        "Lead Auditors specializing in cloud architecture, cybersecurity, and financial technology",
        "Pragmatic, developer-friendly audit methodologies that fit modern Agile and DevOps workflows",
        "Fast-track documentation reviews and technical audit milestones"
      ],
      valueAddedPoints: [
        "Accredited ISO/IEC 27001:2022 certification unlocking global enterprise B2B deals",
        "Practical cybersecurity audit insights tailored to Nigerian fintech and tech infrastructure",
        "Transparent pricing with structured surveillance audit roadmaps",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Statement of Applicability (SoA) Evaluation Report",
      "Information Security Risk Treatment Assessment Findings",
      "Stage 1 & Stage 2 Technical Audit Reports",
      "Accredited ISO/IEC 27001:2022 3-Year Certificate with EGAC & IAF Marks"
    ],
    prerequisites: [
      "Information Security Policy & Acceptable Use Guidelines",
      "Information Asset Inventory with asset classification (Confidential, Restricted, Public)",
      "Information Security Risk Assessment and formal Statement of Applicability (SoA)",
      "Incident Response Plan and Business Continuity/Disaster Recovery testing records"
    ],
    auditSteps: [
      "Scoping of cloud infrastructure, data centers, and physical office networks",
      "Stage 1: Documentation review, SoA verification, and risk treatment plan validation",
      "Stage 2: Technical verification of access controls, cryptography, backup restoration, and employee interviews",
      "Corrective action review and accreditation committee signoff",
      "Surveillance audits every 12 months"
    ],
    iconName: "Lock",
    badgeColor: "bg-purple-600 text-white",
    popular: true
  },
  {
    id: "iso-22000",
    code: "ISO 22000:2018",
    name: "Food Safety Management Systems (FSMS)",
    category: "Food & Medical",
    standardsFamily: "ISO 22000 / HACCP",
    validityYears: 3,
    shortDesc: "End-to-end food safety standard integrating Codex Alimentarius HACCP principles, Prerequisite Programs (PRPs), and supply chain traceability.",
    fullDesc: "ISO 22000:2018 sets the global benchmark for food safety across the entire food supply chain—from crop producers, livestock farms, and feed processors to food manufacturers, packaging fabricators, cold chain logistics providers, and retail catering. Combining the Plan-Do-Check-Act (PDCA) cycle, Hazard Analysis and Critical Control Point (HACCP) principles, and industry-specific Prerequisite Programs (PRPs), ISO 22000 guarantees consumers receive safe, unadulterated food products.",
    targetIndustries: [
      "Food & Beverage Processing & Packaging Plants",
      "Commercial Agriculture, Poultry, Livestock & Dairy Farms",
      "Edible Oils, Milling, Bakeries & Confectionery Manufacturing",
      "Cold Storage, Refrigerated Logistics & Food Distribution",
      "Commercial Catering, Hotel Hospitality & Fast Food Chains",
      "Food Contact Packaging & Container Fabricators"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & Food Chain Scope", desc: "Identifying statutory food regulations (NAFDAC, Codex) and food chain positioning." },
      { number: "Clause 5", title: "Leadership & Food Safety Culture", desc: "Food safety policy, food safety team leadership, and emergency contingency protocols." },
      { number: "Clause 6", title: "Planning & FSMS Objectives", desc: "Addressing food safety risks, operational opportunities, and changes to the food safety system." },
      { number: "Clause 7", title: "Support, Hygiene Training & PRPs", desc: "Personnel hygiene standards, cleanroom sanitation, allergen control, and equipment maintenance." },
      { number: "Clause 8", title: "Operation, PRPs & HACCP Plan", desc: "Hazard analysis, identification of Critical Control Points (CCPs) & OPRPs, critical limits, monitoring, and product withdrawal/recall systems." },
      { number: "Clause 9", title: "Performance Evaluation & Testing", desc: "Microbiological verification testing, internal audits, validation of control measures, and management review." },
      { number: "Clause 10", title: "Continual Improvement & Updating", desc: "Corrective actions, FSMS updates based on emerging microbiological/chemical food hazards." }
    ],
    keyBenefits: [
      "Prevents catastrophic product contamination, botulism, allergen mix-ups, and costly recalls",
      "Integrates Codex Alimentarius HACCP principles with modern high-level management structures",
      "Mandatory requirement for exporting agricultural and processed food products to EU, US, and GCC markets",
      "Ensures seamless compliance with NAFDAC, FDA, and international sanitary authorities",
      "Instills utmost consumer and retail supermarket confidence in your food brands"
    ],
    principles: [
      {
        number: 1,
        title: "Interactive Communication",
        desc: "Ensuring continuous, structured communication along the entire food supply chain from raw material farmers and packaging suppliers to distributors and consumers."
      },
      {
        number: 2,
        title: "System Management",
        desc: "Integrating food safety into the overall management structure of the organization using the structured Plan-Do-Check-Act (PDCA) methodology."
      },
      {
        number: 3,
        title: "Prerequisite Programs (PRPs)",
        desc: "Establishing foundational environmental and operational hygiene conditions (pest control, sanitation, clean water, personnel hygiene, waste management)."
      },
      {
        number: 4,
        title: "HACCP Principles & Hazard Analysis",
        desc: "Conducting systematic hazard analysis to identify biological, chemical, physical, and allergen hazards across every process step."
      },
      {
        number: 5,
        title: "Critical Control Points (CCPs) & OPRPs",
        desc: "Establishing strict critical limits, continuous monitoring procedures, and immediate corrective actions when limits are exceeded."
      },
      {
        number: 6,
        title: "Traceability & Recall Systems",
        desc: "Enforcing rapid one-step-forward and one-step-back batch traceability with verified mock recall drills within defined timeframes."
      },
      {
        number: 7,
        title: "Continual Food Safety Improvement",
        desc: "Routinely updating the FSMS based on microbiological verification testing results, consumer feedback, and emerging global food safety risks."
      }
    ],
    marketContext: {
      qmsDefinition: "A Food Safety Management System (FSMS) is a preventive framework that combines prerequisite hygiene programs (PRPs) and HACCP principles to ensure that food is safe for human consumption throughout processing, packaging, storage, and distribution.",
      whyItMatters: "Food contamination, foodborne illnesses, and product recalls can destroy consumer trust overnight and trigger severe regulatory bans from NAFDAC and international food safety authorities. In Nigeria's expanding agribusiness, FMCG, and hospitality sectors, ISO 22000 certification provides absolute assurance that your food products comply with rigorous international safety standards.",
      tenderAdvantage: "Holding an accredited ISO 22000 certificate is mandatory for supplying leading supermarket chains (Shoprite, Spar), fast-food franchises, offshore catering contracts in oil & gas, and exporting agro-commodities to the EU, UK, US, and Middle East.",
      keyDetailedBenefits: [
        {
          title: "1. Zero Contamination & Elimination of Product Recalls",
          desc: "Systematic hazard controls and strict CCP monitoring prevent microbiological, chemical, and physical food safety hazards from reaching consumers."
        },
        {
          title: "2. Full Compliance with NAFDAC & International Food Regulators",
          desc: "Satisfies NAFDAC registration prerequisites and aligns with global Codex Alimentarius and US FDA Food Safety Modernization Act (FSMA) standards."
        },
        {
          title: "3. Unlocks Lucrative Export Markets Worldwide",
          desc: "Enables Nigerian food and agricultural exporters (cocoa, sesame, cashew, cassava, packaged foods) to pass international port-of-entry sanitary inspections effortlessly."
        },
        {
          title: "4. Preferred Supplier Status with Supermarkets & Airlines",
          desc: "Major retail conglomerates, flight caterers, and multinational hotel chains prioritize ISO 22000-certified food producers."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full IAF MLA international validity",
        "Lead Auditors with deep expertise in food processing, biochemistry, and microbiology",
        "Pragmatic audit approach addressing real food hygiene, shelf-life integrity, and cold-chain resilience",
        "Fast-track certification timeline with clear milestone execution"
      ],
      valueAddedPoints: [
        "Accredited ISO 22000:2018 certification opening international export corridors",
        "Food safety audit team with deep practical insight into Nigerian agricultural and processing supply chains",
        "Transparent pricing with clear multi-site certification pathways",
        "Global IAF CertSearch international database listing"
      ]
    },
    deliverables: [
      "HACCP Plan & PRP Verification Audit Report",
      "Stage 1 & Stage 2 Food Safety Audit Findings",
      "Accredited ISO 22000:2018 Certificate with EGAC / IAF Mark",
      "Annual Surveillance and Food Hygiene Audit Verification"
    ],
    prerequisites: [
      "Food Safety Policy and Food Safety Team appointment letter",
      "Documented Prerequisite Programs (PRPs) according to ISO/TS 22002 series",
      "Complete HACCP Plan (hazard identification, CCPs, critical limits, and monitoring procedures)",
      "Mock product recall and traceability exercise records"
    ],
    auditSteps: [
      "Step 1: Application & Pre-Assessment (scoping of processing lines and storage hubs)",
      "Step 2: Stage 1 Audit (desktop review of HACCP plan, hazard analysis, and flow diagrams)",
      "Step 3: Stage 2 Audit (physical plant hygiene inspection, swab test record reviews, CCP calibration checks, and worker hygiene sampling)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Utensils",
    badgeColor: "bg-orange-600 text-white"
  },
  {
    id: "iso-22301",
    code: "ISO 22301:2019",
    name: "Business Continuity Management Systems (BCMS)",
    category: "Governance",
    standardsFamily: "ISO 22300 Family",
    validityYears: 3,
    shortDesc: "Guarantees organizational resilience against operational disruptions, natural disasters, power grid failures, and supply chain collapses.",
    fullDesc: "ISO 22301:2019 specifies requirements to implement, maintain, and improve a management system to protect against, reduce the likelihood of the occurrence of, prepare for, respond to, and recover from disruptions when they arise. It establishes clear Business Impact Analyses (BIA), Maximum Tolerable Periods of Disruption (MTPD), Recovery Time Objectives (RTO), and disaster recovery plans.",
    targetIndustries: [
      "Commercial Banking, Capital Markets & Insurance Providers",
      "Telecommunications Networks & Internet Infrastructure",
      "Critical Public Utilities, Power Grid & Water Treatment",
      "Aviation, Airport Ground Handling & Rail Logistics",
      "Emergency Healthcare Services & Disaster Relief Agencies",
      "Oil & Gas Pipeline Transmission Networks"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & BCMS Scope", desc: "Understanding organizational dependencies and legal obligations for continuity." },
      { number: "Clause 5", title: "Leadership & BCMS Commitment", desc: "Resource allocation for alternate sites, crisis management teams, and continuity policies." },
      { number: "Clause 6", title: "Planning & Risk Assessment", desc: "Evaluating operational disruption risks and setting continuity objectives." },
      { number: "Clause 7", title: "Support & Crisis Communication", desc: "Emergency notification systems, crisis command centers, and staff training." },
      { number: "Clause 8", title: "Operation, BIA & Continuity Plans", desc: "Business Impact Analysis (BIA), Recovery Time Objectives (RTO), recovery strategies, and disaster simulation exercises." },
      { number: "Clause 9", title: "Performance Evaluation & BCMS Drills", desc: "Testing disaster recovery procedures, tabletop exercises, internal audits, and management review." },
      { number: "Clause 10", title: "Improvement & Lessons Learned", desc: "Updating continuity procedures based on post-exercise evaluations and real-world incidents." }
    ],
    keyBenefits: [
      "Protects revenue streams and brand survival during major unforeseen disasters",
      "Ensures prompt resumption of critical services within established Recovery Time Objectives (RTO)",
      "Satisfies Central Bank, SEC, and insurance underwriting resilience mandates",
      "Provides reassurance to institutional investors, depositors, and enterprise clients"
    ],
    principles: [
      {
        number: 1,
        title: "Context-Driven Resilience",
        desc: "Understanding organizational ecosystem, external threat landscapes, supply chain vulnerabilities, and legal continuity obligations."
      },
      {
        number: 2,
        title: "Executive Crisis Leadership",
        desc: "Establishing empowered crisis management teams with clear command structures and budgetary authority for disaster recovery."
      },
      {
        number: 3,
        title: "Business Impact Analysis (BIA)",
        desc: "Quantifying financial and operational downtime impacts to establish Maximum Tolerable Periods of Disruption (MTPD) and Recovery Time Objectives (RTO)."
      },
      {
        number: 4,
        title: "Disruption Risk Assessment",
        desc: "Identifying single points of failure, cyber threats, infrastructure vulnerabilities, and power/telecom outages."
      },
      {
        number: 5,
        title: "Resilient Business Continuity Strategies",
        desc: "Implementing redundant data centers, alternate work locations, secondary supply chains, and automated failover systems."
      },
      {
        number: 6,
        title: "Routine Exercise & Simulation Drills",
        desc: "Validating emergency playbooks through realistic tabletop drills, live IT disaster recovery cutovers, and crisis communications tests."
      },
      {
        number: 7,
        title: "Continual Resilience Hardening",
        desc: "Integrating post-incident lessons learned and audit findings to continuously adapt business continuity capabilities."
      }
    ],
    marketContext: {
      qmsDefinition: "A Business Continuity Management System (BCMS) is a holistic management framework that identifies potential threats to an organization and provides a blueprint for building organizational resilience with the capability of an effective response that safeguards key stakeholders and the brand.",
      whyItMatters: "From national power grid collapses and subsea fiber-optic cuts to social unrest, cyber extortion, and currency shocks, Nigerian enterprises face severe operational continuity challenges. ISO 22301 ensures your mission-critical operations withstand major disruptions, safeguarding customer transactions and enterprise revenue.",
      tenderAdvantage: "ISO 22301 is mandatory for financial switches, tier-3 data centers, telecom operators, and core contractors serving the Central Bank of Nigeria (CBN), NIBSS, upstream energy producers, and sovereign entities.",
      keyDetailedBenefits: [
        {
          title: "1. Guaranteed Operational Uptime During National Outages",
          desc: "Pre-tested backup power, redundant cloud failover, and secondary transport corridors ensure your operations remain active when competitors fail."
        },
        {
          title: "2. Full Compliance with CBN & Financial Regulatory Mandates",
          desc: "Satisfies mandatory business continuity directives issued by the Central Bank of Nigeria, NAICOM, and the Securities and Exchange Commission (SEC)."
        },
        {
          title: "3. Preservation of Customer Trust & Corporate Valuation",
          desc: "Demonstrates to institutional depositors, international investors, and enterprise clients that your services are resilient against any disaster."
        },
        {
          title: "4. Lower Business Disruption Insurance Premiums",
          desc: "Underwriters offer preferential rates to ISO 22301-certified enterprises with verified Business Impact Analyses and disaster recovery testing."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full IAF MLA international recognition",
        "Lead Auditors with proven backgrounds in banking operations, telecommunications, and mission-critical engineering",
        "Pragmatic simulation audit techniques that stress-test actual emergency response playbooks",
        "Efficient scheduling and transparent certification deliverables"
      ],
      valueAddedPoints: [
        "Accredited ISO 22301:2019 certification proving disaster resilience",
        "Experienced auditors providing actionable insights into critical infrastructure defense",
        "Clear step-by-step pre-assessment and certification timeline",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Business Impact Analysis (BIA) & Risk Assessment Evaluation Report",
      "Disaster Recovery & Crisis Plan Audit Findings",
      "Accredited ISO 22301:2019 3-Year Certificate with EGAC & IAF Marks"
    ],
    prerequisites: [
      "Business Continuity Policy and Crisis Management Team charter",
      "Completed Business Impact Analysis (BIA) across all critical functions",
      "Documented Business Continuity Plans (BCP) and Disaster Recovery (DR) procedures",
      "Evidence of at least one completed continuity exercise/drill"
    ],
    auditSteps: [
      "Step 1: Scoping & Business Impact Analysis (BIA) methodology review",
      "Step 2: Stage 1 Audit (review of BIA documents, RTO/RPO targets, and crisis policies)",
      "Step 3: Stage 2 Audit (witnessing crisis team simulations, alternate facility readiness, and backup generator/telecom failover audits)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Scale",
    badgeColor: "bg-indigo-600 text-white"
  },
  {
    id: "iso-37001",
    code: "ISO 37001:2016",
    name: "Anti-Bribery Management Systems (ABMS)",
    category: "Governance",
    standardsFamily: "ISO 37000 Family",
    validityYears: 3,
    shortDesc: "International benchmark to prevent, detect, and address bribery and corruption across corporate operations and procurement.",
    fullDesc: "ISO 37001:2016 specifies requirements and provides guidance for establishing, implementing, maintaining, reviewing and improving an anti-bribery management system. The standard covers bribery in the public, private, and not-for-profit sectors, including bribery by and against an organization or its staff, and bribes paid or received through third-party agents, contractors, and joint-venture partners.",
    targetIndustries: [
      "Oil & Gas EPC, Upstream Exploration & Joint Ventures",
      "Public Infrastructure & Government Contracting Consortia",
      "Defense, Aerospace & Security Procurement",
      "Pharmaceuticals & Public Healthcare Supplies",
      "Banking, Capital Markets & Sovereign Wealth Funds",
      "International Trade, Customs Clearance & Freight Forwarding"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & Bribery Risk Assessment", desc: "Evaluating country risks, sector risks, transaction risks, and business partner risks." },
      { number: "Clause 5", title: "Leadership & Anti-Bribery Compliance Function", desc: "Top management tone-at-the-top and establishing an independent Anti-Bribery Compliance Officer." },
      { number: "Clause 6", title: "Planning & Anti-Bribery Objectives", desc: "Developing anti-bribery risk mitigation plans and measurable compliance KPIs." },
      { number: "Clause 7", title: "Support, Due Diligence & Whistleblowing", desc: "Anti-bribery training, conflicts of interest declarations, and secure, confidential whistleblowing channels." },
      { number: "Clause 8", title: "Operation & Commercial Due Diligence", desc: "Financial controls, non-financial procurement controls, gifts and hospitality policies, and third-party vetting." },
      { number: "Clause 9", title: "Performance Evaluation & Compliance Auditing", desc: "Independent anti-bribery internal audits, compliance reporting, and management reviews." },
      { number: "Clause 10", title: "Investigation & Continual Improvement", desc: "Investigating reported bribery suspicions, corrective actions, and disciplinary enforcement." }
    ],
    keyBenefits: [
      "Provides legal defense and demonstrates adequate procedures against anti-corruption enforcement (FCPA, UK Bribery Act, EFCC)",
      "Protects enterprise reputation and prevents catastrophic multi-million dollar penalties",
      "Mandatory requirement for participating in World Bank, AfDB, and multilateral development bank funded projects",
      "Enforces airtight transparency across high-value procurement and contractor selection"
    ],
    principles: [
      {
        number: 1,
        title: "Proportionate Anti-Bribery Procedures",
        desc: "Designing anti-bribery policies, controls, and oversight proportionate to the organization's specific bribery risk exposure."
      },
      {
        number: 2,
        title: "Top-Level Commitment & Tone from the Top",
        desc: "Ensuring the Board of Directors and senior executives demonstrate visible, unequivocal zero-tolerance for bribery and corruption."
      },
      {
        number: 3,
        title: "Comprehensive Bribery Risk Assessment",
        desc: "Systematically identifying bribery risks across procurement, customs, permits, third-party agents, and public sector interactions."
      },
      {
        number: 4,
        title: "Third-Party & Vendor Due Diligence",
        desc: "Thoroughly vetting commercial agents, joint venture partners, suppliers, and distributors before and during engagement."
      },
      {
        number: 5,
        title: "Airtight Financial & Commercial Controls",
        desc: "Implementing dual authorization, payment tracking, gift registers, and anti-facilitation payment rules."
      },
      {
        number: 6,
        title: "Confidential Whistleblowing & Protection",
        desc: "Providing secure, non-retaliatory reporting channels for employees and stakeholders to report bribery suspicions in total safety."
      },
      {
        number: 7,
        title: "Continuous Monitoring & Independent Investigation",
        desc: "Conducting independent anti-bribery audits, investigating red flags, and taking decisive corrective disciplinary actions."
      }
    ],
    marketContext: {
      qmsDefinition: "An Anti-Bribery Management System (ABMS) is a structured framework that helps organizations prevent, detect, and respond to bribery and corruption, fostering an ethical corporate culture and complying with statutory anti-bribery laws.",
      whyItMatters: "Bribery and corruption represent severe risks that result in catastrophic criminal prosecution, blacklisting by development finance institutions, and irreparable brand destruction. In high-value procurement across Nigeria's energy, infrastructure, and maritime sectors, ISO 37001 provides absolute proof of ethical governance and transparent commercial operations.",
      tenderAdvantage: "Mandatory prerequisite for participating in World Bank, African Development Bank (AfDB), IFC-funded infrastructure projects, and international joint ventures governed by the US Foreign Corrupt Practices Act (FCPA) and UK Bribery Act.",
      keyDetailedBenefits: [
        {
          title: "1. Legal Defense & Exemption from Corporate Criminal Liability",
          desc: "Demonstrates that your organization has implemented 'Adequate Procedures' under the UK Bribery Act, US FCPA, and Nigerian EFCC/ICPC statutory regulations."
        },
        {
          title: "2. Eligibility for Multilateral Bank Contracts",
          desc: "Qualifies your firm to bid for multi-million dollar infrastructure tenders funded by the World Bank, AfDB, Islamic Development Bank, and international development agencies."
        },
        {
          title: "3. Airtight Protection of Corporate Procurement Funds",
          desc: "Prevents procurement fraud, kickbacks, inflated vendor pricing, and unauthorized disbursement of corporate capital."
        },
        {
          title: "4. Uncompromised International Brand Reputation",
          desc: "Assures international partners, joint venture consortia, and institutional investors of your uncompromising business ethics."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international IAF MLA recognition",
        "Lead Auditors with extensive forensic auditing and corporate governance experience",
        "Pragmatic anti-bribery audit methodology that strengthens commercial operations without stifling legitimate business speed",
        "Transparent certification process with complete confidentiality"
      ],
      valueAddedPoints: [
        "Accredited ISO 37001:2016 certification unlocking high-value public and international contracts",
        "Deep expertise in anti-bribery compliance across African and global jurisdictions",
        "Structured audit pathways with fast-track scheduling",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Bribery Risk Assessment & Due Diligence Review Report",
      "Stage 1 & Stage 2 Anti-Bribery Compliance Audit Reports",
      "Accredited ISO 37001:2016 3-Year Certificate with EGAC & IAF Marks"
    ],
    prerequisites: [
      "Anti-Bribery Policy and Code of Conduct",
      "Appointment of an independent Anti-Bribery Compliance Function/Officer",
      "Documented Third-Party Due Diligence Procedure and Gifts/Hospitality Register",
      "Confidential, non-retaliatory Whistleblowing Procedure"
    ],
    auditSteps: [
      "Step 1: Scoping of commercial operations, procurement divisions, and agent networks",
      "Step 2: Stage 1 Audit (review of anti-bribery policies, risk matrices, and compliance governance structures)",
      "Step 3: Stage 2 Audit (sample audits of high-value procurement contracts, third-party vetting files, financial disbursement controls, and anonymous staff interviews)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Scale",
    badgeColor: "bg-indigo-600 text-white"
  },
  {
    id: "iso-50001",
    code: "ISO 50001:2018",
    name: "Energy Management Systems (EnMS)",
    category: "Environment & Energy",
    standardsFamily: "ISO 50000 Family",
    validityYears: 3,
    shortDesc: "Data-driven framework to optimize energy performance, reduce electricity/fuel costs, and lower greenhouse gas (GHG) emissions.",
    fullDesc: "ISO 50001:2018 transforms the way organizations manage energy. By establishing an Energy Baseline (EnB) and Energy Performance Indicators (EnPIs), organizations systematically identify Significant Energy Uses (SEUs), execute capital-efficient energy conservation measures, and continually reduce operational utility costs while slashing corporate carbon emissions.",
    targetIndustries: [
      "Heavy Manufacturing, Cement & Steel Smelters",
      "Chemical, Petrochemical & Refining Complexes",
      "Commercial Real Estate, Shopping Malls & Data Centers",
      "Food & Beverage Manufacturing and Breweries",
      "Textile & Plastic Molding Factories",
      "Hospitals & Large University Campuses"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & Energy Scope", desc: "Defining facility boundaries and energy consumption profiles." },
      { number: "Clause 5", title: "Leadership & Energy Policy", desc: "Management commitment to energy efficiency and procurement of energy-efficient designs." },
      { number: "Clause 6", title: "Energy Planning & Energy Review", desc: "Conducting energy reviews, identifying Significant Energy Uses (SEUs), and establishing EnBs and EnPIs." },
      { number: "Clause 7", title: "Support, Metering & Energy Competency", desc: "Energy awareness training, sub-metering infrastructure, and data collection plans." },
      { number: "Clause 8", title: "Operational Control & Energy-Efficient Design", desc: "Operating boilers, chillers, and compressors within optimal parameters; energy-conscious procurement." },
      { number: "Clause 9", title: "Performance Evaluation & EnPI Tracking", desc: "Monitoring energy consumption vs baseline, verifying energy savings, and internal EnMS audits." },
      { number: "Clause 10", title: "Continual Energy Improvement", desc: "Achieving verifiable, documented improvements in energy performance and efficiency." }
    ],
    keyBenefits: [
      "Directly reduces facility electrical bills, diesel generator fuel consumption, and steam losses by 10% to 30%",
      "Provides hard, auditable data for corporate sustainability and Carbon Footprint / ESG disclosures",
      "Extends the operational lifespan of heavy industrial equipment like boilers, chillers, and motors",
      "Protects against rising energy tariffs and grid volatility"
    ],
    principles: [
      {
        number: 1,
        title: "Energy Baseline (EnB) & Energy Review",
        desc: "Conducting rigorous energy reviews using historical consumption data, utility bills, and sub-meter logging to establish a scientific baseline."
      },
      {
        number: 2,
        title: "Significant Energy Uses (SEUs) Identification",
        desc: "Pinpointing heavy energy-consuming machinery (boilers, chillers, kilns, compressors, generators) to focus efficiency interventions."
      },
      {
        number: 3,
        title: "Energy Performance Indicators (EnPIs)",
        desc: "Establishing quantifiable metrics (e.g., kWh/ton produced, liters of diesel/operating hour) to track ongoing energy efficiency gains."
      },
      {
        number: 4,
        title: "Energy-Efficient Design & Procurement",
        desc: "Integrating life-cycle energy consumption criteria into capital equipment purchasing and facility engineering designs."
      },
      {
        number: 5,
        title: "Sub-Metering & Real-Time Monitoring",
        desc: "Deploying automated electrical sub-meters and thermal sensors for granular visibility into consumption patterns."
      },
      {
        number: 6,
        title: "Operational Energy Conservation",
        desc: "Optimizing operating setpoints, reducing idling losses, eliminating compressed air leaks, and recovering waste heat."
      },
      {
        number: 7,
        title: "Continual Energy Performance Improvement",
        desc: "Achieving verifiable, documented reductions in specific energy intensity through iterative energy action plans and internal audits."
      }
    ],
    marketContext: {
      qmsDefinition: "An Energy Management System (EnMS) is a systematic framework that enables organizations to establish the systems and processes necessary to continually improve energy performance, including energy efficiency, energy use, and consumption.",
      whyItMatters: "With soaring electricity tariffs and exorbitant diesel generation costs in Nigeria, industrial power expenses account for up to 40% of manufacturing overhead. ISO 50001 empowers companies to systematically eliminate energy waste, reduce dependence on high-cost captive generators, and dramatically slash operating costs.",
      tenderAdvantage: "Certified ISO 50001 status provides verified carbon reduction data required by ESG investment funds, multinational corporate supply chains, and green procurement initiatives.",
      keyDetailedBenefits: [
        {
          title: "1. 10% to 30% Reduction in Utility & Diesel Fuel Costs",
          desc: "Targeting Significant Energy Uses (SEUs) and eliminating thermal/electrical waste directly reduces monthly power bills and generator diesel burn."
        },
        {
          title: "2. Extended Industrial Equipment Lifespan",
          desc: "Operating heavy machinery (compressors, HVAC chillers, transformers, industrial motors) within optimal thermodynamic limits prevents premature burnouts."
        },
        {
          title: "3. Verified Corporate Carbon Footprint (GHG) Reductions",
          desc: "Provides auditable energy data fulfilling ESG reporting requirements, carbon tax exemptions, and sustainability-linked financing."
        },
        {
          title: "4. Protection Against Power Tariff Increases",
          desc: "Substantially lowers baseline energy intensity, shielding organizational profitability from future utility tariff hikes and fuel price volatility."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with worldwide IAF MLA international recognition",
        "Lead Auditors with proven backgrounds in thermal engineering, electrical power systems, and industrial energy auditing",
        "Pragmatic approach focusing on high-ROI operational adjustments and low-cost energy efficiency wins",
        "Transparent pricing with structured surveillance audit roadmaps"
      ],
      valueAddedPoints: [
        "Accredited ISO 50001:2018 certification delivering immediate energy savings",
        "Expert energy auditing team providing actionable thermodynamic and electrical insights",
        "Clear step-by-step pre-assessment and certification timeline",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Energy Review & Significant Energy Use (SEU) Audit Report",
      "Energy Performance Indicator (EnPI) Verification Report",
      "Accredited ISO 50001:2018 3-Year Certificate with EGAC & IAF Marks"
    ],
    prerequisites: [
      "Documented Energy Policy and appointment of an Energy Management Team",
      "Comprehensive Energy Review identifying all Significant Energy Uses (SEUs)",
      "Established Energy Baselines (EnB) and Energy Performance Indicators (EnPIs)",
      "Energy Action Plans with allocated budgets and responsible owners"
    ],
    auditSteps: [
      "Step 1: Energy baseline review (analysis of utility bills, single-line diagrams, and generator logs)",
      "Step 2: Stage 1 Audit (evaluation of energy review methodology, EnB calculations, and EnPI validity)",
      "Step 3: Stage 2 Audit (on-site verification of boiler/chiller operations, metering calibration, and energy saving projects)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Zap",
    badgeColor: "bg-yellow-600 text-white"
  },
  {
    id: "iso-13485",
    code: "ISO 13485:2016",
    name: "Medical Devices Quality Management Systems",
    category: "Food & Medical",
    standardsFamily: "ISO 13480 Family",
    validityYears: 3,
    shortDesc: "Rigorous quality management standard ensuring clinical safety, risk management (ISO 14971), and regulatory compliance for medical device manufacturing.",
    fullDesc: "ISO 13485:2016 specifies requirements for a quality management system where an organization needs to demonstrate its ability to provide medical devices and related services that consistently meet customer and applicable regulatory requirements across the entire lifecycle: design, manufacture, packaging, storage, distribution, installation, and servicing.",
    targetIndustries: [
      "Medical Device & Diagnostic Equipment Manufacturers",
      "Surgical Instruments & Orthopedic Implant Fabricators",
      "In-Vitro Diagnostic (IVD) Reagent Laboratories",
      "Personal Protective Equipment (PPE) & Medical Consumables",
      "Medical Software & Healthtech Device Developers",
      "Sterilization Services & Medical Device Logistics"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Quality Management System & Technical Files", desc: "Medical Device Files (MDF) and regulatory documentation retention." },
      { number: "Clause 5", title: "Management Responsibility", desc: "Commitment to meeting medical regulatory requirements and patient safety." },
      { number: "Clause 6", title: "Resource Management & Contamination Control", desc: "Cleanroom environmental controls, particulate monitoring, and personnel hygiene." },
      { number: "Clause 7", title: "Product Realization & ISO 14971 Risk Management", desc: "Design controls, clinical evaluations, sterilization validation, traceability, and device master records." },
      { number: "Clause 8", title: "Measurement, Feedback & Vigilance Reporting", desc: "Post-market surveillance, advisory notices, customer complaint handling, and vigilance reporting." }
    ],
    keyBenefits: [
      "Accelerates regulatory approvals and export clearance across international healthcare markets (CE Mark, FDA 21 CFR 820)",
      "Guarantees clinical safety, bio-compatibility, and defect-free medical device production",
      "Implements structured ISO 14971 risk management throughout the product lifecycle",
      "Increases confidence among hospital procurement directors and healthcare providers"
    ],
    principles: [
      {
        number: 1,
        title: "Patient Safety & Clinical Efficacy First",
        desc: "Ensuring every engineering and manufacturing decision prioritizes patient well-being, clinical accuracy, and zero product failure."
      },
      {
        number: 2,
        title: "Lifecycle Risk Management (ISO 14971)",
        desc: "Systematically identifying clinical and biocompatibility hazards from initial design to end-of-life disposal."
      },
      {
        number: 3,
        title: "Cleanroom & Contamination Control",
        desc: "Maintaining validated cleanroom environments (ISO 14644), particulate monitoring, bioburden limits, and strict personnel hygiene."
      },
      {
        number: 4,
        title: "Design Verification & Validation",
        desc: "Executing design qualification (DQ), installation qualification (IQ), operational qualification (OQ), and performance qualification (PQ)."
      },
      {
        number: 5,
        title: "Full Component Traceability & Device History",
        desc: "Maintaining Device Master Records (DMR) and Device History Records (DHR) with complete batch component traceability."
      },
      {
        number: 6,
        title: "Sterilization Validation & Packaging Integrity",
        desc: "Ensuring sterile barrier systems (ISO 11607) remain intact and validated across transit and storage conditions."
      },
      {
        number: 7,
        title: "Post-Market Surveillance & Vigilance Reporting",
        desc: "Monitoring real-world clinical performance, managing customer complaints, and executing prompt regulatory vigilance notifications."
      }
    ],
    marketContext: {
      qmsDefinition: "A Medical Device Quality Management System is a specialized regulatory framework that ensures medical devices, in-vitro diagnostics, and medical consumables consistently meet customer specifications and stringent statutory safety standards throughout their lifecycle.",
      whyItMatters: "In medical device manufacturing and distribution, defective equipment or contaminated consumables can have fatal clinical consequences. ISO 13485 is the global passport required for NAFDAC product registrations, hospital procurement tenders, and CE/FDA export certifications.",
      tenderAdvantage: "Mandatory qualification for hospital tenders, public healthcare procurement by Federal Ministry of Health, and supplying multinational healthcare networks.",
      keyDetailedBenefits: [
        {
          title: "1. Rapid NAFDAC & International Regulatory Approval",
          desc: "Accelerates medical device dossier evaluations with NAFDAC, CE Marking notified bodies, and international health ministries."
        },
        {
          title: "2. Absolute Quality Assurance & Patient Safety",
          desc: "Eliminates contamination risks, calibration drift, and component failures through validated cleanroom controls and ISO 14971 risk management."
        },
        {
          title: "3. Unlocks Global Medical Export Markets",
          desc: "Enables Nigerian medical device and PPE fabricators to export safely to European, American, and Pan-African healthcare networks."
        },
        {
          title: "4. Winning Hospital & Government Health Tenders",
          desc: "Provides hospitals, diagnostic centers, and health ministries with verified proof of flawless manufacturing and clinical governance."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international IAF MLA recognition",
        "Lead Auditors specializing in biomedical engineering, clinical pharmacology, and medical manufacturing",
        "Comprehensive technical file assessments and cleanroom validation audits",
        "Structured certification roadmap with responsive customer support"
      ],
      valueAddedPoints: [
        "Accredited ISO 13485:2016 certification unlocking international healthcare trade",
        "Expert medical device auditors with deep knowledge of NAFDAC and global health regulations",
        "Transparent pricing with structured surveillance audit roadmaps",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Technical File & Cleanroom Environmental Audit Report",
      "ISO 14971 Risk Management Verification Findings",
      "Accredited ISO 13485:2016 3-Year Certificate with EGAC & IAF Marks"
    ],
    prerequisites: [
      "Medical Device File (MDF) for each device family",
      "Documented Risk Management File in accordance with ISO 14971",
      "Sterilization validation and cleanroom environmental monitoring records",
      "Post-market surveillance and customer complaint handling procedures"
    ],
    auditSteps: [
      "Step 1: Scoping of medical device classes, risk tiers, and technical files",
      "Step 2: Stage 1 Audit (review of technical documentation, risk management files, and clinical evaluation records)",
      "Step 3: Stage 2 Audit (cleanroom audit, manufacturing line verification, sterilization process checks, and batch traceability sampling)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Stethoscope",
    badgeColor: "bg-teal-600 text-white"
  },
  {
    id: "iso-28000",
    code: "ISO 28000:2022",
    name: "Security Management Systems for the Supply Chain",
    category: "Governance",
    standardsFamily: "ISO 28000 Family",
    validityYears: 3,
    shortDesc: "Protects international supply chains against theft, piracy, contraband, terrorism, cyber attacks, and freight transit cargo sabotage.",
    fullDesc: "ISO 28000:2022 specifies requirements for a security management system, including those aspects critical to security assurance of the supply chain. Applicable to organizations of all sizes across the global logistics chain—from raw material sourcing and freight forwarding to port operations and final-mile distribution—ISO 28000 establishes comprehensive security threat assessments, perimeter protections, tamper-evident seals, and asset tracking.",
    targetIndustries: [
      "Maritime Shipping Lines, Port Operators & Container Terminals",
      "Freight Forwarding, Air Cargo & Customs Brokerages",
      "High-Value Electronics, Cash-in-Transit & Bonded Warehousing",
      "Cross-Border Trucking & Overland Fleet Operations",
      "Oil & Gas Fuel Distribution & Pipeline Terminals"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context of Supply Chain Security", desc: "Mapping supply chain transit nodes, intermodal transfer points, and geopolitical security threats." },
      { number: "Clause 5", title: "Security Leadership & Policies", desc: "Top executive commitments to cargo security, asset protection, and anti-tampering enforcement." },
      { number: "Clause 6", title: "Security Risk Assessment & Threat Modeling", desc: "Identifying vulnerabilities to cargo theft, piracy, smuggling, and facility infiltration." },
      { number: "Clause 7", title: "Support, Vetting & Security Awareness", desc: "Staff security background checks, access control badging, and security incident reporting." },
      { number: "Clause 8", title: "Operational Security Controls", desc: "Tamper-evident container seals, GPS convoy tracking, CCTV monitoring, and warehouse security protocols." },
      { number: "Clause 9", title: "Performance Evaluation & Security Drills", desc: "Breach response simulation drills, security audits, and transport route risk evaluations." },
      { number: "Clause 10", title: "Security Incident Response & Improvement", desc: "Cargo loss investigations, security enhancements, and corrective actions." }
    ],
    keyBenefits: [
      "Drastically reduces cargo theft, pilferage, loss in transit, and container tampering",
      "Accelerates customs clearance under Authorized Economic Operator (AEO) and C-TPAT programs",
      "Lowers marine cargo and transit insurance premiums",
      "Secures contracts with multinational manufacturers requiring verified secure supply chains"
    ],
    principles: [
      {
        number: 1,
        title: "Supply Chain Threat Modeling",
        desc: "Mapping end-to-end freight corridors and evaluating risks from theft, piracy, sabotage, smuggling, and terrorism."
      },
      {
        number: 2,
        title: "Physical & Perimeter Security Controls",
        desc: "Enforcing perimeter fencing, biometric access gates, 24/7 CCTV surveillance, and secure container holding yards."
      },
      {
        number: 3,
        title: "Tamper-Evident Cargo Sealing & Tracking",
        desc: "Deploying high-security ISO 17712 bolt seals, electronic seal logging, and real-time GPS telemetry on transport convoys."
      },
      {
        number: 4,
        title: "Personnel Vetting & Security Badging",
        desc: "Conducting rigorous background checks on drivers, warehouse handlers, and third-party logistics sub-contractors."
      },
      {
        number: 5,
        title: "Emergency Incident & Hijack Response",
        desc: "Maintaining rapid emergency communications with maritime security, customs, and police rapid response units."
      },
      {
        number: 6,
        title: "Customs Authorized Economic Operator (AEO) Alignment",
        desc: "Integrating supply chain security protocols with Nigerian Customs Service (NCS) AEO fast-track clearance guidelines."
      },
      {
        number: 7,
        title: "Continual Supply Chain Security Auditing",
        desc: "Regularly auditing transport routes, port facilities, and bonded warehouses to preempt emerging security threats."
      }
    ],
    marketContext: {
      qmsDefinition: "A Security Management System for the Supply Chain is a risk-based framework that safeguards cargo, logistics facilities, and transportation corridors against theft, smuggling, sabotage, and security disruptions.",
      whyItMatters: "Cargo diversion, transit hijackings, maritime piracy in the Gulf of Guinea, and warehouse pilferage cause billions in losses annually across West Africa. ISO 28000 provides multinational shippers, port operators, and freight forwarders with bulletproof security assurance.",
      tenderAdvantage: "Mandatory qualification for international bonded warehousing, oil & gas maritime transport, and customs Authorized Economic Operator (AEO) status.",
      keyDetailedBenefits: [
        {
          title: "1. Elimination of Cargo Theft & En-Route Hijacking",
          desc: "Rigorous route risk assessments, GPS geo-fencing, and high-security tamper-evident seals protect freight from origin to final consignee."
        },
        {
          title: "2. Fast-Track Customs Clearance (AEO Status)",
          desc: "Enables logistics companies to qualify for Nigerian Customs AEO green-lane clearance, reducing port dwell times from weeks to hours."
        },
        {
          title: "3. Substantial Reductions in Marine & Cargo Insurance",
          desc: "Insurance syndicates offer significantly reduced premium rates for ISO 28000-certified transport and warehousing fleets."
        },
        {
          title: "4. Winning High-Value FMCG & Industrial Logistics Tenders",
          desc: "Multinational manufacturers (electronics, pharmaceuticals, tobacco, high-value consumer goods) mandate ISO 28000 for transport partners."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international IAF MLA recognition",
        "Lead Auditors with proven experience in port operations, maritime security, and logistics threat mitigation",
        "Pragmatic field audits that evaluate real physical security and transit risk controls",
        "Efficient scheduling and transparent certification deliverables"
      ],
      valueAddedPoints: [
        "Accredited ISO 28000:2022 certification securing global logistics contracts",
        "Specialized supply chain security auditors with deep African freight corridor insights",
        "Structured audit pathways with fast-track scheduling",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Supply Chain Security Threat & Vulnerability Assessment Report",
      "Warehouse & Transit Facility Physical Security Audit Findings",
      "Accredited ISO 28000:2022 3-Year Certificate with EGAC / IAF Mark"
    ],
    prerequisites: [
      "Supply Chain Security Policy and appointment of Security Manager",
      "Comprehensive Security Risk Assessment covering all transportation routes and warehousing hubs",
      "Access control, CCTV, and container sealing standard operating procedures",
      "Emergency security response and breach containment plan"
    ],
    auditSteps: [
      "Step 1: Scoping of transit nodes, trucking fleets, and warehousing hubs",
      "Step 2: Stage 1 Audit (documentation, route threat assessments, and security SOP review)",
      "Step 3: Stage 2 Audit (physical audit of freight yards, container storage, tracking systems, and driver verification protocols)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Lock",
    badgeColor: "bg-slate-700 text-white"
  },
  {
    id: "iso-29001",
    code: "ISO 29001:2020",
    name: "Petroleum, Petrochemical & Natural Gas QMS",
    category: "Quality",
    standardsFamily: "ISO 29000 / API Spec Q1",
    validityYears: 3,
    shortDesc: "Sector-specific quality standard for oil and gas upstream, midstream, and downstream equipment manufacturers and service providers.",
    fullDesc: "ISO 29001:2020 defines quality management system requirements for the petroleum, petrochemical, and natural gas industries. Aligned closely with API Spec Q1 and ISO 9001, it introduces supplemental requirements for design verification, strict material traceability, positive material identification (PMI), non-destructive testing, and defect prevention in critical high-pressure, high-temperature (HPHT) and sour service environments.",
    targetIndustries: [
      "Oil & Gas EPC Contractors & Offshore Fabrication Yards",
      "Drilling Tool & Wellhead Equipment Manufacturers",
      "Subsea Pipeline, Valves & Pressure Vessel Fabricators",
      "Refinery & Petrochemical Processing Facilities",
      "Oilfield Chemical Providers & Tubular Inspection Services"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & High-Risk Scope", desc: "Addressing high-hazard hydrocarbon extraction and processing environments." },
      { number: "Clause 5", title: "Leadership & Technical Governance", desc: "Ensuring top management engineering oversight and customer technical specification compliance." },
      { number: "Clause 6", title: "Contingency Planning & Risk Control", desc: "Rigorous FMEA (Failure Mode and Effects Analysis) and preventive maintenance." },
      { number: "Clause 7", title: "Support, Traceability & MTR Verification", desc: "Mill Test Reports (MTR), heat number traceability, and welding engineer qualifications." },
      { number: "Clause 8", title: "Operational Control, NDT & Hydrotesting", desc: "Strict quality control plans (QCP), inspection and test plans (ITP), witness points, and special processes (welding, NDT, coating)." },
      { number: "Clause 9", title: "Performance Evaluation & Vendor Audits", desc: "Vendor shop audits, non-conformance trending, and management review." },
      { number: "Clause 10", title: "Root Cause Failure Analysis", desc: "Comprehensive metallurgy and operational failure investigation." }
    ],
    keyBenefits: [
      "Meets mandatory pre-qualification requirements for major international oil companies (IOCs) and national oil companies (NOCs)",
      "Guarantees integrity of high-risk components, preventing catastrophic blowouts and pipeline ruptures",
      "Ensures full traceability of alloy materials and welding qualifications",
      "Streamlines alignment with API Spec Q1 and Q2 standards"
    ],
    principles: [
      {
        number: 1,
        title: "Defect Prevention in Harsh Environments",
        desc: "Designing high-reliability quality controls specifically tailored for high-pressure, high-temperature (HPHT) and corrosive sour hydrocarbon service."
      },
      {
        number: 2,
        title: "100% Raw Material & Alloy Traceability",
        desc: "Enforcing unbroken traceability with certified Mill Test Reports (MTR), heat numbers, and Positive Material Identification (PMI)."
      },
      {
        number: 3,
        title: "Special Process Qualification",
        desc: "Strict qualification and validation of welding (WPS/PQR), Non-Destructive Testing (NDT Level II/III), heat treatment, and anti-corrosion coating."
      },
      {
        number: 4,
        title: "Rigorous Inspection & Test Plans (ITP)",
        desc: "Establishing mandatory witness, hold, and review quality inspection points across fabrication, machining, and assembly."
      },
      {
        number: 5,
        title: "Design Verification & Hydrostatic Testing",
        desc: "Executing burst pressure, hydro-testing, and finite element stress verification under extreme simulated downhole conditions."
      },
      {
        number: 6,
        title: "Supply Chain & Subcontractor Integrity",
        desc: "Conducting technical audits and incoming inspections on forged parts, fasteners, and subsea hydraulic valves."
      },
      {
        number: 7,
        title: "Continual Technical Quality Improvement",
        desc: "Utilizing comprehensive metallurgical failure analyses and operational field performance data to refine manufacturing tolerances."
      }
    ],
    marketContext: {
      qmsDefinition: "ISO 29001 is the sector-specific Quality Management System standard developed jointly by ISO and the American Petroleum Institute (API) for the petroleum, petrochemical, and natural gas industries.",
      whyItMatters: "In Nigeria's oil and gas sector, equipment failure or defective fabrication leads to catastrophic blowouts, oil spills, multi-million dollar production shut-ins, and severe NUPRC sanctions. ISO 29001 ensures engineering integrity, strict NDT oversight, and flawless material traceability.",
      tenderAdvantage: "Mandatory qualification for pre-qualifying on the Nigerian Petroleum Exchange (NIPEX) portal, and bidding on engineering, procurement, and fabrication (EPC) tenders with NNPC, Shell, Chevron, TotalEnergies, and ExxonMobil.",
      keyDetailedBenefits: [
        {
          title: "1. NIPEX & IOC Pre-Qualification Clearance",
          desc: "Unlocks top-tier contractor categorization on the NIPEX joint qualification system and major energy operator vendor lists."
        },
        {
          title: "2. Prevention of Catastrophic Wellhead & Pipeline Failures",
          desc: "Eliminates metallurgical defects, weld cracks, and valve leaks through mandatory Positive Material Identification (PMI) and NDT inspections."
        },
        {
          title: "3. Full Alignment with NCDMB Nigerian Content Mandates",
          desc: "Proves local fabrication yards and engineering machine shops maintain world-class quality standards without requiring foreign oversight."
        },
        {
          title: "4. Harmonized Compatibility with API Spec Q1/Q2",
          desc: "Provides a unified quality foundation that satisfies both international ISO and American Petroleum Institute auditing bodies."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international IAF MLA recognition",
        "Lead Auditors with proven backgrounds in offshore metallurgy, pipeline engineering, and subsea fabrication",
        "Rigorous verification of welding (WPS/PQR), NDT records, and material test reports (MTR)",
        "Structured audit pathways with fast-track scheduling"
      ],
      valueAddedPoints: [
        "Accredited ISO 29001:2020 certification unlocking oil & gas EPC contracts",
        "Experienced petroleum quality auditors with deep knowledge of Nigerian upstream and downstream assets",
        "Clear step-by-step pre-assessment and certification timeline",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Quality Control Plan (QCP) & Special Process Evaluation Report",
      "Traceability & NDT Audit Findings",
      "Accredited ISO 29001:2020 3-Year Certificate with EGAC & IAF Marks"
    ],
    prerequisites: [
      "Quality manual incorporating oil & gas supplemental requirements",
      "Inspection and Test Plans (ITP) and Welding Procedure Specifications (WPS/PQR)",
      "Material traceability procedures covering 100% of pressure-containing materials",
      "Internal audit report and management review records"
    ],
    auditSteps: [
      "Step 1: Scoping of fabrication facilities, machine shops, and field service bases",
      "Step 2: Stage 1 Audit (review of ITPs, WPS/PQRs, MTR files, and risk management systems)",
      "Step 3: Stage 2 Audit (on-site witnessing of welding, hydrotesting, NDT inspections, and calibration labs)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Award",
    badgeColor: "bg-blue-800 text-white"
  },
  {
    id: "iso-20000",
    code: "ISO/IEC 20000-1:2018",
    name: "Information Technology Service Management Systems (ITSM)",
    slug: "information-technology-service",
    imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    category: "Information Security",
    standardsFamily: "ISO 20000 Family / ITIL",
    validityYears: 3,
    shortDesc: "Delivering high-quality IT service management (ITSM), incident resolution workflows, service level agreements (SLAs), and ITIL alignment.",
    fullDesc: "ISO/IEC 20000-1:2018 is the recognized international standard for Information Technology Service Management (ITSM). It establishes requirements for the service provider to plan, establish, implement, operate, monitor, review, maintain and improve a Service Management System (SMS). Covering service catalog management, incident & problem management, change enablement, capacity planning, and SLA monitoring, ISO 20000 ensures seamless digital delivery and customer satisfaction.",
    targetIndustries: [
      "IT Managed Service Providers (MSPs) & SaaS Companies",
      "Cloud Infrastructure & Data Center Operators",
      "Telecommunications & Internet Service Providers (ISPs)",
      "Fintech, Digital Banking & Payment Processors",
      "Enterprise IT Departments & System Integrators"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context of the Organization & SMS Scope", desc: "Defining boundaries of IT services, dependencies on internal/external suppliers, and stakeholder SLA commitments." },
      { number: "Clause 5", title: "Leadership & IT Service Management Policy", desc: "Executive sponsorship, service governance committees, and customer focus." },
      { number: "Clause 6", title: "Planning & Service Risk Management", desc: "Addressing service continuity risks, capacity planning, and measurable service objectives." },
      { number: "Clause 7", title: "Support, Resources & IT Competency", desc: "Resource allocation, ticketing tools, configuration management database (CMDB), and staff technical training." },
      { number: "Clause 8", title: "Operation of the Service Management System", desc: "Service portfolio, relationship & agreement management, supply & demand, service design, build & transition, and service resolution." },
      { number: "Clause 9", title: "Performance Evaluation & SLA Monitoring", desc: "Service level performance reviews, customer satisfaction surveys, and internal SMS audits." },
      { number: "Clause 10", title: "Continual Service Improvement (CSI)", desc: "Systematic root cause analysis, service optimization, and automated workflow enhancements." }
    ],
    keyBenefits: [
      "Drives measurable improvement in IT incident resolution times and system uptime",
      "Establishes enforceable Service Level Agreements (SLAs) with clients and vendors",
      "Provides alignment between IT operations, ITIL best practices, and enterprise business goals",
      "Qualifies your MSP/SaaS business for major corporate enterprise IT contracts",
      "Significantly reduces unscheduled downtime and customer support friction"
    ],
    principles: [
      {
        number: 1,
        title: "Service Portfolio & Catalog Management",
        desc: "Clearly defining all digital services, dependencies, pricing, and service level agreements (SLAs) in a centralized customer-facing catalog."
      },
      {
        number: 2,
        title: "Structured Incident & Service Request Management",
        desc: "Deploying automated ticketing workflows to triage, escalate, and resolve IT disruptions within agreed Mean Time to Resolution (MTTR) limits."
      },
      {
        number: 3,
        title: "Proactive Problem Management & Root Cause Analysis",
        desc: "Investigating recurring IT incidents to eliminate systemic bugs, network bottlenecks, and recurring infrastructure errors."
      },
      {
        number: 4,
        title: "Controlled Change Enablement & Configuration Management",
        desc: "Maintaining an accurate Configuration Management Database (CMDB) and evaluating release risks via a Change Advisory Board (CAB)."
      },
      {
        number: 5,
        title: "Service Level Agreement (SLA) Governance",
        desc: "Monitoring real-time uptime, response times, and throughput against customer contracts, publishing transparent service health dashboards."
      },
      {
        number: 6,
        title: "IT Service Continuity & Capacity Planning",
        desc: "Forecasting compute, storage, and bandwidth demands while maintaining verified backup and failover disaster recovery capabilities."
      },
      {
        number: 7,
        title: "Continual Service Improvement (CSI)",
        desc: "Iteratively automating workflows, incorporating user feedback, and refining service architectures to maximize efficiency."
      }
    ],
    marketContext: {
      qmsDefinition: "An Information Technology Service Management System (ITSM) is an integrated framework of processes, policies, and procedures to design, transition, deliver, and improve digital services that create value for customers.",
      whyItMatters: "Unplanned server outages, slow ticketing response times, and broken software deployments destroy enterprise IT reputations and trigger severe SLA penalties. ISO 20000 aligns your IT operations with world-class ITIL best practices, guaranteeing predictable service delivery and optimal uptime.",
      tenderAdvantage: "Mandatory prerequisite for Managed Service Providers (MSPs), cloud hosting providers, and software vendors bidding for enterprise IT contracts with Tier-1 banks, telcos, and multinational corporations.",
      keyDetailedBenefits: [
        {
          title: "1. 50%+ Reduction in Incident Resolution Times",
          desc: "Standardized ITIL triage and automated escalation pathways drastically reduce MTTR and eliminate recurring downtime."
        },
        {
          title: "2. Winning High-Value Enterprise & Public IT Tenders",
          desc: "Proves to corporate CIOs and procurement directors that your IT services operate under strict, auditable SLA governance."
        },
        {
          title: "3. Seamless Cloud & Digital Transformation Transitions",
          desc: "Controlled change management and release management procedures prevent disastrous software deployment rollbacks."
        },
        {
          title: "4. Enhanced Customer & Stakeholder Trust",
          desc: "Transparent SLA reporting and customer satisfaction tracking foster long-term multi-year IT managed services contracts."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international IAF MLA recognition",
        "Lead Auditors with deep expertise in cloud architectures, DevOps, ITIL, and enterprise software delivery",
        "Pragmatic ITSM audits focusing on real customer SLA performance and ticket resolution efficiency",
        "Transparent pricing with structured surveillance audit roadmaps"
      ],
      valueAddedPoints: [
        "Accredited ISO/IEC 20000-1:2018 certification driving corporate digital credibility",
        "ITSM specialist audit team with practical knowledge of Nigerian enterprise tech ecosystems",
        "Clear step-by-step pre-assessment and certification timeline",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Service Portfolio & SLA Baseline Review Report",
      "Stage 1 Documentation Review & Stage 2 Technical Audit Findings",
      "Accredited ISO/IEC 20000-1:2018 3-Year Certificate with EGAC / IAF Mark",
      "Annual Surveillance ITSM Verification Audits"
    ],
    prerequisites: [
      "Documented Service Management Policy and Service Catalog",
      "Service Level Agreements (SLAs) and Operational Level Agreements (OLAs)",
      "Incident, Problem, Change, and Release Management standard operating procedures",
      "Evidence of internal SMS audits and management review meetings"
    ],
    auditSteps: [
      "Step 1: Scoping across service lines, data centers, and helpdesk operations",
      "Step 2: Stage 1 Audit (documentation review, service catalog validation, and SLA management checks)",
      "Step 3: Stage 2 Audit (technical sampling of incident tickets, change logs, CMDB records, and customer feedback)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Lock",
    badgeColor: "bg-cyan-600 text-white",
    popular: true
  },
  {
    id: "iso-55001",
    code: "ISO 55001:2014",
    name: "Asset Management Systems (AMS)",
    slug: "asset-management-system",
    imageUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    category: "Governance",
    standardsFamily: "ISO 55000 Family",
    validityYears: 3,
    shortDesc: "Optimize physical and infrastructure asset life cycles, balance financial risks and asset performance, and maximize return on capital investment.",
    fullDesc: "ISO 55001:2014 specifies requirements for the establishment, implementation, maintenance, and improvement of an Asset Management System. It applies to all types of assets—from industrial machinery, oil & gas pipelines, and electrical grids to public infrastructure, real estate portfolios, and fleet vehicles. ISO 55001 enables organizations to achieve their business objectives through the effective and efficient management of their assets across their entire lifecycle: acquisition, operation, maintenance, and decommissioning.",
    targetIndustries: [
      "Power Generation, Transmission & Distribution Utilities",
      "Oil & Gas Upstream, Refineries & Pipeline Networks",
      "Public Transport, Railway Infrastructure & Port Authorities",
      "Municipal Water Distribution & Wastewater Treatment",
      "Heavy Mining, Mineral Processing & Industrial Manufacturing",
      "Commercial Real Estate & Telecommunication Tower Infrastructure"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & Strategic Asset Management Plan (SAMP)", desc: "Aligning organizational goals with asset portfolio boundaries and stakeholder expectations." },
      { number: "Clause 5", title: "Leadership & Asset Management Policy", desc: "Top executive commitment to whole-life asset planning and cross-functional governance." },
      { number: "Clause 6", title: "Planning, Asset Risk & SAMP Objectives", desc: "Developing asset management plans (AMPs), criticality assessments, and capital allocation models." },
      { number: "Clause 7", title: "Support, Asset Information & Competency", desc: "Enterprise Asset Management (EAM/CMMS) systems, asset data integrity, and engineering competence." },
      { number: "Clause 8", title: "Operational Planning & Maintenance Execution", desc: "Condition-based monitoring, predictive maintenance, shutdown turnaround management, and supply chain controls." },
      { number: "Clause 9", title: "Performance Evaluation & Asset Health Monitoring", desc: "Asset condition indices, Mean Time Between Failures (MTBF), financial auditing, and management review." },
      { number: "Clause 10", title: "Improvement & Asset Renewal", desc: "Root cause asset failure analysis, obsolescence management, and optimization of lifecycle costs." }
    ],
    keyBenefits: [
      "Maximizes Return on Capital Employed (ROCE) and extends physical asset operating lifespans",
      "Minimizes catastrophic unplanned machinery breakdowns and emergency maintenance costs",
      "Optimizes capital expenditure (CAPEX) and operational expenditure (OPEX) allocation",
      "Provides transparent data for insurance underwriting, credit rating agencies, and asset valuation",
      "Fosters strict regulatory compliance across safety-critical infrastructure"
    ],
    principles: [
      {
        number: 1,
        title: "Strategic Asset Management Plan (SAMP)",
        desc: "Aligning long-term corporate vision with lifecycle asset investment, maintenance strategies, and capital renewal roadmaps."
      },
      {
        number: 2,
        title: "Lifecycle Cost & Value Optimization",
        desc: "Evaluating the total cost of ownership (TCO) across acquisition, operation, overhaul, and decommissioning phases."
      },
      {
        number: 3,
        title: "Asset Criticality & Risk Management",
        desc: "Classifying assets by operational criticality to prioritize condition monitoring and predictive maintenance investments."
      },
      {
        number: 4,
        title: "Asset Information & CMMS Integrity",
        desc: "Maintaining accurate Computerized Maintenance Management Systems (CMMS) with complete asset registers, telemetry, and spare parts inventory."
      },
      {
        number: 5,
        title: "Condition-Based & Predictive Maintenance",
        desc: "Utilizing vibration analysis, thermography, and oil sampling to eliminate catastrophic unexpected machine failures."
      },
      {
        number: 6,
        title: "Optimized CAPEX vs OPEX Decision Making",
        desc: "Making evidence-based financial decisions regarding equipment overhauls versus end-of-life capital replacements."
      },
      {
        number: 7,
        title: "Continual Asset Performance Improvement",
        desc: "Tracking Mean Time Between Failures (MTBF) and Overall Equipment Effectiveness (OEE) to refine maintenance cycles."
      }
    ],
    marketContext: {
      qmsDefinition: "An Asset Management System (AMS) is a structured framework that enables an organization to realize value from assets across their lifecycle while balancing financial risks, costs, opportunities, and performance.",
      whyItMatters: "Poor maintenance practices and unmonitored asset degradation result in billions lost in prematurely scrapped equipment, unplanned production shutdowns, and utility power outages. ISO 55001 establishes disciplined lifecycle asset governance, extending machinery lifespans by up to 40%.",
      tenderAdvantage: "Required by international infrastructure concessionaires, public-private partnership (PPP) infrastructure consortia, and institutional asset financing facilities.",
      keyDetailedBenefits: [
        {
          title: "1. 30% to 40% Increase in Heavy Asset Operational Lifespan",
          desc: "Systematic condition monitoring and predictive maintenance prevent premature capital equipment obsolescence."
        },
        {
          title: "2. Maximized Return on Capital Employed (ROCE)",
          desc: "Optimizes multi-million dollar CAPEX and OPEX spending, providing clear financial justification for equipment renewal."
        },
        {
          title: "3. Drastic Reduction in Unplanned Breakdown Downtime",
          desc: "Disciplined maintenance scheduling and spare parts inventory management eliminate prolonged plant shutdowns."
        },
        {
          title: "4. Enhanced Credit Ratings & Asset Valuation",
          desc: "Gives institutional investors, banks, and insurance underwriters verified proof of rigorous physical asset governance."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international IAF MLA recognition",
        "Lead Auditors with extensive experience in industrial reliability engineering, power grids, and infrastructure asset valuation",
        "Comprehensive field audits verifying real physical asset condition and CMMS data integrity",
        "Transparent pricing with structured surveillance audit roadmaps"
      ],
      valueAddedPoints: [
        "Accredited ISO 55001:2014 certification optimizing asset lifecycle returns",
        "Reliability engineering auditors providing deep diagnostic asset management insights",
        "Clear step-by-step pre-assessment and certification timeline",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Strategic Asset Management Plan (SAMP) & Criticality Review Report",
      "CMMS Data & Asset Health Field Audit Findings",
      "Accredited ISO 55001:2014 3-Year Certificate with EGAC & IAF Marks"
    ],
    prerequisites: [
      "Asset Management Policy and Strategic Asset Management Plan (SAMP)",
      "Comprehensive Asset Register with criticality rankings",
      "Asset Management Plans (AMPs) covering maintenance, capital renewal, and disposal",
      "Completed internal AMS audit and management review"
    ],
    auditSteps: [
      "Step 1: Asset portfolio scoping and sampling methodology",
      "Step 2: Stage 1 Audit (desktop evaluation of SAMP, asset policies, and financial alignment)",
      "Step 3: Stage 2 Audit (on-site inspection of physical assets, maintenance execution, CMMS records, and engineering interviews)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Layers",
    badgeColor: "bg-slate-700 text-white"
  },
  {
    id: "iso-20022",
    code: "ISO 20022",
    name: "Financial Services & Messaging Management System",
    slug: "financial-management-system",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
    category: "Governance",
    standardsFamily: "ISO 20000 Financial Standards",
    validityYears: 3,
    shortDesc: "Universal financial industry messaging scheme, secure banking electronic data interchange, payments messaging compliance, and anti-fraud protocols.",
    fullDesc: "ISO 20022 is the universal financial industry message scheme. It provides a common platform for the development of messages using a modeling methodology, central dictionary, and XML/JSON representation. Essential for commercial banks, payment processors, fintechs, and central bank RTGS systems, ISO 20022 enables rich structured transaction data, straight-through processing (STP), enhanced AML/CFT screening, and seamless international payment interoperability.",
    targetIndustries: [
      "Commercial Banks & Central Banking Authorities",
      "Fintech Payment Gateways & Switch Operators",
      "Securities Depositories, Stock Exchanges & Clearing Houses",
      "Cross-Border Remittance & Foreign Exchange Providers",
      "Corporate Treasury Management Departments"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & Financial Messaging Scope", desc: "Payment network topologies, SWIFT MX migration scope, and regulatory reporting mandates." },
      { number: "Clause 5", title: "Leadership & Financial Governance", desc: "Executive sponsorship of payments modernization and security risk frameworks." },
      { number: "Clause 6", title: "Planning & Data Mapping", desc: "Data dictionary mapping, schema validation, and transaction throughput planning." },
      { number: "Clause 7", title: "Support, Systems & Interoperability", desc: "Middleware readiness, parser validation tools, and technical developer competency." },
      { number: "Clause 8", title: "Operational Execution & Messaging Integrity", desc: "Message syntax validation, end-to-end encryption, reconciliation, and AML screening integration." },
      { number: "Clause 9", title: "Performance Evaluation & Exception Monitoring", desc: "Message failure rate analysis, latency monitoring, and transaction auditing." },
      { number: "Clause 10", title: "Improvement & Schema Evolution", desc: "Annual standard release updates and automated error resolution." }
    ],
    keyBenefits: [
      "Enables richer payment transaction data, drastically reducing false AML/sanctions positives",
      "Ensures seamless interoperability with SWIFT MX, FedNow, TARGET2, and NIBSS networks",
      "Drives straight-through processing (STP) rates above 99%",
      "Reduces manual payment exception investigation costs and settlement delays"
    ],
    principles: [
      {
        number: 1,
        title: "Standardized Data Modeling & Dictionaries",
        desc: "Using the ISO 20022 Universal Financial Industry message scheme to standardize data definitions across cross-border payments, securities, and trade finance."
      },
      {
        number: 2,
        title: "Rich Structured Remittance Data",
        desc: "Embedding detailed invoice references, tax identifiers, and structured remittance data to eliminate manual payment reconciliation."
      },
      {
        number: 3,
        title: "Enhanced AML/CFT & Sanctions Screening",
        desc: "Structuring ultimate debtor and creditor information to drastically reduce false-positive sanctions alerts and accelerate compliance vetting."
      },
      {
        number: 4,
        title: "End-to-End Interoperability & Straight-Through Processing (STP)",
        desc: "Achieving seamless transaction flow between core banking systems, payment switches, RTGS networks, and global payment rails."
      },
      {
        number: 5,
        title: "High-Throughput Validation & Error Handling",
        desc: "Deploying high-speed XML/JSON schema parsers and automated exception resolution mechanisms."
      },
      {
        number: 6,
        title: "Cryptographic Security & Message Integrity",
        desc: "Enforcing digital signatures, TLS 1.3 encryption, and tamper-evident audit trails on all financial messaging queues."
      },
      {
        number: 7,
        title: "Continual Standards Evolution & Schema Updates",
        desc: "Seamlessly adopting annual SWIFT MX and payment scheme release updates without downtime."
      }
    ],
    marketContext: {
      qmsDefinition: "ISO 20022 is the universal financial industry messaging standard that provides a common global language for payments, cash management, trade finance, and securities settlements.",
      whyItMatters: "With global central banks and SWIFT mandating the transition from legacy MT messages to ISO 20022 MX formats, non-compliant financial institutions face severe transaction rejection rates, AML compliance bottlenecks, and loss of international correspondent banking relationships. ISO 20022 compliance guarantees seamless global payment interoperability.",
      tenderAdvantage: "Essential for fintechs, commercial banks, and payment gateways seeking integration with NIBSS, Central Bank of Nigeria (CBN) RTGS, and global SWIFT cross-border corridors.",
      keyDetailedBenefits: [
        {
          title: "1. 99%+ Straight-Through Processing (STP) Rate",
          desc: "Eliminates payment formatting errors and truncations, enabling instant end-to-end clearing and settlement."
        },
        {
          title: "2. 70% Reduction in False AML & Sanctions Hits",
          desc: "Granular structured party data prevents legitimate commercial payments from being frozen by international correspondent banks."
        },
        {
          title: "3. Retention of International Correspondent Banking Ties",
          desc: "Satisfies mandatory SWIFT and international clearing house compliance deadlines for global payments."
        },
        {
          title: "4. Accelerated B2B Reconciliation for Corporate Clients",
          desc: "Carries complete invoice numbers, tax codes, and remittance line items directly within the payment message payload."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with worldwide IAF MLA international recognition",
        "Lead Auditors with proven expertise in banking payment switches, core banking systems, and SWIFT MX architecture",
        "Comprehensive technical schema testing and transaction simulation audits",
        "Transparent pricing with structured compliance verification"
      ],
      valueAddedPoints: [
        "Accredited ISO 20022 Financial Compliance Certificate",
        "Financial technology audit team with deep knowledge of SWIFT and NIBSS standards",
        "Clear step-by-step pre-assessment and validation roadmap",
        "Global directory compliance verification"
      ]
    },
    deliverables: [
      "ISO 20022 Schema Validation & Data Mapping Audit Report",
      "Payment Gateway Interoperability & Security Verification Report",
      "Accredited Financial System Compliance Certificate"
    ],
    prerequisites: [
      "Documented payment message workflows and XML schema validation rules",
      "End-to-end transaction reconciliation procedures",
      "AML/Sanctions screening integration architecture",
      "Internal audit results and management review"
    ],
    auditSteps: [
      "Step 1: Payment systems architecture and message flow scoping",
      "Step 2: Stage 1 Audit (documentation review, data model alignment, and API specifications)",
      "Step 3: Stage 2 Audit (transaction simulation, parser verification, and security controls audit)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "DollarSign",
    badgeColor: "bg-emerald-700 text-white"
  },
  {
    id: "iso-26000",
    code: "ISO 26000:2010",
    name: "Guidance on Social Responsibility & Sustainable Governance",
    slug: "social-responsibility",
    imageUrl: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    category: "Governance",
    standardsFamily: "ISO 26000 Family / ESG",
    validityYears: 3,
    shortDesc: "Guidance on operating in an ethical and transparent way that contributes to sustainable development, human rights, and social welfare.",
    fullDesc: "ISO 26000:2010 provides guidance on how businesses and organizations can operate in a socially responsible way. This means acting in an ethical and transparent manner that contributes to the health and welfare of society. It addresses seven core subjects: organizational governance, human rights, labor practices, the environment, fair operating practices, consumer issues, and community involvement & development.",
    targetIndustries: [
      "Multinational Corporations & Listed Conglomerates",
      "Oil, Gas & Mineral Extraction Companies with host community operations",
      "Agricultural Plantations & Consumer Goods Manufacturers",
      "Financial Institutions & ESG Investment Funds",
      "State-Owned Enterprises & Public Sector Utilities"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Principles of Social Responsibility", desc: "Accountability, transparency, ethical behavior, respect for stakeholder interests, rule of law, international norms of behavior, and human rights." },
      { number: "Clause 5", title: "Recognizing Social Responsibility & Stakeholder Engagement", desc: "Identifying relevant social impacts and meaningful stakeholder dialogue." },
      { number: "Clause 6.2", title: "Organizational Governance", desc: "Integrating social responsibility into decision-making and executive oversight." },
      { number: "Clause 6.3", title: "Human Rights", desc: "Due diligence, human rights risk situations, avoidance of complicity, and resolving grievances." },
      { number: "Clause 6.4", title: "Labor Practices", desc: "Employment conditions, social protection, social dialogue, health & safety, and human development." },
      { number: "Clause 6.5", title: "The Environment", desc: "Prevention of pollution, sustainable resource use, climate change mitigation, and biodiversity protection." },
      { number: "Clause 6.6", title: "Fair Operating Practices", desc: "Anti-corruption, responsible political involvement, fair competition, and promoting social responsibility in the value chain." },
      { number: "Clause 6.7", title: "Consumer Issues", desc: "Fair marketing, protecting consumer health & safety, sustainable consumption, and dispute resolution." },
      { number: "Clause 6.8", title: "Community Involvement & Development", desc: "Community engagement, education & culture, employment creation, and wealth creation." },
      { number: "Clause 7", title: "Integration of Social Responsibility", desc: "Reviewing progress, reporting, and improving performance across operations." }
    ],
    keyBenefits: [
      "Substantially elevates corporate ESG ratings attracting sustainable capital and institutional investors",
      "Fosters peaceful, collaborative relationships with host communities, preventing shutdowns and unrest",
      "Strengthens employee retention, morale, and diverse workforce engagement",
      "Provides verified evidence for corporate sustainability and UN Sustainable Development Goals (SDGs) reporting"
    ],
    principles: [
      {
        number: 1,
        title: "Accountability & Transparency",
        desc: "Being openly accountable for an organization's impacts on society, the economy, and the environment through public disclosure."
      },
      {
        number: 2,
        title: "Ethical Conduct & Integrity",
        desc: "Governing operations based on honesty, equity, fair competition, and zero tolerance for human rights violations."
      },
      {
        number: 3,
        title: "Respect for Stakeholder Interests",
        desc: "Actively identifying, consulting, and responding to the concerns of employees, host communities, consumers, and suppliers."
      },
      {
        number: 4,
        title: "Respect for the Rule of Law",
        desc: "Complying fully with statutory environmental regulations, labor rights, and international conventions."
      },
      {
        number: 5,
        title: "Human Rights Due Diligence",
        desc: "Identifying and mitigating human rights risks across supply chains, preventing forced labor, child labor, and discriminatory practices."
      },
      {
        number: 6,
        title: "Environmental Stewardship & Climate Action",
        desc: "Minimizing ecological footprints, conserving natural resources, reducing pollution, and supporting biodiversity."
      },
      {
        number: 7,
        title: "Community Involvement & Sustainable Development",
        desc: "Partnering with host communities to build local economic capacity, education, health initiatives, and job creation."
      }
    ],
    marketContext: {
      qmsDefinition: "ISO 26000 provides comprehensive international guidance on how organizations can integrate social responsibility, human rights, ethical governance, and environmental stewardship into their core corporate strategies.",
      whyItMatters: "Community protests, environmental damage disputes, and poor labor practices can paralyze industrial and extractive operations, inflicting massive financial losses and reputational ruin. ISO 26000 guides organizations in building social capital, peaceful host community relationships, and stellar ESG credentials.",
      tenderAdvantage: "Crucial for securing institutional ESG investments, sovereign wealth fund capital, and winning concessions for mining, energy, and infrastructure projects.",
      keyDetailedBenefits: [
        {
          title: "1. Social License to Operate in Host Communities",
          desc: "Builds constructive community engagement models, preventing costly production blockades and operational disruptions."
        },
        {
          title: "2. Premium ESG Ratings & Access to Green Financing",
          desc: "Provides verifiable social and environmental governance metrics required by multilateral development finance institutions."
        },
        {
          title: "3. Enhanced Brand Reputation & Consumer Loyalty",
          desc: "Positions your enterprise as a transparent, ethical corporate leader committed to sustainability and human dignity."
        },
        {
          title: "4. Supply Chain Human Rights Compliance",
          desc: "Protects against supply chain controversies and satisfies international corporate due diligence directives."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international IAF MLA recognition",
        "Lead Auditors with proven experience in corporate ESG assessments, community relations, and sustainability auditing",
        "Pragmatic field evaluations that engage both executive leadership and grassroots community stakeholders",
        "Transparent evaluation reporting and formal Attestation of Conformity"
      ],
      valueAddedPoints: [
        "Recognized ISO 26000 Social Responsibility Attestation of Conformity",
        "Multidisciplinary ESG auditing team with extensive experience across African industries",
        "Clear step-by-step stakeholder assessment timeline",
        "Verifiable corporate sustainability documentation"
      ]
    },
    deliverables: [
      "Comprehensive Social Responsibility & ESG Baseline Assessment Report",
      "Stakeholder Engagement & Community Impact Audit Findings",
      "Formal IEMA ISO 26000 Social Responsibility Attestation of Conformity"
    ],
    prerequisites: [
      "Corporate Social Responsibility (CSR) & ESG Policy signed by Board of Directors",
      "Documented Stakeholder Engagement Map and Community Grievance Mechanism",
      "Human Rights and Labor Standards Code of Conduct across value chain",
      "Evidence of transparent sustainability reporting"
    ],
    auditSteps: [
      "Step 1: Scoping of operations, supply chain dependencies, and community footprint",
      "Step 2: Stage 1 Audit (policy review, CSR expenditure records, and human rights diligence audit)",
      "Step 3: Stage 2 Audit (field visits, host community leadership interviews, worker focus groups, and supplier audits)",
      "Step 4: Issuance of accredited ISO 26000 Attestation of Conformity and public sustainability report"
    ],
    iconName: "Leaf",
    badgeColor: "bg-emerald-700 text-white"
  },
  {
    id: "as9100",
    code: "AS9100 / AS9110 / AS9120",
    name: "Aerospace & Defense Quality Management Systems",
    slug: "aerospace-quality-managementiso-certification-for-manufacturing-companies",
    imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800",
    category: "Quality",
    standardsFamily: "IAQG / AS9100 Series",
    validityYears: 3,
    shortDesc: "Aviation, space, and defense quality management system governing aircraft maintenance (MRO), flight safety, parts traceability, and defense supply chains.",
    fullDesc: "AS9100 (Design & Manufacturing), AS9110 (Maintenance Repair & Overhaul - MRO), and AS9120 (Aviation Distributors) are the gold standard quality management systems for the aerospace and defense industry. Developed by the International Aerospace Quality Group (IAQG), these standards build on ISO 9001 with stringent aviation requirements: counterfeit part prevention, configuration management, Foreign Object Debris (FOD) control, First Article Inspection (AS9102), and strict flight-critical risk management.",
    targetIndustries: [
      "Airlines, Charter Operators & Aircraft Maintenance (MRO) Stations",
      "Aerospace Component Manufacturers & Precision CNC Machining",
      "Avionics, Radar & Defense Electronic Systems",
      "Aviation Hardware Distributors & Stockists",
      "Unmanned Aerial Vehicle (UAV / Drone) Manufacturers"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & Aviation Product Safety", desc: "Understanding the consequences of component failure on human flight safety." },
      { number: "Clause 5", title: "Leadership, Safety Culture & Ethical Behavior", desc: "Top executive accountability for flight safety and non-punitive defect reporting." },
      { number: "Clause 6", title: "Operational Risk Management in Aerospace", desc: "Failure mode evaluations, product safety risk registers, and design contingencies." },
      { number: "Clause 7", title: "Support, Calibration & Traceability", desc: "Strict tool calibration traceability, FOD prevention protocols, and personnel aviation licenses." },
      { number: "Clause 8", title: "Operational Planning, First Article Inspection & Counterfeit Prevention", desc: "AS9102 First Article Inspection (FAI), critical item control, key characteristics, and anti-counterfeit mitigation." },
      { number: "Clause 9", title: "Performance Evaluation & On-Time Delivery (OTD)", desc: "Measuring product safety KPIs, On-Time In-Full (OTIF) delivery metrics, and OASIS database synchronization." },
      { number: "Clause 10", title: "Continual Improvement & Root Cause Investigation", desc: "8D problem solving, root cause corrective actions, and human factors analysis." }
    ],
    keyBenefits: [
      "Mandatory requirement for inclusion on OASIS (Online Aerospace Supplier Information System)",
      "Qualifies your company to supply Boeing, Airbus, Embraer, defense ministries, and major airlines",
      "Drastically reduces scrap, machining defects, and component failure rates",
      "Guarantees compliance with civil aviation authorities (NCAA, FAA, EASA)"
    ],
    principles: [
      {
        number: 1,
        title: "Flight Product Safety & Human Factors",
        desc: "Ensuring every manufacturing, maintenance, and distribution step prioritizes zero-defect airworthiness and flight safety."
      },
      {
        number: 2,
        title: "Anti-Counterfeit Parts Prevention (AS6174)",
        desc: "Implementing rigorous testing, approved distributor sourcing, and traceability to eliminate counterfeit aviation components."
      },
      {
        number: 3,
        title: "Foreign Object Debris (FOD) Control",
        desc: "Enforcing strict clean-as-you-go protocols, tool shadow boards, and cleanroom air handling to eliminate stray debris."
      },
      {
        number: 4,
        title: "First Article Inspection (AS9102 FAI)",
        desc: "Executing 100% dimensional and material verification on initial production runs before serial manufacturing approval."
      },
      {
        number: 5,
        title: "Configuration Management & Design Control",
        desc: "Maintaining rigorous revision control over engineering drawings, aircraft service bulletins, and airworthiness directives."
      },
      {
        number: 6,
        title: "100% Aviation Supply Chain Traceability",
        desc: "Preserving FAA Form 8130-3 / EASA Form 1 authorized release certificates and complete mill heat logs across all hardware."
      },
      {
        number: 7,
        title: "IAQG OASIS Database Integration",
        desc: "Synchronizing audit performance and quality metrics onto the global Online Aerospace Supplier Information System (OASIS)."
      }
    ],
    marketContext: {
      qmsDefinition: "AS9100 is the international quality management standard tailored specifically for the aviation, space, and defense industries, incorporating rigorous safety, traceability, and defect prevention mandates.",
      whyItMatters: "In aviation and defense, component failure can lead to catastrophic loss of life and aircraft. AS9100 certification is the non-negotiable prerequisite required by global airframers (Boeing, Airbus), commercial airlines, and defense procurement agencies.",
      tenderAdvantage: "Mandatory qualification for aircraft Maintenance, Repair & Overhaul (MRO) facilities, defense procurement contracts, and precision aerospace parts manufacturing.",
      keyDetailedBenefits: [
        {
          title: "1. Inclusion in the IAQG OASIS Global Supplier Directory",
          desc: "Registers your organization as an accredited aerospace supplier visible to aerospace procurement executives worldwide."
        },
        {
          title: "2. Elimination of Counterfeit & Defective Aviation Parts",
          desc: "Airtight supply chain vetting, serialized batch tracking, and FAI inspections ensure 100% genuine, airworthy components."
        },
        {
          title: "3. Compliance with NCAA, FAA & EASA Airworthiness Rules",
          desc: "Provides civil aviation authorities with verified evidence of robust quality and maintenance governance."
        },
        {
          title: "4. Major Airline & Defense MRO Contract Qualification",
          desc: "Positions Nigerian aviation maintenance and precision machining firms to win multi-million dollar regional aircraft maintenance contracts."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international IAF MLA recognition",
        "Lead Auditors with extensive experience in aerospace engineering, avionics, and NCAA/FAA regulatory oversight",
        "Rigorous verification of AS9102 First Article Inspections, tool calibration, and FOD controls",
        "Structured audit pathways with fast-track OASIS database registration"
      ],
      valueAddedPoints: [
        "Accredited AS9100 / AS9110 certification unlocking international aviation contracts",
        "Aviation quality experts with practical insight into commercial airline MRO and defense engineering",
        "Clear step-by-step pre-assessment and certification timeline",
        "IAF CertSearch & IAQG OASIS database verification"
      ]
    },
    deliverables: [
      "AS9100 / AS9110 Aerospace Audit Findings & OASIS Registration Report",
      "First Article Inspection (FAI) Process Verification Report",
      "Accredited Aerospace QMS 3-Year Certificate with EGAC & IAF Marks"
    ],
    prerequisites: [
      "Aerospace Quality Manual with product safety provisions",
      "Foreign Object Debris (FOD) prevention program",
      "Counterfeit Parts Prevention & Detection Procedure",
      "First Article Inspection (AS9102) records and full material batch traceability"
    ],
    auditSteps: [
      "Step 1: Aerospace scope classification (AS9100, AS9110, or AS9120)",
      "Step 2: Stage 1 Audit (documentation, OASIS pre-screening, and product safety review)",
      "Step 3: Stage 2 Audit (in-depth technical shop floor audit, witnessing FAI, machining calibration, tool control, and staff competency)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual surveillance audits)"
    ],
    iconName: "Award",
    badgeColor: "bg-blue-900 text-white"
  },
  {
    id: "iso-21001",
    code: "ISO 21001:2018",
    name: "Educational Organizations Management Systems (EOMS)",
    slug: "iso-certification-for-schools-in-nigeria-education-management-system",
    imageUrl: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
    category: "Governance",
    standardsFamily: "ISO 21000 Family",
    validityYears: 3,
    shortDesc: "Educational Organizations Management Systems (EOMS) enhancing learner satisfaction, pedagogical consistency, special needs inclusion, and curriculum quality.",
    fullDesc: "ISO 21001:2018 is a common management tool for educational organizations aiming to optimize their processes and meet the needs of learners, beneficiaries, and staff. Applicable to pre-schools, primary & secondary schools, universities, vocational colleges, and corporate training institutes, ISO 21001 ensures pedagogical consistency, inclusive learning for special educational needs (SEN), transparent learner assessment, and measurable learning outcomes.",
    targetIndustries: [
      "Private & Public Primary and Secondary Schools (K-12)",
      "Universities, Polytechnics & Higher Education Colleges",
      "Technical, Vocational & Professional Training Institutes",
      "E-Learning Platforms & Online Education Providers",
      "Corporate Academies & Executive Training Centers"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & Learner Needs Analysis", desc: "Understanding educational market demands, statutory educational curriculum guidelines, and learner demographics." },
      { number: "Clause 5", title: "Leadership & Educational Policy", desc: "Commitment to learner satisfaction, special education needs inclusion, and academic excellence." },
      { number: "Clause 6", title: "Planning & Educational Risk Assessment", desc: "Curriculum planning, student retention objectives, and educational facility safety." },
      { number: "Clause 7", title: "Support, Faculty Competency & Learning Resources", desc: "Teacher pedagogical qualifications, library/laboratory resources, digital learning infrastructure, and pastoral care." },
      { number: "Clause 8", title: "Educational Process Delivery & Learner Assessment", desc: "Curriculum design, admissions, lesson plan execution, transparent student grading, and special needs accommodations." },
      { number: "Clause 9", title: "Performance Evaluation & Learning Outcomes", desc: "Student examination pass rates, parent/learner satisfaction surveys, and internal EOMS audits." },
      { number: "Clause 10", title: "Continual Improvement & Pedagogical Innovation", desc: "Upgrading teaching methodologies and educational technologies." }
    ],
    keyBenefits: [
      "Substantially boosts student enrollment, parent trust, and institutional academic prestige",
      "Ensures transparent, fair, and objective student assessment and grading methodologies",
      "Enhances special educational needs (SEN) inclusion and safety across campus",
      "Satisfies Ministry of Education accreditation and international university partnership requirements"
    ],
    principles: [
      {
        number: 1,
        title: "Focus on Learners & Other Beneficiaries",
        desc: "Prioritizing learner educational needs, cognitive development, personal well-being, and long-term career readiness."
      },
      {
        number: 2,
        title: "Visionary Educational Leadership",
        desc: "Engaging academic leaders, school boards, and faculty in creating an inclusive, high-achievement academic environment."
      },
      {
        number: 3,
        title: "Engagement of People & Faculty Excellence",
        desc: "Empowering educators through continuous pedagogical development, modern teaching tools, and pastoral support."
      },
      {
        number: 4,
        title: "Process Approach in Curriculum Delivery",
        desc: "Structuring admissions, lesson planning, student mentoring, and examinations as integrated, measurable educational processes."
      },
      {
        number: 5,
        title: "Special Educational Needs (SEN) & Accessibility",
        desc: "Providing equitable access, physical campus accessibility, and tailored learning accommodations for special needs students."
      },
      {
        number: 6,
        title: "Evidence-Based Student Assessment & Grading",
        desc: "Enforcing fair, transparent, and standardized examination grading rubrics, continuous assessment, and appeal mechanisms."
      },
      {
        number: 7,
        title: "Continual Pedagogical & Technological Improvement",
        desc: "Regularly modernizing curricula, integrating digital learning platforms, and adopting innovative teaching methodologies."
      }
    ],
    marketContext: {
      qmsDefinition: "An Educational Organizations Management System (EOMS) is a management framework that enables educational providers to demonstrate their ability to support the acquisition and development of competence through teaching, learning, and research.",
      whyItMatters: "In a highly competitive education sector, parents and university students demand verifiable academic quality, modern digital teaching infrastructure, transparent grading, and student pastoral safety. ISO 21001 certification positions primary, secondary, and tertiary institutions as world-class centers of academic excellence.",
      tenderAdvantage: "Required for entering international university twinning partnerships, receiving multilateral education grants (World Bank, UNESCO), and attracting expatriate and premium tuition student enrollments.",
      keyDetailedBenefits: [
        {
          title: "1. Surge in Student Admissions & Parent Loyalty",
          desc: "Provides verifiable proof of academic excellence and holistic student development, boosting year-on-year enrollment."
        },
        {
          title: "2. Transparent Grading & Elimination of Exam Malpractice",
          desc: "Standardized evaluation rubrics and automated grading governance ensure absolute integrity in academic results."
        },
        {
          title: "3. Comprehensive Special Education Needs (SEN) Inclusion",
          desc: "Creates supportive campus environments, counseling services, and customized pedagogical approaches for all learners."
        },
        {
          title: "4. Global Academic Recognition & Exchange Programs",
          desc: "Facilitates seamless student credit transfers and partnerships with leading European, American, and Asian universities."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international IAF MLA recognition",
        "Lead Auditors with extensive experience in academic administration, curriculum accreditation, and institutional pedagogy",
        "Constructive audit approach evaluating real classroom learning dynamics and campus safety protocols",
        "Transparent certification process tailored to academic terms and calendars"
      ],
      valueAddedPoints: [
        "Accredited ISO 21001:2018 certification establishing educational leadership",
        "Academic quality audit team with deep understanding of national curriculum standards and global best practices",
        "Clear step-by-step pre-assessment and certification timeline",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Educational Process & Curriculum Assessment Report",
      "Campus Safety & Pedagogical Audit Findings",
      "Accredited ISO 21001:2018 3-Year Certificate with EGAC / IAF Mark"
    ],
    prerequisites: [
      "Documented Educational Policy and Learner Charter",
      "Standardized Curriculum Delivery and Lesson Planning Procedures",
      "Transparent Learner Assessment, Examination, and Grading Rules",
      "Completed internal educational audit and management review"
    ],
    auditSteps: [
      "Step 1: Scoping of academic programs, grade levels, and campus facilities",
      "Step 2: Stage 1 Audit (documentation review of curriculum, policies, faculty credentials, and SEN procedures)",
      "Step 3: Stage 2 Audit (on-site classroom observations, teacher interviews, student support verification, and facility safety checks)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual educational surveillance)"
    ],
    iconName: "BookOpen",
    badgeColor: "bg-amber-700 text-white"
  },
  {
    id: "iso-7101",
    code: "ISO 7101:2023",
    name: "Healthcare Organization Management Systems (HOMS)",
    slug: "hospital-management-system",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    category: "Food & Medical",
    standardsFamily: "ISO 7100 Healthcare Family",
    validityYears: 3,
    shortDesc: "Healthcare organization management standard dedicated to clinical governance, patient safety, infection control, and timely high-quality healthcare delivery.",
    fullDesc: "ISO 7101:2023 is the first dedicated international consensus standard for healthcare organization management. It establishes a comprehensive framework to deliver high-quality, safe, and person-centered healthcare. Designed for hospitals, clinics, surgical centers, and diagnostic facilities, ISO 7101 focuses on clinical governance, infection prevention and control (IPC), patient safety event reporting, medication management, and continuous clinical quality improvement.",
    targetIndustries: [
      "General Hospitals, Specialty Clinics & Surgical Centers",
      "Maternity Hospitals & Pediatric Healthcare Centers",
      "Diagnostic Imaging & Medical Laboratory Networks",
      "Outpatient Medical Practices & Dental Clinics",
      "Hospices & Long-Term Healthcare Facilities"
    ],
    coreClauses: [
      { number: "Clause 4", title: "Context & Healthcare Service Scope", desc: "Epidemiological patient demographics, clinical risks, and health statutory licensing." },
      { number: "Clause 5", title: "Leadership & Clinical Governance", desc: "Medical director leadership, patient safety culture, and ethical medical care." },
      { number: "Clause 6", title: "Planning & Clinical Risk Management", desc: "Preventing medical errors, infection outbreak readiness, and clinical quality goals." },
      { number: "Clause 7", title: "Support, Clinical Competence & Medical Equipment", desc: "Doctor/nurse credentialing, medical equipment maintenance & calibration, and hygiene facilities." },
      { number: "Clause 8", title: "Healthcare Service Delivery & Patient Safety", desc: "Triage, patient identification, medication administration, surgical checklists, IPC protocols, and emergency resuscitation." },
      { number: "Clause 9", title: "Performance Evaluation & Clinical Auditing", desc: "Mortality & morbidity reviews, nosocomial infection tracking, patient satisfaction, and internal audits." },
      { number: "Clause 10", title: "Improvement & Sentinel Event Investigation", desc: "Systematic root cause analysis of adverse medical events and process improvements." }
    ],
    keyBenefits: [
      "Drastically reduces hospital-acquired infections (HAI), diagnostic errors, and surgical complications",
      "Drives international medical accreditation and attracts domestic & expatriate medical tourism",
      "Streamlines health insurance (HMO) claims settlement and patient throughput",
      "Protects hospitals against catastrophic medical malpractice lawsuits and regulatory sanctions"
    ],
    principles: [
      {
        number: 1,
        title: "Person-Centered Healthcare Delivery",
        desc: "Respecting patient dignity, informed consent, privacy, cultural preferences, and holistic family involvement in care plans."
      },
      {
        number: 2,
        title: "Clinical Governance & Medical Leadership",
        desc: "Ensuring board accountability for clinical audit outcomes, doctor/nurse credentialing, and evidence-based clinical protocols."
      },
      {
        number: 3,
        title: "Patient Safety & Sentinel Event Mitigation",
        desc: "Deploying WHO surgical safety checklists, non-punitive adverse event reporting, and systematic medical error root cause investigations."
      },
      {
        number: 4,
        title: "Infection Prevention & Control (IPC)",
        desc: "Strict sterilization of surgical theaters, aseptic handling, biohazard waste incineration, and nosocomial infection tracking."
      },
      {
        number: 5,
        title: "Medication Safety & Prescription Integrity",
        desc: "Enforcing dual-pharmacist verification for high-alert medications, cold-chain vaccine storage, and closed-loop administration."
      },
      {
        number: 6,
        title: "Emergency Readiness & Resuscitation Governance",
        desc: "Maintaining calibrated crash carts, uninterrupted medical oxygen, emergency power, and rapid response code teams."
      },
      {
        number: 7,
        title: "Continual Clinical Quality Improvement",
        desc: "Monitoring mortality & morbidity rates, ICU readmissions, average length of stay (ALOS), and patient satisfaction indices."
      }
    ],
    marketContext: {
      qmsDefinition: "A Healthcare Organization Management System (HOMS) is the premier international consensus framework created specifically to govern clinical care quality, infection control, and patient safety across hospitals and clinics.",
      whyItMatters: "Hospital-acquired infections, delayed diagnostic reporting, medication errors, and clinical malpractice devastate patient outcomes and expose hospitals to crippling legal liabilities. ISO 7101 embeds rigorous clinical governance across clinical departments, elevating medical care to world-class standards.",
      tenderAdvantage: "Mandatory qualification for enrolling with premium corporate health maintenance organizations (HMOs), multinational oil & gas medical retainers, and attracting medical tourism.",
      keyDetailedBenefits: [
        {
          title: "1. Elimination of Hospital-Acquired Infections (HAI)",
          desc: "Strict IPC protocols and clean air surgical suites drastically reduce post-operative surgical site infections and sepsis."
        },
        {
          title: "2. Premium HMO & Retainership Accreditation",
          desc: "Qualifies hospitals to become preferred healthcare service providers for multinational energy corporations, embassies, and top-tier HMOs."
        },
        {
          title: "3. Drastic Reduction in Medical Malpractice Claims",
          desc: "Standardized clinical checklists, transparent patient records, and robust medication verification prevent fatal clinical errors."
        },
        {
          title: "4. Accelerated Patient Throughput & HMO Settlement",
          desc: "Standardized clinical pathways and digital health records streamline patient triage and ensure prompt health insurance claims reimbursement."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with worldwide IAF MLA international recognition",
        "Lead Auditors comprising certified medical practitioners, clinical pharmacologists, and healthcare quality directors",
        "Clinical tracer audits that evaluate actual patient bedside care and infection barriers",
        "Structured certification roadmap with clear healthcare milestones"
      ],
      valueAddedPoints: [
        "Accredited ISO 7101:2023 certification driving hospital prestige",
        "Healthcare quality audit team with deep insight into private and public clinical governance",
        "Clear step-by-step pre-assessment and hospital audit roadmap",
        "IAF CertSearch international directory verification"
      ]
    },
    deliverables: [
      "Clinical Governance & Infection Control Assessment Report",
      "Hospital Safety & Patient Flow Audit Findings",
      "Accredited ISO 7101:2023 3-Year Certificate with EGAC & IAF Marks"
    ],
    prerequisites: [
      "Documented Clinical Governance Policy and Patient Safety Charter",
      "Infection Prevention and Control (IPC) Standard Operating Procedures",
      "Medical Practitioner Credentialing and Privileging Register",
      "Adverse Event / Medical Error Reporting System and completed internal audit"
    ],
    auditSteps: [
      "Step 1: Scoping of clinical departments (ICU, Surgery, Pharmacy, Lab, Wards)",
      "Step 2: Stage 1 Audit (documentation review of clinical policies, protocols, and regulatory licenses)",
      "Step 3: Stage 2 Audit (hospital walkthrough, clinical tracer audits, medication storage checks, IPC compliance, and patient interviews)",
      "Step 4: Certification & Surveillance (3-year accredited certificate issuance + annual healthcare surveillance)"
    ],
    iconName: "Stethoscope",
    badgeColor: "bg-red-700 text-white"
  },
  {
    id: "iso-17025",
    code: "ISO/IEC 17025:2017",
    name: "General Requirements for Testing & Calibration Laboratories",
    slug: "iso-17025-testing-calibration-laboratories",
    imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
    badgeUrl: "https://iemacert.com/wp-content/uploads/2024/01/ISO-9001-1-150x150.png",
    category: "Quality",
    standardsFamily: "ISO 17000 Series",
    validityYears: 3,
    shortDesc: "The international benchmark for laboratory technical competence, measurement accuracy, traceability, and valid test results.",
    fullDesc: "ISO/IEC 17025:2017 enables laboratories to demonstrate that they operate competently and generate valid results, thereby promoting confidence in their work both nationally and around the world. It also helps facilitate cooperation between laboratories and other bodies by generating wider acceptance of results between countries under the ILAC Mutual Recognition Arrangement (MRA).",
    targetIndustries: [
      "Material Testing & Metallurgical Laboratories",
      "Environmental Water, Soil & Air Quality Testing Labs",
      "Calibration & Dimensional Metrology Laboratories",
      "Chemical, Microbiological & Food Testing Laboratories",
      "Non-Destructive Testing (NDT) Inspection Agencies"
    ],
    coreClauses: [
      { number: "Clause 4", title: "General Requirements", desc: "Impartiality and confidentiality safeguards." },
      { number: "Clause 5", title: "Structural Requirements", desc: "Laboratory organizational structure, management hierarchy, and technical scope." },
      { number: "Clause 6", title: "Resource Requirements", desc: "Competent lab personnel, facility environment, metrological traceability, and calibrated equipment." },
      { number: "Clause 7", title: "Process Requirements", desc: "Review of requests, selection/validation of methods, sampling, measurement uncertainty, and reporting results." },
      { number: "Clause 8", title: "Management System Requirements", desc: "Option A/B management systems, corrective actions, risks and opportunities, and internal audits." }
    ],
    keyBenefits: [
      "International acceptance of laboratory test reports and calibration certificates under ILAC MRA",
      "Minimizes testing errors, disputes, and repeat sample analysis",
      "Guarantees metrological traceability to national and international measurement standards (NIST/BIPM)",
      "Critical for laboratories serving aerospace, defense, oil & gas, and pharmaceutical clients"
    ],
    principles: [
      {
        number: 1,
        title: "Technical Competence of Laboratory Personnel",
        desc: "Ensuring testing analysts and calibration signatories undergo rigorous competency testing, method authorization, and ongoing supervision."
      },
      {
        number: 2,
        title: "Metrological Traceability (BIPM/NIST)",
        desc: "Establishing an unbroken, documented calibration chain linked directly to the International System of Units (SI)."
      },
      {
        number: 3,
        title: "Method Validation & Verification",
        desc: "Statistically validating non-standard and standard test methods (ASTM, ISO, BS EN, AOAC) for accuracy, precision, linearity, and detection limits."
      },
      {
        number: 4,
        title: "Measurement Uncertainty (MU) Budgets",
        desc: "Calculating and reporting comprehensive measurement uncertainty estimates for every accredited test parameter."
      },
      {
        number: 5,
        title: "Proficiency Testing (PT) & Interlaboratory Comparisons",
        desc: "Demonstrating consistent analytical accuracy through regular, successful participation in international blind PT rounds."
      },
      {
        number: 6,
        title: "Sample Integrity, Chain of Custody & Quality Control",
        desc: "Maintaining temperature-controlled sample logs, blind duplicate testing, spiked samples, and control charts."
      },
      {
        number: 7,
        title: "Impartiality & Defensible Reporting",
        desc: "Issuing tamper-evident test certificates and calibration reports free from commercial or financial bias."
      }
    ],
    marketContext: {
      qmsDefinition: "ISO/IEC 17025 is the global gold standard for testing and calibration laboratories, establishing technical competence, impartiality, and consistent operational integrity.",
      whyItMatters: "Unreliable test results or uncalibrated instrumentation can lead to catastrophic structural collapses, contaminated food/water outbreaks, rejected export cargo, and costly litigation. ISO/IEC 17025 accreditation under the ILAC Mutual Recognition Arrangement (MRA) ensures test reports are accepted globally without re-testing.",
      tenderAdvantage: "Mandatory qualification for environmental compliance testing (NESREA, NUPRC), mineral export assays, petroleum quality testing, pharmaceutical release testing, and construction material verification.",
      keyDetailedBenefits: [
        {
          title: "1. Global Acceptance Under ILAC Mutual Recognition Arrangement",
          desc: "Test certificates issued by your lab are legally accepted across over 100 countries without duplicate analysis."
        },
        {
          title: "2. Complete Elimination of Measurement Disputes",
          desc: "Defensible measurement uncertainty calculations and metrological traceability protect your lab against client disputes."
        },
        {
          title: "3. Top-Tier Oil & Gas and Mining Retainer Contracts",
          desc: "Qualifies commercial labs to win high-volume sample testing contracts from oil majors, mining conglomerates, and engineering consultancies."
        },
        {
          title: "4. Regulatory Recognition by NESREA, NAFDAC & SON",
          desc: "Designates your facility as an accredited regulatory testing authority for statutory environmental, food, and industrial standards."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international ILAC MRA and IAF MLA recognition",
        "Lead Technical Assessors with doctorate-level metrology, analytical chemistry, and geotechnical engineering expertise",
        "Witness assessments verifying actual bench testing, instrument calibration, and PT performance",
        "Fast-track accreditation scheduling and transparent assessment scopes"
      ],
      valueAddedPoints: [
        "Accredited ISO/IEC 17025:2017 Certificate of Competence with EGAC & ILAC MRA marks",
        "Metrology and analytical laboratory specialists with deep technical benchmarking experience",
        "Clear step-by-step scope definition and assessment roadmap",
        "Global ILAC directory listing"
      ]
    },
    deliverables: [
      "Method Validation & Measurement Uncertainty Assessment Report",
      "Proficiency Testing (PT) & Interlaboratory Comparison Verification",
      "Accredited ISO/IEC 17025:2017 Certificate of Competence with EGAC & ILAC Marks"
    ],
    prerequisites: [
      "Documented laboratory quality manual and standard test methods (ASTM, ISO, BS EN)",
      "Measurement Uncertainty (MU) budgets for all accredited parameters",
      "Equipment calibration certificates showing unbroken chain of metrological traceability",
      "Satisfactory participation in recognized Proficiency Testing (PT) schemes"
    ],
    auditSteps: [
      "Step 1: Technical scope definition including specific analytes, methods, and measurement ranges",
      "Step 2: Stage 1 Audit (documentation review, method validation files, and PT performance evaluation)",
      "Step 3: Stage 2 Audit (technical assessment witnessing actual testing, analyst competency checks, and instrument calibration verification)",
      "Step 4: Certification & Surveillance (3-year accredited certificate of competence + annual surveillance assessments)"
    ],
    iconName: "FlaskConical",
    badgeColor: "bg-teal-700 text-white"
  },
  {
    id: "iso-17065",
    code: "ISO/IEC 17065:2012",
    name: "Conformity Assessment — Certification of Products, Processes & Services",
    slug: "iso-17065-product-process-service-certification",
    imageUrl: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800",
    badgeUrl: "https://iemacert.com/wp-content/uploads/2024/01/ISO-9001-1-150x150.png",
    category: "Quality",
    standardsFamily: "ISO/IEC 17000 Series",
    validityYears: 3,
    shortDesc: "International requirements for bodies certifying products, processes, and services to ensure impartiality, technical competence, and global consumer confidence.",
    fullDesc: "ISO/IEC 17065:2012 specifies requirements for conformity assessment bodies operating product, process, and service certification schemes. It ensures that certification schemes are operated in a competent, consistent, and impartial manner, facilitating international market acceptance of certified commodities, consumer goods, electrical equipment, construction materials, and specialized technical services under the IAF Multilateral Recognition Arrangement (MLA).",
    targetIndustries: [
      "Product Certification Bodies & Conformity Assessment Organizations",
      "Consumer Electronics, Electrical Equipment & Appliances Manufacturers",
      "Building Products, Structural Steel, Cement & Glass Certifiers",
      "Food, Organic Farming & Agricultural Commodity Schemes (NAFDAC / Codex)",
      "Environmental & Eco-Labelling Schemes (EcoMark, Energy Star)",
      "Industrial Equipment, Pressure Vessels & Technical Process Certifiers"
    ],
    coreClauses: [
      { number: "Clause 4", title: "General Requirements", desc: "Legal structure, management of impartiality, non-discriminatory conditions, confidentiality, and public access to certification schemes." },
      { number: "Clause 5", title: "Structural Requirements", desc: "Organizational governance, operational independence, and establishing an impartial advisory committee with balanced stakeholder representation." },
      { number: "Clause 6", title: "Resource Requirements", desc: "Competence criteria for technical evaluation personnel, product inspectors, testing laboratories, and audit committees." },
      { number: "Clause 7", title: "Process Requirements", desc: "Rigorous scheme cycles: application, evaluation, review, certification decision, documentation issuance, directory maintenance, and continuous surveillance." },
      { number: "Clause 8", title: "Management System Requirements", desc: "Internal audits, management review, preventive and corrective actions, document and record controls under Option A or Option B." }
    ],
    keyBenefits: [
      "International mutual recognition of certified products under the IAF MLA framework",
      "Compliance with mandatory statutory trade regulations, export-import standards (SONCAP), and national quality marks",
      "Rigorous safeguarding of impartiality, objective evaluation criteria, and independent decision-making",
      "Enhanced consumer confidence, brand distinction, and protection against counterfeit or non-conforming products",
      "Unlocks market entry into regulated regional trade zones including ECOWAS and the African Continental Free Trade Area (AfCFTA)"
    ],
    principles: [
      {
        number: 1,
        title: "Impartiality & Freedom from Commercial Bias",
        desc: "Rigorous structural safeguards to ensure certification decisions are made independently of commercial, financial, or personal pressures."
      },
      {
        number: 2,
        title: "Technical Competence of Evaluators",
        desc: "Deploying certified product specialists, test witnessing engineers, and factory inspection auditors with proven product-specific domain knowledge."
      },
      {
        number: 3,
        title: "Robust Certification Scheme Design",
        desc: "Formulating clear, repeatable certification schemes (Type 1a through Type 5) with defined sampling, testing, and factory surveillance rules."
      },
      {
        number: 4,
        title: "Traceability to Accredited Testing (ISO/IEC 17025)",
        desc: "Ensuring all product testing is performed by accredited laboratories with valid calibration and method validation records."
      },
      {
        number: 5,
        title: "Transparency & Public Verification",
        desc: "Maintaining an accessible, real-time public directory of certified products, license holders, and certificate statuses."
      },
      {
        number: 6,
        title: "Responsiveness to Complaints & Appeals",
        desc: "Operating an independent, documented appeals mechanism for contentious certification assessments or revocations."
      },
      {
        number: 7,
        title: "Market Surveillance & Ongoing Compliance",
        desc: "Conducting unannounced market sampling and factory production control audits to preserve continuous product conformance."
      }
    ],
    marketContext: {
      qmsDefinition: "ISO/IEC 17065 is the premier international benchmark for bodies operating product, process, and service certification schemes, verifying that products consistently meet specified technical and safety standards.",
      whyItMatters: "Substandard, adulterated, or hazardous products threaten public safety and undermine industrial trade. ISO/IEC 17065 accreditation proves to regulators, customs authorities, and consumers that a certification body conducts independent, technically sound conformity assessments.",
      tenderAdvantage: "Essential requirement for operating national regulatory schemes (SONCAP, NAFDAC certification, EcoMark), cross-border trade certification under AfCFTA, and supplying regulated consumer, agricultural, and industrial markets.",
      keyDetailedBenefits: [
        {
          title: "1. Global Acceptance Under the IAF Multilateral Recognition Arrangement",
          desc: "Certified products carry verified IAF MLA marks, enabling frictionless cross-border export without repetitive local testing."
        },
        {
          title: "2. Regulatory Authority Mandates & Pre-Qualification",
          desc: "Mandatory conformity governance for national standards organizations, export inspection agencies, and private scheme owners."
        },
        {
          title: "3. Consumer Protection & Counterfeit Deterrence",
          desc: "Tamper-evident certification marks and serial numbers protect legitimate manufacturers from intellectual property theft."
        },
        {
          title: "4. Accelerated AfCFTA Cross-Border Trade",
          desc: "Harmonizes product compliance across African nations, eliminating redundant non-tariff technical barriers to trade."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international IAF MLA recognition",
        "Lead Technical Evaluators with deep experience across mechanical, electrical, chemical, and agricultural product schemes",
        "Pragmatic scheme scoping and rapid audit turnarounds",
        "IAF CertSearch directory verification"
      ],
      valueAddedPoints: [
        "Accredited ISO/IEC 17065:2012 Certificate of Accreditation with EGAC & IAF MLA marks",
        "Product conformity assessment specialists with deep African trade insights",
        "Clear step-by-step scheme development and validation roadmap",
        "International directory integration"
      ]
    },
    deliverables: [
      "Product Certification Scheme Evaluation & Impartiality Review Report",
      "Factory Production Control (FPC) & Testing Verification Audit Findings",
      "Accredited ISO/IEC 17065:2012 Certificate of Accreditation / Conformance"
    ],
    prerequisites: [
      "Documented product certification scheme rules and normative standard specifications",
      "Established Impartiality Committee with balanced stakeholder representation",
      "Competency files and evaluation criteria for technical auditors and testing experts",
      "Formal contracts with ISO/IEC 17025 accredited testing laboratories",
      "Completed internal audit cycle and formal top management review"
    ],
    auditSteps: [
      "Step 1: Scoping of product categories, certification schemes, and applicable normative standards",
      "Step 2: Stage 1 Audit (documentation review, impartiality charter, and scheme rules evaluation)",
      "Step 3: Stage 2 Audit (witnessing product evaluations, factory production control inspections, testing witness audits, and certification decision records)",
      "Step 4: Certification & Surveillance (3-year accredited certificate of compliance + annual surveillance audits)"
    ],
    iconName: "PackageCheck",
    badgeColor: "bg-indigo-700 text-white"
  },
  {
    id: "iso-15189",
    code: "ISO 15189:2022",
    name: "Medical Laboratories — Requirements for Quality and Competence",
    slug: "medical-laboratories-quality-competence-iso-15189",
    imageUrl: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800",
    badgeUrl: "https://iemacert.com/wp-content/uploads/2024/01/ISO-9001-1-150x150.png",
    category: "Food & Medical",
    standardsFamily: "ISO 15100 Medical Laboratory Series",
    validityYears: 3,
    shortDesc: "The international gold standard for medical and clinical diagnostic laboratories, specifying quality and competence requirements to ensure dependable patient test results and clinical risk management.",
    fullDesc: "ISO 15189:2022 specifies requirements for quality and competence in medical laboratories. Updated to integrate patient care and clinical risk management at its core, ISO 15189:2022 applies to clinical biochemistry, haematology, medical microbiology, histopathology, cytopathology, molecular diagnostics, immunology, and Point-of-Care Testing (POCT). It enables medical laboratories to demonstrate diagnostic competence, metrological traceability, specimen integrity, and dependable medical reporting that physicians and patients can trust unconditionally.",
    targetIndustries: [
      "Hospital Clinical Laboratories & Pathology Departments",
      "Private Diagnostic Testing Networks & Reference Laboratories",
      "Molecular Genetics & Infectious Disease Diagnostic Centers",
      "Blood Transfusion Services & Blood Banking Facilities",
      "Clinical Research Organizations (CROs) & Pharmaceutical Trial Labs",
      "Point-of-Care Testing (POCT) Hospital Units & Urgent Care Facilities"
    ],
    coreClauses: [
      { number: "Clause 4", title: "General Requirements", desc: "Legal entity, impartiality safeguards, ethical patient conduct, and patient well-being prioritized in all diagnostic operations." },
      { number: "Clause 5", title: "Structural & Governance Requirements", desc: "Organizational hierarchy, appointment of a qualified Laboratory Director, and provision of clinical advisory services to healthcare practitioners." },
      { number: "Clause 6", title: "Resource Requirements", desc: "Personnel competence, environmental controls, equipment calibration, reagent batch verification, metrological traceability, and service agreements." },
      { number: "Clause 7", title: "Process Requirements", desc: "Pre-examination collection and transport; examination validation and measurement uncertainty; post-examination reporting, critical alerts, and specimen retention." },
      { number: "Clause 8", title: "Management System Requirements", desc: "Clinical risk assessment, internal quality audits, evaluation of patient outcomes, corrective actions, and annual management review." }
    ],
    keyBenefits: [
      "International mutual recognition of diagnostic test results under ILAC MRA and AFRAC",
      "Dramatic reduction in diagnostic errors, misidentifications, and pre-analytical sample degradation",
      "Embeds clinical risk management directly into patient care workflows",
      "High pre-qualification scores for international clinical trials, HMO panel retainerships, and tertiary hospital accreditations",
      "Full compliance with Medical Laboratory Science Council of Nigeria (MLSCN) and Federal Ministry of Health benchmarks"
    ],
    principles: [
      {
        number: 1,
        title: "Patient Well-Being & Clinical Safety",
        desc: "Placing patient safety, dignified sample collection, and rapid critical value communication at the center of every laboratory process."
      },
      {
        number: 2,
        title: "Diagnostic Competence of Laboratory Scientists",
        desc: "Ensuring all medical scientists, pathologists, and technicians maintain current professional licenses, continual education, and validated competence."
      },
      {
        number: 3,
        title: "Pre-Analytical Specimen Integrity",
        desc: "Enforcing strict patient preparation protocols, barcoded sample accessioning, cold-chain transport, and rejection criteria for hemolyzed/lipemic specimens."
      },
      {
        number: 4,
        title: "Analytical Method Validation & Traceability",
        desc: "Verifying diagnostic accuracy, analytical sensitivity, specificity, and reference intervals traceable to higher-order international reference materials."
      },
      {
        number: 5,
        title: "Internal Quality Control (IQC) & External Quality Assessment (EQA)",
        desc: "Running multi-level controls, applying Westgard multirules, and actively participating in accredited international proficiency testing programs."
      },
      {
        number: 6,
        title: "Post-Analytical Clinical Governance & Urgent Reporting",
        desc: "Timely delivery of clear, authorized diagnostic reports with immediate telephone notification of life-threatening panic values."
      },
      {
        number: 7,
        title: "Continual Improvement & Medical Error Prevention",
        desc: "Conducting systematic root-cause analyses on near-misses, specimen mix-ups, and equipment anomalies to prevent diagnostic harm."
      }
    ],
    marketContext: {
      qmsDefinition: "ISO 15189:2022 is the globally recognized quality and technical competence standard designed specifically for clinical diagnostic and medical pathology laboratories.",
      whyItMatters: "Over 70% of clinical medical decisions rely on laboratory results. Diagnostic errors, specimen mishandling, or delayed reporting can have catastrophic consequences for patient health. ISO 15189 accreditation proves to physicians, healthcare providers, and patients that test results are clinically dependable and accurate.",
      tenderAdvantage: "Mandatory qualification for participating in international clinical trials, winning national public health donor programs (PEPFAR, Global Fund, WHO), and becoming an empanelled laboratory for top-tier health maintenance organizations (HMOs).",
      keyDetailedBenefits: [
        {
          title: "1. Global Diagnostic Recognition Under ILAC MRA",
          desc: "Medical reports from your laboratory are accepted by healthcare systems worldwide without re-testing."
        },
        {
          title: "2. Reduction in Diagnostic Misidentifications & Errors",
          desc: "Barcoding, automated middleware, and IQC rules virtually eliminate pre-analytical and analytical diagnostic errors."
        },
        {
          title: "3. Top-Tier HMO & Medical Tourism Retainerships",
          desc: "Preferred designation by premium private healthcare insurers and international embassies for medical screening."
        },
        {
          title: "4. Full Regulatory MLSCN & HEFAMAA Compliance",
          desc: "Exceeds national inspection standards set by the Medical Laboratory Science Council of Nigeria (MLSCN)."
        }
      ],
      whyChooseUs: [
        "EGAC Accredited with full international ILAC MRA and IAF MLA recognition",
        "Lead Assessors include clinical pathologists, medical microbiologists, and diagnostic lab directors",
        "Pragmatic clinical tracer assessments that evaluate real bedside-to-bench workflows",
        "Fast-track accreditation scheduling and transparent assessment scopes"
      ],
      valueAddedPoints: [
        "Accredited ISO 15189:2022 Certificate of Medical Laboratory Accreditation with EGAC & ILAC marks",
        "Specialized clinical laboratory assessors with deep diagnostic hospital experience",
        "Clear step-by-step clinical validation and assessment roadmap",
        "Global ILAC directory listing"
      ]
    },
    deliverables: [
      "Clinical Examination Method Validation & Verification Assessment Report",
      "External Quality Assessment (EQA/PT) Performance & IQC Review Findings",
      "Accredited ISO 15189:2022 Medical Laboratory Certificate of Accreditation with EGAC & ILAC Marks"
    ],
    prerequisites: [
      "Documented medical laboratory quality manual and standard operating procedures (SOPs) for all diagnostic tests",
      "Internal Quality Control (IQC) records with Levey-Jennings charts and Westgard evaluation rules",
      "Satisfactory enrollment and performance in accredited External Quality Assessment (EQA) / PT schemes",
      "Documented competency assessments and licenses for all medical laboratory scientists and technicians",
      "Completed internal medical laboratory audit and annual management review"
    ],
    auditSteps: [
      "Step 1: Technical scope definition across clinical departments (Haematology, Chemistry, Microbiology, Histology, POCT)",
      "Step 2: Stage 1 Audit (documentation review, clinical SOPs, method verification files, and EQA performance records)",
      "Step 3: Stage 2 Audit (on-site clinical assessment witnessing sample collection, assay runs, instrument calibration, and critical value reporting)",
      "Step 4: Accreditation Decision & Surveillance (3-year accredited certificate of medical competence + annual surveillance assessments)"
    ],
    iconName: "FlaskConical",
    badgeColor: "bg-teal-800 text-white"
  }
];

export const TRAINING_COURSES: TrainingCourse[] = [
  {
    id: "iso-9001-lead-auditor",
    code: "LA-QMS-9001",
    title: "ISO 9001:2015 Quality Management Systems Lead Auditor Course",
    category: "Lead Auditor",
    duration: "5 Days (40 Hours)",
    hours: 40,
    cert: "CQI & IRCA / Exemplar Global Accredited Certificate",
    desc: "Master the skills, knowledge, and practical techniques required to plan, lead, execute, and report third-party ISO 9001:2015 audits in accordance with ISO 19011 and ISO/IEC 17021-1.",
    fullOverview: "This intensive 5-day Lead Auditor training program provides participants with in-depth knowledge of ISO 9001:2015 requirements and develops practical auditing capabilities. Through interactive case studies, live role-play audit simulations, and continuous assessment, participants learn how to lead audit teams, evaluate evidence, identify non-conformities, evaluate corrective action plans, and prepare comprehensive audit reports.",
    mode: "Classroom (Lagos Head Office) & Live Interactive Virtual (Zoom)",
    targetAudience: [
      "Quality Managers, HSE Directors, and Quality Engineers",
      "Internal Auditors seeking international lead auditor certification",
      "Management Consultants and ISO Implementation Advisors",
      "Operations Managers and Supply Chain Quality Directors",
      "Professionals aiming for a career as a certified third-party ISO Auditor"
    ],
    prerequisites: [
      "Basic understanding of the Plan-Do-Check-Act (PDCA) cycle",
      "Fundamental knowledge of ISO 9001 standard structure and quality terminology",
      "Prior experience in organizational management or internal auditing is recommended"
    ],
    learningOutcomes: [
      "Explain the purpose, structure, and intent of ISO 9001:2015 and ISO 19011 auditing principles",
      "Plan and conduct a formal Stage 1 readiness audit and Stage 2 on-site certification audit",
      "Gather objective evidence through effective interviewing, sampling, and observation techniques",
      "Draft accurate, defensible Non-Conformity Reports (NCRs) and categorize severity (Major vs Minor)",
      "Lead opening and closing meetings with executive management with confidence",
      "Satisfy formal training requirements for registration as an IRCA/Exemplar Global Lead Auditor"
    ],
    modules: [
      { moduleNumber: 1, title: "ISO 9001:2015 Concepts & High-Level Structure (HLS)", topics: ["Quality Management Principles (QMPs)", "Annex SL Structure & Clause-by-Clause interpretation", "Risk-based thinking and context analysis"] },
      { moduleNumber: 2, title: "Audit Fundamentals & ISO 19011 Guidelines", topics: ["Auditor ethics, independence, and impartiality", "Audit scoping and resource allocation", "Developing audit plans and checklists"] },
      { moduleNumber: 3, title: "Conducting the Audit & Evidence Gathering", topics: ["Opening meeting protocols", "Interviewing executives and operators", "Evaluating documented information and process workflows", "Detecting non-conformities"] },
      { moduleNumber: 4, title: "Audit Reporting, NCRs & Closing Meeting", topics: ["Grading Non-Conformances (Major, Minor, Opportunity for Improvement)", "Writing definitive audit reports", "Conducting the formal Closing Meeting"] },
      { moduleNumber: 5, title: "Corrective Actions, Surveillance & Final Examination", topics: ["Evaluating Root Cause Analysis (RCA) and corrective actions", "Surveillance and recertification cycles", "Comprehensive 2-hour closed-book final examination"] }
    ],
    schedule: [
      { intake: "Every 1st Monday of the Month", format: "Physical Classroom (Lekki, Lagos)", feeUSD: "$750", feeNGN: "₦950,000", seatsAvailable: 8 },
      { intake: "Every 3rd Monday of the Month", format: "Live Virtual (Instructor-Led)", feeUSD: "$650", feeNGN: "₦850,000", seatsAvailable: 12 }
    ],
    featured: true
  },
  {
    id: "iso-14001-lead-auditor",
    code: "LA-EMS-14001",
    title: "ISO 14001:2015 Environmental Management Systems Lead Auditor Course",
    category: "Lead Auditor",
    duration: "5 Days (40 Hours)",
    hours: 40,
    cert: "Accredited Lead Auditor Certificate (IRCA / EGAC Aligned)",
    desc: "Gain the competence to lead comprehensive environmental audits, evaluate environmental aspect-impact matrices, and assess compliance with national environmental regulations and international treaties.",
    fullOverview: "This comprehensive course trains environmental professionals, HSE officers, and consultants to audit Environmental Management Systems against ISO 14001:2015. Focus areas include evaluating environmental aspects, pollution prevention, waste hierarchy controls, emergency spill readiness, and statutory compliance registers across industrial facilities.",
    mode: "Classroom (Lagos) & Live Virtual Online",
    targetAudience: [
      "Environmental Managers, Sustainability Officers & HSE Engineers",
      "Environmental Consultants and EIA Practitioners",
      "Factory Managers, Operations Directors & Compliance Officers",
      "Auditors wishing to add EMS certification to their professional portfolio"
    ],
    prerequisites: [
      "Understanding of basic environmental concepts (air emissions, effluent, hazardous waste)",
      "Familiarity with ISO 14001:2015 standard clauses"
    ],
    learningOutcomes: [
      "Thoroughly understand ISO 14001:2015 requirements from an environmental auditor's perspective",
      "Assess an organization's Aspect-Impact Register and evaluation methodology",
      "Audit environmental legal compliance registers (NESREA, FMEnv, EPA, local permits)",
      "Conduct on-site environmental inspections and evaluate pollution mitigation measures",
      "Write high-impact environmental audit reports and lead executive closing conferences"
    ],
    modules: [
      { moduleNumber: 1, title: "Environmental Context & ISO 14001 Architecture", topics: ["Environmental challenges & sustainability drivers", "ISO 14001 clause breakdown", "Life-cycle perspective in EMS"] },
      { moduleNumber: 2, title: "Environmental Aspects, Impacts & Legal Obligations", topics: ["Identifying normal, abnormal, and emergency aspects", "Significance criteria methodology", "Evaluating compliance obligations"] },
      { moduleNumber: 3, title: "Audit Planning & On-Site Facility Verification", topics: ["Developing EMS audit plans", "Auditing operational controls (effluent, stacks, chemical storage)", "Emergency preparedness and response evaluation"] },
      { moduleNumber: 4, title: "Environmental Findings, NCRs & Continuous Assessment", topics: ["Formulating environmental non-conformity statements", "Auditing environmental performance indicators", "Role-play audit interviews"] },
      { moduleNumber: 5, title: "Audit Reporting & Final Certification Examination", topics: ["Audit report compilation", "Post-audit follow-up and corrective action verification", "Final examination"] }
    ],
    schedule: [
      { intake: "2nd Monday of Every Month", format: "Hybrid (Classroom / Online Live)", feeUSD: "$750", feeNGN: "₦950,000", seatsAvailable: 10 }
    ],
    featured: true
  },
  {
    id: "iso-45001-lead-auditor",
    code: "LA-OHSMS-45001",
    title: "ISO 45001:2018 Occupational Health & Safety Lead Auditor Course",
    category: "Lead Auditor",
    duration: "5 Days (40 Hours)",
    hours: 40,
    cert: "Accredited OHSMS Lead Auditor Certificate",
    desc: "Develop advanced skills to audit occupational health and safety management systems, evaluate Hazard Identification and Risk Assessments (HIRA), and verify workplace injury prevention systems.",
    fullOverview: "Designed for safety professionals, safety directors, and technical auditors, this course delivers comprehensive practical training in auditing OH&S systems against ISO 45001:2018. Learn to assess physical, chemical, biological, ergonomic, and psychosocial hazards, audit worker consultation mechanisms, evaluate Permit to Work (PTW) protocols, and verify incident investigation workflows.",
    mode: "Classroom (Lagos) & Live Virtual Online",
    targetAudience: [
      "HSE Managers, Safety Officers & Risk Engineers",
      "Operations Managers in Oil & Gas, Construction, and Manufacturing",
      "Corporate Safety Directors and Occupational Health Practitioners",
      "Auditors pursuing professional registration with international auditing registers"
    ],
    prerequisites: [
      "Knowledge of occupational safety principles and workplace hazard identification",
      "Familiarity with ISO 45001 standard terminology"
    ],
    learningOutcomes: [
      "Master ISO 45001:2018 clauses and the hierarchy of hazard controls",
      "Evaluate workplace HIRA registers, risk ratings, and residual risk management",
      "Audit worker consultation, safety committees, and safety culture engagement",
      "Conduct worksite walkthrough audits, PPE checks, and PTW system evaluations",
      "Generate defensible safety audit findings and lead closing meetings"
    ],
    modules: [
      { moduleNumber: 1, title: "ISO 45001 Overview & Safety Governance", topics: ["Global OH&S challenges and standard purpose", "Leadership commitment and worker participation", "Clause 4 to Clause 6 analysis"] },
      { moduleNumber: 2, title: "Hazard Identification, Risk Assessment & Legal Safety Frameworks", topics: ["Hazard identification techniques", "Evaluating hierarchy of controls", "Occupational safety legal registers (Factories Act, OSHA)"] },
      { moduleNumber: 3, title: "Operational Safety Audit Execution", topics: ["Auditing high-risk operations (confined space, working at height, hot work)", "Contractor safety management", "Emergency response & rescue simulation reviews"] },
      { moduleNumber: 4, title: "Incident Investigation & Non-Conformity Management", topics: ["Auditing incident reporting and root cause investigations", "Writing clear OH&S Non-Conformity Reports", "Auditing safety KPIs (LTI, TRIR)"] },
      { moduleNumber: 5, title: "Final Audit Synthesis & Lead Auditor Exam", topics: ["Lead auditor leadership responsibilities", "Closing meeting execution", "Final written and continuous assessment exam"] }
    ],
    schedule: [
      { intake: "1st & 3rd Monday of Every Month", format: "Classroom & Live Virtual", feeUSD: "$750", feeNGN: "₦950,000", seatsAvailable: 10 }
    ],
    featured: true
  },
  {
    id: "iso-27001-lead-auditor",
    code: "LA-ISMS-27001",
    title: "ISO/IEC 27001:2022 Information Security Management Systems Lead Auditor",
    category: "Lead Auditor",
    duration: "5 Days (40 Hours)",
    hours: 40,
    cert: "Accredited ISMS Lead Auditor Certificate",
    desc: "Gain the mastery to audit enterprise cybersecurity posture, Statement of Applicability (SoA), technological controls, and cloud security frameworks against ISO/IEC 27001:2022.",
    fullOverview: "With cybersecurity now a board-level imperative, this 5-day course provides hands-on expertise in auditing ISMS implementations. Covers the 93 updated Annex A security controls (Organizational, People, Physical, Technological), cloud security auditing, cryptography validation, data privacy alignment (GDPR/NDPR), and incident response readiness.",
    mode: "Live Interactive Virtual (Zoom) & Lagos Classroom",
    targetAudience: [
      "Chief Information Security Officers (CISOs), IT Security Directors & Network Engineers",
      "Data Protection Officers (DPOs) and Privacy Compliance Officers",
      "IT Auditors, SOC Managers & Cybersecurity Consultants",
      "Fintech, Banking, and Cloud Infrastructure IT Professionals"
    ],
    prerequisites: [
      "Understanding of fundamental IT concepts, network security, and data protection",
      "Basic familiarity with ISO/IEC 27001:2022 standard structure"
    ],
    learningOutcomes: [
      "Audit the 93 Annex A controls in the updated ISO/IEC 27001:2022 standard",
      "Evaluate an organization's Information Security Risk Assessment and SoA",
      "Audit physical data center security, access controls, encryption, and key management",
      "Evaluate cyber incident response plans, ransomware defenses, and backup restoration drills",
      "Deliver executive-ready cybersecurity audit presentations and reports"
    ],
    modules: [
      { moduleNumber: 1, title: "ISO/IEC 27001:2022 Framework & Threat Landscape", topics: ["Cybersecurity landscape and standard evolution", "Clauses 4-10 analysis", "ISMS scoping across cloud and hybrid environments"] },
      { moduleNumber: 2, title: "Information Security Risk Assessment & Statement of Applicability", topics: ["Asset-threat-vulnerability risk modeling", "Risk treatment plans", "Formulating and validating the Statement of Applicability (SoA)"] },
      { moduleNumber: 3, title: "Auditing Annex A Controls (Technological & Physical)", topics: ["Access control and identity management", "Network security, cryptography, and vulnerability management", "Physical security perimeter and clean desk policy audits"] },
      { moduleNumber: 4, title: "Auditing Annex A Controls (Organizational & People)", topics: ["Information security in supplier relationships", "Employee background checks and awareness", "Incident management and disaster recovery testing"] },
      { moduleNumber: 5, title: "Audit Conclusion, Reporting & ISMS Lead Auditor Exam", topics: ["Writing technical non-conformity reports", "Closing meeting with C-Suite stakeholders", "Final certification examination"] }
    ],
    schedule: [
      { intake: "2nd Monday of Every Month", format: "Live Virtual Instructor-Led", feeUSD: "$850", feeNGN: "₦1,100,000", seatsAvailable: 15 }
    ],
    featured: true
  },
  {
    id: "iso-22000-lead-auditor",
    code: "LA-FSMS-22000",
    title: "ISO 22000:2018 Food Safety Management Systems Lead Auditor",
    category: "Lead Auditor",
    duration: "5 Days (40 Hours)",
    hours: 40,
    cert: "Accredited FSMS Lead Auditor Certificate",
    desc: "Master third-party food safety auditing, HACCP plan verification, Prerequisite Programs (PRPs), and food hazard control across the food supply chain.",
    fullOverview: "This course equips food safety professionals with the skills to lead audits against ISO 22000:2018. It combines in-depth analysis of biological, chemical, physical, and allergen hazards with practical audit methodology for food processing plants, agriculture, packaging facilities, and catering.",
    mode: "Classroom (Lagos) & Live Virtual Online",
    targetAudience: [
      "Food Safety Managers, Quality Assurance Directors & Food Technologists",
      "HACCP Coordinators, Factory Sanitarians & Laboratory Managers",
      "Auditors in Food, Beverage, Agriculture, and Packaging sectors"
    ],
    prerequisites: ["Knowledge of food safety hygiene principles and basic HACCP concepts"],
    learningOutcomes: [
      "Audit ISO 22000:2018 clauses and Codex HACCP principles",
      "Evaluate Prerequisite Programs (PRPs) and Operational PRPs (OPRPs)",
      "Verify Critical Control Points (CCPs), critical limits, and monitoring devices",
      "Audit product traceability systems and mock recall procedures",
      "Lead formal food safety certification audits and write clear audit reports"
    ],
    modules: [
      { moduleNumber: 1, title: "Food Safety Context & ISO 22000 Principles", topics: ["Food safety hazards and regulatory context", "ISO 22000 High Level Structure", "Food safety policy and management responsibility"] },
      { moduleNumber: 2, title: "Prerequisite Programs (PRPs) & Hazard Analysis", topics: ["ISO/TS 22002 requirements (facility design, pest control, sanitation)", "Hazard identification and hazard assessment methodology"] },
      { moduleNumber: 3, title: "HACCP Plan & OPRP Audit Verification", topics: ["Determining CCPs vs OPRPs", "Auditing critical limits and monitoring procedures", "Traceability and allergen control audits"] },
      { moduleNumber: 4, title: "Food Safety Auditing in Practice", topics: ["On-site plant inspection protocols", "Swab testing verification and hygiene sampling", "Writing food safety non-conformities"] },
      { moduleNumber: 5, title: "Audit Wrap-up & Lead Auditor Examination", topics: ["Closing meetings", "Corrective action evaluation", "Final 2-hour examination"] }
    ],
    schedule: [
      { intake: "Monthly Intake", format: "Classroom & Live Virtual", feeUSD: "$750", feeNGN: "₦950,000", seatsAvailable: 10 }
    ]
  },
  {
    id: "iso-internal-auditor-integrated",
    code: "IA-IMS-9001-14001-45001",
    title: "Integrated Management Systems (IMS) Internal Auditor Course (ISO 9001, 14001, 45001)",
    category: "Internal Auditor",
    duration: "3 Days (24 Hours)",
    hours: 24,
    cert: "IEMA Standards Certified IMS Internal Auditor Certificate",
    desc: "Comprehensive internal auditor training covering Quality (ISO 9001), Environment (ISO 14001), and Health & Safety (ISO 45001) in a single unified auditing program.",
    fullOverview: "Maximize organizational efficiency by learning to audit integrated management systems. This 3-day workshop teaches internal audit team members how to leverage the common Annex SL structure to audit quality, environmental, and safety processes simultaneously, reducing audit fatigue and streamlining corporate compliance.",
    mode: "Classroom (Lagos) & Live Virtual Online",
    targetAudience: [
      "Internal audit team members and departmental champions",
      "QHSE Officers and Compliance Coordinators",
      "Operations Supervisors and Facility Engineers"
    ],
    prerequisites: ["Basic familiarity with organizational operations and procedures"],
    learningOutcomes: [
      "Understand the combined requirements of ISO 9001, ISO 14001, and ISO 45001",
      "Prepare integrated audit checklists and annual internal audit schedules",
      "Conduct internal audits across operational departments efficiently",
      "Document clear internal non-conformance reports and track corrective actions to closure",
      "Prepare effective internal audit summary reports for Management Review meetings"
    ],
    modules: [
      { moduleNumber: 1, title: "Integrated Management System Architecture", topics: ["Annex SL common framework", "Integrated QHSE policy and objectives", "Combined risk and opportunity management"] },
      { moduleNumber: 2, title: "Internal Audit Planning & Execution", topics: ["Internal audit scheduling and notification", "Creating integrated audit checklists", "Interviewing colleagues and gathering objective evidence"] },
      { moduleNumber: 3, title: "Reporting Findings & Driving Continuous Improvement", topics: ["Grading internal findings", "Root cause analysis methodologies (5-Why, Fishbone)", "Preparing internal audit reports for management review"] }
    ],
    schedule: [
      { intake: "1st & 3rd Wednesday of Every Month", format: "Classroom & Online Live", feeUSD: "$450", feeNGN: "₦550,000", seatsAvailable: 14 }
    ],
    featured: true
  },
  {
    id: "iso-27001-internal-auditor",
    code: "IA-ISMS-27001",
    title: "ISO/IEC 27001:2022 Information Security Internal Auditor Course",
    category: "Internal Auditor",
    duration: "2 Days (16 Hours)",
    hours: 16,
    cert: "Certified ISMS Internal Auditor Certificate",
    desc: "Learn to audit internal IT controls, security policies, access matrices, and data privacy frameworks to keep your organization audit-ready for third-party ISO 27001 certification.",
    fullOverview: "A fast-paced, highly practical 2-day workshop for internal IT and compliance personnel. Gain the skills to perform periodic internal information security audits, verify the implementation of Statement of Applicability (SoA) controls, and ensure ongoing compliance with NDPR and cyber regulatory standards.",
    mode: "Live Virtual (Online)",
    targetAudience: ["IT Staff, Systems Administrators, Internal Auditors, Compliance Officers"],
    prerequisites: ["Basic understanding of IT systems and data privacy"],
    learningOutcomes: [
      "Plan and execute internal ISMS audits against ISO/IEC 27001:2022",
      "Audit technological controls, password policies, and backup verification",
      "Identify internal security vulnerabilities and write clear internal NCRs",
      "Prepare the internal audit report required for management reviews and external audits"
    ],
    modules: [
      { moduleNumber: 1, title: "ISO 27001:2022 Controls & Internal Audit Scoping", topics: ["Overview of 93 controls", "Internal audit charter and planning", "Developing ISMS audit checklists"] },
      { moduleNumber: 2, title: "Executing the Internal Audit & Root Cause Closure", topics: ["Auditing IT workflows and cloud instances", "Writing internal findings and corrective action plans", "Internal audit reporting"] }
    ],
    schedule: [
      { intake: "Bi-Weekly Cohorts", format: "Live Virtual (Instructor-Led)", feeUSD: "$350", feeNGN: "₦420,000", seatsAvailable: 16 }
    ]
  },
  {
    id: "iso-awareness-executive",
    code: "AWR-EXEC-ISO",
    title: "Executive Awareness & Implementation Workshop for Leadership Teams",
    category: "Awareness & Implementation",
    duration: "1 Day (8 Hours)",
    hours: 8,
    cert: "Executive Certificate in ISO Governance",
    desc: "Tailored for C-Suite executives, managing directors, and board members to understand their leadership roles, resource commitments, and strategic ROI in ISO certification.",
    fullOverview: "Designed specifically for busy business leaders, this condensed 1-day briefing covers what top management must know to champion ISO implementations. Learn how ISO frameworks enhance enterprise valuation, satisfy institutional tender pre-qualifications, mitigate legal exposure, and drive sustainable profitability.",
    mode: "Executive Boardroom Session or Dedicated Corporate Webinar",
    targetAudience: ["CEOs, Managing Directors, Board Members, General Managers, CFOs"],
    prerequisites: ["None"],
    learningOutcomes: [
      "Understand top management leadership obligations under Clause 5 across ISO standards",
      "Align ISO management system objectives with organizational business strategies",
      "Effectively conduct Top Management Review meetings that drive business growth",
      "Maximize corporate ROI from certification and surveillance audits"
    ],
    modules: [
      { moduleNumber: 1, title: "Strategic Value of Accredited Certification", topics: ["Tender advantages, global market access, risk governance", "Executive responsibilities under ISO standards"] },
      { moduleNumber: 2, title: "Driving Management Reviews & Resource Allocation", topics: ["Key performance metrics for leadership", "Continuous improvement governance"] }
    ],
    schedule: [
      { intake: "On-Demand Corporate Bookings", format: "Executive Boardroom / Private Virtual", feeUSD: "$1,200 (Group rate)", feeNGN: "₦1,500,000 (Group rate)", seatsAvailable: 20 }
    ]
  },
  {
    id: "lifting-rigging-safety-training",
    code: "TECH-LIFT-01",
    title: "Appointed Person & Rigging Inspection Technical Safety Course",
    category: "Technical & Safety",
    duration: "3 Days (24 Hours)",
    hours: 24,
    cert: "IEMA Certified Technical Lifting Inspector Certificate",
    desc: "Practical hands-on technical training for rigging supervisors, lifting engineers, and safety inspectors covering LEEA standards, sling inspection, and lift planning.",
    fullOverview: "Developed in alignment with international LEEA guidelines, this technical training course covers thorough examination of lifting equipment, rejection criteria for wire ropes and synthetic webbing slings, load calculations, crane radius tables, and statutory lift plan formulations for onshore and offshore operations.",
    mode: "Classroom & Practical Yard Workshop (Lagos)",
    targetAudience: ["Lifting Supervisors, Rigging Superintendents, Crane Operators, Safety Inspectors"],
    prerequisites: ["Basic industrial site or lifting operations experience"],
    learningOutcomes: [
      "Identify discard criteria for wire ropes, chain slings, shackles, and eyebolts",
      "Calculate sling angles, tension forces, and center-of-gravity dynamics",
      "Formulate complex and critical Lift Plans compliant with statutory safety laws",
      "Execute periodic thorough examinations and maintain statutory lifting registers"
    ],
    modules: [
      { moduleNumber: 1, title: "Lifting Regulations & Equipment Standards", topics: ["Statutory safety regulations (Factories Act, LOLER, LEEA)", "Equipment categorization and marking"] },
      { moduleNumber: 2, title: "Rigging Hardware Inspection & Discard Criteria", topics: ["Wire rope inspection and MRT basics", "Chain slings, webbing slings, shackles, hooks, and spreader beams"] },
      { moduleNumber: 3, title: "Lift Planning, Load Calculation & Practical Yard Assessment", topics: ["Complex lift plans and crane charts", "Practical inspection in the yard", "Final technical assessment"] }
    ],
    schedule: [
      { intake: "Last Wednesday of Every Month", format: "Classroom + Hands-On Yard", feeUSD: "$550", feeNGN: "₦700,000", seatsAvailable: 12 }
    ]
  }
];

export const DETAILED_INSPECTION_MODULES: InspectionDetail[] = [
  {
    id: "materials-testing",
    title: "Materials Testing (Destructive, Mechanical, Chemical & Metallurgical)",
    tagline: "ISO/IEC 17025 Accredited Materials Characterization & Laboratory Testing",
    description: "IEMA Standards Limited delivers comprehensive destructive and mechanical materials testing, optical emission chemical analysis, corrosion evaluation, and metallurgical characterization in full compliance with ISO/IEC 17025. We evaluate metals, non-metals, polymers, elastomers, resins, and composites to verify strength, fracture toughness, chemical purity, and corrosion resistance.",
    standardsApplied: [
      "ISO/IEC 17025:2017 (General requirements for the competence of testing and calibration laboratories)",
      "ASTM A370 & ISO 6892-1 (Tensile, Yield Strength & Elongation Testing)",
      "ASTM E23 & ISO 148-1 (Charpy V-Notch Cryogenic Impact Testing down to -196°C)",
      "ASTM E10 (Brinell), ASTM E18 (Rockwell), ASTM E384 (Vickers / Knoop Hardness)",
      "ASTM E415 & ASTM E1086 (Optical Emission Vacuum Spectrometry - Chemical Composition Analysis)",
      "ASTM G48 (Ferric Chloride Pitting & Crevice Corrosion) & ASTM A262 (Intergranular Attack)",
      "ASTM D638, ASTM D790, ASTM D2240 (Polymer, Elastomer & Resin Physical Testing)",
      "ASME Section IX, AWS D1.1, API 1104, BS EN ISO 15614 (Weld Procedure Qualification PQR/WPQ)"
    ],
    personnelQualifications: [
      "Senior Metallurgical & Materials Engineers (PhD / MSc Qualified)",
      "Certified ISO/IEC 17025 Quality Technical Managers & Signatories",
      "CSWIP / AWS Senior Welding Inspectors & PQR Dossier Specialists",
      "NACE / AMPP Certified Corrosion Specialists & Chemical Analysts"
    ],
    equipmentUsed: [
      "Servo-Hydraulic Universal Testing Machines (UTM up to 1,000 kN) with Digital Extensometers",
      "Instrumented Charpy Impact Testers (450 Joules) with Sub-Zero Cryogenic Cooling Chambers (-196°C)",
      "Spark Optical Emission Spectrometers (OES) for Carbon, Sulfur, Phosphorus, Nitrogen & 30+ Alloys",
      "Digital Microhardness Testers (Vickers HV 0.01 - HV 10) & Automated Hardness Survey Traverses",
      "Salt Spray Corrosion Chambers (ASTM B117) & Autoclave Pitting Corrosion Test Cells",
      "Differential Scanning Calorimeters (DSC), Melt Flow Indexers (MFI) & Durometer Hardness Gauges"
    ],
    methodologies: [
      { 
        title: "Tensile, Yield, Elongation & Bend Testing", 
        detail: "Precision ambient and elevated temperature tensile testing evaluating Proof Stress (Rp0.2), Ultimate Tensile Strength (UTS), % Elongation, and Reduction of Area, complemented by face, root, and side guided bend tests.", 
        applications: "Structural steel plates, rebar, pipelines, forgings, fasteners, and butt-welded joints." 
      },
      { 
        title: "Charpy V-Notch Cryogenic Impact Toughness", 
        detail: "Evaluating energy absorption (Joules), lateral expansion, and shear fracture appearance under high strain rates at standard and cryogenic temperatures (down to -196°C liquid nitrogen).", 
        applications: "Offshore structural steels, LNG cryogenic storage tanks, low-temperature pressure piping." 
      },
      { 
        title: "Optical Emission Chemical Analysis (OES) & Carbon Equivalent (CE)", 
        detail: "Direct-reading spark spectrometry verifying full chemical elemental composition, trace tramp elements, and calculated Carbon Equivalent (CEV / Pcm) for weldability verification.", 
        applications: "Carbon steels, low-alloy steels, austenitic/duplex stainless steels, nickel alloys, cast irons." 
      },
      { 
        title: "Corrosion Resistance & Pitting Tests (ASTM G48 / ASTM A262)", 
        detail: "Accelerated ferric chloride pitting/crevice corrosion testing (Method A/B) and Practice A-E acid testing assessing susceptibility to intergranular attack in sensitization conditions.", 
        applications: "Duplex 2205, Super Duplex 2507, 6Mo alloys, heat exchangers, subsea flowlines." 
      },
      { 
        title: "Metallography, Grain Size & Inclusion Analysis", 
        detail: "Microstructural phase quantification (austenite/ferrite balance), grain size rating (ASTM E112), non-metallic inclusion scoring (ASTM E45), and macro-etch weld cross-sections.", 
        applications: "Failure investigations, casting quality checks, welding procedure qualification dossiers." 
      },
      { 
        title: "Polymer, Elastomer & Composite Testing", 
        detail: "Tensile modulus, elongation at break, tear strength, Shore A & D durometer hardness, density, melt flow index (MFI), and environmental stress cracking resistance (ESCR).", 
        applications: "HDPE geomembranes, pipeline composite wraps, rubber seals, gaskets, composite pressure vessels." 
      }
    ],
    deliverables: [
      "ISO/IEC 17025 Accredited Laboratory Test Reports with complete stress-strain graphs and calibration traceability",
      "EN 10204 Type 3.1 & 3.2 Material Verification Test Certificates",
      "Welding Procedure Qualification Records (PQR) and Welder Performance Qualification Records (WPQR)",
      "Metallographic Microstructure Photomicrographs (up to 1000x magnification) with phase fraction data",
      "Definitive Engineering Failure Analysis and Root Cause Investigation Reports"
    ],
    industriesServed: [
      "Oil & Gas / Subsea & Flowlines",
      "Steel Mills & Structural Fabrication",
      "Civil & Heavy Infrastructure Construction",
      "Pressure Vessel & Boiler Manufacturing",
      "Aerospace, Marine & Automotive Engineering",
      "Chemical Processing & Mining Plants"
    ],
    statutoryRequirements: [
      "Accredited under ISO/IEC 17025 by Egyptian Accreditation Council (EGAC CAB 12203)",
      "Recognized by International Laboratory Accreditation Cooperation (ILAC-MRA)",
      "Complies with NUPRC, NNPC, NCDMB, ASME, API, and ASTM statutory material mandates"
    ]
  },
  {
    id: "ndt-services",
    title: "Non-Destructive Testing (NDT) & Advanced Flaw Detection",
    tagline: "ASNT Level II & III Certified Advanced NDT Inspection",
    description: "IEMA Standards Limited delivers comprehensive conventional and advanced Non-Destructive Testing (NDT) services for oil and gas pipelines, pressure vessels, storage tanks, offshore structural welds, and rotating machinery. Our certified technicians detect subsurface flaws, crack propagation, corrosion wall loss, and welding defects without damaging the structural integrity of your operational assets.",
    standardsApplied: [
      "ASNT SNT-TC-1A & ASNT ACCP Central Certification",
      "ASME Boiler & Pressure Vessel Code (Section V & Section VIII)",
      "API 1104 (Welding of Pipelines and Related Facilities)",
      "AWS D1.1 (Structural Welding Code - Steel)",
      "ISO 9712 (Non-destructive testing — Qualification and certification of NDT personnel)",
      "BS EN ISO 17636 / BS EN ISO 11666 (Weld Examination Standards)"
    ],
    personnelQualifications: [
      "ASNT Level III Chief NDT Technical Advisors",
      "ASNT / PCN Level II Certified Ultrasonic (UT) Technicians",
      "PCN / ASNT Level II Radiographic Film Interpreters (RT)",
      "AWS Certified Welding Inspectors (CWI) and CSWIP 3.1 / 3.2 Inspectors",
      "NACE / FROSIO Certified Protective Coating Inspectors"
    ],
    equipmentUsed: [
      "Phased Array Ultrasonic (PAUT) & TOFD Olympus OmniScan MX2 / X3 Units",
      "Digital Ultrasonic Flaw Detectors (Krautkramer / GE USM 36)",
      "Directional & Panoramic Industrial X-Ray Tubes & Gamma Ir-192 Projectors",
      "Handheld XRF / Optical Emission Spectrometers for PMI (Niton / Olympus Vanta)",
      "Electromagnetic AC Yokes & Fluorescent Blacklight MT Inspection Systems",
      "Digital Ultrasonic Thickness Gauges with High-Temperature Probes (up to 500°C)"
    ],
    methodologies: [
      { title: "Ultrasonic Testing (UT) & Phased Array (PAUT / TOFD)", detail: "High-frequency sound wave flaw detection to locate laminations, weld lack of fusion, and volumetric wall thinning.", applications: "Cross-country pipelines, heavy structural welds, pressure vessel seams." },
      { title: "Radiographic Testing (RT) & Digital CR/DR", detail: "Short wavelength electromagnetic radiation to produce permanent photographic records of internal weld integrity and casting voids.", applications: "New pipeline construction, valve casting qualification, refinery piping." },
      { title: "Magnetic Particle Testing (MT - Wet & Dry)", detail: "Detects surface and slight subsurface ferromagnetic discontinuities using electromagnetic yokes and contrast/fluorescent inks.", applications: "Drill pipe threads, crane hooks, structural node welds, storage tank fillets." },
      { title: "Liquid Dye Penetrant Testing (PT)", detail: "Capillary action dye testing for surface-breaking defects on non-magnetic stainless steels, alloys, and aluminum.", applications: "Stainless steel piping, turbine blades, weld root passes." },
      { title: "Positive Material Identification (PMI)", detail: "Fast, non-destructive elemental chemical alloy verification using handheld X-Ray Fluorescence (XRF).", applications: "Material verification, alloy grade sorting (316L, Duplex, Inconel), sour service compliance." },
      { title: "Hardness Testing & Ultrasonic Thickness Gauging (UTG)", detail: "In-situ Leeb / UCI hardness measurement and precise remaining wall thickness surveys.", applications: "Corrosion monitoring loops, heat-affected zone (HAZ) evaluation." }
    ],
    deliverables: [
      "Comprehensive NDT Inspection Reports with mapped defect locations and depth profiling",
      "Digitized Radiographic Film Records and PAUT Scan Data Files",
      "ASNT Level III Signed and Approved Inspection Certificates",
      "Remaining Asset Life Calculations and Fit-for-Service Recommendations"
    ],
    industriesServed: [
      "Upstream & Downstream Oil & Gas",
      "Power Generation & Thermal Boilers",
      "Marine, Offshore FPSOs & Shipyards",
      "Heavy Steel Fabrication & Bridges",
      "Mining Processing Plants"
    ],
    statutoryRequirements: [
      "Complies with NUPRC / DPR regulatory technical directives",
      "Satisfies ASME Section V mandatory NDT examination procedures"
    ]
  },
  {
    id: "pressure-vessels-tanks",
    title: "Pressure Vessels, Boilers & Aboveground Storage Tank Inspection",
    tagline: "API 510, API 570, API 653 & ASME Statutory Vessel Integrity Verification",
    description: "Statutory in-service and out-of-service inspection of pressurized equipment and bulk liquid storage tanks. We evaluate shell corrosion, bottom plate pitting, weld fatigue, safety relief valve operation, and foundation settlement to prevent catastrophic loss of containment.",
    standardsApplied: [
      "API 510 (Pressure Vessel Inspection Code: In-service Inspection, Rating, Repair)",
      "API 570 (Piping Inspection Code: In-service Inspection of Piping Systems)",
      "API 653 (Tank Inspection, Repair, Alteration, and Reconstruction)",
      "ASME Section VIII Div 1 & 2 (Boiler and Pressure Vessel Code)",
      "API 579 / ASME FFS-1 (Fitness-For-Service Assessments)",
      "NBIC (National Board Inspection Code)"
    ],
    personnelQualifications: [
      "API 510 Certified Pressure Vessel Inspectors",
      "API 570 Certified Piping Inspectors",
      "API 653 Certified Storage Tank Inspectors",
      "Certified Pressure Relief Valve (PRV) Technicians"
    ],
    equipmentUsed: [
      "Magnetic Flux Leakage (MFL) Tank Bottom Floor Scanners",
      "Automated Ultrasonic Corrosion Mapping Crawlers",
      "Digital Hydrostatic Test Pumps & Calibrated Pressure Data Loggers",
      "Optical Laser Theodolites for Tank Out-of-Roundness & Settlement Surveys",
      "High-Pressure Safety Valve Test Benches with Nitrogen Test Medium"
    ],
    methodologies: [
      { title: "API 653 Storage Tank Floor MFL Scanning", detail: "High-speed magnetic flux leakage scanning of bottom floor plates to detect underside soil-side corrosion pitting.", applications: "Crude oil storage tanks, chemical bulk storage, fuel terminal tanks." },
      { title: "Pressure Relief Valve (PRV) Testing & Tagging", detail: "Popping pressure verification, reseat pressure testing, and leak-rate seat checks on certified test benches.", applications: "Process vessels, boiler steam lines, gas compressor stations." },
      { title: "Hydrostatic & Pneumatic Proof Pressure Testing", detail: "Controlled pressurization up to 1.5x design pressure to verify structural strength and leak tightness.", applications: "New pipeline tie-ins, vessel repair validation, manifold skids." },
      { title: "API 579 Fitness-for-Service (FFS) Analysis", detail: "Engineering calculations assessing remaining wall thickness, pitting density, and safe operating limits.", applications: "Aging refinery vessels, de-rated piping systems." }
    ],
    deliverables: [
      "API 510 / 570 / 653 Comprehensive Inspection Reports with Remaining Life Estimates",
      "Tank Bottom Floor Corrosion Thickness Heatmaps",
      "PRV Calibration & Test Certificates with Tamper-Proof Lead Seals",
      "Statutory Fitness-for-Service & Maximum Allowable Working Pressure (MAWP) Recertification"
    ],
    industriesServed: ["Petroleum Refineries", "Chemical Plants", "Tank Farms & Terminals", "Thermal Power Stations", "Breweries & Distilleries"]
  },
  {
    id: "lifting-equipment-cranes",
    title: "Statutory Lifting Equipment Inspection & Proof Load Testing",
    tagline: "LEEA Compliant Thorough Examination & Proof Load Testing up to 500 Tons",
    description: "Independent statutory third-party inspection, proof load testing, and certification of lifting machinery, mobile cranes, overhead gantry cranes, offshore marine cranes, wire rope slings, and rigging hardware. Ensuring full compliance with LEEA, LOLER, OSHA, and local Factories Act regulations.",
    standardsApplied: [
      "LEEA (Lifting Equipment Engineers Association) Code of Practice",
      "LOLER 1998 (Lifting Operations and Lifting Equipment Regulations)",
      "BS 7121 (Code of Practice for Safe Use of Cranes)",
      "ASME B30 Series (Cranes, Hoists, Hooks, Slings, and Rigging)",
      "Factories Act & Federal Ministry of Labour Statutory Regulations",
      "EN 12079 / DNVGL-ST-E271 (Offshore Freight Containers & Lifting Sets)"
    ],
    personnelQualifications: [
      "LEEA Certified Lifting Equipment Inspectors (Diploma Level)",
      "ASNT Level II Magnetic Rope Testing (MRT) Technicians",
      "Certified Crane Inspectors & Proof Load Test Supervisors"
    ],
    equipmentUsed: [
      "Calibrated Water Test Weights & Bags (from 1 Ton up to 100 Tons per bag)",
      "Certified Solid Steel Test Weights & Calibrated Load Cells (up to 500 Tons)",
      "Intron Plus / Laborde Magnetic Rope Testing (MRT) Electronic Scanners",
      "Hydraulic Pad Eye Proof Testers & Tension Gauges",
      "Calibrated Shackle & Rigging Test Benches"
    ],
    methodologies: [
      { title: "Proof Load Testing & Deflection Measurement", detail: "Applying controlled test loads (110% to 150% of Safe Working Load) to verify structural and mechanical integrity without permanent deformation.", applications: "Mobile cranes, gantry cranes, pedestal cranes, forklift trucks, spreader beams." },
      { title: "Magnetic Rope Testing (MRT) of Crane Wire Ropes", detail: "Non-destructive electromagnetic scanning detecting internal wire breaks, core corrosion, and cross-sectional area loss inside thick steel wire ropes.", applications: "Offshore crane hoist ropes, winch cables, elevator suspension ropes." },
      { title: "Rigging Hardware Thorough Examination", detail: "100% visual, dimensional, and NDT inspection of shackles, master links, chain slings, wire rope slings, and turnbuckles.", applications: "Construction rigging lofts, marine vessel rigging gears." },
      { title: "Color Coding & Statutory Register Management", detail: "Applying standardized quarterly / biannual color coding and maintaining centralized lifting equipment registers.", applications: "Onshore & offshore project worksites." }
    ],
    deliverables: [
      "Statutory Form 10 / Certificate of Thorough Examination (6-monthly / annual)",
      "Proof Load Test Certificates with continuous load cell chart recordings",
      "Magnetic Wire Rope MRT Condition Reports with graphic flaw trace maps",
      "Lifting Equipment Rigging Register & Color-Code Clearance Certificates"
    ],
    industriesServed: ["Offshore Oil & Gas", "Ports & Marine Terminals", "Heavy Civil Construction", "Logistics & Warehousing", "Manufacturing Plants"]
  },
  {
    id: "pre-shipment-fat",
    title: "Vendor Surveillance, Pre-Shipment Inspection & FAT/SAT Witnessing",
    tagline: "Global Factory Acceptance Testing (FAT) & Quality Assurance at Origin",
    description: "Protect your capital expenditure investments by deploying our experienced QA/QC inspectors directly to manufacturer fabrication shops worldwide. We witness Factory Acceptance Testing (FAT), review Mill Test Reports (MTR 3.1/3.2), verify dimensional tolerances, inspect protective coatings, and supervise secure container packing prior to export dispatch.",
    standardsApplied: [
      "ISO 9001:2015 & ISO 17020 (Conformity assessment — Requirements for the operation of bodies performing inspection)",
      "EN 10204 (Metallic products — Types of inspection documents: 3.1 & 3.2)",
      "SSPC / NACE / ISO 8501 (Surface Preparation & Protective Coating Standards)",
      "Customer Specific Procurement Specifications & Approved Inspection & Test Plans (ITPs)"
    ],
    personnelQualifications: [
      "Senior Vendor QA/QC Inspectors with 15+ years shop floor surveillance experience",
      "NACE / FROSIO Level II & III Certified Coating Inspectors",
      "CSWIP / AWS Certified Welding Inspectors"
    ],
    equipmentUsed: [
      "Calibrated Digital Coating Thickness Gauges (Elcometer / DeFelsko)",
      "Surface Profile Gauges, Bresle Soluble Salt Test Kits & Sling Psychrometers",
      "Precision Laser Dimensional Measurement Tools & Vernier Calipers",
      "High-Voltage Holiday Detectors (Pinhole / Porosity Detectors on pipeline coatings)"
    ],
    methodologies: [
      { title: "Witnessing Factory Acceptance Tests (FAT)", detail: "Independent witnessing of mechanical functional tests, hydrostatic pressure tests, electrical dielectric testing, and automation loop checks.", applications: "Pumps, compressors, gas turbines, transformer substations, subsea valves." },
      { title: "Material Test Report (MTR) & 3.2 Inspection Certification", detail: "Verifying physical mechanical test results and chemical composition against raw material mill certificates.", applications: "High-grade alloy pipes, forgings, structural plates, flange fittings." },
      { title: "Surface Preparation & Protective Coating Inspection", detail: "Inspecting blast cleanliness (Sa 2.5), surface profile depth, climatic dew point limits, and wet/dry film thickness (DFT).", applications: "Offshore marine paint systems, pipeline fusion bonded epoxy (FBE)." },
      { title: "Pre-Shipment Inspection (PSI) & Container Stuffing Supervision", detail: "Final quantity counts, packaging verification, desiccants check, container lashing supervision, and tamper-evident sealing.", applications: "Export machinery, project freight, critical spare parts." }
    ],
    deliverables: [
      "Vendor Inspection Reports (VIR) with comprehensive photographic logs within 24 hours of inspection",
      "Inspection Release Note (IRN) authorizing supplier dispatch and release of milestone payment",
      "Certificate of Clean Findings and Final Inspection Dossier",
      "EN 10204 Type 3.2 Third-Party Material Verification Certificate"
    ],
    industriesServed: ["EPC Project Contractors", "Power Plant Developers", "Oil & Gas Operators", "Government Procurement Boards", "Heavy Industrial Importers"]
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "certification",
    title: "ISO Management System Certification",
    tagline: "EGAC Accredited & Globally Recognized Certification Body",
    description: "IEMA Standards Ltd provides independent third-party assessment and certification for international ISO standards across manufacturing, oil & gas, healthcare, technology, construction, and public services.",
    icon: "Award",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    subServices: [
      {
        name: "Stage 1 Readiness Audit",
        description: "Comprehensive desktop evaluation of your management system documentation, policies, and readiness prior to formal certification.",
        features: ["Gap analysis report", "Non-conformity identification", "Audit schedule planning"]
      },
      {
        name: "Stage 2 Certification Audit",
        description: "On-site implementation verification where our lead auditors assess practical adherence to ISO standards across operations.",
        features: ["Process & facility inspection", "Employee interviews", "EGAC accredited certificate award"]
      },
      {
        name: "Surveillance & Recertification",
        description: "Annual surveillance audits (Years 1 & 2) and 3-year recertification cycles ensuring sustained operational excellence.",
        features: ["Continual improvement tracking", "Standards transition support", "Global certificate directory listing"]
      }
    ]
  },
  {
    id: "testing",
    title: "Material Testing & Technical Laboratory",
    tagline: "ISO/IEC 17025 Compliant Material Analysis & NDT Testing",
    description: "Our state-of-the-art laboratory provides non-destructive testing (NDT), polymer evaluation, metallurgical analysis, and environmental sample testing to ensure structural integrity and product safety.",
    icon: "FlaskConical",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=1200",
    subServices: [
      {
        name: "Non-Destructive Testing (NDT)",
        description: "Ultrasonic testing (UT), Radiographic testing (RT), Magnetic particle testing (MT), and Dye penetrant testing (PT) for pipelines and industrial structures.",
        features: ["Level II & III ASNT certified inspectors", "Weld flaw detection", "Pipeline wall thickness gauging"]
      },
      {
        name: "Polymers & Material Analysis",
        description: "Mechanical tensile testing, hardness measurement, chemical composition analysis, and polymer durability testing.",
        features: ["Tensile & compression yield tests", "Corrosion resistance screening", "Failure analysis reporting"]
      },
      {
        name: "Environmental Compliance Testing",
        description: "Air emissions monitoring, industrial wastewater effluent analysis, soil contamination screening, and workplace noise mapping.",
        features: ["Water quality index testing", "Stack emission monitoring", "Hazardous substance detection"]
      }
    ]
  },
  {
    id: "inspection",
    title: "Industrial Inspection & Quality Assurance",
    tagline: "Third-Party Pre-Shipment & In-Service Industrial Inspection",
    description: "Independent third-party inspection services verifying equipment compliance, fabrication standards, and safety across major capital projects.",
    icon: "SearchCheck",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1200",
    subServices: [
      {
        name: "Pre-Shipment & Factory Acceptance Testing (FAT)",
        description: "Verifying machinery, pressure vessels, and technical components against purchase orders and international codes before dispatch.",
        features: ["Vendor quality audits", "Dimensional verification", "FAT witnessing & certificate of conformity"]
      },
      {
        name: "In-Service Equipment Inspection",
        description: "Periodic statutory inspection of lifting equipment, boilers, pressure vessels, storage tanks, and offshore platforms.",
        features: ["Safety valve certification", "Structural integrity assessment", "Asset integrity management (AIM)"]
      }
    ]
  },
  {
    id: "compliance",
    title: "Compliance, AML & Advisory Services",
    tagline: "Institutional Due Diligence, GDPR/NDPR & Anti-Money Laundering",
    description: "Comprehensive regulatory compliance consulting, environmental impact assessments, anti-money laundering (AML) audits, and data privacy governance.",
    icon: "FileCheck2",
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&q=80&w=1200",
    subServices: [
      {
        name: "Anti-Money Laundering (AML) Compliance",
        description: "Risk-based AML policy frameworks, Know Your Customer (KYC) audit verification, and transaction monitoring controls.",
        features: ["AML risk matrix design", "Sanction screening protocols", "Regulatory filing support"]
      },
      {
        name: "Environmental Consultancy & EIA",
        description: "Environmental Impact Assessments (EIA), Environmental Audits (EA), and Carbon Footprint Accounting for industrial projects.",
        features: ["EIA report development", "Regulatory environmental permits", "Waste minimization strategies"]
      },
      {
        name: "Data Protection & Privacy Compliance",
        description: "Implementation of GDPR/NDPR data governance frameworks, Data Protection Impact Assessments (DPIA), and privacy audits.",
        features: ["Data flow mapping", "Breach response planning", "Data Protection Officer (DPO) advisory"]
      },
      {
        name: "PCI DSS v4.0.1 Compliance & RoC/SAQ",
        description: "Payment Card Industry Data Security Standard gap analysis, CDE scoping, ASV scanning, and QSA/RoC readiness.",
        features: ["CDE scope minimization", "Quarterly ASV scanning", "RoC & SAQ attestation"]
      }
    ]
  }
];

export const SAMPLE_VERIFIED_CERTIFICATES: VerifiedCertificate[] = [
  {
    certificateNumber: "IEMA-2024-9001-8842",
    organizationName: "Apex Industrial Engineering Services Ltd",
    country: "Nigeria",
    standard: "ISO 9001:2015",
    scope: "Provision of Mechanical Fabrication, Industrial Maintenance, Pipeline Engineering, and Equipment Procurement Services.",
    issueDate: "2024-01-15",
    expiryDate: "2027-01-14",
    status: "Active",
    accreditationBody: "EGAC (ISO/IEC 17021-1)",
    initialAuditDate: "2023-12-10",
    surveillanceDue: "2025-01-14"
  },
  {
    certificateNumber: "IEMA-2025-14001-3310",
    organizationName: "Greenfield Agribusiness & Food Processing PLC",
    country: "Ghana",
    standard: "ISO 14001:2015",
    scope: "Commercial Processing, Refining, and Export Packaging of Edible Palm Oil, Cocoa Derivatives, and Agricultural By-products.",
    issueDate: "2025-02-01",
    expiryDate: "2028-01-31",
    status: "Active",
    accreditationBody: "EGAC (ISO/IEC 17021-1)",
    initialAuditDate: "2025-01-05",
    surveillanceDue: "2026-02-01"
  },
  {
    certificateNumber: "IEMA-2024-45001-9921",
    organizationName: "Lekki Chevron Construction & Offshore Engineering",
    country: "Nigeria",
    standard: "ISO 45001:2018",
    scope: "Civil Infrastructure Construction, Marine Dredging, Steel Fabrication, and Heavy Lifting Operations.",
    issueDate: "2024-06-20",
    expiryDate: "2027-06-19",
    status: "Active",
    accreditationBody: "EGAC (ISO/IEC 17021-1)",
    initialAuditDate: "2024-05-18",
    surveillanceDue: "2025-06-20"
  },
  {
    certificateNumber: "IEMA-2023-27001-1044",
    organizationName: "PaySecure Financial Technologies Limited",
    country: "Kenya",
    standard: "ISO/IEC 27001:2022",
    scope: "Design, Hosting, and Operation of Cloud Payment Gateway, Core Banking API Infrastructure, and Data Processing Systems.",
    issueDate: "2023-11-10",
    expiryDate: "2026-11-09",
    status: "Active",
    accreditationBody: "EGAC (ISO/IEC 17021-1)",
    initialAuditDate: "2023-10-02",
    surveillanceDue: "2024-11-10"
  }
];

export const DOWNLOADABLE_RESOURCES: DownloadableResource[] = [
  {
    id: "res-management-handbook-pp168",
    title: "PP168 IEMA Management System Certification Handbook",
    category: "Handbook",
    fileFormat: "PDF",
    fileSize: "3.8 MB",
    description: "Official comprehensive guide to ISO management systems recognition, accredited audit pathways (Stage 1 & 2), Gap Analysis, non-conformance closure, surveillance cycles, use of IEMA certification marks, and appeals procedures.",
    updatedDate: "January 2022",
    downloadsCount: 3240
  },
  {
    id: "res-2",
    title: "ISO 9001:2015 Quality Readiness & Gap Analysis Checklist",
    category: "Checklist",
    fileFormat: "DOCX",
    fileSize: "1.2 MB",
    description: "Clause-by-clause readiness checklist to self-evaluate your organization's QMS documentation and operational maturity before stage 1 audit.",
    updatedDate: "2025-01-15",
    downloadsCount: 2850
  },
  {
    id: "res-3",
    title: "Non-Destructive Testing (NDT) & Industrial Inspection Technical Catalogue",
    category: "Catalogue",
    fileFormat: "PDF",
    fileSize: "6.1 MB",
    description: "Comprehensive technical catalogue detailing ASNT inspection methodologies, radiographic equipment, ultrasonic flaw detection, and calibration services.",
    updatedDate: "2025-02-01",
    downloadsCount: 980
  },
  {
    id: "res-4",
    title: "IEMA Corporate Profile & Global Accreditation Scope Matrix",
    category: "Profile",
    fileFormat: "PDF",
    fileSize: "3.4 MB",
    description: "Full institutional overview, auditor profiles, international IAF MLA signatory status, and complete accredited standard schedules.",
    updatedDate: "2025-01-05",
    downloadsCount: 3100
  },
  {
    id: "res-5",
    title: "Anti-Bribery & Due Diligence Policy Template (ISO 37001 Aligned)",
    category: "Policy",
    fileFormat: "DOCX",
    fileSize: "850 KB",
    description: "Customizable corporate policy template for anti-corruption compliance, whistleblowing procedures, and commercial partner due diligence.",
    updatedDate: "2024-12-20",
    downloadsCount: 1640
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "case-quantum-steel",
    clientName: "Quantum Steel Mills & Manufacturing Complex",
    industry: "Steel Smelting & Heavy Manufacturing",
    serviceProvided: "Metallurgical Chemical Analysis, Tensile Testing & ASTM/BS Rebar Structural Quality Verification",
    challenge: "Quantum Steel required independent accredited third-party verification of billet metallurgical chemistry, TMT rebar tensile yield strength, and structural beam weld soundness to satisfy rigorous federal infrastructure specifications and major multinational EPC construction supply contracts.",
    solution: "IEMA deployed calibrated optical emission spectrometers (OES), hydraulic Universal Testing Machines (UTM up to 1000 kN), and Phased Array Ultrasonic Testing (PAUT) technicians for 24/7 in-line mill testing and heat-by-heat batch certification according to ASTM A615 and BS 4449.",
    result: "Certified over 85,000 metric tons of finished structural steel and reinforced rebar with 100% trace compliance, securing rapid approval from the Standards Organisation of Nigeria (SON) and major international civil construction contractors.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "case-1",
    clientName: "PetroWest Offshore Logistics Terminal",
    industry: "Oil & Gas / Maritime",
    serviceProvided: "Integrated ISO 9001, ISO 14001 & ISO 45001 Certification + Crane Load Testing",
    challenge: "Client required multi-standard accredited certification within 45 days to qualify for a $120M deepwater FPSO supply chain contract while addressing strict environmental and lifting equipment safety mandates.",
    solution: "IEMA Standards deployed a specialized 4-person lead auditor team to conduct simultaneous integrated IMS audits alongside ASNT certified lifting engineers executing proof load testing on 8 harbor cranes.",
    result: "Successfully awarded EGAC accredited ISO certifications in 38 days with zero non-conformity delays, enabling the client to win the deepwater supply tender.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "case-2",
    clientName: "Zirconium Pharmaceutical Laboratories PLC",
    industry: "Healthcare & Medical Manufacturing",
    serviceProvided: "ISO 13485:2016 & ISO 9001:2015 Medical Device Certification",
    challenge: "Expanding medical device and diagnostic test kit manufacturer required international regulatory compliance and cleanroom validation for export to 14 African and Middle Eastern markets.",
    solution: "Conducted exhaustive stage 1 documentation audit followed by on-site cleanroom particulate analysis, bio-burden inspection, and risk management reviews in full compliance with ISO 13485.",
    result: "Achieved full certification with EGAC/IAF recognition, resulting in immediate product registration clearance across all 14 target international markets.",
    year: "2024",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "case-3",
    clientName: "Trans-Sahara Pipeline Construction Consortium",
    industry: "Heavy Infrastructure & Energy",
    serviceProvided: "On-Site Radiographic (RT) & Ultrasonic (UT) NDT Weld Inspection (180 km Pipeline)",
    challenge: "High-pressure natural gas pipeline construction required 100% non-destructive weld flaw verification across remote desert and swamp terrains under tight delivery deadlines.",
    solution: "Deployed mobile radiography darkroom units and Olympus OmniScan Phased Array (PAUT) crawlers with ASNT Level III supervisors providing real-time weld flaw reporting within 2 hours of weld completion.",
    result: "Inspected over 14,200 weld joints with 99.8% precision, zero safety incidents, and full compliance with API 1104 and ASME B31.8 codes.",
    year: "2023",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Raymond Smith",
    role: "Founder & Chief Executive Officer",
    qualifications: "Director-General, Executive Quality Strategist, International Conformity Assessment Specialist.",
    bio: "Founder and Chief Executive Officer of IEMA Standards Limited. Spearheads international accreditation governance under EGAC (CAB 12203) and strategic expansion across West Africa and global markets.",
    image: raymondSmithPhoto
  },
  {
    name: "Esther Onovo",
    role: "Chief Finance Officer (CFO)",
    qualifications: "Chartered Financial Executive, Corporate Finance Strategist, Audit Resource Controller.",
    bio: "Leads financial strategy, capital management, and fiscal compliance across IEMA Standards Limited's global and regional operations.",
    image: estherOnovoPhoto
  },
  {
    name: "Rachel Oludare",
    role: "Certification Manager",
    qualifications: "Independent Certification Authority (ISO/IEC 17021-1), Certified Lead Auditor, Impartiality Oversight Lead.",
    bio: "Heads the Certification Management division at IEMA Standards Limited, entrusted with independent certification decision-making, Stage 1 & Stage 2 audit dossier technical reviews, and certificate issuance governance.",
    image: rachelOludarePhoto
  },
  {
    name: "Fortune S. Anthony",
    role: "Business Analyst",
    qualifications: "Enterprise Growth & Commercial Partnerships Lead, Pre-qualification & Tender Advisor.",
    bio: "Drives commercial development, institutional partnerships, and assists corporate clients in selecting accredited ISO management systems standards.",
    image: fortuneAnthonyPhoto
  },
  {
    name: "Oluwatoyin Abubakar",
    role: "Business Development Manager",
    qualifications: "Corporate Client Acquisition & Strategic Partnerships, ISO Certification Advisory & Key Account Growth.",
    bio: "Drives enterprise client acquisition, corporate partnerships, and market expansion across Nigeria for IEMA Standards Limited.",
    image: oluwatoyinAbubakarPhoto
  },
  {
    name: "Gambo Dora Parya",
    role: "Training/Membership Coordinator",
    qualifications: "ISO Lead Auditor & Internal Auditor Course Facilitator, Professional Membership Registry Administrator, Capacity Building Lead.",
    bio: "Coordinates professional training academies, IRCA/IEMA-aligned lead auditor courses, continuous professional development (CPD) logistics, and membership registries for IEMA Standards Limited.",
    image: gamboDoraParyaPhoto
  },
  {
    name: "Yanatam Jackson",
    role: "Accountant",
    qualifications: "Corporate Accountant, Financial Accounting & Statutory Tax Compliance, Audit Invoicing & Budgetary Control.",
    bio: "Manages corporate financial accounting, audit fee invoicing, treasury operations, and fiscal compliance for IEMA Standards Limited.",
    image: yanatamJacksonPhoto
  },
  {
    name: "Oyebode Dorcas Opeyemi",
    role: "Legal & Compliance Officer",
    qualifications: "Legal & Compliance Officer, Corporate Legal Governance & Regulatory Conformity Lead.",
    bio: "Oversees legal governance, statutory regulatory compliance, and contractual frameworks at IEMA Standards Limited, ensuring strict adherence to international accreditation standards.",
    image: oyebodeDorcasPhoto
  }
];

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: "news-1",
    title: "IEMA Standards Expands EGAC Accredited Scope to ISO 27001:2022 and ISO 50001:2018",
    date: "2025-02-10",
    author: "IEMA Governance Secretariat",
    category: "Accreditation",
    summary: "New accreditation milestones cover ISO 27001 cybersecurity and ISO 50001 energy management for enterprise clients across West Africa and GCC.",
    content: "IEMA Standards Limited is proud to announce the extension of its EGAC accredited certification scope to encompass ISO 27001:2022 and ISO 50001:2018...",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "news-2",
    title: "Why ISO 9001:2015 is Critical for Winning Major Infrastructure Tenders",
    date: "2025-01-28",
    author: "Dr. Ahmed El-Sayed",
    category: "Insights",
    summary: "Discover how accredited ISO certification serves as a key prerequisite for international tender qualification and government contracts.",
    content: "In today's global economy, procurement boards demand independent verification of organizational capability...",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "news-3",
    title: "Understanding Non-Destructive Testing (NDT) in Subsea Asset Maintenance",
    date: "2025-01-14",
    author: "Eng. Olumide Adeleke",
    category: "Testing & Engineering",
    summary: "A technical breakdown of ultrasonic flaw detection and radiographic testing in preventing pipeline failures.",
    content: "Subsea structural assets operate under extraordinary mechanical and corrosion stresses...",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=800"
  }
];

export const FAQS = [
  {
    q: "How are ISO certificates issued by IEMA Standards validated and accredited?",
    a: "All certificates issued by IEMA Standards Limited are accredited under the Egyptian Accreditation Council (EGAC) and backed by the International Accreditation Forum (IAF) Multilateral Recognition Arrangement (MLA). Certificate records are maintained in our official certification archive and regulatory gazettes, with direct validity inquiries handled by our secretariat at certifications@iemacert.com."
  },
  {
    q: "How long does the ISO certification process take?",
    a: "The standard process typically takes between 3 to 6 weeks, depending on company size, operational complexity, and readiness. We offer expedited pre-assessments and Gap Analysis to help accelerate your timeline."
  },
  {
    q: "What accreditation does IEMA Standards Limited hold?",
    a: "IEMA Standards Limited is accredited by the Egyptian Accreditation Council (EGAC), a signatory to the International Accreditation Forum (IAF) multilateral recognition arrangement. We operate in strict compliance with ISO/IEC 17021-1 (Management Systems), ISO/IEC 17025 (Testing Laboratories), and ISO/IEC 17065 (Product Certification)."
  },
  {
    q: "What is the difference between Stage 1 and Stage 2 audits?",
    a: "Stage 1 is a desktop documentation and readiness review to ensure your management system meets basic ISO requirements. Stage 2 is an on-site audit where auditors evaluate practical implementation, process effectiveness, and employee awareness."
  },
  {
    q: "Can IEMA Standards perform material testing and NDT on-site?",
    a: "Yes! Our certified ASNT Level II and III inspectors provide both laboratory-based material testing and on-site NDT inspection services for industrial facilities, pipelines, storage tanks, and construction sites."
  }
];

