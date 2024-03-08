/*
 * @Date: 2024-03-07 00:27:11
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-08 16:59:52
 * @FilePath: /bingUI/packages/main.js
 */
import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false
import Bingui from './index'
Vue.use(Bingui)

Vue.use(Antd);
if (process.env.NODE_ENV === 'development') {
 // Vue.use(Antd);
}
new Vue({
  render: h => h(App),
}).$mount('#app')
