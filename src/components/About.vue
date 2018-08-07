<template>
  <div class="about">
    <h1> this is about {{name}}</h1>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      name: this.$route.params.name
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
