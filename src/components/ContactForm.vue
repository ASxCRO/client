<template>
  <b-container>
    <h2>{{ isEdit ? $t('edit') : $t('add') }}</h2>
    <b-form @submit.prevent="saveContact">
      <b-form-group :label="$t('name')">
        <b-form-input v-model="$store.state.contact.selectedContact.firstName" required />
      </b-form-group>
      <b-form-group :label="$t('surname')">
        <b-form-input v-model="$store.state.contact.selectedContact.lastName" required />
      </b-form-group>
      <b-form-group :label="$t('email')">
        <b-form-input type="email" v-model="$store.state.contact.selectedContact.email" required />
      </b-form-group>
      <br />
      <b-button type="submit" variant="primary" class="px-2 mx-2">
        {{ isEdit ? $t('edit') : $t('add') }}
      </b-button>
      <b-button @click="cancel" variant="secondary"> {{ $t('cancel') }} </b-button>
    </b-form>
  </b-container>
</template>

<script>
  import contactService from '@/services/contactService'
  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        id: 0
      }
    },
    methods: {
      saveContact() {
        if (this.isEdit) {
          contactService
            .updateContact(
              this.$store.state.contact.selectedContact.id,
              this.$store.state.contact.selectedContact
            )
            .then(() => {
              this.showContactList()
              this.$store.commit('contact/resetContact')
            })
        } else {
          contactService.addContact(this.$store.state.contact.selectedContact).then(() => {
            this.showContactList()
            this.$store.commit('contact/resetContact')
          })
        }
      },
      showContactList() {
        this.$store.state.contact.showForm = false
        this.$store.dispatch('contact/getAllContacts')
      },
      cancel() {
        this.$store.state.contact.showForm = false
        this.$store.dispatch('contact/getAllContacts')
      }
    },
    computed: {
      isEdit() {
        return this.$store.state.contact.isEdit
      }
    }
  }
</script>
