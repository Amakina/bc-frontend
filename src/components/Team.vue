<template>
  <div class="team">
    <h1>Сбор команды</h1>
    <div class="current-selection">
      <card-info :hideFooter="true">
        <template v-slot:header>
          <h2>Команда</h2>
          <button @click="onReadyClick">Готово</button>
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
          <div class="entries-container">
            <div class="entries" v-for="member in option.members" :key="`${member.Name}-${member.Role}-${member.Id}`">
              <div style="width: 40px; height: 40px;"><img :src="require(`../assets/images/team/${member.Icon}`)" width="40" height="40"></div>
              <div style="flex: 1;">{{member.Name}}</div>
              <div>
                <input type="checkbox" v-model="selectedTeam[option.container]" :value="member">
              </div>
            </div>
          </div>
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
    team: Object,
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
  mounted() {
    this.selectedTeam = this.team || this.selectedTeam
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
  methods: {
    onReadyClick() {
      if (
        this.selectedTeam.captains.length + this.selectedTeam.engineers.length +
        this.selectedTeam.doctors.length + this.selectedTeam.paratroopers.length 
        !== +this.ship.teamNumber
      ) return
      this.$emit('teamSelect', this.selectedTeam)
    }
  }
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

.entries-container {
  width: 100%;
}

.entries {
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #D1D9E5;
  margin-bottom: 12px;
}

.card-content table {
  margin: -20px 0px;
}
</style>