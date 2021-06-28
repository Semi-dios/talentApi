<template>


      <!--------------- HEADER --------------->
     <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
      </li>

    </ul>


    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
   
      <li class="nav-item">
        <button class="nav-link btn" type="button" data-widget="control-sidebar"
         data-slide="true"  @click="submit">Logout</button>
      </li>
      <li class="nav-item">
        <a class="nav-link"  data-widget="control-sidebar"
         data-slide="true" href="#"><i class="fas fa-th-large"></i></a>
      </li>
    </ul>
  </nav> 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name:'Header',
  components: {
    ...mapGetters({
     isAuthenticated: 'auth/isAuthenticated'
    })
  },
  methods:{
    ...mapActions({
      logout: "auth/logout"
    }),
    submit(){
      this.logout();
      this.$router.replace({
        name: 'landing'
      })
    }
    
  }

}
</script>

<style>

</style>