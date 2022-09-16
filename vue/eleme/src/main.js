/*
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-15 19:51:02
 * @LastEditTime: 2022-09-16 23:04:13
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// css 的预编译器 less sass stylus styled-components
// 不用拘泥于css 的语法 加快速度
// 变量，嵌套{} mixin 函数
import './common/stylus/index.styl'

createApp(App)
    .use(router)
    .mount('#app')
