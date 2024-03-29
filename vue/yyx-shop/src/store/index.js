import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products.js'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: { // combineReducers
        products
    }
})