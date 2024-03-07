<script setup>
import {ref, emit } from 'vue'

const name = ref('')
const image = ref(null);

const addAttraction = () => {
  // 添加新景點的邏輯
  try{
    const attractions = JSON.parse(localStorage.getItem('attractions')) || [];
    attractions.push({ name: name.value, image: image.value });
    localStorage.setItem('attractions', JSON.stringify(attractions));
  
    emit('spot-added', {
      name: name.value,
      image: image.value
    })
    name.value = '';
    image.value = null;
  }catch(error){
    console.error('Error adding attraction:', error);
  }
  
};
const imageUpload = (event) => {
    image.value = event.target.files[0];
}

const closeForm = () => {
    emit('close')
}
</script>

<template>
<div class="justify-content-center">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <button @click="closeForm" class="btn btn-outline-secondary">Close</button>
    </div>
    <form @submit.prevent="addAttraction">
        <div class="mb-3">
            <label for="file" class="form-label">File:</label>
            <input type="file" id="image" @change="imageUpload" class="form-control" required>
        </div>
        <div class="mb-3">
            <label for="title" class="form-label">Title:</label>
            <input type="text" id="name" v-model="name" class="form-control" required>
        </div>
        
      <button type="submit" class="btn btn-primary">儲存</button>
    </form>
</div>
</template>

<style scoped>
.spot-image {
  width: 100px; /* 請調整圖片寬度 */
  height: auto; /* 保持高度自動調整 */
}

.spot-name {
  flex: 1; /* 使景點名稱占據剩餘空間 */
}
.list-group-item{
  transition: background-image 0.3s;
}
.list-group-item:hover{
  background-image: linear-gradient(to bottom, #ffffff, #f8f8fc, #f0f1f9, #e8ebf6, #dee5f3);
}
</style>
