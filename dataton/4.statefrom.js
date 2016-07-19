

var State = require('dataton');
var assert = require('assert');
var state = new State();
state.load({
    profile: {
        name: 'jack',
        age: 18
    }
});

var profile = state.get('profile');
var profilecursor = state.cursorFromObject(profile);

console.log(profilecursor(),profile);