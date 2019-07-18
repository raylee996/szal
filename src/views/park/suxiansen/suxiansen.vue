<template>
    <div class="container-hook">
        <div class="innerHead">
            <a href="javascript:;" @click="back" class="back"><i><</i></a>
            <img src="./images/logo.png" alt="" class="logo">
        </div>
        <img src="./images/banner.jpg" alt="" class="banner">
        <div class="container">
            <img src="./images/head.png" alt="" class="head">
            <p class="text text1">——苏鲜森，颠覆传统旅游餐饮，是苏州高新旅游集团整合了旗下餐饮资源，将“森林IP”融入餐厅的环境、菜品、服务，意将玩乐与吃喝进行创意融合，为游客打造具有特色的主题餐饮品牌。7月6日，苏州乐园旗下“苏鲜森”正式开业。</p>
            <img src="./images/1.jpg" alt="" class="img img1">
            <img src="./images/t1.png" alt="" class="t1">
            <p class="title">【美味•苏帮菜】</p>
            <p class="text text2">苏鲜森诞生于苏州，自然菜品特色以苏州本帮菜为主打。苏州，自古富庶繁华，苏州美食历史悠久，用料上乘、鲜甜可口、讲究火候、天下闻名。优越的自然环境、安定的社会生活，加之苏州民风食不厌精、脍不厌细，形成了苏鲜森美食精工巧作、文艺雅致的风格。</p>
            <img src="./images/2.jpg" alt="" class="img img2">
            <p class="title">【美学•非遗演出】</p>
            <p class="text text3">苏州，江南文化的中心，勤劳精致的苏州人民在悠久的生产生活实践中创造出了丰富多彩的文化遗产。在这里，客人不仅可以品尝到森系特色苏帮菜，苏鲜森还会将老苏州人的生活美学，也就是苏州非遗文化，全面生动呈现在世人面前，如评弹、古筝表演等。</p>
            <img src="./images/3.jpg" alt="" class="img img3">
            <img src="./images/t2.png" alt="" class="t2">
            <p class="text text4"><span>【食材•新鲜自然】</span>苏州地理位置得天独厚：境内湖泊星罗棋布，河港纵横交错，山温水软，土沃田腴，花果繁茂，以此保证了苏鲜森的食材非鲜不用。可以说苏鲜森就是大自然的搬运工，以苏鲜森四季悦店为例，毗邻太湖，因此不管是绿色蔬菜，还是鱼虾肉，食材取之方便、用之新鲜。除此以外，这里还有千亩翠冠梨园、八百余亩的茶园和近二千亩的杨梅园，每年时令季节游客慕名而来。来到这里，即可享受大自然的一切鲜美馈赠。</p>
            <img src="./images/4.jpg" alt="" class="img img4">
            <img src="./images/t3.png" alt="" class="t3">
            <p class="text text5"><span>【环境•森林深处】</span>苏鲜森把森林搬进了餐厅，为大家带来了独特的森林体验。走进苏鲜森，恍如走入一个个森林故事场景里。茂林修竹、鸟语花香、葱葱郁郁中透着浓浓的森林味道，静谧优雅的环境让客人倍感舒适。且有梅、竹、泉、梨、茶主题意境的包厢，仿佛置身于林中一般，放下压力，远离喧嚣，在森林深处享用一顿美味。</p>
            <img src="./images/5.jpg" alt="" class="img img5">
            <img src="./images/t4.png" alt="" class="t4">
            <p class="title">【苏鲜森•四季悦旗舰店】</p>
            <p class="text text6">苏鲜森餐厅位于四季悦酒店，森系的装修风格感觉让人真的像走入了一片森林之中。享用美食之外，客人还能入住四季悦酒店，另外还可以来一场亲水游玩体验，快乐的享受一段亲水时光，细细品味一次深度睡眠，在睡到自然醒的高度治愈中，体验森系主题的田园山村悠然度假生活。</p>
            <img src="./images/6.jpg" alt="" class="img img6">
            <p class="title">【苏鲜森•森林小镇直营店】</p>
            <p class="text text7">此次同时开业的还有苏鲜森•森林小镇店。森林小镇是苏州乐园旗下2017全新力作，紧邻大阳山国家森林公园，是一个依托自然生态环境，致力于“森林+”概念产品的体验基地。餐厅在森林小镇内，四季鸟语花香，负氧离子爆表，是用餐宴请的好去处。</p>
            <img src="./images/7.jpg" alt="" class="img img7">
            <p class="text text8">如果想在森林里享受美食，苏鲜森是不错的选择。此外“鲜森”有“先生”的谐音，苏先生也是旅游集团品牌IP苏迪的昵称。将来，您不仅可以品尝到地道的苏帮菜、亲身感受到树木扶疏的大自然氛围、还有更多个性化的IP服务也将惊喜呈现，苏州乐园苏鲜森诚邀各位莅临。</p>
            <div class="tel">
                <p>订餐请拨打一下服务电话：</p>
                <p>潘先生18912774343</p>
                <p>乐先生18015552627</p>
                <p>陆先生18015552639</p>
                <p>顾女士18015552699</p>
            </div>
        </div>
        <sticky-footer></sticky-footer>
    </div>
