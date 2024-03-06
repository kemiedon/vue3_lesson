<script setup>
import HelloWorld from './components/HelloWorld.vue';
import LifeCircleVue from './components/LifeCircle.vue';
import LifeNoteVue from './components/LifeNote.vue';
import Button from './components/MyButton.vue';
import DataBinding from './components/DataBinding.vue';
import ChangeColor from './components/ChangeColor.vue';
</script>

<template>
  
  <HelloWorld msg="Vite + Vue" />
  <Button></Button>
  <br>
  <LifeCircle></LifeCircle>
  <LifeNoteVue></LifeNoteVue>
  <DataBinding></DataBinding>
  <ChangeColor></ChangeColor>
</template>

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
