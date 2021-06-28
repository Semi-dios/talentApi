<template>
  <h3>Dashboard {{getUser}}</h3>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters({
      getUser: 'auth/getUser'
    })
  }
}
</script>

<style>

</style>