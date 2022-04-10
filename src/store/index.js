import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            avatar:'',
            fullName:'',
            age: 0,
            beer:'',
        }
    },
    actions:{},
    mutations: {},
    getters: {}
});

export default store;