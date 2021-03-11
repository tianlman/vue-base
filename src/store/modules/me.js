const me = {
    namespaced: true,
    state: {
        msg:'vuex'
    },
    mutations: {
        changeMsg(state,data){
            state.msg=data
        }
    }
}

export default me

