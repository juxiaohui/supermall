<template>
  <div id="app">
    <div class="main-wrapper">
      <transition mode="out-in">
        <keep-alive exclude="Detail">
          <router-view />
        </keep-alive>
      </transition>

      <van-tabbar
        v-model="active"
        active-color="#ff8198"
        inactive-color="#76797B"
        @change="tabChange"
        v-show="$route.meta.isNeedTabbar"
        route
      >
        <van-tabbar-item
          v-for="(item,index) in tabbars"
          :key="index"
          :to="item.name"
          :badge="item.badge == 0 ?  '' : (cartCount == 0 ? '' : cartCount)"
          :name="item.aName"
        >
          <span>{{item.title}}</span>
          <img slot="icon" slot-scope="props" :src="props.active ? item.active : item.normal" />
        </van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, NavBar } from "vant";
import { mapGetters } from "vuex";

export default {
  name: "App",
  data() {
    return {
      active: "home",
      tabbars: [
        {
          name: "/home",
          title: "首页",
          aName: "home",
          badge: 0,
          normal: require("assets/img/tabbar/home.svg"),
          active: require("assets/img/tabbar/home_active.svg")
        },
        {
          name: "/category",
          title: "分类",
          aName: "category",
          badge: 0,
          normal: require("assets/img/tabbar/category.svg"),
          active: require("assets/img/tabbar/category_active.svg")
        },
        {
          name: "/cart",
          title: "购物车",
          aName: "cart",
          badge: 1,
          normal: require("assets/img/tabbar/shopcart.svg"),
          active: require("assets/img/tabbar/shopcart_active.svg")
        },
        {
          name: "/profile",
          title: "我的",
          aName: "profile",
          badge: 0,
          normal: require("assets/img/tabbar/profile.svg"),
          active: require("assets/img/tabbar/profile_active.svg")
        }
      ]
    };
  },
  methods: {
    tabChange(active) {
      // console.log(active)
    }
  },
  computed: {
    ...mapGetters(["cartCount"])
  },
  mounted() {
    // console.log(this.$route);
  },
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [NavBar.name]: NavBar
  }
};
</script>

<style>
@import "assets/css/base.css";
.van-tabbar {
  background-color: rgba(254, 254, 254, 0.95);
  position: fixed !important;
}
</style>

<style lang="less" scoped>
@supports (bottom: constant(safe-area-inset-bottom)) or
  (bottom: env(safe-area-inset-bottom)) {
  .main-wrapper {
    padding-bottom: calc(50px + constant(safe-area-inset-bottom));
    padding-bottom: calc(50px + env(safe-area-inset-bottom));
  }
}

// .main-wrapper {
//   padding-bottom: 50px;
// }

.van-nav-bar {
  background-color: rgba(26, 27, 47, 0.85);

  .van-nav-bar__left {
    .van-icon::before {
      color: #fff;
    }
    .van-nav-bar__text {
      color: #fff;
    }
  }
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>