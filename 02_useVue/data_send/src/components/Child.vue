<!-- Child.vue -->
<script setup>
import { defineProps } from 'vue';
defineProps(['name', 'age'])
</script>

<template>
  <p>名字：{{ name }}</p>
  <p>年齡：{{ age }}</p>
</template>

<style scoped>

</style>
