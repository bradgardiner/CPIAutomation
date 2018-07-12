import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const Home = () => import('../components/Home.vue')
const Engineering = () => import('../components/Engineering.vue')
const Capabilities = () => import('../components/Capabilities.vue')
const Services = () => import('../components/Service.vue')
const Contact = () => import('../components/Contact.vue')

export default new Router({
  mode: 'history',
  fallback: false,
  scrollBehavior: () => ({ y: 0}),
  routes: [
    { path: '/engineering', component: Engineering},
    { path: '/home', component: Home},
    { path: '/capabilities', component: Capabilities},
    { path: '/services', component: Services},
    { path: '/contact', component: Contact},
    { path: '/', redirect: '/home' }
  ]
})
