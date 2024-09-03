<template>
  <div class="container-fluid vh-100">
  <h1>Booking Offices</h1>
    <h2>Visit Us to Book Your Tickets In Person</h2>
    <h4>Come book at our offices for a personal touch</h4>


<div class="content">
    <div class="dropdown" v-if="eastern?.length">
        <div v-for="place in eastern" :key="place.stationName">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    EASTERN CAPE OFFICES
  </button>
  <ul class="dropdown-menu">
  {{ place.stationName}}
  {{ place.address }}
  {{ place.email }}
  </ul>
</div>
</div>
<div v-else class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
    </div>
</div>

<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    WESTERN CAPE OFFICES
  </button>
  <ul class="dropdown-menu">
  </ul>
</div>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    FREESTATE OFFICES
  </button>
  <ul class="dropdown-menu">
  </ul>
</div>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    KWAZULU-NATAL OFFICES
  </button>
  <ul class="dropdown-menu">
  </ul>
</div>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    GAUTENG OFFICES
  </button>
  <ul class="dropdown-menu">
  </ul>
</div>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
   NORTHERN CAPE OFFICES
  </button>
  <ul class="dropdown-menu">
  </ul>
</div>
</div>

</div>

</template>

<script>

 export default {
      computed: {
          eastern() {
              return this.$store.state.eastern
          }
      },
      mounted() {
          this.$store.dispatch('fetchEastern')
      },
     
  }

</script>

<style scoped>
.content{
    display: flex;
}
.dropdown{
    margin-inline: .6rem;
}
.btn{
    background-color: #001f31;
    color: #7ddff1;
    border: 2px solid #7ddff1;
}
.btn:hover{
    background-color: #fff;
    color: #7ddff1;
}
.container-fluid{
    background-color: #001f31;
    background-size: cover;
    background-position: center;  
}
h1{
    color: white;
    padding-top: 5px;
    font-weight: bold;
    text-shadow: 3px 3px 5px  #7ddff1;
}
:is( h2, h3, h4, p){
    color: white;
    text-shadow: 3px 3px 5px  #7ddff1;
    padding-block: 1rem;
}

</style>