<template>
    <div>
        <input type="text" :style="dynamicStyle" v-model="msg">
        <input type="text" v-model="food.name">
        <p >{{ textCount }}</p>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

const msg = ref('')
const food = ref({
  name: '甜點',
  price: 100
})
const dynamicStyle = reactive({
  color: 'red',
  fontSize: '14px',
  transition: 'ease-in-out 0.3s'
})
const textCount = computed(()=>{
    return msg.value.length
})
watch(msg, (newValue) => {

  if(newValue.length > 10){
    dynamicStyle.color = 'blue'
    dynamicStyle.fontSize = '18px'
  }else{
    dynamicStyle.color = 'red'
    dynamicStyle.fontSize = '14px'
  }
})
watch(food, (newValue) => {
  console.log(newValue)
},{deep: true})
watchEffect(() => {
  console.log(`count is ${msg.value.length}`)
})

</script>

<style>

</style>