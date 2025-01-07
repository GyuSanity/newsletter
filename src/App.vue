<template>
<<<<<<< HEAD
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
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

=======
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h1>{{ hello }}</h1>
  <router-view/>
</template>

<<<<<<< HEAD
>>>>>>> 638b0bf (add type script)
=======
<script lang="ts" setup>
import { ref } from 'vue'

const hello = ref("Hellow")
</script>

>>>>>>> 2269271 (add aos)
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
<<<<<<< HEAD
  margin-top: 60px;
=======
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
>>>>>>> 638b0bf (add type script)
}
</style>
