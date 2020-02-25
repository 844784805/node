// 在node中专门提供了一个核心模块：http
// http这个模块的职责就是帮你创建编写服务器的


// 1、加载http核心模块
var http = require('http')
var fs=require('fs')

// 2、使用http.createServer()方法创建一个Web服务器
    // 返回一个Server实例
var server = http.createServer()

// 3、服务器要干嘛？
    // 提供服务：对 数据的服务
    // 发请求
    // 接收请求
    // 处理请求
    // 给个反馈（发送响应）
server.on('request',function(request,response){
    // console.log('收到客户端的请求了');  
  if(request.url==='/'){
    fs.readFile('./index.html',function(error,data){
      if(error){
        response.setHeader('Content-Type','text/plain;charset=utf-8')
        response.end('读取文件失败，请稍后重试')
      }else{
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.end(data)
      }
    })
  }
})

// 4、绑定端口号，启动服务器
server.listen(3000,function(){
  console.log('服务器启动成功了');
})