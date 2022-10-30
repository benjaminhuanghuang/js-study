import fetch from "node-fetch";

function getZhiHuColumn_Promise(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;

  fetch(url)
    .then((response) => response.json)
    .then((column) => {
      console.log(`Name: ${column.name}`);
      console.log(`INTRO: ${column.intro}`);
    });
}

// getZhiHuColumn_Promise("feweekly");

async function getZhiHuColumn_Async(id) {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  const column = await response.json();

  console.log(`Name: ${column.name}`);
  console.log(`INTRO: ${column.intro}`);
}

getZhiHuColumn_Async("feweekly");
