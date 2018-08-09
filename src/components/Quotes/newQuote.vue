<template>
  <div class="row">
    <form action="">
        <textarea name="" id="" cols="30" rows="10" v-model="quote"></textarea>
        <button class="btn btm-primary" @click.prevent="createNew">
            add Quote 
        </button>    
    </form>
  </div>
</template>

<script>
export default {
    data: function(){
        return{
            quote: ''
        };
    },
    methods: {
        createNew(){
            this.$emit('quoteAdded' , this.quote);
            this.quote = '';
        }
    }
    
}
</script>
