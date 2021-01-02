<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{lenght}})</div>
    </nav-bar>
  <!-- 商品列表 -->
    <cart-list/>
    <!-- 底部汇总 -->
    <cart-bottom-bar/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import NavBar from "components/common/navbar/NavBar.vue";
import CartList from './childComps/CartList.vue';
import CartBottomBar from './childComps/CartBottomBar.vue';

export default {
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },
  name: "Cart",
  computed: {
    // ...mapGetters(['cartLength'])
    ...mapGetters({
      lenght: 'cartLength',
    })

  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
