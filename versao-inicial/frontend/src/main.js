import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NSwibmFtZSI6ImNhcmxvcyB0cmVzIiwiZW1haWwiOiJjYXJsb3N0cmVzQGhvdG1haWwuY29tIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1NzgzMTgxODcsImV4cCI6MTU3ODU3NzM4N30.mcTc06qVJijIFgRJqBp2gi_2qVU-cRp1bF2baZGs8E8'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')