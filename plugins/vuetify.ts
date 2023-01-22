import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// Translations provided by Vuetify
import { pt } from 'vuetify/locale'

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
        components,
        directives,
        locale: {
            locale: 'pt',
            // fallback: 'pt',
            messages: { pt }
        }
    })
    nuxtApp.vueApp.use(vuetify)
})



