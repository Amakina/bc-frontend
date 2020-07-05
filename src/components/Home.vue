<template>
  <div class="home">
    <Menu />
    <router-view />
    <img class="astronomy" src="../assets/images/astronomy.svg" />
    <img class="rocket" src="../assets/images/rocket.svg" />
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
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  background: #F4F6F9;
  box-shadow: 5px 7px 40px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  overflow: hidden;
}

img {
  position: absolute;
}

.astronomy {
  right: 0;
}

.rocket {
  left: 769px;
  bottom: 0;
}
</style>