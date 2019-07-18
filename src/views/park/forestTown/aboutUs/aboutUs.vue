<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <div class="banner">
                <img src="./images/banner.jpg" alt="">
            </div>
            <div class="text text01">
                <p>森林小镇位于大阳山国家森林公园，依托自然生态环境，创新打造“森林+”概念产品体验基地：春季首发清新文艺的森林蘑菇街、夏季呈现生态动感的森林水世界、秋季奇境森托邦、冬季森林冰雪村，全年打造四季不同体验的森林小镇。</p>
            </div>
            <img src="./images/1.jpg" alt="" class="order">
            <div class="text text02">
                <p>森林嘉年华为森林小镇的升级力作，延续“ 森林+”概念产品体验，打造森林VR bar、森林海洋球馆2大人气必玩项目！奇境森托邦，以一种全新的森林玩法，为森林小镇注入新活力，成为苏州森林主题游乐的新地标。</p>
            </div>
            <div class="img_box">
                <img src="./images/img1.jpg" alt="" class="img1">
            </div>
            <img src="./images/2.jpg" alt="" class="order">
            <div class="text text03">
                <p>2017年12月森林小镇打造“森林冰雪村” 1000平的室内空间，邀请知名冰雕团队打造室内唯美冰雪森林！项目更新增10大冰雪玩点，升级3大经典游乐，将完美呈现森林冰雪的浪漫与奇幻，尽享冬日乐趣。</p>
            </div>
            <div class="img_box">
                <img src="./images/img2.jpg" alt="" class="img1">
            </div>
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
            text: "景区概括",
            classname: "common"
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
    background: #fff;
    .banner{
        img{
            display: block;
            width: 100%;
        }
    }
    .text{
        font-size: 0.24rem;
        color: #333333;
        line-height: 0.48rem;
        text-indent: 2em;
        padding: 0 0.3rem;
        &.text01{
            margin: 0.25rem 0 0.9rem;
        }
        &.text02{
            margin-bottom: 0.2rem;
        }
        &.text03{
            margin-bottom: 0.1rem;
        }
    }
    .order{
        display: block;
        width: 1.98rem;
        margin: 0 auto 0.2rem;
    }
    .img1{
        width: 7.29rem;
        margin: 0 auto 0.55rem;
    }
    .img2{
        width: 7.29rem;
        margin: 0 auto 0.55rem;
    }
}
</style>
