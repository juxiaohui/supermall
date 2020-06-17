const getters = {

  // 商品数量
  cartCount(state) {
    return state.cartList.length;
  },

  // 已完成的数量
  // finishedCount(state) {
  //   return state.todos.reduce((total, todo) => total + (todo.finished ? 1 : 0), 0);
  // },
  // 是否是全选
  isCheckAll(state, getters) {
    if (state.cartList.length == 0) {
      return false;
    }
    return state.cartList.every(item => item.checked === true);
  },

  totalPrice(state, getters) {
    return state.cartList.filter(item => item.checked).reduce((preValue, item) => {
      return preValue + item.count * item.newPrice;
    }, 0);
  },

  checkedProductCount(state, getters) {
    return state.cartList.filter(item => item.checked).reduce((preValue, item) => {
      return preValue + item.count;
    }, 0);
  }

}
export default getters
