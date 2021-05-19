import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/remSetting'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfont/iconfont.js'
import './assets/iconfont/icon.css'

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
