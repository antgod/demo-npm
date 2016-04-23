var delegate = require('delegates');

var proto={};

//delegate(proto, 'request');
//
//console.log(proto);

var a=delegate(proto, 'request').fluent('query')

console.log(proto.query);
console.log(a.target);
console.log(a.proto==proto);
// getter
//var q = request.query();
//
//// setter (chainable)
//request
//    .query({ a: 1 })
//    .query({ b: 2 });