'use strict';
let url='http://localhost:8080/echo/mark';

fetch(url,{
    credentials: "same-origin",
    method:'post',
    mode:'no-cors',
    body:{hello:world}
}).then(res=>{
    if(contentType=='json'){
        return res.json();
    }else{
        return res.text();
    }
}).then(data=>{
    console.log(data);
})