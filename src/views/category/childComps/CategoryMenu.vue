<template>
  <scroll-view class="menu">
    <template v-for="(item, index) in categories">
      <div
        class="menu-item"
        :class="{active: index === currentIndex}"
        @click="onItemClick(index)"
        :key="index"
      >{{item.title}}</div>
    </template>
  </scroll-view>
</template>

<script>
import ScrollView from "components/common/scroll/ScrollView";
import { getCategory } from "network/home";

export default {
  name: "CategoryMenu",
  data() {
    return {
      currentIndex: 0,
      categories: [],
      isLoad: false
    };
  },

  created() {
    // 获取分类菜单数据
    getCategory().then(res => {
      // console.log(res);
      this.categories = res.data.category.list;
      this.onItemClick(0, true);
      this.isLoad = true;
    });
  },
  
  activated() {
    // console.log('activated');
    this.isLoad && this.onItemClick(this.currentIndex, true);
  },

  methods: {
    onItemClick(index, isForce = false) {
      if (this.currentIndex == index && !isForce) {
        return;
      }
      this.currentIndex = index;
      this.$router.push(
        `/category/subCategory/${this.categories[index].maitKey}/${this.categories[index].miniWallkey}`
      );
    }
  },
  components: {
    ScrollView
  }
};
</script>


<style lang="less" scoped>
.menu {
  font-size: 0.28rem;
  background: #f6f6f6;
  height: 100%;
  .menu-item {
    height: 1rem;
    line-height: 1rem;
    text-align: center;
  }

  .active {
    color: #f55777;
    font-weight: 700;
    background: #fff;
    border-left: 3px solid #f55777;
  }
}
</style>