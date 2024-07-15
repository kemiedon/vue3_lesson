<script setup>
import NoteList from './components/NoteList.vue'
import NoteGrid from './components/NoteGrid.vue'
import AddNote from './components/AddNote.vue'
import Search from './components/Search.vue'



</script>

<template>
  <Search></Search>
  <div class="row align-items-start">
    <div class="col-4">
      <NoteList />
    </div>
    <div class="col-8 mt-5">
        <AddNote></AddNote>
    </div>
  </div>

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
