import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import showdb from '../views/showdatabase.vue'
import yuanqu from '../views/yuanqu.vue'
import n3 from '../views/n3.vue'
import yuanquzonglan from "@/views/yuanquzonglan";
import yuanqu1 from "@/views/yuanqu";
import make_oplist from "@/views/make_oplist";
import jianceguanli from "@/views/jianceguanli";
import shouye from "@/views/shouye";



Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        children: [
            {
                path: '/shouye',
                name: 'shouye',
                component: shouye
            },
            {
                path: '/showdb',
                name: 'showdb',
                component: showdb
            },
            {
                path: '/yuanquzonglan',
                name: 'yuanquzonglan',
                component: yuanquzonglan
            },
            {
                path:'/make_oplist',
                name:'make_oplist',
                component:make_oplist,
            },
            {
                path: '/jifang',
                name: 'yuanqu',
                component: yuanqu,
            },
            {
                path: '/jianceguanli',
                name: 'jianceguanli',
                component: jianceguanli,
            }
        ]
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
