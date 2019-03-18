//只有函数声明形式才能被提升 
//函数声明方式提升【成功】
function myTest(){
    foo();
    function foo(){
        alert("我来自 foo");
    }
}
myTest();


// 函数表达式方式提升【失败】
function myTest(){
    foo();
   var foo =function foo(){
        alert("我来自 foo");
    }
}
myTest();
