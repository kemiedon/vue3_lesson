<template>
  <div class="container py-4">
    <h1 class="mb-4">主廚推薦</h1>
    <div class="card-deck">
      <div class="card">
        <img src="/images/featured-dish-1.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">經典燉牛肉</h5>
          <p class="card-text">
            我們的經典燉牛肉採用最優質的牛肉和新鮮的蔬菜製成。口感鮮美、入口即化。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
        </div>
      </div>
      <div class="card">
        <img src="/images/featured-dish-2.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">豬肉卷</h5>
          <p class="card-text">
            我們的豬肉卷由新鮮的豬肉和蔬菜製成。香氣四溢、美味可口。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
        </div>
      </div>
      <div class="card">
        <img src="/images/featured-dish-3.jpg" class="card-img-top" alt="Featured Dish">
        <div class="card-body">
          <h5 class="card-title">鮮蝦燴飯</h5>
          <p class="card-text">
            我們的鮮蝦燴飯採用最優質的鮮蝦和米飯製成。清爽美味，讓人回味無窮。
          </p>
          <a href="#" class="btn btn-primary">查看菜單</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  max-width: 900px;
}

.card {
  border: none;
  transition: transform 0.3s;
}

.card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.5rem;
}

.card-text {
  font-size: 1.2rem;
}

.btn-primary {
  background-color: #FFB900;
  border-color: #FFB900;
}

.btn-primary:hover {
  background-color: #FFC107;
  border-color: #FFC107;
}
</style>