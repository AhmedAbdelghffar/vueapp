<template>
  <div class="child2">
    <h2><slot></slot></h2>
  </div>
</template>

<script>
export default {
  name: 'child2',
       
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    text-transform: capitalize;
}

</style>
