import Vue from 'vue'
import Router from 'vue-router'

// main sections
import Home  from './views/Home.vue'
import Kogs  from './views/Kogs.vue'
import Login from './views/Login.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/kogs',
      name: 'kogs',
      component: Kogs
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },    
  ]
})
