import Vue from 'vue'
import VueRouter from 'vue-router'
import Base from '../views/base'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/',
    name: 'Home',
    component: Base,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home")
      },

      {
        path: "/industryCase",
        name: "industryCase",
        meta: [
          {
            name: "行业案例"
          }
        ],
        component: () => import("@/views/industryCase")
      },
      {
        path: "/joinUs",
        name: "joinUs",
        meta: [
          {
            name: "加入我们"
          }
        ],
        component: () => import("@/views/joinUs")
      },
      {
        path: "/honor",
        name: "honor ",
        meta: [
          {
            name: "关于我们"
          },
          {
            name: '资质荣誉'
          }
        ],
        component: () => import("@/views/honor")
      },
      {
        path: "/contact",
        name: "contact",
        meta: [
          {
            name: "关于我们"
          },
          {
            name: '联系我们'
          }
        ],
        component: () => import("@/views/contactUs")
      },
      {
        path: "/about",
        name: "about",
        meta: [
          {
            name: "关于我们"
          },
          {
            name: '公司介绍'
          }
        ],
        component: () => import("@/views/about")
      },
      {
        path: "/serve",
        name: "serve",
        meta: [
          {
            name: "服务"
          }
        ],
        component: () => import("@/views/serve")
      }
    ]
  }
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length ===0) {  //如果未匹配到路由
    next('/home')  //如果上级也未匹配到路由则跳转登录页面，如果上级能匹配到则转上级路由
  } else {
    next();    //如果匹配到正确跳转
  }
});

export default router
