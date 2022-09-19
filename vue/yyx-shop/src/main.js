import Vue from 'vue'
import App from './App'
import store from './store'

// Vue React 不一样
// react 是声明式的 Provider store
// Vue 是渐进式的
new Vue({
    el: '#app',
    store,
    components: { App },
    template: '<App/>'
})