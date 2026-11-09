import fs from 'fs';
import path from 'path';
import { Resvg } from '@resvg/resvg-js';

const clientLogos = {
  // 1. Medical Mart (medicalmart.png)
  'medicalmart': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="500" height="280">
    <rect width="500" height="280" fill="#FFFFFF"/>
    <g transform="translate(30, 20)">
      <!-- Top ECG line connecting into Medical -->
      <path d="M 10,95 L 45,95 L 55,75 L 75,125 L 95,20 L 115,160 L 130,70 L 145,95 L 180,95 L 195,75 L 210,120 L 225,95 L 360,95" 
            fill="none" stroke="#00A79D" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
      
      <!-- Bottom ECG line under Mart -->
      <path d="M 50,185 L 85,185 L 98,165 L 115,225 L 135,115 L 155,255 L 170,165 L 185,185 L 300,185" 
            fill="none" stroke="#00A79D" stroke-width="13" stroke-linecap="round" stroke-linejoin="round"/>
      
      <!-- Text: Medical -->
      <text x="155" y="110" font-family="'Inter', 'Montserrat', -apple-system, sans-serif" font-size="78" font-weight="800" fill="#00A79D" letter-spacing="-1">medical</text>
      
      <!-- Text: Mart -->
      <text x="180" y="195" font-family="'Inter', 'Montserrat', -apple-system, sans-serif" font-size="82" font-weight="800" fill="#00A79D" letter-spacing="-1">Mart</text>
      
      <!-- Registered Trademark -->
      <circle cx="365" cy="148" r="9" fill="none" stroke="#00A79D" stroke-width="2.5"/>
      <text x="365" y="152" text-anchor="middle" font-family="'Inter', sans-serif" font-size="10" font-weight="900" fill="#00A79D">R</text>
    </g>
  </svg>`,

  // 2. Bono Energy (bono.png)
  'bono': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="500" height="240">
    <rect width="500" height="240" fill="#FFFFFF"/>
    <g transform="translate(35, 30)">
      <!-- 4 Slanted Red Blocks for B - O - N - O -->
      <!-- B -->
      <polygon points="25,10 95,10 65,115 -5,115" fill="#E31B23"/>
      <text x="45" y="93" text-anchor="middle" font-family="'Inter', 'Arial Black', sans-serif" font-size="82" font-weight="900" fill="#FFFFFF">B</text>

      <!-- O -->
      <polygon points="110,10 180,10 150,115 80,115" fill="#E31B23"/>
      <text x="130" y="93" text-anchor="middle" font-family="'Inter', 'Arial Black', sans-serif" font-size="82" font-weight="900" fill="#FFFFFF">O</text>

      <!-- N -->
      <polygon points="195,10 265,10 235,115 165,115" fill="#E31B23"/>
      <text x="215" y="93" text-anchor="middle" font-family="'Inter', 'Arial Black', sans-serif" font-size="82" font-weight="900" fill="#FFFFFF">N</text>

      <!-- O -->
      <polygon points="280,10 350,10 320,115 250,115" fill="#E31B23"/>
      <text x="300" y="93" text-anchor="middle" font-family="'Inter', 'Arial Black', sans-serif" font-size="82" font-weight="900" fill="#FFFFFF">O</text>

      <!-- ENERGY Text beneath right side -->
      <text x="330" y="165" text-anchor="end" font-family="'Inter', 'Arial Black', sans-serif" font-size="44" font-weight="900" fill="#1A1A1A" letter-spacing="3">ENERGY</text>
    </g>
  </svg>`,

  // 3. FCMB (fcmb.png)
  'fcmb': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 320" width="450" height="320">
    <!-- Royal Purple Background -->
    <rect width="450" height="320" rx="16" fill="#5C2D91"/>
    
    <!-- White FCMB Wordmark -->
    <text x="225" y="155" text-anchor="middle" font-family="'Inter', 'Montserrat', -apple-system, sans-serif" font-size="108" font-weight="900" fill="#FFFFFF" letter-spacing="3">FCMB</text>
    
    <!-- Dual Golden Yellow Bars -->
    <rect x="70" y="195" width="310" height="30" rx="15" fill="#FDB913"/>
    <rect x="70" y="240" width="310" height="30" rx="15" fill="#FDB913"/>
  </svg>`,

  // 4. Kryogen Systems (kryogen.png)
  'kryogen': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 360" width="450" height="360">
    <rect width="450" height="360" fill="#FFFFFF"/>
    <g transform="translate(225, 130)">
      <!-- Speed / Airflow Lines on left -->
      <line x1="-155" y1="-50" x2="-80" y2="-50" stroke="#009FE3" stroke-width="6.5" stroke-linecap="round"/>
      <line x1="-175" y1="-25" x2="-85" y2="-25" stroke="#009FE3" stroke-width="6.5" stroke-linecap="round"/>
      <line x1="-185" y1="0" x2="-88" y2="0" stroke="#009FE3" stroke-width="6.5" stroke-linecap="round"/>
      <line x1="-175" y1="25" x2="-85" y2="25" stroke="#009FE3" stroke-width="6.5" stroke-linecap="round"/>
      <line x1="-155" y1="50" x2="-80" y2="50" stroke="#009FE3" stroke-width="6.5" stroke-linecap="round"/>

      <!-- Globe Circle -->
      <circle cx="0" cy="0" r="78" fill="#009FE3"/>
      
      <!-- Globe Grid (White Lines) -->
      <!-- Latitude lines -->
      <line x1="-75" y1="0" x2="75" y2="0" stroke="#FFFFFF" stroke-width="4.5"/>
      <line x1="-64" y1="-32" x2="64" y2="-32" stroke="#FFFFFF" stroke-width="4"/>
      <line x1="-64" y1="32" x2="64" y2="32" stroke="#FFFFFF" stroke-width="4"/>
      <line x1="-42" y1="-58" x2="42" y2="-58" stroke="#FFFFFF" stroke-width="3.5"/>
      <line x1="-42" y1="58" x2="42" y2="58" stroke="#FFFFFF" stroke-width="3.5"/>

      <!-- Longitude curves -->
      <line x1="0" y1="-76" x2="0" y2="76" stroke="#FFFFFF" stroke-width="4.5"/>
      <ellipse cx="0" cy="0" rx="36" ry="76" fill="none" stroke="#FFFFFF" stroke-width="4"/>
      <ellipse cx="0" cy="0" rx="60" ry="76" fill="none" stroke="#FFFFFF" stroke-width="3.5"/>
    </g>

    <!-- Text -->
    <text x="225" y="270" text-anchor="middle" font-family="'Inter', -apple-system, sans-serif" font-size="28" font-weight="900" fill="#009FE3" letter-spacing="1.5">KRYOGEN SYSTEMS</text>
    <text x="225" y="300" text-anchor="middle" font-family="'Inter', -apple-system, sans-serif" font-size="14" font-weight="800" fill="#009FE3" letter-spacing="4">SAFEGUARDING YOUR FUTURE</text>
  </svg>`,

  // 5. RCC (rcc.jpg)
  'rcc': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 260" width="500" height="260">
    <rect width="500" height="260" fill="#FFFFFF"/>
    <g transform="translate(60, 40)">
      <!-- Left Red Slanted Accent -->
      <polygon points="35,0 75,0 35,175 -5,175" fill="#E31B23"/>
      
      <!-- Top Black Angled Bar -->
      <polygon points="55,0 380,0 345,40 85,40" fill="#E31B23"/>
      
      <!-- Bottom/Right Heavy Black Slanted Frame -->
      <polygon points="355,0 380,0 340,175 0,175 10,135 315,135 345,40 355,0" fill="#111111"/>

      <!-- Inner White Background with RCC Text -->
      <text x="180" y="118" text-anchor="middle" font-family="'Georgia', 'Times New Roman', serif" font-style="italic" font-size="88" font-weight="900" fill="#111111" letter-spacing="4">RCC</text>
    </g>
  </svg>`,

  // 6. Shoreline Natural Resources (shoreline.jpg)
  'shoreline': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 360" width="450" height="360">
    <rect width="450" height="360" fill="#FFFFFF"/>
    <g transform="translate(35, 30)">
      <!-- SHORELINE Heading -->
      <text x="190" y="45" text-anchor="middle" font-family="'Inter', -apple-system, sans-serif" font-size="44" font-weight="900" fill="#111111" letter-spacing="5">SHORELINE</text>

      <!-- Water Waves at Top -->
      <path d="M 10,75 C 60,65 100,85 150,75 C 190,65 210,80 220,78 M 240,78 C 255,80 280,65 320,75 C 350,82 370,75 380,75" 
            fill="none" stroke="#004B9B" stroke-width="6" stroke-linecap="round"/>
      <path d="M 10,95 C 60,85 100,105 150,95 C 190,85 210,100 220,98 M 240,98 C 255,100 280,85 320,95 C 350,102 370,95 380,95" 
            fill="none" stroke="#004B9B" stroke-width="6" stroke-linecap="round"/>

      <!-- 5 Subterranean Strata Layer Bands with central fault divide -->
      <!-- Layer 1 -->
      <path d="M 10,120 L 215,120 M 235,120 L 380,120" stroke="#004B9B" stroke-width="8" stroke-linecap="round"/>
      <!-- Layer 2 -->
      <path d="M 10,145 L 215,145 M 235,145 L 380,145" stroke="#004B9B" stroke-width="9" stroke-linecap="round"/>
      <!-- Layer 3 -->
      <path d="M 10,172 L 205,172 L 215,166 M 235,166 L 245,172 L 380,172" stroke="#004B9B" stroke-width="11" stroke-linecap="round"/>
      <!-- Layer 4 -->
      <path d="M 10,202 L 205,202 L 215,194 M 235,194 L 245,202 L 380,202" stroke="#004B9B" stroke-width="13" stroke-linecap="round"/>
      <!-- Layer 5 -->
      <path d="M 10,235 L 205,235 L 215,225 M 235,225 L 245,235 L 380,235" stroke="#004B9B" stroke-width="15" stroke-linecap="round"/>

      <!-- Natural Resources Bar -->
      <rect x="10" y="255" width="370" height="48" rx="4" fill="#004B9B"/>
      <text x="195" y="288" text-anchor="middle" font-family="'Inter', -apple-system, sans-serif" font-size="25" font-weight="800" fill="#FFFFFF" letter-spacing="1.5">Natural Resources</text>
    </g>
  </svg>`,

  // 7. Sunflag Group (sunflag.jpg)
  'sunflag': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 360" width="450" height="360">
    <rect width="450" height="360" fill="#FFFFFF"/>
    <circle cx="225" cy="180" r="165" fill="#FAFAFA" stroke="#E2E8F0" stroke-width="2"/>
    <g transform="translate(130, 75)">
      <!-- Flagpole -->
      <line x1="55" y1="130" x2="110" y2="10" stroke="#C8102E" stroke-width="6" stroke-linecap="round"/>
      <circle cx="110" cy="10" r="6" fill="#C8102E"/>
      <line x1="55" y1="130" x2="65" y2="70" stroke="#C8102E" stroke-width="2" stroke-dasharray="3,3"/>

      <!-- Red Flag -->
      <polygon points="108,18 190,26 180,95 95,85" fill="#C8102E"/>

      <!-- Radiant White Sun on Flag -->
      <g transform="translate(142, 57)">
        <circle cx="0" cy="0" r="15" fill="#FFFFFF"/>
        <!-- 16 Sun Rays -->
        <polygon points="-3,-15 0,-26 3,-15" fill="#FFFFFF"/>
        <polygon points="-3,15 0,26 3,15" fill="#FFFFFF"/>
        <polygon points="-15,-3 -26,0 -15,3" fill="#FFFFFF"/>
        <polygon points="15,-3 26,0 15,3" fill="#FFFFFF"/>
        <polygon points="-11,-11 -18,-18 -7,-15" fill="#FFFFFF"/>
        <polygon points="11,11 18,18 7,15" fill="#FFFFFF"/>
        <polygon points="-11,11 -18,18 -15,7" fill="#FFFFFF"/>
        <polygon points="11,-11 18,-18 15,-7" fill="#FFFFFF"/>
      </g>

      <!-- Flagpole Base -->
      <rect x="45" y="127" width="22" height="6" rx="2" fill="#C8102E"/>
    </g>

    <!-- SUNFLAG Text -->
    <text x="225" y="275" text-anchor="middle" font-family="'Inter', 'Arial Black', sans-serif" font-style="italic" font-size="44" font-weight="900" fill="#111111" letter-spacing="2">SUNFLAG</text>
  </svg>`,

  // 8. Quantum Steels Nigeria Ltd (quantum.jpg)
  'quantum': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="500" height="280">
    <rect width="500" height="280" fill="#FFFFFF"/>
    <g transform="translate(250, 85)">
      <!-- Interlocking Loops: Red Loop Left, Blue Loop Right -->
      <!-- Red Loop (Q) -->
      <rect x="-105" y="-60" width="85" height="85" rx="8" fill="none" stroke="#E31B23" stroke-width="20"/>
      <!-- Blue Loop (S) -->
      <rect x="-45" y="-60" width="85" height="85" rx="8" fill="none" stroke="#1A365D" stroke-width="20"/>
      
      <!-- Interlocking overlay effect -->
      <path d="M -20,-60 L 25,-60 L 25,-10" stroke="#1A365D" stroke-width="20" fill="none"/>
    </g>

    <!-- QUANTUM Wordmark -->
    <text x="250" y="180" text-anchor="middle" font-family="'Inter', 'Montserrat', -apple-system, sans-serif" font-size="64" font-weight="900" fill="#E31B23" letter-spacing="5">QUANTUM</text>

    <!-- STEELS NIGERIA LIMITED Subtitle -->
    <text x="250" y="222" text-anchor="middle" font-family="'Inter', -apple-system, sans-serif" font-size="20" font-weight="900" fill="#1A365D" letter-spacing="3.5">STEELS NIGERIA LIMITED</text>

    <!-- Horizontal Bottom Line -->
    <line x1="30" y1="245" x2="250" y2="245" stroke="#E31B23" stroke-width="3"/>
    <line x1="250" y1="245" x2="470" y2="245" stroke="#1A365D" stroke-width="3"/>
  </svg>`,

  // 9. IEI - International Energy Insurance / Norrenberger (iei.jpg)
  'iei': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 300" width="480" height="300">
    <rect width="480" height="300" fill="#FFFFFF"/>
    <g transform="translate(40, 50)">
      <!-- Orange Halftone Sphere on Left -->
      <defs>
        <radialGradient id="ieiOrangeGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#FDBA74"/>
          <stop offset="40%" stop-color="#FB923C"/>
          <stop offset="80%" stop-color="#EA580C"/>
          <stop offset="100%" stop-color="#C2410C"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="42" fill="url(#ieiOrangeGrad)"/>
      <!-- Grid of dots overlaying sphere for authentic halftone texture -->
      <g fill="#FFFFFF" opacity="0.4">
        <circle cx="35" cy="35" r="3.5"/>
        <circle cx="48" cy="35" r="3"/>
        <circle cx="61" cy="35" r="2.5"/>
        <circle cx="35" cy="48" r="3"/>
        <circle cx="48" cy="48" r="3.5"/>
        <circle cx="61" cy="48" r="3"/>
        <circle cx="35" cy="61" r="2.5"/>
        <circle cx="48" cy="61" r="3"/>
        <circle cx="61" cy="61" r="3.5"/>
      </g>

      <!-- Bold Navy "iei" Letterforms -->
      <!-- First i/u curved pillar -->
      <path d="M 120,85 C 120,50 150,50 180,50 C 210,50 210,85 210,130 C 210,175 120,175 120,130 Z" fill="#1B1464"/>
      <path d="M 60,85 L 105,85 L 105,150 C 105,190 145,200 180,200 C 220,200 260,185 260,135 L 260,85 L 215,85 L 215,135 C 215,160 195,165 180,165 C 160,165 150,155 150,135 L 150,85 Z" fill="#1B1464"/>
      
      <!-- Right vertical pillars -->
      <rect x="295" y="85" width="40" height="115" rx="4" fill="#1B1464"/>
      <rect x="375" y="85" width="40" height="115" rx="4" fill="#1B1464"/>

      <!-- Tagline: A nörrenberger company -->
      <text x="390" y="235" text-anchor="end" font-family="'Inter', sans-serif" font-size="16" font-weight="700" fill="#991B1B">A nörrenberger company</text>
    </g>
  </svg>`,

  // 10. Rex Insurance (rex.jpg)
  'rex': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 240" width="500" height="240">
    <rect width="500" height="240" fill="#FFFFFF"/>
    <g transform="translate(30, 45)">
      <!-- Left Double Curved Wing / Arc Swooshes -->
      <!-- Upper Orange Arc -->
      <path d="M 10,65 C 40,15 105,15 135,65 C 120,65 100,38 72,38 C 45,38 25,65 10,65 Z" fill="#FF6600"/>
      <!-- Lower Blue Arc -->
      <path d="M 10,125 C 40,75 105,75 135,125 C 120,125 100,98 72,98 C 45,98 25,125 10,125 Z" fill="#0033CC"/>

      <!-- Right: "rex" wordmark -->
      <g transform="translate(160, 20)">
        <text x="0" y="75" font-family="'Inter', 'Montserrat', -apple-system, sans-serif" font-size="88" font-weight="900" fill="#0033CC" letter-spacing="-1">rex</text>
        <text x="0" y="118" font-family="'Inter', 'Montserrat', -apple-system, sans-serif" font-size="34" font-weight="800" fill="#0033CC" letter-spacing="1">insurance</text>
      </g>
    </g>
  </svg>`,

  // 11. Renmoney (renmoney-seeklogo.png)
  'renmoney': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 540 220" width="540" height="220">
    <rect width="540" height="220" fill="#FFFFFF"/>
    <g transform="translate(30, 35)">
      <!-- Renmoney 4-Petal Icon -->
      <g transform="translate(55, 75)">
        <!-- Top-left Petal (Cyan/Mint) -->
        <path d="M 0,0 C -25,-10 -42,-32 -42,-55 C -18,-55 0,-38 0,0 Z" fill="#4DB6AC"/>
        <!-- Bottom-left Petal (Dark Teal) -->
        <path d="M 0,0 C -10,25 -32,42 -55,42 C -55,18 -38,0 0,0 Z" fill="#1E6B87"/>
        <!-- Bottom-right Petal (Medium Ocean Teal) -->
        <path d="M 0,0 C 25,10 42,32 42,55 C 18,55 0,38 0,0 Z" fill="#2E86AB"/>
        <!-- Top-right Central Coral Circle -->
        <circle cx="20" cy="-20" r="22" fill="#E05A47"/>
      </g>

      <!-- RenMoney Text -->
      <g transform="translate(135, 95)">
        <text x="0" y="0" font-family="'Inter', -apple-system, sans-serif" font-size="82" font-weight="700">
          <tspan fill="#E05A47">Ren</tspan>
          <tspan fill="#247896">Money</tspan>
        </text>
      </g>
    </g>
  </svg>`
};

console.log('Starting client logo generation...');

const publicDir = path.resolve('public/clients');
const assetsDir = path.resolve('src/assets/images/clients');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

for (const [key, svgCode] of Object.entries(clientLogos)) {
  // Save SVG
  const svgPublicPath = path.join(publicDir, `${key}.svg`);
  const svgAssetsPath = path.join(assetsDir, `${key}.svg`);
  fs.writeFileSync(svgPublicPath, svgCode, 'utf8');
  fs.writeFileSync(svgAssetsPath, svgCode, 'utf8');

  // Render PNG with resvg
  const resvg = new Resvg(svgCode, {
    fitTo: { mode: 'width', value: 800 },
    background: 'rgba(255, 255, 255, 1)'
  });
  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  const pngPublicPath = path.join(publicDir, `${key}.png`);
  const pngAssetsPath = path.join(assetsDir, `${key}.png`);
  fs.writeFileSync(pngPublicPath, pngBuffer);
  fs.writeFileSync(pngAssetsPath, pngBuffer);

  console.log(`Generated: ${key} (.svg & .png, 800px width)`);
}

console.log('All 11 client logos generated successfully!');
