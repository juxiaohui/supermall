<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length !== 0">
    <div class="header">
      <div class="line start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="line end"></div>
    </div>
    <div class="content">
      <template v-for="(outerItem, outerIndex) in detailInfo.detailImage">
        <div class="title" :key="outerIndex">{{outerItem.key}}</div>
        <template v-for="(innerItem) in outerItem.list">
          <img class="image" lazy-load :src="innerItem" :key="innerItem" @load="imageLoad">
          <!-- <van-image class="image" lazy-load :src="innerItem" :key="innerItem" @load="imageLoad">
            <template v-slot:loading>
              <img style="width:100%" src="~assets/img/common/placeholder.png" alt />
            </template>
          </van-image> -->
        </template>
      </template>
    </div>
  </div>
</template>

<script>
import { Image } from "vant";
export default {
  name: "DtailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    imageLoad(){
      this.$emit('goodsInfoImageLoad');
    }
  },
  components: {
    [Image.name]: Image
  }
};
</script>

<style lang="less" scoped>
.detail-info {
  border-bottom: 0.16rem solid #f2f2f2;
  background: #fff;
  .header {
    position: relative;
    padding: 0.1rem 0.3rem;
    font-size: 0.32rem;
    .line {
      width: 1.8rem;
      height: 1px;
      background: #666;
      margin: 0.3rem 0;
      position: relative;
    }
    .end {
      float: right;
    }

  }
}

.header .start::before,
.header .end::after {
  content: "";
  position: absolute;
  width: 0.10rem;
  height: 0.10rem;
  background: #333;
}

.header .start::before {
  bottom: 0;
}

.header .end::after {
  bottom: 0;
  right: 0;
}

.content .title {
  margin: 0.50rem 0 0.30rem 0.30rem;
  font-size: 0.32rem;
}

.content .image {
  display: block;
  width: 100%;
}

// .content .image img{
//   width: 100%;
// }
</style>