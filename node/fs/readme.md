测试

- 读取文件 fs(fileSystem) api
    拥有两种代码风格     
    1. 同步写法
    2. 异步写法


- 查找指定目录下的最大文件     
    1. api 获得目录下的内容？ readdir
    2. let maxSize = 0; 循环遍历  fs.stat  详细信息
    3. 如果是目录？ isDir 判断是否是目录   是 递归