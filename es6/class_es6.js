// Class in ES5
function Bear(name)
{
    this.name = name;
    this.slogan = function()
    {
        console.log("Hello");
    }
}

var smokey = new Bear("Smokey");
smokey.slogan();

// Class in ES6
class BearES6
{
    constructor(name){
        this.name = name;
    }

    slogan(){
        console.log("Hello");
    }
}