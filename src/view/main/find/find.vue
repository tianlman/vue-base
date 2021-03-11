<template>
    <div>
        find11111111111111
        <input type="text" v-model="num">
    </div>
</template>

<script>
export default {
    name: "find",
    data() {
        return {
            num:0
        }
    },
    methods:{

    },
    created() {
        // this.$store
        console.log(this.$store,'this.$store');
    },
    mounted() {

    },
    activated() {

    }
}
</script>

<style scoped>

</style>
