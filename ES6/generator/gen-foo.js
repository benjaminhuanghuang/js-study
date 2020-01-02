function* foo(){
  let x = yield 'Please give a value for x'
  console.log(x)
  
  let y = yield 'Please give a value for y'
  console.log(y)
  
  let z = yield 'Please give a value for z'
  console.log(z)
  
  return (x+y+z)
}

let generatingFoo = foo()
// returns an iterable object stroed in generatingFoo

generatingFoo.next()
// {value:'Please give a value for x', done: false} 

generatingFoo.next(1)
// {value:'Please give a value for y', done: false} 

generatingFoo.next(4)
// {value:'Please give a value for z', done: false} 

generatingFoo.next(9)