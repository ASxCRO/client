<template>
  <b-container>
    <b-row class="d-flex justify-content-end">
      <b-col>
        <b-button
          v-if="!showForm"
          @click="$store.dispatch('contact/addContact')"
          variant="primary"
          class="mt-3 mb-3 w-25"
          >{{ $t('add') }}</b-button
        >
      </b-col>
      <b-col class="d-flex justify-content-end">
        <LanguageSwitcher />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <contact-form v-if="showForm" />
        <contact-list v-else />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import ContactList from '@/components/ContactList.vue'
  import ContactForm from '@/components/ContactForm.vue'
  import LanguageSwitcher from '@/components/LanguageSwitcher.vue'

  export default {
    components: {
      ContactList,
      ContactForm,
      LanguageSwitcher
    },
    computed: {
      showForm() {
        return this.$store.state.contact.showForm
      },
      selectedContact() {
        return this.$store.state.contact.selectedContact
      },
      isEdit() {
        return this.$store.state.contact.isEdit
      }
    },
    methods: {}
  }
</script>
