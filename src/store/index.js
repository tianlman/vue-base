import Vue from 'vue'
import Vuex from 'vuex'
import home from "@/store/modules/home";
import me from "@/store/modules/me";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    modules: {
        home,
        me,
    },
    getters:{

    },
    mutations:{

    }
})
export default store
