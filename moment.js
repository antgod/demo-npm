var moment=require('moment');

'use strict';


function formatDate(date) {
    date=new Date(date);
    var format = 'YYYY.MM.DD HH:mm:ss';
    var m = date;
    if( !date||date=='undefined'){
        return '';
    } else if (typeof date === 'string') {
        m = moment(date);
    } else {
        m = moment(date);
    }
    return m.format(format);
}


console.log(Date.now());
console.log(formatDate('2016-05-20 17:04'));