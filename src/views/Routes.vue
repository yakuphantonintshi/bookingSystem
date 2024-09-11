<template>
    <div>
      <h1>Our routes:</h1>
      <input type="text" placeholder="Search..." v-model="searchQuery" @input="filterAndSortRoutes">
      <input type="text" placeholder="Sort by price" @input="toggleSortDirection">
      <section class="routes">
        <div class="routes-view">
          <div class="card" v-for="route in filteredRoutes" :key="route.routeID">
            <div class="card-header">
              <h5>{{ route.Depname }} to {{ route.ArriName }}</h5>
            </div>
            <div class="card-body">
              <h5 class="card-title">Distance: {{ route.distanceInKm }} km</h5>
              <p class="card-text">Travel time in hours: {{ route.time }}</p>
              <p class="card-text">Price: R{{ route.price }}</p>
              <router-link :to="{ name: 'RouteDetails', params: { routeID: route.routeID } }" class="btn btn-primary">
              BOOK YOUR TICKET
            </router-link>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        routes: [
          { routeID: 1, Depname: 'Johannesburg', ArriName: 'Cape Town', distanceInKm: 1211.16, time: 14, price: 700 },
          { routeID: 2, Depname: 'Port Elizabeth', ArriName: 'Cape Town', distanceInKm: 1000, time: 12, price: 670 },
          { routeID: 3, Depname: 'Gauteng', ArriName: 'Cape Town', distanceInKm: 1400, time: 18, price: 800 },
          { routeID: 4, Depname: 'East London', ArriName: 'Cape Town', distanceInKm: 1010, time: 11, price: 500 },
          { routeID: 5, Depname: 'Mthatha', ArriName: 'Cape Town', distanceInKm: 1400, time: 15, price: 600 },
          { routeID: 6, Depname: 'Queenstown', ArriName: 'Cape Town', distanceInKm: 1000, time: 11, price: 500 },
          { routeID: 7, Depname: 'King Williams Town', ArriName: 'Cape Town', distanceInKm: 1200, time: 12, price: 600 },
          { routeID: 8, Depname: 'Bloemfontein', ArriName: 'Cape Town', distanceInKm: 1000, time: 12, price: 600 },
          { routeID: 9, Depname: 'Durban', ArriName: 'Cape Town', distanceInKm: 1600, time: 18, price: 800 },
        ],
        searchQuery: '',
        sortDirection: 'asc',
      };
    },
    computed: {
      filteredRoutes() {
        const filtered = this.routes.filter(route =>
          route.Depname.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          route.ArriName.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        return this.sortRoutes(filtered);
      },
    },
    methods: {
      sortRoutes(routes) {
        if (!Array.isArray(routes)) {
          console.error('Expected routes to be an array');
          return [];
        }
        return [...routes].sort((a, b) => {
          return this.sortDirection === 'asc' ? a.price - b.price : b.price - a.price;
        });
      },
      filterAndSortRoutes() {
        this.filteredRoutes;
      },
      toggleSortDirection() {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
        this.filterAndSortRoutes();
      },
    },
  };
  </script>

<style scoped>
.card-body{
    color: white;
}
.routes{
    margin-right: 4rem;
    margin-left: 4rem;
    margin-bottom: 2rem;
}
.card{
    width: 500px;
    height: 280px;
    background: #001f31;
    border: 2px solid #7ddff1;
}
.card-header{
    background-color: #7ddff1;
    color: #001f31;
}
.btn{
    background-color: #001f31;
    color: white; 
    margin-top: .9rem;
    margin-bottom: 5px;
    width: 15rem;
    height: 3rem;
    border: 2px solid #7ddff1;
}
.btn:hover{
    background-color: #1d7fb8;
    color: white; 
    border: 2px solid #7ddff1;   
}
.routes-view{
    display: flex;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;   
}
h1{
    color: white;
  padding-top: 5px;
  font-weight: bold;
  text-shadow: 3px 3px 5px #7ddff1;
}
input{
    width: 400px;
    height: 40px;
    margin-inline: 13rem;
    margin-bottom: 2rem;
    border: 1.3px solid black;
    padding-inline-start: 1rem;
}

</style>