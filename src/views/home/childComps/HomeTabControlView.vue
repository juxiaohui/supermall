<template>
  <van-tabs
    v-model="active"
    sticky
    class="tab-control"
    color="#ff5777"
    title-active-color="#ff5777"
    line-height="2px"
    swipeable
    animated
  >
    <van-tab v-for="(item, index) in titles" :title="item.title" :key="index" @click="tabNavClick">
      <home-goods-list-view :type="item.type" :isShow="active==index"></home-goods-list-view>
    </van-tab>

  </van-tabs>
</template>

<script>

// import HomeTabControlView from "./HomeGoodsListView";
import { Tab, Tabs, List } from "vant";

export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      active: 0
    };
  },
  methods: {
    tabNavClick(name, title) {
      console.log(name, title);
    }
  },
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    'HomeGoodsListView': () => import('./HomeGoodsListView')
  }
};
</script>

<style lang="less" scoped>
.tab-control {
  .van-tabs__wrap {
    border-bottom: 1px solid #646464;
  }
}
</style>