import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Test from './components/Test.vue'
import Users from './components/Users.vue'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(BootstrapVue)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path:'/', component: Users},
    {path:'/test', component: Test},
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
