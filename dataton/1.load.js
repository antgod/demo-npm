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

state.load({
    profile: {
        name: "jack",
        age: 10,
        parent: {
            mother: {
                name: 'nina'
            },
            father: {
                name: 'chris'
            }
        }
    }
});


console.log(state.get());