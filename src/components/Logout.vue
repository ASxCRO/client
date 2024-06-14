<template>
  <div></div>
</template>

<script>
  import authService from '@/services/authService' // Adjust the path as per your project structure

  export default {
    created() {
      authService.logout()
      this.$router.push('/login')
    }
  }
</script>

<style></style>
