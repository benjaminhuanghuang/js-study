import fetch from "node-fetch";

const getZhiHuColumn = async (id) => {
  const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
  const response = await fetch(url);
  console.log({ status: response.status });

  if (response.status !== 200) {
    // Error handling
    throw new Error(response.statusText);
  }
  return await response.json(); // Return a promise
};

const showColumnInfo = async (id) => {
  try {
    const column = await getZhiHuColumn(id);
    console.log(`Name: ${column.name}`);
    console.log(`INTRO: ${column.intro}`);
  } catch (err) {
    console.error(err);
  }
};

showColumnInfo("feweekly11111");
