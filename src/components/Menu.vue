<template>
  <div class="menu">
    <ul>
      <li>
        <router-link to="/"><img src="../assets/images/earth.png"></router-link>
      </li>
      <li>
        <router-link to="/ship"><img src="../assets/images/rocket.png"></router-link>
      </li>
      <li>
        <router-link to="/team"><img src="../assets/images/aqualung.png"></router-link>
      </li>
      <li>
        <router-link to="/weather"><img src="../assets/images/thermometer.png"></router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.menu {
  background: #FF5800;
  height: 100%;
  width: 118px;
  position: relative;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  left: 17.75%;
  right: 10.38%;
  top: 5.33%;
  bottom: 42.78%;
}

ul li {
  padding-bottom: 49px;
}

ul li a {
  opacity: .75;
}

ul li a:hover {
  opacity: 1;
}

ul li:first-child {
  padding-bottom: 89px;
}


</style>