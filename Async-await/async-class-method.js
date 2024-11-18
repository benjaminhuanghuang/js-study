import fetch from "node-fetch";

class APIClient {
  async getZhiHuColumn(id) {
    const url = `https://zhuanlan.zhihu.com/api/columns/${id}`;
    const response = await fetch(url);
    return await response.json(); // Return a promise
  }
}

(async() => {
  const client = new APIClient();
  const column = await client.getZhiHuColumn('feweekly');
  console.log(`Name: ${column.name}`);
  console.log(`INTRO: ${column.intro}`);
})();