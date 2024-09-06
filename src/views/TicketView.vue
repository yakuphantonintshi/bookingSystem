<template>
  <form>
    <div class="ticket">
      <h1>BOOK YOUR TICKET!</h1>
    </div>
    <button type="button" class="one-way">One way</button>
    <button @click="toggleDiv" type="button" class="return">Return</button>

    <div class="container-fluid vh-100">
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

      <div v-show="isDivVisible" class="hidden-div">
        <label for="returning-date">Returning Date:</label>
        <input type="date" class="date" />
      </div>

      <button type="button" class="find">FIND TICKET</button>
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
      isDivVisible: false,
      selectedDeparture: null,
      selectedTravelling: null,
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
/* input[type="date"] {
  background-color: red;
  color: white;
  outline: none;
}

input[type="date"]::-webkit-clear-button {
  font-size: 18px;
  height: 30px;
  position: relative;
}

input[type="date"]::-webkit-inner-spin-button {
  height: 28px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  font-size: 15px;
} */
/* 111111111 */

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
