<template>
  <div class="ship">
    <h1>Выбор корабля</h1>
    <card-info class="selected-ship-card" :hideFooter="true">
      <template v-slot:header>
        <h3>Корабль</h3>
        <button @click="onBuildClick">Собрать ракету</button>
      </template>
      <template v-slot:content>
        <img :src="require(`../assets/images/${selectedShip.Image}`)" width="89" height="89" style="margin-right: 25px;">
        <table>
         <tr>
           <th>Имя</th>
           <td>{{selectedShip.Name}}</td>
         </tr>
         <tr>
           <th>Скорость</th>
           <td>{{selectedShip.Speed}}</td>
         </tr>
         <tr>
           <th>Экипаж</th>
           <td>{{selectedShip.Team}}</td>
         </tr>
       </table>
      </template>
    </card-info>
    <div class="ship-cards">
      <card-info 
        v-for="(ship, index) in ships" :key="index"
        :hideHeader="true" 
        :hasBorder="true" 
        class="select-ship">
        <template v-slot:content>
          <img :src="require(`../assets/images/${ship.Image}`)" width="89" height="89" style="margin-right: 25px;">
          <table>
          <tr>
            <th>Имя</th>
            <td>{{ship.Name}}</td>
          </tr>
          <tr>
            <th>Скорость</th>
            <td>{{ship.Speed}}</td>
          </tr>
          <tr>
            <th>Экипаж</th>
            <td>{{ship.Team}}</td>
          </tr>
        </table>
        </template>
        <template v-slot:footer>
          <label>
            Выбрать
            <input type="radio" name="ship" :checked="!index" @input="onShipSelect(index)"/>
            <span class="custom-check" />
          </label>
        </template>
      </card-info>
    </div>
  </div>
</template>
<script>
import CardInfo from './Card-Info.vue'
import ships from '../assets/ships.json'
import Rocket from '../Rocket'

export default {
  name: 'ship',
  components: {
    CardInfo
  },
  data() {
    return {
      ships,
      selectedShip: ships[0],
    }
  },
  methods: {
    onShipSelect(index) {
      this.selectedShip = ships[index]
    },
    onBuildClick() {
      const rocket = new Rocket(
        this.selectedShip.Name, 
        this.selectedShip.Speed, 
        this.selectedShip.Team,
        this.selectedShip.Image
      )
      console.log(rocket)
    }
  }
}
</script>
<style scoped>
.ship {
  padding: 53px 63px;
  width: calc(100% - 244px);
}

.ship-cards {
  display: flex;
  flex-wrap: wrap;
}

.selected-ship-card {
  width: 500px;
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

.select-ship {
  width: 353px;
  margin-right: 45px;
}

.ship-cards table {
  border-collapse: collapse; 
}

label {
  position: relative;
  margin: 0 auto;
  padding-left: 20px;
  cursor: pointer;
}

label input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

label:hover input ~ .custom-check {
  background: #cccccc;
}

label input:checked ~ .custom-check {
  background: #73E24D;
  border-color: #FFFFFF;
}

.custom-check {
  position: absolute;
  top: .15em;
  left: 0;
  height: 16px;
  width: 16px;
  background: #FFFFFF;
  border: 1px solid #000000;
  border-radius: 50%;
}
</style>