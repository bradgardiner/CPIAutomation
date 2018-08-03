// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueImg from 'v-img'
import App from './App'
import router from './router'

Vue.config.productionTip = false


Vue.use(VueImg,{
  altAsTitle: true,
  sourceButton: false,
  thumbnails: true,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCZKDjKs-zJ5HsxODM_a6YrccgYb3ueXcg',
    libraries: 'places',
  },
 })
