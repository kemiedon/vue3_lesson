<template>
  <PersonInfo/>
  <BasicScript></BasicScript>
  <DataBinding></DataBinding>
</template>

<script>
import PersonInfo from './components/PersonInfo.vue'
import BasicScript from './components/BasicScript.vue';
import DataBinding from './components/DataBinding.vue';
export default {
  name: 'App',
  components: {
    PersonInfo,
    BasicScript,
    DataBinding
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
