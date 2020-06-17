import {
  ADD_COUNTER,
  ADD_TO_CART,
  CHECKED_PRODUCT,
  CHECKED_ALL_PRODUCT,
  CHECKED_PRODUCT_COUNT
} from './mutation-types'

const mutations = {

  [ADD_COUNTER](state, payload) {
    payload.count += 1;
  },
  [ADD_TO_CART](state, payload) {
    state.cartList.push(payload);
  },
  [CHECKED_PRODUCT](state, { iid, isChecked }) {
    let product = state.cartList.find(item => item.iid === iid);
    product.checked = isChecked;
  },
  [CHECKED_ALL_PRODUCT](state, isChecked) {
    state.cartList.forEach(item => {
      item.checked = isChecked;
    })
  }
  
}

export default mutations

