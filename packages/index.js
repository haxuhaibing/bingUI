/*
 * @Date: 2024-03-07 00:44:11
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-08 16:47:22
 * @FilePath: /bingUI/packages/index.js
 */

// 导入组件，组件必须声明 name

import CBtn from './cbtn/CBtn.vue'
import CDateRange from './CDateRange/CDateRange.vue'


export default {
    install(Vue) {
        Vue.component(CBtn.name, CBtn),
        Vue.component(CDateRange.name, CDateRange)

    }
}
