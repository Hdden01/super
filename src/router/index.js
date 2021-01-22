import Vue from 'vue';
import VueRouter from 'vue-router';
// 1.安装路由
Vue.use(VueRouter);
const Home = () => import('../views/Home.vue');
const About=()=>import('../views/Aboout.vue');
const routes = [
    {
        path: "",
        redirect: '/home'
    }
    ,
    {
        path: "/home",
        component: Home
    },
    {
        path:'/about',
        component:About
    }
]
// 2.创建实例对象
const router = new VueRouter({
    mode: 'history',
    routes

});
// 3.导出对象
export default router;