<template>
  <div class="child">
    <h1><slot></slot></h1>
  </div>
</template>

<script>
export default {
  name: 'child',
       
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    text-transform: uppercase;
}

</style>
