import React from 'react';

// Core Assets
import iemaLogoImage from '../assets/images/regenerated_image_1786960454610.png';
import egacLogoImage from '../assets/images/regenerated_image_1786960647345.png';
import ndpcLogoImage from '../assets/images/regenerated_image_1786960923682.png';
import ilacLogoImage from '../assets/images/regenerated_image_1786965083511.png';
import iafLogoImage from '../assets/images/regenerated_image_1786972020050.png';
import globalAciLogoImage from '../assets/images/regenerated_image_1786972705063.png';
import ninasLogoImage from '../assets/images/regenerated_image_1786973540608.png';
import ibstacLogoImage from '../assets/images/IBSTAC.png';
import ncdmbLogoImage from '../assets/images/NCDMB.png';
import nnpcLogoImage from '../assets/images/NNPC.png';
import ogtanLogoImage from '../assets/images/OGTAN.png';
import sonLogoImage from '../assets/images/SON.png';
import lasepaLogoImage from '../assets/images/LASEPA.png';
import fmeLogoImage from '../assets/images/fme_logo.png';
import cacLogoImage from '../assets/images/cac_logo.png';
import ogepaLogoImage from '../assets/images/ogepa_logo.png';
import nesreaLogoImage from '../assets/images/nesrea_logo.png';

// 13 Official Logo Image Imports
import exxonMobilLogoImage from '../assets/images/EXXONMOBIL.png';
import ircaLogoImage from '../assets/images/IRCA.png';
import isponLogoImage from '../assets/images/ISPON.png';
import nmdpraLogoImage from '../assets/images/NMDPRA.png';
import nuprcLogoImage from '../assets/images/NUPRC.png';
import shellLogoImage from '../assets/images/SHELL.png';
import astmLogoImage from '../assets/images/ASTM.png';
import chevronLogoImage from '../assets/images/CHEVRON.png';
import corenLogoImage from '../assets/images/COREN.png';

// IEMA Official Logo Symbol (PNG format)
export const IEMALogoSymbol: React.FC<{ className?: string; style?: React.CSSProperties }> = ({ 
  className = "h-11 sm:h-12",
  style 
}) => (
  <img 
    src="/iema_logo.png" 
    alt="IEMA Standards Ltd" 
    className={`${className} w-auto object-contain shrink-0`}
    style={style}
    referrerPolicy="no-referrer"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== iemaLogoImage) {
        target.src = iemaLogoImage;
      }
    }}
  />
);

// IEMA Official Logo Component (PNG format)
export const IEMALogo: React.FC<{ 
  className?: string; 
  showTagline?: boolean;
  forceDark?: boolean;
}> = ({ 
  className = "h-10 sm:h-12",
  showTagline = true,
  forceDark = false,
}) => {
  return (
    <div className="inline-flex items-center gap-3 sm:gap-4">
      <img 
        src="/iema_logo.png" 
        alt="IEMA Standards Ltd" 
        className={`${className} w-auto object-contain shrink-0`}
        referrerPolicy="no-referrer"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (target.src !== iemaLogoImage) {
            target.src = iemaLogoImage;
          }
        }}
      />
      {showTagline && (
        <div className="flex flex-col text-left justify-center select-none min-w-0">
          <div className="flex items-baseline gap-1.5 flex-wrap leading-tight">
            <span 
              className={`font-serif font-black text-sm sm:text-base lg:text-lg tracking-tight uppercase ${
                forceDark ? 'text-white' : 'text-[#151414] dark:text-white'
              }`}
            >
              IEMA
            </span>
            <span 
              className={`font-serif font-bold text-xs sm:text-sm lg:text-base tracking-tight ${
                forceDark ? 'text-slate-200' : 'text-[#0d0d0d] dark:text-slate-200'
              }`}
            >
              Standards Ltd
            </span>
          </div>
          <div className="text-[9px] sm:text-[10px] lg:text-[11px] font-black text-amber-600 dark:text-amber-400 tracking-wider uppercase mt-1 leading-none">
            EGAC ACCREDITED CAB 12203
          </div>
        </div>
      )}
    </div>
  );
};

