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
import Routes from '@/views/Routes.vue'
import RouterOne from '@/views/RouterOne.vue'
<<<<<<< HEAD
=======
import ProfileView from '@/views/ProfileView.vue'
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571

const routes = [
  {
    path: '/',
    name: 'home',
<<<<<<< HEAD
    component: HomeView
=======
    component: HomeView,
    meta: { navbarColor: 'transparent'}
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
  },
  {
    path: '/login',
    name: 'login',
<<<<<<< HEAD
    component: LoginView
=======
    component: LoginView,
    meta: { navbarColor: 'transparent'}
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
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
<<<<<<< HEAD
    meta: { navbarColor: '#001f31'}
=======
    meta: { navbarColor: 'transparent'}
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
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
<<<<<<< HEAD
    meta: { navbarColor: '#001f31'}
=======
    meta: { navbarColor: 'transparent'}
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
  },
  {

    path: '/adminView',
    name: 'adminView',
    component: AdminView,
    meta: { navbarColor: '#003c6c'}
  },
  {
    path: '/bookingSummary',
    name: 'bookingSummary',
    component: BookingSummary,
    meta: { navbarColor: '#001f31'}
  },
  {
    path: '/routes',
    name: 'routes',
    component: Routes,
    meta: { navbarColor: '#001f31'}
  },
  { path: '/route/:routeID', 
    name: 'RouteDetails',
     component: RouterOne, 
     props: true,
     meta: { navbarColor: '#001f31'}
<<<<<<< HEAD
     },
=======
  },
  { 
    path: '/profile', 
    name: 'Profile',
    component: ProfileView, 
    meta: { navbarColor: '#001f31'}
  },
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
