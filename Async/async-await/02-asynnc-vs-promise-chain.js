import fetch from "node-fetch";

/*
  await keyword 接受一个promise, 把promise resolve的结果赋给 "=" 左边的变量
  async function 会返回一个promise, 因此async function can be used in promise chain
*/
async function getZhiHuColumn(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json(); // Return a promise 
}

/*
 Use async function in promise chain
*/
getZhiHuColumn("feweekly").then((column) => {
  console.log(`Name: ${column.name}`);
  console.log(`INTRO: ${column.intro}`);
});
