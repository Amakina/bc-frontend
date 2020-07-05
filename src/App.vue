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

h1 {
  font-size: 48px;
  font-weight: normal;
  line-height: 56px;
  margin: 0;
  margin-bottom: 21px;
}

h2, h3 {
  font-size: 18px;
  line-height: 21px;
  margin: 0;
}

.router-link-exact-active {
  opacity: 1!important;
}

tr {
  border-bottom: 1px solid #D1D9E5;
}

table tr:last-child {
  border: none;
}

td {
  padding: 8px;
}

th {
  text-align: left;
  color: #0A5499;
  line-height: 21px;
}

@media (max-height: 1095px) {
  #app {
    height: 900px;
  }
}
</style>
