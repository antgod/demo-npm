var noflux = require('noflux');
var state = noflux.state;


state.load({
    a:1
});


console.log(state.get("a"));

var json = state.cursor();
//json.update([])
//console.log(json());
//json.update([1,2,3]);
//console.log(json.get());



json.update({'rowTitle':["基础", "效果", "行为", "转化"]});
console.log(json.get());


console.log(state.get("a"));