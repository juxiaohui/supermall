<template>
  <div class="wrapper">
    <home-banner-swiper :banners="banners"></home-banner-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view></home-feature-view>
    <home-tab-control-view :titles="titles"></home-tab-control-view>
  </div>
</template>

<script>
import HomeBannerSwiper from "./childComps/HomeBannerSwiper";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeatureView from "./childComps/HomeFeatureView";
import HomeTabControlView from "./childComps/HomeTabControlView";

import { getHomeMultidata, getGoodsData } from "network/home";

// import { debounce } from "common/utils"

export default {
  name: "Home",
  data() {
    return {
      scrollTop: 0,
      banners: [],
      recommends: [],
      titles: [
        { title: "流行", type: "pop" },
        { title: "新款", type: "new" },
        { title: "精选", type: "sell" }
      ]
    };
  },
  components: {
    HomeBannerSwiper,
    HomeRecommendView,
    HomeFeatureView,
    HomeTabControlView
  },
  created() {
    // 获取首页多个数据
    this._getHomeMultidata();

    //请求商品数据
    this._getGoodsData("pop", 1);

    // 调用防抖动
    // let foo = function(){};
    // const debounceFunc = debounce(foo);
    // debounceFunc()
  },
  methods: {
    _getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    _getGoodsData(type, page) {
      getGoodsData(type, page).then(res => {
        // console.log(res);
      });
    }
  },

  // 变成活跃状态时 滚动到记录的位置
  activated() {
    document.documentElement.scrollTop = this.scrollTop;
  },

  // 路由离开记录滚动位置
  beforeRouteLeave(to, from, next) {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);
    this.scrollTop = scrollTop;
    next();
  }
};
</script>

<style lang="less" scoped>
</style>