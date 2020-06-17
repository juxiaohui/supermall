<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" color="#07c160" dot />
    <van-goods-action-icon icon="cart-o" text="购物车" badge="5" />
    <van-goods-action-icon badge="12" text="店铺">
      <i slot="icon" class="icon-shop"></i>
    </van-goods-action-icon>

    <van-goods-action-button type="warning" text="加入购物车" @click="addToCart" />
    <van-goods-action-button type="danger" text="立即购买" />
  </van-goods-action>
</template>

<script>
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

export default {
  name: "DetailBottomBar",
  data() {
    return {};
  },
  methods: {
    addToCart() {
      this.$emit('addCart');
    }
  },
  components: {
    [GoodsAction.name]: GoodsAction,
    [GoodsActionIcon.name]: GoodsActionIcon,
    [GoodsActionButton.name]: GoodsActionButton
  }
};
</script>

<style>
.icon-shop {
  display: block;
  width: 18px;
  height: 18px;
  /* margin: 10px auto 3px; */
  background: url("~assets/img/detail/detail_bottom.png") 0 44px/100%;
}
</style>