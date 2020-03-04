<template>
    <div class="album-detail">
        <div class="edit-title clearfix" v-if="isEdit">
            <div class="back-btn" @click="editCancel">
                <i class="van-icon van-icon-arrow-left"></i> <span>返回</span>
            </div>
            <span class="choose-all" @click="chooseAll">全选</span>
        </div>
        <div class="edit-title1" v-if="isEdit"></div>

        <div class="album-title" v-if="!isEdit">
            <img src="../../../assets/img/固定图1.jpg">
            <div class="detail-header" :class="{bgc:isBgc}">
                <div class="back-btn" @click="goPath('/home')" :class="{isBlack:isBgc}">
                    <i class="van-icon van-icon-arrow-left"></i> <span >返回</span>
                </div>
                <i :class="{isBlack:isBgc}" class="van-icon van-icon-more-o menu-btn" @click="showMnuPopup" v-if="!isEdit"></i>
                <i class="van-icon van-icon-more-o up-btn-bgc" v-if="isBgc"></i>
            </div>

            <div class="title-bottom">
                <span>相册标题相册标题</span>
                <span>共1212张照片</span>
                <div class="bottom-right">
                    <i class="van-icon van-icon-eye-o"></i><span>浏览量 77</span>
                </div>
            </div>
        </div>
        <div class="up-btn" v-if="!isEdit">
            <van-button icon="arrow-up" type="info">上传图片</van-button>
        </div>
        <div class=" clearfix" :class="{bigview:isBigView,photolist:!isBigView}">
            <ul>
                <li v-for="(item,index) in photoArray" :key="index" @click="choosely(index,item.id)">
                    <img :src="item.imgSrc">
                    <div class="checked" v-if="chooseAfterValue.indexOf( item.id )!=-1">
                        <i class="van-icon van-icon-success"></i>
                    </div>
                </li>
            </ul>
        </div>

        <div class="detail-bottom">
            <span>------&nbsp;&nbsp;已显示全部&nbsp;&nbsp;------</span>
        </div>

        <div class="manage-photo" v-if="isEdit">
            <ul>
                <li @click="movePhoto"><span>移动</span></li>
                <li @click="delPhoto"><span>删除</span></li>
                <li @click="editCancel"><span>取消</span></li>
            </ul>
        </div>

        <van-popup
            v-model="showMenu"
            position="bottom"
        >
            <van-cell title="编辑相册" is-link icon="edit" @click="editAlbum"/>
            <van-cell title="管理照片" is-link icon="setting-o" @click="managePhoto"/>
            <van-cell title="大图浏览" is-link icon="setting-o" @click="bigView" v-if="!isBigView"/>
            <van-cell title="小图浏览" is-link icon="setting-o" @click="bigView" v-else/>
        </van-popup>
    </div>
</template>

<script>
    export default {
        name: "AlbumDetail",
        data() {
            return {
                photoArray:[
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:1
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:2
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:3
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:4
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:5
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:6
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:7
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:8
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:9
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:10
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:11
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:12
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:13
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:14
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:15
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:16
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:17
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:18
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:19
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:20
                    },
                    {
                        imgSrc: require("../../../assets/img/固定图2.jpg"),
                        id:21
                    },
                ],
                showMenu:false,
                isEdit:false,
                chooseAfterValue:[],
                isBgc:false,
                isBigView:false
            }
        },
        mounted() {
            window.addEventListener('scroll',this.headerBgc);
        },
        methods: {
            headerBgc() {
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                var clientHeight=document.documentElement.clientHeight;
                console.log(scrollTop)
                //滚动条的高度>可视区的高度
                if(scrollTop>(clientHeight*0.32-120)){
                    this.isBgc = true;
                }else{
                    this.isBgc = false;
                }
            },
            editAlbum() {
                this.$router.push({
                    path:'/edit_album',
                    query:{
                        type:'edit'
                    }
                })
            },
            goPath(url) {
                this.$router.push(url);
            },
            showMnuPopup() {
                this.showMenu = true;
            },
            managePhoto() {
                this.isEdit = true;
                this.isBigView = false;
                this.showMenu = false;
            },
            movePhoto() {
                this.$router.push('/move_photo');
            },
            delPhoto() {
                console.log(this.chooseAfterValue)
                alert("删除"+this.chooseAfterValue.length)
            },
            editCancel() {
                this.isEdit = false;
                this.chooseAfterValue = [];
            },
            choosely(index,id){
                if(!this.isEdit) {
                    alert("查看" + id)
                }else{
                    if(this.chooseAfterValue.indexOf( id )!=-1){
                        this.chooseAfterValue.splice( this.chooseAfterValue.indexOf( id ), 1 )
                    }else{
                        this.chooseAfterValue.push(id)
                    }
                }
            },
            chooseAll() {
                if(this.chooseAfterValue.length != this.photoArray.length) {
                    for(let i=0; i<this.photoArray.length; i++) {
                        this.chooseAfterValue.push(this.photoArray[i].id);
                    }
                }else{
                    this.chooseAfterValue = [];
                }
            },
            bigView() {
                this.isBigView = !this.isBigView;
                this.showMenu = false;
            }
        }
    }
