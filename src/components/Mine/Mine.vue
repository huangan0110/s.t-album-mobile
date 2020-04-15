<template>
    <div class="mine">
        <div class="mine-bg" v-show="contentScrollTop">
            <img :src="mineBgSrc" alt="" class="user-bg" :class="{'bg-scroll':isFixed}">
            <div class="mine-header" :class="{'mine-header-scroll':isFixed}">
                <i class="van-icon van-icon-arrow-left back-i" @click="back"></i>
                <img src="../../assets/img/固定图2.jpg" alt="" v-show="isFixed">
                <i class="van-icon van-icon-ellipsis pup-i" @click="showOptionPup"></i>
                <span v-show="isFixed">用户名用户名</span>
            </div>
            <div class="avartar-editinfo">
                <div class="avatar">
                    <img src="../../assets/img/固定图2.jpg" alt="">
                </div>
                <div class="editinfo" @click="editInfo">
                    编辑信息
                </div>
            </div>
            <div class="user-info">
                <span>用户名用户名啊几个字？<span style="display: inline-block;background-color:#00CED1;padding: 2px 8px;border-radius: 12px;font-size: 10px;margin-top: 4px;">Lv.2</span></span>
                <span>这个人很懒，什么都没写</span>
                <span>0 关注 &nbsp;&nbsp;&nbsp; 0 粉丝</span>
                <div class="actice">刚刚活跃</div>
            </div>
        </div>
        <div class="mine-content">
            <van-tabs v-model="active" animated title-active-color="#008B45" sticky swipeable @change="test()" offset-top="60">
                <van-tab title="相册">
                    相册
                </van-tab>
                <van-tab title="精选">
                    <MineFeatured></MineFeatured>
                </van-tab>
                <van-tab title="关注">
                    <Attention></Attention>
                </van-tab>
                <van-tab title="粉丝">
                    粉丝
                </van-tab>
            </van-tabs>
        </div>
        <div class="van-overlay" style="background-color:rgba(0,0,0,0);z-index: 998" @click="showOption=false" v-if="showOption">

        </div>
        <div class="option-pup-hide" :class="{'active':showOption }" style="z-index: 1009">
            <div class="option-cell" :class="{'active-cell':showOption}" @click="$router.push('/change_bg')">
                更改背景
            </div>
            <div class="option-cell" :class="{'active-cell':showOption}" @click="$router.push('/view_level')">
                查看等级
            </div>
        </div>
    </div>
</template>

<script>
import MineFeatured from "./components/MineFeatured";
import Attention from "./components/Attention";
var el = document.getElementsByClassName('van-tabs__wrap')[0];

var contentEl = document.getElementsByClassName('van-tabs__content--animated')[0];
export default {
    components:{
        MineFeatured,
        Attention
    },
    data() {
        return {
            showOption:false,
            active:'',
            mineBgSrc:require("../../assets/bg/bg"+localStorage.getItem('bgIndex')+".jpg"),
            contentScrollTop:true,
            isFixed:false
        }
    },
    beforeCreate() {
        document.querySelector("body").setAttribute("style", "background:#eee");
    },
    beforeDestroy() {
        document.querySelector("body").setAttribute("style", "background:#fff");
    },
    mounted() {
        window.addEventListener('scroll',this.getScrollTop);
    },
    methods: {
        test(scrollTop) {
            console.log("12");
            window.scrollTo(100,500)
        },
        getScrollTop() {
            this.showOption = false;
            var bgEl = document.getElementsByClassName('user-bg')[0];
            var userInfoEl = document.getElementsByClassName('user-info')[0];
            var avatarEl = document.getElementsByClassName('avatar')[0];
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            bgEl.setAttribute("style","filter:brightness("+(320-scrollTop)/533+")");
            avatarEl.setAttribute("style","filter:brightness("+(280-scrollTop)/280+")");
            userInfoEl.setAttribute("style","opacity:"+(320-scrollTop)/320)
            if(scrollTop >220) {
                // el.setAttribute("style","position:fixed;width:100%;top:0;margin-bottom:48px;z-index:999;");
                // contentEl.setAttribute("style","margin-top:48px");
                bgEl.setAttribute("style","filter:brightness(0.21)");
                this.isFixed = true;

            }else{
                // el.setAttribute("style","");
                // contentEl.setAttribute("style","");
                this.isFixed = false
            }
        },
        back() {},
        editInfo() {
            this.$router.push('/edit_info')
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
    >>>.van-overlay {
        z-index: 1005!important;
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
            z-index: 1001!important;
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
                top: 24px;
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
            }
            .editinfo {
                position: absolute;
                font-size: 12px;
                padding: 8px 18px 9px 18px;
                border-radius: 20px;
                color: #ffffff;
                background-color: rgba(255,255,255,0.15);
                top: 50%;
                transform: translateY(-50%);
                right: 20px;
            }
            .editinfo:active {
                background-color: rgba(255,255,255,0.1);
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
                background-color: rgba(255,255,255,0.15);
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
        >>>.van-tabs__line {
            background-color: #008B45;
        }
        >>>.van-tabs--line .van-tabs__wrap{
            padding-bottom: 4px;
        }
        >>>.van-tab--active {
            font-size: 15px;
            font-weight: bold;
        }
        >>>.van-tabs__line {
            width: 15px!important;
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
        width: 200px!important;
        height: 100px!important;
    }
}
</style>
