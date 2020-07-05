import Vue from 'vue'
import VueRouter from 'vue-router'
import State from '../components/State.vue'
import Ship from '../components/Ship.vue'
import Team from '../components/Team.vue'
import Weather from '../components/Weather.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'State',
    component: State
  },
  {
    path: '/ship',
    name: 'Ship',
    component: Ship
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/weather',
    name: 'Weather',
    component: Weather
  },
]

const router = new VueRouter({
  routes
})

export default router
