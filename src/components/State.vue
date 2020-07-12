<template>
  <main class="state">
    <card-info class="status" :hideFooter="true">
      <template v-slot:header>
        <h3>Статус</h3>
        <button :class="{ 'button-success': ship && team && weather }" @click="flyRocket">Поехали!</button>
      </template>
      <template v-slot:content>
        <ul class="current-statuses">
          <li :class="{ 'status-ok': ship }">Ракета выбрана</li>
          <li :class="{ 'status-ok': team }">Команда собрана</li>
          <li :class="{ 'status-ok': weather }">Погода - ок</li>
        </ul>
      </template>
    </card-info>
    <card-info class="weather" :hideFooter="true">
      <template v-slot:header><h2>Погодные условия</h2></template>
      <template v-slot:content>
        <div class="table-padding">
          <table>
            <tr>
              <th>Локация</th>
              <td v-if="weather">{{weather.location}}</td>
            </tr>
            <tr>
              <th>Температура</th>
              <td v-if="weather">{{weather.temperature}}</td>
            </tr>
            <tr>
              <th>Влажность</th>
              <td v-if="weather">{{weather.humidity}}</td>
            </tr>
            <tr>
              <th>Ветер</th>
              <td v-if="weather">{{weather.wind}}</td>
            </tr>
          </table>
        </div>
      </template>
    </card-info>
    <card-info class="team" :hideFooter="true">
        <template v-slot:header><h2>Экипаж</h2></template>
        <template v-slot:content>
          <div class="table-padding">
            <table>
              <tr>
                <th style="color: #FF7D84;">Капитан</th>
                <td v-if="team">
                  <tr v-for="man in team.captains" :key="`captain-${man.Id}`">{{man.Name}}</tr>
                </td>
              </tr>
              <tr>
                <th style="color: #E69F54;">Борт инженер</th>
                <td v-if="team">
                  <tr v-for="man in team.engineers" :key="`engineer-${man.Id}`">{{man.Name}}</tr>
                </td>
              </tr>
              <tr>
                <th style="color: #64D03F;">Врач</th>
                <td v-if="team">
                  <tr v-for="man in team.doctors" :key="`doctor-${man.Id}`">{{man.Name}}</tr>
                </td>
              </tr>
              <tr>
                <th style="color: #5A95F2;">Космодесантник</th>
                <td v-if="team">
                  <tr v-for="man in team.paratroopers" :key="`paratrooper-${man.Id}`">{{man.Name}}</tr>
                </td>
              </tr>
            </table>
          </div>
        </template>
      </card-info>
    <img class="astronomy" src="../assets/images/background/astronomy.svg" />
    <img v-if="ship" :class="{ 'rocket': true, 'fly-rocket': fly }" :src="require(`../assets/images/rockets/${ship.icon}`)" width="328" height="328"/>
  </main>
</template>
<script>
import CardInfo from './Card-Info.vue'

export default {
  name: 'ship',
  components: {
    CardInfo
  },
  props: {
    ship: Object,
    team: Object,
    weather: Object,
  }, 
  data() {
    return {
      fly: false,
    }
  },
  methods: {
    flyRocket() {
      if (this.ship && this.team && this.weather) this.fly = true
    }
  }
}
</script>

<style scoped>
.state {
  position: relative;
  z-index: 1;
  width: calc(100% - 118px);
  padding: 48px 43px;
  box-sizing: border-box;
}

h2, h3 {
  margin: 0;
}

h3, li {
  font-weight: 500;
}

.status, .weather, .team{
  width: 560px;
}

.status ul li {
  padding: 4px 0px;
}

.weather .card-content {
  padding: 24px;
}

button {
  cursor: pointer;
  width: 150px;
  height: 30px;
  color: #999999;
  background: #E4E4E4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  outline:none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li::before {
  content: '';
  display: inline-block;
  width: .75em;
  height: .75em;
  margin-right: .5em;
  background: #FF7D84;
  border-radius: 50%;
}

li.status-ok::before  {
  background: #73E24D;
}

table {
  width: 100%;
  border-collapse: collapse; 
}

img {
  position: absolute;
  z-index: -1;
}

.astronomy {
  top: 0;
  right: 0;
}

.rocket {
  right: 150px;
  bottom: 80px;
  transform: rotate(-45deg);
  transition: bottom 4s ease-in-out;
}

.button-success {
  background: #73E24D;
  color: #FFFFFF;
}

.fly-rocket {
  bottom: 2000px;
}

.table-padding {
  width: 100%;
  padding-top: 14px;
}
</style>