// EGAC Accredited Official Seal (PNG format)
export const EGACLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <img 
    src="/egac_logo.png" 
    alt="EGAC (Egyptian Accreditation Council) Accredited CAB 12203" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== egacLogoImage) {
        target.src = egacLogoImage;
      }
    }}
  />
);

// NiNAS Logo (PNG format)
export const NiNASLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <img 
    src="/ninas_logo.png" 
    alt="NiNAS Nigeria National Accreditation System" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== ninasLogoImage) {
        target.src = ninasLogoImage;
      }
    }}
  />
);

// Global ACI Logo (PNG format)
export const GlobalACILogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <img 
    src="/global_aci_logo.png" 
    alt="Global ACI (Assessment & Certification Institute)" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== globalAciLogoImage) {
        target.src = globalAciLogoImage;
      }
    }}
  />
);

// IAF Logo (PNG format)
export const IAFLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <img 
    src="/iaf_logo.png" 
    alt="IAF International Accreditation Forum" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== iafLogoImage) {
        target.src = iafLogoImage;
      }
    }}
  />
);

// NDPC Logo (PNG format)
export const NDPCLogo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => (
  <img 
    src="/ndpc_logo.png" 
    alt="NDPC (Nigeria Data Protection Commission) Licensed DPCO" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== ndpcLogoImage) {
        target.src = ndpcLogoImage;
      }
    }}
  />
);

// ILAC-MRA Logo (PNG format)
export const ILACMRADataLogo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <img 
    src="/ilac_logo.png" 
    alt="ILAC International Laboratory Accreditation Cooperation" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== ilacLogoImage) {
        target.src = ilacLogoImage;
      }
    }}
  />
);

// 1. EXXONMOBIL Logo Component
export const ExxonMobilLogo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => (
  <img 
    src="/EXXONMOBIL.png" 
    alt="ExxonMobil" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== exxonMobilLogoImage) {
        target.src = exxonMobilLogoImage;
      }
    }}
  />
);

// 2. IRCA Logo Component
export const IRCALogo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => (
  <img 
    src="/IRCA.png" 
    alt="IRCA International Register of Certificated Auditors" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== ircaLogoImage) {
        target.src = ircaLogoImage;
      }
    }}
  />
);

// 3. ISPON Logo Component
export const ISPONLogo: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <img 
    src="/ISPON.png" 
    alt="Institute of Safety Professionals of Nigeria (ISPON)" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== isponLogoImage) {
        target.src = isponLogoImage;
      }
    }}
  />
);

// 4. LASEPA Logo Component
export const LASEPALogo: React.FC<{ className?: string; showText?: boolean }> = ({ 
  className = "h-12 w-auto",
  showText = false
}) => {
  const img = (
    <img 
      src="/LASEPA.png" 
      alt="Lagos State Environmental Protection Agency (LASEPA)" 
      className={`${className} object-contain shrink-0`}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== lasepaLogoImage) {
          target.src = lasepaLogoImage;
        }
      }}
    />
  );

  if (!showText) return img;

  return (
    <div className="inline-flex items-center gap-2.5">
      {img}
      <div className="flex flex-col text-left leading-tight">
        <span className="font-black text-xs text-green-800 dark:text-green-300 uppercase">LASEPA</span>
        <span className="font-bold text-[10px] text-slate-600 dark:text-slate-400 uppercase">Lagos State EPA</span>
      </div>
    </div>
  );
};

// 5. NCDMB Logo Component
export const NCDMBLogo: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <img 
    src="/NCDMB.png" 
    alt="Nigerian Content Development and Monitoring Board (NCDMB)" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== ncdmbLogoImage) {
        target.src = ncdmbLogoImage;
      }
    }}
  />
);

// 6. NMDPRA Logo Component
export const NMDRPALogo: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <img 
    src="/NMDPRA.png" 
    alt="Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA)" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== nmdpraLogoImage) {
        target.src = nmdpraLogoImage;
      }
    }}
  />
);
export const NMDPRA_Logo = NMDRPALogo;

// 7. NUPRC Logo Component
export const NUPRCLogo: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <img 
    src="/NUPRC.png" 
    alt="Nigerian Upstream Petroleum Regulatory Commission (NUPRC)" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== nuprcLogoImage) {
        target.src = nuprcLogoImage;
      }
    }}
  />
);

