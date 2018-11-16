import Vue from 'vue'
import Router from 'vue-router'

import Auth from './views/Auth.vue'
import Signin from './components/auth/Signin.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth,
      redirect: { name: 'Signin' },
      beforeEnter: (to, from, next) => {
        if (
          localStorage.getItem('vaccine-card-user') &&
            localStorage.getItem('vaccine-card-token')
        ) {
          next({ name: 'account' })
        }
        next()
      },
      children: [
        {
          path: 'signin',
          component: Signin,
          name: 'Signin'
        },
        {
          path: 'signup',
          component: () => import('./components/auth/Signup.vue'),
          name: 'Signup'
        }
      ]
    },
    {
      path: '/account',
      name: 'account',
      beforeEnter: (to, from, next) => {
        if (
          !localStorage.getItem('vaccine-card-user') &&
            !localStorage.getItem('vaccine-card-token')
        ) {
          next({ name: 'auth' })
        }
        next()
      },
      component: () => import('./views/Account.vue'),
      redirect: { name: 'dash' },
      children: [
        {
          name: 'dash',
          path: 'dashboard',
          component: () => import('./components/Dashboard.vue')
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
