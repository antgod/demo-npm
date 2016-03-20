//node minimist.js save minify -e --global
var argv = require('optimist');


console.log(argv([ '-x', '1', '-y', '2' ]).argv);