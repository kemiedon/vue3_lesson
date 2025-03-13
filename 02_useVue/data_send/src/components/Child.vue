<!-- Child.vue -->
<script setup>
defineProps(['name', 'age'])
</script>

<template>
  <p>名字：{{ name }}</p>
  <p>年齡：{{ age }}</p>
</template>

<style scoped>

</style>
