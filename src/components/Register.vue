<template>
  <div>
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
    </b-form>
  </div>
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

          // Handle successful registration (show success message, redirect, etc.)
          // Example: Redirect to login page after successful registration
          this.$router.push('/login')
        } catch (error) {
          console.error('Registration error:', error)
          // Handle registration error (show message, reset form, etc.)
        }
      }
    }
  }
</script>
