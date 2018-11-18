import Vue from 'vue'
import Vuex from 'vuex'

import generateApi from './api.const'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      members: [],
      vaccines: []
    }
  },
  getters: {
    getUser: function (state) {
      return state.user
    }
  },
  mutations: {
    addUser: function (state, user) {
      state.user = { ...user, members: [], vaccines: [] }
    },
    addMembersToUser: function (state, members) {
      state.user.members = members
    }
  },
  actions: {
    findUserFamilyMembers: function ({ commit }, userId) {
      const token = localStorage.getItem('vaccine-card-token')
      axios.get(generateApi(`patients/family/${userId}?token=${token}`)).then(({ data }) => {
        commit('addMembersToUser', data.members)
      }).catch(({ response }) => {
        console.log(response)
      })
    },
    logout: function ({ state }) {
      localStorage.removeItem('vaccine-card-token')
      localStorage.removeItem('vaccine-card-user')
      state.user = { }
    }
  }
})
