<template>
  <div id="app">
    <Demo></Demo>
    <Card
      :width="200"
      :imgHeight="90"
      :imgSrc="logo"
      summary="剑指offer"
    >
      <template v-slot:footer>
        <div class="level">中级 · 528人报名</div>
        <div class="price">￥299.00元</div>
      </template>
    </Card>
  </div>
</template>

<script>
import logo from './assets/logo.png'
export default {
  name: 'App',
  components: {
  },
  data: function (){
    return {
      logo
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
