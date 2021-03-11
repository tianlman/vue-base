<template>
    <div>
        me111111111111111
        <input type="text" v-model="msg" @input="changeInput">
        <span>{{ text }}</span>
    </div>
</template>

<script>
export default {
    name: "me",
    data() {
        return {
            msg: '',
            text: ''
        }
    },
    methods: {
        changeInput(e) {
            this.$store.commit('me/changeMsg', e.target.value)
            this.text = this.$store.state.me.msg
        }
    },
    created() {

    },
    mounted() {
        let mag = this.$store.state.me.msg
        this.msg = mag
        console.log(this.$store.state, 'this.$store.state');
    },
    activated() {
        let mag = this.$store.state.me.msg
        this.msg = mag
        console.log(this.$store.state, 'activated');
    }

}
</script>

<style scoped>

</style>
