<template>
  <div class="recommend">
    <div class="header">商品详情</div>
    <div class="content">
      <ul class="data-list">
        <goods-item-view v-for="(product, index) in recommends" :goodsItem="product" :key="index"></goods-item-view>
      </ul>
    </div>
  </div>
</template>

<script>
import GoodsItemView from "../../home/childComps/GoodsItemView";

export default {
  name: "DetailRecommend",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsItemView
  }
};
</script>

<style>
.recommend {
  padding: 0.1rem 0;
  background: #fff;
}

.header {
  font-size: 0.34rem;
  margin: 0.1rem 0.24rem;
}

.data-list {
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.goods-item {
  width: 48%;
  position: relative;
}
</style>