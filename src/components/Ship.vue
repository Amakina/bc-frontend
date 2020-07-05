<template>
  <div class="ship">
    <h1>Выбор корабля</h1>
    <card-info class="selected-ship-card">
      <template v-slot:header>
        <h3>Корабль</h3>
        <button>Собрать ракету</button>
      </template>
      <template v-slot:content>
        <img src="../assets/images/rocket_2.svg" width="89" height="89" style="margin-right: 25px;">
        <table>
         <tr>
           <th>Имя</th>
           <td>Сокол-345</td>
         </tr>
         <tr>
           <th>Скорость</th>
           <td>8 км/c</td>
         </tr>
         <tr>
           <th>Экипаж</th>
           <td>2</td>
         </tr>
       </table>
      </template>
    </card-info>
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
.ship {
  padding: 53px 63px;
}

.selected-ship-card {
  width: 500px;
}

button {
  width: 150px;
  height: 30px;
  color: #FFFFFF;
  background: #73E24D;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
</style>