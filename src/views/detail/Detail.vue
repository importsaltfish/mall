<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <detail-swiper :top-images="topImages"/>
  </div>
</template>

<script>
import DetailNavBar from './childComponents/DetailNavBar.vue';
import DetailSwiper from './childComponents/DetailSwiper.vue';

import {getDetail} from 'network/detail';

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
  },
  data() {
    return {
      iid: null,
      topImages: []
    };
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;
    //2. 根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      this.topImages.push(...res.data.result.itemInfo.topImages)
    })
  },
};
</script>

<style scoped>
</style>