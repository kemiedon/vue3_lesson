import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAttractionStore = defineStore('attraction', {
  state: () => ({
    items: []
  }),
  getters: {
    allItems: (state) => state.items,
    itemCount: (state) => state.items.length,
    getItemById: (state) => (id) => state.items.find(item => item.id === id)
  },
  actions: {
    addItem({ name, image }) {
        console.log(name);
      this.items.push({ id: Date.now().toString(), name, image })
    },
    deleteItem(id) {
      this.items = this.items.filter(item => item.id !== id)
    },
    editItem(id, updatedItem) {
      this.items.forEach((item, index) => {
        if (item.id === id) {
          this.items[index] = { id, name: updatedItem.name, image: updatedItem.image }
        }
      })
    },
    loadItems(data) {
      this.items = data
    },
    handleDelete(index) {
      this.items.splice(index, 1)
    }
  }
})