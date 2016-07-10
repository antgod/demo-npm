var readline = require('linebyline'),
    rl = readline('./readme.md');
rl.on('line', function(line, lineCount, byteCount) {
    // do something with the line of text
    console.log(arguments)
})
.on('error', function(e) {
    // something went wrong
});