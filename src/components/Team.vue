<template>
  <div class="team">
    <h1>Сбор команды</h1>
    <div class="current-selection">
      <card-info :hideFooter="true">
        <template v-slot:header>
          <h2>Команда</h2>
        </template>
        <template v-slot:content>
          <table>
            <tr v-for="(option, index) in teamOptions" :key="option.role + index">
              <th :style="`color: ${option.color};`">{{option.role}}</th>
              <td v-for="member in selectedTeam[option.container]" :key="option.role + member.Id + member.Name">
                <img :src="require(`../assets/images/team/${member.Icon}`)" width="20" height="20">
              </td>
            </tr>
          </table>
        </template>
      </card-info>
      <card-info :hideFooter="true">
        <template v-slot:header>
          <h2>Корабль</h2>
        </template>
        <template v-slot:content>
          <img :src="require(`../assets/images/rockets/${ship.icon}`)" width="89" height="89" style="margin-right: 25px;">
          <table>
            <tr>
              <th>Имя</th>
              <td>{{ship.name}}</td>
            </tr>
            <tr>
              <th>Скорость</th>
              <td>{{ship.speed}}</td>
            </tr>
            <tr>
              <th>Экипаж</th>
              <td>{{ship.teamNumber}}</td>
            </tr>
          </table>
        </template>
      </card-info>
    </div>
    <div class="current-selection options">
      <card-info v-for="option in teamOptions" :key="option.role" :hideFooter="true">
        <template v-slot:header><h2 :style="`color:${option.color};`">{{option.role}}</h2></template>
        <template v-slot:content>
          <table>
            <tr v-for="member in option.members" :key="`${member.Name}-${member.Role}-${member.Id}`">
              <td><img :src="require(`../assets/images/team/${member.Icon}`)" width="40" height="40"></td>
              <td>{{member.Name}}</td>
              <td>
                <input type="checkbox" v-model="selectedTeam[option.container]" :value="member">
              </td>
            </tr>
          </table>
        </template>
      </card-info>
    </div>
  </div>
</template>
<script>
import CardInfo from './Card-Info.vue'
import Team from '../assets/team'

export default {
  name: 'team',
  components: {
    CardInfo
  },
  props: {
    ship: Object,
  },
  data() {
    return {
      teamOptions: [
        {
          role: 'Капитан',
          container: 'captains',
          members: [],
          color: '#FF7D84',
        },
        {
          role: 'Борт инженер',
          container: 'engineers',
          members: [],
          color: '#E69F54',
        },
        {
          role: 'Врач',
          container: 'doctors',
          members: [],
          color: '#64D03F',
        },
        {
          role: 'Космодесантник',
          container: 'paratroopers',
          members: [],
          color: '#5A95F2',
        },
      ],
      selectedTeam: {
        captains: [],
        engineers: [],
        doctors: [],
        paratroopers: []
      }
    }
  },
  created() {
    Team.forEach((member) => {
      this.teamOptions.forEach((option, index) => {
        if (option.role === member.Role) {
          this.teamOptions[index].members.push(member)
        }
      })
    })
  },
}
</script>
<style scoped>
.team {
  padding: 53px 63px;
  width: calc(100% - 244px);
}

.current-selection {
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 38px));
  grid-gap: 0px 76px;
}

.options table{
  width:100%;
  border-collapse: collapse; 
}

td {
  padding: 0;
}

th {
  line-height: 26px;
  padding-right: 28px;
}
</style>