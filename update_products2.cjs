const fs = require('fs');
let content = fs.readFileSync('src/data/products.js', 'utf8');

// The imports for SVGs:
const svgImports = `
import emoluxOcSvg from '../assets/emolux oc.svg';
import nigrinilSvg from '../assets/Nigrinil.svg';
import facioxUvSvg from '../assets/Faciox uv.svg';
import facioxSbSvg from '../assets/faciox sb.svg';
import clinderaSvg from '../assets/clindera n.svg';
import relumiaSvg from '../assets/relumia.svg';
`;

content = content.replace('export const products', svgImports + '\nexport const products');

content = content.replace(/image_url: facioxUvPhoto,\s*images: \[facioxUvPhoto, facioxUvSvg\],/g, 'image_url: facioxUvSvg, images: [facioxUvSvg, facioxUvPhoto],');
content = content.replace(/image_url: emoluxOcPhoto,\s*images: \[emoluxOcPhoto, emoluxOcImg\],/g, 'image_url: emoluxOcSvg, images: [emoluxOcSvg, emoluxOcPhoto],');
content = content.replace(/image_url: facioxSbPhoto,\s*images: \[facioxSbPhoto, facioxSbSvg\],/g, 'image_url: facioxSbSvg, images: [facioxSbSvg, facioxSbPhoto],');
content = content.replace(/image_url: nigrinilPhoto,\s*images: \[nigrinilPhoto, nigrinilImg\],/g, 'image_url: nigrinilSvg, images: [nigrinilSvg, nigrinilPhoto],');
content = content.replace(/image_url: relumiaPhoto,\s*images: \[relumiaPhoto, relumiaImg\],/g, 'image_url: relumiaSvg, images: [relumiaSvg, relumiaPhoto],');
content = content.replace(/image_url: clinderaPhoto,\s*images: \[clinderaPhoto, clinderaImg\],/g, 'image_url: clinderaSvg, images: [clinderaSvg, clinderaPhoto],');

// Also, the user complained that the 2nd image has a white bg. If they don't want the JPEG at all, I'll keep it as the second image because they asked "switch them to image 2". 

fs.writeFileSync('src/data/products.js', content);
console.log('updated products.js with SVGs as primary');
