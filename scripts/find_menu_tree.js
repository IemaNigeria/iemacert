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
  
  // Let's find all <ul> containing menu-item
  const menuMatches = html.match(/<ul[^>]*id="[^"]*menu[^"]*"[^>]*>[\s\S]*?<\/ul>/gi) || html.match(/<ul[^>]*class="[^"]*menu[^"]*"[^>]*>[\s\S]*?<\/ul>/gi);
  if (menuMatches) {
    console.log("Found menu lists:", menuMatches.length);
    menuMatches.forEach((m, idx) => console.log(`Menu ${idx}:\n${m}\n\n`));
  } else {
    // search for menu structure
    const pos = html.indexOf('menu-item');
    if (pos !== -1) {
      console.log("Snippet around menu-item:", html.substring(pos - 200, pos + 1000));
    }
  }
}

run().catch(console.error);
