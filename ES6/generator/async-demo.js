function request(url){
  makeAjaxCall(url, function(response){
    it.next(response)
  })
}


function* main(){
  var result1 = yield request('url1')
  var data = JSON.parse(result1)

  var result2 = yield request('url2')
  var resp = JSON.parse(result2)

  console.log(resp.value)
}

var it = main()
it.next()
