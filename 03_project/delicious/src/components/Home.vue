<script setup>

import axios from 'axios'
import { ref, onMounted } from 'vue'

var cart = ref([])

var pastas = ref([])
//取得pasta資料
const getPastas = async () => {
    try{
        const response = await axios.get('/json/pasta.json')
        pastas.value = response.data
        
    }catch(error){
        console.log(error)
    }
}
//宣告desserts變數
var desserts = ref([])
//取得desserts json資料
const getDesserts = async() => {
    try{
        const response = await axios.get('/json/dessert.json')
       
        desserts.value = response.data
        console.log('get_dessert')
    }catch(error){
        console.log(error)
    }
}
var drinks = ref([])
//取得drink json資料
const getDrinks = async() => {
    try{
        const response = await axios.get('/json/drink.json')
        drinks.value = response.data
    }catch(error){
        console.log(error)
    }
}
function addPastaToCart(index){

}
onMounted(() => {
    getPastas()
    getDesserts()
    getDrinks()
})

</script>
<template>
    <div class="col-md-12">
        <h3>歡迎來到Delicious點餐系統，請選擇您要的餐點</h3>
        <div class="container">
            <ul class="nav nav-pills mb-3 d-flex justify-content-center" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button v-if="pastas.length > 0" class="nav-link active" id="pills-pasta-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-pasta" type="button" role="tab" aria-controls="pills-pasta"
                        aria-selected="true" @click="getPastas()">主餐</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button v-if="desserts.length > 0" class="nav-link" id="pills-dessert-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-dessert" type="button" role="tab" aria-controls="pills-dessert"
                        aria-selected="false" @click="getDesserts()">甜點</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button v-if="drinks.length > 0" class="nav-link" id="pills-drink-tab" data-bs-toggle="pill"
                        data-bs-target="#pills-drink" type="button" role="tab" aria-controls="pills-drink"
                        aria-selected="false" @click="getDrinks()">飲料</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-pasta" role="tabpanel" aria-labelledby="pills-pasta-tab">
                    <div class="row" >
                        <div class="col-md-3 mt-3" v-for="pasta in pastas" :key ="pasta.id">
                            <div class="card">
                                <img :src="`./src/assets/imgs/menu/${pasta.image}`" class="card-img-top" :alt="pasta.name">
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
                <div class="tab-pane fade" id="pills-dessert" role="tabpanel" aria-labelledby="pills-dessert-tab">
                    <div class="row">
                        <div class="col-md-3 mt-3" v-for="dessert in desserts" :key="dessert.id">
                            <div class="card">
                                <img :src="`./src/assets/imgs/menu/${dessert.image}`" class="card-img-top" :alt="dessert.name">
                                <div class="card-body">
                                    <h5 class="card-title">{{ dessert.name }}</h5>
                                    <p class="card-text">{{ dessert.description }}</p>
                                    <p class="price">NT$ {{ dessert.price }}</p>
                                    <button type="button" class="btn btn-outline-primary btn-sm"><i class="fa-solid fa-cart-plus"></i> 加入購物車</button>
                                </div>
                            </div>
                        </div>       
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-drink" role="tabpanel" aria-labelledby="pills-drink-tab">
                    <div class="row">
                        <div class="col-md-3 mt-3" v-for="drink in drinks" :key="drink.id">
                            <div class="card">
                                <img :src="`./src/assets/imgs/menu/${drink.image}`" class="card-img-top" :alt="drink.name">
                                <div class="card-body">
                                    <h5 class="card-title">{{drink.name}}</h5>
                                    <p class="card-text">{{drink.description}}</p>
                                    <p class="price">NT$ {{drink.price}}</p>
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



<style>
    h3 {
        padding: 40px 0;
    }
    .card{
        padding: 0;
    }
    h5{
        font-family: 'Noto Sans TC', sans-serif;
    }
    .price{
        font-size: 1.2rem;
        color:brown;
        font-weight: bold;
    }
</style>