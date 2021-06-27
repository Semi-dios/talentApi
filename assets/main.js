

import './scss/app.scss';
import 'bootstrap';
import bsCustomFileInput from 'bs-custom-file-input';



bsCustomFileInput.init();
import Vue from 'vue';
import App from './js/components/App';
import router from './js/router/main';
import store from './js/store/main'; 

import * as VeeValidate from 'vee-validate'


Vue.config.productionTip = false;
Vue.use(VeeValidate)

 new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#root');