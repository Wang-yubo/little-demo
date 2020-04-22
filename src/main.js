import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./common/stylus/index.styl"
//* 引入fastclick解决移动端300ms延迟问题
import attachFastClick from "fastclick";
//* 激活 把该插件作用于整个body上
attachFastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')