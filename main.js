/* const { createApp } = Vue;

createApp({
    data() {
        return {
            message: ''
        }
    },
    methods: {

    },
    beforeCreate() {
        console.log('beforecreate')
        console.log(this.message)
    },
    created() {
        console.log('created')
        console.log(this.message)
    },
    beforeMount(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
    .then( (response)=> {
        console.log(response.data);

        this.message= response.data.response
        console.log(this.message)

    }) 

    }
}).mount('#app');
/* 

axios.get('/user/12345')
    .then(function (response) {
        console.log(response)
    }) */ 