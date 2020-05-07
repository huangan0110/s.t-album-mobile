<template>
    <div class="sys-notice">
        <div class="sys-notice-header">
            <i class="iconfont albumzuojiantou" @click="$router.push('/notice')"></i>
            <span>系统通知</span>
        </div>
        <div class="sys-header"></div>
        <div class="sys-notice-content">
            <MsgCard></MsgCard>
            <MsgCard></MsgCard>
            <MsgCard></MsgCard>
            <MsgCard></MsgCard>
            <MsgCard></MsgCard>
            <MsgCard></MsgCard>
            <MsgCard></MsgCard>

        </div>
    </div>
</template>

<script>
    import MsgCard from "../../Common/MsgCard";
    export default {
        name: "SysNotice",
        components: {
            MsgCard
        }
    }
</script>

<style scoped lang="scss">
.sys-notice {
    .sys-notice-header {
        height: 50px;
        width: 100%;
        border-bottom: 0.5px solid #eee;
        position: fixed;
        top: 0;
        line-height: 52px;
        color: #666;
        z-index: 999;
        background-color: #fff;
        i {
            font-size: 26px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 15px;
        }
        span {
            position: absolute;
            left: 60px;
        }
    }
    .sys-header {
        height: 50px;
    }
}
</style>
