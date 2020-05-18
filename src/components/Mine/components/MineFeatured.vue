<template>
    <div class="mine-featured">
        <span class="count">全部动态(2)</span>
<!--        <FeaturedCard-->
<!--            v-for="(item,index) in shareData"-->
<!--            :imageList="item.imageList"-->
<!--            :browseNum="item.browseNum"-->
<!--            :commentNum="item.commentNum"-->
<!--            :content="item.content"-->
<!--            :id="item.id"-->
<!--            :userInfo="item.userInfo"-->
<!--            :likeNum="item.likeNum"-->
<!--            :createTime="item.createTime"-->
<!--            :isDelete="false"-->
<!--        ></FeaturedCard>-->
    </div>
</template>

<script>
    import FeaturedCard from "../../Common/FeaturedCard";
    export default {
        components:{
            FeaturedCard
        },
        name: "Featured"
    }
</script>

<style scoped lang="scss">
.mine-featured {
    position: relative;
    width: 100%;
    background-color: #eee;
    padding-top: 7px;
    .count {
        margin-left: 15px;
        font-size: 12px;
        color: #666;
    }
}
</style>
