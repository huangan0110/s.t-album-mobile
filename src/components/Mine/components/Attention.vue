<template>
    <div class="attention">
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
        <AttentionCell></AttentionCell>
    </div>
</template>

<script>
    import AttentionCell from "../../Common/AttentionCell";
    export default {
        name: "Attention",
        components:{
            AttentionCell
        },
        data() {
            return {

            }
        }
    }
</script>

<style scoped lang="scss">
.attention {

}
</style>
