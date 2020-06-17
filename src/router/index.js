import Vue from 'vue'
import VueRouter from 'vue-router'

// const HomeGoodsList = () => import('views/home/childComps/HomeGoodsListView')

const Main = () => import('views/common/Main')
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

const GoodsDetail = () => import('views/detail/Detail')
const CategoryContent = () => import('views/category/childComps/CategoryContent')


// const News = () => import('views/cart/childCopmps/News')
// const Shop = () => import('views/cart/childCopmps/Shop')

Vue.use(VueRouter)

const routes = [

  { path: '/', redirect: { name: 'home' } },
  { path: '/home', name: 'home', component: Home, meta: { isNeedTabbar: true } },
  {
    path: '/category',
    name: 'category',
    component: Category,
    meta: { isNeedTabbar: true },
    children: [
      {
        path: 'subCategory/:maitKey/:miniWallkey',
        component: CategoryContent,
        meta: { isNeedTabbar: true },
      }
    ]
  },
  { path: '/cart', name: 'cart', component: Cart, meta: { isNeedTabbar: true }, },
  { path: '/profile', name: 'profile', component: Profile, meta: { isNeedTabbar: true }, },
  { path: '/goodsDetail/:id', component: GoodsDetail, meta: { isNeedTabbar: false }, }

  // { path: '/login', name: 'login', component: Login }

  // {
  //   path: '/home',
  //   component: Home,
  // },
  // {
  //   path: '/category',
  //   component: Category,
  // },
  // {
  //   path: '/cart',
  //   component: Cart,
  // },
  // {
  //   path: '/profile',
  //   component: Profile,
  // }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     // return { x: 0, y: 0 }
  //   }
  // }

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }
  }
})

export default router
