<template>
  <div class="Parent">
    <button @click="selected_compo='child'">child1</button>
    <button @click="selected_compo='child2'">child2</button>
    <hr>

<keep-alive>
    <component :is="selected_compo">
        <p> default </p>
    </component>
</keep-alive>      
    <hr>
    <child> 
      {{ parentParam }}
    </child>
    <child2>
      {{ parentParam2 }}
    </child2>  
  </div>
</template>

<script>
import Child from './Child'
import Child2 from './Child2'
export default {
  name: 'parent',
  components: {
    'child' : Child ,
    'child2': Child2
  },
  data () {
    return {
        parentParam: 'parent parameter for child1',
        parentParam2: 'parent parameter for child2',
        selected_compo : 'child'
     }
  } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./hello.css" scoped>

</style>
