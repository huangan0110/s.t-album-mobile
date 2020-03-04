<template>
    <div class="featured-card">
        <div class="top" @click="openImg">
            <img v-lazy="imgSrc" />
        </div>
        <div class="bottom">
            <div class="option">
                <i class="van-icon van-icon-like-o likei" v-show="!likeIcon" @click="like"></i>
                <i
                    class="van-icon van-icon-like likei"
                    v-show="likeIcon"
                    @click="like"
                    style="color:#ff4b4b"
                ></i>
                <span class="likeNum">{{likeNum}}</span>
                <i class="van-icon van-icon-like-o viewi"></i>
                <span class="viewNum">{{viewNum}}</span>
                <i class="van-icon van-icon-like-o comi"></i>
                <span class="comNum">{{commentNum}}</span>
            </div>
            <div class="title">
                <span>{{title}}</span>
            </div>
            <div class="info">
                <span>by {{userName}}</span> ●
                <span>{{time}}</span> ●
                <span v-show="!showAttention">+关注</span>
                <span v-show="showAttention">已关注</span>
            </div>
            <div class="head">
                <img v-lazy="avatarSrc" />
            </div>
        </div>
        <van-popup
            v-model="showImg"
            position="bottom"
            :style="{ height: '100%' }"
            get-container="body"
            :duration="0.2"
        >
            <div style="width:100%;height:100%;overflow:hidden">
                <div class="img-bg" :style="{backgroundImage: 'url(' + bgSrc + ')'}"></div>
                <div class="img-content">
                    <i
                        class="van-icon van-icon-cross close"
                        @click="closeImg"
                        :class="{'hide-info':!showInfo}"
                    ></i>
                    <div class="img-swipe">
                        <van-swipe @change="onChange" :duration="300">
                            <van-swipe-item v-for="(item, index) in images" :key="index">
                                <img
                                    v-lazy="item.src"
                                    style="width:100%;height:100%;transition: linear 0.2s;"
                                    @click="hideInfo"
                                    @touchstart="min=true"
                                    @touchend="min=false"
                                    :class="{'min-img':min}"
                                />
                            </van-swipe-item>
                            <div
                                class="custom-indicator"
                                slot="indicator"
                                :class="{'hide-info':!showInfo}"
                            >{{ current + 1 }}/{{images.length}}</div>
                        </van-swipe>
                    </div>
                    <div class="pop-option" :class="{'hide-info':!showInfo}">
                        <i class="van-icon van-icon-like-o likei" @click="like"></i>
                        <span class="likeNum">{{likeNum}}</span>
                        <i class="van-icon van-icon-like-o viewi"></i>
                        <span class="viewNum">{{viewNum}}</span>
                        <i class="van-icon van-icon-like-o comi"></i>
                        <span class="comNum">{{commentNum}}</span>
                    </div>
                    <div class="title" :class="{'hide-info':!showInfo}">
                        <span>图片标题</span>
                    </div>
                    <div class="pop-info" :class="{'hide-info':!showInfo}">
                        <span>By {{userName}} &nbsp;&nbsp;<span style="font-size:10px;">●</span> &nbsp;&nbsp;{{time}}</span>
                    </div>
                    <div class="pop-avatar" :class="{'hide-info':!showInfo}">
                        <img :src="avatarSrc" >
                    </div>
                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
