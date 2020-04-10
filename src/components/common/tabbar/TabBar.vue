<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#tabbar {
  display: flex;
  height: 49px;
  background-color: #f6f6f6;
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
}
</style>
