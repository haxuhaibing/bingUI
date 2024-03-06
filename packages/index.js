/*
 * @Date: 2024-03-07 00:44:11
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-07 00:44:30
 * @FilePath: /npm-test/packages/index.js
 */
// packages/textarea/index.js

// 导入组件，组件必须声明 name
import CBtn from './cbtn/CBtn.vue'

// 为组件添加 install 方法，用于按需引入
CBtn.install = function (Vue) {
    Vue.component(CBtn.name, CBtn)
}

export default CBtn
