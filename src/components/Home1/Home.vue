<template>
    <div class="home">
        <div class="home-header" v-if="isLogin">
            <span>我的相册</span>
<!--            <i class="iconfont albumsousuo4"></i>-->
        </div>
        <div class="home-content clearfix" v-if="isLogin">
            <ul>
                <li>
                    <div class="add-album" @click="addAlbum">
                        <i class="van-icon van-icon-plus"></i>
                        <br>
                        新增相册
                    </div>
                </li>
                <li v-for="(item,index) in albumData" :key="index">
                    <album-card :imgSrc="item.background" :title="item.name" :id="item.id" :photoNum="item.imageNum" :visiblePermissionId="item.visiblePermissionId"></album-card>
                </li>
            </ul>
        </div>
        <div class="home-bottom" v-if="albumData.length!=0">
        </div>
        <div v-if="!isLogin" class="noLogin">
            <van-button type="primary" size="normal" @click="$router.push('email-login')">登录</van-button>
        </div>
        <div v-if="!isLogin" class="noLogin">
            <van-button type="primary" size="normal" @click="$router.push('email-login')">登录</van-button>
        </div>
    </div>

</template>

<script>
    import {seeAlbum} from "../../api/getData";
    import AlbumCard from "./AlbumCard";
    export default {
        name: "Home",
        components:{
            AlbumCard
        },
        data() {
            return {
                albumData:[],
                isLogin:false
            }
        },
        mounted() {
            let s = localStorage.getItem('access_token');
            if(s == null) {
                this.isLogin = false;
            }else{
                this.isLogin = true;
            }
            seeAlbum().then(res => {
                this.albumData = res.data.object.rows;
            })
        },
        methods:{
            addAlbum() {
                this.$router.push({
                    path:'edit_album',
                    query:{
                        type:'add'
                    }
                })
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
    .home {
        .home-header {
            height: 50px;
            width: 100%;
            border-bottom: 1px solid #eee;
            box-shadow: 0px 8px 25px -22px #5e5e5e;
            position: fixed;
            top: 20px;
            z-index: 9;
            background-color: #fff;

            span {
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translateY(-50%);
                font-size: 18px;
                font-weight: 500;
                color: #555;
            }

            i {
                position: absolute;
                right: 20px;
                top: 50%;
                font-size: 20px;
                transform: translateY(-50%);
                color: #555;
            }
        }
        .home-content {
            margin-top: 80px;
            ul {
                list-style: none;
            }
            ul li {
                width: 47%;
                height: 200px;
                float: left;
                margin-left: 2%;
                margin-bottom: 20px;
                .add-album {
                    width: calc(100% - 2px);
                    height: calc(100% - 2px);
                    border: 1px solid #eee;
                    text-align: center;
                    border-radius: 5px;
                    i {
                        margin-top: 50px;
                        font-size: 60px;
                    }
                    color: #666;
                    transition: linear 0.1s;
                }
                .add-album:active {
                    background-color: #ccc;
                }
            }
            ul li:first-child {
                height: 47vw;
            }
        }
        .home-bottom {
            margin-bottom: 50px;
            height: 30px;
            text-align: center;
            font-size: 14px;
            color: #ccc;
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
