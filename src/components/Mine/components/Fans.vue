<template>
    <div class="fans">
        <span class="count">全部粉丝(5)</span>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
    </div>
</template>

<script>
    import AttentionCell from "../../Common/AttentionCell";
    export default {
        name: "Fans",
        components:{
            AttentionCell
        }
    }
</script>

<style scoped lang="scss">
.fans {
    .count {
        margin-left: 20px;
        font-size: 12px;
        color: #666;
    }
}
</style>
