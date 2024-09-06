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
      eastern: null,
      western: null,
      kzn: null,
      freestate: null,
      northern: null,
      gauteng: null,
      departure: null,
      travelling: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
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

  },
  modules: {
  }
})
