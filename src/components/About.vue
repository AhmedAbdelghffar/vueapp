<template>
  <div class="about">
    <h1 @click="colored = !colored" :class="myclasses"> this is about {{name}}</h1>


  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      name: this.$route.params.name,
      colored: false
    }
  },

  computed: {
      myclasses: function(){
          return{
              red: this.colored,
              dark: !this.colored
          }
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.red{
    background: red;
}

dark {
    background: black;
    color:white;
}

</style>
