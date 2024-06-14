import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Logout from './components/Logout.vue'
import Contact from './pages/Contact.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/dashboard', component: Contact },
    { path: '/logout', component: Logout }
  ]
})

export default router
