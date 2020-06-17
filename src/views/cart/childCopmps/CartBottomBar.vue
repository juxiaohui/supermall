<template>
  <van-submit-bar v-show="isShow" :price="price" :button-text="btnText" @submit="onSubmit">
    <van-checkbox v-model="selectedAllOrNot" checked-color="#ff8198">全选</van-checkbox>
    <!-- <template #tip>
      你的收货地址不支持同城送,
      <span @click="onClickEditAddress">修改地址</span>
    </template>-->
  </van-submit-bar>
</template>

<script>
import { SubmitBar, Checkbox } from "vant";
import { mapGetters, mapMutations } from "vuex";
import { CHECKED_ALL_PRODUCT } from "../../../store/mutation-types";

export default {
  name: "CartBottomBar",
  data() {
    return {
      
    };
  },

  methods: {
    ...mapMutations([CHECKED_ALL_PRODUCT]),
    onSubmit() {}
  },
  computed: {
    ...mapGetters(['isCheckAll','checkedProductCount','totalPrice']),
    isShow(){
      return this.$store.state.cartList.length > 0;
    },
    price(){
      return this.totalPrice * 100;
    },
    btnText() {
      return `去结算(${this.checkedProductCount})`;
    },
    selectedAllOrNot: {
      get() {
        return this.isCheckAll;
      },
      set(isChecked) {
        this.CHECKED_ALL_PRODUCT(isChecked);
      }
    }
  },
  components: {
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox
  }
};
</script>

<style>
.van-submit-bar {
  bottom: 50px;
}
</style>