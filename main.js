import Vue from 'vue'
import App from './App'
// 引入自己封装的网络请求方法
import {request} from './network/request.js'
//并把它挂载在vue原型上
Vue.prototype.$request=request;

//引入vuex
import store from './store'


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
