import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '@/views/authentication/Login.vue'
import Profile from '@/views/Profile.vue'
import Invoice from '@/views/transactions/Invoice.vue'
import InvoiceDetail from '@/views/transactions/InvoiceDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true }, },
  { path: '/about', name: 'About', component: About},
  { path: '/login', name: 'Login', component: Login},
  { path: '/profile', name: 'Profile', component: Profile},
  { path: '/my-invoices', name: 'Invoice', component: Invoice},
  { path: '/my-invoices/:name', name: 'InvoiceDetail', component: InvoiceDetail},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

let getToken = ()=>{
    try {
        return JSON.parse(sessionStorage.frappUser).token;
    } catch (e) {
        return null
    }
}

router.beforeEach((to, from, next) => {
    // alert(to.fullPath)
  if (!['/login', '/register'].includes(to.fullPath)) {
    if (!getToken()) {
      next('/login');
    }
  }
  //
  if (to.fullPath === '/login') {
    if (getToken()) {
      next('/');
    }
  }
  next();
});

export default router
