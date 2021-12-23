import Vue from 'vue';
import VueRouter from "vue-router";
// 使用路由
// 引入组件

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Login';
import Search from '../pages/Search';

// 备份VueRouter原型对象
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push和replace

// 第一个参数，告诉原来的push方法，往哪里跳转
// 第二个参数，成功回调
// 第三个参数，失败回调
// call和apply的区别
// 相同点：都可以调用函数一次，都可以纂改函数上下文一次
// 不同点：call与apply传递函数，call传递参数用逗号隔开，apply用数组隔开
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {
        }, () => {
        });
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);

    } else {
        originReplace.call(this, location, () => {
        }, () => {
        });
    }
}


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
