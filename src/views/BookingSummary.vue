<template>
    <h1>YOUR BOOKING DETAILS:</h1>
    <div v-if="isResultsDiplayed" class="container-fluid dvh-100">

         <p class="booking-details">
      <table>
        <tr>
            <th>Departing From:</th>
            <td>{{ bookingData.selectedDeparture }}</td>
        </tr>
        <tr>
            <th>Travelling To:</th>
            <td>{{ bookingData.selectedTravelling }}</td>

        </tr>
        <tr>
            <th> Number of People:</th>
            <td>{{ bookingData.numberOfPeople }}</td>

        </tr>
        <tr>
            <th>Departure Date:</th>
            <td>{{ bookingData.selectedDate }}</td>
        </tr>
        <tr>
            <th>Departure Time:</th>
            <td>{{ bookingData.departureTime }}</td>
        </tr>
        <tr>
            <th>Returning Date:</th>
            <td>{{ bookingData.returningDate || "N/A" }}</td>

        </tr>
        <tr>
            <th>Total Distance:</th>
            <td>{{ bookingData.distance }} km </td>
        </tr>
        <tr>
            <th> Price:</th>
            <td> R{{ bookingData.priceInZAR }} </td>
        </tr>
        <tr>
            <th>Arrival Time:</th>
            <td>{{ bookingData.arrivalTime }}</td>
        </tr>
        <tr>
            <th>Arrival Date:</th>
            <td>{{ bookingData.arrivalDate }}</td>
        </tr>
      </table>
    </p>
</div>
<button type="button" @click="showThankYouMessage" class="btn">Proceed to checkout</button>
<div v-if="showMessage" class="overlay">
<div class="spinner-container">
  <!-- Checkout Icon -->
  <div class="checkout-icon-container">
      <i class="bi bi-check-square-fill"></i>
  </div>
  <p>Thank you for your booking!</p>
</div>
</div>

  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  
  export default {
    data() {
    return {
      showMessage: false
    };
},
methods: {
    showThankYouMessage() {
      this.showMessage = true;
      setTimeout(() => {
        this.showMessage = false;
      }, 5000); 
    }
  },
    computed: {
      ...mapGetters({
        bookingData: 'bookingData',
        isResultsDiplayed: 'isResultsDiplayed'
      })
    }
  };
  </script>

  <style scoped>
  .btn{
    border: 2px solid #7ddff1;
    color: #001f31;
    background-color: #7ddff1;
  }
  .btn:hover{
    border: 2px solid #7ddff1;
    color: #001f31;
    background-color: #7ddff1;
  }
  table{ 
    width: 500px;
    padding: 2rem;
  }
  :is(th, td, tr){
    border: 2px solid white;
  }
.booking-details{
    background: #000;
    color: white;
}
.container-fluid{
  padding: 20px;
 border-radius: 8px;
 display: flex;
 justify-content: center;

}
h1{
    color: white;
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

p {
  font-size: 1.25rem;
  color: #343a40;
  margin-top: 10px;
}
</style>
