<template>
  <div class="container">
    <h1 class="mt-5 mb-3"><img src="/logo.png" alt="" />Quick Notes</h1>
    <button class="btn btn-primary mb-3" @click="addNote">Add Note</button>
    <div v-if="notes.length > 0" class="list-group">
      <Note v-for="(note, index) in notes" :key="index" :note="note" :index="index" @editNote="editNote(index)" @deleteNote="deleteNote(index)" />
    </div>
    <div v-else class="alert alert-info">No notes yet.</div>
    <EditNote v-if="editingNote !== null" :note="notes[editingNote]" @saveNote="saveNote" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Note from './components/Note.vue';

const notes = ref(JSON.parse(localStorage.getItem('notes')) || []);
const editingNote = ref(null);

const addNote = () => {
  notes.value.push('');
  editingNote.value = notes.value.length - 1;
};

const editNote = (index) => {
  editingNote.value = index;
};

const deleteNote = (index) => {
  notes.value.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(notes.value));
};

const saveNote = (note) => {
  notes.value[editingNote.value] = note;
  localStorage.setItem('notes', JSON.stringify(notes.value));
  editingNote.value = null;
};
</script>
