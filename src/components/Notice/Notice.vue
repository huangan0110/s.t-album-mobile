<template>
    <div class="notice">
        <div class="notice-header">
            <span>消息</span>
        </div>
        <div style="height:60px;"></div>
        <div class="notice-content">
            <div
                class="notice-cell"
                @touchstart="touchIndex=1"
                @touchend="touchIndex=0"
                :class="{touch:1 == touchIndex}"
            >
                <i class="van-icon van-icon-setting"></i>
                <span>点赞</span>
            </div>
            <div
                class="notice-cell"
                @touchstart="touchIndex=2"
                @touchend="touchIndex=0"
                :class="{touch:2 == touchIndex}"
            >
                <i class="van-icon van-icon-setting"></i>
                <span>点赞</span>
            </div>
            <div
                class="notice-cell"
                @touchstart="touchIndex=3"
                @touchend="touchIndex=0"
                :class="{touch:3 == touchIndex}"
            >
                <i class="van-icon van-icon-setting"></i>
                <span>点赞</span>
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
            transition: linear 0.2s;
            i {
                position: absolute;
                color: aqua;
                font-size: 36px;
                top: 50%;
                left: 15px;
                transform: translateY(-50%);
            }
            span {
                position: absolute;
                color: #333;
                font-size: 16px;
                font-weight: 600;
                top: 50%;
                left: 60px;
                transform: translateY(-50%);
            }
        }
    }
}
.touch {
    background-color: #ddd !important;
}
</style>