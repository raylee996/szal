<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <div class="banner">
                <img src="./images/banner.jpg" alt="">
            </div>
            <div class="text text01">
                <p> 这里“所见即森林”，热带风情休闲区、虫虫雨林欢乐区、律动海滨狂欢区和神秘森林探险区内各项全球顶尖的水上项目皆具森林特色。</p>
            </div>
            <img src="./images/1.jpg" alt="" class="order">
            <div class="text text02">
                <p>其中，虫虫雨林欢乐区中的项目包括蘑菇戏水池、七彩瓢虫窝、精灵戏水屋、溪谷漂流河，光听名字就能感受到其中满满的童话感，开园后，肯定能成为孩子们游乐的天堂。在神秘森林探险区，主要项目包括丛林龙卷风、暴风谷、急速丛林、绿野迷踪、光速飞瀑、绿洲风情池池，每一样都能给游客带来high爆心脏的感受，给前来释放压力、寻求刺激的游客提供了一个亲近自然展现自我的好去处。律动海滨狂欢区中包括飓风海浪池、闯过冲天大回旋，光合沙滩、海滨狂欢舞台，皆是休闲娱乐的胜地。热带风情休闲区则是森林水世界的游客集散和接待中心，为游客提供问询、接待、票务、餐饮、储物、更衣沐浴及其他配套功能。</p>
            </div>
            <div class="img_box">
                <img src="./images/img1.jpg" alt="" class="img1">
            </div>
            <img src="./images/2.jpg" alt="" class="order">
            <div class="text text03">
                <p>苏州乐园森林水世界项目充分结合大阳山森林感的特点，以生态环境为基础，游乐设备为载体，力求营造森林水上康体游娱空间。作为苏州乐园水上世界西迁知名品牌、苏州高新区西部大旅游的新形象、华东首个以森林为主题的水乐园，苏州乐园森林水世界必将开创中国森林玩水的全新时代！</p>
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
