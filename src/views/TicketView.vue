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
        <label for="From">Departing From:</label>
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
        <label for="From">Destination:</label>
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
      <select id="people" name="people" class="dropdown" v-model="numberOfPeople" @change="calculatePrice" required>
      <option value="" disabled selected>Number of seats</option>
      <option v-for="num in [1, 2, 3, 4, 5]" :key="num" :value="num">{{ num }}</option>
    </select>

      <input type="date" v-model="selectedDate" class="date" :min="todayDate"
      @change="validateDate"/>

      <input type="time" v-model="departureTime" class="time"   :min="minTime" 
      @change="validateTime"/>


      <div v-show="isDivVisible" class="hidden-div">
        <label for="returning-date">Returning Date:</label>
        <input type="date" class="date" :min="todayDate" v-model="returningDate" @change="validateDate" />
      </div>

      <button class="submit-button" @click="displayResults()" type="button">Find Tickets</button>
      <!-- start of the modal -->
      <div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      
    </div>
    <div class="booking-results-grid" 
      v-if="isResultsDiplayed && selectedDeparture != null && selectedTravelling != null">
      <div class="booking-result">
        <h1 class="paragraph" id="select">{{ selectedDeparture }} TO {{ selectedTravelling }}</h1>
        <p class="paragraph">Distance: {{ distance }} km</p>
        <div v-if="arrivalTime && selectedDate">
          <p class="paragraph">
            Departure Date: {{ formattedDepartureDate }} <br />
            Estimated Arrival Time: {{ arrivalTime }} <br />
            Estimated Arrival Date: {{ formattedArrivalDate }}
          </p>
        </div>
        <p class="paragraph"> Number of people travelling: {{ numberOfPeople }}</p>
        <p class="paragraph">Price: R {{ priceInZAR }}</p>
        <p v-if="isDivVisible && returningDate" class="paragraph">Returning Date: {{ formattedReturningDate }}</p>
        
        <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#BookTicket" type="button">BOOK A TICKET</button>

        <div class="modal fade" id="BookTicket" tabindex="-1" aria-labelledby="BookTicketLabel" aria-hidden="true">
      <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="BookTicketLabel">Edit Your Booking</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Editable form values -->
        <div class="form-group">
          <label for="modal-departure">Departing From</label>
          <select id="modal-departure" v-model="selectedDeparture" class="form-control">
            <option
              v-for="city in departure"
              :key="city.departureID"
              :value="city.departureCity"
            >
              {{ city.departureCity }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="modal-travelling">Travelling To</label>
          <select id="modal-travelling" v-model="selectedTravelling" class="form-control">
            <option
              v-for="town in filteredTravelling"
              :key="town.travellingID"
              :value="town.travellingCity"
            >
              {{ town.travellingCity }}
            </option>
          </select>
        </div>
        <div class="form-group">
          <label for="modal-people">Number of People</label>
          <select id="modal-people" v-model="numberOfPeople" class="form-control">
            <option v-for="num in [1, 2, 3, 4, 5]" :key="num" :value="num">{{ num }}</option>
          </select>
        </div>
        <div class="form-group">
          <label for="modal-date">Departure Date</label>
          <input type="date" id="modal-date" v-model="selectedDate" class="form-control" :min="todayDate" />
        </div>
        <div class="form-group">
          <label for="modal-time">Departure Time</label>
          <input type="time" id="modal-time" v-model="departureTime" class="form-control" :min="minTime" />
        </div>
        <div v-if="isDivVisible" class="form-group">
          <label for="modal-returning-date">Returning Date</label>
          <input type="date" id="modal-returning-date" v-model="returningDate" class="form-control" :min="todayDate" />
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" @click="confirmBooking">Confirm your booking</button>
      </div>
    </div>
  </div>
</div>
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
      numberOfPeople: 1,  
      ratePerKm: 2,
      priceInZAR: 0,
      isDivVisible: false,
      selectedDeparture: null,
      selectedTravelling: null,
      isResultsDiplayed: false,
      longitude: null,
      latitude: null,
      departureTime: null,
      speed: 80,
      selectedDate: null,
      returningDate: null,
      todayDate: new Date().toISOString().split('T')[0],
      minTime: new Date().toTimeString().split(' ')[0].substring(0, 5)
    };
  },
  computed: {
    watch: {
    numberOfPeople() {
      this.calculatePrice(); // Watch the number of people and recalculate price
    },
  },
    formattedDepartureDate() {
    if (this.selectedDate) {
      const [year, month, day] = this.selectedDate.split('-');
      return `${day}/${month}/${year}`;
    }
    return null;
  },
  formattedArrivalDate() {
    if (this.arrivalDate) {
      const [year, month, day] = this.arrivalDate.split('-');
      return `${day}/${month}/${year}`;
    }
    return null;
  },
  formattedReturningDate() {
      if (this.returningDate) {
        const [year, month, day] = this.returningDate.split('-');
        return `${day}/${month}/${year}`;
      }
      return null;
    },
    ...mapState(["departure", "travelling"]),
    filteredTravelling() {
      return this.travelling.filter(
        (town) => town.travellingCity !== this.selectedDeparture
      );
    },
  },
  methods: {
    confirmBooking() {
      const bookingData = {
        selectedDeparture: this.selectedDeparture,
        selectedTravelling: this.selectedTravelling,
        numberOfPeople: this.numberOfPeople,
        selectedDate: this.selectedDate,
        departureTime: this.departureTime,
        returningDate: this.returningDate,
        distance: this.distance,
        priceInZAR: this.priceInZAR,
        arrivalTime: this.arrivalTime,
        arrivalDate: this.arrivalDate
      };

      // Dispatch the Vuex action to save the booking data
      this.$store.dispatch('confirmBooking', bookingData);
      this.$router.push({name: 'bookingSummary'})
    },
    validateDate() {
      if (this.selectedDate && this.selectedDate < this.todayDate) {
        alert('Selected date cannot be in the past.');
        this.selectedDate = this.todayDate; // Reset to today's date or previous valid date
      }
      if (this.returningDate && this.returningDate < this.todayDate) {
        alert('Returning date cannot be in the past.');
        this.returningDate = this.todayDate; // Reset to today's date or previous valid date
      }
    },
    validateTime() {
      if (this.selectedDate === this.todayDate && this.departureTime && this.departureTime < this.minTime) {
        alert('Selected time cannot be in the past.');
        this.departureTime = this.minTime; // Reset to current time or previous valid time
      }
    },
    displayResults(){
      if (!this.selectedDate || !this.departureTime) {
        alert('Please select both date and time.');
        return;
      }
            this.calculateDistance()
            this.calculatePrice();
            this.calculateDepartureTime();
            this.isResultsDiplayed = true
        },

        calculateDepartureTime() {
    if (this.departureTime && this.distance) {
      // Convert the departure time (input: HH:MM) to a Date object
      const [hours, minutes] = this.departureTime.split(':').map(Number);
      const departureDate = new Date(this.selectedDate); // Use selected date from input
      departureDate.setHours(hours, minutes, 0);

      // Calculate travel time in hours
      const travelTimeInHours = this.distance / this.speed;
      const travelTimeInMilliseconds = travelTimeInHours * 60 * 60 * 1000;

      // Add travel time to the departure date
      const arrivalDate = new Date(departureDate.getTime() + travelTimeInMilliseconds);

      // Check if the distance is more than 1200 km, then add one day to the arrival date
      if (this.distance > 1200) {
        arrivalDate.setDate(arrivalDate.getDate() + 1);
      }

      // Check if the arrival time passes midnight (00:00), add an extra day
      if (arrivalDate.getHours() < departureDate.getHours() || arrivalDate.getDate() > departureDate.getDate()) {
        arrivalDate.setDate(arrivalDate.getDate() + 1);
      }

      // Set arrival time and date
      this.arrivalTime = arrivalDate.toTimeString().split(' ')[0].substring(0, 5); // HH:MM format
      this.arrivalDate = arrivalDate.toISOString().split('T')[0]; // YYYY-MM-DD format

      console.log('Estimated Arrival Time:', this.arrivalTime);
      console.log('Estimated Arrival Date:', this.arrivalDate);
    } else {
      this.arrivalTime = null;
      this.arrivalDate = null;
    }
  }, 
  calculatePrice() {
      if (this.distance && this.numberOfPeople) {
        // Price per person
        const pricePerPerson = this.distance * this.ratePerKm;
        // Multiply by the number of people
        this.priceInZAR = (pricePerPerson * this.numberOfPeople).toFixed(2);
      }
    },
    calculateDistance() {
  const cityFromData = this.departure.find(city => city.departureCity === this.selectedDeparture);
  const cityToData = this.travelling.find(city => city.travellingCity === this.selectedTravelling);

  if (!cityFromData || !cityToData) {
    console.error('Selected city not found in data. Please check the city list.');
    return; // Exit the function early if either city is not found
  }

  const distance = this.haversine(
    cityFromData.latitude,
    cityFromData.longitude,
    cityToData.latitude,
    cityToData.longitude
  );

  this.distance = Math.round(distance);
  this.calculatePrice();
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
  },
};
</script>

<style scoped>
.modal-content{
  background-color: #001f31;
}
.paragraph{
  color: white;
  font-size: 1rem;
}
#select{
  padding-top: 2rem;
}
.booking-result{
  border: 2px solid #7ddff1; 
  width: 300px;
  background-image: linear-gradient(to right, #7ddff1, #001f31, #7ddff1,#001f31);
  margin-inline-start: 40rem;
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
.submit-button{
  background-image: linear-gradient(to right,#001f31, #7ddff1, #001f31);
  border: 2px solid #7ddff1;
  color: white;
}
@media (max-width: 768px) {
  .container-fluid {
    width: 100%;
    padding: 0 1rem;
  }
  .booking-result {
    margin-inline-start: 0;
    width: 100%;
  }
  h1 {
    font-size: 2rem;
  }
}

@media (max-width: 500px) {
  button {
    width: 100%;
  }
  h1 {
    font-size: 1.5rem;
  }
}

@media (max-width: 300px) {
  .container-fluid {
    width: 100%;
    padding: 0.5rem;
    gap: 1rem;
  }
  .booking-result {
    width: 100%;
  }
  h1 {
    font-size: 1.2rem;
    padding: 0;
  }
  button {
    width: 100%;
    height: 2.5rem;
  }
}
</style>
