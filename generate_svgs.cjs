const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'assets', 'images', 'projects');

const projects = [
  { file: 'pakijangan_ku', title: 'PAKIJANGAN KU', cat: 'E-COMMERCE', c1: '#f97316', c2: '#f59e0b' },
  { file: 'hermes', title: 'HERMES AGENT', cat: 'AUTONOMOUS AI', c1: '#3b82f6', c2: '#6366f1' },
  { file: 'openclaw', title: 'OPENCLAW', cat: 'AI FRAMEWORK', c1: '#10b981', c2: '#14b8a6' },
  { file: 'llm_routing', title: 'LLM ROUTING API', cat: 'API GATEWAY', c1: '#8b5cf6', c2: '#d946ef' },
  { file: 'pt_merak_rag', title: 'AI RAG SYSTEM', cat: 'KNOWLEDGE BASE', c1: '#6366f1', c2: '#a855f7' },
  { file: 'oracle_db', title: 'ORACLE 19C', cat: 'DATABASE MIGRATION', c1: '#f97316', c2: '#f59e0b' },
  { file: 'oracle_ebs', title: 'ORACLE EBS', cat: 'ENTERPRISE PORTAL', c1: '#3b82f6', c2: '#06b6d4' },
  { file: 'fleet', title: 'FLEET MONITORING', cat: 'TELEMATICS', c1: '#10b981', c2: '#14b8a6' },
  { file: 'lidar', title: 'LiDAR SURVEYING', cat: 'INDUSTRIAL R&D', c1: '#8b5cf6', c2: '#a855f7' },
  { file: 'iot', title: 'IoT SENSOR', cat: 'ECOSYSTEM', c1: '#06b6d4', c2: '#0ea5e9' },
  { file: 'infra', title: 'INFRASTRUCTURE', cat: 'MODERNIZATION', c1: '#64748b', c2: '#71717a' },
  { file: 'whatsapp', title: 'WHATSAPP API', cat: 'GATEWAY', c1: '#22c55e', c2: '#10b981' },
  { file: 'carbonio', title: 'CARBONIO', cat: 'EMAIL SERVER', c1: '#6366f1', c2: '#3b82f6' },
  { file: 'face', title: 'FACE RECOGNITION', cat: 'BIOMETRICS', c1: '#f43f5e', c2: '#ec4899' },
  { file: 'map', title: 'OSRM MAP', cat: 'PRIVATE SERVER', c1: '#14b8a6', c2: '#06b6d4' },
  { file: 'plc', title: 'PLC-TO-ERP', cat: 'IoT BRIDGE', c1: '#f59e0b', c2: '#eab308' },
  { file: 'rfid', title: 'UHF RFID', cat: 'INVENTORY SYSTEM', c1: '#0ea5e9', c2: '#3b82f6' },
  { file: 'odoo', title: 'ODOO ERP', cat: 'CONTAINERIZED', c1: '#a855f7', c2: '#6366f1' },
  { file: 'haba', title: 'HABA E-COMMERCE', cat: 'PLATFORM', c1: '#ec4899', c2: '#f43f5e' },
  { file: 'health', title: 'BE-HEALTH', cat: 'APPLICATION', c1: '#ef4444', c2: '#f43f5e' }
];

projects.forEach(p => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="grad_${p.file}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${p.c1}" />
      <stop offset="100%" stop-color="${p.c2}" />
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="30" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <rect width="100%" height="100%" fill="#020617" />
  <rect width="100%" height="100%" fill="url(#grad_${p.file})" opacity="0.1" />
  
  <circle cx="400" cy="250" r="150" fill="url(#grad_${p.file})" opacity="0.15" filter="url(#glow)"/>
  
  <rect width="100%" height="100%" fill="url(#grid)" />
  
  <g transform="translate(400, 230)">
    <text x="0" y="0" dominant-baseline="middle" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="44" font-weight="800" fill="#ffffff" letter-spacing="2">${p.title}</text>
    <text x="0" y="55" dominant-baseline="middle" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="16" font-weight="600" fill="${p.c1}" letter-spacing="5">${p.cat}</text>
  </g>
</svg>`;

  fs.writeFileSync(path.join(dir, p.file + '.svg'), svg);
  console.log('Created ' + p.file + '.svg');
});
