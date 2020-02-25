var http = require('http')
var fs = require('fs')
var server = http.createServer()
var fileDir = '/Users/zsh/code/node/简单的模块化/www'
server.on('request',function(request,response){
    var filePath = '/index.html'
    fs.readdir(fileDir,function(err,data){
      // if(request.url !== '/'){
      //   filePath = request.url
      // }
      // fs.readFile(fileDir+filePath,(err,res)=>{
      //   if(err){
      //     return response.end('404 Not Found')
      //   }
      //   response.end(res)
      // })
      console.log(data)
      fs.readFile('./template.html',function(err,res){
       

        var str = ''
        data.forEach(item=>{
          str+= `<h1><a href=${fileDir}/${item} >${item}</a></h1>`
        })
       
        res = res.toString()
        res = res.replace('ddd',str)
        console.log(res)
        if(request.url ='/'){
          response.end(res)
        }
      })
    })
  
})

server.listen(3000,function(){
  console.log('服务器启动成功了');
})