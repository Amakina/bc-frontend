<template>
  <div class="state">
    <card-info class="status">
      <template v-slot:header>
        <h3>Статус</h3>
        <button>Поехали!</button>
      </template>
      <template v-slot:content>
        <ul>
          <li>Ракета выбрана</li>
          <li>Команда собрана</li>
          <li class="status-ok">Погода - ок</li>
        </ul>
      </template>
    </card-info>
    <card-info class="weather">
      <template v-slot:header><h2>Погодные условия</h2></template>
      <template v-slot:content>
        <table>
          <tr>
            <th>Локация</th>
            <td>Космодром Северный</td>
          </tr>
          <tr>
            <th>Температура</th>
            <td>+15</td>
          </tr>
          <tr>
            <th>Влажность</th>
            <td>86%</td>
          </tr>
          <tr>
            <th>Ветер</th>
            <td>5 м/c, СЗ</td>
          </tr>
        </table>
      </template>
    </card-info>
    <card-info class="team">
        <template v-slot:header><h2>Экипаж</h2></template>
        <template v-slot:content>
          <table>
            <tr>
              <th style="color: #FF7D84;">Капитан</th>
              <td>Константин Константинопольский</td>
            </tr>
            <tr>
              <th style="color: #E69F54;">Борт инженер</th>
              <td>Иван Иванов</td>
            </tr>
            <tr>
              <th style="color: #64D03F;">Врач</th>
              <td>Петр Петров</td>
            </tr>
            <tr>
              <th style="color: #5A95F2;">Космодесантник</th>
              <td>Анастасия Преображенская</td>
            </tr>
          </table>
        </template>
      </card-info>
    <img class="astronomy" src="../assets/images/astronomy.svg" />
    <img class="rocket" src="../assets/images/rocket.svg" />
  </div>
</template>
<script>
import CardInfo from './Card-Info.vue'
export default {
  name: 'ship',
  components: {
    CardInfo
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

.status ul {
  padding: 20px 0px;
}

.status ul li {
  padding: 4px 0px;
}

.weather .card-content {
  padding: 24px;
}

button {
  width: 150px;
  height: 30px;
  color: #999999;
  background: #E4E4E4;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
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
  right: 70px;
  bottom: 0;
}
</style>