<template>
    <v-data-table
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="customers.data"
        item-value="name"
        class="elevation-1"
    >
        <template v-slot:item.actions="{ item }">
            <v-icon
                size="small"
                @click="confirmDeleteItem(item.raw.id)"
            >
                mdi-delete
            </v-icon>
        </template>
    </v-data-table>
</template>

<script setup>
    import { useCustomersStore } from '~/stores/customers'
    const customers = useCustomersStore()
    const itemsPerPage = ref(5)
    const headers = [
        { title: 'Nome', align: 'start', sortable: false, key: 'name' },
        { title: 'Telefone', align: 'end', key: 'celPhone' },
        { title: 'E-mail', align: 'end', key: 'email' },
        { title: 'Endereço', align: 'end', key: 'address' },
        { title: 'Número', align: 'end', key: 'number' },
        { title: 'Ações', align: 'end',sortable: false,  key: 'actions' },
    ]

    const confirmDeleteItem = (item) => {
        customers.delete(item)
    }
  
   


</script>