<template>
  <div class="Home">
    <input type="text" v-on:keyup.enter="changeTitle">
    <h1>{{ msg }}</h1>
    <hr>
    <form @submit.prevent="addSkill">
      <input type="text" v-model="skill" v-validate="'min:5'" name="skill">
    <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
    <p class="alert" v-if="errors.has('skill')">{{errors.first('skill')}}</p>
    </transition>
    </form>

    <ul>
      <transition-group name="list-push" enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <li v-for="(data, index) in skills" :key='index'>{{ data.skill }} <span v-on:click="remove(index)">x</span></li>
      </transition-group>
    </ul> 

    <h1> {{pass}}</h1>

    <slot></slot>

  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      skill: '',
      skills: [
        { "skill" : "vue.js"},
        { "skill" : "WordPress" }
      ]
    }
  },
  methods: {
    changeTitle: function(event){
      this.msg = event.target.value;
    },
    addSkill:function() {
      this.skills.push({skill: this.skill});
      this.skill = '';
    },
    remove: function(id){
      this.skills.splice(id,1);
    }
  },
  props:['pass']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="./hello.css" scoped>

</style>
