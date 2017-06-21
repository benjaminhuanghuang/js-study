var text = 'outside';
function logIt(){
    console.log(text);
    var text = 'inside';     // make global text undefined
};
logIt();