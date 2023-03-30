<style>
    p {
        font-size: 2rem;
    }
</style>
<template>
    <div>
        <p>使用computed:{{ textCount }}</p>
        <p>使用method:{{ getTextCount() }}</p>
        <input type="text" v-model="text">
    </div>

</template>
<!-- <script setup>
import { ref, computed } from 'vue'
const text = ref('')
const textCount = computed(() => {
    return text.value.length
})
function getTextCount(){
    return text.value.length
}
</script> -->
<script>
    export default {
        data() {
            return {
                text: ''
            }
        },
        computed: {
            textCount() {
                return this.text.length + ' 觸發時間:' + new Date()
            }

        },
        methods: {
            getTextCount() {
                return this.text.length + ' 觸發時間:' + new Date()
            }
        }
    }
</script>