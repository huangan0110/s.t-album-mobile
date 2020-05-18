<template>
    <div class="mine">
        <div class="mine-bg" v-show="contentScrollTop">
            <img :src="mineBgSrc" alt="" class="user-bg" :class="{'bg-scroll':isFixed}">
            <div class="mine-header" :class="{'mine-header-scroll':isFixed}">

                <img :src="userInfo.avatar" alt="" v-show="isFixed">
                <i class="iconfont albumyoucecaidan pup-i" @click="showOptionPup"></i>
                <span v-show="isFixed">{{userInfo.nickName}}</span>
            </div>
            <div class="avartar-editinfo">
                <div class="avatar">
                    <van-image
                        width="100%"
                        lazy-load
                        fit="cover"
                        :src="userInfo.avatar"
                    >
                        <template v-slot:error>
                            <img src="../../assets/img/default-avatar.png" alt="">
                        </template>
                    </van-image>
                </div>
                <div class="editinfo" @click="editInfo">
                    编辑信息
                </div>
            </div>
            <div class="user-info">
                <span>{{userInfo.nickName}}  &nbsp;&nbsp;&nbsp;<span
                    style="display: inline-block;background-color:#00CED1;padding: 2px 8px;border-radius: 12px;font-size: 10px;margin-top: 4px;">Lv.{{userInfo.vip.id}}</span></span>
                <span>这个人很懒，什么都没写</span>
                <span>{{userInfo.userResource.attentionNum}} 关注 &nbsp;&nbsp;&nbsp; {{userInfo.userResource.fanNum}} 粉丝</span>
                <div class="actice">刚刚活跃</div>
            </div>
        </div>
        <div class="mine-content"  >
            <van-tabs v-model="active" animated title-active-color="#008B45" sticky offset-top="60" lazy-render>
                <van-tab title="相册">
                    <div class="album-content clearfix">
                        <ul>
                            <li v-for="(item,index) in albumData" :key="index">
                                <album-card :imgSrc="item.background" :title="item.name" :id="item.id" :photoNum="item.imageNum" :visiblePermissionId="item.visiblePermissionId"></album-card>
                            </li>
                        </ul>
                    </div>
                </van-tab>
                <van-tab title="精选" style="background-color:#eee;">
                    <div v-for="(item,index) in featuredData" >
                        <FeaturedCard
                            :imageList="item.imageList"
                            :browseNum="item.browseNum"
                            :commentNum="item.commentNum"
                            :content="item.content"
                            :id="item.id"
                            :userInfo="item.userInfo"
                            :likeNum="item.likeNum"
                            :createTime="item.createTime"
                            :isDelete="false"
                            :isAttention = "item.isAttention"
                            :isLiked = "item.isLiked"
                            :isMine="true"
                            :delShared="delShared"
                        ></FeaturedCard>
                    </div>
                    <div style="height: 10px"></div>
                </van-tab>
                <van-tab title="关注" >
                    <div v-for="(item,index) in attentionData">
                        <AttentionCell
                            :nickName="item.nickName"
                            :id="item.userResource.id"
                            :fanNum="item.userResource.fanNum"
                            :attentionNum="item.userResource.attentionNum"
                            :avatar="item.avatar"
                        ></AttentionCell>
                    </div>
                </van-tab>
                <van-tab title="粉丝">
                    <div v-for="(item,index) in fansData">
                        <AttentionCell
                            :nickName="item.nickName"
                            :id="item.userResource.id"
                            :fanNum="item.userResource.fanNum"
                            :attentionNum="item.userResource.attentionNum"
                            :avatar="item.avatar"
                        ></AttentionCell>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <div style="height: 50px"></div>
        <div class="van-overlay" style="background-color:rgba(0,0,0,0);z-index: 998" @click="showOption=false"
             v-if="showOption">

        </div>
        <div class="option-pup-hide" :class="{'active':showOption }" style="z-index: 1009">
            <div class="option-cell" :class="{'active-cell':showOption}" @click="$router.push('/change_bg')">
                更改背景
            </div>
            <div class="option-cell" :class="{'active-cell':showOption}" @click="viewLevel">
                查看等级
            </div>
            <div class="option-cell" :class="{'active-cell':showOption}" @click="logOut1">
                退出登录
            </div>
        </div>
    </div>
</template>

