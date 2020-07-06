<template>
  <div class="home">
    <Menu />
    <router-view 
      :ship="ship"
      :team="team"
      :weather="weather"
      @shipSelect="onShipSelect"
      @teamSelect="onTeamSelect"
      @weatherChecked="onWeatherChecked"/>
  </div>
</template>
<script>
import Menu from './Menu.vue'
import Ships from '../assets/ships.json'
import Rocket from '../Rocket'

export default {
  name: 'home',
  components: {
    Menu
  },
  data() {
    return {
      ship: null,
      team: null,
      weather: null,
    }
  },
  created() {
    this.ship = new Rocket(Ships[0].name, Ships[0].speed, Ships[0].teamNumber, Ships[0].icon)
  },
  methods: {
    onShipSelect(ship) {
      this.ship = { ...ship }
      this.team = null
    },
    onTeamSelect(team) {
      this.team = { ...team }
    },
    onWeatherChecked(weather) {
      this.weather = { ...weather }
      
    }
  }
}
</script>
<style scoped>
.home {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #F4F6F9;
  box-shadow: 5px 7px 40px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  overflow: hidden;
}
</style>