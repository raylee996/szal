<template>
    <div class="discount_details">
        <h1>{{detail.title}}</h1>
        <div class="title">
            <span>{{detail.CreateDate}}</span>
        </div>
        <div class="content" v-html="detail.content"></div>
    </div>
</template>

<script>
export default {
    props: {
        detail: {
            type: Object,
            default() {
                return {}
            }
        }
    }
}
</script>

<style lang="less" scoped>

.discount_details {
    padding: 1.2rem .25rem .25rem;
    box-sizing: border-box;
}
.discount_details img {
    max-width: 100% !important;
    position: static !important;
}
.discount_details h1 {
    font-size: .46rem;
    color: #4a4949;
    font-weight: bold;
    padding: .25rem;
    box-sizing: border-box;
}
.discount_details .title {
    font-size: .24rem;
    color: #3888c0;
    padding: 0 .25rem .25rem;
    box-sizing: border-box;
    margin-top: 0 auto;
}
.discount_details .title span {
    color: #878787;
    display: inline-block;
    margin-right: .25rem;
}
.discount_details .content {
    font-size: .28rem;
    color: #393939;
    padding: 0;
    box-sizing: border-box;
}
</style>
