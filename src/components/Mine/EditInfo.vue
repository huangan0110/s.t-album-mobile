<template>
    <div class="edit-info">
        <div class="edit-header">
            <div class="back-btn" @click="back">
                <i class="iconfont albumzuojiantou"></i>
            </div>
            <span class="edit-title" >编辑信息</span>
            <span class="edit-save" @click="saveEdit">保存</span>
        </div>
        <div class="edit-content">
            <div class="choose_avatar">
                &nbsp;&nbsp;&nbsp;&nbsp;头像
               &nbsp;&nbsp;&nbsp;&nbsp;
                <div style="position: absolute;left: 60px;top: 8px">
                    <van-uploader v-model="fileList" :after-read="afterRead" :max-count="1"/>
                </div>
            </div>
            <van-field
                v-model="userName"
                label="昵称"
                placeholder="请输入昵称"
                input-align="right"
            />
            <br>
            <van-cell-group>
                <van-cell title="性别" :value="gender=='1' ? '男':'女'" clickable @click="chooseGender"/>
                <van-field
                    v-model="age"
                    label="年龄"
                    placeholder="暂无"
                    input-align="right"
                />
                <van-field
                    v-model="desc=='' ? '暂无':desc"
                    label="个人说明"
                    placeholder="请输入个人说明"
                    input-align="right"
                />
            </van-cell-group>
            <br>
            <van-cell title="修改密码" clickable is-link @click="changePass"/>
        </div>
        <van-popup
            v-model="showGender"
            position="bottom"
        >
            <van-cell title="男" clickable @click="gender='1',showGender=false">
                <template #right-icon v-if="gender == 1">
                    <van-icon
                        name="success"
                        style="line-height: inherit;"
                    />
                </template>
            </van-cell>
            <van-cell title="女" clickable @click="gender='2',showGender=false">
                <template #right-icon v-if="gender == 2">
                    <van-icon
                        name="success"
                        style="line-height: inherit;"
                    />
                </template>
            </van-cell>
        </van-popup>
        <van-popup
            v-model="showBirthday"
            position="bottom"
        >
            <van-datetime-picker
                v-model="currentDate"
                type="date"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="confirmBirthday()"
                @cancel="showBirthday=false"
            />
        </van-popup>
        <van-popup
            v-model="showCity"
            position="bottom"
        >
            <van-picker show-toolbar title="选择城市" :columns="cityData" @confirm="confirmCity"/>
        </van-popup>
    </div>
</template>

<script>
    import {getCity,upFil,updateUserInfo,upFile,updateUserAvatar} from "../../api/getData";
    export default {
        name: "EditInfo",
        data() {
            return {
                fileList:[
                ],
                minDate: new Date(1920, 0, 1),
                maxDate: new Date(),
                currentDate: new Date(2000, 0, 1),
                userName:"我是你的爹啊",
                tel:"",
                gender:'1',
                birthday:'',
                city:'',
                desc:'',
                showGender:false,
                showBirthday:false,
                showCity:false,
                cityData:'',
                deviceFile:[],
                age:""
            }
        },
        created() {
            getCity().then(res => {
                this.cityData = res.data.columns;
            })
        },
        mounted(){
            let data = this.$route.query.data;
            this.userName = data.nickName;
            this.gender = data.genderId;
            this.age = data.age;
            this.fileList = [{url:data.avatar}]
        },
        methods: {
            afterRead(file){
                let deviceFile = []  //选择的图片数组
                let formData = new FormData();
                if(Array.isArray(file)){ //因为该组件单选是对象，多选是数组
                    this.deviceFile = file
                }else{
                    this.deviceFile.push(file)
                }
                this.deviceFile.map((item)=>{
                    formData.append('file', item.file ,item.file.name);
                })
                updateUserAvatar(formData).then(res=>{
                    if(res.data.success) {
                        this.$toast({
                            message:"设置头像成功",
                            position:"bottom"
                        });
                        this.bgSrc = formData.background.slice(4,-2);
                    }else{
                        this.$toast({
                            message:res.data.message,
                            position:"bottom"
                        });
                    }
                })
            },
            back() {
                this.$router.push('/mine')
            },
            saveEdit() {
                let formData = {};
                formData.age = this.age;
                formData.genderId = this.gender;
                formData.nickName = this.userName;
                updateUserInfo(formData).then(res=>{

                })

            },
            chooseGender() {
                this.showGender = true;
            },
            chooseBirthday() {
                this.showBirthday = true;
            },
            confirmBirthday() {
                this.birthday = this.currentDate.toLocaleDateString().replace(/\//g, '-');
                this.showBirthday = false;
            },
            chooseCity() {
                this.showCity = true;
            },
            confirmCity(value,index) {
                this.showCity = false;
                this.city = value[1];
            },
            changePass() {
                this.$router.push('/change_pass');
            }
        }
    }
</script>

<style scoped lang="scss">
.edit-info {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #eee;
    .edit-header {
        height: 80px;
        width: 100%;
        position: relative;
        background-color: #1a497d;
        text-align: center;
        border-bottom: 0.5px solid #eee;

        .back-btn {
            width: 100px;
            height: 50px;

            i {
                font-size: 26px;
                position: absolute;
                bottom: 15px;
                color: #ffffff;
            }

            i {
                left: 12px;
            }

            span {
                left: 35px;
            }

        }

        .edit-title {
            position: absolute;
            font-size: 16px;
            left: 50%;
            transform: translateX(-50%);
            top: 38px;
            color: #ffffff;
        }

        .edit-save {
            position: absolute;
            font-size: 16px;
            right: 16px;
            bottom: 22px;
            color: #ffffff;
        }
    }
    .edit-content {
        .choose_avatar {
            position: relative;
            height: 100px;
            font-size: 14px;
            line-height: 100px;
            color: #323233;
        }
        >>>.van-cell:not(:last-child)::after {
            /*border: 0;*/
        }
        >>>.van-cell__value {
            color: #323233;
        }
    }
}
</style>
