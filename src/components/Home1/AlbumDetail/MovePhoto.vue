<template>
    <div class="move-photo">
        <div class="move-header">
            <div class="back-btn" @click="backToDetail">
                <i class="iconfont albumzuojiantou"></i>
            </div>
            <span class="title">移动到</span>
        </div>
        <div class="move-header1"></div>
        <div class="move-content">
            <div class="add-album">
                <div class="add-icon">
                    <i class="van-icon van-icon-plus"></i>
                </div>
                <div class="add-tip">
                    <span>新建相册</span>
                </div>
            </div>
            <div class="album-cell" v-for="(item,index) in albumData" :key="index">
                <div class="album-img">
                    <img :src="item.imgSrc">
                </div>
                <div class="album-info">
                    <span>{{item.title}}</span>
                    <span>{{item.photoNum}}张</span> <span>{{item.see}}</span>
                    <i class="van-icon van-icon-arrow"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MovePhoto",
        data() {
            return {
                albumData:[
                    {
                        imgSrc: require("../../../assets/img/fixed2.jpg"),
                        title: "记录美好的点滴",
                        photoNum:"12",
                        see:"仅好友可见"
                    },
                    {
                        imgSrc: require("../../../assets/img/fixed2.jpg"),
                        title: "记录美好的点滴",
                        photoNum:"12",
                        see:"仅好友可见"
                    },
                    {
                        imgSrc: require("../../../assets/img/fixed2.jpg"),
                        title: "记录美好的点滴",
                        photoNum:"12",
                        see:"仅好友可见"
                    },
                    {
                        imgSrc: require("../../../assets/img/fixed2.jpg"),
                        title: "记录美好的点滴",
                        photoNum:"12",
                        see:"仅好友可见"
                    },
                    {
                        imgSrc: require("../../../assets/img/fixed2.jpg"),
                        title: "记录美好的点滴",
                        photoNum:"12",
                        see:"仅好友可见"
                    },
                    {
                        imgSrc: require("../../../assets/img/fixed2.jpg"),
                        title: "记录美好的点滴",
                        photoNum:"12",
                        see:"仅好友可见"
                    },
                    {
                        imgSrc: require("../../../assets/img/fixed2.jpg"),
                        title: "记录美好的点滴",
                        photoNum:"12",
                        see:"仅好友可见"
                    },
                    {
                        imgSrc: require("../../../assets/img/fixed2.jpg"),
                        title: "记录美好的点滴",
                        photoNum:"12",
                        see:"仅好友可见"
                    },
                    {
                        imgSrc: require("../../../assets/img/fixed2.jpg"),
                        title: "记录美好的点滴",
                        photoNum:"12",
                        see:"仅好友可见"
                    },
                    {
                        imgSrc: require("../../../assets/img/fixed2.jpg"),
                        title: "记录美好的点滴",
                        photoNum:"12",
                        see:"仅好友可见"
                    },
                ]
            }
        },
        methods: {
            backToDetail() {
                this.$router.push('/album_detail')
            }
        }
    }
</script>

<style scoped lang="scss">
.move-photo {
    .move-header {
        height: 50px;
        width: 100%;
        position: fixed;
        background-color: pink;
        font-size: 18px;
        background-color: #fff;
        z-index: 999;
        border-bottom: 0.5px solid #eee;
        .back-btn {
            width: 100px;
            height: 50px;
            i {
                font-size: 26px;
                color: #000;
                position: absolute;
                top: 13px;
                left: 13px;
            }
        }
        .title {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 14px;
        }
    }
    .move-header1 {
        height: 50px;
        width: 100%;
    }
    .move-content {
        .add-album {
            width: 100%;
            height: 80px;
            .add-icon {
                width: 80px;
                height: 80px;
                background-color: #f7f8fa;
                float: left;
                position: relative;
                border-bottom: 0.6px solid #eee;
                i {
                    font-size: 30px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 25px;
                    color: #0570db;
                }
            }
            .add-tip {
                border-bottom: 0.6px solid #eee;
                width: calc(100% - 80px);
                height: 80px;
                position: relative;
                float: left;
                font-size: 16px;
                color: #0570db;
                span {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    left: 15px;
                }
            }
            .add-tip:active {
                background-color: #f7f8fa;
            }
        }
        .album-cell {
            width: 100%;
            height: 80px;
            .album-img {
                height: 80px;
                width: 80px;
                background-color: pink;
                float: left;
                border-bottom: 0.6px solid #eee;
                img {
                    width: 80px;
                    height: 80px;
                    object-fit: cover;
                }
            }
            .album-info {
                width: calc(100% - 80px);
                height: 80px;
                float: left;
                position: relative;
                border-bottom: 0.6px solid #eee;
                span:first-child {
                    font-size: 16px;
                    position: absolute;
                    top: 15px;
                    left: 15px;
                }
                span:nth-child(2) {
                    position: absolute;
                    top: 50px;
                    left: 15px;
                    font-size: 14px;
                    color: #666;
                }
                span:nth-child(3) {
                    position: absolute;
                    top: 50px;
                    left: 75px;
                    font-size: 14px;
                    color: #666;
                }
                i {
                    position: absolute;
                    font-size: 20px;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #777;
                }
            }
            .album-info:active {
                background-color: #f7f8fa;
            }
        }
    }
}
</style>
