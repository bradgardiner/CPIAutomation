import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Engineering = () => import('../components/Engineering.vue')


export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0}),
  routes: [
    { path: '/engineering', component: Engineering}
  ]
})
