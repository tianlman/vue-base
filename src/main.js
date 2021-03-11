import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "@/store";

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()//创建事件分发方便组件间通信
//定义全局指令
Vue.directive('bgcolor', {
    bind: function (el, binding, vnode) {
        console.log(el, binding, vnode, 'bind');
        if (binding.value) {

        }
        el.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8);
        el.innerHTML=binding.value.color
    },
    //接触邦
    unbind: function (el, binding, vnode, oldVnode) {
        console.log(el, binding, vnode, oldVnode,'unbind');
    },
    // 更新组件的时候
    componentUpdated: function (el, binding, vnode, oldVnode) {
        console.log(el, binding, vnode, oldVnode,'componentUpdated');
    }
})
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
