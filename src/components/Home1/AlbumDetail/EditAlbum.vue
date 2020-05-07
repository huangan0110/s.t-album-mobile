<template>
    <div class="edit-album">
        <div class="edit-header">
            <div class="back-btn" @click="back">
                <i class="iconfont albumzuojiantou"></i>
            </div>
            <span class="edit-title" v-if="this.type == 'edit'">编辑相册</span>
            <span class="edit-title" v-if="this.type == 'add'">新增相册</span>
            <span class="edit-save" @click="saveEdit" v-if="this.type == 'edit'">保存</span>
        </div>
        <div class="edit-content">
            <van-field v-model="title" label="标题"  placeholder="标题"/>
            <div class="item">
                <span>权限</span>
                <div class="vanmenu">
                    <van-dropdown-menu>
                        <van-dropdown-item v-model="value1" :options="option" />
                    </van-dropdown-menu>
                </div>
            </div>

        </div>
        <div class="del-btn">
            <van-button plain hairline type="danger" @click="delAlbum" v-if="this.type == 'edit'">删除</van-button>
            <van-button plain hairline type="info" @click="delAlbum" v-if="this.type == 'add'">保存</van-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EditAlbum",
        data() {
            return {
                title:"",
                value1:0,
                option: [
                    {text: '所有人可见', value: 0},
                    {text: '仅好友可见', value: 1},
                    {text: '仅自己可见', value: 2}
                ],
                type:''
            }
        },
        mounted() {
            this.type = this.$route.query.type;
            console.log(this.$route.query.type);
        },
        methods: {
            back() {
                if(this.type == 'edit') {
                    this.$router.push('/album_detail');
                }else{
                    this.$router.push('/home');
                }
            },
            saveEdit() {
                alert("保存")
            },
            delAlbum() {
                alert("删除")
            }
        }
    }
</script>

<style scoped lang="scss">
    .edit-album {
        .edit-header {
            height: 50px;
            width: 100%;
            position: relative;
            text-align: center;
            /*border-bottom: 0.5px solid #eee;*/
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
                font-size: 18px;
                right: 16px;
                top: 12px;
            }
        }
        .edit-content {
            >>>.van-cell {
                padding: 13px 16px;
            }
            >>>input::-webkit-input-placeholder {
                font-size: 14px;
            }
            .item {
                height: 50px;
                width: 100%;
                position: relative;
                border-bottom: 0.6px solid #ebedf0;
                font-size: 14px;
                color: #323233;

                >>>.van-hairline--top-bottom::after, .van-hairline-unset--top-bottom::after {
                    border: none;
                }
                >>>.van-dropdown-menu__title {
                    font-size: 14px;
                    color: #323233;

                }
                span {
                    position: absolute;
                    left: 17px;
                    top: 50%;
                    transform: translateY(-50%);
                }
                .vanmenu {
                    float: right;
                    width: 140px;
                }
            }
        }
        .del-btn {
            width: 90%;
            margin: 15px auto;
            >>>.van-button--hairline {
                width: 100%;
            }
        }
    }
</style>
