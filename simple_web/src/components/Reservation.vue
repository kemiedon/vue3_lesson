<template>
  <div class="container py-4">
    <h1 class="mb-4">預約訂位</h1>
    <form>
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" class="form-control" id="name" placeholder="輸入姓名" required>
      </div>
      <div class="form-group">
        <label for="email">電子郵件</label>
        <input type="email" class="form-control" id="email" placeholder="輸入電子郵件" required>
      </div>
      <div class="form-group">
        <label for="date">日期</label>
        <input type="date" class="form-control" id="date" required>
      </div>
      <div class="form-group">
        <label for="time">時間</label>
        <input type="time" class="form-control" id="time" required>
      </div>
      <div class="form-group">
        <label for="guests">客人數量</label>
        <input type="number" class="form-control" id="guests" required>
      </div>
      <button type="submit" class="btn btn-primary">提交</button>
    </form>
  </div>
</template>