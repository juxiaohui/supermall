<template>
  <scroll-view class="w-content">
    <!-- 子类别 -->
    <div class="subcategory">
      <template v-for="(item, index) in subcategories">
        <div class="sub-item" :key="index">
          <img :src="item.image" alt />
          <div>{{item.title}}</div>
        </div>
      </template>
    </div>
    <!-- 详情数据 -->
    <div class="detail">
      <ul class="data-list">
        <goods-item-view
          v-for="(product, index) in categoryDetail"
          :goodsItem="product"
          :key="index"
        ></goods-item-view>
      </ul>
    </div>
  </scroll-view>
</template>

<script>
import ScrollView from "components/common/scroll/ScrollView";
import GoodsItemView from "../../home/childComps/GoodsItemView";

import { getSubcategory, getCategoryDetail } from "network/home";

export default {
  name: "CategoryContent",
  data() {
    return {
      maitKey: this.$route.params.maitKey,
      miniWallkey: this.$route.params.miniWallkey,
      subcategories: [],
      categoryDetail: []
    };
  },
  created() {
    this.getData();
  },

  beforeRouteUpdate(to, from, next) {
    if (to.fullPath != from.fullPath) {
      next();
      this.maitKey = to.params.maitKey;
      this.miniWallkey = to.params.miniWallkey;
      this.getData();
    }
    next();
  },
  methods: {
    getData() {
      // console.log(11111111);
      // 获取分类菜单数据
      getSubcategory(this.maitKey).then(res => {
        // console.log(res);
        this.subcategories = res.data.list;
      });
      // 获取分类对应的推荐数据
      getCategoryDetail(this.miniWallkey, "pop").then(res => {
        // console.log(res);
        this.categoryDetail = res;
      });
    }
  },
  components: {
    ScrollView,
    GoodsItemView
  }
};
</script>

<style lang="less" scoped>
.w-content {
  background-color: #fff;
  height: 100%;
  .subcategory {
    display: flex;
    flex-wrap: wrap;
    padding: 0.2rem;
    .sub-item {
      width: 33.33%;
      text-align: center;
      img {
        width: 80%;
      }
      div {
        font-size: 0.28rem;
        margin: 0.3rem 0;
      }
    }
  }
  .data-list {
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .goods-item {
      width: 48%;
      position: relative;
    }
  }
}
</style>