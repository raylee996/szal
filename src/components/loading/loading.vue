<template>
<div class="loading">
    <img src="./Spinner.gif"><br>
    {{words}}
</div>
</template>
<script>
export default {
    props: {
        words: {
            type: String,
            default: '玩命加载中...'
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
    img{
        width: 40px;
    }
}
</style>
