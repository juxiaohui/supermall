<template>
  <div id="shop-item">
    <div class="item-selector">
      <van-checkbox
        v-model="itemInfo.checked"
        checked-color="#ff8198"
        @change="onChangeed(itemInfo.iid,$event)"
      ></van-checkbox>
    </div>
    <div class="item-img">
      <img :src="itemInfo.imgURL" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{itemInfo.title}}</div>
      <div class="item-desc">商品描述: {{itemInfo.desc}}</div>
      <div class="info-bottom">
        <div class="item-price left">¥{{itemInfo.newPrice}}</div>
        <div class="item-count right">x{{itemInfo.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Checkbox } from "vant";

import { mapMutations } from "vuex";
import { CHECKED_PRODUCT } from "../../../store/mutation-types";

export default {
  name: "CartListItem",
  props: {
    itemInfo: Object
  },
  components: {
    [Checkbox.name]: Checkbox
  },
  methods: {
    ...mapMutations([CHECKED_PRODUCT]),
    onChangeed(iid, isChecked) {
      this.CHECKED_PRODUCT({
        iid,
        isChecked
      });
    }
  }
};
</script>

<style scoped>
#shop-item {
  /* width: 100%; */
  display: flex;
  font-size: 0;
  padding: 0.2rem;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
}

.item-selector {
  width: 14%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item-desc {
  font-size: 0.28rem;
}

.item-title,
.item-desc {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  white-space: normal !important;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.item-img {
  padding: 0 0.2rem;
}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 0.32rem;
  color: #333;
  /* padding: 5px 10px; */
  padding-right: 0.2rem;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 0.1rem;
  -webkit-line-clamp: 1;
}

.info-bottom {
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
}

.info-bottom .item-price {
  color: orangered;
}
</style>