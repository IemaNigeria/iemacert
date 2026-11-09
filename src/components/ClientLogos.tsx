import React from 'react';

// Client Logo Images from assets (with public fallback)
import medicalMartImg from '../assets/images/clients/medicalmart.png';
import bonoImg from '../assets/images/clients/bono.png';
import fcmbImg from '../assets/images/clients/fcmb.png';
import kryogenImg from '../assets/images/clients/kryogen.png';
import rccImg from '../assets/images/clients/rcc.png';
import shorelineImg from '../assets/images/clients/shoreline.png';
import sunflagImg from '../assets/images/regenerated_image_1792162962673.jpg';
import quantumImg from '../assets/images/regenerated_image_1792162958827.jpg';
import ieiImg from '../assets/images/regenerated_image_1792162959445.jpg';
import rexImg from '../assets/images/regenerated_image_1792162962448.jpg';
import renmoneyImg from '../assets/images/clients/renmoney.png';

export interface ClientItem {
  id: string;
  name: string;
  shortName: string;
  sector: 'Banking & Financial Services' | 'Energy & Oil/Gas' | 'Infrastructure & Construction' | 'Heavy Manufacturing & Steel' | 'Healthcare & Medical' | 'Engineering & Technical Systems';
  standards: string;
  summary: string;
  logo: string;
  altLogo?: string;
  badge: string;
}

