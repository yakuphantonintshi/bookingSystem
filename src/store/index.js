import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'


const apiURL = 'http://localhost:3001/'


export default createStore({
  state: {
    users: null,
    username: '',
      password: '',
      token: null,
      eastern: [],
      options: [],
      selectedOption:null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
    setEastern(state, value) {
      state.eastern = value
    },
    setDeparture(state, value) {
      state.departure = value
    }
  },
  actions: {
    async fetchUsers(context) {
      try {
        const response = await axios.get(`${apiURL}users`)
        const results = response.data
       if (results) {
          context.commit('setUsers', results)
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
          context.commit('setDeparture', results)
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
    async fetchEastern(context) {
      try {
        const response = await axios.get(`${apiURL}eastern`)
        
        const results = response.data
      if (results) {
          context.commit('setEastern', results)
        } else {
          toast.error(`Failed to fetch Eastern Cape offices`, {
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
    }

  },
  modules: {
  }
})
