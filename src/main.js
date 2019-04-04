// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// moment的中文语言包
import 'moment/locale/zh-cn'
import plugin from '@/plugin'
import '@/mixins'

Vue.config.productionTip = false
Vue.use(plugin)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