export const CLIENTS_LIST: ClientItem[] = [
  {
    id: 'fcmb',
    name: 'First City Monument Bank (FCMB)',
    shortName: 'FCMB',
    sector: 'Banking & Financial Services',
    standards: 'ISO/IEC 27001 (ISMS) • ISO 22301 (BCMS) • ISO 9001 (QMS)',
    summary: 'One of Nigeria’s foremost tier-1 commercial banking institutions, maintaining accredited information security and business continuity compliance across nationwide branches and digital banking infrastructure.',
    logo: fcmbImg,
    altLogo: '/clients/fcmb.png',
    badge: 'Tier-1 Banking'
  },
  {
    id: 'renmoney',
    name: 'Renmoney Microfinance Bank',
    shortName: 'Renmoney',
    sector: 'Banking & Financial Services',
    standards: 'ISO/IEC 27001:2022 • NDPA 2023 Data Privacy • ISO 9001',
    summary: 'Leading Nigerian consumer finance and digital banking fintech, maintaining verified information security management systems and automated digital lending risk controls.',
    logo: renmoneyImg,
    altLogo: '/clients/renmoney.png',
    badge: 'Digital Banking & Fintech'
  },
  {
    id: 'bono',
    name: 'Bono Energy Group',
    shortName: 'Bono Energy',
    sector: 'Energy & Oil/Gas',
    standards: 'ISO 9001:2015 • ISO 14001:2015 • ISO 45001:2018 • QA/QC',
    summary: 'Premier indigenous oil and gas trading, shipping, and energy infrastructure conglomerate delivering integrated energy logistics across the West African sub-region.',
    logo: bonoImg,
    altLogo: '/clients/bono.png',
    badge: 'Energy & Petroleum Major'
  },
  {
    id: 'shoreline',
    name: 'Shoreline Natural Resources',
    shortName: 'Shoreline',
    sector: 'Energy & Oil/Gas',
    standards: 'ISO 9001:2015 • ISO 14001:2015 • ISO 45001:2018 • NDT Asset Integrity',
    summary: 'Leading indigenous upstream oil and gas exploration and production company, operator of OML 30 in the Niger Delta with comprehensive environmental and occupational health management systems.',
    logo: shorelineImg,
    altLogo: '/clients/shoreline.png',
    badge: 'Upstream E&P'
  },
  {
    id: 'rcc',
    name: 'Reynolds Construction Company (RCC Nigeria)',
    shortName: 'RCC Nigeria',
    sector: 'Infrastructure & Construction',
    standards: 'ISO 9001:2015 • ISO 14001:2015 • ISO 45001:2018 (IMS)',
    summary: 'One of Nigeria’s largest civil engineering and multinational infrastructure contractors, delivering major federal highways, bridges, and industrial civil works with verified IMS quality governance.',
    logo: rccImg,
    altLogo: '/clients/rcc.png',
    badge: 'Civil Engineering Leader'
  },
  {
    id: 'quantum',
    name: 'Quantum Steels Nigeria Limited',
    shortName: 'Quantum Steels',
    sector: 'Heavy Manufacturing & Steel',
    standards: 'ISO 9001:2015 • Metallurgical Destructive Testing • ISO 45001',
    summary: 'Major structural steel billets and high-yield rebar rolling mill operator in Nigeria, certified for rigorous metallurgical QA/QC, Universal Testing Machine (UTM) tensile conformance, and plant safety.',
    logo: quantumImg,
    altLogo: '/clients/quantum.png',
    badge: 'Heavy Metallurgy'
  },
  {
    id: 'sunflag',
    name: 'Sunflag Group Nigeria',
    shortName: 'Sunflag',
    sector: 'Heavy Manufacturing & Steel',
    standards: 'ISO 9001:2015 • ISO 14001:2015 • ISO 45001:2018',
    summary: 'Diversified industrial manufacturing and steel rolling conglomerate with over six decades of operational excellence across manufacturing plants in Nigeria.',
    logo: sunflagImg,
    altLogo: '/clients/sunflag.png',
    badge: 'Industrial Manufacturing'
  },
  {
    id: 'rex',
    name: 'Rex Insurance Limited',
    shortName: 'Rex Insurance',
    sector: 'Banking & Financial Services',
    standards: 'ISO 9001:2015 • ISO 27001 (ISMS) • Quality Service Delivery',
    summary: 'Leading Nigerian underwriting firm providing comprehensive corporate and retail insurance coverage with robust risk management and digitized policy administration systems.',
    logo: rexImg,
    altLogo: '/clients/rex.png',
    badge: 'Insurance & Underwriting'
  },
  {
    id: 'iei',
    name: 'International Energy Insurance (IEI Plc / Norrenberger)',
    shortName: 'IEI Insurance',
    sector: 'Banking & Financial Services',
    standards: 'ISO 9001:2015 • Quality Underwriting & Risk Management',
    summary: 'Pioneering energy, maritime, and corporate general insurance underwriter in Nigeria, operating under the Norrenberger financial ecosystem with accredited quality management.',
    logo: ieiImg,
    altLogo: '/clients/iei.png',
    badge: 'Energy & General Insurance'
  },
  {
    id: 'medicalmart',
    name: 'Medical Mart Limited',
    shortName: 'Medical Mart',
    sector: 'Healthcare & Medical',
    standards: 'ISO 9001:2015 • ISO 13485 Medical Devices • Quality Distribution',
    summary: 'Premier healthcare procurement, diagnostic equipment, and medical consumable distribution provider serving hospitals, clinics, and health systems across Nigeria.',
    logo: medicalMartImg,
    altLogo: '/clients/medicalmart.png',
    badge: 'Healthcare & Medical Systems'
  },
  {
    id: 'kryogen',
    name: 'Kryogen Systems Limited',
    shortName: 'Kryogen Systems',
    sector: 'Engineering & Technical Systems',
    standards: 'ISO 9001:2015 • ISO 45001:2018 • Fire & Technical Safety',
    summary: 'Specialized cryogenic, fire suppression, gas distribution, and specialized engineering systems provider safeguarding high-hazard industrial facilities and critical infrastructure.',
    logo: kryogenImg,
    altLogo: '/clients/kryogen.png',
    badge: 'Fire & Technical Safety'
  }
];

// Reusable Client Logo Component
export const ClientLogoImage: React.FC<{
  clientId: string;
  className?: string;
  imgClassName?: string;
}> = ({ clientId, className = "h-12 w-auto", imgClassName = "max-h-full max-w-full object-contain" }) => {
  const client = CLIENTS_LIST.find(c => c.id === clientId);
  if (!client) return null;

  return (
    <div className={`flex items-center justify-center p-2 rounded-xl bg-white ${className}`}>
      <img
        src={client.logo}
        alt={`${client.name} Logo`}
        className={imgClassName}
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
  );
};
