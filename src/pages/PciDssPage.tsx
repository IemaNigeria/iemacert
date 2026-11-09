import React, { useState } from 'react';
import { 
  CreditCard, ShieldCheck, Lock, Server, CheckCircle2, 
  ArrowRight, FileCheck2, Scale, Building2, 
  Search, Check, FileText, ChevronRight, ChevronDown,
  ExternalLink, AlertTriangle, ShieldAlert,
  BarChart3, Users, HelpCircle, RefreshCw,
  Cpu, KeyRound, Terminal, Database, Network, Eye,
  Send, Phone, Mail, Zap
} from 'lucide-react';
import { SeoHead } from '../components/SeoHead';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_INFO } from '../data/mockData';

interface PciDssPageProps {
  onNavigate: (page: string, params?: Record<string, string>) => void;
}

// 6 Core Goals and 12 PCI DSS v4.0.1 Requirements
const PCI_GOALS = [
  {
    goalNumber: "Goal 1",
    title: "Build and Maintain a Secure Network and Systems",
    summary: "Establish defensive perimeters, secure firewall architectures, and eliminate vendor default settings across all cardholder data boundaries.",
    requirements: [
      {
        number: "Requirement 1",
        name: "Install and Maintain Network Security Controls",
        details: "Deploy and manage next-generation firewalls (NGFW), cloud security groups, and ingress/egress filtering to protect the Cardholder Data Environment (CDE). Maintain real-time network topology diagrams and review firewall rule sets at least every six months.",
        auditorChecks: ["Current network diagrams and data flow maps", "Rule-base justification documentation", "Deny-by-default inbound/outbound rules", "Strict DMZ isolation from internal subnets"],
        commonPitfall: "Outdated network diagrams that fail to reflect recent microservice or cloud VPC peering additions."
      },
      {
        number: "Requirement 2",
        name: "Apply Secure Configurations to All System Components",
        details: "Harden all servers, containers, databases, and switches according to industry benchmarks (CIS Benchmarks, NIST). Change default passwords, disable unnecessary services/protocols (e.g. Telnet, insecure SMB), and maintain golden baseline images.",
        auditorChecks: ["Automated configuration compliance audits", "Removal of unnecessary scripts and default accounts", "Encrypted administrative access (SSHv2, HTTPS)", "Host inventory reconciliation"],
        commonPitfall: "Leaving factory or framework default credentials intact in sandbox/staging environments that route to CDE systems."
      }
    ]
  },
  {
    goalNumber: "Goal 2",
    title: "Protect Account Data",
    summary: "Safeguard stored cardholder data (CHD) and ensure sensitive authentication data (SAD) is never retained post-authorization.",
    requirements: [
      {
        number: "Requirement 3",
        name: "Protect Stored Account Data",
        details: "Primary Account Numbers (PAN) must be rendered unreadable anywhere they are stored using strong AES-256 or RSA-4096 encryption, index tokens, or truncation. Sensitive Authentication Data (CVV2/CVC, full magnetic stripe data, PIN blocks) must never be stored post-authorization, even if encrypted.",
        auditorChecks: ["Hardware Security Module (HSM) key hierarchy", "Key generation, rotation, and retirement lifecycle", "Card data discovery scans to ensure zero SAD retention", "Strict PAN masking on displays and receipts"],
        commonPitfall: "Application debugging or error logging frameworks unintentionally capturing full PAN and CVV payloads into server logs."
      },
      {
        number: "Requirement 4",
        name: "Protect Cardholder Data with Strong Cryptography in Transit",
        details: "Ensure cardholder data transmitted across open, public networks (Internet, cellular, untrusted Wi-Fi) is encrypted using TLS 1.3 (or strictly configured TLS 1.2 with PFS cipher suites). Deprecate older SSL/TLS protocols and enforce valid, trusted CA certificates.",
        auditorChecks: ["TLS cipher configuration on payment endpoints", "Automated certificate expiration and renewal alerting", "Wireless network WPA3/WPA2-Enterprise configurations", "Strict end-to-end payload encryption for API integrations"],
        commonPitfall: "Mobile applications allowing self-signed certificates or failing to implement SSL pinning for sensitive API calls."
      }
    ]
  },
  {
    goalNumber: "Goal 3",
    title: "Maintain a Vulnerability Management Program",
    summary: "Continuously guard against malware, deploy active endpoint defenses, and maintain rigorous secure software development lifecycles (SSDLC).",
    requirements: [
      {
        number: "Requirement 5",
        name: "Protect All Systems and Networks from Malicious Software",
        details: "Deploy enterprise Endpoint Detection and Response (EDR) or anti-malware solutions across all systems commonly affected by malicious code. Ensure definitions are updated automatically, scheduled scans run regularly, and tamper-protection is enabled.",
        auditorChecks: ["Continuous EDR agent telemetry and active scanning", "Audit logs of malware detection events", "Periodic malware assessments for Unix/Linux CDE servers", "Phishing protection mechanisms for corporate endpoints"],
        commonPitfall: "Assuming Linux or containerized workloads do not require malware detection or file integrity monitoring."
      },
      {
        number: "Requirement 6",
        name: "Develop and Maintain Secure Systems and Software",
        details: "Integrate security into every phase of the software development lifecycle (DevSecOps). Remediate OWASP Top 10 vulnerabilities, apply critical security patches within 30 days of release, and enforce Requirement 6.4.3 (script management on payment pages to prevent e-skimming/Magecart).",
        auditorChecks: ["Static & Dynamic Application Security Testing (SAST/DAST)", "Payment page script authorization and tamper-detection registers", "Third-party software dependency and SBOM scanning", "Patch management tracking against critical CVEs"],
        commonPitfall: "Unmonitored third-party JavaScript libraries (analytics, tag managers, chat widgets) running on checkout pages without script integrity verification."
      }
    ]
  },
  {
    goalNumber: "Goal 4",
    title: "Implement Strong Access Control Measures",
    summary: "Enforce least privilege access, mandate multi-factor authentication (MFA) across all CDE touchpoints, and secure physical premises.",
    requirements: [
      {
        number: "Requirement 7",
        name: "Restrict Access to System Components by Business Need to Know",
        details: "Grant access based strictly on role requirements (Role-Based Access Control - RBAC). Enforce least privilege, default-deny permissions, and perform semi-annual user access reviews across all databases, hypervisors, and cloud management consoles.",
        auditorChecks: ["Documented job role authorization matrices", "Automated deprovisioning workflows upon staff termination", "Segregation of duties between developers and production ops", "Privileged access management (PAM) audit logs"],
        commonPitfall: "Dormant administrative accounts lingering after employee departure or internal role transition."
      },
      {
        number: "Requirement 8",
        name: "Identify Users and Authenticate Access to System Components",
        details: "Assign a unique ID to every person with computer access. Enforce Multi-Factor Authentication (MFA) under v4.0.1 for all access into the CDE (not just remote administrative access). Eliminate shared accounts and mandate strong password policies (12+ characters, complexity, no reuse).",
        auditorChecks: ["MFA enforcement across VPN, SSH, RDP, and cloud consoles", "Phishing-resistant authentication tokens (FIDO2/WebAuthn)", "Password hashing using modern algorithms (Argon2, bcrypt, PBKDF2)", "Lockout controls after repeated failed attempts"],
        commonPitfall: "Service accounts with hardcoded static credentials stored in plaintext repository files or environment configs."
      },
      {
        number: "Requirement 9",
        name: "Restrict Physical Access to Cardholder Data",
        details: "Control physical access to datacenters, server rooms, POS terminal storage, and paper records. Maintain visitor logs, 90-day CCTV footage retention, badge-access readers, and strict chain-of-custody controls for physical media destruction.",
        auditorChecks: ["Physical access badge logs and visitor escort procedures", "CCTV coverage of server racks and media destruction areas", "Tamper-evident device inspection logs for hardware POS terminals", "Document shredding and electronic media degaussing certificates"],
        commonPitfall: "Failure to log physical terminal inspections or missing serial number verification on field-deployed POS terminals."
      }
    ]
  },
  {
    goalNumber: "Goal 5",
    title: "Regularly Monitor and Test Networks",
    summary: "Aggregate audit trails into a centralized SIEM, perform quarterly ASV vulnerability scanning, and conduct rigorous penetration tests.",
    requirements: [
      {
        number: "Requirement 10",
        name: "Log and Monitor All Access to System Components",
        details: "Implement centralized log management (SIEM) with synchronized Network Time Protocol (NTP) clocks. Retain audit logs for at least one year with at least three months immediately available online. Conduct daily reviews of security events and privileged user actions.",
        auditorChecks: ["SIEM automated alert rules and anomaly detection", "NTP synchronization across all CDE components", "Audit log write-once / append-only immutability controls", "Daily operational log review sign-off records"],
        commonPitfall: "Log storage disks filling up silently, causing event loss or unindexed log archives that cannot be queried during an audit."
      },
      {
        number: "Requirement 11",
        name: "Test Security of Systems and Networks Regularly",
        details: "Perform quarterly external vulnerability scans via an Approved Scanning Vendor (ASV), internal vulnerability scans post-change, annual external/internal penetration tests, six-month network segmentation tests, and continuous File Integrity Monitoring (FIM).",
        auditorChecks: ["Passing quarterly ASV scan reports (CVSS < 4.0 with zero failures)", "Annual penetration test reports with documented remediation", "Semi-annual network segmentation penetration test validation", "FIM alerts and change detection operational workflows"],
        commonPitfall: "Treating penetration testing as a one-time compliance checkbox without remediating high-risk findings within mandated timelines."
      }
    ]
  },
  {
    goalNumber: "Goal 6",
    title: "Maintain an Information Security Policy",
    summary: "Establish organizational governance, conduct annual risk assessments, manage third-party service providers (TPSPs), and train personnel.",
    requirements: [
      {
        number: "Requirement 12",
        name: "Support Information Security with Organizational Policies and Programs",
        details: "Develop and enforce comprehensive information security policies reviewed at least annually. Conduct formal Targeted Risk Analyses (TRAs) under v4.0.1, maintain a Third-Party Service Provider (TPSP) monitoring program, run annual incident response drills, and provide annual security awareness training.",
        auditorChecks: ["Annual information security policy review and sign-off", "Documented TRAs for customized approach requirements", "TPSP compliance tracking (valid AoC collection for AWS, Paystack, Flutterwave, etc.)", "Tabletop incident response exercise documentation"],
        commonPitfall: "Neglecting to collect and verify annual Attestations of Compliance (AoC) from cloud hosting or payment gateway vendors."
      }
    ]
  }
];

