## 文件系统
- fs是file-system的简写，就是文件系统的意思
- 在Node中如果想要进行文件操作，就必须引入fs这个核心模块
- 在fs这个核心模块中，就提供了所有的文件操作相关的API
- fs.readFile就是用来读取文件的


### 文件读取
```
//1、使用require方法加载fs核心模块
var fs = require('fs')

//2、读取文件
  // 第一个参数就是要读取的文件路径
  // 第二个参数是一个回调函数 
      // error
      // 如果读取失败， error就是错误对象
      // 如果读取成功， error就是null
      // data
      // 如果读取成功，data就是读取到的数据
      // 如果读取失败，error就是错误对象
fs.readFile('./2.txt',function(error,data){
  // <Buffer 31 31 31 31 31 31 31 31>
  // 文件中存储的其实都是二进制数据 0，1
  // 这里为什么看到的不是0和1呢？原因是二进制转为16进制了
  // 但是无论是二进制还是16进制，人类都不认识
  // 所以我们可以通过toString方法把其转为我们能认识的字符
  // console.log(data)
  if(error){
    console.log('读取文件失败')
  }else{
    console.log(data);
  }  
})
```
 ### 写入文件
```
var fs=require('fs')
// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
    // error：
    // 成功：
        // 文件写入成功
        // error是null
    // 失败：
        // 文件写入失败
        // error就是错误对象


fs.writeFile('./你好.txt','大家好，我是node',function(error){
  // console.log("文件写入成功");
  if(error){
    console.log('文件写入失败')
  }else{
    console.log('文件写入成功');
  }
})
```
***
## HTTP模块
 - 在node中专门提供了一个核心模块：http
 - http这个模块的职责就是帮你创建编写服务器的

 ```
 // 1、加载http核心模块
var http = require('http')

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
    console.log('收到客户端的请求了');  

})

// 4、绑定端口号，启动服务器
server.listen(3000,function(){
  console.log('服务器启动成功了');
})
 ```
 ```
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
 ```
 ***
 ## 核心模块
 > Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中了
 - 文件操作的fs核心模块
 - http服务构建的http模块
 - path路径操作模块
 - os操作系统信息模块
 
***

## require
 > 它的作用
  1. 加载文件模块并执行里面的代码
  2. 拿到被加载文件模块导出的接口对象
  
 > 在Node中，模块有三种：
  1. 具名的核心模块，例如fs、http
  2. 用户自己编写的文件模块 
     相对路径必须加./ 否则报错
     可以省略后缀名 
  3. 在Node中，没有全局作用域，只有模块作用域
     外部访问不到内部
     内部也访问不到外部
 
## export
 - 在每个文件模块中都提供了一个对象：exports
 - exports默认是一个空对象
 - 所有需要被外部访问的成员挂载到这个exports对象中

****
 在http协议中，Content-Type就是用来告知对方我给你发送的数据内容是什么类型的
 - text/plain 就是普通文本
 - text/html html格式的字符串

 图片不需要指定编码，我们常说的编码一般指的是：字符编码

***
> return有两个作用
  1. 方法返回值
  2. 阻止代码继续往后执行