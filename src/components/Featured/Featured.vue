<template>
    <div class="home">
        <div class="home-header">
            <span class="title">精选</span>
            <i class="clearmsg iconfont albumsousuo4" @click="$router.push('/find')"></i>
        </div>
        <div style="height:50px;"></div>
        <div class="content">
            <FeaturedCard></FeaturedCard>
            <FeaturedCard></FeaturedCard>
            <FeaturedCard></FeaturedCard>
            <FeaturedCard></FeaturedCard>
            <FeaturedCard></FeaturedCard>
            <FeaturedCard></FeaturedCard>
            <FeaturedCard></FeaturedCard>
            <FeaturedCard></FeaturedCard>
        </div>
    </div>
</template>

<script>
import FeaturedCard from "../Common/FeaturedCard";
import BScroll from "better-scroll";
export default {
    components: {
        FeaturedCard
    },
    beforeCreate() {
        document.querySelector("body").setAttribute("style", "background:#eee");
    },
    beforeDestroy() {
        document.querySelector("body").setAttribute("style", "background:#fff");
    },
    data() {
        return {
            recData: [
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: false,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/fixed1.jpg")
                }
            ]
        };
    },
    methods: {
        find() {
            this.$router.push('/find')
        }
    }
};
</script>

<style scoped lang="scss">
.home {
    width: 100%;
    // height: 100%;
    position: relative;
    .home-header {
        height: 50px;
        width: 100%;
        position: fixed;
        top: 0;
        z-index: 9;
        background-color: #fff;
        border-bottom: 0.5px solid #cccccc;
        .title {
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
            font-size: 18px;
            font-weight: 500;
            color: #555;
        }
        .clearmsg {
            position: absolute;
            top: 50%;
            right: 20px;
            transform: translateY(-50%);
            font-size: 20px;
            font-weight: 500;
            color: #555;
        }
    }

    .content {
        margin-bottom: 60px;
    }
}
</style>
