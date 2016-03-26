/**
 * Created by lihongji on 16/3/13.
 */

var url =require("url");
var querystring=require('querystring');
var u=url.parse('https://www.npmjs.com/package/url?a=1&b=2');

var a=querystring.parse(u.query);

console.log(a);

console.log(querystring.stringify(a));