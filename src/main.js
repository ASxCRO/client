import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Test from './components/Test.vue'
import Users from './components/Users.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import { BootstrapVue } from 'bootstrap-vue'
import Contact from './pages/Contact.vue'
import { store } from './store'
import VueI18n from 'vue-i18n'
import messages from './locales'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueI18n)
Vue.use(BootstrapVue)

const i18n = new VueI18n({
  locale: 'en', // set locale
  messages // set locale messages
})

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Contact },
    { path: '/test', component: Test },
    { path: '/users', component: Users }
  ]
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
