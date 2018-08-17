// From CS50's Mobile App Development with React Native
// Lecture 0: Overview, JavaScript
thisIsHoisted();
// thisIsNotHoisted();
console.log(typeof thisIsNotFunction); // variable thisIsNotFunction is hoisted but it is undefined
// thisIsNotFunction(); // TypeError: thisIsNotFunction is not a function

function thisIsHoisted()
{
    console.log('this is a function hoisted');
}

// Cause ReferenceError: thisIsNotHoisted is not defined
const thisIsNotHoisted = function()
{
    console.log('this is a function NOT hoisted');
}


var thisIsNotFunction = function()
{
    console.log('this is not a function NOT hoisted');
}

