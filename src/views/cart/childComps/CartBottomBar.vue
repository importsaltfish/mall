<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"/>
      <span>全选</span>
    </div>

    <div class="price">合计：{{ totalPrice }}</div>
    <div class="calculate">去计算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue";

export default {
  components: { CheckButton },
  name: "CartBottomBar",
  computed: {
    totalPrice() {
      return '￥' + this.$store.state.cartList
      .filter(item => item.checked)
      .reduce((preValue, item) => preValue + item.price * item.count, 0);
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    }
  },
};
</script>

<style scoped>
.bottom-bar {
  /* position: relative; */
  display: flex;
  height: 40px;
  line-height: 40px;
  background-color: #fff
}
.check-content {
  padding-left: 1em;
  display: flex;
  align-items: center;
}
.check-button {
  margin-right: 0.5em;
}
.price {
  margin-left: 2em;
  flex: 1;
}
.calculate {
  text-align: center;
  width: 100px;
  background-color: pink;
}
</style>