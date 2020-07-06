import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from "./http/api"

//封装请求
Vue.prototype.$api = api
//跨域
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
