<template>
  <b-container>
    <h2>{{ $t('register') }}</h2>
    <b-form @submit.prevent="register">
      <b-form-group :label="$t('username')" label-for="username">
        <b-form-input
          v-model="username"
          type="text"
          id="username"
          required
          autofocus
        ></b-form-input>
      </b-form-group>

      <b-form-group :label="$t('password')" label-for="password">
        <b-form-input v-model="password" type="password" id="password" required></b-form-input>
      </b-form-group>

      <b-form-group :label="$t('fullName')" label-for="fullname">
        <b-form-input v-model="fullName" type="text" id="fullname" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">{{ $t('register') }}</b-button>
      <b-button type="button" variant="secondary" v-on:click="$router.push('/login')" class="m-2">{{
        $t('login')
      }}</b-button>
    </b-form>
  </b-container>
</template>

<script>
  import authService from '@/services/authService' // Adjust the path as per your project structure

  export default {
    data() {
      return {
        username: '',
        password: '',
        fullName: ''
      }
    },
    methods: {
      async register() {
        try {
          const response = await authService.register(this.username, this.password, this.fullName)
          console.log('Registration successful:', response)
          this.$router.push('/login')
        } catch (error) {
          console.error('Registration error:', error)
        }
      }
    }
  }
</script>
