function ajax(url) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onload = function () {
      // HTML 5 event
      if (this.status === 200) {
        resolve(this.response);
      } else {
        reject(new Error(this.statusText));
      }
    };

    xhr.send();
  });
}

ajax("/api/user.js").then(
 value =>{
   const urls = Object.values(value);
   const tasks = urls.map(url=> ajax(url));
   // 如果在这里直接返回一个promise， 下一个then给这个promise添加callback
   return Promise.all(tasks);
 }
);
