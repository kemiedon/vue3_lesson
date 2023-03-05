<template>
  <div class="container py-4">
    <h1>關於我們</h1>
    <div class="row">
      <div class="col-md-6">
        <h2>我們的故事</h2>
        <p>
          Delicious餐廳成立於2005年，是一家提供高品質美食和優質服務的餐廳。我們的主廚經驗豐富，精通各種菜系，並使用最優質的食材來製作菜品。我們的餐廳設計精美，氣氛溫馨，讓您可以放鬆身心，享受美食和美好的時光。
        </p>
        <p>
          我們的餐廳提供多種菜品，包括各種肉類、海鮮、素食和甜點。我們還提供各種葡萄酒、啤酒和其他飲料，讓您可以與家人和朋友一起享受一頓美好的晚餐。
        </p>
      </div>
      <div class="col-md-6">
        <img src="./assets/imgs/about.jpg" class="img-fluid rounded" alt="About Us">
      </div>
    </div>
  </div>
</template>

<style>
.container {
  max-width: 900px;
}

img {
  max-height: 400px;
}

@media (max-width: 767px) {
  img {
    max-height: 200px;
  }
}
</style>
