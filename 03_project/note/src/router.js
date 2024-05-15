import { createRouter, createWebHistory } from 'vue-router';
import AddNote from './components/AddNote.vue';
import EditNote from './components/EditNote.vue';
import SearchNote from './components/SearchNote.vue';
const routes = [
  { path: '/', component: AddNote, name: 'add' },
  { path: '/edit/:id', component: EditNote, props: true, name: 'edit' },
  { path: '/search', component: SearchNote, props: true, name: 'search' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
