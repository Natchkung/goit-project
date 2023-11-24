import { createRouter, createWebHistory } from 'vue-router'
import LOGIN from '../components/Auth/LOGIN.vue'
import PAGE from '../layout/page.vue'
import MAIN from '../components/main/MAIN.vue'
import TICKET from '../components/ticket/TICKET.vue'
import EDITPRODUCT from '../components/EditProduct/EDITPRODUCT.vue'
import USERS from '../components/Users/USERS.vue'
import REGISTER from '../components/Auth/REGISTER.vue'
import PRODUCT from '../components/product/product.vue'
import CHAT from '../components/Chat/CHAT.vue'
import BASKET from '../components/Basket/Basket.vue'
import CHATCHILDERN from '../components/Chat/ChatChildern.vue'
const routes = [
  {
    name: "PAGE",
    path: '/',
    component: PAGE,
    redirect: '/login',
    children: [
      {
        name: 'MAIN',
        path: '/main',
        component: MAIN
      },
      {
        name: 'TICKET',
        path: '/ticket',
        component: TICKET
      },
      {
        name: 'EDITPRODUCT',
        path: '/editproduct',
        component: EDITPRODUCT
      },
      {
        name: 'USERS',
        path: '/users',
        component: USERS
      },
      {
        name: 'product',
        path: '/product/:productId',
        component: PRODUCT

      },
      {
        name: 'CHAT',
        path: '/chat',
        component: CHAT
      },

    ]
  },
  {
    name: 'CHATCHILDERN',
    path: '/chatchildern',
    component: CHATCHILDERN

  },
  {
    name: 'BASKET',
    path: '/basket',
    component: BASKET

  },
  {
    name: 'LOGIN',
    path: '/login',
    component: LOGIN
  },
  {
    name: 'REGISTER',
    path: '/register',
    component: REGISTER
  },
]
const router = createRouter({
  history: createWebHistory('/'),
  routes,
  linkActiveClass: "active", // active class for non-exact links.
  linkExactActiveClass: "active" // active class for *exact* links.
})

export default router