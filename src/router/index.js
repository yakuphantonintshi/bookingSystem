import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AboutView from '@/views/AboutView.vue'
import OfficesView from '../views/OfficesView.vue'
import TicketView from '../views/TicketView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
    meta: { navbarColor: '#001f31'}
  },
  {
    path: '/offices',
    name: 'offices',
    component: OfficesView,
    meta: { navbarColor: '#001f31'}
  },
  {
    path: '/tickets',
    name: 'tickets',
    component: TicketView,
    meta: { navbarColor: '#001f31'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
