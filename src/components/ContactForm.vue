<template>
  <b-container>
    <h2>{{ isEdit ? 'Uredi kontakt' : 'Dodaj kontakt' }}</h2>
    <b-form @submit.prevent="saveContact">
      <b-form-group label="Ime">
        <b-form-input v-model="firstName" required />
      </b-form-group>
      <b-form-group label="Prezime">
        <b-form-input v-model="lastName" required />
      </b-form-group>
      <b-form-group label="Email">
        <b-form-input type="email" v-model="email" required />
      </b-form-group>
      <br />
      <b-button type="submit" variant="primary" class="px-2 mx-2">
        {{ isEdit ? 'Uredi' : 'Dodaj' }}
      </b-button>
      <b-button @click="$emit('cancel')" variant="secondary"> Odustani </b-button>
    </b-form>
  </b-container>
</template>

<script>
  import contactService from '@/services/contactService'

  export default {
    props: ['contact', 'isEdit'],
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        id: 0
      }
    },
    watch: {
      contact: {
        handler(newVal) {
          this.firstName = newVal.firstName || ''
          this.lastName = newVal.lastName || ''
          this.email = newVal.email || ''
          this.id = newVal.id || 0
        },
        deep: true,
        immediate: true
      }
    },
    methods: {
      saveContact() {
        const newContact = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          id: this.id
        }
        if (this.isEdit) {
          contactService.updateContact(newContact.id, newContact).then(() => {
            this.$emit('contact-saved')
          })
        } else {
          contactService.addContact(newContact).then(() => {
            this.$emit('contact-saved')
          })
        }
      }
    }
  }
</script>
