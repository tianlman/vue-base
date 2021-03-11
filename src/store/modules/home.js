const home = {
    namespaced: true,
    state: {
        test:1
    },
    mutations: {
        changeTest(state){
                state.test++
        }
    }
}

export default home
