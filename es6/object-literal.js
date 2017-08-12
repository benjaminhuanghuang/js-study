let name = 'Ben';
let age = 25;

let filedName = "home"; // add filed to obj dynamically

let obj ={
  name : "Tom",   //overwrite 'Ben'
  age,
  greet(){    // add function
    console.log(this.name + ' '+ this.age);
  },
  'Greet me'(){
    console.log('Greet Me: '+ this.name + ' '+ this.age);
  },
  [filedName]: 'Shanxi',
}

console.log(obj);
obj.greet();
obj['Greet me']();