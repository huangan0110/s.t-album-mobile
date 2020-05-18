<template>
    <div class="msg-card">
        <div class="msg-user">
            <img src="../../assets/img/fixed4.jpg" alt="">
            <span class="msg-user-name">{{msgData.sender.nickName}}</span>
            <span class="msg-time">{{msgData.createTime}}</span>
        </div>
        <div class="msg-option">评论了你的分享</div>
        <div class="msg-info">
            @你
            <p>{{msgData.comment}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MsgCard",
        props:{
            msgData:{
                type:Object,
                default:{},
            },
            isComment:{
                type: Boolean,
                default: false
            },
        },
        mounted() {
            console.log(this.msgData)
        }
    }
</script>

<style scoped lang="scss">
.msg-card {
    padding: 10px 20px;
    width: calc(100% - 40px);
    .msg-user {
        position: relative;
        height: 40px;
        img {
            width: 30px;
            height: 30px;
            border-radius: 50%;
            object-fit: cover;
            position: absolute;
            top: 5px;
        }
        .msg-user-name {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 12px;
            left: 40px;
            color: #666;
        }
        .msg-time {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 12px;
            right: 0px;
            color: #666;
        }
    }
    .msg-option {
        font-size: 13px;
        padding: 5px 0;
    }
    .msg-info {
        width: calc(100% - 10px);
        padding: 10px 5px 3px 5px;
        background-color: #efefef;
        border-radius: 10px;
        font-size: 12px;
        color: #333;
        p {
            margin-top: 10px;
        }
    }

}
</style>
