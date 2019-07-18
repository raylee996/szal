<template>
<div class="loading">
    {{words}}
</div>
</template>
<script>
export default {
    props: {
        words: {
            type: String,
            default: '暂无结果'
        }
    }
}
</script>
<style lang="less">
.loading{
    text-align: center;
    font-size: 16px;
    color: #333;
    padding: 50px 0;
}
</style>
