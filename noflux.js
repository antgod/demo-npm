var noflux = require('noflux');
var state = noflux.state;


state.load({
    a:1
});


console.log(state.get("a"));

var json = state.cursor('b');
json.update({a:1});
console.log(json.get('a'));