/**
 * Created by lihongji on 16/3/13.
 */



var superagent = require('superagent');

var superagentPromise = require('superagent-promise');


var agent = superagentPromise(superagent, Promise);

agent('GET', `localhost:8080/a`)
    .end()
    .then(res => {
        console.log(res.text)
    })
    .then(()=>agent('GET', `localhost:8080/b`).end())
    .then(res => {
        console.log(res.text)
    })