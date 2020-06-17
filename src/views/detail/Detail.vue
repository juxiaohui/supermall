<template>
  <div class="detail">
    <!-- 导航 -->
    <detail-nav-bar @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll-view
      class="wrapper"
      :probe-type="3"
      :listenScroll="true"
      @scroll="scrollViewDidScroll"
      ref="scroll"
    >
      <detail-banner ref="base" :banners="this.topImages"></detail-banner>
      <detail-base-info :base-info="this.baseInfo"></detail-base-info>
      <detail-shop-info :shop-info="this.shopInfo"></detail-shop-info>
      <detail-goods-info :detail-info="this.detailInfo" @goodsInfoImageLoad="imageLoaded"></detail-goods-info>
      <detail-params-info ref="param" :params-info="this.paramInfo"></detail-params-info>
      <detail-comment-info ref="comment" :commentInfo="this.commentInfo"></detail-comment-info>
      <detail-recommend ref="recommend" :recommends="this.recommends"></detail-recommend>
    </scroll-view>

    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
  </div>
</template>

<script>
import { Toast } from "vant";
import { mapActions } from "vuex";

import DetailNavBar from "./childCopms/DetailNavBar";
import DetailBanner from "./childCopms/DetailBanner";
import DetailBaseInfo from "./childCopms/DetailBaseInfo";
import DetailShopInfo from "./childCopms/DetailShopInfo";
import DetailGoodsInfo from "./childCopms/DetailGoodsInfo";
import DetailParamsInfo from "./childCopms/DetailParamsInfo";
import DetailCommentInfo from "./childCopms/DetailCommentInfo";
import DetailRecommend from "./childCopms/DetailRecommend";
import DetailBottomBar from "./childCopms/DetailBottomBar";

import ScrollView from "components/common/scroll/ScrollView";

import { debounce } from "../../common/utils";

import {
  getDetail,
  GoodsBaseInfo,
  ShopInfo,
  ParamInfo,
  getRecommends
} from "network/home";

export default {
  name: "Detail",
  data() {
    return {
      iid: this.$route.params.id,
      topImages: [],
      baseInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTops: [],
      itemImageListener: null,
      getthemeTopY_debonce: null
    };
  },
  created() {
    this._getDetailData();
    this._getRecommends();
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh);
    this.itemImageListener = () => {
      refresh();
    };
    this.$bus.$on("goodsItemImageLoad", this.itemImageListener);

    this.getthemeTopY_debonce = debounce(this._getthemeTopY);
  },
  beforeRouteLeave(to, from, next) {
    // 页面离开不在监听
    this.$bus.$off("goodsItemImageLoad", this.itemImageListener);
    next();
  },
  methods: {
    ...mapActions(["addCart"]),
    titleClick(index) {
      // console.log(index);
      this.$refs.scroll.scrollTo(0, -this.themeTops[index], 200);
    },

    addToCart() {
      const product = {};
      product.iid = this.iid;
      product.imgURL = this.topImages[0];
      product.title = this.baseInfo.title;
      product.desc = this.baseInfo.desc;
      product.newPrice = this.baseInfo.realPrice;
      product.count = 1;
      product.checked = true;
      this.addCart(product).then(res => {
        // console.log(res);
        Toast.success(res);
      });
      // this.$store.dispatch("addCart",product);
    },
    _getDetailData() {
      getDetail(this.iid).then(res => {
        const data = res.result;
        // console.log(data);
        // 1.轮播图
        this.topImages = data.itemInfo.topImages;
        // 2.基本信息
        this.baseInfo = new GoodsBaseInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 3.店铺信息
        this.shopInfo = new ShopInfo(data.shopInfo);
        // 4.商品详细展示
        this.detailInfo = data.detailInfo;
        // 5.商品参数
        this.paramInfo = new ParamInfo(
          data.itemParams.info,
          data.itemParams.rule
        );
        // 6.获取评论信息 最新的评论信息
        if (data.rate && data.rate.cRate > 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    _getRecommends() {
      getRecommends().then(res => {
        // console.log(res);
        this.recommends = res.data.list;
      });
    },

    _getthemeTopY() {
      this.themeTops = [];
      this.themeTops.push(this.$refs.base.$el.offsetTop);
      this.themeTops.push(this.$refs.param.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE);
      // console.log(this.themeTops);
    },

    imageLoaded() {
      this.itemImageListener && this.itemImageListener();
      // console.log("imageLoad");

      this.getthemeTopY_debonce();
      // console.log(this.themeTops);
    },

    scrollViewDidScroll(position) {
      const positionY = -position.y;
      let length = this.themeTops.length;
      for (let i = 0; i < length; i++) {
        let iPos = this.themeTops[i];
        if (positionY >= iPos && positionY < this.themeTops[i + 1]) {
          if (this.currentIndex !== i) {
            this.$refs.nav.currentIndex = i;
          }
          break;
        }
      }

      // console.log(positionY);
    }
  },

  updated() {
    // console.log(this.themeTops);
  },
  components: {
    DetailNavBar,
    DetailBanner,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    DetailRecommend,
    DetailBottomBar,
    ScrollView,
    [Toast.name]: Toast
  }
};
</script>
<style lang="less" scoped>

// 安全区域适配细节
@supports (bottom: constant(safe-area-inset-bottom)) or
  (bottom: env(safe-area-inset-bottom)) {
  .wrapper {
    position: fixed;
    top: 46px;
    bottom: calc(50px + constant(safe-area-inset-bottom));
    bottom: calc(50px + env(safe-area-inset-bottom));
    left: 0;
    right: 0;
  }
}
</style>

