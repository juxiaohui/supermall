<template>
  <router-link :to="path" tag="div" class="tabbar-item">
    <slot v-if="isActive" name="item-icon-active"></slot>
    <slot v-else name="item-icon"></slot>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red"
    }
  },
  data() {
    return {}
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    }
  }
}
</script>

<style lang="less" scope>
.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  img {
    margin-top: 3px;
    margin-bottom: 2px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
}
</style>