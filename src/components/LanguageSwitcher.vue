<template>
  <b-dropdown id="dropdown-1" :text="$t('chooseLanguage')" class="m-md-2">
    <b-dropdown-item @click="changeLanguage('en')">English</b-dropdown-item>
    <b-dropdown-item @click="changeLanguage('hr')">Hrvatski</b-dropdown-item>
  </b-dropdown>
</template>

<script>
  export default {
    name: 'LanguageSwitcher',
    methods: {
      changeLanguage(lang) {
        this.$i18n.locale = lang
      }
    }
  }
</script>

<style scoped>
  #dropdown-1 {
    margin-top: 10px;
  }
</style>
