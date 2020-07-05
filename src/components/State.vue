<template>
  <div class="state">
    <div class="info-card status">
      <div class="card-title">
        <h3>Статус</h3>
        <button>Поехали!</button>
      </div>
      <div class="card-content">
        <ul>
          <li>Ракета выбрана</li>
          <li>Команда собрана</li>
          <li class="status-ok">Погода - ок</li>
        </ul>
      </div>
    </div>
    <div class="info-card weather">
     <div class="card-title"><h2>Погодные условия</h2></div>
     <div class="card-content">
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
     </div>
    </div>
    <div class="info-card weather">
     <div class="card-title"><h2>Экипаж</h2></div>
     <div class="card-content">
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
     </div>
    </div>
    <img class="astronomy" src="../assets/images/astronomy.svg" />
    <img class="rocket" src="../assets/images/rocket.svg" />
  </div>
</template>

<style scoped>
.state {
  padding: 48px 43px;
}

h2, h3 {
  margin: 0;
}

h3, li {
  font-weight: 500;
}

.card-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 21px 24px;
  border-bottom: 1px solid #D8DCE3;
}

.info-card {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background: #FFFFFF;
  border-radius: 10px;
  margin-bottom: 46px;
}

.status, .weather{
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

.card-content {
  padding: 0px 24px;
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

tr {
  border-bottom: 1px solid #D1D9E5;
}

table tr:last-child {
  border: none;
}

td {
  padding: 8px 0px;
}

th {
  text-align: left;
  color: #0A5499;
  line-height: 21px;
}

img {
  position: absolute;
}

.astronomy {
  top: 0;
  right: 0;
}

.rocket {
  left: 769px;
  bottom: 0;
}
</style>