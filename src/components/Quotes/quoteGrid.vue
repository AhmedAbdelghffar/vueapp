<template>
<div class="quote">
   <div class="row">
        <app-quote v-for="(quote, index) in quotes" :key='index'>{{ quote }}</app-quote>
   </div>
</div>    
</template>

<script>
import quote from './quote';
export default {
    props: ['quotes'],
    components:{
        appQuote :quote
    }
}
</script>

<style>

</style>
