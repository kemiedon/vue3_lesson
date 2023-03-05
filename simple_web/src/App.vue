

<template>

    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link class="navbar-brand" to="/">Delicious</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">關於我們</router-link>
            </li>
            <li class="nav-item">
          <router-link class="nav-link" to="/menu">菜單</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/reservation">預約訂位</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>

<!-- Main content -->
<div class="container py-4">
  <router-view></router-view>
</div>
</template>


<style scoped>

</style>
