<template>
    <div class="mine-featured">
        <span class="count">全部动态(2)</span>
        <MineFeaturedCard></MineFeaturedCard>
        <MineFeaturedCard></MineFeaturedCard>
        <MineFeaturedCard></MineFeaturedCard>
        <MineFeaturedCard></MineFeaturedCard>
        <MineFeaturedCard></MineFeaturedCard>
        <MineFeaturedCard></MineFeaturedCard>
        <MineFeaturedCard></MineFeaturedCard>
        <MineFeaturedCard></MineFeaturedCard>
        <MineFeaturedCard></MineFeaturedCard>
        <MineFeaturedCard></MineFeaturedCard>
    </div>
</template>

<script>
    import MineFeaturedCard from "./MineFeaturedCard";
    export default {
        components:{
            MineFeaturedCard
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
