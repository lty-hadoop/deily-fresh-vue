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
    }
  ]
})

export default router