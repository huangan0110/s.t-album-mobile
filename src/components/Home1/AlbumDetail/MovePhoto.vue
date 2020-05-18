<template>
    <div class="move-photo">
        <div class="move-header">
            <div class="back-btn" @click="backToDetail">
                <i class="iconfont albumzuojiantou"></i>
            </div>
            <span class="title" v-if="type=='move'">移动到</span>
            <span class="title" v-if="type=='upload'">上传到</span>
        </div>
        <div class="move-header1"></div>
        <div class="move-content">
            <div class="album-cell" v-for="(item,index) in albumData" :key="index" @click="choose(item.id,item.name)">
                <div class="album-img" >
                    <van-image
                        width="100%"
                        height="100%"
                        lazy-load
                        fit="cover"
                        :src="item.background"
                    >
                        <template v-slot:error>空空如也</template>
                    </van-image>

                </div>
                <div class="album-info">
                    <span>{{item.name}}</span>
                    <span>{{item.photoNum}}张</span> <span>{{item.see}}</span>
                    <i class="van-icon van-icon-arrow"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {seeAlbum} from "../../../api/getData";

    export default {
        name: "MovePhoto",
        data() {
            return {
                albumData: [],
                type: "upload",
                data:"",
                chooseAfterValue:[],
            }
        },
        mounted() {
            seeAlbum().then(res => {
                this.albumData = res.data.object.rows;
            })
            this.type = this.$route.query.type;
            this.data = this.$route.query.data;
            this.chooseAfterValue = this.$route.query.chooseAfterValue;
            console.log(this.chooseAfterValue)

        },
        methods: {
            choose(id,name) {
                if (this.type == 'move') {
                    this.$router.push('/home')
                } else {
                    this.data.id = id;
                    this.data.name = name;
                    this.$router.push(
                        {
                            path: '/upload',
                            query: {
                                data: this.data
                            }
                        })
                }
            },
            backToDetail() {
                if (this.type == 'move') {
                    this.$router.push('/album_detail')
                } else {
                    this.$router.push(
                        {
                            path: '/upload',
                            query: {
                                data: this.data
                            }
                        })
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .move-photo {
        .move-header {
            height: 50px;
            width: 100%;
            position: fixed;
            background-color: pink;
            font-size: 18px;
            background-color: #fff;
            z-index: 999;
            border-bottom: 0.5px solid #eee;

            .back-btn {
                width: 100px;
                height: 50px;

                i {
                    font-size: 26px;
                    color: #000;
                    position: absolute;
                    top: 13px;
                    left: 13px;
                }
            }

            .title {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 14px;
            }
        }

        .move-header1 {
            height: 50px;
            width: 100%;
        }

        .move-content {
            .add-album {
                width: 100%;
                height: 80px;

                .add-icon {
                    width: 80px;
                    height: 80px;
                    background-color: #f7f8fa;
                    float: left;
                    position: relative;
                    border-bottom: 0.6px solid #eee;

                    i {
                        font-size: 30px;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                        top: 25px;
                        color: #0570db;
                    }
                }

                .add-tip {
                    border-bottom: 0.6px solid #eee;
                    width: calc(100% - 80px);
                    height: 80px;
                    position: relative;
                    float: left;
                    font-size: 16px;
                    color: #0570db;

                    span {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                        left: 15px;
                    }
                }

                .add-tip:active {
                    background-color: #f7f8fa;
                }
            }

            .album-cell {
                width: 100%;
                height: 80px;

                .album-img {
                    height: 80px;
                    width: 80px;
                    float: left;
                    border-bottom: 0.6px solid #eee;

                    img {
                        width: 80px;
                        height: 80px;
                        object-fit: cover;
                    }
                }

                .album-info {
                    width: calc(100% - 80px);
                    height: 80px;
                    float: left;
                    position: relative;
                    border-bottom: 0.6px solid #eee;

                    span:first-child {
                        font-size: 16px;
                        position: absolute;
                        top: 15px;
                        left: 15px;
                    }

                    span:nth-child(2) {
                        position: absolute;
                        top: 50px;
                        left: 15px;
                        font-size: 14px;
                        color: #666;
                    }

                    span:nth-child(3) {
                        position: absolute;
                        top: 50px;
                        left: 75px;
                        font-size: 14px;
                        color: #666;
                    }

                    i {
                        position: absolute;
                        font-size: 20px;
                        right: 10px;
                        top: 50%;
                        transform: translateY(-50%);
                        color: #777;
                    }
                }

                .album-info:active {
                    background-color: #f7f8fa;
                }
            }
        }
    }
</style>
