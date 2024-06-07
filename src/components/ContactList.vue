<template>
  <div class="p-3 bg-light rounded">
    <b-input v-model="searchTerm" @input="fetchContacts" placeholder="Pretraži..." class="mb-3" />

    <b-table
      id="my-table"
      :items="items"
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
  export default {
    name: '',
    components: {},
    data() {
      return {
        searchTerm: '',
        perPage: 10,
        currentPage: 1,
        totalPages: 0,
        totalItemsNumber: 0,
        items: [],
        fields: [
          { key: 'firstName', label: 'Ime', sortable: true, hideSortIcon: true },
          { key: 'lastName', label: 'Prezime', sortable: true, hideSortIcon: true },
          { key: 'email', label: 'Email', sortable: true, hideSortIcon: true },
          { key: 'actions', label: 'Akcije', sortable: false, hideSortIcon: true }
        ]
      }
    },
    methods: {
      fetchContacts() {
        return contactService
          .getAllContacts(this.currentPage, this.perPage, '', this.searchTerm)
          .then(data => {
            this.items = data.contacts
            this.totalPages = data.totalPages
            this.totalItemsNumber = data.totalItemsNumber
          })
      },
      editContact(contact) {
        this.$emit('edit-contact', contact)
      },
      deleteContact(id) {
        contactService.deleteContact(id).then(() => {
          this.fetchContacts().then(() => {})
        })
      },
      handlePaginationChange(newPage) {
        this.currentPage = newPage
        this.fetchContacts()
      },
      onSortChanged(ctx) {
        this.sortField = ctx.sortBy //+ ' ' + (ctx.sortDesc ? 'Desc' : 'Asc')
        this.fetchContacts()
      }
    },
    mounted() {
      this.fetchContacts()
    }
  }
</script>

<style>
  .sr-only {
    display: none !important;
  }
</style>
