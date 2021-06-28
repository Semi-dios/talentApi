<template>
  <div class="wrapper" v-if="this.$route.meta.requiresAuth" >
    <Header></Header>
    <Sidebar/>
  <div class="content-wrapper" style="min-height: 956.3px;">

    <section class="content">
      <div class="row">
            <div class="col-sm-12">
                 <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>{{this.$route.name}}</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/dashboard">Index</router-link></li>
                            <li class="breadcrumb-item active">{{this.$route.name}}</li>
                            </ol>
                        </div>
                        </div>
                    </div>
                    </section>
                <router-view></router-view>
            </div>

      </div>

    </section>

  </div>
</div>
<div v-else>
    <router-view></router-view>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
export default {
    name: 'App',
    computed: {
        ...mapGetters({
            isLoading : "isLoading"
        })
    },
    components:{
        Header,
        Sidebar,
        Footer
    }
}
</script>

<style>

</style>