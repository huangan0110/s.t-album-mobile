<template>
    <div class="upload">
        <div class="upload-header">
            <div class="back-btn" @click="back">
                <i class="iconfont albumzuojiantou"></i>
            </div>
            <span class="upload-title">上传照片</span>
            <span @click="uploadPic" class="up-btn">上传</span>
        </div>
        <div class="up-header"></div>
        <div class="upload-content">
            <van-field
                v-model="pictitle"
                clearable
                label="描述"
                placeholder="请输入描述"
            />
            <br>
            <van-cell title="上传到" is-link :value="name" @click="chooseUpList"/>
            <van-cell title="画质" is-link :value="qualityName" @click="showPicQuality = !showPicQuality"/>
            <br>
            <van-cell
                clickable
                title="分享到精选"
                @click="checked=!checked"
            >
                <div class="v-checkbox">
                    <van-checkbox v-model="checked"></van-checkbox>
                </div>
            </van-cell>
            <br>
            <div class="picup">
                <div class="picup-title">
                    <span>选择图片</span>
                </div>
                <van-uploader v-model="fileList" multiple :max-count="9" :after-read="afterRead" :disabled="disabled"/>
            </div>
        </div>
        <div class="quality-pup">
            <van-popup
                v-model="showPicQuality"
                position="bottom"
            >
                <van-cell title="正常" label="流量消耗较少，推荐使用" clickable @click="chooseQuality('small')">
                    <template #right-icon v-if="quality == 'small'">
                        <van-icon
                            name="success"
                            style="line-height: inherit;"
                        />
                    </template>
                </van-cell>
                <van-cell label="照片质量高，上传速度慢" clickable @click="chooseQuality('medium')">
                    <template #title>
                        <span class="custom-title">高清</span>
                        <span style="color:#fff;background: red;border-radius: 3px;padding: 0 2px;">HD</span>
                    </template>
                    <template #right-icon v-if="quality == 'medium'">
                        <van-icon
                            name="success"
                            style="line-height: inherit;"
                        />
                    </template>
                </van-cell>
                <van-cell title="原图" label="上传速度慢，非WIFI下不建议使用" clickable @click="chooseQuality('large')">
                    <template #right-icon v-if="quality == 'large'">
                        <van-icon
                            name="success"
                            style="line-height: inherit;"
                        />
                    </template>
                </van-cell>
            </van-popup>
        </div>
        <van-overlay :show="show">
            <van-loading size="24px">上传中...</van-loading>
        </van-overlay>
    </div>
</template>

