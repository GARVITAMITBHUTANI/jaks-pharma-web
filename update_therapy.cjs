const fs = require('fs');
let content = fs.readFileSync('src/data/products.js', 'utf8');

const productsToUpdate = [
  'LEVOJAKS TABLETS',
  'LEVOJAKS-M TABLETS',
  'FLUTIJAKS CREAM',
  'FLUTIJAKS LOTION',
  'LULIJAKS MAX CREAM',
  'JAKSIT SB TABLETS'
];

for (const name of productsToUpdate) {
  // We look for name: '...', then the first therapy_area: '...',
  const regex = new RegExp(`(name:\\s*'${name}'[\\s\\S]*?therapy_area:\\s*)'[^']+'`);
  content = content.replace(regex, `$1'Clinical Care'`);
}

fs.writeFileSync('src/data/products.js', content);
console.log('Updated therapy areas successfully');
