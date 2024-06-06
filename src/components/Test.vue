<template>
    <div>   
        <input type="text" v-model="title" /><br> 
        <span v-html="title"></span>
        <p v-if="showName">{{ user.firstName }}</p>
        <p v-else>{{ user.lastName }}</p>
        <p v-text="user.firstName"></p>
        <ul>
            <li v-for="item in items">{{ item.title }}</li>
        </ul>
        <button v-on:click="greet('Hello World')">
                Say greeting
        </button>
        <input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">
        <hr />
        <label>First Name: </label><input type="text" v-model="user.firstName">
        <br>
        <label>Last Name: </label><input type="text" v-model="user.lastName">

        <label>Full Name: </label><input type="text" v-model="fullName">

        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
 export default {
    name:'test',
    props: {
        msg: {
            type: String,
            default:'Foobar'
        }
    },
    data() {
        return {
            title:'<h1>Hello World<h1>',
            user: {
                firstName: 'John',
                lastName: 'Doe'
            },
            showName: true,
            items: [
                {title:'Item One'},
                {title:'Item Two'},
                {title:'Item Three'},
            ]
                
            
        }
    },
    methods: {
        greet: function(message) {
            alert(message)
        },
        pressKey: function(e) {
            console.log(e.target.value)
        },
        enterHit : function () {
            console.log('----')
        }
    },
    computed: {
        fullName:function () {
            return  `${this.user.firstName} ${this.user.lastName}`
        }
    }
 }
</script>

<style scoped>

</style>