// SAQ Matrix Data
const SAQ_TYPES = [
  {
    code: "SAQ A",
    title: "Card-not-present (e-Commerce / MO/TO), Fully Outsourced",
    scope: "E-commerce merchants who outsource all card processing to a PCI DSS validated third party via hosted iframe, redirect, or hosted payment fields. Zero card data is ever stored, processed, or transmitted on merchant infrastructure.",
    controlsCount: "~24 - 31 Controls",
    eligibility: "Websites using Stripe Elements, Paystack inline iframe, Flutterwave standard modal, or hosted payment pages.",
    deliverables: ["Self-Assessment Questionnaire A", "Attestation of Compliance (AoC)", "Requirement 6.4.3 & 11.6.1 Script Integrity Review"]
  },
  {
    code: "SAQ A-EP",
    title: "E-Commerce with Merchant-Controlled Payment Creation Page",
    scope: "E-commerce merchants who host payment forms on their own servers or use direct API scripts that direct cardholder data to an authorized third-party processor. While card data does not hit the merchant database, the web server can impact payment security.",
    controlsCount: "~190+ Controls",
    eligibility: "Merchants serving checkout pages with custom JavaScript or direct API integrations handling form fields.",
    deliverables: ["Self-Assessment Questionnaire A-EP", "Quarterly ASV Vulnerability Scans", "Annual External Penetration Testing", "Signed AoC"]
  },
  {
    code: "SAQ B / B-IP",
    title: "Standalone Terminals (Dial-out or PTS-Approved IP)",
    scope: "Brick-and-mortar merchants with standalone hardware terminals. SAQ B applies to dial-out / legacy terminals with no network connection. SAQ B-IP applies to modern PIN Transaction Security (PTS) approved payment terminals connected via network IP.",
    controlsCount: "~41 - 82 Controls",
    eligibility: "Retail stores, supermarkets, gas stations, hospitality venues using physical POS terminals isolated from other corporate networks.",
    deliverables: ["Self-Assessment Questionnaire B / B-IP", "Physical terminal inspection log", "Quarterly ASV scans (for B-IP external facing IPs)", "Signed AoC"]
  },
  {
    code: "SAQ C / C-VT",
    title: "Payment Applications Connected to Internet / Virtual Terminals",
    scope: "Merchants using payment application software on network systems connected to the Internet (SAQ C), or manual entry via web browser virtual terminal (SAQ C-VT). No electronic card data storage allowed.",
    controlsCount: "~79 - 160 Controls",
    eligibility: "Call centers entering card details into virtual terminal consoles, or custom point-of-sale server software.",
    deliverables: ["Self-Assessment Questionnaire C / C-VT", "Network segmentation verification", "Quarterly ASV external scans", "Signed AoC"]
  },
  {
    code: "SAQ P2PE",
    title: "Hardware Terminals with Validated Point-to-Point Encryption",
    scope: "Merchants using hardware terminals managed under a PCI SSC-listed, validated P2PE solution. Card data is encrypted at the hardware reader before entering any local network.",
    controlsCount: "~33 Controls",
    eligibility: "Merchants with high physical transaction volumes utilizing validated P2PE terminals to drastically reduce PCI audit scope.",
    deliverables: ["Self-Assessment Questionnaire P2PE", "P2PE Implementation Manual (PIM) compliance", "Device chain-of-custody tracking", "Signed AoC"]
  },
  {
    code: "SAQ D - Merchant",
    title: "All Other Merchants Storing, Processing, or Transmitting Card Data",
    scope: "Full-scope assessment for merchants who store cardholder data electronically, operate custom payment switches, or do not qualify for streamlined SAQs A through P2PE.",
    controlsCount: "300+ Controls (All 12 Requirements)",
    eligibility: "Large retail enterprises, direct billing aggregators, and merchants maintaining proprietary card data vaults.",
    deliverables: ["Full SAQ D (or On-Site RoC if Level 1)", "Quarterly ASV Scans", "Internal & External Penetration Tests", "Formal AoC"]
  },
  {
    code: "SAQ D - Service Provider",
    title: "All Eligible Service Providers, Fintechs, Gateways & Processors",
    scope: "Third-party service providers (TPSPs), payment gateways, payment solution service providers (PSSPs), card processors, and SaaS platforms that can impact the security of cardholder data.",
    controlsCount: "360+ Controls (Includes Appendix A1/A2)",
    eligibility: "Payment gateways, fintech infrastructure APIs, cloud SaaS platforms handling payments, B2B payment facilitators.",
    deliverables: ["Full SAQ D Service Provider (or On-site RoC by QSA if Level 1)", "Quarterly ASV Scans", "Semi-Annual Segmentation Testing", "Formal AoC"]
  }
];

