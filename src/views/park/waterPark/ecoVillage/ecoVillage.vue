<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <img src="./images/header.jpg" alt="" class="header">
            <div class="content">
                <img src="./images/title.png" alt="" class="title">
                <div class="text">
                    <p>树山生态村是一个以乐活（LOHAS）理念打造，集人文胜景、生态乡村、休闲度假、健康养生于一体的综合型生态旅游项目。</p>
                    <p>享温泉之灵动，观自然之美景，尝树山之珍味，触四季之丰硕。苏州乐园四季恒温水乐园就是坐落于这片世外桃源之地，成就四季皆宜的度假天堂。</p>
                </div>
                <img src="./images/1.png" alt="" class="img01">
                <div class="name">
                    <span>吃</span>生态细腻之美味
                </div>
                <div class="text">
                    <p>四季恒温水乐园自助餐：无限量品味将树山独有的健康食材用养生的方式原汁原味烹饪出来的四季恒温水乐园美食。</p>
                    <p>云泉山庄：好吃不贵的“五星级”农家乐。</p>
                    <p>翠竹苑：地地道道的农家菜，亲民、可口 、平价的味蕾享受。</p>
                </div>
                <img src="./images/2.png" alt="" class="img02">
                <div class="name">
                    <span>住</span>回归自然之居
                </div>
                <div class="text">
                    <p>四季悦度假酒店：与温泉同在一处，舒适、便捷、高档的生态酒店，让您枕入天地之怀，汲取自然生态之精华。</p>
                    <p>云泉山庄：坐落在山水环抱间的云庐和云墅两幢木层别墅让您瞬间回归自然。</p>
                    <p>云泉小筑：中式、日式和泰式等不同风格的高级套房给您提供全新的放松度假模式。</p>
                </div>
                <img src="./images/3.png" alt="" class="img03">
                <div class="name">
                    <span>娱</span>泡温泉、环山游、久久的欢愉
                </div>
                <div class="text">
                    <p>四季恒温水乐园：动静皆宜、四季皆宜的苏州乐园产品，采自地下1299米的真温泉让您在静谧休闲之余还能享受到刺激动感的玩乐。</p>
                    <p>环山游：坐上云泉山庄或是书香世家的环山电瓶车，亦或是骑上四季悦度假酒店的双人单车，尽情驰骋在这座世外桃源中，呼吸生态的天地灵气。</p>
                    <p>乐趣拓展：树山欢乐谷是华东地区的拓展培训基地，攀岩、信任背摔、孤岛求生、真人CS都可在专业的指导下得到人生收获。</p>
                </div>
                <img src="./images/4.png" alt="" class="img04">
                <div class="name">
                    <span>购</span>采摘、尝鲜、送礼，一站式搞定
                </div>
                <div class="text">
                    <p>四季皆尝鲜：春有云泉茗茶、夏有树山杨梅、秋有爽口翠冠梨、冬有高营养价值鲜菌菇，这就是树山，四季都有尝不完的新鲜味道。</p>
                    <p>亲子采摘：不仅能尝到新鲜的瓜果，还能带着孩子、老人回归田园体验采摘的乐趣。</p>
                    <p>有意义的礼品：把自己挑选、自己采摘、自己包装的树山特产送给亲朋好友，买不到的新鲜和乐趣，这是有意义的礼物。</p>
                </div>
                <img src="./images/5.png" alt="" class="img05">
                <img src="./images/footer.jpg" alt="" class="footer">
            </div>
        </div>
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";

export default {
    data() {
        return {
            text: "树山生态村",
            classname: "ecovillage"
        }
    },
    components: {
        innerHeader,
    }
}
</script>

<style lang="less" scoped>
.innerHead{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100
}
.container {
  background: url(./images/bg.jpg);
  background-size: 100% auto;
  padding-top: 50px;
  .header {
    display: block;
    width: 100%;
  }
  .content {
    background: url(./images/waveBg.png) no-repeat;
    background-size: 100% auto;
    margin-top: -0.72rem;
    padding-top: 0.73rem;
    position: relative;
    z-index: 1;
    .title {
      display: block;
      width: 5.41rem;
      margin: 0.25rem auto 0.45rem;
    }
    .text {
      margin: 0 0.3rem;
      p {
        font-size: 0.24rem;
        color: #808080;
        line-height: 0.36rem;
        margin-bottom: 0.25rem;
      }
    }
    .img01 {
      display: block;
      width: 7.35rem;
      margin: 0 auto -0.15rem;
    }
    .name {
      margin: 0 0.2rem 0.1rem;
      line-height: 1.18rem;
      span {
        display: inline-block;
        width: 1.24rem;
        height: 1.18rem;
        background: url(./images/textBg.png);
        background-size: 100% 100%;
        font-size: 0.56rem;
        color: #fff;
        line-height: 1.18rem;
        text-align: center;
        text-indent: -0.1rem;
        vertical-align: top;
      }
      font-size: 0.4rem;
      color: #383838;
    }
    .img02 {
      display: block;
      width: 7.4rem;
      margin: 0 auto -0.68rem;
    }
    .img03 {
      display: block;
      width: 7.35rem;
      margin: 0 auto 0.15rem;
    }
    .img04 {
      display: block;
      width: 7.3rem;
      margin: 0 auto 0.8rem;
    }
    .img05 {
      display: block;
      width: 7.35rem;
      margin: 0 auto;
    }
    .footer {
      display: block;
      width: 3.25rem;
      margin: 0.4rem auto;
    }
  }
}
</style>
