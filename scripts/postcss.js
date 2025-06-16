const fs = require('fs');
const path = require('path');

const src = path.join('assets','stylesheets','postcss_source','main.css');
const destDir = path.join('assets','stylesheets','postcss_dist');
const dest = path.join(destDir, 'main.css');

fs.mkdirSync(destDir, {recursive: true});
fs.copyFileSync(src, dest);
console.log('CSS copied to', dest);

