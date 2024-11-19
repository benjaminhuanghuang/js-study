/*
console.log.__propto__ points to Function.prototype

every function has a call method from Function.prototype.call

The code can be simplified as follows:

    Function.prototype.call.apply((a)=> a, [1,2]);

every function has a apply method from Function.prototype.apply

apply function is called like: 
    func.apply(context, [args])
    context.func([args])

The code can be simplified as follows:
    
    const fn = (a) => a;
    call.apply(fn, [1,2]);
    fn.call(1,2);    // 1 is this passed to fn, 2 is parameter passed to fn 
    fn(2);
*/

const r = console.log.call.call.call.apply((a)=> a, [1,2]);

console.log(r); // 1