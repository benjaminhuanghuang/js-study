for (var i=0; i< 1000; i++)
{
  setTimeout(function(){
    console.log(this);
  }.bind(i), 0);
}

// for (var i=0; i< 1000; i++)
//   {
//     function foo(){
//       console.log(this);
//     }
//     foo.bind(i)();
//   }