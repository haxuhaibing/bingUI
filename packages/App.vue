<!--
 * @Date: 2024-03-07 00:40:35
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-07 00:54:26
 * @FilePath: /npm-test/packages/App.vue
-->
<template>
  <div id="app">
    <c-btn> <template v-slot:header>77 </template>888</c-btn>
  </div>
</template>

<script>
export default {
  name: "App",
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
