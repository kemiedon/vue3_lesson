<script setup>
import {ref} from 'vue'
import { useMemoStore } from '../stores/memos'
import { storeToRefs } from 'pinia'

const newMemoTitle = ref('')
const newMemoContent = ref("筆記內容...")
const noteStore = useMemoStore()
const { memos } = storeToRefs(noteStore)
const { addMemo } = noteStore

const clearPlaceholder = () =>{
    document.querySelector('#title').placeholder = ''
    
}
const clearTextArea = () => {
    newMemoContent.value = ''
}
</script>
<template>
    <div class="text-left">
            <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input type="text" class="form-control" id="title" v-model="newMemoTitle" placeholder="筆記標題" @focus="clearPlaceholder">
            </div>
            <div class="mb-3">
                <label for="content" class="form-label">筆記內容</label>
                <textarea class="form-control" id="content" v-model="newMemoContent" @focus="clearTextArea" rows="3">請輸入筆記內容</textarea>
            </div>
            <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary" @click="addMemo(newMemoTitle, newMemoContent)">儲存</button>
            </div>
    </div>
    
</template>
<style scoped>

</style>