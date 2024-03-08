<!--
 * @Date: 2024-03-07 00:40:35
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-08 16:54:38
 * @FilePath: /bingUI/packages/App.vue
-->
<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <c-date-range></c-date-range>
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
export default {
  name: "App",
  data() {
    return {
      locale: zhCN,
    };
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
