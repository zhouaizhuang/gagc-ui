import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Card from "../components/lib/card/index.js"

Vue.use(Card)

Vue.config.productionTip = false
console.log('111000---')
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