// 8. OGTAN Logo Component
export const OGTANLogo: React.FC<{ className?: string; showText?: boolean }> = ({ 
  className = "h-12 w-auto",
  showText = false
}) => {
  const img = (
    <img 
      src="/OGTAN.png" 
      alt="Oil & Gas Trainers Association of Nigeria (OGTAN)" 
      className={`${className} object-contain shrink-0`}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== ogtanLogoImage) {
          target.src = ogtanLogoImage;
        }
      }}
    />
  );

  if (!showText) return img;

  return (
    <div className="inline-flex items-center gap-2">
      {img}
      <div className="flex flex-col text-left leading-tight">
        <div className="font-black text-xs tracking-tight uppercase">
          <span className="text-[#2D5A27]">OIL </span>
          <span className="text-amber-500 font-extrabold">&amp; </span>
          <span className="text-[#2D5A27]">GAS TRAINERS</span>
        </div>
        <div className="font-extrabold text-[9px] tracking-wider text-slate-800 dark:text-slate-200 uppercase">
          ASSOCIATION OF NIGERIA
        </div>
      </div>
    </div>
  );
};

// 9. SHELL Logo Component
export const ShellLogo: React.FC<{ className?: string }> = ({ className = "h-11 w-auto" }) => (
  <img 
    src="/SHELL.png" 
    alt="Shell Petroleum Development Company" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== shellLogoImage) {
        target.src = shellLogoImage;
      }
    }}
  />
);

// 10. SON Logo Component
export const SONLogo: React.FC<{ className?: string; showText?: boolean }> = ({ 
  className = "w-14 h-14",
  showText = false
}) => {
  const img = (
    <img 
      src="/SON.png" 
      alt="Standards Organisation of Nigeria (SON)" 
      className={`${className} object-contain shrink-0`}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== sonLogoImage) {
          target.src = sonLogoImage;
        }
      }}
    />
  );

  if (!showText) return img;

  return (
    <div className="inline-flex items-center gap-2.5">
      {img}
      <div className="flex flex-col text-left leading-tight">
        <span className="font-black text-xs text-green-900 dark:text-green-300 uppercase">SON</span>
        <span className="font-bold text-[10px] text-slate-600 dark:text-slate-400 uppercase">Standards Org. Nigeria</span>
      </div>
    </div>
  );
};

// 11. ASTM Logo Component
export const ASTMLogo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => (
  <img 
    src="/ASTM.png" 
    alt="ASTM International Standards Worldwide" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== astmLogoImage) {
        target.src = astmLogoImage;
      }
    }}
  />
);

// 12. CHEVRON Logo Component
export const ChevronLogo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => (
  <img 
    src="/CHEVRON.png" 
    alt="Chevron Nigeria Limited" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== chevronLogoImage) {
        target.src = chevronLogoImage;
      }
    }}
  />
);

// 13. COREN Logo Component
export const CORENLogo: React.FC<{ className?: string }> = ({ className = "h-12 w-auto" }) => (
  <img 
    src="/COREN.png" 
    alt="Council for the Regulation of Engineering in Nigeria (COREN)" 
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== corenLogoImage) {
        target.src = corenLogoImage;
      }
    }}
  />
);

// NNPC (Nigerian National Petroleum Company Limited) Official Logo
export const NNPCLogo: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <img 
    src="/NNPC.png" 
    alt="Nigerian National Petroleum Company Limited (NNPC)"
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== nnpcLogoImage) {
        target.src = nnpcLogoImage;
      }
    }}
  />
);

// IBSTAC Official Logo
export const IBSTACLogo: React.FC<{ className?: string }> = ({ className = "w-14 h-14" }) => (
  <img 
    src="/IBSTAC.png" 
    alt="International Bureau for Standard Accreditation (IBSTAC)"
    className={`${className} object-contain shrink-0`}
    referrerPolicy="no-referrer"
    loading="lazy"
    onError={(e) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== ibstacLogoImage) {
        target.src = ibstacLogoImage;
      }
    }}
  />
);

