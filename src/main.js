import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from '@/request/api'
import './utils/remSetting'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.js'
import './assets/iconfont/icon.css'

Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
