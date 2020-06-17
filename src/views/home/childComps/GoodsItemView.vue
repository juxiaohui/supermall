<template>
  <router-link class="goods-item" tag="div" :to="'/goodsDetail/' + (goodsItem.iid || goodsItem.shop_id)">
    <van-image class="image" @load="imageLoad" lazy-load :src="goodsItem.image || goodsItem.img || goodsItem.show.img">
      <template v-slot:loading>
        <img style="width:100%" src="~assets/img/common/placeholder.png" alt="">
      </template>
    </van-image>
    <!-- <img class="image" lazy-load :src="goodsItem.show.img" alt /> -->
    <div class="desc-info">
      <p class="title">{{goodsItem.title}}</p>
      <div class="info">
        <span class="price">￥{{goodsItem.price}}</span>
        <img class="icon" src="~assets/img/common/collect.svg" />
        <span class="cfav">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
import { Image } from "vant";

export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    imageLoad(){
      this.$bus.$emit('goodsItemImageLoad')
    }
  },
  components: {
    [Image.name]: Image
  }
};
</script>

<style lang="less" scoped>
.goods-item {
  /* text-align: center; */
  color: #333;
  padding-bottom: 1.3rem;

  .image {
    width: 100%;
    border-radius: 0.1rem;
  }

  .desc-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.2rem;

    .title {
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      word-wrap: break-word;
      white-space: normal !important;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      font-size: 0.28rem;
    }

    .info {
      font-size: 0.26rem;
      margin-top: 0.06rem;

      .price {
        color: #ff5777;
        /* padding-right: 10rpx; */
      }

      .cfav {
        /* padding-left: 10rpx; */
        position: relative;
      }

      .icon {
        width: 0.3rem;
        height: 0.3rem;
        padding: 0 0.06rem 0 0.1rem;
        position: relative;
        top: 0.04rem;
      }
    }
  }
}

/* .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 28rpx;
} */
</style>