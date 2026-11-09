import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040817" />
      <stop offset="45%" stop-color="#070F2B" />
      <stop offset="100%" stop-color="#0F1E4A" />
    </linearGradient>
    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#FBBF24" />
    </linearGradient>
    <linearGradient id="accentLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#DC2626" />
      <stop offset="50%" stop-color="#F59E0B" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.5" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bgGrad)" />

  <!-- Top Decorative Accent Bar -->
  <rect x="0" y="0" width="1200" height="8" fill="url(#accentLine)" />

  <!-- Subtle Grid Pattern -->
  <g opacity="0.08" stroke="#38BDF8" stroke-width="1">
    <line x1="100" y1="0" x2="100" y2="630" />
    <line x1="300" y1="0" x2="300" y2="630" />
    <line x1="500" y1="0" x2="500" y2="630" />
    <line x1="700" y1="0" x2="700" y2="630" />
    <line x1="900" y1="0" x2="900" y2="630" />
    <line x1="1100" y1="0" x2="1100" y2="630" />
    <line x1="0" y1="100" x2="1200" y2="100" />
    <line x1="0" y1="250" x2="1200" y2="250" />
    <line x1="0" y1="400" x2="1200" y2="400" />
    <line x1="0" y1="550" x2="1200" y2="550" />
  </g>

  <!-- Glow orb in corner -->
  <circle cx="1050" cy="120" r="280" fill="#3B82F6" opacity="0.12" filter="blur(60px)" />
  <circle cx="150" cy="520" r="200" fill="#10B981" opacity="0.08" filter="blur(50px)" />

  <!-- Content Container -->
  <g transform="translate(80, 70)">
    
    <!-- Header Row: Brand Identity & Accreditation Tag -->
    <g>
      <!-- Shield Logo Icon -->
      <rect x="0" y="0" width="60" height="60" rx="14" fill="#0E2A47" stroke="#38BDF8" stroke-width="2" />
      <path d="M 30,12 L 48,19 C 48,34 38,44 30,48 C 22,44 12,34 12,19 Z" fill="#F59E0B" opacity="0.9" />
      <path d="M 24,30 L 28,34 L 37,23" fill="none" stroke="#040817" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />

      <!-- Company Name & Category -->
      <text x="76" y="26" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="900" fill="#FFFFFF" letter-spacing="1">
        IEMA STANDARDS LIMITED
      </text>
      <text x="76" y="48" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#F59E0B" letter-spacing="2">
        EGAC &amp; IAF MLA ACCREDITED CERTIFICATION BODY · CAB 12203
      </text>
    </g>

    <!-- Main Headline -->
    <text x="0" y="150" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="#FFFFFF" letter-spacing="-0.5">
      Accredited ISO Certification,
    </text>
    <text x="0" y="206" font-family="system-ui, -apple-system, sans-serif" font-size="44" font-weight="900" fill="url(#goldGrad)" letter-spacing="-0.5">
      Testing &amp; Compliance in Nigeria
    </text>

    <!-- Subtitle / Value Statement -->
    <text x="0" y="265" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" fill="#CBD5E1">
      Fast-track ISO 9001, 14001, 45001, 27001 certifications, PCI DSS v4.0.1 audits,
    </text>
    <text x="0" y="295" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" fill="#CBD5E1">
      NDT materials testing, and statutory data privacy (NDPA) compliance across Africa.
    </text>

    <!-- Core Badges Grid -->
    <g transform="translate(0, 345)">
      <!-- Badge 1: ISO Standards -->
      <g transform="translate(0, 0)">
        <rect width="240" height="68" rx="12" fill="#0B1739" stroke="#334155" stroke-width="1.5" />
        <circle cx="34" cy="34" r="16" fill="#F59E0B" opacity="0.15" />
        <text x="34" y="39" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" fill="#F59E0B">★</text>
        <text x="62" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">14+ ISO Standards</text>
        <text x="62" y="48" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#94A3B8">9001, 14001, 27001, 45001</text>
      </g>

      <!-- Badge 2: PCI DSS -->
      <g transform="translate(260, 0)">
        <rect width="240" height="68" rx="12" fill="#0B1739" stroke="#334155" stroke-width="1.5" />
        <circle cx="34" cy="34" r="16" fill="#10B981" opacity="0.15" />
        <text x="34" y="40" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#10B981">💳</text>
        <text x="62" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">PCI DSS v4.0.1</text>
        <text x="62" y="48" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#94A3B8">RoC, SAQ &amp; ASV Scanning</text>
      </g>

      <!-- Badge 3: NDT & Laboratory -->
      <g transform="translate(520, 0)">
        <rect width="240" height="68" rx="12" fill="#0B1739" stroke="#334155" stroke-width="1.5" />
        <circle cx="34" cy="34" r="16" fill="#38BDF8" opacity="0.15" />
        <text x="34" y="40" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#38BDF8">⚗</text>
        <text x="62" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">NDT &amp; Lab Testing</text>
        <text x="62" y="48" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#94A3B8">ISO/IEC 17025 Compliant</text>
      </g>

      <!-- Badge 4: Training & DPCO -->
      <g transform="translate(780, 0)">
        <rect width="250" height="68" rx="12" fill="#0B1739" stroke="#334155" stroke-width="1.5" />
        <circle cx="34" cy="34" r="16" fill="#A855F7" opacity="0.15" />
        <text x="34" y="39" text-anchor="middle" font-family="system-ui, sans-serif" font-size="14" fill="#A855F7">🎓</text>
        <text x="62" y="30" font-family="system-ui, sans-serif" font-size="14" font-weight="800" fill="#FFFFFF">Lead Auditor Training</text>
        <text x="62" y="48" font-family="system-ui, sans-serif" font-size="11" font-weight="500" fill="#94A3B8">IRCA / CQI &amp; OGTAN Approved</text>
      </g>
    </g>

    <!-- Footer Row: Contact, Location & Domain -->
    <g transform="translate(0, 460)">
      <line x1="0" y1="0" x2="1040" y2="0" stroke="#1E293B" stroke-width="1" />
      
      <!-- Locations -->
      <text x="0" y="30" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#94A3B8">
        📍 Lagos Head Office: <tspan fill="#F1F5F9">27A Alternative Drive, Chevron, Lekki</tspan>
      </text>
      <text x="470" y="30" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#94A3B8">
        📍 Abuja Office: <tspan fill="#F1F5F9">Maitama, FCT</tspan>
      </text>

      <!-- Phone & Domain -->
      <text x="0" y="55" font-family="system-ui, sans-serif" font-size="13" font-weight="700" fill="#94A3B8">
        📞 Tel: <tspan fill="#10B981" font-family="monospace">+234 813 483 1027</tspan> / <tspan fill="#10B981" font-family="monospace">+234 806 964 0868</tspan>
      </text>
      <text x="1040" y="55" text-anchor="end" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#F59E0B">
        www.iemacert.com
      </text>
    </g>

  </g>
</svg>
`;

const resvg = new Resvg(svg, {
  fitTo: { mode: 'width', value: 1200 },
});
const pngData = resvg.render().asPng();

fs.writeFileSync(path.resolve('public/og-image.png'), pngData);
fs.writeFileSync(path.resolve('public/og-image.svg'), svg);
console.log('Successfully created public/og-image.png (1200x630) and public/og-image.svg');
