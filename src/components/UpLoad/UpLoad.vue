<template>
    <div class="upload">
        <div class="upload-header">
            <div class="back-btn" @click="back">
                <i class="van-icon van-icon-arrow-left"></i> <span>取消</span>
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
            <van-cell title="上传到" is-link value="请选择" @click="chooseUpList"/>
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
                <van-uploader v-model="fileList" multiple :max-count="9" :after-read="afterRead"/>
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
    </div>
</template>

<script>
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
                qualityName: '正常'
            }
        },
        methods: {
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
                this.$router.push('/move_photo')
            },
            back() {
                this.$router.push('/home');
            },
            uploadPic() {
                for (var index in this.fileList) {
                    this.compress(this.fileList[index]);
                }
                console.log(this.imgBase64);
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
        // beforeCreate() {
        //     document.querySelector("body").setAttribute("style", "background:#eee");
        // },
        // beforeDestroy() {
        //     document.querySelector("body").setAttribute("style", "background:#fff");
        // },
    }
</script>

<style scoped lang="scss">
    .upload {
        position: absolute;
        height: 100%;
        width: 100%;
        background-color: #eee;

        .quality-pup {
            .van-icon, .van-icon::before {
                color: #1989fa;
                top: 10px;
            }
        }

        .upload-header {
            height: 50px;
            width: 100%;
            background-color: pink;
            position: fixed;

            .back-btn {
                width: 100px;
                height: 50px;
                font-size: 18px;

                i, span {
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

            .upload-title {
                position: absolute;
                font-size: 18px;
                left: 50%;
                transform: translateX(-50%);
                top: 12px;
            }

            .up-btn {
                position: absolute;
                right: 25px;
                top: 50%;
                transform: translateY(-50%);
                font-size: 18px;
            }
        }

        .up-header {
            height: 50px;
        }

        .upload-content {
            >>>.van-field__label {
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
                >>>.van-uploader__upload {
                    background-color: #eee!important;
                    margin-bottom: 16px;
                }
                >>>.van-uploader__preview {
                    margin: 0 12px 18px 0!important;
                }
            }
        }
    }
</style>
