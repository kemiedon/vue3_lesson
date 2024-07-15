import {defineStore} from 'pinia'
export const useMemoStore = defineStore("memos", {
    state: () => ({
        memos: [
            {
                "id": 1,
                "title": "整理家裡",
                "content": "第一個筆記內容",
                "isFinished": false,
                "isPinned": false
            },
            {
                "id": 2,
                "title": "年度工作記劃",
                "content": "第二個筆記內容",
                "isFinished": false,
                "isPinned": false
            },
            {
                "id": 3,
                "title": "第三個筆記",
                "content": "第三個筆記內容",
                "isFinished": false,
                "isPinned": true
            },
            {
                "id": 4,
                "title": "第四個筆記",
                "content": "第四個筆記內容",
                "isFinished": true,
                "isPinned": false
            }
        ],
        selectedMemoId: null
    }),
    getters:{
        allNotes(state){
            
            return state.memos.filter(memo => !memo.isPinned);
        },
        pinnedNotes(state){
            return state.memos.filter(memo => memo.isPinned);
        },
        selectMemo(state){
            return state.memos.find(memo => memo.id === state.selectedMemoId);
        }
    },
    actions: {
        addMemo(title, content) {
            console.log(title)
            if(!title) return
            const last_id = this.memos[this.memos.length - 1].id
            this.memos.push({
                id: last_id + 1,
                title,
                content,
                isFinished: false,
                isPinned: false
            })
        },
        setSelectedMemoId(id) {
            this.selectedMemoId = id;
        }
    }
})