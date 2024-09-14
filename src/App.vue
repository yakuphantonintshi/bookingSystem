<template>
  <div class="wrapper">
    <NavBar :style="{ backgroundColor: currentNavbarColor }" v-if="showNavbar"/>
    <main class="main dvh-100">
      <router-view/>
    </main>
    <Footer/>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer
  },
  computed: {
    currentNavbarColor() {
      return this.$route.meta.navbarColor || '#333';
    },
    showNavbar() {
      const visibleNavbarRoutes = ['about', 'offices', 'tickets', 'faq', 'contact', 'bookingSummary', 'routes','RouteDetails', 'adminView', 'home', 'Profile', 'questions', 'login', 'admin'];
      return visibleNavbarRoutes.includes(this.$route.name);
    },
  },
};

</script>

<style src="@/assets/css/style.css">
</style>
