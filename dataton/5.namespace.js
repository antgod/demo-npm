'use strict';

var State = require('dataton');
var assert = require('assert');
var state = new State();
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

// 设定一个命名空间
var ns = state.namespace('profile');

// 从命名空间开始查找cursor路径
var nameCursor = ns.cursor('name'); // 相当于state.cursor('profile.name');
var fatherCursor = ns.cursor('parent.father'); // 相当于state.cursor('profile.parent.father')

assert.equal(nameCursor(), 'jack');
assert.equal(fatherCursor().name, 'chris');