<template>
    <div class="home">
        <div class="header">
            <span>精选</span>
            <i class="van-icon van-icon-search" @click="find"></i>
        </div>
        <div class="content my-container">
            <div v-for="(item, index) in recData" :key="index">
                <FeaturedCard
                    :imgSrc="item.imgSrc"
                    :title="item.title"
                    :username="item.username"
                    :showLike="item.like"
                    :likeNum="item.likeNum"
                    :viewNum="item.viewNum"
                    :commentNum="item.commentNum"
                    :time="item.time"
                    :showAttention="item.attention"
                    :avatarSrc="item.avatarSrc"
                ></FeaturedCard>
            </div>
        </div>
    </div>
</template>

<script>
import FeaturedCard from "./FeaturedCard/FeaturedCard";
import BScroll from "better-scroll";
export default {
    components: {
        FeaturedCard
    },
    beforeCreate() {
        document.querySelector("body").setAttribute("style", "background:#eee");
    },
    mounted() {
        document.addEventListener("touchstart", this.touch, false);
        document.addEventListener("touchmove", this.touch, false);
        document.addEventListener("touchend", this.touch, false);
    },
    beforeDestroy() {
        document.querySelector("body").setAttribute("style", "background:#fff");
    },
    data() {
        return {
            startY: 0,
            endY: 0,
            deltaY: 0,
            recData: [
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../assets/img/固定图4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../assets/img/固定图1.jpg")
                }
            ]
        };
    },
    methods: {
        touch(event) {
            var event = event || window.event;
            switch (event.type) {
                case "touchstart":
                    var touch = event.touches[0];
                    this.startY = touch.pageY;
                    break;
                case "touchend":
                    break;
                case "touchmove":
                    var touch = event.touches[0];
                    this.endY = touch.pageY;
                    this.deltaY = this.startY - this.endY;
                    break;
            }
            if (this.deltaY > 20) {
                if (
                    location.hash.split("/")[1] == "home" ||
                    location.hash.split("/")[1] == "featured"
                ) {
                    this.$store.commit("setShowTabbar", true);
                }
            }
            if (this.deltaY < -20) {
                if (
                    location.hash.split("/")[1] == "home" ||
                    location.hash.split("/")[1] == "featured"
                ) {
                    this.$store.commit("setShowTabbar", false);
                }
            }
        },
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

    .header {
        height: 50px;
        border-bottom: 1px solid #ddd;
        line-height: 50px;
        padding-left: 20px;
        .van-icon-search {
            float: right;
            font-size: 20px;
            top: 15px;
            right: 20px;
        }
    }
    .content {
        margin-bottom: 60px;
    }
}
</style>
