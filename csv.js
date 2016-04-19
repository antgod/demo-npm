var csv = require('csv');
var fs=require('fs');


var stream = csv.stream();
var fout=fs.createWriteStream('test.csv');
fout.write(new Buffer('\xEF\xBB\xBF','binary'));//add utf-8 bom

stream.pipe(fout);

stream.write( ['标题', '内容', '长度'],
    ['one', 'two', 'three']);