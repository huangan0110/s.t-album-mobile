<template>
<div class="view-level">
    <div class="view-level-header">
        <i class="iconfont albumzuojiantou" @click="$router.push('/mine')"></i>
        <span>我的等级</span>
    </div>
    <div class="header-level"></div>
    <div class="user-level">
        <div class="avatar-level">
            <img :src="avatar" alt=""><br>
            <span style="color: #333">当前等级: </span>
            <span style="color: #ee0a24;font-weight: bold;font-family: 方正粗黑宋简体">Lv.1</span>
        </div>
        <br>
        <div class="progress-bar">
            <div class="level-aera" style="width: 10.4%">
                <span>1</span>
            </div>
            <div class="level-aera" style="width: 11.4%">
                <span>2</span>
            </div>
            <div class="level-aera">
                <span>3</span>
            </div>
            <div class="level-aera" style="width: 11.3%">
                <span>4</span>
            </div>
            <div class="level-aera" style="width: 11.4%">
                <span>5</span>
            </div>
            <div class="level-aera" style="width: 11.4%">
                <span>6</span>
            </div>
            <div class="level-aera" style="width:11.4%">
                <span>7</span>
            </div>
            <div class="level-aera" style="width: 11.3%">
                <span>8</span>
            </div>
            <div class="level-aera" style="width:5%">
                <span>9</span>
            </div>
            <div class="bar-top"></div>
            <div class="bar">

                <div class="progress"></div>
                <div class="bar-border-box">
                    <div class="bar-border"></div>
                    <div class="bar-border"></div>
                    <div class="bar-border"></div>
                    <div class="bar-border"></div>
                    <div class="bar-border"></div>
                    <div class="bar-border"></div>
                    <div class="bar-border"></div>
                    <div class="bar-border"></div>
                    <div class="bar-border"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="level-spec">
        当前等级特权
        <ul>
            <li><div class="dot"></div>&nbsp;&nbsp;&nbsp;<span>100张照片免费容量  </span></li>
            <li><div class="dot"></div>&nbsp;&nbsp;&nbsp;<span>相册上限4个  </span></li>
        </ul>

    </div>
</div>
</template>

<script>
    export default {
        name: "ViewLevel",
        data(){
            return {
                avatar:""
            }
        },
        mounted() {
            this.avatar = this.$route.query.avatar
            console.log(this.avatar);
        }
    }
</script>

<style scoped lang="scss">
.view-level {
    position: absolute;
    overflow: hidden;
    width: 100%;
    background-color: #eee;
    .view-level-header {
        height: 80px;
        width: 100%;
        border-bottom: 0.5px solid #eee;
        position: fixed;
        top: 0;
        color: #fff;
        z-index: 999;
        background-color: #1a497d;
        i {
            font-size: 26px;
            position: absolute;
            bottom: 11px;
            left: 15px;
        }
        span {
            position: absolute;
            left: 60px;
            bottom: 15px;
        }
    }
    .header-level {
        height: 80px;
    }
    .bg-header {
        height: 50px;
    }
    .user-level {
        background-color: #fff;
        width: 100%;
        padding-top: 20px;
        height: 220px;
        border-bottom: 0.5px solid #ddd;
        .avatar-level {
            width: 140px;
            margin: 0 auto;
            position: relative;
            text-align: center;
            img {
                width: 100px;
                height: 100px;
                border-radius: 50%;
            }
        }
        .progress-bar {
            width: 90%;
            height: 30px;
            margin: 0 auto;
            .level-aera {
                font-size: 10px;
                color: red;
                width: 11.11%;
                height: 14px;
                float: left;
            }
            .bar-top {
                height: 14px;
            }
            .bar {
                height: 8px;
                width: 100%;
                background-color: #ddd;
                border-radius: 4px;
                position: relative;
                overflow: hidden;
                .bar-border-box {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 8px;
                    .bar-border {
                        width: 11.05%;
                        height: 8px;
                        border-right: 1px solid #fff;
                        float: left;
                        z-index: 999!important;
                    }
                }

                .progress {
                    width: 1%;
                    height: 8px;
                    background: linear-gradient(to left,#EE0000,#FF6A6A,#FFAEB9);
                    float: left;
                    left: 0;
                    top: 0;
                    z-index: 9;
                    border-radius: 4px;
                }
            }
        }
    }
    .level-spec {
        padding: 10px;
        background-color: #fff;
        ul {
            list-style: none;
            color: red;
            margin-top: 10px;
            font-size: 12px;
            span {
                color: #333;
            }
            li {
                height: 20px;
            }
            .dot {
                width: 5px;
                height: 5px;
                display: inline-block;
                background-color: red;
                border-radius: 50%;
                margin-bottom: 3px;
            }
        }
    }
    .next-level {
        padding: 10px;
        background-color: #fff;
        height: 100px;
        width: 100%;
        margin-top: 10px;

    }
}
</style>
