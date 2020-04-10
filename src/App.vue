<template>
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <router-view />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabbar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style lang="less">
@import "assets/css/base.css";
</style>
