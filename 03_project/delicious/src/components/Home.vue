<template>
    <div class="col-md-12">
        <h3>歡迎來到Delicious點餐系統，請選擇您要的餐點</h3>
        <div class="container">
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                        aria-selected="true" @click="getPastas()">主餐</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                        aria-selected="false" @click="getDesserts()">甜點</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                        aria-selected="false">飲料</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="row" v-if="pastas.length > 0">
                        <div class="col-md-3 mt-3" v-for="(pasta, i) in pastas" :key ="i">
                            <div class="card">
                                <img :src="pasta_imgs[i]" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">{{ pasta.name }}</h5>
                                    <p class="card-text">{{ pasta.description }}</p>
                                    <p class="price">NT$ {{ pasta.price }}</p>
                                    <button type="button" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-cart-plus"></i> 加入購物車</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="row" v-if="desserts.length > 0">
                        <div class="col-md-3 mt-3" v-for="(dessert, j) in desserts" :key="j">
                            <div class="card">
                                <img :src="dessert_imgs[i]" class="card-img-top" :alt="dessert.name">
                                <div class="card-body">
                                    <h5 class="card-title">{{ dessert.name }}</h5>
                                    <p class="card-text">{{ dessert.description }}</p>
                                    <p class="price">{{ dessert.price }}</p>
                                    <button type="button" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-cart-plus"></i> 加入購物車</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="row">
                        <div class="col-md-3 mt-3">
                            <div class="card">
                                <img src="../assets/imgs/menu/drink1.jpg" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">法式燉牛肉</h5>
                                    <p class="card-text">說明</p>
                                    <button type="button" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-cart-plus"></i> 加入購物車</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import axios from 'axios'
import { reactive, onMounted, onUpdated, watchEffect } from 'vue'
// 載入pasta.json資料
var pastas = reactive([])
var pasta_imgs = reactive([])
const getPastas = async() => {
    try{
        const response = await axios.get('/json/pasta.json')
        pastas = response.data
        pastas.forEach((item) => {
            pasta_imgs.push(`./src/assets/imgs/menu/${item.image}`)
        })
    }catch(error){
        console.log(error)
    }
}
var desserts = reactive([])
var dessert_imgs = reactive([])
const getDesserts = async() => {
    try{
        const response = await axios.get('/json/dessert.json')
        desserts = response.data
        desserts.forEach((item) =>{
            dessert_imgs.push(`./src/assets/imgs/menu/${item.image}`)
        })
        console.log('get_dessert')
    }catch(error){
        console.log(error)
    }
}
onMounted(() => {
    getPastas()
    getDesserts()
})

</script>

<style>
    h3 {
        padding: 40px 0;
    }
    .card{
        padding: 0;
    }
    .price{
        font-size: 1.2rem;
        color:brown;
        font-weight: bold;
    }
</style>