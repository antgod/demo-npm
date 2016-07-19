'use strict';

var State = require('dataton');
var assert = require('assert');
// 任意一个cursor导致的更新都将让state内部的指针指向新的状态
// 且之后的cursor返回值都是基于这个新的状态的路径的值
var state = new State({
    name: 'jack',
    profile: {
        gender: 'male'
    }
});


console.log(state.get());

let nameCursor = state.cursor("name");

nameCursor.update('jiangshan');

console.log(nameCursor());

state.set('name','lihongji');

console.log(nameCursor());
