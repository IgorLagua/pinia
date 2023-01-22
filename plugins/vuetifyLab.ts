import { createVuetify } from 'vuetify'

// componentes em desenvolvimento no Vuetify
import * as labs from 'vuetify/labs/components'
import { VDataTable } from 'vuetify/labs/VDataTable'
// Translations provided by Vuetify
import { pt } from 'vuetify/locale'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        // components,
        
        // ...labs,     // componentes em desenvolvimento no Vuetify
        components: {
            VDataTable,
        },
        locale: {
            locale: 'pt',
            // fallback: 'pt',
            messages: { pt }
        }
    })
    nuxtApp.vueApp.use(vuetify)
})



