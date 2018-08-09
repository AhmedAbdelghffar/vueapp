<template>
<div class="child1">
    <h3>this is child 1</h3>
    <h1>hi {{name}}</h1>
</div>
</template>

<script>
export default {
    name: 'Childprop1',
    props:{
        name:{
        type: String,
        default: 'Max'
        }
    }    
}
</script>
