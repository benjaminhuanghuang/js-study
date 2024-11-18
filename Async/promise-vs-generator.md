# Promise vs Generator

## Promises
A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It is part of modern JavaScript's native asynchronous handling mechanism.

### Key Characteristics:
Asynchronous by Nature: Promises inherently handle asynchronous operations.
Chaining: Promises allow chaining with .then() and .catch().
Does Not Pause Execution: Promises `do not pause` the execution of the code; instead, they schedule callbacks for later execution when the operation is complete.


## yield in Generators
The yield keyword is used inside a generator function to pause execution and return a value. It provides a way to write "lazy" iterators or manage control flow synchronously, though it can be combined with asynchronous operations.

### Key Characteristics:
Pause Execution: yield `pauses` the generator function, which can be resumed later.
Synchronous by Default: Generators are synchronous, but they can be combined with Promises for asynchronous workflows.
Explicit Control: Requires an external caller (.next()) to resume execution.