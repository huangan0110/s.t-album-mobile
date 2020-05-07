<template>
    <div class="type">
        <div class="header">
            <i class="van-icon van-icon-arrow-left" @click="goBack"></i>
            <span>风光</span>
        </div>
        <div style="height:50px;"></div>
        <div class="content">
                <div v-for="(item, index) in recData" :key="index" class="divitem">
                    <TypeImgCard :imgSrc="item.imgSrc"
                    :title="item.title"
                    :username="item.username"
                    :showLike="item.like"
                    :likeNum="item.likeNum"
                    :viewNum="item.viewNum"
                    :commentNum="item.commentNum"
                    :time="item.time"
                    :showAttention="item.attention"
                    :avatarSrc="item.avatarSrc"></TypeImgCard>
                </div>
                
        </div>
    </div>
</template> 

<script>
import TypeImgCard from "./TypeImgCard";
export default {
    components: {
        TypeImgCard
    },
    data() {
        return {
            recData: [
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/fixed1.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed1.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/fixed2.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed2.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/shu.png"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed2.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/fixed5.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed2.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed2.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/shu.png"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed2.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed2.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/shu.png"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed2.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed2.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/shu.png"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed2.jpg")
                },
                {
                    title: "假装在法国",
                    imgSrc: require("../../../assets/img/fixed4.jpg"),
                    like: true,
                    viewNum: 23,
                    commentNum: 3,
                    username: "mirsan",
                    attention: true,
                    time: "一天前",
                    avatarSrc: require("../../../assets/img/fixed2.jpg")
                },
            ]
        }
    },
    methods: {
        goBack() {
            this.$router.push('/find');
        }
    }
};
</script>

<style scoped lang="scss">
.type {
    width: 100%;
    .header {
        height: 50px;
        width: 100%;
        text-align: center;
        background-color: #fff;
        line-height: 50px;
        font-size: 20px;
        position: fixed;
        top: 0;
        border-bottom: 1px solid #ccc;
        box-shadow: 5px 25px 15px rgba(0, 0, 0, 0.05);
        i {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .content {
        width: calc(100% - 6px);
        padding: 3px;
        ul {
            list-style: none;
            width: 100%;
            overflow: hidden;    
        }
        .divitem {
            float: left;
            display: inline-block;
            width: calc(50% - 4.5px) ;
            transition: linear 0.1s;
            margin:2px;
        }
        li:active {
            -webkit-filter: brightness(80%); /* Chrome, Safari, Opera */
            filter: brightness(80%);
        }
    }
}
</style>