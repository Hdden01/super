// 存放首页的请求
import{request} from './request'
// Multipledata多个数据，获取首页的多个数据 
export async function getHomeMultipledata() { 
    return await request({
        // 既包含轮播图的数据也包含轮播图下面的数据
        url:'/home/multidata'
    })
 }