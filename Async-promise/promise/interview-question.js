const animals =[
  {type:'cat', noise: 'meow'},
  {type:'dog', noise: 'woof'},
  {type:'bird', noise: 'tweet'}
];

for(let aninal of animals){
  console.log(aninal.type);
}
/*

*/
const promise = new Promise(resolve=>{
  // 立即执行
  console.log('I love animals!');  

  //
  setTimeout(() => {
    resolve("Especially cats!")
  }, 2000);
});
animals.forEach(animal => console.log(animal.noise));

promise.then(str=> console.log(str));

