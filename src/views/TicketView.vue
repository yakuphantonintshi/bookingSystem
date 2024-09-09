<template>
  <form>
    <div class="ticket">
      <h1>BOOK YOUR TICKET!</h1>
    </div>
    <button type="button" class="one-way">One way</button>
    <button @click="toggleDiv" type="button" class="return">Return</button>

    <div class="container-fluid dvh-100">
      <!-- Departure Dropdown -->
      <div v-if="departure?.length">
        <select
          id="departure"
          name="departure"
          class="dropdown"
          v-model="selectedDeparture"
          required
        >
          <option value="" disabled selected>Departing from</option>
          <option
            v-for="city in departure"
            :key="city.departureID"
            :value="city.departureCity"
          >
            {{ city.departureCity }}
          </option>
        </select>
      </div>
      <div v-else>
        <SpinnerComp />
      </div>

      <!-- Travelling Dropdown -->
      <div v-if="travelling?.length">
        <select
          id="travelling"
          name="travelling"
          class="dropdown"
          v-model="selectedTravelling"
          required
        >
          <option value="" disabled selected>Travelling To</option>
          <option
            v-for="town in filteredTravelling"
            :key="town.travellingID"
            :value="town.travellingCity"
          >
            {{ town.travellingCity }}
          </option>
        </select>
      </div>
      <div v-else>
        <SpinnerComp />
      </div>

      <select id="people" name="people" class="dropdown" required>
        <option value="" disabled selected></option>
        <option value="number">1</option>
        <option value="number">2</option>
        <option value="number">3</option>
        <option value="number">4</option>
        <option value="number">5</option>
      </select>

      <input type="date" class="date" />
      <input type="time" v-model="departureTime" class="time" />


      <div v-show="isDivVisible" class="hidden-div">
        <label for="returning-date">Returning Date:</label>
        <input type="date" class="date" />
      </div>

      <button class="submit-button" @click="displayResults()" type="button">Find Tickets</button>
      
    </div>
    <div class="booking-results-grid" 
   v-if="isResultsDiplayed && selectedDeparture != null && selectedTravelling != null">
  <div class="booking-result">
      <h1 class="paragraph">{{ selectedDeparture }} TO {{ selectedTravelling }}</h1>
      <p class="paragraph">Distance: {{ distance }} km</p>
      <div v-if="arrivalTime">
  <p class="paragraph">Estimated Arrival Time: {{ arrivalTime }}</p>
</div>
      <button class="book">BOOK A TICKET</button>
  </div>
  <div class="booking-result">
      <h1 class="paragraph">{{ selectedDeparture }} TO {{ selectedTravelling }}</h1>
      <p class="paragraph">Distance: {{ distance }} km</p>
      <p class="paragraph">Price: R {{ priceInZAR }}</p>
      <button class="book">BOOK A TICKET</button>
  </div>
  <div class="booking-result">
      <h1 class="paragraph">{{ selectedDeparture }} TO {{ selectedTravelling }}</h1>
      <p class="paragraph">Distance: {{ distance }} km</p>
      <p class="paragraph">Price: R {{ priceInZAR }}</p>
      <button class="book">BOOK A TICKET</button>
  </div>
  <div class="booking-result">
      <h1 class="paragraph">{{ selectedDeparture }} TO {{ selectedTravelling }}</h1>
      <p class="paragraph">Distance: {{ distance }} km</p>
      <p class="paragraph">Price: R {{ priceInZAR }}</p>
      <button class="book">BOOK A TICKET</button>
  </div>
  <div class="booking-result">
      <h1 class="paragraph">{{ selectedDeparture }} TO {{ selectedTravelling }}</h1>
      <p class="paragraph">Distance: {{ distance }} km</p>
      <p class="paragraph">Price: R {{ priceInZAR }}</p>
      <button class="book">BOOK A TICKET</button>
  </div>
  <div class="booking-result">
      <h1 class="paragraph">{{ selectedDeparture }} TO {{ selectedTravelling }}</h1>
      <p class="paragraph">Distance: {{ distance }} km</p>
      <p class="paragraph">Price: R {{ priceInZAR }}</p>
      <button class="book">BOOK A TICKET</button>
  </div>
  <div class="booking-result">
      <h1 class="paragraph">{{ selectedDeparture }} TO {{ selectedTravelling }}</h1>
      <p class="paragraph">Distance: {{ distance }} km</p>
      <p class="paragraph">Price: R {{ priceInZAR }}</p>
      <button class="book">BOOK A TICKET</button>
  </div>
  <div class="booking-result">
      <h1 class="paragraph">{{ selectedDeparture }} TO {{ selectedTravelling }}</h1>
      <p class="paragraph">Distance: {{ distance }} km</p>
      <p class="paragraph">Price: R {{ priceInZAR }}</p>
      <button class="book">BOOK A TICKET</button>
  </div>
</div>
  </form>
</template>

