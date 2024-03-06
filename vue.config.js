/*
 * @Date: 2024-03-07 00:27:11
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-07 00:41:01
 * @FilePath: /npm-test/vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'packages/main.js',
      // 模板来源
      template: 'public/index.html',
      // 输出文件名
      filename: 'index.html'
    }
  }
})


 
