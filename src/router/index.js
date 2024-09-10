import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import AboutView from '@/views/AboutView.vue'
import OfficesView from '@/views/OfficesView.vue'
import TicketView from '../views/TicketView.vue'
import FAQView from '@/views/FAQView.vue'
import ContactView from '@/views/ContactView.vue'
import AdminLogin from '@/views/AdminLogin.vue'
import AdminView from '@/views/AdminView.vue'
import BookingSummary from '@/views/BookingSummary.vue'

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
  },
  {
    path: '/faq',
    name: 'questions',
    component: FAQView,
    meta: { navbarColor: '#001f31'}
  },
  {

    path: '/contact',
    name: 'contact',
    component: ContactView,
    meta: { navbarColor: '#001f31'}
  },
  {

    path: '/admin',
    name: 'admin',
    component: AdminLogin,
    meta: { navbarColor: '#001f31'}
  },
  {

    path: '/adminView',
    name: 'adminView',
    component: AdminView,
    meta: { navbarColor: '#001f31'}
  },
  {

    path: '/bookingSummary',
    name: 'bookingSummary',
    component: BookingSummary,
    meta: { navbarColor: '#001f31'}
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
