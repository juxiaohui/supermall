import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

const actions = {

  addCart({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      let product = state.cartList.find(item => item.iid === payload.iid);
      if (product) {
        commit(ADD_COUNTER, product);
        resolve('当前商品数量+1')
      } else {
        commit(ADD_TO_CART, payload);
        resolve('添加了新的商品')
      }
    })
  }
}
export default actions

