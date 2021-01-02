<template>
  <div class="cart-list">
    <scroll class="wraper" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index" :item-info="item"/>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Scroll from 'components/common/scroll/Scroll'

import CartListItem from './CartListItem.vue'

export default {
  name: 'CartList',
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  }
}
</script>

<style>
  .cart-list {
    height: calc(100% - 44px - 49px - 40px);
    overflow: hidden;
  }
  .wrapper {
    height: 100%;
    
  }
</style>