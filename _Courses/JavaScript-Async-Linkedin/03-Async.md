# Asynchronous Programming with Async/Await

You use the async keyword as part of a function declaration or expression to specify that the function should be executed asynchronously. That is it should not block the parsers main process. Within an asynchronous function, you use the await keyword before a statement that returns a promise to indicate that the function should stop and wait for the result of the promise before proceeding. It'

async and await are essentially just syntactic sugar, meaning that they simply provide shorthand syntax for writing code using an existing coding practice.
In this case, async and await code creates and works with promises under the hood. 
So for many situations, you can write simpler code using async and await instead of expressly writing promises and still get the same results.
