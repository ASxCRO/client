<template>
<div id="app">
  <router-link to="/">Go to Users</router-link><br>
  <router-link to="/test">Go to Test</router-link>
  <router-view></router-view>
</div>
</template>

<script>
  import Test from './components/Test.vue'
  import Users from './components/Users.vue'

  export default {
  name: 'App',
  components: {
    Test,Users
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
