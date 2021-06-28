import store from './main';
import axios from 'axios'

export default {
    namespaced: true,
    state:{

    },
    getters:{ 

    },
    mutations:{

    },
    actions:{
        async register(_,form) {
            store.commit('setLoading',true)
            return await axios.post('/register', form)
            .then((response)=>{
                store.commit('setLoading',false)
            })
            .catch((e)=>{
                store.commit('setLoading',false)
                console.log(e)
            })
        }
    }

}