// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Vuex from 'vuex'
import App from './App'
import axios from 'axios'
import VueRouter from "vue-router";
import "mint-ui/lib/style.css";
import MintUI from "mint-ui"
import router from "./router/router.js";
import './assets/mui/css/mui.css'
import './assets/mui/css/icons-extra.css'
import moment from 'moment'
Vue.config.productionTip = false;
/* eslint-disable no-new */

axios.defaults.baseURL = 'http://027xin.com:8899/'

Vue.prototype.axios = axios
    // Vue.use(Vuex)
    // Vue.prototype.$ajax = axios
Vue.use(VueRouter)
Vue.use(MintUI)
    // 导入时间格式化组件库moment

// 定义时间格式化全局过滤器
Vue.filter('dateFormat', function(dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(pattern)
})

new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
        // render: c => c(app)
});