<template>
    <div class="attention-cell" @click="viewUser">
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
        props: {
            nickName: {
                type: String,
                default: ""
            },
            id: {
                type: Number,
                default: ""
            },
            fanNum: {
                type: Number,
                default: ""
            },
            attentionNum: {
                type: Number,
                default: ""
            },
            avatar: {
                type: String,
                default: ""
            },
            isAttention: {
                type: Boolean,
                default: false
            },
        },
        mounted() {
            console.log(this.fanNum)
            // this.nickName = this.attention.nickName
        },
        data() {
            return {}
        },
        methods: {
            test(a) {
                console.log(a)
            },
            viewUser() {
                console.log(this.id)
                this.$router.push({
                    path: '/other',
                    query: {
                        data: {
                            id: this.id,
                            userResource: {
                                fanNum: this.fanNum,
                                attentionNum: this.attentionNum,
                            },
                            nickName: this.nickName,
                            isAttention: this.isAttention
                        }
                    }
                })
            },
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

        }

        .van-image {
            position: absolute;
            height: 40px;
            width: 40px;
            letter-spacing: 10px;
        }

        > > > .van-image__error, .van-image__loading {
            left: 20px;
            top: 10px;
            border-radius: 50%;
        }

        > > > .van-image__img {
            left: 20px !important;
            top: 10px !important;
            position: absolute !important;
            height: 40px !important;
            width: 40px !important;
            border-radius: 50%;

        }

        .user-name {
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