<script>
    import {upImg} from "../../api/getData";

    export default {
        name: "UpLoad",
        data() {
            return {
                fileList: [],
                imgBase64: [],
                showPicQuality: false,
                checked: false,
                pictitle: '',
                quality: 'small',
                qualityName: '正常',
                data: "",
                id: "",
                name: "请选择",
                disabled: false,
                type: '',
                show: false,
                background: ""
            }
        },
        mounted() {
            let routerData = this.$route.query.data;
            if (routerData) {
                console.log(routerData)
                this.pictitle = routerData.desc;
                this.checked = routerData.checked;
                this.qualityName = routerData.qualityName;
                this.quality = routerData.quality;
                this.id = routerData.id;
                this.name = routerData.name;
                this.background = routerData.background;
                if (routerData.type == 'detailUpload') {
                    this.type = 'detailUpload';
                }
            }
            if (this.name == null || this.name == "" || this.name == "请选择" || this.name == undefined) {
                this.disabled = true;
            } else {
                this.disabled = false;
            }

        },
        methods: {
            test() {
                console.log("121");
            },
            chooseQuality(quality) {
                this.quality = quality;
                if (quality == 'small') {
                    this.qualityName = '正常'
                } else if (quality == 'medium') {
                    this.qualityName = '高清'
                } else {
                    this.qualityName = '原图'
                }
                this.showPicQuality = false;
            },
            chooseUpList() {
                if (this.type == 'detailUpload') {

                } else {
                    this.$router.push({
                        path: '/move_photo',
                        query: {
                            type: 'upload',
                            data: {
                                desc: this.pictitle,
                                qualityName: this.qualityName,
                                checked: this.checked,
                                quality: this.quality,
                                id: this.id,
                                name: this.name,
                                background: this.background
                            }
                        }
                    })
                }
            },
            back() {
                if (this.type == 'detailUpload') {
                    console.log(this.id)
                    this.$router.push({
                        path: '/album_detail',
                        query: {
                            id: this.id,
                            title: this.name,
                            background: this.background
                        }
                    });
                } else {
                    this.$router.push('/home');
                }
            },
            uploadPic() {
                this.show = true;
                // for (var index in this.fileList) {
                //     this.compress(this.fileList[index]);
                // }
                let formData = {};
                let isShare = 0;
                if (this.checked) {
                    isShare = 1;
                } else {
                    isShare = 0;
                }
                formData = [];
                console.log(this.fileList)
                for (let i = 0; i < this.fileList.length; i++) {
                    formData.push({
                        author: "",
                        albumId: this.id,
                        fileName: (Date.parse(new Date()) + i).toString(),
                        ext: this.fileList[i].file.type.slice(6, 10),
                        base64: this.fileList[i].content
                    })
                }
                upImg(formData, isShare, this.pictitle).then(res => {
                    if (res.data.success) {

                        this.$toast({
                            message: "上传成功",
                            position: "bottom"
                        });
                        this.show = false;
                        this.$router.push({
                            path: '/album_detail',
                            query: {
                                id: this.id,
                                title: this.name,
                                background: this.background
                            }
                        });
                    } else {
                        this.$toast({
                            message: res.data.message,
                            position: "bottom"
                        });
                    }
                })

            },
            afterRead(file) {
            },
            //压缩图片
            compress(file) {
                var quality = 0;
                if (file.file.size < 600000) {
                    quality = 0.92
                } else if (file.file.size < 1000000) {
                    quality = 0.8;
                } else if (file.file.size < 4000000) {
                    quality = 0.7;
                } else if (file.file.size < 8000000) {
                    quality = 0.6;
                } else {
                    quality = 0.5;
                }
                if (quality != 0) {
                    let canvas = document.createElement("canvas");
                    let context = canvas.getContext("2d");
                    let img = new Image();
                    img.src = file.content;
                    img.onload = () => {
                        canvas.width = img.width / 2;
                        canvas.height = img.height / 2;
                        context.drawImage(img, 0, 0, img.width / 2, img.height / 2);
                        file.content = canvas.toDataURL(file.file.type, quality);
                        this.imgBase64.push(file.content);
                    };
                } else {
                    this.imgBase64.push(file.content);
                }
            },
        },

    }
</script>

<style scoped lang="scss">
    .upload {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #eee;

        .van-overlay {
            z-index: 999;
            text-align: center;

            .van-loading {
                margin-top: 80%;
            }
        }

        .quality-pup {
            .van-icon, .van-icon::before {
                color: #1989fa;
                top: 10px;
            }
        }

        .upload-header {
            height: 50px;
            width: 100%;
            position: fixed;
            background-color: #fff;
            border-bottom: 0.5px solid #eee;
            color: #555;
            z-index: 999;

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

            .upload-title {
                position: absolute;
                font-size: 16px;
                left: 50%;
                transform: translateX(-50%);
                top: 12px;
            }

            .up-btn {
                position: absolute;
                right: 25px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 16px;
            }
        }

        .up-header {
            height: 50px;
        }

        .upload-content {
            > > > .van-field__label {
                width: 55px;
            }

            .v-checkbox {
                right: 0;
                position: absolute;
            }

            .picup {
                padding: 14px 10px 0 10px;
                background-color: #fff;

                .picup-title {
                    font-size: 14px;
                    color: #323233;
                    margin-bottom: 10px;

                    span {
                        margin-left: 6px;
                    }
                }

                > > > .van-uploader__upload {
                    background-color: #eee !important;
                    margin-bottom: 16px;
                }

                > > > .van-uploader__preview {
                    margin: 0 12px 18px 0 !important;
                }
            }
        }
    }
</style>
