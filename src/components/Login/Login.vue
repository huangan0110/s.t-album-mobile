<template>
    <div class="login">
        <img :src="imgUrl" @touchstart="start"/>
        <div class="login-btn">
            <van-button round type="info" hairline  @click="goPath('/email-login')">邮箱登录</van-button>
            <van-button round plain type="info" hairline  @click="goPath('/featured')">立即体验</van-button>
        </div>
        <div class="login-icon">
            <i class="iconfont albumweixin"></i>
            <i class="iconfont albumqq2"></i>
            <i class="iconfont albumweibo3"></i>
        </div>
        <div class="check">
            <van-checkbox v-model="checked" icon-size="12px">
                我已同意 《 <span> 用户协议 </span> 》
            </van-checkbox>
        </div>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            checked: true,
            imgUrl: require("../../assets/img/logo.jpg"),
            longClick: 0,
            timeOutEvent: 0
        };
    },
    methods:{
        goPath(url) {
            this.$router.push(url);
        },

        start() {
            console.log("111")
            var that = this;
            this.longClick = 0;
            this.timeOutEvent = setTimeout(function() {
                that.longClick = 1;
                that.downImg()
            }, 500);
        },
        downImg(){
            // if(!window.plus) return;
            plus.gallery.save('http://n.sinaimg.cn/photo/transform/162/w550h412/20200509/a505-itmiwry2579839.jpg', function () {
                alert('保存成功!');
            },function(){
                alert('保存失败，请重试!');
            });
        },
    }
};
</script>

<style scoped lang="scss">
.login {
    img {
        position: absolute;
        width: 140px;
        height: 140px;
        left: 50%;
        transform: translateX(-50%);
        top: 120px;
    }
    .login-btn {
        width: 80%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 100px;
        .van-button--normal {
            width: 100%;
            margin-top: 10px;
        }
    }
    .login-icon {
        display: inline-block;
        left: 50%;
        transform: translateX(-50%);
        bottom: 60px;
        position: absolute;
        i {
            font-size: 28px;
            margin: 0 12px;
        }
    }
    .check {
        display: inline-block;
        left: 50%;
        transform: translateX(-50%);
        bottom: 20px;
        position: absolute;
        >>> .van-checkbox__label {
            font-size: 12px;
        }
        span {
            font-size: 12px;
            border-bottom: 1px solid #ddd;
            margin: 0;
            padding: 0;
            display: inline;
        }
    }
}
</style>
