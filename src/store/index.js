import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import { useCookies } from 'vue3-cookies'
import 'vue3-toastify/dist/index.css'
import { applyToken } from '@/service/AuthenticateUser.js'
import router from '@/router'
const {cookies} = useCookies()

applyToken(cookies.get('legitUser')?.token)

// const apiURL = 'http://localhost:3001/'
const apiURL = "https://bookingsystem-qbd3.onrender.com/"

const test = "here"
console.log(test);


export default createStore({
  state: {
    users: null,
    user: null,
      password: '',
      token: null,
      eastern: null,
      western: null,
      kzn: null,
      freestate: null,
      northern: null,
      gauteng: null,
      departure: null,
      travelling: null,
      // new ones
      selectedDeparture: null,
    selectedTravelling: null,
    numberOfPeople: 1,
    selectedDate: null,
    departureTime: null,
    returningDate: null,
    distance: 0,
    priceInZAR: 0,
    arrivalTime: null,
    arrivalDate: null,
    isResultsDiplayed: false
  },
  getters:  {
      bookingData: state => state,
      isResultsDiplayed: state => state.isResultsDiplayed
    },
  
  mutations: {
    updateBooking(state, bookingData) {
      Object.assign(state, bookingData);
    },
    displayResults(state, value) {
      state.isResultsDiplayed = value;
    },
    setUsers(state, value) {
      state.users = value
    },
    updateUserInState(state, updatedUser) {
      const index = state.users.findIndex(user => user.userID === updatedUser.userID);
      if (index !== -1) {
        state.users.splice(index, 1, updatedUser);
      }
    },
    setEastern(state, payload) {
      state.eastern = payload
    },
    setWestern(state, payload) {
      state.western = payload
    },
    setKzn(state, payload) {
      state.kzn = payload
    },
    setFreestate(state, payload) {
      state.freestate = payload
    },
    setNorthern(state, payload) {
      state.northern = payload
    },
    setGauteng(state, payload) {
      state.gauteng = payload
    },
    setDeparture(state, value) {
      state.departure = value
    },
    setTravelling(state, value) {
      state.travelling = value
    },
    setUser(state, value){
      state.travelling = value
    }
  },
  actions: {
    confirmBooking({ commit }, bookingData) {
      commit('updateBooking', bookingData);
      commit('displayResults', true);
    },
    async fetchUsers(context) {
      try {
        const response = await axios.get(`${apiURL}users`)
        const results = response.data
        
       if (results) {
          context.commit('setUsers', results.results)
        } else {
          toast.error(`We are not able to fetch the users`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchDeparture(context) {
      try {
        const response = await axios.get(`${apiURL}departure/`)
        const results = response.data
        
        if (results) {
          context.commit('setDeparture', results.results)
        } else {
          toast.error('Cannot fetch the cities', {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchTravelling(context) {
      try {
        const response = await axios.get(`${apiURL}travelling/`)
        const results = response.data
        
        if (results) {
          context.commit('setTravelling', results.results)
        } else {
          toast.error('Cannot fetch the cities', {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async register(context, payload){
      try {
        const { token, msg } = await (await axios.post(`${apiURL}users/register`, payload)).data
        console.log(token);
        if (token) {
          context.dispatch('fetchUsers')
          toast.success(`New user has been added. Thank you🤓`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (error) {
        console.log(error);
        
      }
    },
    
    async login(context, payload){
      try {
        const { token, msg, results } = await (await axios.post(`${apiURL}users/login`, payload)).data
        if (token) {
          context.commit('setUser', results)
          toast.success(`You are now logged in, Arigato🤓`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
          cookies.set('legitUser', {msg, token, results})
          applyToken(token)
          router.push({ name : 'tickets' })

        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (error) {
        console.log(error);
        
      }
    },
    async fetchEastern(context) {
      try {
        const response = await axios.get(`${apiURL}eastern/`)
        const {results} = response.data
        console.log(results.results)
        if (results) {
          context.commit('setEastern', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchWestern(context) {
      try {
        const response = await axios.get(`${apiURL}western/`)
        const {results} = response.data
        if (results) {
          context.commit('setWestern', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchKzn(context) {
      try {
        const response = await axios.get(`${apiURL}kzn/`)
        const {results} = response.data
        if (results) {
          context.commit('setKzn', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchFreestate(context) {
      try {
        const response = await axios.get(`${apiURL}freestate/`)
        const {results} = response.data
        console.log(results.results)
        if (results) {
          context.commit('setFreestate', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchNorthern(context) {
      try {
        const response = await axios.get(`${apiURL}northern/`)
        const {results} = response.data
        console.log(results.results)
        if (results) {
          context.commit('setNorthern', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async fetchGauteng(context) {
      try {
        const response = await axios.get(`${apiURL}gauteng/`)
        const {results} = response.data
        if (results) {
          context.commit('setGauteng', results)
        } else {
          toast.error(`${msg}`, {
            autoClose: 2000,
            position: toast.POSITION.BOTTOM_CENTER
          })
        }
      } catch (e) {
        toast.error(`${e.message}`, {
          autoClose: 2000,
          position: toast.POSITION.BOTTOM_CENTER
        })
      }
    },
    async deleteUser({commit}, {id}){
      const res = await axios({
        method: "DELETE",
        url: `${apiURL}users/${id}`,
        
    })
    console.log(res.data)
        commit('setUsers',res.data)
  },

  async updateUser({ commit }, { id, updatedUser }) {
    try {
      const response = await axios({
        method: "PATCH",
        url: `${apiURL}users/${id}`,
        data: updatedUser,
      });
      commit("updateUserInState", response.data);
    } catch (error) {
      console.log("Failed to update user:", error);
      throw new Error("Failed to update user.");
    }
  }

  },
  modules: {
  }
})
