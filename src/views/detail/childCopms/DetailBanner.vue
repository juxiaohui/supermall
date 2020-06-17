<template>
  <!-- 轮播图 -->
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item, index) in banners" :key="index">
      <!-- <img v-lazy="item" /> -->
      <img class="image" lazy-load :src="item">
      <!-- <van-image class="image" lazy-load :src="item">
        <template v-slot:loading>
          <img src="~assets/img/common/placeholder.png" alt />
        </template>
      </van-image> -->
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { Swipe, SwipeItem, Image } from "vant";

export default {
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Image.name]: Image
  }
};
</script>

<style lang="less" scoped>
.van-swipe {
  .van-swipe-item {
    width: 100%;
    height: 8rem;
    img {
      width: 100%;
      display: block;
    }
    // color: #fff;
    // font-size: 20px;
    // line-height: 150px;
    // text-align: center;
    // background-color: #39a9ed;
  }
}
</style>