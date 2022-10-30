//setTimeout定时器指定的函数必须要在当前执行队列为空时才会执行。
function mytest() {  
    for(var i = 0; i < 5; i ++)  
        setTimeout(function(){console.log(i);}, 1);
}

mytest();

function mytest2() {  
    for(var i = 0; i < 5; i ++)  
        setTimeout(function(){console.log(i);}, 1);
}

mytest2();

// Correct 
console.log("Correct behavior");
for (var i = 0; i < 5; i++) {
	(function(x) {
    	setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}