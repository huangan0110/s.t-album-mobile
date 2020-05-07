<template>
    <div class="mine-featured-card">
        <div class="header">
            <img src="../../../assets/img/fixed5.jpg" alt="">
            <span class="user-name">用户名用户名几个字？</span>
            <span class="up-time">10天前</span>
<!--            <i class="van-icon van-icon-arrow-down option-btn" @click="showMore"></i>-->
            <span class="desc">描述描述描述描述描述描述</span>
        </div>
        <div class="content">
            <div class="img-box">
                <img :src="recData[0].imgSrc" alt="">
            </div>
            <div class="img-box" v-show="recData.length>1">
                <img :src="recData[1].imgSrc" alt="">
            </div>
            <div class="img-box" v-show="recData.length>2">
                <img :src="recData[2].imgSrc" alt="">
                <div class="more-pic" v-if="recData.length>3">
                    {{recData.length}}图
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-option">
                <i class="iconfont albumz-like"></i> <span>12</span>
            </div>
            <div class="bottom-option">
                <i class="iconfont albumpinglun2" style="font-size: 15px"></i> <span>1212</span>
            </div>
            <div class="bottom-option">
                <i class="iconfont albumicon" style="font-size: 16px"></i> <span>12</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MineFeaturedCard",
        data() {
            return {
                // showMoreOption:true
                recData: [
                    {
                        title: "假装在法国",
                        imgSrc: require("../../../assets/img/fixed4.jpg"),
                        like: true,
                        viewNum: 23,
                        commentNum: 3,
                        username: "mirsan",
                        attention: false,
                        time: "一天前",
                        avatarSrc: require("../../../assets/img/fixed1.jpg")
                    },
                    {
                        title: "假装在法国",
                        imgSrc: require("../../../assets/img/fixed4.jpg"),
                        like: true,
                        viewNum: 23,
                        commentNum: 3,
                        username: "mirsan",
                        attention: true,
                        time: "一天前",
                        avatarSrc: require("../../../assets/img/fixed1.jpg")
                    },
                    {
                        title: "假装在法国",
                        imgSrc: require("../../../assets/img/fixed4.jpg"),
                        like: true,
                        viewNum: 23,
                        commentNum: 3,
                        username: "mirsan",
                        attention: true,
                        time: "一天前",
                        avatarSrc: require("../../../assets/img/fixed1.jpg")
                    },
                    {
                        title: "假装在法国",
                        imgSrc: require("../../../assets/img/fixed4.jpg"),
                        like: true,
                        viewNum: 23,
                        commentNum: 3,
                        username: "mirsan",
                        attention: true,
                        time: "一天前",
                        avatarSrc: require("../../../assets/img/fixed1.jpg")
                    }
                ]
            }
        },
        created() {
            console.log(this.recData.length)
        },
        methods:{
            // showMore() {
            //     this.showMoreOption = true;
            //     console.log("12")
            // }
        },

    }
</script>

<style scoped lang="scss">
.mine-featured-card {
    width: calc(100% - 40px);
    margin: 0 10px;
    margin-top: 7px;
    position: relative;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #fff;
    .header {
        height: 75px;
        position: relative;
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
        }
        .user-name {
            position: absolute;
            left: 60px;
            top: 0;
            font-size: 13px;
        }
        .up-time {
            position: absolute;
            left: 60px;
            top: 22px;
            font-size: 11px;
            color: #999;
        }
        .option-btn {
            position: absolute;
            right: 15px;
            top: 15px;
        }
        .desc {
            position: absolute;
            left: 0px;
            bottom: 10px;
            font-size: 13px;
        }
    }
    .content {
        overflow: hidden;
        position: relative;
        border-radius: 5px;
        .img-box {
            width: 33%;
            height: 0px;
            padding-bottom: 33%;
            overflow:hidden;
            margin: 0;
            position:relative;
            float: left;
            margin-right: 0.5%;
            img {
                position:absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .img-box:last-child {
            margin-right: 0;
        }
        .more-pic {
            position: absolute;
            display: inline-block;
            width: 30px;
            height: 18px;
            line-height: 18px;
            text-align: center;
            right: 0;
            top: 0;
            background-color: rgba(0,0,0,0.3);
            color: #fff;
            font-size: 10px;
        }
    }
    .bottom {
        height: 30px;
        width: 100%;
        margin-top: 5px;
        line-height: 50px;
        .bottom-option {
            width: 33%;
            height: 30px;
            line-height: 40px;
            float: left;
            text-align: center;
            color: #999;
            span {
                font-size: 12px;
            }
        }
    }
}
</style>
