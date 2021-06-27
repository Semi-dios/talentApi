import Vue from 'vue';
import App from './js/components/App';
import router from './js/router/main';
import store from './js/store/main';


Vue.config.productionTip = false;

 new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#root');