</script>

<style scoped lang="scss">
.album-detail {

    >>>.van-cell {
        padding: 16px 16px;
    }
    .edit-title1 {
        height: 50px;
    }
    .edit-title {
        height: 50px;
        width: 100%;
        font-size: 18px;
        position: fixed;
        top: 0;
        z-index: 999;
        background-color: #fff;
        .back-btn {
            width: 100px;
            height: 50px;
            i {

                color: #000;
                position: absolute;
                top: 15px;
                left: 13px;
            }
            span {
                position: absolute;
                top: 11px;
                left: 34px;
            }
        }

        .choose-all {
            position: absolute;
            right: 15px;
            top: 50%;
            transform: translateY(-50%);
        }

    }
    .album-title {
        position: relative;
        img {
            width: 100%;
            height: 32vh;
            object-fit: cover;
        }
        .bgc {
            background-color: #fff;
        }
        .isBlack {
            color: #323233!important;
        }
        .detail-header {
            transition: all 0.3s;
            position: fixed;
            z-index: 999;
            top: 0;
            height: 56px;
            width: 100%;
            .back-btn {
                font-size: 18px;
                position: absolute;
                top: 18px;
                left: 12px;
                color: #fff;
                width: 60px;
                i {
                    position: absolute;
                    margin-top: 4px;
                }
                span {
                    position: absolute;
                    left: 20px;
                }
            }
            .menu-btn {
                position: absolute;
                top: 18px;
                right: 15px;
                font-size: 24px;
                color: #fff;
            }
            .up-btn-bgc {
                position: absolute;
                top: 18px;
                right: 65px;
                font-size: 24px;
                color: #000;
            }
        }

        .title-bottom {
            height: 60px;
            width: 100%;
            position: absolute;
            bottom: 0;
            color: #fff;
            span:first-child {
                font-size: 20px;
                position: absolute;
                left: 10px;
                top: 0;
            }
            span:nth-child(2) {
                position: absolute;
                left: 10px;
                top: 30px;
                font-size: 12px;
            }
            .bottom-right {
                position: absolute;
                right: 0px;
                width: 100px;
                height: 30px;
                bottom: 0;
                i{
                    position: absolute;
                    left: 0;
                    top: 0;
                }

                span {
                    left: 20px;
                    top: 0;
                }
            }
        }
    }

    .up-btn {
        background-color: pink;
        width: 90%;
        margin: 10px auto;

        .van-button {
            width: 100%;
        }
    }

    .photolist {
        ul {
            list-style: none;
            li {
                float: left;
                width: 33%;
                height: 33vw;
                margin-right: 0.5vw;
                margin-bottom: 0.5vw;
                position: relative;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .checked {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #1989fa;
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    text-align: center;
                    i {
                        color: #fff;
                        margin-top: 3px;
                    }
                }
            }
            li:nth-child(3n) {
                margin-right: 0;
            }
        }
    }

    .bigview {
        ul {
            list-style: none;
            li {
                width: 100%;
                float: left;
                img {
                    width: 100%;
                }
            }
        }
    }
    .detail-bottom {
        text-align: center;
        margin: 15px 0;
        color: #aaa;
        font-size: 12px;
    }

    .manage-photo {
        height: 50px;
        width: 100%;
        position: fixed;
        bottom: 0;
        background-color: rgba(0,0,0,0.7);
        ul {
            list-style: none;
            li {
                height: 50px;
                color: #fff;
                text-align: center;
                float: left;
                width: 33%;
                margin-right: 0.5%;
                position: relative;
                span {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 14px;
                }
            }
            li:last-child {
                margin-right: 0;
            }

            li:active {
                background-color: rgba(0,0,0,0.4);
            }
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
