<template>
    <div class="attention-cell" @click="test('1')">
        <img src="../../assets/img/fixed4.jpg">
        <span class="user-name">用户名</span>
        <div class="user-info">
            <span class="featured-span">5精选</span>&nbsp;
            <span class="attention-span">5关注</span>&nbsp;
            <span class="fans-span">5粉丝</span>
        </div>
        <div class="attention-btn" @click.stop="test('2')">
            已关注
        </div>
    </div>
</template>

<script>
    export default {
        name: "AttentionCell",
        data() {
            return {}
        },
        methods:{
            test(a) {
                console.log(a)
            }
        }
    }
</script>

<style scoped lang="scss">
.attention-cell {
    position: relative;
    height: 60px;
    width: 100%;
    transition: linear 0.1s;
    img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        position: absolute;
        left: 20px;
        top: 10px;
    }
    .user-name{
        font-size: 14px;
        color: #323233;
        position: absolute;
        left: 80px;
        top: 10px;
    }
    .user-info {
        position: absolute;
        width: 240px;
        top: 32px;
        left: 80px;
        font-size: 12px;
        color: #999;
    }
    .attention-btn {
        width: 50px;
        height: 20px;
        border-radius: 10px;
        background-color: #008B45;
        line-height: 20px;
        text-align: center;
        font-size: 12px;
        position: absolute;
        right: 15px;
        top: 20px;
        color: #fff;
    }
}
.attention-cell:active {
    background-color: #eeeeee;
}
</style>