export const PciDssPage: React.FC<PciDssPageProps> = ({ onNavigate }) => {
  // Active Goal tab for the 12 requirements explorer
  const [activeGoalIndex, setActiveGoalIndex] = useState<number>(0);
  const [expandedReq, setExpandedReq] = useState<string>("Requirement 1");

  // Interactive SAQ & Scope Finder state
  const [entityType, setEntityType] = useState<'merchant' | 'service_provider'>('merchant');
  const [integrationMethod, setIntegrationMethod] = useState<'iframe' | 'api' | 'pos_terminal' | 'virtual_terminal' | 'full_storage'>('iframe');
  const [annualVolume, setAnnualVolume] = useState<'under_20k' | '20k_to_1m' | '1m_to_6m' | 'over_6m'>('under_20k');

  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Form submission state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    organizationRole: 'fintech',
    currentPciStatus: 'new_assessment',
    estimatedTransactions: '100k_1m',
    notes: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Determine SAQ result based on calculator selections
  const getRecommendation = () => {
    if (entityType === 'service_provider') {
      const isLevel1 = annualVolume === 'over_6m' || annualVolume === '1m_to_6m';
      return {
        level: isLevel1 ? "Service Provider Level 1 (RoC)" : "Service Provider Level 2 (SAQ D)",
        track: isLevel1 ? "Full On-Site QSA Audit (RoC)" : "SAQ D for Service Providers",
        controls: isLevel1 ? "360+ Controls (On-Site Audit)" : "~360 Controls (SAQ D)",
        validationDoc: isLevel1 ? "Report on Compliance (RoC) + AoC signed by QSA" : "SAQ D + AoC signed by Executive Officer",
        asvRequired: "Yes — Mandatory Quarterly External Scans by ASV",
        penTestRequired: "Yes — Annual Internal & External + Semi-Annual Segmentation Tests",
        estimatedDuration: isLevel1 ? "8 - 14 Weeks" : "6 - 10 Weeks",
        recommendationTip: "As a Service Provider, acquiring banks and partners (Visa, Mastercard, Interswitch) will require your formal AoC before allowing live API integrations."
      };
    }

    // Merchant logic
    if (annualVolume === 'over_6m') {
      return {
        level: "Merchant Level 1 (Over 6 Million Transactions/Year)",
        track: "Mandatory On-Site QSA Assessment (RoC)",
        controls: "300+ Controls (Full 12 Requirements)",
        validationDoc: "Report on Compliance (RoC) + Attestation of Compliance (AoC)",
        asvRequired: "Yes — Mandatory Quarterly External ASV Scans",
        penTestRequired: "Yes — Annual Internal & External Network + App Penetration Tests",
        estimatedDuration: "8 - 12 Weeks",
        recommendationTip: "High-volume merchants must undergo an annual on-site audit conducted by a Qualified Security Assessor (QSA)."
      };
    }

    if (integrationMethod === 'iframe') {
      return {
        level: "Merchant Level 2, 3, or 4 (E-Commerce Hosted Fields)",
        track: "SAQ A (Fully Outsourced Payment Processing)",
        controls: "~24 to 31 Controls",
        validationDoc: "Self-Assessment Questionnaire A + Merchant AoC",
        asvRequired: "Not strictly required for SAQ A, but strongly recommended for web server hardening",
        penTestRequired: "Requirement 6.4.3 & 11.6.1 Script Management verification required under v4.0.1",
        estimatedDuration: "2 - 3 Weeks",
        recommendationTip: "SAQ A is the most efficient compliance path. By outsourcing payment collection via hosted iframe/redirect, you eliminate card data transmission from your servers."
      };
    }

    if (integrationMethod === 'api') {
      return {
        level: "Merchant Level 2, 3, or 4 (Direct API / Payment Form on Server)",
        track: "SAQ A-EP (E-Commerce with Merchant-Controlled Payment Page)",
        controls: "~190+ Controls",
        validationDoc: "Self-Assessment Questionnaire A-EP + Merchant AoC",
        asvRequired: "Yes — Mandatory Quarterly External Scans by ASV on web servers",
        penTestRequired: "Yes — Annual External Penetration Testing of e-commerce application",
        estimatedDuration: "4 - 8 Weeks",
        recommendationTip: "Consider switching to hosted tokenized fields (SAQ A) to reduce your audit scope from 190+ controls down to ~30 controls, saving over 65% in compliance overhead."
      };
    }

    if (integrationMethod === 'pos_terminal') {
      return {
        level: "Merchant Level 2, 3, or 4 (Brick & Mortar POS Terminals)",
        track: "SAQ B-IP (PTS-Approved IP Terminals) or SAQ P2PE",
        controls: "~41 to 82 Controls",
        validationDoc: "Self-Assessment Questionnaire B-IP / P2PE + AoC",
        asvRequired: "Yes — For external facing IP addresses connected to payment network",
        penTestRequired: "Physical terminal tamper inspection logs and network isolation verification",
        estimatedDuration: "3 - 5 Weeks",
        recommendationTip: "Deploying a validated Point-to-Point Encryption (P2PE) solution drops requirements to just 33 controls with minimal network overhead."
      };
    }

    if (integrationMethod === 'virtual_terminal') {
      return {
        level: "Merchant Level 2, 3, or 4 (Virtual Terminal / Call Center)",
        track: "SAQ C-VT (Web-Based Virtual Terminals)",
        controls: "~79 Controls",
        validationDoc: "Self-Assessment Questionnaire C-VT + Merchant AoC",
        asvRequired: "Optional / situational depending on public IP footprint",
        penTestRequired: "Host hardening and administrative workstation access controls",
        estimatedDuration: "3 - 4 Weeks",
        recommendationTip: "Ensure workstations accessing the virtual terminal are isolated on a dedicated VLAN with strict internet restrictions."
      };
    }

    // Default full storage
    return {
      level: "Merchant Level 2, 3, or 4 (Card Storage & Custom Processing)",
      track: "SAQ D for Merchants",
      controls: "300+ Controls (All 12 Requirements)",
      validationDoc: "Full SAQ D + Attestation of Compliance (AoC)",
      asvRequired: "Yes — Mandatory Quarterly External ASV Scans",
      penTestRequired: "Yes — Comprehensive Internal and External Penetration Tests",
      estimatedDuration: "8 - 14 Weeks",
      recommendationTip: "Storing raw PANs triggers full-scope PCI DSS. We strongly recommend evaluating tokenization solutions to eliminate PAN storage from your databases."
    };
  };

  const rec = getRecommendation();

  const FAQS = [
    {
      q: "What is PCI DSS v4.0.1 and why is it mandatory?",
      a: "PCI DSS v4.0.1 is the global security standard issued by the Payment Card Industry Security Standards Council (PCI SSC). Any organization that transmits, processes, or stores cardholder data (CHD) or sensitive authentication data (SAD)—including Visa, Mastercard, Verve, Interswitch, and American Express—must comply. Version 4.0.1 replaces legacy v3.2.1, introducing critical enhancements around multi-factor authentication (MFA), e-commerce payment page script integrity (Requirement 6.4.3), targeted risk analyses, and customized validation approaches."
    },
    {
      q: "What is the difference between a Report on Compliance (RoC) and an SAQ?",
      a: "A Report on Compliance (RoC) is an exhaustive, formal on-site audit conducted and verified by a Qualified Security Assessor (QSA). It is mandatory for Level 1 Merchants (>6 million card transactions annually) and Level 1 Service Providers (>300,000 transactions). A Self-Assessment Questionnaire (SAQ) is a streamlined validation document for Level 2–4 merchants and eligible service providers. Both pathways conclude with an official Attestation of Compliance (AoC) that is submitted to acquiring banks, payment card brands, and regulators like the Central Bank of Nigeria (CBN)."
    },
    {
      q: "How does IEMA Standards help our organization achieve PCI DSS certification?",
      a: "IEMA Standards provides complete end-to-end guidance: (1) Discovery and Cardholder Data Environment (CDE) boundary scoping to shrink audit surface area; (2) Comprehensive technical and documentation gap analysis; (3) Remediation roadmap and engineering support for firewalls, encryption, MFA, SIEM logging, and policy authoring; (4) Approved Scanning Vendor (ASV) vulnerability scanning coordination and penetration testing; and (5) Audit readiness validation, RoC documentation, and formal AoC attestation."
    },
    {
      q: "Can network segmentation and tokenization really reduce our audit scope?",
      a: "Yes, dramatically. In an unsegmented environment, every connected server, workstation, and database is in scope for all 300+ PCI DSS controls. By implementing strict firewall segmentation, isolated VLANs, and tokenization (replacing Primary Account Numbers with non-sensitive reference tokens), you isolate card processing into a tight CDE boundary. This frequently moves merchants from a grueling SAQ D (~300 controls) down to SAQ A (~30 controls), saving over 70% in audit costs, engineering hours, and operational overhead."
    },
    {
      q: "What are the new script monitoring rules for e-commerce websites in v4.0.1?",
      a: "Under PCI DSS v4.0.1 Requirements 6.4.3 and 11.6.1, e-commerce merchants must actively manage and verify the integrity of all JavaScript executing on consumer payment checkout pages. This was introduced to stop digital skimming (Magecart attacks), where malicious third-party scripts steal card details in real time. Organizations must maintain an inventory of authorized scripts, provide written justification for their business necessity, and employ automated mechanisms (such as Content Security Policy - CSP headers, SRI hashes, or script monitoring agents) to detect unauthorized tampering."
    },
    {
      q: "Is PCI DSS required by the Central Bank of Nigeria (CBN)?",
      a: "Yes. The Central Bank of Nigeria (CBN) regulatory guidelines explicitly mandate PCI DSS compliance for all commercial banks, microfinance banks, Payment Service Providers (PSPs), Payment Solution Service Providers (PSSPs), Switching and Processing companies, Mobile Money Operators (MMOs), and third-party fintechs integrating into the Nigerian National Financial Switch (NIBSS) or card schemes."
    },
    {
      q: "How often must Approved Scanning Vendor (ASV) vulnerability scans be performed?",
      a: "PCI DSS Requirement 11.3.2 mandates external vulnerability scans conducted at least once every 90 days (quarterly) by an official PCI SSC-approved Scanning Vendor (ASV). Scans must achieve a 'Passing' grade (zero vulnerabilities with a CVSS score of 4.0 or higher, and no high-risk flags) across all external-facing IP addresses and domains that connect to or can impact the CDE."
    },
    {
      q: "How long does a PCI DSS audit take from kickoff to Attestation of Compliance (AoC)?",
      a: "For organizations qualifying for SAQ A or SAQ B with modern cloud architecture, the gap assessment and attestation typically takes 2 to 4 weeks. For medium-scale fintechs requiring SAQ A-EP or SAQ D, the timeline is generally 4 to 8 weeks including remediation and ASV scans. For Level 1 financial institutions requiring a full on-site QSA Report on Compliance (RoC), comprehensive scope discovery, penetration testing, and auditor validation usually spans 8 to 14 weeks."
    }
  ];

  return (
    <div className="space-y-12 pb-24 bg-slate-50 dark:bg-[#070F2B] text-slate-900 dark:text-slate-100 transition-colors duration-200 min-h-screen">
      
      <SeoHead
        title="PCI DSS v4.0.1 Compliance & Certification Services | IEMA Standards"
        description="Comprehensive PCI DSS v4.0.1 gap analysis, CDE scoping, ASV scanning, RoC audits & SAQ attestation in Nigeria & Africa for fintechs, banks, and merchants."
        keywords={[
          'PCI DSS compliance Nigeria',
          'PCI DSS v4.0 certification Lagos',
          'PCI DSS QSA audit Nigeria',
          'Report on Compliance RoC',
          'Self-Assessment Questionnaire SAQ A',
          'ASV vulnerability scanning Nigeria',
          'CBN fintech payment security',
          'cardholder data environment scoping',
          'IEMA Standards payment security'
        ]}
        canonicalPath="pci-dss"
      />

      {/* HERO BANNER SECTION */}
      <section className="bg-[#070F2B] text-white pt-16 pb-20 border-b border-slate-800 relative overflow-hidden">
        {/* Subtle background overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <Breadcrumbs 
            items={[
              { label: 'Compliance Services', page: 'compliance' },
              { label: 'PCI DSS Compliance & Certification', isCurrent: true }
            ]} 
            onNavigate={onNavigate}
            className="p-0"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Quiet unboxed metadata kicker */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-emerald-400" />
                  <span>Payment Card Industry Data Security Standard</span>
                </span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-amber-300 font-mono">v4.0 &amp; v4.0.1 Ready</span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-slate-300">CBN &amp; Card Schemes Aligned</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white leading-tight">
                PCI DSS <span className="text-amber-400">v4.0.1 Compliance</span> &amp; Certification Advisory
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Protect cardholder data, accelerate CBN regulatory approvals, and streamline your Attestation of Compliance (AoC). IEMA Standards provides comprehensive CDE boundary scoping, technical gap assessments, ASV vulnerability scans, and RoC/SAQ audit preparation for fintechs, commercial banks, payment processors, and merchants across Nigeria, Africa, and international markets.
              </p>

              {/* Trust Metric Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-center">
                  <div className="text-lg font-black text-amber-400 font-mono">100%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Audit Readiness Track Record</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-center">
                  <div className="text-lg font-black text-emerald-400 font-mono">Up to 75%</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">CDE Scope Reduction</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-center">
                  <div className="text-lg font-black text-cyan-400 font-mono">12 of 12</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Core Requirements Covered</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700/80 text-center">
                  <div className="text-lg font-black text-purple-400 font-mono">RoC + SAQ</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">Dual Validation Tracks</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href="#pci-quote-form"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
                >
                  <span>Request PCI DSS Gap Analysis</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#pci-saq-calculator"
                  className="bg-slate-800/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-5 py-3.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2"
                >
                  <Search className="w-4 h-4 text-emerald-400" />
                  <span>Check Your SAQ &amp; Scope</span>
                </a>

                <a 
                  href="https://wa.me/2348134831027?text=Hello%20IEMA%20Standards%2C%20I%20would%20like%20to%20inquire%20about%20PCI%20DSS%20v4.0.1%20Certification."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1.5 px-3 py-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Lead Assessor</span>
                </a>
              </div>

            </div>

            {/* Right Column: Key Validation Overview Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B1739]/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 border border-slate-700/80 shadow-2xl space-y-5 text-white">
                
                <div className="flex items-center justify-between border-b border-slate-700/80 pb-4">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Compliance Matrix</span>
                    <h3 className="text-base font-bold text-white mt-0.5">PCI DSS v4.0.1 Validation Paths</h3>
                  </div>
                  <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">Report on Compliance (RoC)</div>
                      <div className="text-slate-400 mt-0.5">Mandatory for Level 1 Merchants (&gt;6M txns) &amp; Level 1 Service Providers (&gt;300k txns). On-site audit conducted and verified by a QSA.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">Self-Assessment Questionnaires (SAQ A - D)</div>
                      <div className="text-slate-400 mt-0.5">Tailored validation forms for Level 2–4 merchants, e-commerce hosted checkout, virtual terminals, POS, and eligible service providers.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">Approved Scanning Vendor (ASV) Scans</div>
                      <div className="text-slate-400 mt-0.5">Quarterly external vulnerability scans with CVSS &lt; 4.0 pass mark required across all external-facing CDE IP addresses.</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-white">Attestation of Compliance (AoC)</div>
                      <div className="text-slate-400 mt-0.5">Official formal certificate of compliance recognized by Visa, Mastercard, Verve, Interswitch, CBN, and international acquiring banks.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Standard Version: <strong className="text-slate-200">v4.0.1 (Latest)</strong></span>
                  <span>Enforcement: <strong className="text-emerald-400">Active</strong></span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 2: WHAT'S NEW IN PCI DSS v4.0 & v4.0.1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            Regulatory Evolution
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            Major Enhancements in PCI DSS v4.0 &amp; v4.0.1
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            PCI DSS v4.0.1 represents the most significant update to payment card security in over a decade. Understand the new critical mandates affecting your infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          
          {/* Card 1 */}
          <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Customized vs. Defined Approach
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Organizations can now choose between the traditional <em>Defined Approach</em> (following strict prescriptive controls) or the new <em>Customized Approach</em>, which permits innovative security technologies validated by a Targeted Risk Analysis (TRA).
            </p>
            <div className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1 pt-1">
              <span>Tailored for Cloud &amp; Microservices</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <KeyRound className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Heightened Multi-Factor Authentication (MFA)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Requirement 8.4.2 mandates MFA for <strong>all access into the cardholder data environment (CDE)</strong>, not just remote administrative access. Password length minimum is raised to 12 characters with strict lockout protections.
            </p>
            <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 pt-1">
              <span>Zero Trust &amp; Phishing Resistance</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              E-Commerce Script Integrity (Req 6.4.3 &amp; 11.6.1)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              To defeat digital skimming (Magecart attacks), websites with payment pages must maintain an authorized script register, enforce Content Security Policies (CSP), and utilize change-detection tools to alert on unauthorized payment page tampering.
            </p>
            <div className="text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 flex items-center gap-1 pt-1">
              <span>Crucial for SAQ A &amp; SAQ A-EP Merchants</span>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Targeted Risk Analysis (TRA)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Periodic activities that previously had arbitrary timelines must now be formally justified with documented Targeted Risk Analyses defining the threat landscape, asset exposure, and tailored review frequencies.
            </p>
            <div className="text-[11px] font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1 pt-1">
              <span>Risk-Based Audit Justifications</span>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Continuous Compliance (BAU)
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              PCI DSS v4.0.1 shifts away from "snapshot in time" annual compliance. Controls must be embedded as Business-As-Usual (BAU) operational routines, including continuous log monitoring, automated alerts, and semi-annual user access audits.
            </p>
            <div className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 pt-1">
              <span>Audit Evidence Retained Year-Round</span>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white dark:bg-[#0B1E38] p-6 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm hover:shadow-md transition-shadow space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center">
              <Network className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Third-Party Service Provider (TPSP) Monitoring
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              Requirement 12.8 expands accountability for third-party vendors. Organizations must track specific PCI requirements met by each vendor (AWS, cloud gateways, managed SOCs) and collect current Attestations of Compliance (AoC).
            </p>
            <div className="text-[11px] font-semibold text-red-600 dark:text-red-400 flex items-center gap-1 pt-1">
              <span>Supply Chain Payment Security</span>
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 3: THE 12 REQUIREMENTS EXPLORER (6 GOALS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            Audit Checklist &amp; Core Architecture
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            The 12 Core PCI DSS v4.0.1 Requirements
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Click through each of the 6 security goals below to inspect what auditors evaluate, required technical evidence, and common non-conformity pitfalls.
          </p>
        </div>

        {/* Goal Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {PCI_GOALS.map((goal, idx) => (
            <button
              key={goal.goalNumber}
              onClick={() => setActiveGoalIndex(idx)}
              className={`p-3 rounded-xl text-left transition-all border ${
                activeGoalIndex === idx
                  ? 'bg-[#0A192F] text-white border-amber-500 shadow-md ring-1 ring-amber-500'
                  : 'bg-white dark:bg-[#0B1E38] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400 font-mono">
                {goal.goalNumber}
              </div>
              <div className="text-xs font-bold mt-1 line-clamp-2">
                {goal.title}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Goal Content Panel */}
        <div className="bg-white dark:bg-[#0B1E38] rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-700/80 shadow-md space-y-6">
          
          <div className="border-b border-slate-200 dark:border-slate-700/80 pb-4">
            <span className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider font-mono">
              {PCI_GOALS[activeGoalIndex].goalNumber}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-serif mt-1">
              {PCI_GOALS[activeGoalIndex].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
              {PCI_GOALS[activeGoalIndex].summary}
            </p>
          </div>

          {/* Requirements Grid for Active Goal */}
          <div className="grid grid-cols-1 gap-6">
            {PCI_GOALS[activeGoalIndex].requirements.map((req) => {
              const isExpanded = expandedReq === req.number;
              return (
                <div 
                  key={req.number}
                  className="rounded-xl border border-slate-200 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-900/40 p-5 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 font-mono">
                        {req.number}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                        {req.name}
                      </h4>
                    </div>
                    <button
                      onClick={() => setExpandedReq(isExpanded ? "" : req.number)}
                      className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 self-start sm:self-auto"
                    >
                      <span>{isExpanded ? 'Hide Details' : 'View Audit Checks & Pitfalls'}</span>
                      {isExpanded ? <ChevronDown className="w-3.5 h-3.5" /> : <ChevronRight className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                    {req.details}
                  </p>

                  {isExpanded && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-slate-200 dark:border-slate-700/80 animate-fadeIn">
                      
                      <div className="space-y-2">
                        <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                          <span>What Lead Assessors Verify</span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                          {req.auditorChecks.map((chk, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-2">
                              <span className="text-emerald-500 font-bold shrink-0">✓</span>
                              <span>{chk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <div className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                          <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                          <span>Common Non-Conformity Pitfall</span>
                        </div>
                        <div className="p-3 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-xs text-red-800 dark:text-red-300 leading-relaxed">
                          {req.commonPitfall}
                        </div>
                      </div>

                    </div>
                  )}

                </div>
              );
            })}
          </div>

        </div>

      </section>

      {/* SECTION 4: INTERACTIVE SAQ & SCOPE FINDER TOOL */}
      <section id="pci-saq-calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="bg-gradient-to-br from-[#070F2B] via-[#0A192F] to-[#0E2A47] text-white rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl space-y-8">
          
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-semibold">
              <Search className="w-4 h-4 text-amber-400" />
              <span>Interactive Decision Engine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-serif">
              PCI DSS SAQ &amp; Validation Track Discovery Tool
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Answer 3 quick questions about your payment architecture to instantly determine your required Self-Assessment Questionnaire (SAQ), control count, ASV scanning requirements, and estimated audit duration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Form Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Question 1: Entity Type */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  1. Organization Role in Payment Processing
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setEntityType('merchant')}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      entityType === 'merchant'
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                        : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <div className="text-xs font-bold">Merchant</div>
                    <div className="text-[11px] opacity-80 mt-0.5">Accepts payment cards for goods or services</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setEntityType('service_provider')}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      entityType === 'service_provider'
                        ? 'bg-amber-500 text-slate-950 font-bold border-amber-400 shadow-md'
                        : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                    }`}
                  >
                    <div className="text-xs font-bold">Service Provider / Fintech</div>
                    <div className="text-[11px] opacity-80 mt-0.5">Transmits, processes, or facilitates card data for third parties</div>
                  </button>
                </div>
              </div>

              {/* Question 2: Integration Method (For Merchants) */}
              {entityType === 'merchant' ? (
                <div className="space-y-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                    2. Card Payment Acceptance Channel &amp; Technical Method
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    
                    <button
                      type="button"
                      onClick={() => setIntegrationMethod('iframe')}
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        integrationMethod === 'iframe'
                          ? 'bg-emerald-500/20 text-white border-emerald-400 ring-1 ring-emerald-400'
                          : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>Hosted Iframe / Redirect</span>
                        {integrationMethod === 'iframe' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">Payment form provided completely by Paystack/Flutterwave/Stripe. No card data touches your servers.</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIntegrationMethod('api')}
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        integrationMethod === 'api'
                          ? 'bg-emerald-500/20 text-white border-emerald-400 ring-1 ring-emerald-400'
                          : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>Direct API / Merchant Hosted</span>
                        {integrationMethod === 'api' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">Payment fields live on merchant website, sending data via direct API payload to processor.</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIntegrationMethod('pos_terminal')}
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        integrationMethod === 'pos_terminal'
                          ? 'bg-emerald-500/20 text-white border-emerald-400 ring-1 ring-emerald-400'
                          : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>Physical POS Hardware</span>
                        {integrationMethod === 'pos_terminal' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">Retail payment terminals (PTS-approved IP or dial-up) in physical stores.</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIntegrationMethod('virtual_terminal')}
                      className={`p-3 rounded-xl text-left border transition-all text-xs ${
                        integrationMethod === 'virtual_terminal'
                          ? 'bg-emerald-500/20 text-white border-emerald-400 ring-1 ring-emerald-400'
                          : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>Virtual Terminal (Browser)</span>
                        {integrationMethod === 'virtual_terminal' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">Employees manually enter customer card numbers into a web browser console.</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIntegrationMethod('full_storage')}
                      className={`sm:col-span-2 p-3 rounded-xl text-left border transition-all text-xs ${
                        integrationMethod === 'full_storage'
                          ? 'bg-emerald-500/20 text-white border-emerald-400 ring-1 ring-emerald-400'
                          : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      <div className="font-bold flex items-center justify-between">
                        <span>Full Electronic Card Data Storage (PAN at Rest)</span>
                        {integrationMethod === 'full_storage' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </div>
                      <div className="text-[10px] text-slate-400 mt-1">Databases store card numbers (PANs) or process internal switching pipelines. Full PCI DSS scope.</div>
                    </button>

                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-xs text-slate-300 space-y-1">
                  <div className="font-bold text-amber-400">Service Provider Classification Note:</div>
                  <p>Service providers (payment gateways, switches, aggregator APIs, SaaS platforms) must validate against <strong>SAQ D for Service Providers</strong> (or an on-site RoC by a QSA if processing over 300,000 transactions/year).</p>
                </div>
              )}

              {/* Question 3: Annual Volume */}
              <div className="space-y-2.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {entityType === 'merchant' ? '3. Estimated Annual Card Transactions' : '2. Annual Transactions Processed for Clients'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { id: 'under_20k', label: '< 20,000 txns', desc: 'Level 4 Merchant' },
                    { id: '20k_to_1m', label: '20k - 1M txns', desc: 'Level 3 Merchant' },
                    { id: '1m_to_6m', label: '1M - 6M txns', desc: 'Level 2 Merchant' },
                    { id: 'over_6m', label: '> 6,000,000 txns', desc: 'Level 1 (RoC Required)' }
                  ].map((vol) => (
                    <button
                      key={vol.id}
                      type="button"
                      onClick={() => setAnnualVolume(vol.id as any)}
                      className={`p-2.5 rounded-xl text-center border transition-all text-xs ${
                        annualVolume === vol.id
                          ? 'bg-amber-500 text-slate-950 font-bold border-amber-400'
                          : 'bg-slate-900/80 text-slate-300 border-slate-700 hover:border-slate-500'
                      }`}
                    >
                      <div className="font-bold">{vol.label}</div>
                      <div className="text-[10px] opacity-75 mt-0.5">{vol.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Dynamic Recommendation Output Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#040817] rounded-2xl p-6 border-2 border-amber-500/60 shadow-xl space-y-4">
                
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono">Recommended Path</span>
                    <h3 className="text-lg font-black text-white">{rec.track}</h3>
                  </div>
                  <FileCheck2 className="w-6 h-6 text-amber-400 shrink-0" />
                </div>

                <div className="space-y-3 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Tier Classification:</span>
                    <span className="text-slate-200 font-bold">{rec.level}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Controls in Audit Scope:</span>
                    <span className="text-emerald-400 font-mono font-bold text-sm">{rec.controls}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Validation Deliverable:</span>
                    <span className="text-slate-200 font-semibold">{rec.validationDoc}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Quarterly ASV Scanning:</span>
                    <span className="text-slate-200">{rec.asvRequired}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Penetration Testing:</span>
                    <span className="text-slate-200">{rec.penTestRequired}</span>
                  </div>

                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">Typical Certification Window:</span>
                    <span className="text-amber-300 font-mono font-bold">{rec.estimatedDuration}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
                  <strong className="text-amber-400">Architectural Insight:</strong> {rec.recommendationTip}
                </div>

                <a
                  href="#pci-quote-form"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>Book Gap Analysis for this Track</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* SECTION 5: CDE SCOPE REDUCTION SIMULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest">
            Engineering Strategy
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            CDE Scope Minimization: Save 70%+ in Compliance Overhead
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Smart network segmentation, tokenization, and hosted payment architectures dramatically shrink your Cardholder Data Environment (CDE).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Legacy Unsegmented Architecture */}
          <div className="bg-red-50/50 dark:bg-red-950/20 border-2 border-red-300 dark:border-red-900/60 rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between border-b border-red-200 dark:border-red-900/60 pb-3">
              <div>
                <span className="text-[10px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wider font-mono">High Risk &amp; Expense</span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Unsegmented Flat Network</h3>
              </div>
              <ShieldAlert className="w-6 h-6 text-red-500 shrink-0" />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              When payment flows share subnets, databases, or cloud accounts with general corporate systems, <strong>every connected server, developer laptop, and CI/CD pipeline becomes in scope</strong> for PCI DSS.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-red-100 dark:border-red-900/40">
                <span className="text-slate-500 dark:text-slate-400">In-Scope Infrastructure:</span>
                <span className="font-bold text-red-600 dark:text-red-400">100+ Servers, Workstations &amp; Cloud VPCs</span>
              </div>
              <div className="flex justify-between py-1 border-b border-red-100 dark:border-red-900/40">
                <span className="text-slate-500 dark:text-slate-400">Controls to Audit:</span>
                <span className="font-bold text-red-600 dark:text-red-400">300+ Controls (Full SAQ D / RoC)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-red-100 dark:border-red-900/40">
                <span className="text-slate-500 dark:text-slate-400">Quarterly ASV Scan Targets:</span>
                <span className="font-bold text-red-600 dark:text-red-400">Every Public IP &amp; Host Domain</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 dark:text-slate-400">Audit Duration &amp; Engineering Cost:</span>
                <span className="font-bold text-red-600 dark:text-red-400">12 - 16 Weeks (High Overhead)</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-red-100/60 dark:bg-red-900/30 text-[11px] text-red-800 dark:text-red-300">
              ⚠️ A single vulnerability on a non-payment marketing server can result in a failed PCI DSS audit.
            </div>
          </div>

          {/* IEMA Optimized Segmented Architecture */}
          <div className="bg-emerald-50/50 dark:bg-emerald-950/20 border-2 border-emerald-400 dark:border-emerald-600 rounded-2xl p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between border-b border-emerald-200 dark:border-emerald-900/60 pb-3">
              <div>
                <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider font-mono">IEMA Recommended Best Practice</span>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">Segmented &amp; Tokenized Architecture</h3>
              </div>
              <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0" />
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              By deploying next-gen firewalls, dedicated VLANs, tokenization vaults, or hosted iframe checkout fields, card data is strictly quarantined into an isolated micro-perimeter.
            </p>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-emerald-100 dark:border-emerald-900/40">
                <span className="text-slate-500 dark:text-slate-400">In-Scope Infrastructure:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">1 Dedicated Microservice / 0 Servers (SAQ A)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-emerald-100 dark:border-emerald-900/40">
                <span className="text-slate-500 dark:text-slate-400">Controls to Audit:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">~24 to 31 Controls (SAQ A)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-emerald-100 dark:border-emerald-900/40">
                <span className="text-slate-500 dark:text-slate-400">Quarterly ASV Scan Targets:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Strictly Isolated Payment Host Only</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500 dark:text-slate-400">Audit Duration &amp; Engineering Cost:</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">2 - 3 Weeks (70%+ Cost Savings)</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-emerald-100/60 dark:bg-emerald-900/30 text-[11px] text-emerald-800 dark:text-emerald-300">
              ✓ Our technical advisors design your network boundary before the audit to minimize compliance liability.
            </div>
          </div>

        </div>

      </section>

      {/* SECTION 6: IEMA'S 5-STAGE PCI DSS CERTIFICATION ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            Audit Lifecycle
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            IEMA's 5-Stage PCI DSS Compliance Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            A battle-tested conformity assessment methodology guaranteeing zero surprises during your formal audit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          {[
            {
              step: "Phase 1",
              title: "Scoping & Discovery",
              desc: "Map all card data flows, interview developers, inspect network diagrams, and define the tightest possible CDE boundary.",
              output: "CDE Scope Document & Data Flow Diagrams"
            },
            {
              step: "Phase 2",
              title: "Technical Gap Audit",
              desc: "Evaluate your current controls against the 12 requirements of v4.0.1, identifying missing policies, unencrypted data, and MFA gaps.",
              output: "Prioritized Remediation Matrix"
            },
            {
              step: "Phase 3",
              title: "Remediation & Testing",
              desc: "Provide guidance on firewall rules, SIEM logging, policy drafting, run quarterly ASV scans, and conduct penetration testing.",
              output: "Passing ASV Scan & Pen Test Reports"
            },
            {
              step: "Phase 4",
              title: "Pre-Audit Verification",
              desc: "Perform mock sampling of audit artifacts, verify script monitoring mechanisms (Req 6.4.3), and ensure evidence is ready.",
              output: "Formal Audit Readiness Sign-Off"
            },
            {
              step: "Phase 5",
              title: "RoC / SAQ & AoC Award",
              desc: "Execute formal on-site audit (or SAQ validation), sign the Attestation of Compliance (AoC), and submit to card brands and CBN.",
              output: "Official Attestation of Compliance (AoC)"
            }
          ].map((phase, pIdx) => (
            <div 
              key={phase.step}
              className="bg-white dark:bg-[#0B1E38] p-5 rounded-2xl border border-slate-200 dark:border-slate-700/80 shadow-sm flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-600 dark:text-amber-400 font-mono">{phase.step}</span>
                  <span className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold flex items-center justify-center text-slate-600 dark:text-slate-300">
                    {pIdx + 1}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                  {phase.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-1.5 leading-relaxed">
                  {phase.desc}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-700/80 text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                Deliverable: {phase.output}
              </div>
            </div>
          ))}

        </div>

      </section>

      {/* SECTION 7: NIGERIAN & REGULATORY ECOSYSTEM ALIGNMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0A192F] text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Banking &amp; Fintech Mandates</div>
              <h3 className="text-xl font-bold font-serif text-white mt-0.5">Central Bank of Nigeria (CBN) Alignment</h3>
            </div>
            <span className="text-xs text-slate-400">Mandatory for NIBSS, Switching, and PSP Licenses</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="font-bold text-amber-400">Payment Service Banks (PSB)</div>
              <p className="text-slate-400 leading-relaxed">Mandatory compliance for issuing debit cards, processing retail payment transactions, and agency banking portals.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="font-bold text-amber-400">Switching &amp; Processing</div>
              <p className="text-slate-400 leading-relaxed">Interswitch, Unified Payments, and custom fintech switches require Level 1 Service Provider RoC attestation.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="font-bold text-amber-400">Payment Solution Service (PSSP)</div>
              <p className="text-slate-400 leading-relaxed">Payment gateways, e-commerce checkouts, and collection APIs must demonstrate active annual AoC documentation.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1.5">
              <div className="font-bold text-amber-400">Mobile Money Operators (MMO)</div>
              <p className="text-slate-400 leading-relaxed">Securing stored value wallets, virtual card issuance, and mobile payment applications against card cloning and fraud.</p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 8: AUDIT INQUIRY & GAP ANALYSIS REQUEST FORM */}
      <section id="pci-quote-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white dark:bg-[#0B1E38] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-700/80 shadow-2xl space-y-6">
          
          <div className="text-center space-y-2">
            <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
              Get Started
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
              Request Your PCI DSS v4.0.1 Audit Proposal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              Submit your project details below. Our Lead Security Assessors will review your architecture and deliver a tailored scoping proposal and timeline within 24 business hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                PCI DSS Audit Request Received
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto">
                Thank you for contacting IEMA Standards Limited. A Lead Information Security Assessor has been assigned to review your scope and will contact you via email ({formData.email}) and phone ({formData.phone}).
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. PayNext Solutions Ltd"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Olumide Adeleke"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. security@paynext.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 803 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Organization Type
                  </label>
                  <select
                    value={formData.organizationRole}
                    onChange={(e) => setFormData({ ...formData, organizationRole: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="fintech">Fintech / Payment Gateway (PSP / PSSP)</option>
                    <option value="bank">Commercial Bank / Microfinance Bank</option>
                    <option value="switch">Switching &amp; Processing Company</option>
                    <option value="ecommerce">E-Commerce Merchant / Retailer</option>
                    <option value="saas">SaaS / Cloud Software Provider</option>
                    <option value="other">Other Entity</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Current PCI DSS Status
                  </label>
                  <select
                    value={formData.currentPciStatus}
                    onChange={(e) => setFormData({ ...formData, currentPciStatus: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="new_assessment">First-Time Assessment (Need Full Gap Audit)</option>
                    <option value="v4_transition">Transitioning from v3.2.1 to v4.0.1</option>
                    <option value="annual_recertification">Annual Recertification / Surveillance</option>
                    <option value="asv_only">ASV Scanning &amp; Penetration Testing Only</option>
                    <option value="cde_scoping">CDE Scope Reduction Advisory Only</option>
                  </select>
                </div>

              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  Project Scope &amp; Architecture Details (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Provide any relevant details: cloud host (AWS, Azure, on-premise), payment integration method (hosted iframe, direct API), or urgent regulatory deadlines."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-[11px] text-slate-500 dark:text-slate-400">
                  🔒 Strictly confidential. Non-Disclosure Agreement (NDA) provided upon request.
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Audit Request</span>
                </button>
              </div>

            </form>
          )}

        </div>

      </section>

      {/* SECTION 9: FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="text-center space-y-2">
          <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest">
            Clarity &amp; Guidance
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-serif">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Answers to common questions about PCI DSS v4.0.1 compliance, timelines, and assessment scopes.
          </p>
        </div>

        <div className="space-y-3 pt-2">
          {FAQS.map((faq, fIdx) => {
            const isOpen = expandedFaq === fIdx;
            return (
              <div
                key={fIdx}
                className="bg-white dark:bg-[#0B1E38] rounded-xl border border-slate-200 dark:border-slate-700/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : fIdx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-3 text-sm font-bold text-slate-900 dark:text-white hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-amber-500' : 'text-slate-400'}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* SECTION 10: BOTTOM CTA STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#070F2B] to-[#0A192F] text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black font-serif">
              Ready to Certify Your Payment Card Environment?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Partner with IEMA Standards Limited for world-class technical audit rigor, expedited ASV scanning, and seamless regulatory compliance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#pci-quote-form"
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-xs transition-colors shadow-lg shadow-amber-500/20"
            >
              Request Fast-Track Quote
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="border border-slate-700 hover:bg-white/10 text-white font-semibold px-5 py-3.5 rounded-xl text-xs transition-colors"
            >
              Contact Lagos Office
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
