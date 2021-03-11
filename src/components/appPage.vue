<template>
    <div class="te-app">
        <div class="te-app-head">
            <!--      <TitleBar :title="title" v-if="!$slots.head" :is-white="isWhiteTitle" :is-border="titleBorder" :left-arrow="isReturnButton" :is-back="isBack"-->
            <!--                @leftOnClick="$emit('leftOnClick')">-->
            <!--        <template #left>-->
            <!--          <slot name="left"/>-->
            <!--        </template>-->
            <!--        <template #right>-->
            <!--          <slot name="rightIcon" />-->
            <!--        </template>-->
            <!--      </TitleBar>-->
            <!--      <slot name="head" v-if="$slots.head"/>-->
        </div>
        <div class="te-app-body">
            <slot/>
        </div>
        <div class="te-app-bottom">  
            <slot name="bottom"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isScroll: {
            type: Boolean,
            default: false
        }
    },
    name: "appPage",
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.te-app {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    overflow: hidden;
    .te-app-head {
        background-color: white;
    }
    .te-app-body {
        flex: 1;
        overflow-y: hidden;
        height: 100%;
    }
}
</style>