<script>
import { mapState } from "vuex";
import SpinnerComp from "@/components/SpinnerComp.vue";
export default {
  components: {
    SpinnerComp,
  },
  data() {
    return {
      ratePerKm: 3,
      priceInZAR: 0,
      isDivVisible: false,
      selectedDeparture: null,
      selectedTravelling: null,
      isResultsDiplayed: false,
      longitude: null,
      latitude: null,
      departureTime: null,
      speed: 80
    };
  },
  computed: {
    ...mapState(["departure", "travelling"]),
    filteredTravelling() {
      return this.travelling.filter(
        (town) => town.travellingCity !== this.selectedDeparture
      );
    },
  },
  methods: {
    displayResults(){
            this.calculateDistance()
            this.calculatePrice();
            this.calculateDepartureTime();
            this.isResultsDiplayed = true
        },

        calculateDepartureTime() {
    if (this.departureTime && this.distance) {
      // Example: Calculate travel time based on distance and speed
      const departureDate = new Date(`1970-01-01T${this.departureTime}`);
      const travelTimeInHours = this.distance / this.speed; // Travel time in hours
      const travelTimeInMilliseconds = travelTimeInHours * 60 * 60 * 1000; // Convert to milliseconds
      const arrivalDate = new Date(departureDate.getTime() + travelTimeInMilliseconds);

      this.arrivalTime = arrivalDate.toTimeString().split(' ')[0];
      console.log('Estimated Arrival Time:', this.arrivalTime);
    } else {
      this.arrivalTime = null;
    }
  },

        calculateDistance(){
            const cityFromName = this.selectedDeparture
            const cityToName = this.selectedTravelling
            const cityFromData = this.departure.filter(city => city.departureCity === cityFromName)[0]
            const cityToData = this.travelling.filter(city => city.travellingCity === cityToName)[0]

       
            const distance = this.haversine(
                cityFromData.latitude,
                cityFromData.longitude,
                cityToData.latitude,
                cityToData.longitude
            )
            // const roundedDistance = distance.toFixed(2);
            // console.log(roundedDistance);
            
            this.distance = Math.round(distance)
        },
        calculatePrice() {
      this.priceInZAR = (this.distance * this.ratePerKm).toFixed(2);
      console.log('Distance:', this.distance, 'Type:', typeof this.distance);
    },
        haversine(lat1, lon1, lat2, lon2) {
            const toRadians = (degrees) =>  degrees * (Math.PI / 180);
            // Radius of the Earth in kilometers
            const R = 6371.0;
            // Convert latitude and longitude from degrees to radians
            const lat1Rad = toRadians(lat1);
            const lon1Rad = toRadians(lon1);
            const lat2Rad = toRadians(lat2);
            const lon2Rad = toRadians(lon2);
            // Differences in coordinates
            const dLat = lat2Rad - lat1Rad;
            const dLon = lon2Rad - lon1Rad;
            // Haversine formula
            const a = Math.sin(dLat / 2) ** 2 +
                      Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
            // Distance in kilometers
            return R * c;
           

            
        },

    toggleDiv() {
      this.isDivVisible = !this.isDivVisible;
    },
    async getDeparture() {
      await this.$store.dispatch("fetchDeparture");
    },
    async getTravelling() {
      await this.$store.dispatch("fetchTravelling");
    },
  },
  mounted() {
    this.getDeparture();
    this.getTravelling();
    // this.calculatePrice();
  },
};
</script>

<style scoped>
.booking-results-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px; 
}
.paragraph{
  color: white;
  font-size: 1rem;
}
.booking-result{
  border: 2px solid #7ddff1; 
  width: 300px;
  background-color: #1e555f;
}

label {
  color: #7ddff1;
}
.date {
  width: 480px;
}
.dropdown {
  width: 480px;
}
option {
  background-color: #001f31;
}
.find {
  background-color: #7ddff1;
  color: #001f31;
  margin-left: 10rem;
}
.return {
  background-color: transparent;
  border: 2px solid #7ddff1;
  color: white;
}
.return:focus {
  background-color: #7ddff1;
  color: #001f31;
}

.ticket {
  background-color: #001f31;
  padding-bottom: 3rem;
  color: white;
}
h1 {
  font-weight: bold;
  font-size: 3rem;
  text-shadow: 2px 2px 5px #7ddff1;
}
form {
  background-color: #001f31;
  padding-top: 3rem;
}
.container-fluid {
  display: flex;
  flex-direction: column;
  width: 500px;
  gap: 2rem;
}
button {
  margin-bottom: 1.5rem;
  width: 150px;
  height: 3rem;
}
.container-fluid {
  background-color: #001f31;
}
:is(input, select) {
  height: 2rem;
  background-color: transparent;
  border-top: 2px solid #7ddff1;
  border-left: 2px solid #7ddff1;
  color: white;
}

.one-way {
  background-color: #7ddff1;
  color: #001f31;
  border: #001f31;
}
#people {
  color: white;
  width: 480px;
}
</style>
