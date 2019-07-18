<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <div class="banner">
                <img src="./images/banner.jpg" alt="">
            </div>
            <div class="text text01">
                <p>森林世界依托大阳山生态旅游资源和苏州乐园品牌资源，打造高品质、融入森林场景体验、顶尖游乐设备、主题度假生活的度假空间。</p>
            </div>
            <img src="./images/1.jpg" alt="" class="order">
            <div class="text text02">
                <p>森林世界的森林主题传递着都市人群渴望的自然归属，以及最自然原生态的休闲度假方式，森林的天然氧吧、四季的鸟语花香，正是都市人群向往的轻松惬意。</p>
            </div>
            <div class="img_box">
                <img src="./images/img1.jpg" alt="" class="img1">
            </div>
            <img src="./images/2.jpg" alt="" class="order">
            <div class="text text03">
                <p>真山真水的度假目的地与北纬31°森林的主题演绎，就是森林世界差异化亮点所在。</p>
            </div>
            <div class="img_box">
                <img src="./images/img2.jpg" alt="" class="img2">
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
