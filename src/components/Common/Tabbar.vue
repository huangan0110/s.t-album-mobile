<template>
    <div class="tabbar" :class="{ tabbarHide: showTB}">
        <ul>
            <li @click="goPath(1,'/home')" @touchstart="bgt(1)" @touchend="bg">
                <i
                    class="iconfont albumshouye2"
                    :class="[{ active: 1 == checkIndex },{touched:istouched == 1}]"
                ></i>
            </li>
            <li @click="goPath(2,'/featured')" @touchstart="bgt(2)" @touchend="bg">
                <i
                    class="iconfont albumsousuo4"
                    :class="[{ active: 2 == checkIndex },{touched:istouched == 2}]"
                ></i>
            </li>
            <li>
                <i class="iconfont albumtianjia add" @click="addPhoto"></i>
            </li>
            <li @click="goPath(4,'/notice')" @touchstart="bgt(4)" @touchend="bg">
                <i
                    class="iconfont albumtixing4"
                    :class="[{ active: 4 == checkIndex },{touched:istouched == 4}]"
                ></i>
            </li>
            <li @click="goPath(5,'/mine')" @touchstart="bgt(5)" @touchend="bg">
                <i
                    class="iconfont albumwo1"
                    :class="[{ active: 5 == checkIndex },{touched:istouched == 5}]"
                ></i>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                checkIndex: "1",
                istouched: 0,
                showAddPop: false,
                fileList: [],
                imgBase64: []
            };
        },
        watch: {
            '$route':'getPath'
        },

        methods: {
            getPath(){
                console.log(this.$route.path);
                let path = this.$route.path;
                switch (path) {
                    case '/home':this.checkIndex = '1';break;
                    case '/featured':this.checkIndex = '2';break;
                    case '/notice':this.checkIndex = '4';break;
                    case '/mine':this.checkIndex = '5';break;
                }
            },
            getContainer() {
                return document.querySelector(".my-container");
            },
            goPath(index, path) {
                if (index == 5 && !localStorage.getItem('access_token')) {
                    this.$router.push("email-login");
                    location.reload();
                } else {
                    this.checkIndex = index;
                    this.$router.push(path);
                }
            },
            bg() {
                this.istouched = 0;
            },
            bgt(index) {
                this.istouched = index;
            },
            addPhoto() {
                // this.showAddPop = true;
                this.$router.push('/upload')
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
        computed: {
            showTB() {
                return this.$store.state.showTabbar;
            }
        }
    };
</script>

<style scoped lang="scss">
    .active {
        color: #1296db !important;
    }

    .touched {
        // border: 30px solid rgba($color: #ddd, $alpha: 0.5);
        background-color: rgba($color: #ddd, $alpha: 0.7);
        padding: 35px;
    }

    .tabbarHide {
        bottom: -50px !important;
    }

    .tabbar {
        height: 50px;
        width: 100%;
        background-color: #fff;
        position: fixed;
        z-index: 999;
        bottom: 0;
        border-top: 1px solid #ddd;
        overflow: hidden;
        transition: linear 0.15s;

        ul {
            width: 100%;
            height: 50px;
            list-style-type: none;
            margin: 0;
            padding: 0;
        }

        ul li {
            position: relative;
            float: left;
            width: 20%;
            height: 50px;
            text-align: center;

            i {
                font-size: 26px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #444;
                transition: linear 0.15s;
                border-radius: 50%;
            }

            .add {
                color: #fff;
                background-color: #1296db;
                padding: 5px 12px;
                border-radius: 15px;
            }
        }
    }

    .picup {
        margin-top: 20px;
    }
</style>
