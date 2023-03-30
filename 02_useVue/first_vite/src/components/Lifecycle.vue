<template>
    <div>
        <h1>{{ message }}</h1>
        <button @click="changeMsg">改變訊息</button>
    </div>
</template>
<script setup>
import {ref, onMounted, onUpdated, onBeforeUnmount} from 'vue'
const message = ref('Hello, Vue 3!');
const changeMsg = () => {
      message.value = '訊息被改變了';
    }
// 當元件掛載後執行
onMounted(() => {
    console.log('元件已掛載完成')
})
// 當元件更新後執行
onUpdated(() => {
    console.log('元件已更新')
})
// 當元件卸載前執行
onBeforeUnmount(() => {
    console.log('元件卸載前執行')
})
</script>