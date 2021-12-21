import Vue from 'vue';
import VueRouter from "vue-router";
// 使用路由
// 引入组件

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Login';
import Search from '../pages/Search';

Vue.use(VueRouter);

export default new VueRouter({
    routers: [
        {
            path: "/home",
            component: Home,
            meta: {show: true}
        },
        {
            path: "/login",
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path: "/search/:keyword?",
            component: Search,
            meta: {
                show: true
            },
            name: "search"
        },
        {
            path: "/register",
            component: Register,
            meta: {
                show: false
            }
        },
        {
            path: "*",
            // 默认页面打开跳转到home页面
            redirect: "/home"
        }
    ]
})
