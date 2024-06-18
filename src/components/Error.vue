// ErrorComponent.vue
<template>
  <div class="error-page">
    <b-alert variant="danger" show> {{ $t('error') }} </b-alert>
  </div>
</template>

<script>
  export default {
    name: 'ErrorComponent'
  }
</script>

<style scoped>
  .error-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;
  }
</style>
