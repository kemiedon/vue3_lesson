<template>
  
  <!-- <FirstVue /> -->
  <!-- <Events/> -->
  <!-- <Lifecircle/> -->
  <!-- <Computed/> -->
  <!-- <Watch/> -->
  <div>
    <input type="text" v-model="msg">
    <Child :msg="msg" @update="getTextCount"/>
    <p>字數: {{ wordCount }}</p>
  </div>
</template>
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import FirstVue from './components/FirstVue.vue';
import Events from './components/Events.vue'
import Lifecycle from './components/Lifecycle.vue';
import Computed from './components/Computed.vue';
import Watch from './components/Watch.vue';
import Child from './components/Child.vue';
import { ref } from 'vue'
const msg = ref("")
var wordCount = ref(0)
function getTextCount(textCount){
  wordCount = textCount
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
