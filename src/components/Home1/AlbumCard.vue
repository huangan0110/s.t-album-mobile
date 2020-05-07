<template>
    <div class="album-card" @click="goPath('/album_detail')">
        <img :src="imgSrc" alt="">
        <span style="color: #333; font-size: 13px">{{title}}</span><span>{{photoNum}}张</span>
    </div>
</template>

<script>
    export default {
        name: "AlbumCard",
        data() {
            return {

            }
        },
        props:{
            title:{
                type:String,
                default:"",
            },
            photoNum:{
                type:String,
                default: 0,
            },
            imgSrc:{
                type:String,
                default:''
            }
        },
        methods: {
            goPath(url) {
                this.$router.push(url)
            }
        }
    }
</script>

<style scoped lang="scss">
.album-card {
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 47vw;
        object-fit: cover;
        border-radius: 5px;
    }
    span:last-child {
        float: right;
        margin-top: 3px;
        margin-right: 10px;
        font-size: 10px;
        color: #aaa;
    }
}
</style>
