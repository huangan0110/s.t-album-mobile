<template>
    <div class="featured-card">

        <div class="header">
            <van-image
                width="100%"
                lazy-load
                fit="cover"
                :src="userInfo.avatar"
                @click="viewOther"
            >
                <template v-slot:error>
                    <img style="width: 40px;height: 40px" src="../../assets/img/default-avatar.png" alt="">
                </template>
            </van-image>
            <span class="user-name">{{userInfo.nickName}}</span>
            <span class="up-time">{{createTime}}</span>
            <div v-if="isLogin">
                <div class="attention-btn" @click.stop="clickAttention(1)" v-show="!isAttention">
                    未关注
                </div>
                <div class="attention-btn" @click.stop="clickAttention(2)" v-show="isAttention">
                    已关注
                </div>
            </div>
            <span class="desc">{{content}}</span>
            <i class="del van-icon van-icon-cross" v-if="isMine" @click="deleteFeatured"></i>
        </div>
        <div class="content" @click="viewDetail">
            <div class="img-box">
                <van-image
                    lazy-load
                    fit="cover"
                    :src="imageList1[0].url"
                >
                    <template v-slot:loading>
                        <van-loading/>
                    </template>
                    <template v-slot:error>
                        图片已被删除
                    </template>
                </van-image>
            </div>
            <div class="img-box" v-if="imageList1.length>1">
                <img :src="url2" alt="">
            </div>
            <div class="img-box" v-if="imageList1.length>2">
                <img :src="url3" alt="">
                <div class="more-pic" v-if="imageList1.length>3">
                    {{length}}图
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="bottom-option">
                <i class="iconfont albumz-like" v-if="!isLiked" @click="like(true)"></i>
                <i class="iconfont albumdianzan1" v-if="isLiked" style="color: #1989fa" @click="like(false)"></i>
                <span>{{likeNum}}</span>
            </div>
            <div class="bottom-option" @click="$router.push('/featured_detail')">
                <i class="iconfont albumpinglun2" style="font-size: 15px"></i> <span>{{commentNum}}</span>
            </div>
            <div class="bottom-option">
                <i class="iconfont albumicon" style="font-size: 16px"></i> <span>{{browseNum}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import {Dialog} from 'vant';
    import {delShared,clickLike,setAttention} from "../../api/getData";

    export default {
        name: "FeaturedCard",
        props: {
            id: {
                type: Number,
                default: 0
            },
            imageList: {
                type: Array,
                default: []
            },
            showLike: {
                type: Boolean,
                default: false
            },
            likeNum: {
                type: Number,
                default: 0
            },
            browseNum: {
                type: Number,
                default: 0
            },
            commentNum: {
                type: Number,
                default: 0
            },
            userInfo: {
                type: Object,
                default: "用户名"
            },
            createTime: {
                type: String,
                default: "事件"
            },
            showAttention: {
                type: Boolean,
                default: false
            },
            content: {
                type: String,
                default: "标题"
            },
            isDelete: {
                type: Boolean,
                default: false
            },
            isAttention: {
                type: Boolean,
                default: false
            },
            isLiked: {
                type: Boolean,
                default: false
            },
            delShared: {
                type: Function,
                default: null
            }
        },
        data() {
            return {
                // showMoreOption:true，
                imageList1:[],
                isLogin:false,
                length:"",
                url1:"",
                url2:"",
                url3:"",
                isMine:false
            }
        },
        mounted() {
            if(localStorage.getItem('access_token')){
                this.isLogin = true
            }else{
                this.isLogin = false;
            }
            this.length = this.imageList.length;
            if (this.imageList.length == 0) {
                this.imageList1[0] = {
                    fileId: "",
                    fileName: "",
                    gategoryId: 1,
                    groupId: 24,
                    groupName: "group1",
                    id: 8,
                    url: "11",
                    userId: 23,
                    visiblePermissionId: 1,
                }
                this.imageList1[1] = {
                    fileId: "",
                    fileName: "",
                    gategoryId: 1,
                    groupId: 24,
                    groupName: "group1",
                    id: 8,
                    url: "11",
                    userId: 23,
                    visiblePermissionId: 1,
                }
                this.imageList1[2] = {
                    fileId: "",
                    fileName: "",
                    gategoryId: 1,
                    groupId: 24,
                    groupName: "group1",
                    id: 8,
                    url: "11",
                    userId: 23,
                    visiblePermissionId: 1,
                }
            }else{
                this.imageList1 = this.imageList;
            }
            let data = this.imageList1;

            this.url1 = data[0].url;
            this.url2 = data[1].url;
            this.url3 = data[2].url;

        },
        created() {

        },
        methods: {
            viewOther(){
                this.$router.push({
                    path:'/other',
                    id:this.allData.userInfo.id
                })
            },
            like(status) {
                let url = '';
                let method = "";
                if(status) {
                    url = '/album/likeRecord/clickLike';
                    method="post"
                }else{
                    url ='/album/likeRecord/cancelLike';
                    method='delete'
                }
                clickLike(this.id,url,method).then(res=>{
                    if(res.data.success) {
                        if(res.data.object == "点赞成功") {
                            this.isLiked = true;
                            this.likeNum++;
                        }else{
                            this.isLiked = false;
                            this.likeNum--;
                        }
                    }
                })
            },
            viewDetail() {
                let data = {};
                data.id = this.id;
                data.browseNum = this.browseNum;
                data.commentNum = this.commentNum;
                data.content = this.content;
                data.createTime = this.createTime;
                data.imageList = this.imageList;
                data.likeNum = this.likeNum;
                data.userInfo = this.userInfo;
                data.isAttention = this.isAttention;
                data.isLiked = this.isLiked;
                this.$router.push({
                    path: "/featured_detail",
                    query: {
                        data: data,
                    }
                })
            },
            clickAttention(type){

                let url ="";
                let method = ""
                if(type == '1') {  //关注
                    url = '/user/attention/add';
                    method = 'post'
                }else{
                    url='/user/attention/delete';
                    method='delete'
                }
                setAttention(this.userInfo.id,url,method).then(res=>{
                    if(res.data.success) {
                        this.isAttention = true;
                        this.$toast({
                            message:"已关注",
                            position:"bottom"
                        });
                    }
                })
            },
            deleteFeatured() {
                Dialog.confirm({
                    title: '删除',
                    message: '是否删除内容？',
                    width: 240,
                })
                    .then(() => {
                        this.delShared(this.id);
                        this.$toast({
                            message: "删除成功",
                            position: "bottom"
                        });
                        // delShared(this.id).then(res=>{
                        //     if(res.data.success) {
                        //         this.delShared(this.id)
                        //         this.$toast({
                        //             message:"删除成功",
                        //             position:"bottom"
                        //         });
                        //
                        //     }else{
                        //         this.$toast({
                        //             message:res.data.message,
                        //             position:"bottom"
                        //         });
                        //     }
                        // })
                    })
                    .catch(() => {
                        // on cancel
                    });
            }
        },

    }
</script>

<style scoped lang="scss">
    .featured-card {
        width: calc(100% - 40px);
        margin: 0 10px;
        margin-top: 7px;
        position: relative;
        padding: 10px;
        border: none;
        border-radius: 10px;
        background-color: #fff;

        .header {
            position: relative;
            padding-bottom: 20px;
            .van-image {
                width: 40px !important;
                height: 40px;
                border-radius: 50%;
                object-fit: cover;
                top: -3px;
            }

            .van-image__error, .van-image__loading {
                width: 40px !important;
                height: 40px !important;
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
            .attention-btn {
                position: absolute;
                width: 50px;
                height: 20px;
                top: 4px;
                right: 10px;
                border-radius: 10px;
                background-color: #008b45;
                font-size: 12px;
                text-align: center;
                line-height: 20px;
                color: #fff;
            }
            .option-btn {
                position: absolute;
                right: 15px;
                top: 15px;
            }

            .desc {
                position: relative;
                left: 0px;
                font-size: 13px;
                top: 10px;
                display: block;
            }

            .del {
                position: absolute;
                top: 2px;
                right: 10px;
                color: #cccccc;
                border-radius: 50%;
                transition: linear 0.1s;
            }

            .del:active {
                background-color: #eee;
                padding: 8px;
                top: -6px;
                right: 2px;
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
                overflow: hidden;
                margin: 0;
                position: relative;
                float: left;
                margin-right: 0.5%;

                .van-image {
                    width: 100%;
                    height: 33vw;
                }
            }

            .img-box:last-child {
                margin-right: 0;
                border-radius: 0px 5px 5px 0px;
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
                background-color: rgba(0, 0, 0, 0.3);
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
