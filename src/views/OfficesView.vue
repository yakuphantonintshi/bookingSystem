<template>
  <div class="container-fluid dvh-100">
    <h1>Booking Offices</h1>
    <h4>Visit Us to Book Your Tickets In Person</h4>
    <h4>Come book at our offices for a personal touch</h4>

    <h1>EASTERN CAPE STATION</h1>
    <div class="card-display" v-if="eastern?.length">
      <CardComp v-for="station in eastern" :key="station.stationID">
        <template #cardHeader>
          <h1>{{ station.stationName }}</h1>

          <img
            :src="station.stationURL"
            loading="lazy"
            class="img-fluid prod-prev"
            :alt="station.stationName"
          />
        </template>
        <template #cardBody>
          <div class="row">
            <div class="lead">{{ station.address }}</div>
            <div>{{ station.email }}</div>
          </div>
        </template>
      </CardComp>
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
     <h1>FREESTATE STATION</h1>
    <div class="card-display" v-if="freestate?.length">
      <CardComp v-for="station in freestate" :key="station.stationID">
        <template #cardHeader>
          <h1>{{ station.stationName }}</h1>

          <img
            :src="station.stationURL"
            loading="lazy"
            class="img-fluid prod-prev"
            :alt="station.stationName"
          />
        </template>
        <template #cardBody>
          <div class="row">
            <div class="lead">{{ station.address }}</div>
            <div>{{ station.email }}</div>
          </div>
        </template>
      </CardComp>
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
    <h1>WESTERN CAPE STATION</h1>
    <div class="card-display" v-if="western?.length">
      <CardComp v-for="station in western" :key="station.stationID">
        <template #cardHeader>
          <h1>{{ station.stationName }}</h1>

          <img
            :src="station.stationURL"
            loading="lazy"
            class="img-fluid prod-prev"
            :alt="station.stationName"
          />
        </template>
        <template #cardBody>
          <div class="row">
            <div class="lead">{{ station.address }}</div>
            <div>{{ station.email }}</div>
          </div>
        </template>
      </CardComp>
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
    <h1>NORTHERN CAPE STATION</h1>
    <div class="card-display" v-if="northern?.length">
      <CardComp v-for="station in northern" :key="station.stationID">
        <template #cardHeader>
          <h1>{{ station.stationName }}</h1>

          <img
            :src="station.stationURL"
            loading="lazy"
            class="img-fluid prod-prev"
            :alt="station.stationName"
          />
        </template>
        <template #cardBody>
          <div class="row">
            <div class="lead">{{ station.address }}</div>
            <div>{{ station.email }}</div>
          </div>
        </template>
      </CardComp>
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
     <h1>KWAZULU-NATAL STATION</h1>
    <div class="card-display" v-if="kzn?.length">
      <CardComp v-for="station in kzn" :key="station.stationID">
        <template #cardHeader>
          <h1>{{ station.stationName }}</h1>

          <img
            :src="station.stationURL"
            loading="lazy"
            class="img-fluid prod-prev"
            :alt="station.stationName"
          />
        </template>
        <template #cardBody>
          <div class="row">
            <div class="lead">{{ station.address }}</div>
            <div>{{ station.email }}</div>
          </div>
        </template>
      </CardComp>
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
    <h1>GAUTENG STATION</h1>
    <div class="card-display" v-if="gauteng?.length">
      <CardComp v-for="station in gauteng" :key="station.stationID">
        <template #cardHeader>
          <h1>{{ station.stationName }}</h1>

          <img
            :src="station.stationURL"
            loading="lazy"
            class="img-fluid prod-prev"
            :alt="station.stationName"
          />
        </template>
        <template #cardBody>
          <div class="row">
            <div class="lead">{{ station.address }}</div>
            <div>{{ station.email }}</div>
          </div>
        </template>
      </CardComp>
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import CardComp from "@/components/CardComp.vue";
import SpinnerComp from "@/components/SpinnerComp.vue";
import { mapState } from "vuex";

export default {
  components: {
    CardComp,
    SpinnerComp,
  },
  computed: {
    ...mapState(["eastern"]),
    ...mapState(["western"]),
    ...mapState(["kzn"]),
    ...mapState(["freestate"]),
    ...mapState(["northern"]),
    ...mapState(["gauteng"]),
  },
  methods: {
    async getEastern() {
      await this.$store.dispatch("fetchEastern");
    },
    async getWestern() {
      await this.$store.dispatch("fetchWestern");
    },
    async getKzn() {
      await this.$store.dispatch("fetchKzn");
    },
    async getFreestate() {
      await this.$store.dispatch("fetchFreestate");
    },
    async getNorthern() {
      await this.$store.dispatch("fetchNorthern");
    },
    async getGauteng() {
      await this.$store.dispatch("fetchGauteng");
    },
  },
  mounted() {
    this.getEastern();
    this.getWestern();
    this.getKzn();
    this.getFreestate();
    this.getNorthern();
    this.getGauteng();
  },
};
</script>

<style scoped>
.row{
  color: white;
}
.card-display{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
}
.content {
  display: flex;
}
.dropdown {
  margin-inline: 0.6rem;
}
.btn {
  background-color: #001f31;
  color: #7ddff1;
  border: 2px solid #7ddff1;
}
.btn:hover {
  background-color: #fff;
  color: #7ddff1;
}
.container-fluid {
<<<<<<< HEAD
  background-color: #001f31;
=======
  background-color: transparent;
>>>>>>> 3bcef4e1e7949a33fbb97fa72bce0dc4eab5a571
  background-size: cover;
  background-position: center;
}
h1 {
  color: white;
  padding-top: 5px;
  font-weight: bold;
  text-shadow: 3px 3px 5px #7ddff1;
}
:is(h2, h3, h4, p) {
  color: white;
  /* text-shadow: 3px 3px 5px #7ddff1; */
  padding-block: 1rem;
}
</style>
