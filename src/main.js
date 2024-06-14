import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import { BootstrapVue } from 'bootstrap-vue'
import { store } from './store'
import VueI18n from 'vue-i18n'
import messages from './locales'
import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(VueI18n)
Vue.use(BootstrapVue)

const i18n = new VueI18n({
  locale: 'en',
  messages
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
