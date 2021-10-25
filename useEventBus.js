const eventBus = new Vue({
    data:{
        counter:0
    }
})

Vue.component('counter1',{
    template:'#counter1UI',
    computed:{
        counter(){
            return eventBus.counter
        }
    },
    methods:{
        increment(step){
            eventBus.$emit('increment',step)
        },
        decrement(step){
            eventBus.$emit('decrement',step)
        }
    }
})

Vue.component('counter2',{
    template:'#counter2UI',
    computed: {
        counter(){
            return eventBus.counter
        }
    },
    methods:{
        increment(step){
            eventBus.$emit('increment',step)
        },
        decrement(step){
            eventBus.$emit('decrement',step)
        }
    }
})

new Vue({
    el:'#app',
    created(){
        eventBus.$on('increment',value=>{
            eventBus.counter += value
        })
        eventBus.$on('decrement',value=>{
            eventBus.counter -= value
        })
    }
})
