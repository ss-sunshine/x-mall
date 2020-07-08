import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/layout/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children:[
      {
        path:'',
        name:'Home',
        component:Home,
        meta:{
          title:'XMall商城'
        }
      },
      {
        path:'/all',
        name:'All',
        component:All,
        meta:{
          title:'XMall商城'
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
