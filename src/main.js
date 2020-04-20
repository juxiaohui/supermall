import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// import 'amfe-flexible/index'

import 'assets/js/adapter'

import { Lazyload } from 'vant';

Vue.use(Lazyload);

// 注册时可以配置额外的选项
// Vue.use(Lazyload, {
//   lazyComponent: true
// });

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
