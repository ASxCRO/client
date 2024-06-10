import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Test from './components/Test.vue'
import Users from './components/Users.vue'
import { BootstrapVue } from 'bootstrap-vue'
import Contact from './pages/Contact.vue'
import { store } from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Contact },
    { path: '/test', component: Test },
    { path: '/users', component: Users }
  ]
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
