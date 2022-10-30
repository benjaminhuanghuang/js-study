import bluebird from "bluebird";

/*
  await keyword 接受一个promise, 把promise resolve的结果赋给 "=" 左边的变量
  因此可以和任何promise library 一起使用
*/
async function main() {
  console.log("waiting...");
  await bluebird.delay(10000);
  console.log("done...");
}

main();
