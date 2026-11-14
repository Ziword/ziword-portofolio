const fs = require('fs');
const https = require('https');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'images', 'projects');

const downloads = [
  { id: '1607082348524-1a0d98a8a926', name: 'pakijangan_ku.jpg' },
  { id: '1555949963-ff9fe0c870eb', name: 'hermes.jpg' },
  { id: '1542831371229-5eb7c3c5ba65', name: 'openclaw.jpg' },
  { id: '1558494949-ef010cbdcc31', name: 'llm_routing.jpg' },
  { id: '1541888065-27a3c75d4e1c', name: 'pt_merak_rag.jpg' },
  { id: '1558494949-ef010cbdcc31', name: 'oracle_db.jpg' },
  { id: '1460925895917-afdab827c52f', name: 'oracle_ebs.jpg' },
  { id: '1519003722824-194d4455a60c', name: 'fleet.jpg' },
  { id: '1473968512647-3e447244af8f', name: 'lidar.jpg' },
  { id: '1518770660439-4636190af475', name: 'iot.jpg' },
  { id: '1558494949-ef010cbdcc31', name: 'infra.jpg' },
  { id: '1611746872915-64382b5c76da', name: 'whatsapp.jpg' },
  { id: '1596526131083-e8c633c948d2', name: 'carbonio.jpg' },
  { id: '1526498460520-4c246339dccb', name: 'face.jpg' },
  { id: '1524661135-423995f22d0b', name: 'map.jpg' },
  { id: '1581091226825-a6a2a5aee158', name: 'plc.jpg' },
  { id: '1586528116311-ad8dd3c8310d', name: 'rfid.jpg' },
  { id: '1454165804606-c3d57bc86b40', name: 'odoo.jpg' },
  { id: '1556742049-0cfed4f6a45d', name: 'haba.jpg' },
  { id: '1576091160399-112ba8d25d1d', name: 'health.jpg' }
];

// Helper to handle redirects
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

async function run() {
  for (const item of downloads) {
    const url = 'https://images.unsplash.com/photo-' + item.id + '?auto=format&fit=crop&w=800&q=75';
    const filePath = path.join(dir, item.name);
    try {
      await download(url, filePath);
      console.log('Downloaded ' + item.name);
    } catch (e) {
      console.error('Failed ' + item.name + ':', e);
    }
  }
}

run();
