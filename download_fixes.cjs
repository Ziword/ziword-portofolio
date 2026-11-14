const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'images', 'projects');

function download(url, filePath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        download(res.headers.location, filePath).then(resolve).catch(reject);
      } else if (res.statusCode === 200) {
        const stream = fs.createWriteStream(filePath);
        res.pipe(stream);
        stream.on('finish', () => {
          stream.close();
          resolve();
        });
      } else {
        reject(new Error('Failed with status: ' + res.statusCode));
      }
    }).on('error', reject);
  });
}

download('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=75', path.join(dir, 'map.jpg')).then(() => console.log('Done')).catch(console.error);
download('https://images.unsplash.com/photo-1542831371229-5eb7c3c5ba65?auto=format&fit=crop&w=800&q=75', path.join(dir, 'openclaw.jpg')).then(() => console.log('Done')).catch(console.error);
download('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=75', path.join(dir, 'pakijangan_ku.jpg')).then(() => console.log('Done')).catch(console.error);
