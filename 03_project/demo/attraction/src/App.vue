<template>
  <div class="container-md">
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-end justify-content-between mb-4">
          <!-- Logo -->
            <img src="/logo.png" alt="Logo" class="logo">
            <button class="btn btn-secondary">
              <i class="fas fa-plus"></i> 新增
            </button>
        </div>
        <AddNote @spot-added="handleSpotAdded" ></AddNote>
      </div>
      <NoteList></NoteList>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NoteList from './components/NoteList.vue'
import AddNote from './components/AddNote.vue'
const handleSpotAdded = (spotData) => {
  // Handle the added spot data here
  console.log('New spot added:', spotData);
};

</script>

<style scoped>
.logo {
  width: 100px; /* 請替換成您的logo寬度 */
}


</style>
