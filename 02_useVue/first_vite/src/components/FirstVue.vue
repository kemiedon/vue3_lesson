<template>
    <div>My Name is {{ name }}, I'm a {{ job }}</div>
    
  </template>
<script setup>
// 組合式api寫法
import {ref} from 'vue'
const name = ref('Kemie')
const job = ref("Full-stack Engineer")

</script>

<style scoped>
</style>
