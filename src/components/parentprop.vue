<template>
  <div class="Parentprop">
      <childprop1 :name="name"></childprop1>
      <childprop2></childprop2>
  </div>
</template>

<script>
import Childprop1 from './childprop1'
import Childprop2 from './childprop2'
export default {
  name: 'Parentprop',
  components: {
    'childprop1' : Childprop1 ,
    'childprop2': Childprop2
  },
  data () {
    return {
        name: 'ahmed'
     }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./hello.css" scoped>

</style>
