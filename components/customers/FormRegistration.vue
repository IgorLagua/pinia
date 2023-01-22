<template>

    <v-row justify="center">
        <v-dialog
            v-model="dialog"
            persistent
        >
            <template v-slot:activator="{ props }">
                <v-btn
                    v-bind="props"
                >
                    Cadastrar
                </v-btn>
            </template>

            <v-card>
                
                <v-card-title>
                    <span class="text-h5 d-flex align-center flex-column">Cadastro de Clientes</span>
                </v-card-title>

                <v-card-text>
                        <v-row>

                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="Nome"
                                    variant="outlined"
                                    required
                                    :rules="nameValidation"
                                    v-model="formData.name"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="E-mail"
                                    variant="outlined"
                                    required
                                    :rules="emailValidation"
                                    v-model="formData.email"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="CPF"
                                    variant="outlined"
                                    required
                                    :rules="cpfValidation"
                                    v-maska:[cpfMask]
                                    v-model="formData.cpf"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="Celular"
                                    variant="outlined"
                                    required
                                    v-maska:[celPhoneMask]
                                    v-model="formData.celPhone"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="2">
                                <v-text-field
                                    label="CEP"
                                    variant="outlined"
                                    required
                                    :rules="zipCodeValidation"
                                    :error-messages="formError.zipCode"
                                    v-maska:[zipCodeMask]
                                    v-model="formData.zipCode"
                                    @keyup.enter="submitZipCodeForm"
                                ></v-text-field>
                            </v-col>

                            <v-btn 
                                class="my-4" 
                                size="large"
                                :disabled="zipCodeButtonValidation"
                                :loading="loadingZipCodeButton"
                                @click="submitZipCodeForm"
                            >
                                Buscar
                            </v-btn>
                            
                            <v-row></v-row>

                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    model-value="Rua José Alves da Vinha"
                                    label="Endereço"
                                    variant="outlined"
                                    required
                                    v-model="formData.address"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="2">
                                <v-text-field
                                    label="Número"
                                    variant="outlined"
                                    required
                                    v-model="formData.number"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="2">
                                <v-text-field
                                    model-value="Casa A"
                                    label="Complemento"
                                    variant="outlined"
                                    required
                                    v-model="formData.complement"
                                ></v-text-field>
                            </v-col>

                            <v-col cols="12" sm="6" md="4">
                                <v-text-field
                                    label="Bairro"
                                    variant="outlined"
                                    required
                                    v-model="formData.district"
                                ></v-text-field>
                            </v-col>
                           
                            <v-col cols="12" sm="6" md="2">
                                <v-text-field
                                    label="Cidade"
                                    variant="outlined"
                                    required
                                    v-model="formData.city"
                                ></v-text-field>
                            </v-col>
                           
                            <v-col cols="12" sm="6" md="2">
                                <v-select
                                    label="Estado"
                                    variant="outlined"
                                    :items="states"
                                    required
                                    v-model="formData.state"
                                ></v-select>
                            </v-col>
                       
                        </v-row>
                        
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        color="blue-darken-1"
                        variant="text"
                        @click="clearForm"
                    >
                        Limpar
                    </v-btn>
                    <v-btn
                        color="blue-darken-1"
                        variant="text"
                        @click="dialog = false"
                    >
                        Fechar
                    </v-btn>
                    <v-btn
                        color="blue-darken-1"
                        variant="text"
                        @click="saveData"
                    >
                        Salvar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>

</template>

<script setup>
    import { vMaska } from "maska"
    import { useZipCodeStore } from '~/stores/zipCode'
    import { useCustomersStore } from '~/stores/customers'
    
    let zipCodeButtonValidation = ref(true)
    const zipCodeMask = reactive({
        mask: "#####-###",
        onMaska: (detail) => {
            if ( detail.completed ) {
                zipCodeButtonValidation.value = false
            } else {
                zipCodeButtonValidation.value = true
            }
        }
    })

    // Validações dos inputs --> vem da pasta composables
    const { 
        cpfMask, 
        celPhoneMask,
    } = useMask()

    // Validações dos inputs --> vem da pasta composables
    const { 
        emailValidation, 
        zipCodeValidation,
        nameValidation,
        cpfValidation,
    } = useValidation()
    

    const dialog = ref(false)

    const formData = ref({
        name: '',
        email: '',
        cpf: '',
        celPhone: '',
        zipCode: '',
        address: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
    })

    const formError = ref({
        name: '',
        email: '',
        cpf: '',
        celPhone: '',
        zipCode: '',
        address: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
    })

    const states = [
        "AC",
        "AL",
        "AM",
        "AP",
        "BA",
        "CE",
        "DF",
        "ES",
        "GO",
        "MA",
        "MG",
        "MS",
        "MT",
        "PA",
        "PB",
        "PE",
        "PI",
        "PR",
        "RJ",
        "RN",
        "RO",
        "RR",
        "RS",
        "SC",
        "SE",
        "SP",
        "TO",
    ]

    const zipCode = useZipCodeStore()
    const loadingZipCodeButton = ref(false)

    // methods
    const submitZipCodeForm = async () => {
        
        if ( !zipCodeButtonValidation.value ) {
            loadingZipCodeButton.value = true
            formError.value.zipCode = ''
            try {
                await zipCode.getAddress(formData.value.zipCode)
            } finally {
                if ( zipCode.address.erro ) {
                    formError.value.zipCode = "CEP não existe"
                    formData.value.address = null
                    formData.value.district = null
                    formData.value.city = null
                    formData.value.state = null
                } else {
                    formData.value.address = zipCode.address.logradouro
                    formData.value.district = zipCode.address.bairro
                    formData.value.city = zipCode.address.localidade
                    formData.value.state = zipCode.address.uf
                    formData.value.number = null
                    formData.value.complement = null
                }
                loadingZipCodeButton.value = false
            }
        }
    }

    const saveData = () => {
        const customers = useCustomersStore()
        try {
            customers.store(formData.value)
        } 
        finally {
            dialog.value = false
            // clearForm()
        }
    }

    const clearForm = () => {

        formData.value.name = null
        formData.value.email = null
        formData.value.cpf = null
        formData.value.celPhone = null
        formData.value.zipCode = null
        formData.value.address = null
        formData.value.number = null
        formData.value.complement = null
        formData.value.district = null
        formData.value.city = null
        formData.value.state = null

        formError.value.zipCode = ''
        
        loadingZipCodeButton.value = false
    }

    


</script>

