<template>
  <div class="contact">
    <h1>HI</h1> 
    <home pass="from contact"></home>
    <home>
      <h1> this is slot form contact page </h1>
    </home>
  </div>
</template>

<script>
import Home from './Home'
export default {
  name: 'contact',
  components: {
    'home' : Home
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./hello.css" scoped>

</style>
