<template>
  <div id="app">
    <img src="./assets/logo.png">
    <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
    <router-link to="/parent">Parent</router-link>
    <router-link to="/parentprop">parentprop</router-link>
    <router-link to="/childprop1">childprop1</router-link>
    <router-link to="/childprop2">childprop2</router-link>
    <router-link to="/main">main</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
