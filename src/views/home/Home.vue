<template>
  <div>
    <NavBar bgColor="#ff8198" color="#fff">
      <template v-slot:center>
        首页
      </template>
    </NavBar>
    <Swipe :banners="banners"></Swipe>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Swipe from "components/common/swipe/Swipe";
import { getHomeMultipledata } from "network/home.js";
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
    Swipe
  },
  created() {
    getHomeMultipledata().then(res => {
      // 使用变量来接收数据
      // 函数内的变量都是局部变量(外部无法使用)，函数执行完变量会被内存回收，
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      console.log(res.data.banner.list);
    });
  }
};
</script>

<style scoped>
</style>