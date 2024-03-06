<!--
 * @Date: 2024-03-07 00:29:17
 * @LastEditors: hi@xuhaibing.com
 * @LastEditTime: 2024-03-07 00:53:47
 * @FilePath: /npm-test/packages/cbtn/CBtn.vue
-->
<template>
  <button>
    <slot name="header"></slot>
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "CBtn",
  props: {
    type: {
      default: "primary",
      requied: false,
      type: String,
    },
  },
};
</script>
<style></style>
