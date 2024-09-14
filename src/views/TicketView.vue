<template>
  <div class="main-container">
    <form class="form dvh-100">
      <div class="form-container">
        <div class="form-section vh-100">
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

            <input type="time" v-model="departureTime" class="time" :min="minTime" 
              @change="validateTime"/>

            <div v-show="isDivVisible" class="hidden-div">
              <label for="returning-date">Returning Date:</label>
              <input type="date" class="date" :min="todayDate" v-model="returningDate" @change="validateDate" />
            </div>

            <button class="submit-button" @click="displayResults()" type="button">Find Tickets</button>
          </div>
        </div>
      </div>
    </form>

    <!-- Results Section -->
    <div class="result-section" v-if="isResultsDiplayed && selectedDeparture && selectedTravelling">
      <div class="booking-results-grid">
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

          <button class="btn" data-bs-toggle="modal" data-bs-target="#BookTicket" type="button">BOOK A TICKET</button>

          <div class="modal fade" id="BookTicket" tabindex="-1" aria-labelledby="BookTicketLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="BookTicketLabel">Edit Your Booking</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
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
                  <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn" @click="confirmBooking">Proceed to checkout</button>
                  <div v-if="showMessage" class="overlay">
                    <div class="spinner-container">
                      <div class="checkout-icon-container">
                        <i class="bi bi-check-square-fill"></i>
                      </div>
                      <p>Thank you for your booking!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      showMessage: false,
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
      this.calculatePrice();
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
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 5000); 
  },
  validateDate() {
    if (this.selectedDate && this.selectedDate < this.todayDate) {
      alert('Selected date cannot be in the past.');
      this.selectedDate = this.todayDate;
    }
    
    if (this.returningDate && this.returningDate < this.todayDate) {
      alert('Returning date cannot be in the past.');
      this.returningDate = this.todayDate;
    }

    if (this.selectedDate && this.returningDate && this.returningDate <= this.selectedDate) {
      alert('Returning date must be after the departure date.');
      const departureDate = new Date(this.selectedDate);
      departureDate.setDate(departureDate.getDate() + 1); // Set returningDate to one day after selectedDate
      this.returningDate = departureDate.toISOString().split('T')[0];
    }
  },
  validateTime() {
    if (this.selectedDate === this.todayDate && this.departureTime && this.departureTime < this.minTime) {
      alert('Selected time cannot be in the past.');
      this.departureTime = this.minTime;
    }
  },
  displayResults(){
    if (!this.selectedDate || !this.departureTime) {
      alert('Please select both date and time.');
      return;
    }
    this.calculateDistance();
    this.calculatePrice();
    this.calculateDepartureTime();
    this.isResultsDiplayed = true;
  },
  calculateDepartureTime() {
    if (this.departureTime && this.distance) {
      const [hours, minutes] = this.departureTime.split(':').map(Number);
      const departureDate = new Date(this.selectedDate);
      departureDate.setHours(hours, minutes, 0);

      const travelTimeInHours = this.distance / this.speed;
      const travelTimeInMilliseconds = travelTimeInHours * 60 * 60 * 1000;

      const arrivalDate = new Date(departureDate.getTime() + travelTimeInMilliseconds);

      if (this.distance > 1200) {
        arrivalDate.setDate(arrivalDate.getDate() + 1);
      }

      if (arrivalDate.getHours() < departureDate.getHours() || arrivalDate.getDate() > departureDate.getDate()) {
        arrivalDate.setDate(arrivalDate.getDate() + 1);
      }
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
      const pricePerPerson = this.distance * this.ratePerKm;
      this.priceInZAR = (pricePerPerson * this.numberOfPeople).toFixed(2);
    }
  },
  calculateDistance() {
    const cityFromData = this.departure.find(city => city.departureCity === this.selectedDeparture);
    const cityToData = this.travelling.find(city => city.travellingCity === this.selectedTravelling);

    if (!cityFromData || !cityToData) {
      console.error('Selected city not found in data. Please check the city list.');
      return; 
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
    const R = 6371.0;
    const lat1Rad = toRadians(lat1);
    const lon1Rad = toRadians(lon1);
    const lat2Rad = toRadians(lat2);
    const lon2Rad = toRadians(lon2);
    const dLat = lat2Rad - lat1Rad;
    const dLon = lon2Rad - lon1Rad;
    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
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
.main-container {
  display: flex;
  justify-content: space-between;
  gap: 1rem; 
}

.form {
  flex: 1;
}

.result-section {
  flex: 1; 
}


.booking-results-grid {
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
}

.hidden-div {
  display: none;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1050;
}

.spinner-container {
  text-align: center;
  background: white; 
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
}

.spinner-border {
  width: 3rem;
  height: 3rem;
  border-width: 0.4em;
}

.checkout-icon-container {
  margin-top: 10px;
}

.bi{
  font-size: 4rem;
  color: #28a745; 
}

p{
  font-size: 1.25rem;
  color: #343a40;
  margin-top: 10px;
}
.modal-content {
  background-color: #001f31;
}
.paragraph {
  color: white;
  font-size: 1rem;
}
#select {
  padding-top: 2rem;
}
.booking-result {
  border: 2px solid #7ddff1;
  width: 700px;
  /* max-width: 300px; */
  background-image: linear-gradient(to right, #7ddff1, #001f31, #7ddff1, #001f31);
  /* margin: 1rem auto; */
  margin-top: 2rem;
}
form {
  padding: 2rem;
}
label {
  color: #7ddff1;
}
.date, .dropdown {
  width: 100%;
}
option {
  background-color: #001f31;
}
.find {
  background-color: #7ddff1;
  color: #001f31;
  /* margin-left: 10rem; */
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
  background-color: transparent;
  padding-bottom: 3rem;
  color: white;
}
h1 {
  font-weight: bold;
  font-size: 3rem;
  text-shadow: 2px 2px 5px #7ddff1;
}
form {
  background-color: transparent;
  padding-top: 3rem;
}
button {
  margin-bottom: 1.5rem;
  width: 100%; 
  max-width: 150px; 
  height: 3rem;
}
.container-fluid {
  background-color: #001f31;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 2rem;
  /* margin: 0 auto;  */
  padding: 1.2rem
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
}
.submit-button {
  background-image: linear-gradient(to right, #001f31, #7ddff1, #001f31);
  border: 2px solid #7ddff1;
  color: white;
}
.btn{
  background-image: linear-gradient(to right, #001f31, #7ddff1, #001f31);
  border: 2px solid #7ddff1;
  color: white;
  height: 70px;
}


@media (max-width: 1000px) {
  .container-fluid {
    padding: 0 1rem;
  }
  .booking-result {
    width: 100%; 
    margin: 1rem 0;
  }
  h1 {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .container-fluid {
    padding: 0 0.5rem;
  }
  .booking-result {
    width: 100%; 
    margin: 0.5rem 0;
  }
  h1 {
    font-size: 2rem;
  }
  form{
    width: 500px;
  }
}

@media (max-width: 500px) {
  button {
    width: 100%;
    height: 2.5rem;
  }
  h1 {
    font-size: 1.5rem;
  }
  form{
    width: 400px;
  }
}
@media (max-width: 400px) {
  form{
    width: 300px;
  }
}


@media (max-width: 300px) {
  .container-fluid {
    padding: 0.5rem;
    gap: 1rem;
  }
  .booking-result {
    width: 100%;
    max-width: none;
  }
  h1 {
    font-size: 1.2rem;
  }
  button {
    height: 2rem; 
  }
}
</style>
