//node minimist.js save minify -e --global
var argv = require('minimist')(process.argv.slice(2));
console.log(process.argv,argv);