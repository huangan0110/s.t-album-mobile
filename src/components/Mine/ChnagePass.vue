<template>
    <div class="change-pass">
        <div class="edit-header">
            <div class="back-btn" @click="back">
                <i class="iconfont albumzuojiantou"></i>
            </div>
            <span class="edit-title" >修改密码</span>
<!--            <span class="edit-save" @click="saveEdit">保存</span>-->
        </div>
        <div class="change-content">
            <van-cell-group>
                <van-field v-model="value" placeholder="请输入旧密码" />
                <van-field v-model="value" placeholder="请输入新密码" />
                <van-field v-model="value" placeholder="请再次输入密码" />
            </van-cell-group>
            <br>
            <van-button type="primary">确认修改</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ChnagePass",
        data() {
            return {

            }
        },
        methods: {
            back() {
                this.$router.push("/edit_info");
            }
        }
    }
</script>

<style scoped lang="scss">
.change-pass {
    color: #555;
    .edit-header {
        height: 50px;
        width: 100%;
        position: relative;
        text-align: center;

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
            font-size: 18px;
            right: 16px;
            top: 12px;
        }
    }
    .change-content {
        >>>.van-button {
            width: 80%;
            left: 10%;
        }
    }
}
</style>
