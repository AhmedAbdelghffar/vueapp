<template>
    <div class="container">
        <hr>
        <newQuote @quoteAdded="newQuote"> </newQuote>  
        <aqqQuoteGrid :quotes="quotes"> </aqqQuoteGrid>  
    </div>
</template>

<script>
import quoteGrid from './quoteGrid';
import newQuote  from './newQuote';
export default {
    data: function(){
        return{
            quotes: [
                'first quote to see somthing',
                'second quote'
            ]
        }
    },
    methods:{
       newQuote(quote){
          this.quotes.push(quote);
       }
    },
    components: {
        aqqQuoteGrid: quoteGrid,
        newQuote : newQuote
    }
    
}
</script>
