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
                        <van-dropdown-item v-model="visiblePermissionId" :options="option" />
                    </van-dropdown-menu>
                </div>
            </div>

        </div>
        <div class="del-btn">
<!--            <van-button plain hairline type="danger" @click="delAlbum" v-if="this.type == 'edit'">删除</van-button>-->
            <van-button plain hairline type="info" @click="addAlbum" v-if="this.type == 'add'">保存</van-button>
        </div>
    </div>
</template>

<script>
    import {addAlbum,updateAlbum} from "../../../api/getData";

    export default {
        name: "EditAlbum",
        data() {
            return {
                title:"",
                title1:"",
                id:"",
                visiblePermissionId:1,
                option: [
                    {text: '所有人可见', value: 3},
                    {text: '仅粉丝可见', value: 2},
                    {text: '仅自己可见', value: 1}
                ],
                type:'',
            }
        },
        mounted() {
            if(this.$route.query.visiblePermissionId) {
                this.visiblePermissionId = this.$route.query.visiblePermissionId
                debugger;
            }
            this.type = this.$route.query.type;
            this.title = this.$route.query.title
            this.title1 = this.$route.query.title
            this.background = this.$route.query.background
            this.id = this.$route.query.id
            console.log( this.visiblePermissionId)

        },
        methods: {
            back() {
                if(this.type == 'edit') {
                    this.$router.push({
                        path:"/album_detail",
                        query: {
                            id: this.id,
                            title:this.title1,
                            visiblePermissionId:this.visiblePermissionId,
                            background:this.background
                        }
                    });
                }else{
                    this.$router.push('/home');
                }
            },
            saveEdit() {
                if(this.type == 'edit') {
                    let formData = {};
                    formData.id = this.id;
                    formData.name = this.title;
                    formData.visiblePermissionId = this.visiblePermissionId;
                    updateAlbum(formData).then(res=>{
                        if(res.data.success) {
                            this.$toast({
                                message:"编辑成功",
                                position:"bottom"
                            });
                            this.$router.push({
                                path:"/album_detail",
                                query: {
                                    id: this.id,
                                    title:this.title,
                                    visiblePermissionId:this.visiblePermissionId
                                }
                            });
                        }else{
                            this.$toast({
                                message:res.data.message,
                                position:"bottom"
                            });
                        }
                    })
                }
            },
            addAlbum(){
                if(this.type == 'add') {
                    addAlbum(this.title,this.value1).then(res => {
                        if(res.data.success) {
                            this.$toast({
                                message:"添加成功",
                                position:"bottom"
                            });
                            this.$router.push({
                                path:"/home",
                            });
                        }else{
                            this.$toast({
                                message:res.data.message,
                                position:"bottom"
                            });
                        }
                    })
                }
            },
            delAlbum() {
                // alert("删除")
                debugger;
            }
        }
    }
</script>

<style scoped lang="scss">
    .edit-album {
        .edit-header {
            height: 80px;
            width: 100%;
            position: relative;
            text-align: center;
            background-color: #1a497d;
            /*border-bottom: 0.5px solid #eee;*/
            .back-btn {
                width: 100px;
                height: 50px;
                i {
                    font-size: 26px;
                    position: absolute;
                    bottom: 15px;
                    color: #fff;
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
                bottom: 20px;
                color: #fff;
            }

            .edit-save {
                position: absolute;
                font-size: 16px;
                right: 16px;
                bottom: 21px;
                color: #fff;
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
