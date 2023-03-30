<style>
#box{
    width: 100px;
    height: 100px;
    background: #f00;
    margin-top: 30px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
}
input, select{
    height: 30px;
    border: 1px solid #999;
    border-radius: 5px;
    margin: 20px;
}
</style>
<template>
    <div>
        <button @click="handleClick">點我</button>
        <div>{{ number }}</div>
        <input type="text" @input="handleInput" /> <span>{{ msg }}</span>
        <select @change="handleChange">
            <option value="甜點">甜點</option>
            <option value="麵包">麵包</option>
        </select>
        <form @submit.prevent="handleSubmit">
            <input type="text" />
            <button type="submit">提交</button>
        </form>
        <input type="text" @keydown="handleKeyDown" /> <span>{{ msg2 }}</span>
        <div id="box" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">{{ box_title }}</div>
    </div>
</template>

<script>
// 組合式api寫法
    export default {
        data() {
            return {
                number: 0,
                msg: '',
                msg2: '',
                box_title: '測試滑鼠事件',
            }
        },
        methods: {
            handleClick() {
                this.number++
            },
            handleInput(e) {
                console.log('輸入事件', e.target.value)
                this.msg = e.target.value
            },
            handleChange(e) {
                console.log('更改事件', e.target.value)
            },
            handleSubmit() {
                console.log('預防提交事件')
            },
            handleKeyDown(e) {
                console.log('鍵盤按下事件', e.key)
            },
            handleMouseEnter() {
                 this.box_title ='滑鼠進入事件'
            },
            handleMouseLeave() {
                 this.box_title ='滑鼠離開事件'
            }
        }
    }
</script>