## Callback

A callback is nothing special but a function that is executed at some **later** time.

- Callback hell
```
  queryDatabase({username: 'Tom'}, (err, user)=>{
    const image_url = user.profile_img_url;
    getImageByURL(`someServer/q=${image_url}`, (err, image)=>{
      transformImage(image, (err, transformedImage)=>{
        sendEmail(user.email, (err)=>{
          logTask('transformed iamge and send user an email', (err)=>{

          })
        })
      })
    })
  })
```