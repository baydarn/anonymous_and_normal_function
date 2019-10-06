
//normal function definition
function hello(){
    alert('Hello world');
}
hello();

///anonim function definition
 var anon=function(){
    var anon=function(){
        alert('I am anonymous');
    }
    anon();
}


////ANONYMOUS FUNCTION///////
$(document).ready(function(){
});

///callback in anonymous function

function functionWithCallback(callback){
    callback(3,4,5,6);
}
functionWithCallback(function(a,b,c,d){
    console.log(a,b,c,d);
})
functionWithCallback(callbackFunctionfunction);
