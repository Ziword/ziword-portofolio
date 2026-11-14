const fs = require('fs');
const path = require('path');

const tsxPath = path.join(__dirname, 'src', 'components', 'Projects.tsx');
const newArrayPath = path.join(__dirname, 'src', 'new_array.txt');

let tsxContent = fs.readFileSync(tsxPath, 'utf8');
const newArrayContent = fs.readFileSync(newArrayPath, 'utf8');

const regex = /const projects: Project\[\] = \[\s*([\s\S]*?)\s*\];/;
const updatedContent = tsxContent.replace(regex, `const projects: Project[] = [\n${newArrayContent}\n];`);

fs.writeFileSync(tsxPath, updatedContent, 'utf8');
console.log('Successfully updated Projects.tsx');
