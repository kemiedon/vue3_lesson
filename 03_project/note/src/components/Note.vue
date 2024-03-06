<!-- Note.vue -->
<template>
  <div class="list-group-item d-flex align-items-center">
    <div class="flex-grow-1">{{ note }}</div>
    <button class="btn btn-secondary me-2" @click="editNote">Edit</button>
    <button class="btn btn-danger" @click="deleteNote">Delete</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['note', 'index']);
const emit = defineEmits(['editNote', 'deleteNote']);

const editNote = () => {
  emit('editNote');
};

const deleteNote = () => {
  emit('deleteNote');
};
</script>
