import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

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
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: {
          title: 'XMall商城'
        }
      },
      {
        path: '/all',
        name: 'All',
        component: () => import('../views/All.vue'),
        meta: {
          title: 'XMall商城'
        }
      },
      {
        path: '/detail',
        name: 'Detail',
        component: () => import('../views/Detail.vue'),
        meta: {
          title: 'XMall商城'
        }
      },
      {
        path: '/other_one',
        name: 'Other_one',
        component: () => import('../views/other/Other_one.vue'),
        meta: {
          title: 'XMall商城'
        }
      }
      {
        path: '/other_two',
        name: 'Other_two',
        component: () => import('../views/other/Other_two.vue'),
        meta: {
          title: 'XMall商城'
        }
      }
      {
        path: '/other_three',
        name: 'Other_three',
        component: () => import('../views/other/Other_three.vue'),
        meta: {
          title: 'XMall商城'
        }
      }
    ]
  },
]

//防止二次点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
