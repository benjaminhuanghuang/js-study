// The rest parameter is an array

function test(...args)
{
  console.log(args);
}

test(1,2,3);

function test2(name, ...args)
{
  console.log(args);
}

test2('Ben', 2, 3, 4);