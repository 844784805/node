// fs是file-system的简写，就是文件系统的意思
// 在Node中如果想要进行文件操作，就必须引入fs这个核心模块
// 在fs这个核心模块中，就提供了所有的文件操作相关的API
// fs.readFile就是用来读取文件的

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