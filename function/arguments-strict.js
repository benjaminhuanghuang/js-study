/*

CHAPTER 3 First-class functions for the novice: definitions and arguments


Because the getSamurai function is in strict mode, the arguments parameter
doesn’t alias function parameters, so changing the value of the first argument
won’t change the value of the samurai parameter. Because the getNinja function
is in nonstrict mode, any changes made to the arguments parameter will be
reflected in the function parameters.
*/

function getSamurai(samurai) {
    "use strict"
    arguments[0] = "Ishida";
    return samurai;
}
function getNinja(ninja) {
    arguments[0] = "Fuma";
    return ninja;
}


var samurai = getSamurai("Toyotomi");
var ninja = getNinja("Yoshi");
