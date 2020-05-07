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
            <van-field
                v-model="userName"
                label="昵称"
                placeholder="请输入昵称"
                input-align="right"
            />
            <br>
            <van-cell-group>
                <van-field
                    v-model="tel=='' ? '暂无':tel"
                    label="电话"
                    placeholder="请输入电话"
                    input-align="right"
                />
                <van-cell title="性别" :value="gender=='1' ? '男':'女'" clickable @click="chooseGender"/>
                <van-cell title="生日" :value="birthday=='' ? '暂无':birthday" clickable @click="chooseBirthday"/>
                <van-cell title="城市" :value="city == '' ? '暂无':city" clickable @click="chooseCity"/>
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
            <van-cell title="女" clickable @click="gender='0',showGender=false">
                <template #right-icon v-if="gender == 0">
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
    import {getCity} from "../../api/getData";
    export default {
        name: "EditInfo",
        data() {
            return {
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
                cityData:''
            }
        },
        created() {
            getCity().then(res => {
                this.cityData = res.data.columns;
            })
        },
        methods: {
            back() {
                this.$router.push('/mine')
            },
            saveEdit() {
                alert("保存")
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
        height: 50px;
        width: 100%;
        position: relative;
        background-color: #fff;
        text-align: center;
        border-bottom: 0.5px solid #eee;

        .back-btn {
            width: 100px;
            height: 50px;

            i {
                font-size: 26px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
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
            top: 12px;
        }

        .edit-save {
            position: absolute;
            font-size: 16px;
            right: 16px;
            top: 14px;
        }
    }
    .edit-content {
        >>>.van-cell:not(:last-child)::after {
            /*border: 0;*/
        }
        >>>.van-cell__value {
            color: #323233;
        }
    }
}
</style>
