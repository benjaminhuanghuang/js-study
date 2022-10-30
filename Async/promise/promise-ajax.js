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
  function (res) {
    console.log(res);
  },
  function (error) {
    console.log(error);
  }
);
