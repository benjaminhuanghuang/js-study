/*
Tricky Javascript code snippets asked in the interview
*/

const user = {
  name: 'Raj',
  location: {
    city: 'NY',
    state: 'NY'
  }
};
const copy = Object.assign({}, user);
// OR
// const copy = { ...user };
copy.location.city = 'Albany';
console.log('original: ', user.location);   // { city: 'Albany', state: 'NY' }
console.log('copy:', copy.location);        // { city: 'Albany', state: 'NY' }

/*

Object.assign or spread operator, it only does SHALLOW copy
*/