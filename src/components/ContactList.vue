<template>
  <div class="p-3 bg-light rounded">
    <b-container>
      <b-row>
        <b-col>
          <b-input
            v-model="$store.state.contact.searchTerm"
            @input="$store.dispatch('contact/getAllContacts')"
            placeholder="Pretraži..."
            class="mb-3"
        /></b-col>
        <b-col class="d-flex justify-content-end align-items-center">
          <b-form-select
            v-model="perPage"
            :options="pageSizes"
            class="mb-3"
            @change="handlePageSizeChange"
          >
          </b-form-select>
        </b-col>
      </b-row>
    </b-container>

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
        ],
        pageSizes: [
          { value: 5, text: '5' },
          { value: 10, text: '10' },
          { value: 20, text: '20' },
          { value: 50, text: '50' },
          { value: 100, text: '100' }
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
        this.sortField = ctx.sortBy + ' ' + (ctx.sortDesc ? 'Desc' : 'Asc')
        this.$store.state.contact.sortField = this.sortField
        this.$store.dispatch('contact/getAllContacts')
      },
      handlePageSizeChange(newPageSize) {
        this.$store.state.contact.perPage = newPageSize
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
