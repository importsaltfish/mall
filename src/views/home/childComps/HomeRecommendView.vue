<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        recommends: {
            type: Array,
            default() {
                return []
            }
        }
    },
    name: "HomeRecommendView"
}
</script>

<style>
.recommend{
    display: flex;
    font-size: 12px;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
}
.recommend>div {
    flex: 1;
    text-align: center;
}
.recommend img {
    width: 70px;
    
}
</style>