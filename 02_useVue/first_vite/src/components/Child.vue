<template>
  <div>
    <p>文字:{{ msg }}</p>
    <!-- <p>字數: {{ textCount }}</p> -->
  </div>
</template>

<script setup>
import { watch, computed } from 'vue'
// 定義事件名稱
const emits = defineEmits(["update"])
// 定義傳遞進來的 props
const props = defineProps(["msg"])
// 計算字數
const textCount= computed(()=>{
return props.msg.length
})
// 監聽 textCount 的變化，一旦有變化就觸發 update 事件並傳入新值
watch(textCount,(newValue) => {
    emits('update',newValue)
})
</script>

<style>

</style>