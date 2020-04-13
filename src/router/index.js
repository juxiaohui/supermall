import Vue from 'vue'
import VueRouter from 'vue-router'


const Main = () => import('views/common/Main')
const Home = () => import('views/home/Home')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)

const routes = [

  { path: '/', redirect: { name: 'main' } },
  {
    path: '/main',
    name: 'main',
    component: Main,
    redirect: '/main/home',
    children: [
      { path: 'home', component: Home },
      { path: 'category', component: Category },
      { path: 'cart', component: Cart },
      { path: 'profile', component: Profile }
    ]
  },
  // { path: '/login', name: 'login', component: Login }

  // {
  //   path: '/',
  //   redirect: '/home'
  // },
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
