import { defineStore } from 'pinia'

export const useZipCodeStore = defineStore('zipCode', {
    
    state: () => {
        return { 
            adresses :[],
            address :{},
        }
    },
    
    actions: {
    
        async getAddress (zipCodeNumber) {

            if ( this.adresses.length === 0 || !this.adresses.find(el => el.zipCodeNumber === zipCodeNumber) ) {
                const request = await fetch(`https://viacep.com.br/ws/${zipCodeNumber}/json/`)
                const data = await request.json();
                data.zipCodeNumber = zipCodeNumber
                this.address = data ;
                this.adresses.push( data );
            }
            else {
                this.address = this.adresses.find(el => el.zipCodeNumber === zipCodeNumber) ;
            }
        }

    },
})

