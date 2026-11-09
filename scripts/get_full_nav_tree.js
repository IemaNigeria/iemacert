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
  const pos = html.indexOf('About Us');
  if (pos !== -1) {
    console.log("Full Menu Hierarchy snippet:");
    console.log(html.substring(pos - 400, pos + 3500));
  }
}

run().catch(console.error);
