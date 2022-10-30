import fetch from "node-fetch";

const sleep = (timeout = 2000) => {
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

const getZhiHuColumn = async (id) => {
  await sleep(2000);
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  if (response.status !== 200) {
    // Error handling
    throw new Error(response.statusText);
  }
  return await response.json(); // Return a promise
};

const showColumnsInfo_Parallel = async () => {
  // Parallel
  console.time("showColumnsInfo_Parallel")
  const feweeklyPromise = getZhiHuColumn("feweekly");
  const toolingtipsPromise = getZhiHuColumn("toolingtips");

  // Promise.all return a promise
  const [feweekly, toolingtips] = await Promise.all([feweeklyPromise, toolingtipsPromise])

  console.log(`Name: ${feweekly.name}`);
  console.log(`INTRO: ${feweekly.intro}`);
  console.log(`Name: ${toolingtips.name}`);
  console.log(`INTRO: ${toolingtips.intro}`);
  console.timeEnd("showColumnsInfo_Parallel")
};

showColumnsInfo_Parallel();
