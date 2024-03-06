<template>
  <div class="container-md">
    <div class="row">
      <div class="col-12">
        <div class="d-flex align-items-end justify-content-between mb-4">
          <!-- Logo -->
            <img src="/logo.png" alt="Logo" class="logo">
            <button @click="handleAdd" class="btn btn-secondary">
              <i class="fas fa-plus"></i> 新增
            </button>
        </div>
      </div>
      <div class="justify-content-center">
          <div class="list-group">
            <div v-for="(spot, index) in spots" :key="index" class="d-flex align-items-center justify-content-between list-group-item">
              <img :src="'/imgs/'+spot.image" :alt="spot.name" class="spot-image">
              <span class="spot-name">{{ spot.name }}</span>
              <button @click="handleDelete(index)" class="btn">
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const spots = ref([]);
onMounted(async() => {
  try{
    const response = await fetch('/json/attraction.json');//載入景點
    if(!response.ok){
      throw new Error('讀取失敗');
    }
    spots.value = await response.json();
  }catch(error){
    console.log('載入錯誤:', error);
  }
})
const handleAdd = () => {
  // 添加新景點的邏輯
};

const handleDelete = (index) => {
  spots.value.splice(index, 1);
};

</script>

<style scoped>
.logo {
  width: 100px; /* 請替換成您的logo寬度 */
}

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
