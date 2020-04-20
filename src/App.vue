<template>
  <div id="app">
    <!-- <main-tab-bar></main-tab-bar> -->

    <!-- <transition mode="out-in"> -->
    <keep-alive>
      <router-view />
    </keep-alive>

    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less">
@import "assets/css/base.css";
</style>
