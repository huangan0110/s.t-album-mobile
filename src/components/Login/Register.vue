<template>
    <div class="register">
        <div class="header">
            &nbsp;&nbsp;<i class="iconfont albumzuojiantou" @click="goPath('/email-login')"></i>&nbsp;&nbsp;<span>账号注册</span>
        </div>

        <div class="email-input">
            <van-field
                v-model="email"
                left-icon="envelop-o"
                placeholder="请输入邮箱"
                @blur="test"
            />
        </div>
        <div class="email-input">
            <van-field
                v-model="password"
                left-icon="description"
                placeholder="请输入密码"
            />
        </div>
        <div class="email-input">
            <van-field
                v-model="ncode"
                left-icon="sign"
                placeholder="请输入验证码"
            />
        </div>
        <div class="login-btn">
            <van-button round type="info" @click="registertn">注册</van-button>
        </div>
    </div>


</template>

<script>
    import {isExitUser,getNcode,registerUser} from "../../api/getData";

    export default {
        name: "Register",
        data() {
            return {
                checked: true,
                email:"",
                password:'',
                ncode:''
            };
        },
        methods:{
            goPath(url) {
                this.$router.push(url);
            },
            test() {
                isExitUser(this.email).then(res=>{
                    if(!res.data.object) {
                        this.$toast({
                            message:"此账号已存在!",
                            position:"bottom"
                        });
                        this.email = "";
                    }else{
                        getNcode(this.email).then(res => {
                            if(res.data.success) {
                                this.$toast({
                                    message:"验证码已发送至邮箱!!",
                                    position:"bottom"
                                });
                            }
                        })
                    }
                })
            },
            registertn() {
                if(this.email == "" || this.password == "" || this.ncode == "" ) {
                    this.$toast({
                        message:"请输入信息!",
                        position:"bottom"
                    });
                }else{
                    let formData = {};
                    formData.username = this.email;
                    formData.password = this.password;
                    formData.code = this.ncode;
                    registerUser(formData).then(res=> {
                        if(res.data.success) {
                            this.$toast({
                                message:"注册成功!",
                                position:"bottom"
                            });
                            this.$router.push('/email-login')
                        }else{
                            this.$toast({
                                message:"验证码错误!",
                                position:"bottom"
                            });
                        }
                    })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .register {
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
