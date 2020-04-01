<template>
    <div class="notice">
        <div class="notice-header">
            <span>消息</span>
        </div>
        <div style="height:50px;"></div>
        <div class="notice-content">

            <div
                class="notice-cell"
                @touchstart="touchIndex=1"
                @touchend="touchIndex=0"
                :class="{touch:1 == touchIndex}"
            >
                <div class="sys-img">
                    <img src="../../assets/img/sys-msg.png" alt="">
                </div>
                <span>系统</span>
                <i class="van-icon van-icon-arrow"></i>
            </div>
            <div
                class="notice-cell"
                @touchstart="touchIndex=2"
                @touchend="touchIndex=0"
                :class="{touch:2 == touchIndex}"
            >
                <div class="msg-img">
                    <img src="../../assets/img/msg-msg.png" alt="">
                </div>
                <span>评论</span>
                <i class="van-icon van-icon-arrow"></i>
            </div>
            <div
                class="notice-cell"
                @touchstart="touchIndex=3"
                @touchend="touchIndex=0"
                :class="{touch:3 == touchIndex}"
            >
                <div class="like-img">
                    <img src="../../assets/img/like-msg.png" alt="">
                </div>
                <span>点赞</span>
                <i class="van-icon van-icon-arrow"></i>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            touchIndex:0,
        };
    },
    methods: {
        touchstart() {
            this.touched = true;
        },
        touchend() {
            this.touched = false;
        }
    }
};
</script>

<style scoped lang="scss">
.notice {
    .notice-header {
        height: 50px;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 9;
        background-color: #fff;
        border-bottom: 0.5px solid #cccccc;
        span {
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
            font-size: 18px;
            font-weight: 500;
            color: #555;
        }
    }
    .notice-content {
        .notice-cell {
            height: 70px;
            position: relative;
            transition: linear 0.1s;
            .sys-img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #409EFF;
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                img {
                    width: 30px;
                    height: 30px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 10px;
                }
            }
            .msg-img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #E6A23C;
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                img {
                    width: 20px;
                    height: 20px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 16px;
                }
            }
            .like-img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: #67C23A;
                position: absolute;
                left: 10px;
                top: 50%;
                transform: translateY(-50%);
                img {
                    width: 24px;
                    height: 24px;
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: 12px;
                }
            }
            i {
                position: absolute;
                color: #555;
                font-size: 20px;
                top: 50%;
                right: 20px;
                transform: translateY(-50%);
            }
            span {
                position: absolute;
                color: #333;
                font-size: 16px;
                font-weight: 600;
                top: 50%;
                left: 70px;
                transform: translateY(-50%);
            }
        }
    }
}
.touch {
    background-color: #ddd !important;
}
</style>
