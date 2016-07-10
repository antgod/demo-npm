var express = require('express');
var nodeExcel = require('excel-export');
var app = express();

app.get('/Excel', function(req, res){
    var conf ={};
    conf.cols = [{
        caption:'你好',
        type:'string'
    },{
        caption:'中国',
        type:'string'
    },{
        caption:'北京',
        type:'string'
    },{
        caption:'d',
        type:'string'
    }];
    conf.rows = [
        ['pi', new Date(Date.UTC(2013, 4, 1)), true, 3.14],
        ["e", new Date(2012, 4, 1), false, 2.7182],
        ["M&M<>'", new Date(Date.UTC(2013, 6, 9)), false, 1.61803],
        ["null date", null, true, 1.414]
    ];
    var result = nodeExcel.execute(conf);
    res.setHeader('Content-Type', 'application/vnd.openxmlformats');
    res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
    res.end(result, 'binary');
});

app.listen(3000);
console.log('Listening on port 3000');