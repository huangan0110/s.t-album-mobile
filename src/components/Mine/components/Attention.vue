<template>
    <div class="attention">
        <span class="count">全部关注(6)</span>
        <AttentionCell @click="viewAttention"></AttentionCell>
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
                id:""
            }
        },
        mounted() {
            // this.id = this.$router.query.id;
        },
        methods:{
            viewAttention() {
                this.$router.push({
                    path:"/other",
                    query:{
                        id:this.id
                    }
                })
            }
        }
    }
</script>

<style scoped lang="scss">
.attention {
    .count {
        margin-left: 20px;
        font-size: 12px;
        color: #666;
    }
}
</style>
