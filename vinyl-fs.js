var map = require('map-stream');
var vfs = require('vinyl-fs');

var log = function(file, cb) {
    console.log(file.path);
    cb(null, file);
};

vfs.src(['./js/*.js'])
    .pipe(map(log))
    .pipe(vfs.dest('./a',{
        path: '.',
        addComment: false,
        includeContent: false
    }));