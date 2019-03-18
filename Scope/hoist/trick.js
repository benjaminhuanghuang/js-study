var v='Hello World';
(function(){
    console.log(v);
    var v='test';
})()


var v='Hello World';
(function(){
    var v;
    alert(v);
    v='test';
})()