</template>

<script>
import {back} from "common/js/utils";
import stickyFooter from "components/footer/index";

export default {
    methods: {
        back
    },
    components: {
        stickyFooter
    }
}
</script>

<style lang="less" scoped>
.innerHead {
  display: flex;
  align-items: center;
  height: 50px;
  line-height: 50px;
  padding: 0 0.44rem;
  position: relative;
  background: #fff;
  .back {
    float: left;
    height: 100%;
    font-size: 0.5rem;
    color: #7f7f7f;
    position: relative;
    z-index: 1;
    i {
      display: inline-block;
      transform: scale(0.7, 1.2);
      transform-origin: center center;
    }
  }
  .logo {
    width: 1.61rem;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
  .banner {
    display: block;
    width: 100%;
  }
.container {
  background: url(./images/bg.jpg);
  background-size: 100% auto;
  height: 73.45rem;
  padding-top: 0.45rem;
  .text{
      width: 6.9rem;
      margin: 0 auto;
      font-size: 0.22rem;
      line-height: 0.36rem;
  }
  .title{
      font-size: 0.32rem;
      color: #fff;
      text-align: center;
      margin-bottom: 0.15rem;
  }
  .img{
      display: block;
      width: 6.9rem;
      margin: 0 auto;
  }
  .head{
      display: block;
      width: 7.16rem;
      margin: 0 auto 0.2rem;
      float: right;
  }
  .text1{
      color: #616161;
      margin-bottom: 0.2rem;
      line-height: 0.3rem;
  }
  .img1{
      margin-bottom: 1.88rem;
  }
  .t1{
      display: block;
      width: 7.05rem;
      margin: 0 auto 0.98rem;
  }
  .text2{
      color: #fff;
      margin-bottom: 0.2rem;
  }
  .img2{
      margin-bottom: 1.22rem;
  }
  .text3{
      color: #fff;
      margin-bottom: 0.2rem;
  }
  .img3{
      margin-bottom: 2.08rem;
  }
  .t2{
      display: block;
      width: 7.05rem;
      margin: 0 auto 0.62rem;
  }
  .text4,.text5{
      color: #666666;
      margin-bottom: 0.35rem;
      line-height: 0.48rem;
      span{
        font-size: 0.3rem;
        color: #121212;
      }
  }
  .img4{
      margin-bottom: 1.7rem;
  }
  .t3{
      display: block;
      width: 7.05rem;
      margin: 0 auto 0.62rem;
  }
  .img5{
      margin-bottom: 2.15rem;
  }
  .t4{
      display: block;
      width: 7.04rem;
      margin: 0 auto 1.02rem;
  }
  .text6,.text7{
      color: #fff;
      margin-bottom: 0.2rem;
  }
  .img6{
      margin-bottom: 1.2rem;
  }
  .img7{
      margin-bottom: 1.95rem;
  }
  .text8{
      color: #666666;
      margin-bottom: 1.3rem;
      line-height: 0.48rem;
  }
  .tel{
      text-align: center;
      font-size: 0.36rem;
      color: #067041;
      line-height: 0.72rem;
  }
}
</style>
