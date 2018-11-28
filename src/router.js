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
          name: 'Signin',
          beforeEnter: (to, from, next) => {
            if (
              localStorage.getItem('vaccine-card-user') &&
              localStorage.getItem('vaccine-card-token')
            ) {
              next({ name: 'account' })
            }
            next()
          }
        },
        {
          path: 'signup',
          component: () => import('./components/auth/Signup.vue'),
          name: 'Signup',
          beforeEnter: (to, from, next) => {
            if (
              localStorage.getItem('vaccine-card-user') &&
              localStorage.getItem('vaccine-card-token')
            ) {
              next({ name: 'account' })
            }
            next()
          }
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
          component: () => import('./components/Dashboard.vue'),
          beforeEnter: (to, from, next) => {
            if (
              !localStorage.getItem('vaccine-card-user') &&
              !localStorage.getItem('vaccine-card-token')
            ) {
              next({ name: 'auth' })
            }
            next()
          }
        },
        {
          name: 'search',
          path: 'search',
          component: () => import('./components/Search.vue'),
          beforeEnter: (to, from, next) => {
            if (
              !localStorage.getItem('vaccine-card-user') &&
              !localStorage.getItem('vaccine-card-token')
            ) {
              next({ name: 'auth' })
            }
            next()
          }
        },
        {
          name: 'family',
          path: 'family',
          component: () => import('./components/Family.vue'),
          beforeEnter: (to, from, next) => {
            if (
              !localStorage.getItem('vaccine-card-user') &&
              !localStorage.getItem('vaccine-card-token')
            ) {
              next({ name: 'auth' })
            }
            next()
          }
        },
        {
          name: 'doctors',
          path: 'doctors',
          component: () => import('./components/Doctors.vue'),
          beforeEnter: (to, from, next) => {
            if (
              !localStorage.getItem('vaccine-card-user') &&
              !localStorage.getItem('vaccine-card-token')
            ) {
              next({ name: 'auth' })
            }
            next()
          }
        },
        {
          name: 'setting',
          path: 'setting',
          component: () => import('./components/Setting.vue'),
          beforeEnter: (to, from, next) => {
            if (
              !localStorage.getItem('vaccine-card-user') &&
              !localStorage.getItem('vaccine-card-token')
            ) {
              next({ name: 'auth' })
            }
            next()
          }
        },
        {
          path: 'family/add/child',
          name: 'addChild',
          component: () => import('./components/family/addChild.vue')
        }
      ]
    }
  ]
})
