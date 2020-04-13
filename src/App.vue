<template>
  <div id="app">
    <!-- <main-tab-bar></main-tab-bar> -->

    <transition mode="out-in">
      <router-view />
    </transition>

  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {

    };
  },
  components: {

  }
};
</script>

<style lang="less">
@import "assets/css/base.css";
</style>
