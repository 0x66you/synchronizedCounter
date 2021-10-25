const state = {
    counter:0
}

const getters = {
    counter(state){
        return state.counter
    }
}

const mutations = {
    Increment: (state,payload) => state.counter+= payload,
    Decrement: (state,payload) => state.counter-=payload
}

const actions = {
    increment: (context,payload) => context.commit('Increment',payload),
    decrement: (context,payload) => context.commit('Decrement',payload)
}

Vue.component('counter1',{
    template:'#counter1UI',
    computed:{
        ...Vuex.mapState(['counter']),

    },
    methods:{
        ...Vuex.mapActions(['increment','decrement'])
    }
})

Vue.component('counter2',{
    template:'#counter2UI',
    computed:{
        ...Vuex.mapState(['counter']),
    },
    methods:{
        ...Vuex.mapActions(['increment','decrement'])
    }
})

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

new Vue({
    el:'#app',
    store
})
