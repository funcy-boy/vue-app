import Vue from "vue";
import Vuex from "vuex";

// 注册Vuex
Vue.use(Vuex);

// 存放组件共享数据
const state = {};
// 通过mutations修改state属性
const mutations = {};
// 处理state数据，可以异步处理
const actions = {};
// 类似于计算属性
const getters = {};
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})




