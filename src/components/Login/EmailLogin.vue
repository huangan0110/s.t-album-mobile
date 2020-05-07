<template>
    <div class="email-login">
        <div class="header">
            <i class="iconfont albumzuojiantou" @click="goPath('/')"></i><span>邮箱登录</span>
        </div>
        <div class="tip">
            <span>未注册过的邮箱登录后将自动创建账号</span>
        </div>
        <div class="email-input">
            <van-field
                v-model="email"
                left-icon="envelop-o"
                right-icon="warning-o"
                placeholder="请输入邮箱"
            />
        </div>
        <div class="login-btn">
            <van-button round type="info" >下一步</van-button>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            email:'',
        }
    },
    methods:{
        goPath(url) {
            this.$router.push(url)
        }
    }
}
</script>

<style scoped lang="scss">
.email-login {
    padding: 10px;
    .header {
        width: 100%;
        height: 40px;
        margin-top: 30px;
        line-height: 40px;
        position: relative;
        i, span{
            font-size: 26px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
        }
        span {
            font-size: 15px;
            left: 40px;
            top: 53%;
        }
    }
    .tip {
        margin-top: 20px;
        margin-left: 1px;
        color: #666;
        font-size: 12px;

    }
    .email-input {
        height: 32px;
        border-bottom: 1px solid #ddd;
        margin-top: 30px;
        input {
            height: 30px;
            border: none;
        }
        i {
            margin-top: 2px;
        }
    }
    .login-btn {
        margin-top: 30px;
        .van-button--normal {
            width: 100%;
        }
    }
}
</style>
