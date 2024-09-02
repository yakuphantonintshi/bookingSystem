<template>
  <div class="wrapper">
    <NavBar v-if="showNavbar"/>
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
    showNavbar() {
      // return this.$route.name !== 'home';
      const visibleNavbarRoutes = ['/register'];
      return visibleNavbarRoutes.includes(this.$route.path);
    },
  },
};

</script>

<style src="@/assets/css/style.css">

</style>
