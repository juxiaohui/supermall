<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <ul class="data-list">
      <goods-item-view v-for="(product, index) in goods.list" :goodsItem="product" :key="index"></goods-item-view>
    </ul>
  </van-list>
</template>

<script>
import { List } from "vant";

import GoodsItemView from "./GoodsItemView";

import { getGoodsData } from "network/home";

export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "pop"
    }
  },
  data() {
    return {
      loading: false,
      finished: false,
      scrollTop: 0,
      goods: {
        page: 1,
        list: []
      }
    };
  },

  methods: {
    onLoad() {
      setTimeout(() => {
        if (!this.isShow) {
          // 加载状态结束
          this.loading = false;
          return;
        }
        getGoodsData(this.type, this.goods.page).then(res => {
          // console.log(res);

          // 取出对应数据
          const list = res.data.list;

          this.goods.list.push(...list);

          // 加载状态结束
          this.loading = false;

          this.goods.page += 1;

          // 数据全部加载完成
          if (list.length < 30) {
            this.finished = true;
          }
        });
      }, 2000);
    }
  },

  components: {
    [List.name]: List,
    GoodsItemView
  },
  // activated() {
  //   console.log(" activated");
  // },
  // deactivated() {
  //   let scrollTop =
  //     document.documentElement.offsetTop || document.body.scrollTop;
  //   this.scrollTop = scrollTop;
  //   console.log(scrollTop);
  // }
};
</script>

<style lang="less" scoped>
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