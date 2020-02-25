var foo = 'bbb1'
exports.foo = foo

exports.readFile = function(path,callback){
  console.log('文件路径：',path)
}