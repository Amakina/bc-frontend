import Vue from 'vue'
import VueRouter from 'vue-router'
import State from '../components/State.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'State',
    component: State
  },
]

const router = new VueRouter({
  routes
})

export default router