<script>
    import AlbumCard from "../Home1/AlbumCard";
    import AttentionCell from "../Common/AttentionCell";
    import MineFeatured from "./components/MineFeatured";
    import FeaturedCard from "../Common/FeaturedCard";
    import Fans from "./components/Fans";
    import {seeAlbum,getMyInfo,logout,getAttention,getFans,getFeatured} from "../../api/getData";

    var el = document.getElementsByClassName('van-tabs__wrap')[0];

    var contentEl = document.getElementsByClassName('van-tabs__content--animated')[0];
    export default {
        components: {
            MineFeatured,
            AttentionCell,
            Fans,
            AlbumCard,
            FeaturedCard
        },
        data() {
            return {
                isLogin:true,
                showOption: false,
                active: '',
                mineBgSrc: require("../../assets/bg/bg" + localStorage.getItem('bgIndex') + ".jpg"),
                contentScrollTop: true,
                isFixed: false,
                albumData: [],
                userInfo:[],
                featuredData:[],
                attentionData:[],
                fansData:[]
            }
        },
        mounted() {
            let s = localStorage.getItem('access_token');
            if (s == null) {
                this.isLogin = false;

            } else {
                this.isLogin = true;
            }
            window.addEventListener('scroll', this.getScrollTop);
            seeAlbum().then(res => {
                this.albumData = res.data.object.rows;
            })
            getMyInfo().then(res=>{
                if(res.data.success) {
                    this.userInfo = res.data.object
                }
            })
            getAttention().then(res=>{
                if(res.data.success) {
                    let rows = res.data.object.rows;
                    for(let i=0;i<rows.length;i++) {
                        console.log(rows[i].attention)
                        if(rows[i].attention) {
                            this.attentionData.push(rows[i].attention)
                        }
                    }
                }
            })
            getFans().then(res=>{
                if(res.data.success) {
                    let rows = res.data.object.rows;
                    for(let i=0;i<rows.length;i++) {
                        if(rows[i].fan) {
                            this.fansData.push(rows[i].fan)
                        }
                    }
                }
            })
            this.getMyShared()
        },
        beforeDestroy(){
            window.removeEventListener("scroll", this.getScrollTop);
        },
        methods: {
            getMyShared() {
                let fromData = {};
                if(localStorage.getItem("access_token")) {
                    fromData.url = '/album/share/pageShare'
                    fromData.mark = 1
                }else{
                    fromData.url = '/album/public/pageShare'
                }
                getFeatured(fromData).then(res=>{
                    if(res.data.success) {
                        let rows = res.data.object.rows;
                        for(let i=0;i<rows.length;i++) {
                            let row = rows[i];
                            this.featuredData.push(row);
                        }
                    }
                })
            },
            delShared(id) {
                for(let i=0;i<this.featuredData.length;i++) {
                    if(this.featuredData[i].id == id) {
                        this.featuredData.splice(i,1);
                    }
                }
            },
            logOut1(){
                this.showOption = false;
                this.$dialog.alert({
                    message: "是否退出登录？",
                    showCancelButton:true,
                }).then(()=>{
                    logout().then(res=>{
                        if(res.data.success) {
                            this.$toast({
                                message:"退出成功",
                                position:"bottom"
                            });
                        }
                        localStorage.clear();
                        this.$router.push('/')
                    })
                }).catch(()=>{

                })

            },
            test(scrollTop) {
                window.scrollTo(0, 0)
            },
            getScrollTop() {
                this.showOption = false;
                var bgEl = document.getElementsByClassName('user-bg')[0];
                var userInfoEl = document.getElementsByClassName('user-info')[0];
                var avatarEl = document.getElementsByClassName('avatar')[0];
                var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                if (bgEl) {
                    bgEl.setAttribute("style", "filter:brightness(" + (320 - scrollTop) / 533 + ")");
                    if (scrollTop >= 220) {
                        // el.setAttribute("style","position:fixed;width:100%;top:0;margin-bottom:48px;z-index:999;");
                        // contentEl.setAttribute("style","margin-top:48px");
                        bgEl.setAttribute("style", "filter:brightness(0.21)");
                        this.isFixed = true;

                    } else {
                        // el.setAttribute("style","");
                        // contentEl.setAttribute("style","");
                        this.isFixed = false
                    }
                }
                if (avatarEl) {
                    avatarEl.setAttribute("style", "filter:brightness(" + (280 - scrollTop) / 280 + ")");
                }
                if (userInfoEl) {
                    userInfoEl.setAttribute("style", "opacity:" + (320 - scrollTop) / 320);
                }

            },
            back() {
            },
            editInfo() {
                let data = this.userInfo
                this.$router.push({
                    path:'/edit_info',
                    query:{
                        data:data
                    }
                })
            },
            viewLevel() {
                this.$router.push({
                    path: '/view_level',
                    query: {
                        id: this.userInfo.vip.id,
                        vipScore:this.userInfo.userResource.vipScore,
                        avatar:this.userInfo.avatar
                    }
                })
            },
            showOptionPup() {
                this.showOption = true;
                console.log(this.showOption)
            },
            choose() {
                console.log("12")
            }
        }

    }
</script>