// FME / FMEnv Official Emblem
export const FMELogo: React.FC<{ className?: string; showText?: boolean }> = ({ 
  className = "w-12 h-12",
  showText = false
}) => (
  <div className="inline-flex items-center gap-2.5">
    <img 
      src="/fme_logo.png" 
      alt="Federal Ministry of Environment (FMEnv / FME)" 
      className={`${className} object-contain shrink-0`}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== fmeLogoImage) {
          target.src = fmeLogoImage;
        }
      }}
    />
    {showText && (
      <div className="flex flex-col text-left leading-tight">
        <span className="font-black text-xs text-emerald-800 dark:text-emerald-300 uppercase">Federal Ministry</span>
        <span className="font-bold text-[10px] text-slate-600 dark:text-slate-400 uppercase">of Environment</span>
      </div>
    )}
  </div>
);

// NESREA Official Emblem
export const NESREALogo: React.FC<{ className?: string; showText?: boolean }> = ({ 
  className = "w-12 h-12",
  showText = false
}) => {
  const img = (
    <img 
      src="/nesrea_logo.png" 
      alt="National Environmental Standards and Regulations Enforcement Agency (NESREA)" 
      className={`${className} object-contain shrink-0`}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== nesreaLogoImage) {
          target.src = nesreaLogoImage;
        }
      }}
    />
  );

  if (!showText) return img;

  return (
    <div className="inline-flex items-center gap-2.5">
      {img}
      <div className="flex flex-col text-left leading-tight">
        <span className="font-black text-xs text-emerald-800 dark:text-emerald-300 uppercase">NESREA</span>
        <span className="font-bold text-[10px] text-slate-600 dark:text-slate-400 uppercase">Enforcement Agency</span>
      </div>
    </div>
  );
};

// CAC Official Emblem
export const CACLogo: React.FC<{ className?: string; showText?: boolean }> = ({ 
  className = "w-12 h-12",
  showText = false
}) => (
  <div className="inline-flex items-center gap-2.5">
    <img 
      src="/cac_logo.png" 
      alt="Corporate Affairs Commission (CAC Nigeria)" 
      className={`${className} object-contain shrink-0`}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== cacLogoImage) {
          target.src = cacLogoImage;
        }
      }}
    />
    {showText && (
      <div className="flex flex-col text-left leading-tight">
        <span className="font-black text-xs text-green-900 dark:text-green-300 uppercase">CAC</span>
        <span className="font-bold text-[10px] text-slate-600 dark:text-slate-400 uppercase">Corporate Affairs Comm.</span>
      </div>
    )}
  </div>
);

// OGEPA Official Emblem
export const OGEPALogo: React.FC<{ className?: string; showText?: boolean }> = ({ 
  className = "w-12 h-12",
  showText = false
}) => (
  <div className="inline-flex items-center gap-2.5">
    <img 
      src="/ogepa_logo.png" 
      alt="OGEPA Environmental Protection Agency" 
      className={`${className} object-contain shrink-0`}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.src !== ogepaLogoImage) {
          target.src = ogepaLogoImage;
        }
      }}
    />
    {showText && (
      <div className="flex flex-col text-left leading-tight">
        <span className="font-black text-xs text-amber-800 dark:text-amber-300 uppercase">OGEPA</span>
        <span className="font-bold text-[10px] text-slate-600 dark:text-slate-400 uppercase">Environmental Agency</span>
      </div>
    )}
  </div>
);

// EcoMark Official Scheme Emblem
export const EcoMarkLogo: React.FC<{ className?: string; showText?: boolean }> = ({ 
  className = "w-12 h-12",
  showText = false
}) => (
  <div className="inline-flex items-center gap-3">
    <div className={`${className} rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-md border border-slate-200 dark:border-slate-700 shrink-0 relative overflow-hidden`}>
      <img
        src="https://www.ecomark.com.tr/images/logo.png"
        alt="EcoMark Logo"
        className="w-full h-full object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
    {showText && (
      <div className="flex flex-col text-left leading-tight">
        <div className="flex items-center gap-1 font-black text-xs uppercase tracking-tight text-emerald-800 dark:text-emerald-300">
          <span>ECOMARK</span>
          <span className="text-[9px] bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 px-1 py-0.5 rounded font-mono">ARSO/AfCFTA</span>
        </div>
        <span className="font-bold text-[10px] text-slate-600 dark:text-slate-400 uppercase">Sustainability Scheme</span>
      </div>
    )}
  </div>
);

