<template>
    <div class="upload">
        <div class="upload-header">
            <div class="back-btn" @click="back">
                <i class="van-icon van-icon-arrow-left"></i> <span>取消</span>
            </div>
            <span class="upload-title">上传照片</span>
        </div>
        <div class="up-header"></div>
    </div>
</template>

<script>
    export default {
        name: "UpLoad"
    }
</script>

<style scoped lang="scss">
    .upload {
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
        }

        .up-header {
            height: 50px;
        }
    }
</style>
