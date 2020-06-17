<template>
  <scroll-view ref="scroll">
    <div>
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"></cart-list-item>
    </div>
  </scroll-view>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import ScrollView from "components/common/scroll/ScrollView";
import CartListItem from "./CartListItem";

export default {
  name: "CartList",
  components: {
    ScrollView,
    CartListItem
  },
  data() {
    return {};
  },
  methods: {
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  computed: {
    ...mapState(["cartList"])
  }
};
</script>

<style scoped>
</style>
