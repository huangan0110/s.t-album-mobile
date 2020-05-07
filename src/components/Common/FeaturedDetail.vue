<template>
    <div class="featured-detail">
        <div class="featured-detail-header">
            <i class="iconfont albumzuojiantou" @click="$router.push('/featured')"></i>
            <span>精选</span>
        </div>
        <div style="height: 50px"></div>
        <div class="featured-detail-content">
            <div class="" ref="fDetail">
                <div class="user-cell" @click="test('1')">
                    <img src="../../assets/img/fixed4.jpg">
                    <span class="user-name">用户名</span>
                    <div class="user-info">
                        <span class="time-span">17小时前</span>&nbsp;
                    </div>
                    <div class="attention-btn" @click.stop="test('2')">
                        已关注
                    </div>
                </div>
                <div class="desc-cell">
                    经验加三，告辞。经验加三，告辞。经验加三，告辞。经验加三，告辞。经验加三，告辞。经验加三，告辞。
                </div>
                <div class="img-cell clearfix">
                    <ul>
                        <li v-for="(item,index) in photoArray" :key="index" @click="viewPhoto(index,item.id)">
                            <!--                    <img :src="item.imgSrc">-->
                            <van-image
                                width="100%"
                                height="100%"
                                lazy-load
                                fit="cover"
                                :src="item.imgSrc"
                            />
                        </li>
                    </ul>
                </div>
            </div>
            <div style="height: 10px;background-color:#eee;"></div>
            <div class="like-comment-tab">
                <div class="tab11">
                    <van-tabs v-model="active" sticky offset-top="50" @scroll="tabScroll">
                        <van-tab title="赞 55">
                            <div class="like-tab-item">
                                <div class="like-user-cell">
                                    <div class="like-user-avatar">
                                        <van-image
                                            round
                                            width="100%"
                                            height="100%"
                                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                                            lazy-load
                                            fit="cover"
                                        />
                                    </div>
                                    <div class="like-user-name">
                                        用户名用户名
                                    </div>
                                </div>
                                <div class="like-user-cell">
                                    <div class="like-user-avatar">
                                        <van-image
                                            round
                                            width="100%"
                                            height="100%"
                                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                                            lazy-load
                                            fit="cover"
                                        />
                                    </div>
                                    <div class="like-user-name">
                                        用户名用户名
                                    </div>
                                </div>
                                <div class="like-user-cell">
                                    <div class="like-user-avatar">
                                        <van-image
                                            round
                                            width="100%"
                                            height="100%"
                                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                                            lazy-load
                                            fit="cover"
                                        />
                                    </div>
                                    <div class="like-user-name">
                                        用户名用户名
                                    </div>
                                </div>
                                <div class="like-user-cell">
                                    <div class="like-user-avatar">
                                        <van-image
                                            round
                                            width="100%"
                                            height="100%"
                                            src="https://img.yzcdn.cn/vant/cat.jpeg"
                                            lazy-load
                                            fit="cover"
                                        />
                                    </div>
                                    <div class="like-user-name">
                                        用户名用户名
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                        <van-tab title="回复 178">
                            <div class="comment-tab-item" ref="commentTab" id="commentTab">
                                <div class="msg-card">
                                    <div class="msg-user">
                                        <img src="../../assets/img/fixed4.jpg" alt=""><span
                                        class="msg-user-name">用户名用户1</span>
                                        <span class="msg-time">4天前</span>
                                    </div>
                                    <div class="msg-info">
                                        @用户名用户名
                                        <p>12312312321</p>
                                    </div>
                                </div>
                                <div class="msg-card">
                                    <div class="msg-user">
                                        <img src="../../assets/img/fixed4.jpg" alt=""><span
                                        class="msg-user-name">用户名用户1</span>
                                        <span class="msg-time">4天前</span>
                                    </div>
                                    <div class="msg-info">
                                        @用户名用户名
                                        <p>12312312321</p>
                                    </div>
                                </div>
                                <div class="msg-card">
                                    <div class="msg-user">
                                        <img src="../../assets/img/fixed4.jpg" alt=""><span
                                        class="msg-user-name">用户名用户1</span>
                                        <span class="msg-time">4天前</span>
                                    </div>
                                    <div class="msg-info">
                                        @用户名用户名
                                        <p>12312312321</p>
                                    </div>
                                </div>
                                <div class="msg-card">
                                    <div class="msg-user">
                                        <img src="../../assets/img/fixed4.jpg" alt=""><span
                                        class="msg-user-name">用户名用户1</span>
                                        <span class="msg-time">4天前</span>
                                    </div>
                                    <div class="msg-info">
                                        @用户名用户名
                                        <p>12312312321</p>
                                    </div>
                                </div>
                                <div class="msg-card">
                                    <div class="msg-user">
                                        <img src="../../assets/img/fixed4.jpg" alt=""><span
                                        class="msg-user-name">用户名用户1</span>
                                        <span class="msg-time">4天前</span>
                                    </div>
                                    <div class="msg-info">
                                        @用户名用户名
                                        <p>12312312321</p>
                                    </div>
                                </div>
                                <div class="msg-card">
                                    <div class="msg-user">
                                        <img src="../../assets/img/fixed4.jpg" alt=""><span
                                        class="msg-user-name">用户名用户1</span>
                                        <span class="msg-time">4天前</span>
                                    </div>
                                    <div class="msg-info">
                                        @用户名用户名
                                        <p>12312312321</p>
                                    </div>
                                </div>
                                <div class="msg-card">
                                    <div class="msg-user">
                                        <img src="../../assets/img/fixed4.jpg" alt=""><span
                                        class="msg-user-name">用户名用户1</span>
                                        <span class="msg-time">4天前</span>
                                    </div>
                                    <div class="msg-info">
                                        @用户名用户名
                                        <p>12312312321</p>
                                    </div>
                                </div>
                                <div class="msg-card">
                                    <div class="msg-user">
                                        <img src="../../assets/img/fixed4.jpg" alt=""><span
                                        class="msg-user-name">用户名用户1</span>
                                        <span class="msg-time">4天前</span>
                                    </div>
                                    <div class="msg-info">
                                        @用户名用户名
                                        <p>12312312321</p>
                                    </div>
                                </div>
                            </div>
                        </van-tab>
                    </van-tabs>
                </div>
                <span class="viewNUm" ref="viewNum" :class="{'scroll-view-num':isScTop}">浏览</span>
            </div>
        </div>
        <div class="featured-detail-bottom" v-show="!isWriteComment">
            <i class="iconfont albumpinglun2 wc-i" @click="writeComment"></i><span class="wc-span" @click="writeComment">写回复</span>
            <i class="iconfont albumpinglun1 c-i" @click="goAnchor"></i><span class="c-num">12</span>
            <i class="iconfont albumz-like l-i"></i><span class="l-num">12</span>
        </div>
        <van-image-preview v-model="seePhoto" :images="imgSrcArr" @change="onChange" @closed="onClose" closeable
                           swipe-duration="300">
            <template v-slot:index>{{ index }}/{{photoArray.length}}</template>
            <template v-slot:cover>
                <div class="viewPhoto-bg" :style="bacImage">
                </div>
            </template>
        </van-image-preview>
        <van-popup
            v-model="isWriteComment"
            position="bottom"
            round
            :style="{ height: '220px' }"
        >
            <div style="height:26px;line-height: 26px;width: 100%;margin-top:20px;font-size: 13px">
                <span style="float: left;margin-left: 20px;color: #666">回复</span>
                <span style="float: right;margin-right: 20px;color: #1989fa" @click="submitComment">发布</span>
            </div>
            <van-field
                v-model="message"
                rows="5"
                type="textarea"
                placeholder="@用户名用户名用户名："
                show-word-limit
            />
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: "FeaturedDetail",
        data() {
            return {
                photoArray: [
                    {
                        imgSrc: require("./../../assets/img/fixed2.jpg"),
                        id: 1
                    },
                    {
                        imgSrc: require("./../../assets/img/fixed4.jpg"),
                        id: 2
                    },
                    {
                        imgSrc: require("./../../assets/img/fixed2.jpg"),
                        id: 3
                    },
                    {
                        imgSrc: 'http://39.105.137.236/group1/M00/00/00/J2mJ7F6kAHuANI8kAAZzxYDyrIU172.jpg',
                        id: 4
                    },
                    {
                        imgSrc: require("./../../assets/img/fixed2.jpg"),
                        id: 5
                    },
                    {
                        imgSrc: require("./../../assets/img/fixed4.jpg"),
                        id: 6
                    },
                    {
                        imgSrc: 'http://39.105.137.236/group1/M00/00/00/J2mJ7F6kAHuANI8kAAZzxYDyrIU172.jpg',
                        id: 7
                    },
                    {
                        imgSrc: require("./../../assets/img/fixed2.jpg"),
                        id: 8
                    },
                    {
                        imgSrc: 'http://39.105.137.236/group1/M00/00/00/J2mJ7F6kAHuANI8kAAZzxYDyrIU172.jpg',
                        id: 9
                    }
                ],
                active: 1,
                imgSrcArr: [],
                idArr: [],
                index: 0,
                seePhoto: false,
                bacImage: {
                    backgroundImage: "",
                },
                isScTop: false,
                timer:"",
                isWriteComment:false,
                message:""
            }
        },
        beforeDestroy() {
            clearInterval(this.timer);
        },
        methods: {
            viewPhoto(index, id) {
                let prevArr = [];
                let nextArr = [];
                this.index = this.photoArray[index].id;
                for (let i = 0; i < this.photoArray.length; i++) {
                    if (i < index) {
                        prevArr.push(this.photoArray[i]);
                    } else {
                        nextArr.push(this.photoArray[i]);
                    }
                }
                nextArr.push.apply(nextArr, prevArr);
                for (let i = 0; i < nextArr.length; i++) {
                    this.imgSrcArr.push(nextArr[i].imgSrc);
                    this.idArr.push(nextArr[i].id)
                }
                this.bacImage.backgroundImage = "url(" + this.imgSrcArr[id] + ") "
                this.seePhoto = true;
            },
            onChange(index) {
                this.index = this.idArr[index];
                this.bacImage.backgroundImage = "url(" + this.imgSrcArr[index] + ") "
            },
            onClose() {
                this.imgSrcArr = [];
            },
            goAnchor() {
                let top = document.documentElement.scrollTop;
                let height = this.$refs.fDetail.offsetHeight;


                if(this.active == 0) {
                    console.log("121")
                    this.active = 1;
                    setTimeout(() =>{
                        let timeCount =0;
                        this.timer = setInterval(()=>{
                            timeCount++;
                            let scrollPosition = top - (top-height-20)/30*timeCount;
                            document.documentElement.scrollTop = scrollPosition;
                            console.log(timeCount)
                            if(timeCount == 30) {
                                clearInterval(this.timer);
                            }
                        }, 1);
                    },300);
                }else{
                    let timeCount =0;
                    this.timer = setInterval(()=>{
                        timeCount++;
                        let scrollPosition = top - (top-height-20)/30*timeCount;
                        document.documentElement.scrollTop = scrollPosition;
                        console.log(timeCount)
                        if(timeCount == 30) {
                            clearInterval(this.timer);
                        }
                    }, 1);
                }
            },
            tabScroll(back) {
                if (back.isFixed) {
                    this.isScTop = true;
                } else {
                    this.isScTop = false;
                }
            },
            writeComment() {
                this.isWriteComment = true;
            },
            submitComment() {
                this.isWriteComment = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .featured-detail {
        position: absolute;

        > > > .van-image-preview__overlay {
            background-color: rgba(0, 0, 0, 1);
        }

        > > > .van-swipe {
            z-index: 9999 !important;
        }
        >>> .van-field__control {
            font-size: 12px;
        }
        .viewPhoto-bg {
            width: 100%;
            height: 100%;
            background-size: cover;
            filter: blur(45px) brightness(0.7);;
            transition: linear 0.3s;
            webkit-transform: translateZ(0);
            -moz-transform: translateZ(0);
            -ms-transform: translateZ(0);
            -o-transform: translateZ(0);
            transform: translateZ(0);
        }

        > > > .van-image-preview__cover {
            width: 100%;
            height: 100%;
        }

        .featured-detail-header {
            height: 50px;
            width: 100%;
            border-bottom: 0.5px solid #eee;
            position: fixed;
            top: 0;
            line-height: 50px;
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

        .featured-detail-content {
            background-color: #fff;

            .user-cell {
                position: relative;
                height: 60px;
                width: 100%;
                transition: linear 0.1s;

                img {
                    height: 34px;
                    width: 34px;
                    border-radius: 50%;
                    position: absolute;
                    left: 14px;
                    top: 14px;
                }

                .user-name {
                    font-size: 13px;
                    color: #323233;
                    position: absolute;
                    left: 62px;
                    top: 14px;
                }

                .user-info {
                    position: absolute;
                    width: 100px;
                    top: 34px;
                    left: 62px;
                    font-size: 10px;
                    color: #999;
                }

                .attention-btn {
                    width: 56px;
                    height: 24px;
                    border-radius: 12px;
                    background-color: #008B45;
                    line-height: 24px;
                    text-align: center;
                    font-size: 10px;
                    position: absolute;
                    right: 15px;
                    top: 20px;
                    color: #fff;
                }
            }

        }

        .desc-cell {
            padding: 8px 14px;
            font-size: 13px;
            color: #333;
        }

        .img-cell {
            width: calc(100% - 28px);
            margin: 10px auto;
            padding-bottom: 20px;

            ul {
                list-style: none;

                li {
                    float: left;
                    width: 32%;
                    height: 32vw;
                    margin-right: 1.8vw;
                    margin-bottom: 1.8vw;
                    position: relative;
                    border-radius: 10px;
                    overflow: hidden;
                }

                li:nth-child(3n) {
                    margin-right: 0;
                }
            }
        }

        .like-comment-tab {
            position: relative;
            height: 45px;
            background-color: #fff;

            .tab11 {
                width: 100%;
                background-color: #eee;
            }

            .viewNUm {
                position: absolute;
                right: 30px;
                font-size: 12px;
                color: #666666;
                top: 50%;
                transform: translateY(-50%);
            }

            .scroll-view-num {
                position: fixed;
                top: 71px;
                z-index: 999;
            }

            > > > .van-tab {
                font-size: 12px;
            }

            > > > .van-tabs__line {
                width: 15px !important;
            }

            > > > .van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
                border: none;
            }

            > > > .van-tabs__nav--line {
                width: 140px;
            }

            > > > .van-tabs__wrap {
                background-color: #fff;
                border-bottom: 0.5px solid #eee;
            }

            .like-tab-item {
                width: 100%;
                margin-top: 10px;
                background-color: #fff;

                .like-user-cell {
                    height: 50px;
                    position: relative;
                    transition: linear 0.1s;

                    .like-user-avatar {
                        position: absolute;
                        height: 30px;
                        width: 30px;
                        margin: 10px 0 5px 15px;
                    }

                    .like-user-name {
                        width: calc(100% - 60px);
                        margin-left: 60px;
                        height: 50px;
                        line-height: 50px;
                        color: #666666;
                        font-size: 13px;
                        border-bottom: 0.5px solid #eee;
                    }
                }

                .like-user-cell:active {
                    background-color: #eee;
                }
            }

            .comment-tab-item {
                margin-top: 10px;
                background-color: #fff;

                .msg-card {
                    width: calc(100% - 40px);
                    padding: 10px 20px;

                    .msg-user {
                        position: relative;
                        height: 40px;
                        width: 100%;

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
            }
        }

        .featured-detail-bottom {
            position: fixed;
            height: 50px;
            width: 100%;
            bottom: 0;
            background-color: #fff;
            line-height: 50px;
            box-shadow: 0 -4px 5px -5px #ccc,;

            i {
                font-size: 16px;
                position: absolute;
                color: #666666;
                top: 50%;
                transform: translateY(-50%);
            }

            span {
                position: absolute;
                top: -5px;
                color: #666666;
            }

            .wc-i {
                left: 30px;
                font-size: 14px;
                transition: linear 0.1s;
            }

            .wc-span {
                left: 50px;
                top: 0;
                font-size: 13px;
            }

            .c-i {
                right: 120px;
            }

            .c-num {
                right: 104px;
                font-size: 12px;
            }

            .l-i {
                right: 50px;
            }

            .l-num {
                right: 37px;
                font-size: 12px;
            }
        }
    }

    .clearfix:before,
    .clearfix:after {
        content: "";
        /* 触发BFC, 防止外边距合并 */
        display: table;
    }

    .clearfix:after {
        clear: both;
    }

    .clearfix {
        /* *代表    ie 6 7 能识别的符号  带*的属性，只有IE67执行   zoom代表ie67清除浮动的方法 */
        *zoom: 1;
    }
</style>
