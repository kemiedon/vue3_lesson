<script setup>
import { ref } from 'vue'
import { useMemoStore } from '../stores/memos'

const noteStore = useMemoStore()
const selectedMemo = noteStore.selectMemo;
const selectMemo = (id) => {
  noteStore.setSelectedMemoId(id);
};



</script>
<template>
    <div class="container">
        <div class="row justify-content-center my-2">
          <div class="container">
            <button class="btn btn-primary"><i class="fa-solid fa-plus"></i> 新增</button>
          </div>
        </div>
        <div class="row align-items-start">
            <div class="col-12">
              <h4 class="mt-3 mb-3">重要</h4>
              <ul class="list-group mt-1 mb-3">
                <li v-for="memo in noteStore.allNotes" :key="memo.id" class="list-group-item" @click="selectMemo(memo.id)">{{memo.title}} 
                  <div class="icon-group">
                    <i class="fa-solid fa-thumbtack me-2"></i>
                    <i class="fa-solid fa-trash-can"></i>
                  </div>
                </li>
              </ul>
              <h4 class="mb-3">全部</h4>
              <ul class="list-group mt-1">
                <li v-for="memo in noteStore.pinnedNotes" @click="selectMemo(memo.id)" :key="memo.id" class="list-group-item">{{ memo.title}} 
                  <div class="icon-group">
                    <i class="fa-solid fa-thumbtack"></i> <i class="fa-solid fa-trash-can"></i>
                  </div>
                </li>
               
              </ul>
            </div>
          </div>
    </div>
</template>
<style scoped>
.list-group-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>