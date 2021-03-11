<template>
    <div class="te-app">
        <div @click="aaaa">aaaaaaaaa</div>
        {{aa}}
    </div>
</template>

<script>
export default {
    props: {
        handleClick:{
            type:Function,
            default:()=>{}
        }
    },
    name: "Two",
    data() {
        return {
            aa:''
        }
    },
    methods:{
        aaaa(){

        }
    },
    created() {
        // console.log(this.$bus);
        //组件间通信
        this.$bus.$on('sss',(a)=>{
            this.aa = a
        })
    }

}
</script>

<style   scoped>

</style>
