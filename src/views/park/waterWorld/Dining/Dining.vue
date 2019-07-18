<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <img src="./images/img1.jpg" alt="" class="img">
            <div class="text">
                <p>森林世界每一区域的特色建筑内，都设立有结合区域特色的商售项目与餐饮项目。文创商店与餐厅分别以森林主题区域的植物和动物命名，为游客带来妙趣横生的购物餐饮体验。</p>
            </div>
            <img src="./images/img2.jpg" alt="" class="img">
            <div class="text">
                <p>森灵树之家、松萝小栈、雪莲集市等十余家主题商店内，陈列和出售着众多乐园明星的周边纪念品和丰富的游园装饰品，让森林世界的欢乐走出乐园陪伴每一位游客。</p>
                <p>园内拥有熊猫食府、长颈鹿西餐厅、企鹅咖啡吧、动物大食堂等8家风格各异的主题餐厅，此外还设有火烈鸟补给站、北极熊补给站两个美食驿站。让游客在尽享游玩乐趣的同时，品尝各款特色美食。</p>
            </div>
            <img src="./images/img3.jpg" alt="" class="img">
            <div class="icon">
                <img src="./images/icon.jpg" alt="">
            </div>
            <img src="./images/img4.jpg" alt="" class="img">
        </div>
        <!-- <sticky-footer></sticky-footer> -->
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";

export default {
    data() {
        return {
            text: "餐饮购物",
            classname: "forestWorld inner_fixed"
        }
    },
    components: {
        innerHeader,
        stickyFooter
    }
}
</script>

<style lang="less" scoped>
.container{
    padding-top: 50px;
    background: #ff5a21;
    .img{
        display: block;
        width: 100%;
    }
    .text{
        width: 100%;
        padding: 0.7rem 0.3rem;
        margin: -0.2rem 0;
        background: url(images/textBg.png);
        background-size: 100% 100%;
        font-size: 0.24rem;
        color: #fff;
        line-height: 0.48rem;
        box-sizing: border-box;
        position: relative;
        z-index: 1;
    }
    .icon{
        padding: 0.4rem 0.3rem;
        background: #fff;
        img{
            display: block;
            width: 100%;
        }
    }
}
</style>