<style scoped lang="scss">
    .noLogin {
        position: absolute;
        width: 100%;
        height: 100%;
        >>>.van-button {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            top: 300px;
        }
    }
    > > > .van-overlay {
        z-index: 1005 !important;
    }

    .mine {
        position: relative;

        .mine-bg {
            z-index: 0;
            width: 100%;
            height: 300px;

            .user-bg {
                width: 100%;
                height: 300px;
                object-fit: cover;
                filter: brightness(60%);
            }

            .bg-scroll {
                width: 100%;
                height: 300px;
                position: fixed;
                top: -240px;
                z-index: 1000;
                filter: brightness(21%);
            }

            .mine-header-scroll {
                z-index: 1001 !important;
            }

            .mine-header {
                height: 60px;
                width: 100%;
                position: fixed;
                z-index: 99;
                top: 0;

                i {
                    font-size: 20px;
                    color: #ffffff;
                    position: absolute;
                    top: 44px;
                }

                .back-i {
                    left: 16px;
                }

                .pup-i {
                    right: 16px;
                }

                img {
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    top: 15px;
                    left: 55px;
                    position: absolute;
                }

                span {
                    position: absolute;
                    left: 107px;
                    top: 22px;
                    font-size: 14px;
                    color: #ffffff;
                }
            }

            .avartar-editinfo {
                position: absolute;
                width: 100%;
                height: 80px;
                top: 70px;

                .bg-scroll {
                    position: fixed;
                }

                .avatar {
                    height: 80px;
                    width: 80px;
                    border-radius: 50%;
                    position: absolute;
                    overflow: hidden;
                    left: 16px;

                    img {
                        height: 80px;
                        height: 80px;
                        object-fit: cover;
                    }
                    .van-image {
                        height: 100%;
                    }
                }

                .editinfo {
                    position: absolute;
                    font-size: 12px;
                    padding: 8px 18px 9px 18px;
                    border-radius: 20px;
                    color: #ffffff;
                    background-color: rgba(255, 255, 255, 0.15);
                    top: 50%;
                    transform: translateY(-50%);
                    right: 20px;
                }

                .editinfo:active {
                    background-color: rgba(255, 255, 255, 0.1);
                }
            }

            .user-info {
                position: absolute;
                top: 150px;
                padding: 15px;
                width: 200px;

                span {
                    position: absolute;
                    font-size: 14px;
                    color: #fff;
                }

                span:first-child {
                    font-size: 16px;
                }

                span:nth-child(2) {
                    top: 44px;
                    color: #ddd;
                }

                span:nth-child(3) {
                    top: 70px;
                }

                .actice {
                    position: absolute;
                    top: 100px;
                    color: #fff;
                    font-size: 10px;
                    background-color: rgba(255, 255, 255, 0.15);
                    padding: 3px 12px;
                    border-radius: 9px;
                }
            }
        }

        .mine-content {
            position: relative;
            background-color: #ffffff;
            border-radius: 15px 15px 0 0;
            margin-top: -20px;
            z-index: 999;
            overflow: hidden;

            > > > .van-tabs__line {
                background-color: #008B45;
            }

            > > > .van-tabs--line .van-tabs__wrap {
                padding-bottom: 4px;
            }

            > > > .van-tab--active {
                font-size: 15px;
                font-weight: bold;
            }

            > > > .van-tabs__line {
                width: 15px !important;
            }

            > > > .van-tabs__track {
                /*webkit-transform: translateZ(0);*/
                /*-moz-transform: translateZ(0);*/
                /*-ms-transform: translateZ(0);*/
                /*-o-transform: translateZ(0);*/
                /*transform: translateZ(0);*/
                webkit-transform: translate3d(0, 0, 0);
                -moz-transform: translate3d(0, 0, 0);
                -ms-transform: translate3d(0, 0, 0);
                -o-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }

            .album-content {
                padding-top: 10px;
                background-color: #eee;

                ul {
                    list-style: none;

                    li {
                        float: left;
                        width: 47%;
                        height: 200px;
                        margin-left: 2%;
                        margin-bottom: 20px;

                    }
                }
            }
        }

        .option-pup-hide {
            width: 0px;
            height: 0px;
            position: fixed;
            right: 10px;
            top: 10px;
            padding: 5px 0;
            background-color: #fff;
            border-radius: 5px;
            transition: linear 0.1s;
            -moz-transform: translateZ(0);
            -ms-transform: translateZ(0);
            -o-transform: translateZ(0);
            transform: translateZ(0);

            .option-cell {
                width: 180px;
                height: 50px;
                line-height: 50px;
                padding-left: 20px;
                margin-left: 100px;
                font-size: 14px;
            }

            .active-cell {
                margin-left: 0;
            }

            .option-cell:active {
                background-color: #eee;
            }
        }

        .active {
            width: 200px !important;
            height: 150px !important;
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
    }
</style>
