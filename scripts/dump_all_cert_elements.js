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
  
  // Extract all headings, paragraphs, and list items sequentially with their parent section or container info
  const regex = /<(h[1-6]|p|li|blockquote|img)[^>]*>([\s\S]*?)<\/\1>|<img[^>]+>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const raw = match[0];
    if (raw.startsWith('<img')) {
      const srcMatch = raw.match(/src="([^"]+)"/i);
      const altMatch = raw.match(/alt="([^"]*)"/i);
      if (srcMatch && !srcMatch[1].includes('wp-includes')) {
        console.log(`[IMG] src="${srcMatch[1]}" alt="${altMatch ? altMatch[1] : ''}"`);
      }
    } else {
      const tag = match[1].toLowerCase();
      const text = match[2].replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#8217;/g, "'").replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
      if (text.length > 0 && !text.includes('function(') && !text.includes('var ')) {
        console.log(`[${tag.toUpperCase()}] ${text}`);
      }
    }
  }
}

run().catch(console.error);
