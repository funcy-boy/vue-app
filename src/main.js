import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './pages/TypeNav';
import store from './store';

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav);


new Vue({
    render: h => h(App),
    // 引用路由
    router,
    // 引用Vuex
    store,
}).$mount('#app')
