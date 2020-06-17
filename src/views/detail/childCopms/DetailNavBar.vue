<template>
  <div class="detail-nav">
    <van-nav-bar left-text fixed left-arrow @click-left="$router.go(-1)">
      <template #left>
        <div class="left-arrow">
          <img style="display:block" src="~assets/img/common/back.svg" alt />
        </div>
      </template>
      <template #title>
        <ul class="title">
          <li
            class="t-item"
            :class="{active: index === currentIndex}"
            v-for="(item, index) in titles"
            :key="index"
            @click="titleClick(index)"
          >{{item}}</li>
        </ul>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
import { NavBar } from "vant";

export default {
  name: "DetailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    }
  },
  components: {
    [NavBar.name]: NavBar
  }
};
</script>

<style>
.van-nav-bar {
  background-color: #fff !important;
}
.van-nav-bar__title {
  max-width: 65%;
}
.title {
  display: flex;
}

.title .t-item {
  flex: 1;
  color: #666;
  font-size: 0.3rem;
  font-weight: 400;
}

.title .active {
  color: var(--color-high-text);
}
</style>