<template>
  <div class="home">
    <!-- 导航 -->
    <NavBar bgColor="#ff8198" color="#fff" class="nav">
      <template v-slot:center>
        购物商城
      </template>
    </NavBar>
    <!-- 轮播图 -->
    <Swipe :banners="banners"></Swipe>
    <!-- 详情页 -->
    <HomeRecommendView :recommends="recommends"></HomeRecommendView>
    <!-- 特征特色 -->
    <HomeFeaturView></HomeFeaturView>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swipe from "components/common/swipe/Swipe";
import { getHomeMultipledata } from "network/home.js";
import HomeRecommendView from "./childComps/HomeRecommendView";
import HomeFeaturView from "./childComps/HomeFeaturView";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  components: {
    NavBar,
    Swipe,
    HomeRecommendView,
    HomeFeaturView
  },
  // 标注是异步函数
  async created() {
    //await等待
    await getHomeMultipledata().then(res => {
      // 使用变量来接收数据
      // 函数内的变量都是局部变量(外部无法使用)，函数执行完变量会被内存回收，
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(res.data.recommend.list);
    });
  }
};
</script>

<style scoped>
.home {
  position: relative;
  /* 解决被盖住 */
  padding-top: 43px;
}
.home .nav {
  position: fixed;
  /* 解决定位元素脱离文档流  常规流盒子排列会忽略定位元素*/
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 700;
}
</style>