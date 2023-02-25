<template>
    <p>這是第一個Vue組件</p>
    <img src="../assets/you-did.gif" alt="">
    <!-- {{}} 為模板語法，中間為變數, 此為資料綁定-->
    <!-- 單向綁定 -->
    <p>{{data}} </p>
    <!-- 雙向綁定 -->
    <input type="text" v-model="input_value">
    <p>{{input_value}}</p>
</template>
<script setup>
import { ref } from "vue"

    //利用資料驅動畫面
    const data = '第一筆資料'
    const input_value = ref("輸入的值")
</script>

<style scoped>
</style>