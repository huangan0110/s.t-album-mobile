import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showTabbar: false,
    },
    mutations: {
        setShowTabbar(state, showTabbar) {
            state.showTabbar = showTabbar;
        }
    }
})