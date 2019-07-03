import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/vue/views/HelloWorld'
import Main from '@/vue/views/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
