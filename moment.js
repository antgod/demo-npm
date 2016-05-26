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


console.log(moment('1970-01-01').format());
console.log(formatDate('2016-05-20 17:04'));
console.log(moment.unix(1318781876).format('YYYY-HH-DD HH:mm:ss'))
console.log(moment.duration(999000).asSeconds());
console.log(moment.duration().asMinutes());
