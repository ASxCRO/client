<template>
    <div class="users">   
        <h1>
            Users
        </h1>
        <form v-on:submit.prevent="addUser">
            <input type="text" v-model="newUser.name" placeholder="Enter Name "/>
            <input type="text" v-model="newUser.email" placeholder="Enter Email "/>
            <input type="submit" value="Submit">
        </form>
        <ul>
            <li v-for="(user,index) in users" :key="index">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span :class="{contacted: user.contacted}">
                    {{ user.name }}: {{user.email}} <button v-on:click="deleteUser(user)">x</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { customRef } from 'vue';

 export default {
    name:'users',
    data() {
        return {
            newUser:{
                name:'',
                email:'',
                contacted:false
            },
            users: [
                {
                    name: 'John Doe',
                    email: 'jdoe@gmail.com',
                    contacted: false
                },
                {
                    name: 'Steve Smith',
                    email: 'ssmith@gmail.com',
                    contacted: false
                },
                {
                    name: 'Tom White',
                    email: 'twhite@gmail.com',
                    contacted: false
                },
           ]
        }
    },
    methods: {
       addUser(e){
            e.preventDefault();
            this.users.push({
                ...this.newUser
            })
            console.log('add')
       },
       deleteUser: function(user){
        this.users.splice(this.users.indexOf(user),1)
       }
    },
    created: function() {
        this.$http.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            this.users = response.data
        })
    }

 }
</script>

<style scoped>
    .contacted {
        text-decoration:line-through;
    }
</style>