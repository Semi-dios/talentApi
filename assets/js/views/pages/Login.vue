<template>
<div class="modal fade show " id="modalLogin"  aria-modal="true" role="dialog" style="display:block">
        <div class="modal-dialog custom-modal-dialog">
          <div class="modal-content custom-modal-content">
            <div class="modal-header custom-modal-header">
               <div class="custom-card text-center">
                       <div class="custom-card-header">
                           <h4 class="card-title custom-card-title">{{this.title}}</h4>
                              <button type="button" class="close" data-dismiss="modal"   @click="showModal()"  aria-label="Close">
                            <span aria-hidden="true" class="fas fa-times"></span>
                        </button>

                       </div>
                        <div class="social-line custom-card-body">
                          <a href="#pablo" class="custom-btnic btn-just-icon custom-btnic-primary btn-link">
                           <i class="fab fa-facebook-square"></i>
                          </a>
                          <a href="#pablo" class="custom-btnic btn-just-icon custom-btnic-primary btn-link">
                           <i class="fab fa-github-square"></i>
                          </a>
                          <a href="#pablo" class="custom-btnic btn-just-icon custom-btnic-primary btn-link">
                         <i class="fab fa-google-plus-square"></i>
                          </a>
                        </div>
                    </div>
            </div>
            <div class="modal-body">
                    <div class="container-fluid " id="viewLogin" v-if="show">
                        <div class="row m-0 justify-content-center d-flex align-content-center align-items-lg-center ">
                            <div class="col-sm-12">



                                    <!-- /.login-logo -->
                                    <div class="card custom-card">
                                        <div class="card-body login-card-body" >
                                        <h5 class="login-box-msg">Sing In</h5>

                                        <form name="form" @submit.prevent="handlelogin" >

                                            <div class="form-row">
                                                <div class="input-group col-sm-12 mb-3">
                                                    <input type="email" class="form-control" name="email" v-validate="'required'" v-model="data.email" placeholder="Email">
                                                    <div class="input-group-append">
                                                        <div class="input-group-text">
                                                        <span class="fas fa-envelope"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="input-group col-sm-12">
                                                    <div class="custom-alert d-flex custom-alert-danger" v-if="errors.has('email')" role="danger">Email  required</div>
                                                </div>
                                            </div>

                                            <div class="form-row">
                                                <div class="input-group col-sm-12 mb-3">
                                                        <input type="password" class="form-control" name="password" v-validate="'required'" v-model="data.password" placeholder="Password">
                                                        <div class="input-group-append">
                                                            <div class="input-group-text">
                                                            <span class="fas fa-lock"></span>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="input-group col-sm-12">
                                                        <div class="custom-alert d-flex custom-alert-danger" v-if="errors.has('password')" role="danger">Password required</div>
                                                </div>
                                            </div>
                                                <div class="input-group col-sm-12 mb-3">
                                                    <div v-if="message" class="custom-alert  d-flex custom-alert-danger" role="alert">{{message}}</div>
                                                </div>
                                        <div class="row">
                                        <!--  <div class="col-6">
                                                <div class="icheck-primary">
                                                <input type="checkbox" id="remember">
                                                <label for="remember">
                                                    Recordarme
                                                </label>
                                                </div>
                                            </div>  -->
                                            <!-- /.col -->
                                            <div class="col-sm-12 mb-2 ">
                                                <button type="submit" :disabled="isLoggin" :loading="isLoggin"  class="d-flex custom-btn custom-btn-primary justify-content-center">{{isLoggin ? 'Iniciando' : 'Iniciar Sesión'}}</button>
                                            </div>
                                            <!-- /.col -->
                                            </div>
                                        </form>
                                        <div class="row">
                                            <div class="col-sm-12 d-flex justify-content-between">
                                                <p class="mb-1">
                                                    <a href="/#/forgot">¿Forgot Password?</a>
                                                </p>
                                                <p class="mb-0">
                                                    <a type="button" @click="viewShow('Registro',false)" class="text-center">Register me</a>
                                                </p>
                                            </div>
                                        </div>
                                        </div>
                                        <!-- /.login-card-body -->
                                    </div>

                            </div>
                    </div>
                     </div>
                        <viewRegister  v-on:viewShowI="viewShow" v-else> </viewRegister>
            </div>

          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>


</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import viewRegister from './Register.vue';
import * as VeeValidate from 'vee-validate'
export default {
    name: 'Login',
    components: {
        viewRegister,
        VeeValidate
    },
    data(){
        return {
        data: {
                email: '',
                password: ''
        },
        isLoggin: false,
        message: '',
        title: 'Sing In',
        show:  true
        }
    },
computed: {

},
created(){

},
methods: {
    ...mapActions(
        {
            login: 'auth/login'
        }
    ),

    viewShow(data, show){
        console.log(data)
        this.title =  data;
        this.show= show;

    },
    showModal(){
        const modalLogin = document.getElementById('modalLogin');
        modalLogin.style.display = 'none';
        
    },
     handlelogin() {
      this.$isLoggin = true;
       this.$validator.validateAll().then(isValid =>  {
         if(!isValid) {
            this.$isLoggin = false;
           return;
         }
        if (this.data.email && this.data.password) {
              this.submit();
        }

       })

     },
     async submit(){
            let dataForm = {
                'email':this.data.email,
                'password': this.data.password
            }

         try {
             await this.login(dataForm)
             .finally(()=>{

                    this.successful = true;
                    this.$router.push(
                     {
                         name: 'dashboard'
                     }
                    )   
                     this.message = 'Loading ..  !';
             })  

         }catch(error) {
               this.message = error.message;
                console.log(error);
                this.successful = false;
         }
     } 

},

mounted(){

}
}
</script>

<style>

</style>


