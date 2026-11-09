import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

// Define the exact SVG code for each of the 13 logos
const logos = {
  // 1. EXXONMOBIL
  'EXXONMOBIL': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 350" width="600" height="350">
    <rect width="600" height="350" fill="#FFFFFF"/>
    <g transform="translate(45, 120)">
      <!-- E -->
      <path d="M 0,0 L 40,0 L 40,16 L 16,16 L 16,38 L 36,38 L 36,54 L 16,54 L 16,79 L 42,79 L 42,95 L 0,95 Z" fill="#EE1C25"/>
      
      <!-- Interlocking XX -->
      <!-- First X left bar -->
      <polygon points="50,22 66,22 108,95 92,95" fill="#EE1C25"/>
      <!-- First X right bar crossing down to become bottom of second X -->
      <polygon points="86,22 102,22 56,95 40,95" fill="#EE1C25"/>
      <!-- Connection between X's -->
      <polygon points="84,22 136,122 119,122 68,22" fill="#EE1C25"/>
      <!-- Second X left bar -->
      <polygon points="112,22 128,22 82,95 66,95" fill="#EE1C25"/>
      <!-- Second X right bar -->
      <polygon points="126,22 142,22 96,95 80,95" fill="#EE1C25"/>

      <!-- o -->
      <path d="M 172,20 C 153,20 138,36 138,58 C 138,80 153,96 172,96 C 191,96 206,80 206,58 C 206,36 191,20 172,20 Z M 172,36 C 182,36 190,46 190,58 C 190,70 182,80 172,80 C 162,80 154,70 154,58 C 154,46 162,36 172,36 Z" fill="#EE1C25"/>
      
      <!-- n -->
      <path d="M 215,22 L 230,22 L 230,34 C 235,25 244,20 255,20 C 270,20 279,30 279,46 L 279,95 L 263,95 L 263,49 C 263,39 257,34 249,34 C 240,34 231,40 231,52 L 231,95 L 215,95 Z" fill="#EE1C25"/>

      <!-- M -->
      <path d="M 292,0 L 312,0 L 328,60 L 344,0 L 364,0 L 364,95 L 349,95 L 349,27 L 334,84 L 322,84 L 307,27 L 307,95 L 292,95 Z" fill="#EE1C25"/>

      <!-- o -->
      <path d="M 395,20 C 376,20 361,36 361,58 C 361,80 376,96 395,96 C 414,96 429,80 429,58 C 429,36 414,20 395,20 Z M 395,36 C 405,36 413,46 413,58 C 413,70 405,80 395,80 C 385,80 377,70 377,58 C 377,46 385,36 395,36 Z" fill="#EE1C25"/>

      <!-- b -->
      <path d="M 439,0 L 455,0 L 455,33 C 460,25 469,20 480,20 C 499,20 513,36 513,58 C 513,80 499,96 480,96 C 469,96 460,91 455,83 L 455,95 L 439,95 Z M 475,36 C 465,36 455,45 455,58 C 455,71 465,80 475,80 C 486,80 497,71 497,58 C 497,45 486,36 475,36 Z" fill="#EE1C25"/>

      <!-- i -->
      <rect x="522" y="22" width="16" height="73" fill="#EE1C25"/>
      <circle cx="530" cy="8" r="8" fill="#EE1C25"/>

      <!-- l -->
      <rect x="546" y="0" width="16" height="95" fill="#EE1C25"/>
    </g>
  </svg>`,

  // 2. IRCA
  'IRCA': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
    <rect width="400" height="300" fill="#FFFFFF"/>
    <g transform="translate(50, 90)">
      <!-- Ochre/Bronze Globe on Left -->
      <g transform="translate(10, 0)">
        <circle cx="50" cy="50" r="48" fill="#C4914A" />
        <!-- Globe latitude lines -->
        <line x1="2" y1="50" x2="98" y2="50" stroke="#FFFFFF" stroke-width="4.5"/>
        <line x1="14" y1="28" x2="86" y2="28" stroke="#FFFFFF" stroke-width="4"/>
        <line x1="14" y1="72" x2="86" y2="72" stroke="#FFFFFF" stroke-width="4"/>
        <!-- Globe longitude curves -->
        <line x1="50" y1="2" x2="50" y2="98" stroke="#FFFFFF" stroke-width="4.5"/>
        <ellipse cx="50" cy="50" rx="30" ry="48" fill="none" stroke="#FFFFFF" stroke-width="4"/>
        <ellipse cx="50" cy="50" rx="44" ry="48" fill="none" stroke="#FFFFFF" stroke-width="4"/>
      </g>
      
      <!-- IRCA Typography on Right -->
      <text x="135" y="70" font-family="system-ui, -apple-system, sans-serif" font-size="78" font-weight="300" fill="#787C83" letter-spacing="4">IRCA</text>
    </g>
  </svg>`,

  // 3. ISPON
  'ISPON': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <rect width="500" height="500" fill="#FFFFFF"/>
    <!-- Outer Black Circle -->
    <circle cx="250" cy="235" r="160" fill="#111111" />
    <circle cx="250" cy="235" r="154" fill="none" stroke="#FFFFFF" stroke-width="3" />
    
    <!-- Outer Arc Text -->
    <path id="isponTopArc" d="M 120,235 A 130,130 0 0,1 380,235" fill="none"/>
    <text font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#FFE500" letter-spacing="2">
      <textPath href="#isponTopArc" startOffset="50%" text-anchor="middle">INSTITUTE OF SAFETY PROFESSIONALS OF NIGERIA</textPath>
    </text>

    <!-- Inner White Core -->
    <circle cx="250" cy="235" r="105" fill="#FFFFFF" />
    
    <!-- Hardhat -->
    <path d="M 215,200 C 215,160 285,160 285,200 C 295,202 295,210 285,210 L 215,210 C 205,210 205,202 215,200 Z" fill="#FBBF24" stroke="#D97706" stroke-width="2"/>
    <rect x="245" y="165" width="10" height="35" rx="3" fill="#F59E0B"/>
    
    <!-- Safety Goggles -->
    <rect x="220" y="196" width="60" height="15" rx="6" fill="#3B82F6" stroke="#1D4ED8" stroke-width="2"/>
    <rect x="226" y="200" width="20" height="7" rx="3" fill="#FFFFFF"/>
    <rect x="254" y="200" width="20" height="7" rx="3" fill="#FFFFFF"/>

    <!-- Respirator Mask -->
    <path d="M 230,215 L 270,215 L 265,245 L 250,252 L 235,245 Z" fill="#374151"/>
    <circle cx="225" cy="232" r="8" fill="#1F2937" stroke="#4B5563" stroke-width="2"/>
    <circle cx="275" cy="232" r="8" fill="#1F2937" stroke="#4B5563" stroke-width="2"/>

    <!-- Fire Extinguisher on Left -->
    <g transform="translate(170, 195) rotate(-15)">
      <rect x="0" y="8" width="18" height="36" rx="6" fill="#DC2626"/>
      <rect x="5" y="2" width="8" height="6" fill="#4B5563"/>
      <line x1="9" y1="2" x2="1" y2="10" stroke="#1F2937" stroke-width="3"/>
      <circle cx="9" cy="22" r="4" fill="#FFFFFF"/>
    </g>

    <!-- Safety Gloves on Right -->
    <g transform="translate(290, 195) rotate(15)">
      <path d="M 5,8 C 5,4 12,0 18,5 C 24,0 30,5 30,10 C 35,7 40,12 38,18 C 42,16 45,22 40,28 L 30,42 L 8,35 Z" fill="#312E81"/>
    </g>

    <!-- Gear Cog in Center Base -->
    <g transform="translate(250, 260)">
      <circle cx="0" cy="0" r="14" fill="#111111"/>
      <rect x="-16" y="-3" width="32" height="6" fill="#111111"/>
      <rect x="-3" y="-16" width="6" height="32" fill="#111111"/>
      <circle cx="0" cy="0" r="6" fill="#FFFFFF"/>
    </g>

    <!-- Lower Circular text -->
    <path id="isponBotArc" d="M 155,275 A 110,110 0 0,0 345,275" fill="none"/>
    <text font-family="system-ui, sans-serif" font-size="10.5" font-weight="900" fill="#FFFFFF" letter-spacing="1">
      <textPath href="#isponBotArc" startOffset="50%" text-anchor="middle">ISPON ACT 2014 (ACT NO.2)</textPath>
    </text>

    <!-- Banner Ribbon: CERTIFY-REGULATE-ENFORCE -->
    <g transform="translate(250, 345)">
      <path d="M -140,-15 L 140,-15 L 125,12 L 140,16 L -140,16 L -125,12 Z" fill="#111111" stroke="#FFFFFF" stroke-width="2"/>
      <text x="0" y="4" font-family="system-ui, sans-serif" font-size="13" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="1.5">CERTIFY-REGULATE-ENFORCE</text>
      
      <!-- Bottom Scroll: ESTABLISHED 2014 -->
      <rect x="-70" y="22" width="140" height="24" rx="12" fill="#111111" stroke="#FFE500" stroke-width="2"/>
      <text x="0" y="38" font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#FFE500" text-anchor="middle" letter-spacing="1">ESTABLISHED 2014</text>
    </g>
  </svg>`,

  // 4. LASEPA
  'LASEPA': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
    <rect width="600" height="300" fill="#FFFFFF"/>
    <g transform="translate(30, 70)">
      <!-- Left Seal -->
      <g transform="translate(60, 80)">
        <circle cx="0" cy="0" r="60" fill="#15803D" />
        <circle cx="0" cy="0" r="54" fill="#FFFFFF" />
        
        <!-- House and environmental landscape inside seal -->
        <rect x="-36" y="-20" width="22" height="28" fill="#15803D" rx="2"/>
        <polygon points="-40,-20 -25,-36 -10,-20" fill="#DC2626"/>
        <rect x="-30" y="-12" width="10" height="20" fill="#FFFFFF"/>
        
        <!-- Palm Tree -->
        <path d="M 12,5 Q 15,-15 18,-25" stroke="#78350F" stroke-width="4" fill="none"/>
        <circle cx="18" cy="-25" r="16" fill="#16A34A"/>
        
        <!-- Green ground -->
        <ellipse cx="0" cy="16" rx="46" ry="12" fill="#15803D"/>
        
        <!-- Red LASEPA banner at base of seal -->
        <path d="M -46,14 Q 0,38 46,14 L 38,36 Q 0,56 -38,36 Z" fill="#DC2626"/>
        <text x="0" y="38" font-family="system-ui, sans-serif" font-size="12" font-weight="900" fill="#FFFFFF" text-anchor="middle">LASEPA</text>
        
        <!-- Circular text around seal -->
        <path id="lasepaSealArc" d="M -48,-10 A 50,50 0 1,1 48,-10" fill="none"/>
        <text font-family="system-ui, sans-serif" font-size="6.5" font-weight="900" fill="#15803D" letter-spacing="0.8">
          <textPath href="#lasepaSealArc" startOffset="50%" text-anchor="middle">LAGOS STATE ENVIRONMENTAL PROTECTION AGENCY</textPath>
        </text>
      </g>

      <!-- Vertical Red Divider -->
      <line x1="165" y1="30" x2="165" y2="130" stroke="#DC2626" stroke-width="5"/>

      <!-- Right Typography -->
      <g transform="translate(185, 30)">
        <text x="0" y="62" font-family="serif" font-size="76" font-weight="900" fill="#15803D" letter-spacing="1">LASEPA</text>
        <text x="2" y="92" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#1F2937" letter-spacing="0.5">LAGOS STATE ENVIRONMENTAL</text>
        <text x="2" y="114" font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#1F2937" letter-spacing="0.5">PROTECTION AGENCY</text>
      </g>
    </g>
  </svg>`,

  // 5. NCDMB
  'NCDMB': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <rect width="500" height="500" fill="#FFFFFF"/>
    <!-- Outer 20-Tooth Green Cog -->
    <g transform="translate(250, 250)">
      <circle cx="0" cy="0" r="190" fill="#008751" />
      <!-- Gear Teeth -->
      ${Array.from({ length: 20 }).map((_, i) => `
        <rect x="-24" y="-220" width="48" height="40" rx="4" fill="#008751" transform="rotate(${i * 18})" />
      `).join('')}
      
      <!-- Inner Yellow Ring -->
      <circle cx="0" cy="0" r="160" fill="#FBBF24" />
      <circle cx="0" cy="0" r="125" fill="#FEE382" />
      
      <!-- Circular Ring Text -->
      <path id="ncdmbTopArc" d="M -135,0 A 135,135 0 1,1 135,0" fill="none"/>
      <text font-family="system-ui, sans-serif" font-size="16" font-weight="900" fill="#111111" letter-spacing="1">
        <textPath href="#ncdmbTopArc" startOffset="50%" text-anchor="middle">NIGERIAN CONTENT DEVELOPMENT &amp; MONITORING BOARD</textPath>
      </text>

      <!-- Center Circle Segments (Y-divided) -->
      <circle cx="0" cy="0" r="110" fill="#FFFFFF" stroke="#111111" stroke-width="4"/>
      <line x1="0" y1="0" x2="0" y2="-110" stroke="#111111" stroke-width="4"/>
      <line x1="0" y1="0" x2="-95" y2="55" stroke="#111111" stroke-width="4"/>
      <line x1="0" y1="0" x2="95" y2="55" stroke="#111111" stroke-width="4"/>

      <!-- Top Sector: Industrial Worker -->
      <g transform="translate(0, -50)">
        <circle cx="0" cy="-25" r="14" fill="#1E3A8A"/>
        <path d="M -22,15 L -10,-10 L 10,-10 L 22,15 Z" fill="#2563EB"/>
        <polygon points="-25,20 25,20 20,28 -20,28" fill="#475569"/>
      </g>

      <!-- Left Sector: Oil Derrick -->
      <g transform="translate(-45, 25)">
        <polygon points="0,-35 -18,25 18,25" fill="none" stroke="#111111" stroke-width="3"/>
        <line x1="-10" y1="-10" x2="10" y2="-10" stroke="#111111" stroke-width="2"/>
        <line x1="-14" y1="8" x2="14" y2="8" stroke="#111111" stroke-width="2"/>
        <rect x="-5" y="-40" width="10" height="8" fill="#111111"/>
      </g>

      <!-- Right Sector: Interlocking Gears -->
      <g transform="translate(45, 25)">
        <circle cx="-10" cy="-5" r="18" fill="none" stroke="#111111" stroke-width="5"/>
        <circle cx="15" cy="10" r="14" fill="none" stroke="#111111" stroke-width="4"/>
      </g>

      <!-- Bottom Arched NCDMB Badge -->
      <path d="M -75,85 Q 0,115 75,85 L 65,115 Q 0,140 -65,115 Z" fill="#008751"/>
      <text x="0" y="115" font-family="system-ui, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="2">NCDMB</text>
    </g>
  </svg>`,

  // 6. NMDPRA
  'NMDPRA': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <rect width="500" height="500" fill="#FFFFFF"/>
    <g transform="translate(250, 250)">
      <!-- Outer 16-Tooth Yellow Gear -->
      <circle cx="0" cy="0" r="160" fill="#EAB308" />
      ${Array.from({ length: 16 }).map((_, i) => `
        <rect x="-20" y="-185" width="40" height="35" rx="4" fill="#EAB308" transform="rotate(${i * 22.5})" />
      `).join('')}

      <!-- Outer Ring with Authority Text -->
      <circle cx="0" cy="0" r="135" fill="#FFFFFF" />
      
      <!-- Center Green Teardrop / Oil Drop -->
      <path d="M 0,-130 C 50,-80 100,-20 100,35 A 100,100 0 1,1 -100,35 C -100,-20 -50,-80 0,-130 Z" fill="#14532D" />
      
      <!-- Mini Nigerian Coat of Arms in Teardrop Apex -->
      <g transform="translate(0, -95) scale(0.35)">
        <circle cx="0" cy="0" r="28" fill="#FFFFFF"/>
        <path d="M 0,-18 L 8,-6 L 16,-10 L 10,6 L 0,18 L -10,6 L -16,-10 L -8,-6 Z" fill="#DC2626"/>
      </g>

      <!-- Center White Circle Split into 3 Sectors -->
      <circle cx="0" cy="20" r="72" fill="#FFFFFF" stroke="#14532D" stroke-width="4"/>
      <line x1="0" y1="20" x2="0" y2="-52" stroke="#14532D" stroke-width="3"/>
      <line x1="0" y1="20" x2="-62" y2="56" stroke="#14532D" stroke-width="3"/>
      <line x1="0" y1="20" x2="62" y2="56" stroke="#14532D" stroke-width="3"/>

      <!-- Pipeline Valve in Sector 1 (Top Left) -->
      <g transform="translate(-25, -15) scale(0.7)">
        <line x1="-20" y1="0" x2="20" y2="0" stroke="#1F2937" stroke-width="6"/>
        <rect x="-8" y="-16" width="16" height="8" rx="2" fill="#DC2626"/>
        <line x1="0" y1="-12" x2="0" y2="0" stroke="#1F2937" stroke-width="4"/>
      </g>

      <!-- Refinery Towers in Sector 2 (Top Right) -->
      <g transform="translate(25, -15) scale(0.65)">
        <rect x="-12" y="-20" width="10" height="35" fill="#374151" rx="2"/>
        <rect x="4" y="-12" width="12" height="27" fill="#374151" rx="2"/>
        <line x1="-7" y1="-28" x2="-7" y2="-20" stroke="#DC2626" stroke-width="3"/>
      </g>

      <!-- Fuel Nozzle & Drop in Sector 3 (Bottom) -->
      <g transform="translate(0, 50) scale(0.7)">
        <path d="M -18,-10 L 0,8 L 10,0 L 4,-6" fill="none" stroke="#111111" stroke-width="4"/>
        <circle cx="12" cy="14" r="5" fill="#111111"/>
      </g>

      <!-- Circular Authority Text Around Gear -->
      <path id="nmdpraArc" d="M -110,-40 A 120,120 0 1,0 110,-40" fill="none"/>
      <text font-family="system-ui, sans-serif" font-size="10.5" font-weight="900" fill="#111111" letter-spacing="1">
        <textPath href="#nmdpraArc" startOffset="50%" text-anchor="middle">NIGERIAN MIDSTREAM AND DOWNSTREAM PETROLEUM REGULATORY AUTHORITY</textPath>
      </text>
    </g>
  </svg>`,

  // 7. NUPRC
  'NUPRC': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <rect width="500" height="500" fill="#FFFFFF"/>
    <g transform="translate(250, 250)">
      <!-- Outer Green Ring with Authority Text -->
      <circle cx="0" cy="0" r="185" fill="#15803D" />
      <circle cx="0" cy="0" r="150" fill="#FFFFFF" />

      <!-- Circular Text on Green Ring -->
      <path id="nuprcTopArc" d="M -155,0 A 155,155 0 1,1 155,0" fill="none"/>
      <text font-family="system-ui, sans-serif" font-size="15.5" font-weight="900" fill="#FFFFFF" letter-spacing="1">
        <textPath href="#nuprcTopArc" startOffset="50%" text-anchor="middle">NIGERIAN UPSTREAM PETROLEUM REGULATORY COMMISSION</textPath>
      </text>

      <!-- Inner 14-Tooth Yellow Gear -->
      <circle cx="0" cy="0" r="125" fill="#FACC15" />
      ${Array.from({ length: 14 }).map((_, i) => `
        <rect x="-16" y="-140" width="32" height="25" rx="3" fill="#FACC15" transform="rotate(${i * (360/14)})" />
      `).join('')}

      <!-- Center Circle with Offshore Rig and Sunset Horizon -->
      <circle cx="0" cy="0" r="95" fill="#FFFFFF" />
      <clipPath id="nuprcCenterClip">
        <circle cx="0" cy="0" r="95" />
      </clipPath>
      <g clip-path="url(#nuprcCenterClip)">
        <!-- Sunset Gradient Sky -->
        <rect x="-95" y="-95" width="190" height="190" fill="#EA580C"/>
        <rect x="-95" y="-40" width="190" height="80" fill="#F97316"/>
        <rect x="-95" y="0" width="190" height="50" fill="#FBBF24"/>
        
        <!-- Ocean Waves -->
        <ellipse cx="0" cy="65" rx="100" ry="35" fill="#0284C7"/>
        
        <!-- Offshore Production Rig -->
        <g transform="translate(10, 0)">
          <!-- Rig Platform and Legs -->
          <rect x="-45" y="5" width="70" height="12" fill="#1E293B"/>
          <line x1="-35" y1="17" x2="-45" y2="60" stroke="#1E293B" stroke-width="5"/>
          <line x1="-10" y1="17" x2="-10" y2="60" stroke="#1E293B" stroke-width="5"/>
          <line x1="15" y1="17" x2="25" y2="60" stroke="#1E293B" stroke-width="5"/>
          
          <!-- Derrick / Drilling Tower -->
          <polygon points="-10,-55 -25,5 5,5" fill="none" stroke="#1E293B" stroke-width="4"/>
          <line x1="-20" y1="-25" x2="0" y2="-25" stroke="#1E293B" stroke-width="3"/>
          <line x1="-22" y1="-5" x2="3" y2="-5" stroke="#1E293B" stroke-width="3"/>
          
          <!-- Crane -->
          <line x1="10" y1="5" x2="32" y2="-35" stroke="#1E293B" stroke-width="4"/>
          <line x1="32" y1="-35" x2="32" y2="-10" stroke="#1E293B" stroke-width="2"/>
          
          <!-- Approaching Helicopter -->
          <g transform="translate(-55, -25) scale(0.6)">
            <ellipse cx="0" cy="0" rx="14" ry="8" fill="#1E293B"/>
            <line x1="-16" y1="-8" x2="16" y2="-8" stroke="#1E293B" stroke-width="2"/>
            <line x1="12" y1="0" x2="22" y2="-6" stroke="#1E293B" stroke-width="2"/>
            <rect x="-6" y="8" width="12" height="2" fill="#1E293B"/>
          </g>
        </g>
      </g>

      <!-- Bottom Green Block: NUPRC -->
      <path d="M -60,110 L 60,110 L 45,150 L -45,150 Z" fill="#15803D" stroke="#FFFFFF" stroke-width="3"/>
      <text x="0" y="138" font-family="system-ui, sans-serif" font-size="20" font-weight="900" fill="#FACC15" text-anchor="middle" letter-spacing="1">NUPRC</text>
    </g>
  </svg>`,

  // 8. OGTAN
  'OGTAN': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 650 300" width="650" height="300">
    <rect width="650" height="300" fill="#FFFFFF"/>
    <g transform="translate(30, 80)">
      <!-- Left OGTAN Icon -->
      <g transform="translate(60, 60)">
        <!-- Green Ring Outer -->
        <circle cx="0" cy="0" r="50" fill="none" stroke="#235028" stroke-width="12"/>
        
        <!-- Golden Oil Drop / Flame -->
        <path d="M 0,-32 C 16,-12 28,6 24,24 C 20,40 -20,40 -24,24 C -28,6 -16,-12 0,-32 Z" fill="#E5A00D"/>
        
        <!-- Inner Green Droplet Leaf -->
        <path d="M 0,-15 C 8,-2 14,8 12,18 C 10,26 -10,26 -12,18 C -14,8 -8,-2 0,-15 Z" fill="#235028"/>
        
        <!-- Golden Ribbon at Base -->
        <path d="M -44,22 Q 0,40 44,22 L 40,42 Q 0,60 -40,42 Z" fill="#E5A00D"/>
        <text x="0" y="46" font-family="system-ui, sans-serif" font-size="14" font-weight="900" fill="#111111" text-anchor="middle" letter-spacing="1">OGTAN</text>
      </g>

      <!-- Right Typography -->
      <g transform="translate(145, 30)">
        <!-- Line 1: OIL & GAS TRAINERS -->
        <text x="0" y="45" font-family="system-ui, sans-serif" font-size="44" font-weight="900">
          <tspan fill="#235028">OIL </tspan>
          <tspan fill="#E5A00D">&amp; </tspan>
          <tspan fill="#235028">GAS TRAINERS</tspan>
        </text>
        <!-- Line 2: ASSOCIATION OF NIGERIA -->
        <text x="0" y="85" font-family="system-ui, sans-serif" font-size="30" font-weight="900" fill="#111111" letter-spacing="1">
          ASSOCIATION OF NIGERIA
        </text>
      </g>
    </g>
  </svg>`,

  // 9. SHELL
  'SHELL': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
    <rect width="600" height="300" fill="#FFFFFF"/>
    <g transform="translate(60, 60)">
      <!-- Pecten Scallop Shell Emblem -->
      <g transform="translate(60, 80)">
        <!-- Outer Red Perimeter Shape -->
        <path d="M 0,-65 C 38,-65 65,-40 68,0 C 70,30 45,60 25,65 L -25,65 C -45,60 -70,30 -68,0 C -65,-40 -38,-65 0,-65 Z" fill="#FB0000" />
        
        <!-- Yellow Shell Body & Ribs -->
        <path d="M 0,-56 C 32,-56 56,-34 58,0 C 60,26 38,52 20,56 L -20,56 C -38,52 -60,26 -58,0 C -56,-34 -32,-56 0,-56 Z" fill="#FFD500"/>
        
        <!-- 7 Radiating Red Grooves -->
        <line x1="0" y1="56" x2="0" y2="-56" stroke="#FB0000" stroke-width="5"/>
        <line x1="0" y1="56" x2="22" y2="-52" stroke="#FB0000" stroke-width="5"/>
        <line x1="0" y1="56" x2="-22" y2="-52" stroke="#FB0000" stroke-width="5"/>
        <line x1="0" y1="56" x2="42" y2="-38" stroke="#FB0000" stroke-width="5"/>
        <line x1="0" y1="56" x2="-42" y2="-38" stroke="#FB0000" stroke-width="5"/>
        <line x1="0" y1="56" x2="54" y2="-12" stroke="#FB0000" stroke-width="5"/>
        <line x1="0" y1="56" x2="-54" y2="-12" stroke="#FB0000" stroke-width="5"/>
        
        <!-- Red Base Bar -->
        <rect x="-24" y="56" width="48" height="10" rx="3" fill="#FB0000"/>
      </g>

      <!-- Shell Typography on Right -->
      <g transform="translate(170, 40)">
        <text x="0" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="115" font-weight="900" fill="#FB0000" letter-spacing="-2">Shell</text>
      </g>
    </g>
  </svg>`,

  // 10. SON
  'SON': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <rect width="500" height="500" fill="#FFFFFF"/>
    <g transform="translate(250, 230)">
      <!-- Green Outer Circle Ring -->
      <circle cx="0" cy="0" r="130" fill="none" stroke="#009639" stroke-width="26" />
      
      <!-- Top Curved Text: STANDARDS ORGANISATION OF NIGERIA -->
      <path id="sonTopArc" d="M -110,-10 A 110,110 0 1,1 110,-10" fill="none"/>
      <text font-family="system-ui, sans-serif" font-size="11" font-weight="900" fill="#009639" letter-spacing="1">
        <textPath href="#sonTopArc" startOffset="50%" text-anchor="middle">STANDARDS ORGANISATION OF NIGERIA</textPath>
      </text>

      <!-- Center Nigerian Coat of Arms -->
      <g transform="translate(0, -45) scale(0.6)">
        <circle cx="0" cy="0" r="22" fill="#FFFFFF"/>
        <path d="M 0,-14 L 6,-4 L 12,-8 L 8,4 L 0,14 L -8,4 L -12,-8 L -6,-4 Z" fill="#DC2626"/>
      </g>

      <!-- Stylized Center Text: son -->
      <text x="0" y="32" font-family="system-ui, sans-serif" font-size="88" font-weight="900" fill="#009639" text-anchor="middle" letter-spacing="-3">son</text>

      <!-- Golden Swooping Checkmark -->
      <path d="M -90,40 L -60,95 Q -30,60 90,30 L 95,22 Q -30,48 -55,75 Z" fill="#C8A261" />
    </g>

    <!-- Bottom Subtitle Text -->
    <text x="250" y="420" font-family="system-ui, sans-serif" font-size="18" font-weight="800" fill="#009639" text-anchor="middle" letter-spacing="1.5">
      STANDARDS ORGANISATION OF NIGERIA
    </text>
  </svg>`,

  // 11. ASTM
  'ASTM': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <rect width="500" height="500" fill="#FFFFFF"/>
    <g transform="translate(250, 210)">
      <!-- Outer Orbiting Ellipse Ring -->
      <ellipse cx="0" cy="0" rx="140" ry="50" fill="none" stroke="#0C529C" stroke-width="6" transform="rotate(-15)"/>
      
      <!-- Central Blue Globe Sphere -->
      <circle cx="0" cy="0" r="95" fill="#0C529C" />
      
      <!-- White Cutouts to Form Distinctive Bold "ASTM" Lettering in Globe -->
      <!-- A -->
      <polygon points="-70,55 -55,-60 -40,55 -48,55 -55,0 -62,55" fill="#FFFFFF"/>
      <!-- S -->
      <path d="M -15,-60 L 15,-60 L 15,-42 L -3,-42 L -3,-12 L 15,-12 L 15,55 L -15,55 L -15,35 L 3,35 L 3,6 L -15,6 Z" fill="#FFFFFF"/>
      <!-- T -->
      <polygon points="20,-60 60,-60 60,-42 46,-42 46,55 34,55 34,-42 20,-42" fill="#FFFFFF"/>
      <!-- M -->
      <polygon points="65,-60 76,-60 84,-20 92,-60 103,-60 103,55 94,55 94,-10 88,20 80,20 74,-10 74,55 65,55" fill="#FFFFFF"/>
    </g>

    <!-- Horizontal Divider Line -->
    <line x1="120" y1="340" x2="380" y2="340" stroke="#0C529C" stroke-width="4"/>

    <!-- Text 1: INTERNATIONAL -->
    <text x="250" y="380" font-family="system-ui, sans-serif" font-size="28" font-weight="900" fill="#0C529C" text-anchor="middle" letter-spacing="1.5">
      INTERNATIONAL
    </text>

    <!-- Text 2: Standards Worldwide -->
    <text x="250" y="420" font-family="Georgia, serif" font-size="22" font-style="italic" fill="#0C529C" text-anchor="middle" letter-spacing="1">
      Standards Worldwide
    </text>
  </svg>`,

  // 12. CHEVRON
  'CHEVRON': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
    <rect width="500" height="500" fill="#FFFFFF"/>
    <!-- Top Wordmark: Chevron -->
    <text x="250" y="160" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="800" fill="#005BAA" text-anchor="middle" letter-spacing="-1">
      Chevron
    </text>

    <g transform="translate(250, 200)">
      <!-- Top Chevron Ribbon -->
      <!-- Sky Blue Left Wing -->
      <polygon points="-120,0 0,60 0,110 -120,50" fill="#00A3E0"/>
      <!-- Royal Blue Right Wing -->
      <polygon points="120,0 0,60 0,110 120,50" fill="#0066B2"/>

      <!-- Lower Chevron Ribbon -->
      <!-- Bright Red Left Wing -->
      <polygon points="-120,70 0,130 0,180 -120,120" fill="#E31837"/>
      <!-- Deep Red Right Wing -->
      <polygon points="120,70 0,130 0,180 120,120" fill="#A6192E"/>
    </g>
  </svg>`,

  // 13. COREN
  'COREN': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300" width="600" height="300">
    <rect width="600" height="300" fill="#FFFFFF"/>
    <g transform="translate(60, 60)">
      <!-- Nigerian Coat of Arms on Left -->
      <g transform="translate(70, 70) scale(1.1)">
        <!-- Red Eagle -->
        <polygon points="0,-48 8,-36 18,-42 12,-24 0,-10 -12,-24 -18,-42 -8,-36" fill="#DC2626"/>
        <!-- Shield -->
        <path d="M -22,-10 L 22,-10 L 20,26 Q 0,44 -20,26 Z" fill="#111111"/>
        <!-- White Y-Pall on Shield -->
        <path d="M -16,-10 L -4,4 L -4,34 L 4,34 L 4,4 L 16,-10 Z" fill="#FFFFFF"/>
        <!-- White Horses on Sides -->
        <!-- Left Horse -->
        <path d="M -26,-20 Q -45,-10 -35,15 L -42,32 L -32,32 L -25,12 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5"/>
        <!-- Right Horse -->
        <path d="M 26,-20 Q 45,-10 35,15 L 42,32 L 32,32 L 25,12 Z" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.5"/>
        <!-- Green & White Torse Base -->
        <rect x="-30" y="32" width="60" height="6" fill="#15803D" rx="2"/>
        <rect x="-38" y="38" width="76" height="5" fill="#DC2626" rx="1"/>
      </g>

      <!-- Green Capsule Frame on Right -->
      <g transform="translate(190, 40)">
        <!-- Outer Green Pill Border -->
        <rect x="0" y="0" width="280" height="75" rx="12" fill="#008751" stroke="#008751" stroke-width="6"/>
        <rect x="6" y="6" width="268" height="63" rx="8" fill="#008751" stroke="#FFFFFF" stroke-width="3"/>
        
        <!-- White Bold COREN Text -->
        <text x="140" y="54" font-family="system-ui, sans-serif" font-size="54" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="3">
          COREN
        </text>
      </g>
    </g>

    <!-- Bottom Green Line -->
    <line x1="60" y1="210" x2="540" y2="210" stroke="#008751" stroke-width="6"/>
  </svg>`
};

// Render both PNG and SVG to public/ and src/assets/images/
const publicDir = path.resolve('public');
const assetsDir = path.resolve('src/assets/images');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

for (const [name, svgContent] of Object.entries(logos)) {
  // 1. Write SVG to public
  const svgFilename = `${name.toLowerCase()}_logo.svg`;
  fs.writeFileSync(path.join(publicDir, svgFilename), svgContent, 'utf-8');

  // 2. Render PNG with resvg-js
  const resvg = new Resvg(svgContent, {
    fitTo: { mode: 'width', value: 800 }
  });
  const pngData = resvg.render().asPng();

  // Write PNG to public/
  const pngPublicName = `${name}.png`;
  fs.writeFileSync(path.join(publicDir, pngPublicName), pngData);
  fs.writeFileSync(path.join(publicDir, `${name.toLowerCase()}_logo.png`), pngData);

  // Write PNG to src/assets/images/
  fs.writeFileSync(path.join(assetsDir, `${name}.png`), pngData);
  fs.writeFileSync(path.join(assetsDir, `${name.toLowerCase()}_logo.png`), pngData);

  console.log(`Rendered ${name} -> PNG & SVG in public/ and src/assets/images/`);
}
