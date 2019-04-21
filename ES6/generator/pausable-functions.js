//That asterisk indicates that this function is actually a generator!
function* getEmployee() {
  console.log('the function has started');

  const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

  for (const name of names) {
    console.log(name);
    //yield is what causes the generator to pause. 
    yield;
}

  console.log('the function has ended');
}

const generatorIterator = getEmployee();
generatorIterator.next();