<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Counter v-bind:num="num" @incre="increment" @decre="decrement" ></Counter>
    <p>parent:{{num}}</p>
    <router-link to="/goodsList">goodslist</router-link>
  </div>
</template>

<script>
  import Counter from "./Counter.vue"
export default {
  name: 'HelloWorld',
  data () {
    return {
      num:20,
      msg: 'Welcome to Makchikin First Vue App'
    }
  },
  components:{
    Counter
  },
  methods:{
    increment(){
      this.num++;
    },
    decrement(){
      this.num--;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
