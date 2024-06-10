<template>
  <div class="p-3 bg-light rounded">
    <b-input
      v-model="$store.state.contact.searchTerm"
      @input="$store.dispatch('getAllContacts')"
      placeholder="Pretraži..."
      class="mb-3"
    />

    <b-table
      id="my-table"
      :items="contacts"
      :per-page="perPage"
      :fields="fields"
      striped
      bordered
      hover
      responsive
      class="mb-3"
      @sort-changed="onSortChanged"
    >
      <template #cell(actions)="data">
        <b-button size="sm" @click="editContact(data.item)" class="mx-2">Uredi</b-button>
        <b-button size="sm" variant="danger" @click="deleteContact(data.item.id)">Obriši</b-button>
      </template>
    </b-table>

    <b-pagination
      v-model="currentPage"
      :total-rows="totalItemsNumber"
      :per-page="perPage"
      aria-controls="my-table"
      align="center"
      class="my-3"
      @change="handlePaginationChange"
    ></b-pagination>
    <p class="mt-3 text-center">Trenutna stranica: {{ currentPage }}</p>
  </div>
</template>

<script>
  import contactService from '@/services/contactService'
  import { mapGetters } from 'vuex'

  export default {
    name: '',
    components: {},
    data() {
      return {
        currentPage: 1,
        fields: [
          { key: 'firstName', label: 'Ime', sortable: true, hideSortIcon: true },
          { key: 'lastName', label: 'Prezime', sortable: true, hideSortIcon: true },
          { key: 'email', label: 'Email', sortable: true, hideSortIcon: true },
          { key: 'actions', label: 'Akcije', sortable: false, hideSortIcon: true }
        ]
      }
    },
    methods: {
      editContact(contact) {
        this.$store.commit('contact/editContact', contact)
      },
      deleteContact(id) {
        contactService.deleteContact(id).then(() => {
          this.$store.dispatch('contact/getAllContacts')
        })
      },
      handlePaginationChange(newPage) {
        this.currentPage = newPage
        this.$store.state.contact.currentPage = this.currentPage
        this.$store.dispatch('contact/getAllContacts')
      },
      onSortChanged(ctx) {
        this.sortField = ctx.sortBy //+ ' ' + (ctx.sortDesc ? 'Desc' : 'Asc')
        this.$store.dispatch('contact/getAllContacts')
      }
    },
    mounted() {
      this.$store.dispatch('contact/getAllContacts')
    },
    computed: {
      ...mapGetters({
        contacts: 'contact/allContacts'
      }),
      totalItemsNumber() {
        return this.$store.state.contact.totalItemsNumber
      },
      perPage() {
        return this.$store.state.contact.perPage
      }
    }
  }
</script>

<style>
  .sr-only {
    display: none !important;
  }
</style>
