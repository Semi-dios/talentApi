

import './scss/app.scss';
import 'bootstrap';
require('admin-lte')
import bsCustomFileInput from 'bs-custom-file-input';

import axios from 'axios'



bsCustomFileInput.init();
import Vue from 'vue';
import App from './js/components/App';
import router from './js/router/main';
import store from './js/store/main'; 

import * as VeeValidate from 'vee-validate'


Vue.config.productionTip = false;
//axios.defaults.baseURL = 'http:127.0.0.1:8000/api'
Vue.use(VeeValidate)
Vue.use(axios)


require('./js/store/subscriber')


 new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#root');