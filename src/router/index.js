import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import('../App'),
            children: [
                {
                    path: '/',
                    name: 'Main',
                    component: () => import('../views/Main')
                },
                {
                    path: '/productos',
                    name: 'Productos',
                    component: () => import('../views/Productos')
                },
                {
                    path: '/formulario',
                    name: 'Formulario',
                    component: () => import('../views/Formulario')
                }
            ]
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})
export default router