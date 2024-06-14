<template>
  <b-container>
    <h2>{{ $t('login') }}</h2>
    <b-form @submit.prevent="login">
      <b-form-group :label="$t('username')" label-for="username" class="my-2">
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

      <b-button type="submit" variant="primary">{{ $t('login') }}</b-button>
      <b-button type="button" variant="secondary" v-on:click="$router.push('/register')">{{
        $t('register')
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
        password: ''
      }
    },
    methods: {
      async login() {
        try {
          const response = await authService.login(this.username, this.password)
          console.log('Login successful:', response)

          localStorage.setItem('token', response.token)

          this.$router.push('/dashboard')
        } catch (error) {
          console.error('Login error:', error)
        }
      }
    }
  }
</script>
