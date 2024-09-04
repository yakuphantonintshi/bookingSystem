<template>
  <div class="container-fluid vh-100">
  <h1>Booking Offices</h1>
    <h2>Visit Us to Book Your Tickets In Person</h2>
    <h4>Come book at our offices for a personal touch</h4>


<!-- <div class="content">

  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    EASTERN CAPE OFFICES
  </button>
  <ul class="dropdown-menu">
  </ul>
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
</div> -->

<p class="d-inline-flex gap-1">
  <a class="btn btn-primary" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Toggle first element</a>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button>
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card card-body">
        Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body">
        Some placeholder content for the second collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
import CardComp from '@/components/CardComp.vue'
import SpinnerComp from '@/components/SpinnerComp.vue'

 export default {
  components: {
    CardComp,
    SpinnerComp
  },
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