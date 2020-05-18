<template>
    <div class="attention-cell">
<!--        <img src="../../assets/img/fixed4.jpg">-->
        <van-image
            lazy-load
            fit="cover"
            :src="avatar"
        >
            <template v-slot:error>
                <img src="../../assets/img/default-avatar.png" alt="">
            </template>
        </van-image>
        <span class="user-name">{{nickName}}</span>
        <div class="user-info">
<!--            <span class="featured-span">{{}}精选</span>&nbsp;-->
            <span class="attention-span">{{attentionNum}}关注</span>&nbsp;
            <span class="fans-span">{{fanNum}}粉丝</span>
        </div>
<!--        <div class="attention-btn" @click.stop="test('2')">-->
<!--            关注-->
<!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "AttentionCell",
        props:{
            nickName:{
                type:String,
                default:""
            },
            id:{
                type:String,
                default:""
            },
            fanNum:{
                type:String,
                default:""
            },
            attentionNum:{
                type:String,
                default:""
            },
            avatar:{
                type:String,
                default:""
            },
        },
        mounted(){
            console.log(this.fanNum)
            // this.nickName = this.attention.nickName
        },
        data() {
            return {
            }
        },

        methods:{
            test(a) {
                console.log(a)
            }
        }
    }
</script>

<style scoped lang="scss">
.attention-cell {
    position: relative;
    height: 60px;
    width: 100%;
    transition: linear 0.1s;
    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        position: absolute;
        left: 20px;
        top: 10px;
    }
    .van-image {
        position: absolute;
        top: 0;
        letter-spacing: 10px;
    }
    .user-name{
        font-size: 14px;
        color: #323233;
        position: absolute;
        left: 80px;
        top: 10px;
    }
    .user-info {
        position: absolute;
        width: 240px;
        top: 32px;
        left: 80px;
        font-size: 12px;
        color: #999;
    }
    .attention-btn {
        width: 50px;
        height: 20px;
        border-radius: 10px;
        background-color: #008B45;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        position: absolute;
        right: 15px;
        top: 20px;
        color: #fff;
    }
}
.attention-cell:active {
    background-color: #eeeeee;
}
</style>
