import fs from 'fs';

const content = fs.readFileSync('d:/Devonia-Lifescience/attached_assets/logo with punchlineVERSION.svg', 'utf8');

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

const paths = [...content.matchAll(/d="m\s+(-?\d+(?:\.\d+)?)[,\s]+(-?\d+(?:\.\d+)?)/g)];
for (const match of paths) {
  const x = parseFloat(match[1]);
  const y = parseFloat(match[2]);
  if (x < minX) minX = x;
  if (y < minY) minY = y;
  if (x > maxX) maxX = x;
  if (y > maxY) maxY = y;
}

console.log(`BBox first points: X: ${minX} to ${maxX}, Y: ${minY} to ${maxY}`);
