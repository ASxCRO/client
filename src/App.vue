<template>
  <div id="app">
    <b-navbar toggleable type="light" variant="light" class="px-4">
      <b-navbar-brand to="/">{{ $t('contacts') }}</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/logout">{{ $t('logout') }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {}
  }
</script>

<style></style>
