const app = new Vue({
    el: '#phone-field',
    data:()=>{
        return {
            countries: [],
            message:'hello world'
        }
    },
    methods: {
        async fetchCountries(){
            const response = await fetch('https://restcountries.eu/rest/v2/all')
            const data = await response.json()
            this.countries = data
        },
        selectCountry(country){
            
        }

    },

})