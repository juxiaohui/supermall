<template>
  <div class="base-info" v-if="Object.keys(baseInfo).length !== 0">
    <div class="title">{{baseInfo.title}}</div>
    <div class="price-info">
      <span class="new-price">{{baseInfo.newPrice}}</span>
      <span class="old-price">{{baseInfo.oldPrice}}</span>
      <span class="discount">{{baseInfo.discount}}</span>
    </div>

    <div class="sell-info">
      <div class="sell-item" v-for="(item, index) in baseInfo.columns" :key="index">{{item}}</div>
    </div>

    <div class="service">
      <div class="service-item" v-for="(item, index) in baseInfo.services" :key="index">
        <img class="icon" :src="item.icon" />
        <span class="name">{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    baseInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.base-info {
  background: #fff;
  padding: 0.2rem 0.24rem;
  border-bottom: 0.16rem solid #f2f2f2;
  .title {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    white-space: normal !important;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 0.3rem;
    color: #333;
  }

  .price-info {
    margin: 0.3rem 0;
    display: flex;
    .new-price {
      color: #ff5777;
      margin-left: 0.1rem;
      font-size: 0.3rem;
    }
    .old-price {
      margin-left: 0.2rem;
      font-size: 0.28rem;
      color: #666;
      text-decoration: line-through;
    }
    .discount {
      background: #ff5777;
      color: #fff;
      margin-left: 0.16rem;
      padding: 0.04rem 0.06rem;
      font-size: 0.24rem;
      border-radius: 0.16rem;
      position: relative;
      bottom: 0.12rem;
    }
  }

  .sell-info {
    display: flex;
    height: 0.5rem;
    line-height: 0.5rem;
    justify-content: space-between;
    font-size: 0.26rem;
    margin-top: 0.2rem;
    padding-bottom: 0.16rem;
    border-bottom: 1px solid rgba(200, 200, 200, 0.6);
  }

  .service {
    height: 0.5rem;
    line-height: 0.5rem;
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    padding-top: 0.2rem;
    align-items: center;
    .icon {
      width: 0.24rem;
      height: 0.24rem;
      vertical-align: text-top;
      margin-right: 0.04rem;
      // top: 0.07rem;
      // left: 0.1rem;
    }
  }
}
</style>
