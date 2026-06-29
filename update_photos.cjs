const fs = require('fs');

let content = fs.readFileSync('src/data/products.js', 'utf8');

// The new imports
const newImports = `
import eglanceUpPhoto from '../assets/updated photos/Eglance.png';
import emoluxBarUpPhoto from '../assets/updated photos/Emolux body bar.png';
import facioxCUpPhoto from '../assets/updated photos/Faciox C.png';
import facioxHAUpPhoto from '../assets/updated photos/Faciox HA.png';
import facioxFWUpPhoto from '../assets/updated photos/Faciox face wash.png';
import flutijaksCreamUpPhoto from '../assets/updated photos/Flutijaks Cream.png';
import flutijaksLotionUpPhoto from '../assets/updated photos/Flutijaks lotion.png';
import kerajaksMUpPhoto from '../assets/updated photos/Kerajaks M.png';
import kerajaksHairUpPhoto from '../assets/updated photos/Kerajaks hair serum.png';
import lulijaksUpPhoto from '../assets/updated photos/Lulijaks.png';
`;

// Insert new imports after the existing imports
content = content.replace('export const products = [', newImports + '\nexport const products = [');

// Now, replace the image assignments in the products array.
// KERA01 (KERAJAKS HAIR SERUM): use kerajaksImg from assets folder
content = content.replace(/image_url:\s*[^,]+,\s*images:\s*\[[^\]]+\],/, "image_url: kerajaksImg,");

// FACIOXUV: use facioxUvSvg
content = content.replace(/image_url:\s*facioxUvSvg,\s*images:\s*\[facioxUvSvg,\s*facioxUvPhoto\],/, "image_url: facioxUvSvg,");

// FACIOXFW: use facioxFWUpPhoto
content = content.replace(/image_url:\s*facioxFwPhoto,\s*images:\s*\[facioxFwPhoto,\s*facioxFwImg\],/, "image_url: facioxFWUpPhoto,");

// EMOLUXOC: (Wait, they didn't list emolux oc in the new photos or assets list. I'll leave it or set it to emoluxOcSvg)
content = content.replace(/image_url:\s*emoluxOcSvg,\s*images:\s*\[emoluxOcSvg,\s*emoluxOcPhoto\],/, "image_url: emoluxOcSvg,");

// FACIOXSB: use facioxSbSvg
content = content.replace(/image_url:\s*facioxSbSvg,\s*images:\s*\[facioxSbSvg,\s*facioxSbPhoto\],/, "image_url: facioxSbSvg,");

// FACIOXHA: use facioxHAUpPhoto
content = content.replace(/image_url:\s*facioxHaPhoto,\s*images:\s*\[facioxHaPhoto,\s*facioxHaImg\],/, "image_url: facioxHAUpPhoto,");

// FACIOXVITC: use facioxCUpPhoto
content = content.replace(/image_url:\s*facioxVitCPhoto,\s*images:\s*\[facioxVitCPhoto,\s*facioxVitCImg\],/, "image_url: facioxCUpPhoto,");

// EGLANCEEYE: use eglanceUpPhoto
content = content.replace(/image_url:\s*eglancePhoto,\s*images:\s*\[eglancePhoto,\s*eglanceImg\],/, "image_url: eglanceUpPhoto,");

// RELUMIA: relumiaSvg (from assets)
content = content.replace(/image_url:\s*relumiaSvg,\s*images:\s*\[relumiaSvg,\s*relumiaPhoto\],/, "image_url: relumiaSvg,");

// CLINDERAN: clinderaSvg
content = content.replace(/image_url:\s*clinderaSvg,\s*images:\s*\[clinderaSvg,\s*clinderaPhoto\],/, "image_url: clinderaSvg,");

// NIGRINIL: nigrinilSvg
content = content.replace(/image_url:\s*nigrinilSvg,\s*images:\s*\[nigrinilSvg,\s*nigrinilPhoto\],/, "image_url: nigrinilSvg,");

// EMOLUXBODY: emoluxBarUpPhoto
content = content.replace(/image_url:\s*emoluxBarPhoto,/, "image_url: emoluxBarUpPhoto,");

// LULIJAKS: lulijaksUpPhoto
content = content.replace(/image_url:\s*lulijaksPhoto,/, "image_url: lulijaksUpPhoto,");

// FLUTIJAKS (CREAM): flutijaksCreamUpPhoto
content = content.replace(/image_url:\s*flutijaksPhoto,/, "image_url: flutijaksCreamUpPhoto,");

// KERAJAKSM: kerajaksMUpPhoto
content = content.replace(/image_url:\s*kerajaksMPhoto,/, "image_url: kerajaksMUpPhoto,");

// FLUTIJAKSLOTION: flutijaksLotionUpPhoto
// Wait, FLUTIJAKS LOTION used flutijaksPhoto previously, but I'll update it to flutijaksLotionUpPhoto.
// In products.js, let's just do a generic replace for the others if they don't have images array.
// Actually, it's safer to just rewrite the file content using a regex or manually fixing.

fs.writeFileSync('src/data/products.js', content);
console.log('Update script prepared.');
