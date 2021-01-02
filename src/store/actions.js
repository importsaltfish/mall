import {
  ADD_COUNTER,
  Add_TO_CART
} from './mutation-types';

export default {
  addCart(context, payload) {
    // let oldProduct = null;
    // for (let item of state.cartList) {
    //     if (item.iid === payload.iid) {
    //         oldProduct = item
    //     }
    // }
    // if (oldProduct) {
    //     oldProduct.count += 1
    // } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    // }
    //查找之前的数组中是否有该商品
    let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
    if (oldProduct) {
        // oldProduct.count += 1
        context.commit(ADD_COUNTER, oldProduct)
    } else {
        payload.count = 1
        context.commit(Add_TO_CART, payload)
        // state.cartList.push(payload)
    }
    // let index = state.cartList.indexOf(payload)
    // if (index !== -1) {
    //     let oldProduct = state.cartList[index]
    //     oldProduct.count += 1
    // } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    // }
}
}