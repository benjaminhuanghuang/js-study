// let and const are block-scoped
// var is NOT block-scoped

// const must be assigned when declared
// const cannot be reassigned

const havingFun = true;
if (havingFun)
{
    var dinner = "pizza";
    let dinner_2 = "pizza";
}
console.log(dinner);
console.log(dinner_2);   // ERROR!