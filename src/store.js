import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      history: [
        {
           id: '#1',
           date: '11-02-2009',
           vacine: 'Tastey',
           center: 'VVV',
           doctor: 'Alex'
         },
        {
            id: '#2',
            date: '11-02-2010',
            vacine: 'Lorem',
            center: 'VVV',
            doctor: 'Alex'
          },
        {
            id: '#3',
            date: '11-02-2012',
            vacine: 'Lorem',
            center: 'VVV',
            doctor: 'Alex'
          }
      ]
    }
  },
  getters: {
    getUserHistory: function (state) {
      return state.user.history
    }
  },
  mutations: {

  },
  actions: {

  }
})
