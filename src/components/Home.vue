<template>
  <div class="home">
    <Menu />
    <router-view />
  </div>
</template>
<script>
import Menu from './Menu.vue'
export default {
  name: 'home',
  components: {
    Menu
  }
}
</script>
<style scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
  background: #F4F6F9;
  box-shadow: 5px 7px 40px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  overflow: hidden;
}
</style>