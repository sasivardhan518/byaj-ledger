// Wraps ../interest-calculator.html into a standalone page for hosting. Run: node site/build.js
const fs = require('fs'), path = require('path');
const page = fs.readFileSync(path.join(__dirname, '..', 'interest-calculator.html'), 'utf8').replace(/^<meta charset="utf-8">\s*/, '');
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<style>body{margin:0}img{max-width:100%}</style>
<script src="config.js"></script>
</head>
<body>
${page}
</body>
</html>
`;
fs.writeFileSync(path.join(__dirname, 'index.html'), html);
console.log('Wrote site/index.html');
