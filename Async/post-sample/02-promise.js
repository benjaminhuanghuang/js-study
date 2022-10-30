const posts =[
  {
    title: 'Post 1',
    body: 'This is Post 1'
  },
  {
    title: 'Post 2',
    body: 'This is Post 2'
  }
]
function showPosts(){
  setTimeout(()=>{
    let output = '';
    posts.forEach((post, i)=>{
      output += `<li>${post.title}</li>`;
    })
    document.body.innerHTML = output;
  }, 1000);
}

/*
  Step 1.
  in my function with long time work, return a promise(callback),
*/
function createPost(post){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      posts.push(post);
      const error = false;
       if(!error){
         resolve();
       } else
       {
         reject('Error!!')
       }
    }, 2000);
  })
}

/*
  Step 2: get the promise
*/
let promise = createPost({
  title: 'Post 3',
  body: 'This is Post 3'
})

/*
  Step 3: Let the promise pass dat or error to callback
*/
promise.then(showPosts).catch(err=>console.log(err));