/**
 * Created by lihongji on 16/3/13.
 */

var koa = require('koa');
var app = koa();

// x-response-time
app.use(function *(next){
    // (1) 进入路由
    var start = new Date;
    console.log(1);
    yield next;
    // (5) 再次进入 x-response-time 中间件，记录2次通过此中间件「穿越」的时间
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
    console.log(5);
    // (6) 返回 this.body
    console.log(6);
});

// logger
app.use(function *(next){
    // (2) 进入 logger 中间件
    var start = new Date;
    console.log(2);
    yield next;
    // (4) 再次进入 logger 中间件，记录2次通过此中间件「穿越」的时间
    var ms = new Date - start;
    console.log('4:%s %s - %s', this.method, this.url, ms);
});

// response
app.use(function *(){
    // (3) 进入 response 中间件，没有捕获到下一个符合条件的中间件，传递到 upstream
    console.log(this.request);
    var request=this.request;
    if(request.url=="/a"){
        this.body = 'aa';
        return ;
    }else if(request.url=="/b"){
        this.body = 'bb';
        return ;
    }
    this.body = '{abc:1}';
});


app.listen(8080);