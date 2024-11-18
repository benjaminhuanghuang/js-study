function plural(revert){
  if(revert) {
    return this.replace('a', 'b');
  }
  return this;
}



let str = "aaa";

//1. str.plural = plural;

//2. String.prototype.plural = plural;
//console.log(str.plural(true))
//console.log(str.plural(false))



console.log(plural.call(str, true));
console.log(plural.call(str, false));