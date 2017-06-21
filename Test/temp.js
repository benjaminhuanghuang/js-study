for(var i=1; i<=10; i++) {
  setTimeout(function() {
     console.log(i); }, 1000);
}

function foo1() { return { bar: "hello" }; } 
function foo2() { return { bar: "hello2" }; } 
console.log(foo1()); console.log(foo2());

//Write a sum function that accepts any number of arguments and returns their sum.
//sum(1,2,3) == > 6
//sum(1,2) => 3

function sum()
{
    var s =0;
    var length = arguments.length;
    for (var i= 0 ; i < length;i++)
    {
        s += arguments[i];
    }
    
    return s;
}

function sum(nums)
{
    var s = 0;
    var length = nums.length;
    for (var i =0 ; i< length;i++)
    {
        s+= nums[i];
    }
    
    return s;
}

var obj;
if (obj){
    //....
    
    
    
}

//lodash

/*
server response failure status  400, details  => #/0/value/1/user/person_details/addresses/0/postal_code

id = zipcode -is the element on the client 
var args = server_response.split('/');
var zipcode = args[args.length-1];
var regex = /\d5/i;
if (regex.test(zipcode))

*/

//html
<div id="container">
    <ul></ul>
</div>

// js
fetch('api_url', then((data)=>{
    var container = doc.getElementById("container");
    var dom_ul = doc.querySlector("ul");
    var args = data.split('/');
    var zipcode = args[args.length-1];
    var regex = /\d5/i;
   if (regex.test(zipcode)) {
       var dom_li = doc.createElement("li");
       dom_li.innerHtml = zipcode;
       dom_ul.appendChild(li);
   }           
}))
closure



