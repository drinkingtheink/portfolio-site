<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
html, body {
  height: 100vh;
}

body {
  background: rgb(2,0,36);
  background: #222;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  color: white !important;
}

.pill {
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 0.5rem;
  background: white;
  color: black;
  padding: 0.25rem 0.5rem;
}
</style>
