
var request=require("superagent");

request
    .post('localhost:8080/')
    .send({ name: 'Manny', species: 'cat' })
    .set('X-API-Key', 'foobar')
    .set('Accept', 'application/json')
    .end(function(err, res){
        console.log(res.text);
        // Calling the end function will send the request
    })