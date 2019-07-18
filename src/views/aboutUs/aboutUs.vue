<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <div class="banner">
                <img src="./images/banner.jpg" alt="">
            </div>
            <div class="text text01">
                <p>苏州乐园发展有限公司地处苏州高新区中心，占地54万平方米，以名闻遐迩的狮子山为依托，由加拿大多伦多福莱克公司总体规划，于一九九七年建成开园迎宾。苏州乐园是以东方迪斯尼为主题，集西方游乐园的活泼、欢快、壮观和东方园林的安闲、宁静、自然为特点，融参与性、观赏性、娱乐性、休闲健身于一体的现代化主题乐园，是国家首批AAAA级旅游景区，全国著名的游乐园。</p>
            </div>
            <img src="./images/1.jpg" alt="" class="order">
            <div class="text text02">
                <p>苏州乐园旅游资源独特，狮子山形如雄狮蹲伏且蕴藏着千年人文景观，具有很高的观赏价值和历史价值，又是登山健身的好去处，是现代游乐园内不可多得的自然旅游资源。乐园的卡通狮子栩栩如生，各种狮子雕塑形象逼真、形态各异，代表了全世界不同的信仰和观念，与狮子山的传说互为呼应，体现了苏州乐园所蕴涵的独特文化气息。</p>
            </div>
            <div class="img_box right">
                <img src="./images/img1.jpg" alt="" class="img1">
            </div>
            <img src="./images/2.jpg" alt="" class="order">
            <div class="text text03">
                <p>苏州乐园现有游乐项目及景点多达八十多处，且精心打造了啤酒节等节庆文化活动，充分显示了国际现代化游乐高科技与深刻的文化内涵兼具的特点，乐园以游客为中心，各类服务设施齐全，为游客营造了欢乐的游园氛围。苏州乐园成功地将观赏性和参与性等旅游特征结合于一体，全园就像一幅展示东西方文化的"双面绣"，是与国际接轨的独特的游乐园。</p>
            </div>
            <div class="img_box left">
                <img src="./images/img2.jpg" alt="" class="img2">
            </div>
            <img src="./images/3.jpg" alt="" class="order">
            <div class="text text04">
                <p>苏州乐园地理位置优越、距苏州火车站、沪宁高速苏州新区出口均近8公里左右，城市轻轨、公交及旅游专线均在苏州乐园设立停靠站，形成了十分便捷的旅游交通网络。</p>
            </div>
            <div class="img_box right">
                <img src="./images/img3.jpg" alt="" class="img3">
            </div>
            <img src="./images/4.jpg" alt="" class="order">
            <div class="text text05">
                <p>游乐项目是苏州乐园的主体旅游资源，乐园从欧美引进了悬挂式过山车、夏威夷海浪、豪华波浪、高空弹射、龙卷风、天旋地转等一大批惊险刺激的高科技游乐设施。乐园的游乐项目依山傍水，与山水自然景观水乳交融，彰显了景观的独特性，构成了一幅具有生态特征的动态山水画卷。狮山脚下的过山车犹如神龙穿山戏水，雄狮与神龙在大自然中和睦相处，象征着天地吉祥。</p>
            </div>
            <div class="img_box left">
                <img src="./images/img4.jpg" alt="" class="img4">
            </div>
        </div>
        <sticky-footer></sticky-footer>
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";

export default {
    data() {
        return {
            text: "关于我们",
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
        &.text04{
            margin-bottom: -0.1rem;
        }
        &.text05{
            margin-bottom: 0.2rem;
        }
    }
    .order{
        display: block;
        width: 1.98rem;
        margin: 0 auto 0.2rem;
    }
    .left{
        text-align: left;
    }
    .right{
        text-align: right;
    }
    .img1{
        width: 7.02rem;
        margin-bottom: 0.55rem;
    }
    .img2{
        width: 6.28rem;
        margin-bottom: 0.8rem;
    }
    .img3{
        width: 6.94rem;
        margin-bottom: 1.2rem;
    }
    .img4{
        width: 6.77rem;
        margin-bottom: 1.2rem;
    }
}
</style>
