<template>
  <div class="wrapper">
    <NavBar :style="{ backgroundColor: currentNavbarColor }" v-if="showNavbar"/>
    <main>
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
      // return this.$route.name !== 'home';
      const visibleNavbarRoutes = ['/about', '/offices', '/tickets', '/faq', '/contact'];
      return visibleNavbarRoutes.includes(this.$route.path);
    },
  },
};

</script>

<style src="@/assets/css/style.css">


</style>
