<template>
  <div @click="btn" >  
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image,index) in banners" :key="index">
        <img v-lazy="image.image" :style="{height:image.height}"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "Swipe",
  props:{
      banners:{
          type:[Array]
      }
  },
  methods:{
      btn(){
          for(let index in this.banners){
              console.log(index.height);
          }
      }
  }
};
</script>
<style scoped>
img{
    width: 100%;
}
</style>