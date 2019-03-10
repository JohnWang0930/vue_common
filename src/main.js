import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import App from './App'

Vue.use(VueRouter)

const router = new VueRouter({
    routes
})

const vm = new Vue({
    el:'#app',
    router,
    render:r=>r(App)
})

