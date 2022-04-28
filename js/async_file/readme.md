- npm init -y

npm  node(js带来到后端) package  management

1. 网页 frontend
2. backend
3. 嵌入式 js -> c
4. App 取代android/ios

npm i(install) json-server     
- node_modules/ json-server  从远程到本地  本地项目的依赖     
- 项目描述文件中(package.json)多了(dependencies)

1. 提升项目逼格     
    后端项目 npm init -y
2. 无穷无尽的package 可以安装      
    npm i json-server(数据库服务)     
    npm i live-server(启动web http服务)      
    package.json 项目描述文件中dependencies依赖
3. npm run  package.json scripts  命令对象      
    - 数据服务 npm run dev  json-server --watch db.json   3000端口
    - web服务 npm run start  live-server  默认打开文件下的index.html 8080端口