const state = {
    siteName:''
}

const mutations = {
    setSiteName(state,{name}){
        state.siteName = name
    }
}

export default {
    namespaced:true,
    state,
    mutations,
}