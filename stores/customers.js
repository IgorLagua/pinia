import { defineStore } from 'pinia'

export const useCustomersStore = defineStore('customers', {
    
    state: () => ({
        data: []
    }),
    
    actions: {
        
        store ( itens ) {
            if ( this.data.length === 0 ) {
                itens.id = 0
            } else {
                var lastId = this.data[0].id;
                itens.id = lastId + 1
            }
            this.data.unshift( itens );
        },

        delete ( item ) {
            const index = this.data.findIndex(el => el.id === item)
            this.data.splice(index, 1)
        }
    },

})

