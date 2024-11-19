function foo1()
{
  return {
      bar: "hello"
  };
}

function foo2()
{
  /*
  when the line containing the return statement (with nothing else on the line) is encountered 
  in foo2(), a semicolon is automatically inserted immediately after the return statement.
  */
  return
  {
      bar: "hello"
  };
}

console.log("foo1 returns:");
console.log(foo1());
console.log("foo2 returns:");
console.log(foo2());