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

console.log(sum(1,2,3));
