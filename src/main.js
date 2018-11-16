import Vue from 'vue'
import axios from 'axios'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'

import App from './App.vue'
import router from './router'
import store from './store'

import './registerServiceWorker'

Vue.use(VCalendar)

axios.defaults.headers.post['Content-Type'] = 'application/json'

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