export default {
    data() {
        return {
            likeIcon: this.showLike,
            showImg: false,
            showInfo: true,
            bgSrc: "",
            current: 0,
            min:false,
            images: [
                {
                    src: require("../../../assets/img/固定图2.jpg")
                },
                {
                    src: require("../../../assets/img/固定图5.jpg")
                },
                {
                    src: require("../../../assets/img/xin.jpg")
                }
            ]
        };
    },
    props: {
        imgSrc: {
            type: String,
            default: require("./../../../assets/img/固定图2.jpg")
        },
        showLike: {
            type: Boolean,
            default: false
        },
        likeNum: {
            type: Number,
            default: 0
        },
        viewNum: {
            type: Number,
            default: 0
        },
        commentNum: {
            type: Number,
            default: 0
        },
        userName: {
            type: String,
            default: "用户名"
        },
        time: {
            type: String,
            default: "事件"
        },
        showAttention: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: "标题"
        },
        avatarSrc: {
            type: String,
            default: require("./../../../assets/img/default-avatar.png")
        }
    },
    mounted() {
        this.bgSrc = this.images[0].src;
    },
    methods: {
        like() {
            console.log("123");
            this.likeIcon = !this.likeIcon;
        },
        openImg() {
            this.showImg = true;
        },
        closeImg() {
            this.showImg = false;
        },
        onChange(index) {
            this.current = index;
            this.bgSrc = this.images[index].src;
        },
        hideInfo() {
            this.showInfo = !this.showInfo;
        },
        test() {
            console.log("123 ")
            this.min = true;
        }
    }
};
</script>

<style scoped lang="scss">
.min-img {
    width: 94%!important;
    height: 94%!important;
    margin-left: 3%;
}
.featured-card {
    background-color: #fff;
    margin-bottom: 10px;
    .top {
        img {
            width: 100%;
            height: auto;
            transition: linear 0.5s;
        }
    }
    .bottom {
        position: relative;
        display: inline-block;
        line-height: 24px;
        height: 82px;
        width: 100%;

        .option {
            position: relative;
            height: 30px;
            i {
                font-size: 20px;
                position: absolute;
                top: 1px;
            }
            .likei {
                left: 10px;
            }
            .viewi {
                left: 100px;
            }
            .comi {
                left: 190px;
            }
            span {
                margin-right: 10px;
                font-size: 14px;
                position: absolute;
            }
            .likeNum {
                left: 35px;
            }
            .viewNum {
                left: 125px;
            }
            .comNum {
                left: 215px;
            }
        }
        .title {
            font-size: 18px;
            font-weight: bold;
            height: 30px;
            display: inline;
            margin-left: 10px;
        }
        .info {
            font-size: 13px;
            margin-left: 10px;
            span:last-child {
                color: green;
            }
        }
        .head {
            position: absolute;
            right: 15px;
            top: 20px;
            img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
            }
        }
    }
}

.img-bg {
    background-color: #000;
    width: 100%;
    height: 100%;
    background-size: cover;
    -webkit-filter: blur(80px) grayscale(20%) brightness(70%);
    filter: blur(80px) grayscale(20%) brightness(70%);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    transition: 0.3s linear;
}
.img-content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;

    .close {
        font-size: 20px;
        color: #fff;
        position: absolute;
        top: 20px;
        left: 20px;
    }
    .img-swipe {
        margin-top: 200px;
        .custom-indicator {
            position: absolute;
            top: 5px;
            left: 5px;
            background-color: rgba(0, 0, 0, 0.1);
            color: #fff;
        }
    }
    .pop-option {
        position: absolute;
        top: 450px;
        left: 10px;
        height: 40px;
        transition: linear 0.1s;
        i {
            color: #fff;
            font-size: 26px;
            position: absolute;
        }
        .likei {
            left: 10px;
        }
        .viewi {
            left: 100px;
        }
        .comi {
            left: 190px;
        }
        span {
            position: absolute;
            color: #fff;
            font-size: 18px;
        }
        .likeNum {
            left: 40px;
        }
        .viewNum {
            left: 130px;
        }
        .comNum {
            left: 220px;
        }
    }
    .title {
        transition: linear 0.1s;
        position: absolute;
        top: 490px;
        left: 20px;
        height: 80px;
        color: #fff;
        font-size: 20px;
    }
    .pop-info {
        transition: linear 0.1s;
        position: absolute;
        top: 518px;
        left: 20px;
        color: #fff;
        font-size: 14px;
    }
    .hide-info {
        -webkit-filter: opacity(0%); /* Chrome, Safari, Opera */
        filter: opacity(0%);
    }
    .pop-avatar {
        position: absolute;
        top: 485px;
        right: 20px;
        img {
            width: 50px;
            height: 50px;
            border: 1px solid #fff;
            border-radius: 50%;
        }
    }
}
</style>