# Programming Asynchronous with Promises

A promise is an object that represents the eventual result of an asynchronous operation.
A promise contains information about the operation and tracks its status.

It has a state property which can be pending, fulfilled, or rejected.
It has a result property which can be the value of the operation or the reason for the failure.

When the operation is complete, the promise executes one of two methods:
- resolve, meaning that the operation was successful 
- reject, meaning that an error occurred. 
These methods change the state and result properties to reflect the outcome of the operation.

```js
const promise = new Promise((resolve, reject) => {
  // do something
  // ...
  if (success) {
    resolve('Success');
  } else {
    reject('Error');
  }
});



```

Modern JavaScript includes a method called Fetch, that creates an asynchronous HTTP request using a syntax that's based on Promises.

```js
function get(url) {
  return new Promise((resolve, reject) => {
    const httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url);
    httpRequest.onload = function() {
      if(httpRequest.status === 200) {
        resolve(httpRequest.responseText);
      } else {
        reject('Error: ' + httpRequest.status);
      }
    };
    httpRequest.send();
  });
}


get('data/tweets.json')
.then(function(data) {
  console.log(data);
}).catch(function(err) {
  console.error(err);
}).finally(function() {
  console.log('done');
});
```
