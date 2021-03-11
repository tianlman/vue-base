import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const route = [
    {
        path: '/',
        redirect: '/view/home',
    },
    {
        path: '/view/home',
        name: 'home',
        component: resolve => require(['@/view/main/home/home'], resolve),//按需加载当项目打包时路由里的所有component都会打包在一个js中'@/view/main/home/home',
        meta: {
            title: '首页'
        }
    },
    {
        path: '/view/me',
        name: 'me',
        component: resolve => require(['@/view/main/me/me'], resolve),//按需加载当项目打包时路由里的所有component都会打包在一个js中
        meta: {
            title: '我的'
        }
    },
    {
        path: '/view/find',
        name: 'find',
        component: resolve => require(['@/view/main/find/find'], resolve),//按需加载当项目打包时路由里的所有component都会打包在一个js中
        meta: {
            title: '我的'
        }
    },

]
let router = new Router({
    // mode: 'history',
    routes: route
})
export default router;
