<template>
    <div class="mine-featured">
        <span class="count">全部动态(2)</span>
        <FeaturedCard></FeaturedCard>
        <FeaturedCard></FeaturedCard>
        <FeaturedCard></FeaturedCard>
        <FeaturedCard></FeaturedCard>
        <FeaturedCard></FeaturedCard>
        <FeaturedCard></FeaturedCard>
        <FeaturedCard></FeaturedCard>
        <FeaturedCard></FeaturedCard>
        <FeaturedCard></FeaturedCard>
        <FeaturedCard></FeaturedCard>
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
