
<template>
  <div class="container-fluid">
    <div class="row">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center justify-content-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <div class="logo"></div>
                </a>
                <ul class="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link px-0">
                          <i class="fa-solid fa-utensils"></i> <span class="ms-1 d-none d-sm-inline">餐點列表</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="cart" class="nav-link px-0">
                          <i class="fa-solid fa-cart-shopping"></i> <span class="ms-1 d-none d-sm-inline">我的購物車</span>
                        </router-link>
                    </li>
                    
                    <li>
                        <router-link to="order" class="nav-link px-0">
                          <i class="fa-solid fa-table-list"></i> <span class="ms-1 d-none d-sm-inline">我的訂單</span> 
                        </router-link>
                    </li>
                </ul>
                <hr>
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1">Mike</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">登出</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="col-md-9 py-5">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>
<script setup>

</script>

<style scoped>
.logo{
  width: 150px;
  height: 150px;
  padding: 15px;
  background: url('assets/logo.png') no-repeat;
  margin: auto;
  background-position: center center;
  background-size: 100% 100%;
}
.nav{
  width: 100%;
  padding: 50px 0;
}
ul li{
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
}
ul li a{
  width: 100%;
  height: 50px;
  display: block;
  color: #fff;
  text-indent: 10px;
}
.nav li span{
  margin-left: 20px;
}
.router-link-active{
  width: 100%;
  height: 50px;
  display: block;
  color: yellow;
  border-bottom: 1px solid yellow;
}

</style>
