import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            users: [{name: "Lucas Gomes", phone: "21965665513"}],
            openModal: false
        }
    },
    mutations:{
        openModal(state){
            state.openModal = true
        },
        closeModal(state){
            state.openModal = false
        },
        addUser(state, payload){
            state.users.push({name: payload.name, phone: payload.phone})
        }
    }
});

export default store;