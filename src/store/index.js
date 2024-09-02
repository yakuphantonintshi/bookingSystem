import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'


const apiURL = 'http://localhost:3001/'


export default createStore({
  state: {
    users: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, value) {
      state.users = value
    },
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
  },
  modules: {
  }
})
