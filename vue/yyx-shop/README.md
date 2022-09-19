- 老版本项目如何工程化          
  1. package.json 工程化入口           
    npm run dev            
      webpack 去配置          
      webpack-dev-server --inline --progress --config build/webpack.dev.conf.js             
    npm run build            
  2. 商业项目工程化架构            
    - 孤单的webpack.config.js 肯定不够的            
    - build 文件夹 放置 webpack 配置              
    - .dev.js .product.js 开发配置， 产品配置  .test.js            
    - webpack-merge 合并 webpack.config.js             
  
- 购物车 vuex            
  跟redux 差不多             
  - state 读  单一状态树  分模块  状态节点              
    srore(单一状态树) <- combineReducers <- reducer(模块) <- 状态对象(节点)                
  - 写            
    不能直接写 数据统一 关注修改 消灭不一致            
    dispatch action {type, payload}            
    reducer case 新的状态 mvvm               