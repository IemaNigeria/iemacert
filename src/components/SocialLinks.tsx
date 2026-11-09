import React from 'react';

export interface SocialLinkItem {
  id: string;
  name: string;
  url: string;
  ariaLabel: string;
  icon: (props: { className?: string }) => React.ReactElement;
  hoverColor: string;
}

export const SOCIAL_LINKS = [
  {
    id: 'twitter',
    name: 'X (Twitter)',
    url: 'https://x.com/iemacert',
    ariaLabel: 'Follow IEMA Standards on X / Twitter',
    hoverColor: 'hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://www.instagram.com/iemastandard/',
    ariaLabel: 'Follow IEMA Standards on Instagram',
    hoverColor: 'hover:text-pink-500 hover:border-pink-500/40 hover:bg-pink-500/10'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://www.facebook.com/iemacert',
    ariaLabel: 'Follow IEMA Standards on Facebook',
    hoverColor: 'hover:text-blue-500 hover:border-blue-500/40 hover:bg-blue-500/10'
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/iema-standards-limited/',
    ariaLabel: 'Connect with IEMA Standards on LinkedIn',
    hoverColor: 'hover:text-blue-400 hover:border-blue-400/40 hover:bg-blue-400/10'
  }
];

// Custom crisp SVG icons for accurate branding
export const XTwitterIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const FacebookIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

export const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.65 1.65 0 1 0 0 3.3 1.65 1.65 0 0 0 0-3.3z" />
  </svg>
);

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12.031 2C6.494 2 2 6.494 2 12.031c0 1.808.479 3.518 1.319 5.006L2 22.5l5.602-1.289a9.98 9.98 0 0 0 4.429 1.033h.005c5.536 0 10.03-4.494 10.03-10.031A10.03 10.03 0 0 0 12.031 2zm5.86 14.195c-.244.685-1.42 1.31-1.956 1.394-.516.082-1.189.117-1.921-.117a12.67 12.67 0 0 1-4.043-2.316 13.9 13.9 0 0 1-2.802-3.486c-.328-.562-.647-1.289-.647-2.025 0-.736.386-1.099.524-1.246.138-.146.302-.183.403-.183.101 0 .202.002.29.006.094.004.22-.036.344.263.129.308.44 1.074.478 1.152.038.078.064.169.013.27-.051.101-.077.164-.153.253-.076.089-.16.198-.228.266-.076.076-.155.158-.067.31.088.152.391.644.839 1.042.576.513 1.062.672 1.214.748.152.076.24.063.329-.038.089-.101.38-443.481-.595.101-.152.203-.127.342-.076.139.051.884.417 1.036.493.152.076.253.114.29.177.038.063.038.367-.206 1.052z" />
  </svg>
);

export const SocialMediaBar: React.FC<{
  variant?: 'topbar' | 'footer' | 'contact' | 'compact';
  className?: string;
}> = ({ variant = 'footer', className = '' }) => {
  if (variant === 'topbar') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`}>
        <a
          href="https://x.com/iemacert"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IEMA on X / Twitter"
          title="Follow IEMA Standards on X / Twitter"
          className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <XTwitterIcon className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.instagram.com/iemastandard/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IEMA on Instagram"
          title="Follow IEMA Standards on Instagram (@iemastandard)"
          className="p-1 rounded text-slate-300 hover:text-pink-400 hover:bg-slate-800 transition-colors"
        >
          <InstagramIcon className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.facebook.com/iemacert"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IEMA on Facebook"
          title="Follow IEMA Standards on Facebook"
          className="p-1 rounded text-slate-300 hover:text-blue-400 hover:bg-slate-800 transition-colors"
        >
          <FacebookIcon className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.linkedin.com/company/iema-standards-limited/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="IEMA on LinkedIn"
          title="Follow IEMA Standards on LinkedIn"
          className="p-1 rounded text-slate-300 hover:text-sky-400 hover:bg-slate-800 transition-colors"
        >
          <LinkedInIcon className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }

  if (variant === 'contact') {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
        <a
          href="https://x.com/iemacert"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs transition-all border border-slate-300 dark:border-slate-700 hover:scale-105"
        >
          <XTwitterIcon className="w-4 h-4" />
          <span>Twitter / X</span>
        </a>
        <a
          href="https://www.instagram.com/iemastandard/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-pink-50 dark:bg-pink-950/30 hover:bg-pink-100 dark:hover:bg-pink-900/40 text-pink-700 dark:text-pink-300 font-semibold text-xs transition-all border border-pink-200 dark:border-pink-800/50 hover:scale-105"
        >
          <InstagramIcon className="w-4 h-4" />
          <span>Instagram</span>
        </a>
        <a
          href="https://www.facebook.com/iemacert"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/30 hover:bg-blue-100 dark:hover:bg-blue-900/40 text-blue-700 dark:text-blue-300 font-semibold text-xs transition-all border border-blue-200 dark:border-blue-800/50 hover:scale-105"
        >
          <FacebookIcon className="w-4 h-4" />
          <span>Facebook</span>
        </a>
        <a
          href="https://www.linkedin.com/company/iema-standards-limited/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-sky-50 dark:bg-sky-950/30 hover:bg-sky-100 dark:hover:bg-sky-900/40 text-sky-700 dark:text-sky-300 font-semibold text-xs transition-all border border-sky-200 dark:border-sky-800/50 hover:scale-105"
        >
          <LinkedInIcon className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
      </div>
    );
  }

  // Footer / standard variant
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href="https://x.com/iemacert"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow IEMA Standards on X / Twitter"
        title="Follow IEMA Standards on X / Twitter"
        className="w-9 h-9 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-all hover:scale-110 shadow-sm"
      >
        <XTwitterIcon className="w-4 h-4" />
      </a>
      <a
        href="https://www.instagram.com/iemastandard/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow IEMA Standards on Instagram"
        title="Follow IEMA Standards on Instagram"
        className="w-9 h-9 rounded-full bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-600 hover:via-pink-600 hover:to-purple-600 text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-all hover:scale-110 shadow-sm"
      >
        <InstagramIcon className="w-4 h-4" />
      </a>
      <a
        href="https://www.facebook.com/iemacert"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow IEMA Standards on Facebook"
        title="Follow IEMA Standards on Facebook"
        className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#1877F2] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-all hover:scale-110 shadow-sm"
      >
        <FacebookIcon className="w-4 h-4" />
      </a>
      <a
        href="https://www.linkedin.com/company/iema-standards-limited/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with IEMA Standards on LinkedIn"
        title="Connect with IEMA Standards on LinkedIn"
        className="w-9 h-9 rounded-full bg-slate-800 hover:bg-[#0A66C2] text-slate-300 hover:text-white flex items-center justify-center border border-slate-700 transition-all hover:scale-110 shadow-sm"
      >
        <LinkedInIcon className="w-4 h-4" />
      </a>
    </div>
  );
};
