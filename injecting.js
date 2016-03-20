var injecting = require('injecting');
var app = injecting();
app.register('name', 'lihongji');
app.register('age', '30');
app.register('say', function(name,age){
    console.log(name,age);
});
app.register('person', function(say) {
    say();
});

app.invoke(function(person) {
    person();
});

