function* main() {
  try {
    const users = yield ajax("/api/users.json");
    console.log(users);

    const posts = yield ajax("/api/posts.json");
    console.log(posts);
  } catch (e) {
    console.log(e);
  }
}

const g = main();

// 递归处理
function handleResult(result) {
  if (result.done) return;

  result.value.then(
    (data) => {
      handleResult(g.next(data));
    },
    (error) => {
      g.throw(error);
    }
  );
}

handleResult(g.next());
