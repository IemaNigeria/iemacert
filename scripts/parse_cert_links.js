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
  const html = await fetchPage('https://iemacert.com/certification/');
  
  // Extract all certification programs cards (titles, links, images)
  const regex = /<div class="elementor-widget-container">\s*<a href="([^"]+)">\s*<img[^>]+src="([^"]+)"[\s\S]*?<\/a>\s*<\/div>[\s\S]*?<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi;
  // let's do a more robust parse of program items
  const cardRegex = /<a href="(https:\/\/iemacert\.com\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  const links = new Set();
  while ((match = cardRegex.exec(html)) !== null) {
    const url = match[1];
    if (!url.includes('/wp-content') && !url.includes('/contact') && !url.includes('/about') && !url.includes('/services') && url !== 'https://iemacert.com/') {
      links.add(url);
    }
  }
  console.log("Program links found on certification page:");
  console.log(Array.from(links));
}

run().catch(console.error);
