var http = require('http')

var server = http.createServer()

    // request请求事件处理函数，需要接收两个参数
        // Request请求对象 
            // 请求对象可以用来获取客户端的一些请求信息，例如请求路径
        // Response响应对象
            // 响应对象可以用来给客户端发送响应消息
server.on('request',function(request,response){
    console.log('收到客户端的请求了',request.url);  
    // response对象有一个方法：write可以用来给客户端发送响应数据
    // write可以使用多次，但是最后一定要使用end来结束响应，否则客户端会一直等待响应
    if(request.url == '/'){
      response.write('index')
      response.end()
    }else if(request.url == '/login'){
      // 在http协议中，Content-Type就是用来告知对方我给你发送的数据内容是什么类型的
      // text/plain 就是普通文本
      // text/html html格式的字符串
      response.setHeader('Content-Type','text/plain;charset=utf-8')
      response.write('登陆')
      response.end() 
    }else if(request.url == '/register'){
      // response.write('注册')
      var obj = {
        text:1,
        age:2,
        name: 22
      }
      response.end(JSON.stringify(obj))
    }else{

      // 响应内容只能是二进制数据或者字符串
      // 数字 对象 数组、布尔值都不行
      response.end('404 Not Found')
    }
})

server.listen(3000,function(){
  console.log('服务器启动成功了');
})