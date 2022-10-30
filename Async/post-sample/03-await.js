const posts = [
  {
    title: "Post 1",
    body: "This is Post 1",
  },
  {
    title: "Post 2",
    body: "This is Post 2",
  },
];
function showPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, i) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error!!");
      }
    }, 2000);
  });
}

async function init() {
  await createPost({ title: "Post 3", body: "This is post 3" });
  showPosts();
}

init();

async function fetchUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
}
