<template>
    <div class="te-app">
        <input type="text" @input="handleChange">
        <span @click="handleClick">点击</span>
    </div>
</template>

<script>
export default {
    props:{

    },
    name: "One",
    data() {
        return {}
    },
    methods:{
        handleChange(e){
            console.log(e.target.value);
            this.$bus.$emit('sss',e.target.value)
        },
        handleClick(){
            let aa = Math.random()*100
            this.$emit('handleClick',aa)
        }
    },


}
</script>

<style   scoped>

</style>
