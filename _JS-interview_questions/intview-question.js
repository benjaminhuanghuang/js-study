function sayHello(){
  const loop = true;

  if(loop){
    var hello = 'hello';
    var hello2 = 'helllo2'
  }
  else {
    var hello3 = 'hello3';
  }

  return(()=>{
    setTimeout(()=> console.log(hello2), 2000)
  })();
}


sayHello();