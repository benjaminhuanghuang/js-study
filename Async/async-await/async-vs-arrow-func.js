import fetch from "node-fetch";

const getZhiHuColumn = async (id) => {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  return await response.json(); // Return a promise
};

/*
 Use async funciton in promise chain
*/
getZhiHuColumn("feweekly").then((column) => {
  console.log(`Name: ${column.name}`);
  console.log(`INTRO: ${column.intro}`);
});
