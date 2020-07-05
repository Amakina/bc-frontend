<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from './components/Home.vue'

export default {
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  width: calc(100% - 192px);
  height: calc(100% - 196px);
  padding: 98px 96px 98px 96px;
}

body, html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  background: url('./assets/images/background.jpg') no-repeat center center fixed; 
  background-size: cover;
}

h1, h2 {
  font-size: 18px;
  line-height: 21px;
}

.router-link-exact-active {
  opacity: 1!important;
}
</style>
