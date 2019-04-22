import Vue from "vue";
import MintUI from "mint-ui";
import VueRouter from "vue-router";
import HomeContainer from "../components/tabber/HomeContainer.vue";
import MemberContainer from "../components/tabber/MemberContainer.vue";
import ShopCarContainer from "../components/tabber/ShopCarContainer.vue";
import SearchContainer from "../components/tabber/SearchContainer.vue";
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'



Vue.use(MintUI);
Vue.use(VueRouter);
// 创建路由对象
var router = new VueRouter({
    linkActiveClass: "mui-active",
    routes: [
        // { path: "/", component: HomeContainer },
        { path: "/home", component: HomeContainer },
        { path: "/member", component: MemberContainer },
        { path: "/shopcar", component: ShopCarContainer },
        { path: "/search", component: SearchContainer },
        { path: '/home/newslist', component: NewsList },
        { path: '/home/newsinfo/:id', component: NewsInfo }
    ]
});
// 导出路由对象
export default router;