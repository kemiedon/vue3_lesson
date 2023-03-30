<template>
  <div class="container py-5">
    <div class="row">
        <div class="col-md-4">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
                <span class="text-muted">您所訂購的餐點</span>
                <span class="badge badge-secondary badge-pill">3</span>
            </h4>
            <ul class="list-group mb-3 sticky-top">
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Product name</h6>
                        <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">x 6</span>
                    <span class="text-muted">$12</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Second product</h6>
                        <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">$8</span>
                </li>
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">Third item</h6>
                        <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">$5</span>
                </li>
                
                <li class="list-group-item d-flex justify-content-between">
                    <span>總金額 (NTD)</span>
                    <strong>$20</strong>
                </li>
            </ul>
            <form class="card p-2">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Promo code">
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-secondary">Redeem</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-md-8 order-md-1">
            <h4 class="mb-3">訂購人資料</h4>
            <form class="needs-validation" novalidate="">
                <div class="row">
                    <div class="col-md-12 mb-3">
                        <label for="firstName">姓名</label>
                        <input type="text" class="form-control" id="fullName" placeholder="" value="" required="">
                        <div class="invalid-feedback"> 姓名欄位不得為空</div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="phone">行動電話</label>
                    <div class="input-group">
                        
                        <input type="text" class="form-control" id="phone" placeholder="輸入手機號碼" required="">
                        <div class="invalid-feedback" style="width: 100%;"> 請輸入手機號碼以便聯繫 </div>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="you@example.com">
                    <div class="invalid-feedback"> 請輸入正確的Email格式 </div>
                </div>
                <div class="mb-3">
                    <label for="address">運送地址</label>
                    <input type="text" class="form-control" id="address" placeholder="請輸入地址" required="">
                    <div class="invalid-feedback"> 請輸入餐點要送達的地址 </div>
                </div>
                
                <hr class="mb-4">
                <h4 class="mb-3">付款方式</h4>
                <div class="d-block my-3">
                    <div class="custom-control custom-radio">
                        <input id="cash" name="paymentMethod" type="radio" class="custom-control-input" checked="" required="">
                        <label class="custom-control-label" for="cash">現金</label>
                    </div>
                    <div class="custom-control custom-radio">
                        <input id="line" name="paymentMethod" type="radio" class="custom-control-input" required="">
                        <label class="custom-control-label" for="line">Line pay</label>
                    </div>
                </div>
                <hr class="mb-4">
                <button class="btn btn-primary btn-lg btn-block" type="submit">確定下單</button>
            </form>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>