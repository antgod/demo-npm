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

// 通过cursor方法得到cursor
var nameCursor = state.cursor('name');
var profileCursor = state.cursor('profile');
var genderCursor = state.cursor('profile.gender');
var profileNameCursor = state.cursor('profile.name');


// 通过调用cursor的update方法，更新其对应值
nameCursor.update('john');
// 如果只想更新其部分值，可传入路径。
profileCursor.update('gender', 'female');
// 如果想对对象内部进行操作，可传入函数
// 其返回值将被设成要更新的值
profileCursor.update(function(profile) {
    profile.name = "benson";
    profile.gender = "female";
    return profile;
});

// 能过调用cursor函数获得已经更新的值


console.log(nameCursor()==='john')
console.log(genderCursor()==='female');
console.log(profileNameCursor())