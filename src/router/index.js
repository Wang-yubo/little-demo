import Vue from 'vue'
import VueRouter from 'vue-router'
import rank from "../components/rank/rank.vue"
import search from "../components/search/search.vue"
import singer from "../components/singer/singer.vue"
import recommend from "../components/recommend/recommend.vue"
import SingerDetail from "../components/singer-detail/singer-detail.vue"
Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: "/recommend"
    }, {
        path: "/rank",
        name: "rank",
        component: rank
    },
    {
        path: "/search",
        name: "search",
        component: search
    }, {
        path: "/singer",
        name: "singer",
        component: singer,
        children: [{
            path: ":id",
            component: SingerDetail
        }]
    }, {
        path: "/recommend",
        name: "recommend",
        component: recommend
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router