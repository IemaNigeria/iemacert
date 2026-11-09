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
  
  // Extract elementor header section html
  const match = html.match(/<div class="elementor-element[^"]*elementor-widget-nav-menu"[\s\S]*?<\/nav>/gi);
  if (match) {
    console.log("Found nav menu HTML:");
    console.log(match[0]);
  } else {
    // extract any nav
    const anyNav = html.match(/<nav[^>]*>([\s\S]*?)<\/nav>/gi);
    console.log(anyNav ? anyNav.join('\n---\n') : 'No nav found');
  }
}

run().catch(console.error);
