import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routes from './router'
import App from './App'
import store from './store'

window.__webpack_public_path__ = 'https://baidu.com' // webpack 动态cdn

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter({
    routes
})

const vm = new Vue({
    el:'#app',
    router,
    store,
    components:{App},
    template: `<App/>`
})


