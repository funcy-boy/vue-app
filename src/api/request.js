// 重写axios,进行二次封装
import axios from "axios";

// 加载进度条
import nprogress from "nprogress";

// 导入进度条样式
import "nprogress/nprogress.css";

const requests = axios.create({
    // 请求入口
    baseURL: "/api",
    // 请求超时时间
    timeout: 5000,
})

// 定义拦截器，发请求前，拦截请求
requests.interceptors.request.use((config) => {
    nprogress.start();
    // 配置对象，对象中可以设置header等属性
    return config;
})

// 响应拦截器
requests.interceptors.request.use((res) => {
    // 响应成功回调
    nprogress.done();
    return res.data;
}, (error) => {
    // 响应失败回调
    return error.data;

    // return Promise.reject(new Error("faile"))

})


// 对外暴露axios
export default requests;

