<template>
  <div>
    <h3>Dashboard {{user}} {{token}}</h3>

    <button @click="submit()">
      Data
    </button>
  </div>
  
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters({
      user: 'auth/getUser',
      token: 'auth/getToken'
    })
  },
  methods: {
    ...mapActions(
        {
            index: 'auth/index'
        }
    ),
     async submit(){
         try {
             await this.index()
             .then((response)=>{
                    this.successful = true;             
                     this.message = 'Loading ..  !';
                     console.log(response)
             })  

         }catch(error) {
               this.message = error.message;
                console.log(error);
                this.successful = false;
         }
     } 
  },
  data(){
    return {
     
    }
  },
 created(){
   
  }
}
</script>

<style>

</style>