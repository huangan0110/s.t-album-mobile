<template>
    <div class="change-bg">
        <div class="change-bg-header">
            <i class="iconfont albumzuojiantou" @click="$router.push('/mine')"></i>
            <span>个人主页背景</span>
        </div>
        <div class="bg-header"></div>
        <div class="change-bg-content clearfix">
            <span style="font-size:12px;color:#666;">推荐背景</span>
            <ul>
                <li v-for="(item,index) in bgData" :key="index">
                    <div class="bg-card">
                        <img :src="item.bgSrc">
                        <div class="using-btn" v-show="bgIndex==index">
                            正在使用
                        </div>
                        <div class="setbg-btn" @click="setBg(index)" v-show="!(bgIndex==index)">
                            设为背景
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChangeBg",
        data() {
            return {
                bgData:[
                    {index:0,bgSrc:require("../../assets/bg/bg0.jpg")},
                    {index:1,bgSrc:require("../../assets/bg/bg1.jpg")},
                    {index:2,bgSrc:require("../../assets/bg/bg2.jpg")},
                    {index:3,bgSrc:require("../../assets/bg/bg3.jpg")},
                    {index:4,bgSrc:require("../../assets/bg/bg4.jpg")},
                    {index:5,bgSrc:require("../../assets/bg/bg5.jpg")},
                    {index:6,bgSrc:require("../../assets/bg/bg6.jpg")},
                    {index:7,bgSrc:require("../../assets/bg/bg7.jpg")},
                    {index:8,bgSrc:require("../../assets/bg/bg8.jpg")},
                    {index:9,bgSrc:require("../../assets/bg/bg9.jpg")}
                ],
                bgIndex:localStorage.getItem('bgIndex')
            }
        },
        created() {},
        methods: {
            setBg(index) {
                localStorage.setItem('bgIndex',index);
                this.bgIndex = index;
                this.$toast({
                    message:'设置成功！',
                    position:'bottom'
                });
            }
        }
    }
</script>

<style scoped lang="scss">
.change-bg {
    .change-bg-header {
        height: 50px;
        width: 100%;
        border-bottom: 0.5px solid #eee;
        position: fixed;
        top: 0;
        line-height: 52px;
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
    .bg-header {
        height: 50px;
    }
    .change-bg-content {
        background-color: #eee;
        padding: 15px;
        ul {
            list-style: none;
            margin-top: 10px;
            li {
                width: 48%;
                padding-bottom: 48%;
                height: 0;
                float: left;
                margin-bottom: 15px;
                border-radius: 5px;
                overflow: hidden;
                .bg-card {
                    position: relative;
                    .using-btn,
                    .setbg-btn {
                        font-size: 10px;
                        color: #ffffff;
                        position: absolute;
                        bottom: 10px;
                        right: 10px;
                        padding: 0px 5px 1px 5px;
                        border: 1px solid #ffffff;
                        border-radius: 2px;
                    }
                    .setbg-btn {
                        background-color: #008B00;
                        border: 1px solid #008B00;
                    }
                }
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            li:nth-child(2n) {
                float: right;
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
}
</style>
