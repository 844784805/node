var http = require('http')
var fs = require('fs')
var server = http.createServer()
var WPath = '/Users/zsh/code/node/简单的模块化/www'
server.on('request',function(request,response){
    var filePath = '/index.html'
    if(request.url !== '/'){
      filePath = request.url
    }
    fs.readFile(WPath+filePath,(err,res)=>{
      if(err){
        return response.end('404 Not Found')
      }
      response.end(res)
    })
})

server.listen(3000,function(){
  console.log('服务器启动成功了');
})