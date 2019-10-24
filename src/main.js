// 入口文件
import Vue from 'vue'

import app from './App.vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import router from './router.js'

import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Swipe.name,Swipe)
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Header.name,Header)

import './lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import './lib/mui/css/mui.min.css'

var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router

})