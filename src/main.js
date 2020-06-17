import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import FastClick from 'fastclick'

// 处理移动端click事件300毫秒延迟
FastClick.attach(document.body);

// import 'amfe-flexible/index'
import './common/filter'

import 'assets/js/adapter'

import { Lazyload } from 'vant';
Vue.use(Lazyload);
// 注册时可以配置额外的选项
// Vue.use(Lazyload, {
//   lazyComponent: true
// });


// 全局时间总线
Vue.prototype.$bus = new Vue();



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
