import Vue from 'vue'
import foundation from 'foundation-sites'

import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import 'foundation-sites/dist/css/foundation.min.css'

Vue.use(foundation)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
