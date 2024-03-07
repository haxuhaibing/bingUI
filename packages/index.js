/*
 * @Date: 2024-03-07 00:44:11
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-07 21:43:17
 * @FilePath: /bingUI/packages/index.js
 */

// 导入组件，组件必须声明 name
import CBtn from './cbtn/CBtn.vue'
import CTable from './cTable/CTable.vue'



export default {
    install(Vue) {
        Vue.component(CBtn.name, CBtn),
            Vue.component(CTable.name, CTable)
    
    }
}
