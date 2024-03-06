/*
 * @Date: 2024-03-07 00:27:11
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-07 00:48:19
 * @FilePath: /npm-test/packages/main.js
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import CBtn from './index'
Vue.use(CBtn)

new Vue({
  render: h => h(App),
}).$mount('#app')
