import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '@/views/ProductDetail.vue';
import Shop from '@/views/Shop.vue';
import ShopGrid from '@/views/ShopGrid.vue';
import SpecificShop from '@/views/SpecificShop.vue';
import Login from '@/views/Login.vue';
import SignUp from '@/views/SignUp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/create-account',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/shop-category/:category',
    name: 'specific',
    component: SpecificShop
  },
  {
    path: '/shopList',
    name: 'ShopGrid',
    component: ShopGrid
  },
  {
    path: "/product-detail/:id",
    name: "ProductDetail",
    component: ProductDetail
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
