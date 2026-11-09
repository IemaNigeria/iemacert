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
  const pos = html.indexOf('Data Protection Compliance');
  if (pos !== -1) {
    console.log("Rest of Menu:");
    console.log(html.substring(pos, pos + 2000));
  }
}

run().catch(console.error);
