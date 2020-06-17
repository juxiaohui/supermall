<template>
  <div id="cart">
    <cart-list class="cart-list"></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import CartList from "./childCopmps/CartList";
import CartBottomBar from './childCopmps/CartBottomBar'

export default {
  name: "Cart",
  computed: {

  },
  components: {
    CartBottomBar,
    CartList
  }
};
</script>

<style scoped>
#cart {
  /*position: relative;*/
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}

.cart-list {
  position: fixed;
  top: 0;
  bottom: 100px;
  width: 100%;
  overflow: hidden;
}
</style>