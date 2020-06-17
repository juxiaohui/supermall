<template>
  <div class="wrapper">
    <category-menu ref="menu" class="menu"></category-menu>
    <div class="content-w">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import CategoryMenu from "./childComps/CategoryMenu";

export default {
  name: "Category",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  components: {
    CategoryMenu
    // CategoryContent
  },
  
  beforeRouteUpdate(to, from, next) {
    if (to.fullPath === '/category') {
      return;
    }
    next();
  },
  deactivated() {
    // console.log("deactivated");
  },
  activated() {
    // console.log("activated");
  }
};
</script>


<style lang="less" scoped>
.wrapper {
  display: flex;
  position: fixed;
  top: 0;
  bottom: 50px;
  left: 0;
  right: 0;

  .menu {
    flex: 1;
  }

  .content-w {
    flex: 3;
    background-color: #fff;
  }
}
</style>



