<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
        type: Boolean,
        default: false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll && this.scroll.scrollTo(x, y, time);
      // this.scroll? this.scrollTo(x, y, time)
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    },
  },
  mounted() {
    //1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      //这里最好不要写死，因为会影响性能
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    //2.监听滚动事件
    this.scroll.on("scroll", (position) => {
      // console.log(position);
      this.$emit("scroll", position);
    });
    // console.log(this.scroll);
    // 3.监听上拉事件
    if (this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
        this.$emit('pullingUp')
    })
    }
  },
};
</script>

<style scoped>
</style>