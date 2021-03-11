<template>
    <div>
        <span @click="$router.push({path: '/view/me',})">me</span>
        <span @click="$router.push({path:'/view/find',})">find</span>
        <div v-bgcolor="{'color':'red'}">
            111111111
        </div>
        <One @handleClick="handleClick"/>
        <Two/>
    </div>
</template>

<script>
import One from "@/components/one/index";
import Two from "@/components/two/index";

export default {
    name: "home",
    components: {
        One,
        Two,
    },
    methods: {
        goTo() {
            this.$router.push({
                path: "",
            });
        },
        handleClick(a) {
            console.log(a, '111111111121');
        }
    },
};
</script>

<style scoped>
</style>
