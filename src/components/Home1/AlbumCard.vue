<template>
    <div class="album-card" @click="viewAlbum">
        <van-image
            width="100%"
            lazy-load
            fit="cover"
            :src="imgSrc"
        >
            <template v-slot:error v-if="photoNum!=0">暂无封面 (*╹▽╹*)</template>
            <template v-slot:error v-else>空空如也 o(╥﹏╥)o</template>
            <template v-slot:loading><van-loading /></template>
        </van-image>
        <span style="color: #333; font-size: 13px">{{title}}</span><span>{{photoNum}}张</span>
    </div>
</template>

<script>
    export default {
        name: "AlbumCard",
        created() {

        },
        data() {
            return {}
        },
        props: {
            id: {
                type: Number,
                default: 0
            },
            title: {
                type: String,
                default: "",
            },
            imgSrc: {
                type: String,
                default: ''
            },
            photoNum:{
                type: Number,
                default: 0
            },
            visiblePermissionId:{
                type: Number,
                default: 1
            },
        },
        methods: {
            goPath(url) {
                this.$router.push(url)
            },
            viewAlbum() {
                this.$router.push(
                    {
                        path: 'album_detail',
                        query: {
                            id: this.id,
                            title:this.title,
                            visiblePermissionId:this.visiblePermissionId,
                            background:this.imgSrc
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped lang="scss">
    .album-card {
        width: 100%;
        height: 100%;

        /*img {*/
        /*    width: 100%;*/
        /*    height: 47vw;*/
        /*    object-fit: cover;*/
        /*    border-radius: 5px;*/
        /*}*/
        span:last-child {
            float: right;
            margin-top: 3px;
            margin-right: 10px;
            font-size: 10px;
            color: #aaa;
        }

        .van-image {
            width: 100%;
            height: 47vw;
            border-radius: 5px;
            overflow: hidden;
        }
    }
</style>
