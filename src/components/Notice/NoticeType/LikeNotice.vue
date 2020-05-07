<template>
    <div class="like-notice">
        <div class="like-notice-header">
            <i class="iconfont albumzuojiantou" @click="$router.push('/notice')"></i>
            <span>点赞通知</span>
        </div>
        <div class="like-header"></div>
        <div class="like-notice-content">
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
        name: "LikeNotice",
        components: {
            MsgCard
        }
    }
</script>

<style scoped lang="scss">
    .like-notice {
        .like-notice-header {
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
        .like-header {
            height: 50px;
        }
    }
</style>
