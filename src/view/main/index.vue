<template>
    <app-page :isShowTitleBar="false" id="mainIndex" :isScroll="false">
     <!--   <template #default>
            <router-view/>
        </template>
        <template #bottom>
            <van-tabbar v-model="active" active-color="#00c183" replace>
                <van-tabbar-item icon="home-o" replace :to="getPath('/main/home')">
                    {{ isParent ? "首页" : "校园" }}
                    <template #icon>
                        <img src="../../assets/image/bottomIcon/ic_home_normal.png" alt v-show="active !== 0"
                             v-if="isParent">
                        <img src="../../assets/image/bottomIcon/ic_home_choose.png" alt v-show="active === 0"
                             v-if="isParent">

                        <img src="../../assets/image/bottomIcon/ic_school_normal.png" alt v-show="active !== 0"
                             v-if="!isParent">
                        <img src="../../assets/image/bottomIcon/ic_school_choose.png" alt v-show="active === 0"
                             v-if="!isParent">
                    </template>
                </van-tabbar-item>

                <van-tabbar-item icon="friends-o" replace :to="getPath('/main/message')">
                    {{ $t('main.message') }}
                    <template #icon>
                        <img src="../../assets/image/bottomIcon/ic_message_normal.png" alt v-show="active !== 1">
                        <img src="../../assets/image/bottomIcon/ic_message_choose.png" alt v-show="active === 1">
                    </template>
                </van-tabbar-item>
                <van-tabbar-item icon="search" replace :to="getPath('/classes')"
                                 v-show="!$roleType.ROLE_TYPE_PARENT && !$roleType.ROLE_TYPE_GUARD">
                    班级
                    <template #icon>
                        <img src="../../assets/image/bottomIcon/ic_classes_normal.png" alt v-show="active !== 2">
                        <img src="../../assets/image/bottomIcon/ic_classes_choose.png" alt v-show="active === 2">
                    </template>
                </van-tabbar-item>
                <van-tabbar-item icon="setting-o" replace :to="getPath('/main/user')">
                    {{ $t('main.user') }}
                    <template #icon>
                        <img src="../../assets/image/bottomIcon/ic_user_normal.png" alt v-show="active !== 3">
                        <img src="../../assets/image/bottomIcon/ic_user_choose.png" alt v-show="active === 3">
                    </template>
                </van-tabbar-item>
            </van-tabbar>
        </template>-->
    </app-page>
</template>

<script>
import appPage from "@/components/appPage";
export default {
    name: "index",
    data(){

    },
    component: {
        appPage,
    }
}
</script>

<style scoped>

</style>
