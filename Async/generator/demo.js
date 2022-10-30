function * main(){
  const users = yield ajax('/api/users.json')
  console.log(users);


  const posts = yield ajax('/api/posts.json')
  console.log(posts);
}

const g = main();

const result = g.next();

result.value.then(data=>{
  const reuslt2 = g.next(data);
  reuslt2.value.then(data=>{
    g.next(data);
  })
})