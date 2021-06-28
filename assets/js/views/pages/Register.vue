<template>
 <div class="container-fluid " id="viewRegister">
     <div class="row d-flex justify-content-center ">
         <div class="col-sm-12 ">
             <div class="custom-card card">
                        <div class="card-body register-card-body">
                        <p class="login-box-msg">Register</p>

                        <form  name="form" @submit.prevent="handleRegister" >
                            <div class="form-row">
                                  <div class="input-group col-sm-12 mb-3">
                                  <input type="text"
                                  class="form-control" name="name"
                                  v-model="data.name"
                                  v-validate="'required|min:3|max:20'"
                                  placeholder="Name">
                                  <div class="input-group-append">
                                      <div class="input-group-text">
                                      <span class="fas fa-user"></span>
                                      </div>
                                  </div>
                                  </div>
                                  <div class="input-group col-sm-12">
                                    <div
                                    v-if="submitted && errors.has('name')"
                                    class="custom-alert d-flex  custom-alert-danger">
                                        {{errors.first('name')}}
                                    </div>
                                  </div>
                            </div>
                            <div class="form-row">
                                  <div class="input-group col-sm-12 mb-3">
                                  <input type="email"
                                  class="form-control"
                                  placeholder="Email"
                                  v-model="data.email"
                                  v-validate="'required|email|max:50'"
                                  name="email"
                                  >
                                  <div class="input-group-append">
                                      <div class="input-group-text">
                                      <span class="fas fa-envelope"></span>
                                      </div>
                                  </div>

                                </div>

                                <div class="input-group col-sm-12">
                                     <div
                                      v-if="submitted && errors.has('email')"
                                      class="custom-alert d-flex  custom-alert-danger">
                                      {{errors.first('email')}}
                                  </div>
                                </div>
                            </div>
                            <div class="form-row">
                                    <div class="input-group col-sm-12 mb-3">
                                        <input type="password"
                                        class="form-control"
                                        placeholder="Password"
                                        v-model="data.password"
                                        ref="password"
                                        v-validate="'required|min:6|max:40'"
                                        name="password">
                                        <div class="input-group-append">
                                            <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="input-group col-sm-12">
                                         <div
                                            v-if="submitted && errors.has('password')"
                                            class="custom-alert  d-flex  custom-alert-danger">
                                            {{errors.first('password')}}
                                        </div>
                                    </div>
                            </div>

                          <div class="form-row">
                                    <div class="input-group mb-3 col-sm-12">
                                        <input   v-model="data.password_confirmation"
                                        v-validate="'required|confirmed:password'" vid="password" class="form-control" name="password_confirmation" type="password" placeholder="Confirmar contraseña" data-vv-as="password">
                                        <div class="input-group-append">
                                            <div class="input-group-text">
                                            <span class="fas fa-lock"></span>
                                            </div>
                                        </div>

                                        </div>
                                        <div class="input-group col-sm-12">
                                             <div
                                            v-if="submitted && errors.has('password_confirmation')"
                                            class="custom-alert d-flex custom-alert-danger">
                                            {{errors.first('password_confirmation')}}
                                            </div>
                                </div>
                          </div>
                         
                            <div class="row">
                            <div class="col-sm-12 mb-3">
                                <button type="submit" class="custom-btn custom-btn-primary d-flex justify-content-center">Register me</button>
                            </div>
                            <!-- /.col -->
                            </div>
                        </form>
                        <div class="row">
                            <div class="col-sm-12 mb-3">
                                <div class="custom-alert"
                                v-if="submitted "
                                :class="successful ? 'custom-alert-success':'custom-alert-danger'"
                                >{{message}}</div>

                            </div>
                            <div class="col-sm-12 text-center">
                                <a type="button" @click="viewLogin()" class="text-center">I already have an account  !</a>
                            </div>
                        </div>
                        </div>
                        <!-- /.form-box -->
                    </div><!-- /.card -->
         </div>
     </div>
 </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'Register',
    data(){
        return{
            data: {
                name: '',
                email: '',
                password: '',
                password_confirmation : '',
            },
            submitted: false,
            successful:false,
            message: '',
        
        };
    },
    computed:{

    },
  
    methods: {
        ...mapActions(
           {
               register: 'auth/register'
           }
        ),
        viewLogin(){
        this.title = 'Iniciar Sesión';
        var  show=  true;
        this.$emit('viewShowI', `${this.title}`, show);
      },
        handleRegister() {

        this.message = '';
        this.submitted = true;

        this.$validator.validate().then(isValid => {
            if(isValid) {
                this.submit();
            }
        });
        },
        submit(){
            let dataForm = {
                'name': this.data.name,
                'email':this.data.email,
                'password': this.data.password
            }

            this.register(dataForm)
            .then(()=>{
                console.log("finished");
                 this.successful= true,
                  this.message = 'User registered';
            })
            .catch((e)=>{
                 
                  this.message = e;
            } )
        }
 
       
    }
}
</script>

<style>

</style>
