import {createRouter,createWebHistory} from 'vue-router'

/**
 * 路由表
 */
const router = createRouter({
    // 去掉url中的#
    history:createWebHistory(),
    routes:[{
        path:'/login',
        component: ()=> import('@/views/login.vue')
    }]
})

export default router
