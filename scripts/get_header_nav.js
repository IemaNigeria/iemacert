import https from 'https';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  const html = await fetchPage('https://iemacert.com/');
  
  // Extract nav menus / header structure
  const headerMatch = html.match(/<header[\s\S]*?<\/header>/i) || html.match(/<nav[\s\S]*?<\/nav>/i) || html.match(/class="[^"]*nav[^"]*"[\s\S]*?<\/ul>/i);
  
  // Let's find all menu items from wp-nav-menu or elementor-nav-menu
  const menuRegex = /<li[^>]*class="[^"]*menu-item[^"]*"[^>]*>[\s\S]*?<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  console.log("=== NAV MENU ITEMS ON IEMACERT.COM ===");
  while ((match = menuRegex.exec(html)) !== null) {
    const url = match[1];
    const label = match[2].replace(/<[^>]+>/g, '').trim();
    console.log(`- Label: "${label}" | URL: "${url}"`);
  }
}

run().catch(console.error);
