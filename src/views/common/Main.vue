<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view />
    </keep-alive>
    
    <van-tabbar 
      v-model="active" 
      active-color="#ff8198" 
      inactive-color="#76797B" 
      route>
      <van-tabbar-item 
      v-for="(item,index) in tabbars" :key="index" :to="item.name">
        <span 
          :class="currentIndex == index ? active : '' ">{{item.title}}</span>
        <img 
          slot="icon" 
          slot-scope="props" 
          :src="props.active ? item.active : item.normal" />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import { Tabbar, TabbarItem, NavBar } from "vant";

export default {
  data() {
    return {
      currentIndex: 0,
      active: 0,
      canBack: false,
      tabbars: [
        {
          name: "/main/home",
          title: "首页",
          normal: require("assets/img/tabbar/home.svg"),
          active: require("assets/img/tabbar/home_active.svg")
        },
        {
          name: "/main/category",
          title: "分类",
          normal: require("assets/img/tabbar/category.svg"),
          active: require("assets/img/tabbar/category_active.svg")
        },
        {
          name: "/main/cart",
          title: "购物车",
          normal: require("assets/img/tabbar/shopcart.svg"),
          active: require("assets/img/tabbar/shopcart_active.svg")
        },
        {
          name: "/main/profile",
          title: "我的",
          normal: require("assets/img/tabbar/profile.svg"),
          active: require("assets/img/tabbar/profile_active.svg")
        }
      ]
    };
  },
  methods: {},
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [NavBar.name]: NavBar
  }
};
</script>

<style lang="less" slot-scope>
.main-wrapper {
  padding-bottom: 50px;
}
.van-tabbar {
  background-color: rgba(254, 254, 254, 0.85);
}

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