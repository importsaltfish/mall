import {
  ADD_COUNTER,
  Add_TO_CART
} from './mutation-types';

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [Add_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}