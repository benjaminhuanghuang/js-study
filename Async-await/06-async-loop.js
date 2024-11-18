import fetch from "node-fetch";
import bluebird from "bluebird"

const getZhiHuColumn = async (id) => {
  await bluebird.delay(2000);
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  if (response.status !== 200) {
    // Error handling
    throw new Error(response.statusText);
  }
  return await response.json(); // Return a promise
};

const showColumnsInfo_Serial = async () => {
  // Serial
  console.time("showColumnsInfo_Serial")
  const names = ["feweekly", "toolingtips"]

  for (const name of names){
    const column = await getZhiHuColumn(name);
    console.log(`Name: ${column.name}`);
    console.log(`INTRO: ${column.intro}`);
  }
  console.timeEnd("showColumnsInfo_Serial")
};

showColumnsInfo_Serial();
const showColumnsInfo_Parallel = async () => {
  // Parallel
  console.time("showColumnsInfo_Parallel")
  const names = ["feweekly", "toolingtips"]

  const promises = names.map(name=> getZhiHuColumn(name))

  for (const p of promises){
    const column = await p;
    console.log(`Name: ${column.name}`);
    console.log(`INTRO: ${column.intro}`);
  }
  console.timeEnd("showColumnsInfo_Parallel")
};

// showColumnsInfo_Parallel();
