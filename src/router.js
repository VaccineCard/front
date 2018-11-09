import Vue from 'vue'
import Router from 'vue-router'

import Account from './views/Account.vue'
import Dashboard from './components/Dashboard.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/',
      name: 'account',
      component: Account,
      redirect: { name: 'dash' },
      children: [
        {
          name: 'dash',
          path: 'dashboard',
          component: Dashboard
        },
        {
          name: 'search',
          path: 'search',
          component: () => import('./components/Search.vue')
        },
        {
          name: 'family',
          path: 'family',
          component: () => import('./components/Family.vue')
        },
        {
          name: 'doctors',
          path: 'doctors',
          component: () => import('./components/Doctors.vue')
        },
        {
          name: 'setting',
          path: 'setting',
          component: () => import('./components/Setting.vue')
        }
      ]
    }
  ]
})
