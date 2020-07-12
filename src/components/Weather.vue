<template>
  <main class="weather">
    <h1>Проверка погодных условий</h1>
    <card-info class="weather-card" :hideFooter="true">
      <template v-slot:header>
        <h2>Погодные условия</h2>
        <button @click="onCheckClick">Проверить</button>
      </template>
      <template v-slot:content>
        <table>
          <tr>
            <th>Локация</th>
            <td><input type="text" v-model="weather.location"></td>
          </tr>
          <tr>
            <th>Температура</th>
            <td>{{weather.temperature}}</td>
          </tr>
          <tr>
            <th>Влажность</th>
            <td>{{weather.humidity}}</td>
          </tr>
          <tr>
            <th>Ветер</th>
            <td>{{weather.wind}}</td>
          </tr>
        </table>
      </template>
    </card-info>
  </main>
</template>
<script>
import CardInfo from './Card-Info.vue'

export default {
  name: 'weather',
  components: {
    CardInfo
  },
  data() {
    return {
      weather: {
        location: '',
        temperature: '',
        humidity: '',
        wind: '',
      }
    }
  },
  methods: {
    async onCheckClick() {
      if (!this.weather.location) return

      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.weather.location}&units=metric&appid=f257fffa28d411d38fcde458cf05630d`)
      if (!response.ok) return

      const json = await response.json()
      this.weather.temperature = `${json.main.temp} °C`
      this.weather.humidity = `${json.main.humidity}%`
      this.weather.wind = `${json.wind.speed} м/c ${this.getWindDirection(json.wind.deg)}`

      this.$emit('weatherChecked', this.weather)
      
    },
    getWindDirection(deg) {
      if (deg === 360) return 'С'
      if (deg === 270) return 'З'
      if (deg === 180) return 'Ю'
      if (deg === 90) return 'В'
      if (270 < deg && deg < 360 ) return 'СЗ'
      if (180 < deg && deg < 270) return 'ЮЗ'
      if (90 < deg && deg < 180) return 'ЮВ'
      if (0 < deg && deg < 90) return 'СВ'
    }
  }
}
</script>
<style scoped>
.weather {
  padding: 53px 63px;
}

h1 {
  margin-bottom: 38px;
}

.weather-card {
  width: 560px;
  height: 260px;
}

table {
  width: 100%;
  border-collapse: collapse; 
}

button {
  cursor: pointer;
  width: 150px;
  height: 30px;
  color: #FFFFFF;
  background: #73E24D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  outline:none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}

input {
  width: 100%;
  border: 1px solid #DEDBDB;
  border-radius: 10px;
  line-height: 19px;
}

.card-content table {
  margin: 9px 0px;
}
</style>