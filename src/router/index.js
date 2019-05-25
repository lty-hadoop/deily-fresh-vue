import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// 主页
const App = () => import( /* webpackChunkName: "home" */ '@/pages/App')

// 主页视图
const Home = (resolve) => {
  import ('@/pages/home/home').then((module) => {
    resolve(module)
  })
}

// 商品详情页
const ProductDetail = () => import(/* webpackChunkName: "product-detail" */ '@/pages/product-detail')

// 分类
const Classify = () => import(/* webpackChunkName: "classify" */ '@/pages/classify')

// 购物车
const Car = () => import(/* webpackChunkName: "classify" */ '@/pages/car')

// 我的
const Mine = () => import(/* webpackChunkName: "classify" */ '@/pages/mine')

const router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home,
        },
      ],
    },
    {
      path: '/product-detail/:id',
      component: ProductDetail
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/car',
      component: Car
    },
    {
      path: '/mine',
      component: Mine
    }
  ]
})

export default router