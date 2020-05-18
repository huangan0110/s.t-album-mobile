<template>
    <div class="email-login">
        <div class="header">
            &nbsp;&nbsp;<i class="iconfont albumzuojiantou" @click="goPath('/')"></i>&nbsp;&nbsp;<span>邮箱登录</span>
        </div>
        <div class="tip">
            <span @click="register">&nbsp;&nbsp;没有账号?  立即注册账号</span>
        </div>
        <div class="email-input">
            <van-field
                v-model="email"
                left-icon="envelop-o"
                placeholder="请输入邮箱"
            />
        </div>
        <div class="email-input">
            <van-field
                v-model="pass"
                left-icon="envelop-o"
                placeholder="请输入密码"
            />
        </div>
        <div class="login-btn">
            <van-button round type="info" @click="login11" :loading="isLogin" loading-text="登录中">登录</van-button>
        </div>

    </div>
</template>

<script>
    import {login} from "../../api/getData";

    export default {
    data() {
        return {
            email:'1686313466@qq.com',
            pass:"123456",
            isLogin:false
        }
    },
    methods:{
        goPath(url) {
            this.$router.push(url)
        },
        register() {
            this.$router.push("/register")
        },
        login11() {
            this.isLogin = true;
            login(this.email,this.pass).then(res=>{
                this.isLogin = false;
                localStorage.setItem("access_token",res.data.access_token);
                localStorage.setItem("refresh_token",res.data.refresh_token);
                this.$router.push('/home');
            }).catch(err=>{
                this.$toast({
                    message:"登录失败",
                    position:"bottom"
                });
                this.password = '';
                this.isLogin = false;
            })
        },
    }
}
</script>

<style scoped lang="scss">
.email-login {
    padding: 10px;
    position: absolute;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    overflow: hidden;
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
