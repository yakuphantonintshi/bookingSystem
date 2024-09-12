<template>
    <div class="everything">
        <h1>Route Details</h1>
        <div v-if="route" class="routeOne vh-100">
        <div class="card">
          <div class="card-header">
            <h5>{{ route.Depname }} to {{ route.ArriName }}</h5>
          </div>
          <div class="card-body">
            <h5 class="card-title">Distance: {{ route.distanceInKm }} km</h5>
            <p class="card-text">Travel time in hours: {{ route.time }}</p>
            <p class="card-text">Price: R{{ route.price }}</p>
            <div class="form-group">
              <label for="modal-date">Departure Date</label>
              <input type="date" id="modal-date" v-model="selectedDate" class="form-control" :min="todayDate" />
            </div>
            <div class="form-group">
              <label for="modal-time">Departure Time</label>
              <input type="time" id="modal-time" v-model="departureTime" class="form-control" :min="minTime" />
            </div>
            <button type="button" @click="bookTicket" class="book">BOOK THIS TICKET</button>
          </div>
        </div>
      </div>
      <div v-if="bookingDetails" class="booking-details">
        <p class="paragraph"><strong>Booking Confirmation:</strong></p>
        <p class="paragraph"><strong>Route:</strong> {{ bookingDetails.route.Depname }} to {{ bookingDetails.route.ArriName }}</p>
        <p class="paragraph"><strong>Distance:</strong> {{ bookingDetails.route.distanceInKm }} km</p>
        <p class="paragraph"><strong>Travel time:</strong> {{ bookingDetails.route.time }} hours</p>
        <p class="paragraph"><strong>Price:</strong> R{{ bookingDetails.route.price }}</p>
        <p class="paragraph"><strong>Departure Date:</strong> {{ bookingDetails.selectedDate }}</p>
        <p class="paragraph"><strong>Departure Time:</strong> {{ bookingDetails.departureTime }}</p>
        <button type="button" @click="showThankYouMessage" class="checkout">CHECKOUT</button>
        <div v-if="showMessage" class="overlay">
<div class="spinner-container">
  <!-- Checkout Icon -->
  <div class="checkout-icon-container">
      <i class="bi bi-check-square-fill"></i>
  </div>
  <p>Thank you for your booking!</p>
</div>
</div>
      </div>
    </div>
  </template>
  
  
  <script>
export default {
  props: ['routeID'],
  data() {
    return {
    showMessage: false,
      route: null,
      selectedDate: '',
      departureTime: '',
      todayDate: new Date().toISOString().split('T')[0],
      minTime: '00:00',
      bookingDetails: null, // New data property to hold booking details
    };
  },
  created() {
    const routeID = this.$route.params.routeID;
    this.route = this.getRouteByID(routeID);
  },
  methods: {
    showThankYouMessage() {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 5000); 
    },
    getRouteByID(routeID) {
      const routes = [
        { routeID: 1, Depname: 'Johannesburg', ArriName: 'Cape Town', distanceInKm: 1211.16, time: 14, price: 700 },
        { routeID: 2, Depname: 'Port Elizabeth', ArriName: 'Cape Town', distanceInKm: 1000, time: 12, price: 670 },
        { routeID: 3, Depname: 'Gauteng', ArriName: 'Cape Town', distanceInKm: 1400, time: 18, price: 800 },
        { routeID: 4, Depname: 'East London', ArriName: 'Cape Town', distanceInKm: 1010, time: 11, price: 500 },
        { routeID: 5, Depname: 'Mthatha', ArriName: 'Cape Town', distanceInKm: 1400, time: 15, price: 600 },
        { routeID: 6, Depname: 'Queenstown', ArriName: 'Cape Town', distanceInKm: 1000, time: 11, price: 500 },
        { routeID: 7, Depname: 'King Williams Town', ArriName: 'Cape Town', distanceInKm: 1200, time: 12, price: 600 },
        { routeID: 8, Depname: 'Bloemfontein', ArriName: 'Cape Town', distanceInKm: 1000, time: 12, price: 600 },
        { routeID: 9, Depname: 'Durban', ArriName: 'Cape Town', distanceInKm: 1600, time: 18, price: 800 },
      ];
      return routes.find(route => route.routeID === parseInt(routeID));
    },
    bookTicket() {
      if (this.route) {
        this.bookingDetails = {
          route: this.route,
          selectedDate: this.selectedDate,
          departureTime: this.departureTime
        };
      }
    }
  }
};
</script>

  
  <style scoped>
 .book{
    background-color: #7ddff1;
    border-radius: .8rem;
    width: 15rem;
    height: 3rem;
    margin: 1rem;
    margin-top: 2rem;
 }
 input{
    margin-block: 1rem;
 }
.checkout{
    background-color: #7ddff1;
    padding: 1rem;
    border-radius: 1rem;
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
  .booking-details{
    border: 3px solid #7ddff1;
    margin-left: 20rem;
    margin-block: 4rem;
    font-size: 1.7rem;
    padding: 1rem;
  }
  .everything{
    display: flex;
  }
  p{
    color: white;
  }
  .routeOne{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card {
    background-color: #001f31;
    color: white;
    border: 2px solid #7ddff1;
    /* padding: 20px; */
    /* margin-top: -300px; */
    width: 500px;
    /* height: 300px; */
  }
  .card-header {
    background-color: #7ddff1;
    color: #001f31;
  }
  h1{
    color: white;
  padding-top: 5px;
  font-weight: bold;
  text-shadow: 3px 3px 5px #7ddff1;
  }
  @media (max-width: 600px) {
  h1 {
    font-size: 1.8rem;
    text-align: center;
  }

  .booking-details {
    margin: 0;
    font-size: 1.2rem;
  }

  .card {
    width: 100%;
    margin-bottom: 2rem;
  }

  .book, .checkout {
    width: 100%;
  }
}

/* Media query for screens smaller than 400px */
@media (max-width: 400px) {
  h1 {
    font-size: 1.5rem;
    text-align: center;
  }

  .booking-details {
    font-size: 1rem;
  }

  .card {
    width: 100%;
    margin-bottom: 1rem;
  }

  .book, .checkout {
    width: 100%;
  }

  input {
    width: 100%;
  }
}

/* Media query for screens smaller than 300px */
@media (max-width: 300px) {
  h1 {
    font-size: 1.2rem;
  }

  .card {
    width: 100%;
    margin-bottom: 1rem;
  }

  .book, .checkout {
    width: 100%;
    font-size: 0.9rem;
    padding: 0.8rem;
  }

  .booking-details {
    font-size: 0.9rem;
  }

  input {
    width: 100%;
  }

  p {
    font-size: 0.8rem;
  }

  .bi {
    font-size: 3rem;
  }
}
  </style>
  