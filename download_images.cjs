const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'images', 'projects');

const images = [
  { url: 'https://picsum.photos/seed/carbonio/800/500', name: 'carbonio.jpg' },
  { url: 'https://picsum.photos/seed/face/800/500', name: 'face.jpg' },
  { url: 'https://picsum.photos/seed/map/800/500', name: 'map.jpg' },
  { url: 'https://picsum.photos/seed/plc/800/500', name: 'plc.jpg' },
  { url: 'https://picsum.photos/seed/rfid/800/500', name: 'rfid.jpg' },
  { url: 'https://picsum.photos/seed/odoo/800/500', name: 'odoo.jpg' },
  { url: 'https://picsum.photos/seed/haba/800/500', name: 'haba.jpg' },
  { url: 'https://picsum.photos/seed/health/800/500', name: 'health.jpg' }
];

images.forEach(img => {
  const filePath = path.join(dir, img.name);
  https.get(img.url, (res) => {
    // picsum.photos redirects, so we need to handle 302
    if (res.statusCode === 301 || res.statusCode === 302) {
      https.get(res.headers.location, (redirectRes) => {
        const writeStream = fs.createWriteStream(filePath);
        redirectRes.pipe(writeStream);
        writeStream.on('finish', () => {
          console.log('Downloaded ' + img.name);
        });
      });
    } else {
      const writeStream = fs.createWriteStream(filePath);
      res.pipe(writeStream);
      writeStream.on('finish', () => {
        console.log('Downloaded ' + img.name);
      });
    }
  });
});
