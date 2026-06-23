const fs = require('fs');
let content = fs.readFileSync('src/data/products.js', 'utf8');

const importsToAdd = `
import facioxUvPhoto from '../assets/Jaks product photos/FACIOX UV.jpeg';
import eglancePhoto from '../assets/Jaks product photos/EGLANCE.jpeg';
import facioxVitCPhoto from '../assets/Jaks product photos/FACIOX C.jpeg';
import facioxFwPhoto from '../assets/Jaks product photos/FACIOX Face wash.jpeg';
import facioxHaPhoto from '../assets/Jaks product photos/FACIOX HA.jpeg';
import facioxSbPhoto from '../assets/Jaks product photos/FACIOX SB.jpeg';
import relumiaPhoto from '../assets/Jaks product photos/Relumia.png';
import kerajaksPhoto from '../assets/Jaks product photos/Kerajaks Hair serum.jpeg';
import clinderaPhoto from '../assets/Jaks product photos/Clindera.jpg.png';
import flutijaksPhoto from '../assets/Jaks product photos/FLUTIJAKS.jpeg';
import emoluxOcPhoto from '../assets/Jaks product photos/Emolux OC.jpeg';
import nigrinilPhoto from '../assets/Jaks product photos/NIGRINIL.jpeg';
import emoluxBarPhoto from '../assets/Jaks product photos/EMOLUX BODY BAR.jpeg';
import levojaksPhoto from '../assets/Jaks product photos/LEVOJAKS 5 mg.jpeg';
import levojaksMPhoto from '../assets/Jaks product photos/LEVOJAKS M tab.jpeg';
import jaksitSbPhoto from '../assets/Jaks product photos/JAKSIT SB 130.jpeg';
import lulijaksPhoto from '../assets/Jaks product photos/LULIJAKS MAX.jpeg';
import kerajaksMPhoto from '../assets/Jaks product photos/KERAJAKS M TAB.jpeg';
`;

content = content.replace('export const products', importsToAdd + '\nexport const products');

content = content.replace(/image_url: kerajaksImg,/g, 'image_url: kerajaksPhoto, images: [kerajaksPhoto, kerajaksImg],');
content = content.replace(/image_url: facioxUvSvg,\s*images: \[facioxUvSvg, facioxUvImg\],/g, 'image_url: facioxUvPhoto, images: [facioxUvPhoto, facioxUvSvg],');
content = content.replace(/image_url: facioxFwImg,/g, 'image_url: facioxFwPhoto, images: [facioxFwPhoto, facioxFwImg],');
content = content.replace(/image_url: emoluxOcImg,/g, 'image_url: emoluxOcPhoto, images: [emoluxOcPhoto, emoluxOcImg],');
content = content.replace(/image_url: facioxSbSvg,\s*images: \[facioxSbSvg, facioxSbImg\],/g, 'image_url: facioxSbPhoto, images: [facioxSbPhoto, facioxSbSvg],');
content = content.replace(/image_url: facioxHaImg,/g, 'image_url: facioxHaPhoto, images: [facioxHaPhoto, facioxHaImg],');
content = content.replace(/image_url: eglanceImg,/g, 'image_url: eglancePhoto, images: [eglancePhoto, eglanceImg],');
content = content.replace(/image_url: facioxVitCImg,/g, 'image_url: facioxVitCPhoto, images: [facioxVitCPhoto, facioxVitCImg],');
content = content.replace(/image_url: nigrinilImg,/g, 'image_url: nigrinilPhoto, images: [nigrinilPhoto, nigrinilImg],');

content = content.replace(/{[^{]*name: 'EMOLUX BODY BAR'[\s\S]*?image_url: '',/g, match => match.replace("image_url: '',", "image_url: emoluxBarPhoto,"));
content = content.replace(/{[^{]*name: 'LEVOJAKS TABLETS'[\s\S]*?image_url: '',/g, match => match.replace("image_url: '',", "image_url: levojaksPhoto,"));
content = content.replace(/{[^{]*name: 'LEVOJAKS-M TABLETS'[\s\S]*?image_url: '',/g, match => match.replace("image_url: '',", "image_url: levojaksMPhoto,"));
content = content.replace(/{[^{]*name: 'JAKSIT SB TABLETS'[\s\S]*?image_url: '',/g, match => match.replace("image_url: '',", "image_url: jaksitSbPhoto,"));
content = content.replace(/{[^{]*name: 'LULIJAKS MAX CREAM'[\s\S]*?image_url: '',/g, match => match.replace("image_url: '',", "image_url: lulijaksPhoto,"));
content = content.replace(/{[^{]*name: 'FLUTIJAKS CREAM'[\s\S]*?image_url: '',/g, match => match.replace("image_url: '',", "image_url: flutijaksPhoto,"));
content = content.replace(/{[^{]*name: 'KERAJAKS M TABLETS'[\s\S]*?image_url: '',/g, match => match.replace("image_url: '',", "image_url: kerajaksMPhoto,"));

content = content.replace(/image_url: relumiaImg,/g, 'image_url: relumiaPhoto, images: [relumiaPhoto, relumiaImg],');
content = content.replace(/{[^{]*name: 'FLUTIJAKS LOTION'[\s\S]*?image_url: flutijaksImg,/g, match => match.replace("image_url: flutijaksImg,", "image_url: flutijaksPhoto,"));
content = content.replace(/image_url: clinderaImg,/g, 'image_url: clinderaPhoto, images: [clinderaPhoto, clinderaImg],');

fs.writeFileSync('src/data/products.js', content);
console.log('updated products.js successfully');
