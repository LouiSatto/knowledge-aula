import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

// TEMPORARIO!!!
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ikx1aXMgQ2FybG9zIFNhdG8iLCJlbWFpbCI6Inhfc2F0b0Bob3RtYWlsLmNvbSIsImFkbWluIjp0cnVlLCJpYXQiOjE1Nzg0MDY1OTAsImV4cCI6MTU3ODY2NTc5MH0.CJgPmvysjb8-oz4cgG94NDOL_Yr5jInsjR5-0Auq608'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')