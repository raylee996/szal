<template>
  <div class="container-hook">
    <inner-header :text="text" :classname="classname"></inner-header>
    <div class="container">
      <div class="banner">
        <img src="./images/banner.jpg" alt />
      </div>
      <div class="text text01">
        <p>苏州乐园森林水世界紧邻大阳山森林公园，作为以森林为主题打造的水上乐园，森林水世界在众多水乐园中独树一帜，倡导自然、健康、性感的玩水态度！这里“所见即森林”，各项水上娱乐项目皆具森林特色，被赋予森林主题，让游客身处浩瀚森林就能享受到海洋般的清凉舒爽。</p>
        <p>森林水世界包含四大清凉主题，十三大明星水项目带来极致水狂欢，热带风情休闲区、虫虫雨林欢乐区、律动海滨狂欢区和神秘森林探险区内，各项全球顶尖的水上项目皆具森林特色。</p>
      </div>
      <!-- <div class="img_box">
        <img src="./images/img1.jpg" alt class="img1" />
      </div> -->
      <img src="./images/1.jpg" alt class="order" />
      <div class="text text02">
        <span>1、热带风情休闲区</span>
        <p>以清新自然的热带雨林风情贯穿全区，是项目的游客集散和接待中心，为此提供停车、问询、接待、票务、餐饮、储物、更衣沐浴及其他配套功能，鲜明地体现热带、雨林两个核心元素。</p>
      </div>
      <div class="img_box">
        <img src="./images/img1.jpg" alt class="img1" />
      </div>
      <img src="./images/2.jpg" alt class="order" />
      <div class="text text03">
        <span>2、虫虫雨林欢乐区</span>
        <p>以“雨林昆虫”为主题线索，把可爱的Q版昆虫和平静的雨林氛围融入本区；产品设施主要针对儿童群体，可玩性高，危险度底，轻松可爱的度假氛围，让儿童仿佛置身于虫鸣鸟叫、万物生长的童话故事中。此处是亲子平台的最佳之选。</p>
        <p>项目包括蘑菇戏水池、七彩瓢虫窝、精灵戏水屋、溪谷漂流河，光听名字就能感受到其中满满的童话感，是孩子们游乐的天堂。</p>
      </div>
      <div class="img_box">
        <img src="./images/img2.jpg" alt class="img2" />
      </div>
      <img src="./images/3.jpg" alt class="order" />
      <div class="text text04">
        <span>3、神秘森林探险区</span>
        <p>引入“丛林探险”的理念，原始丛林风格，让大家穿梭于丛林之中，速度变化的滑道与漂流，沿途丛林风景优美，项目的惊险刺激程度是原来水上世界的加强版，适于成人游玩，将从中体验到冒险、惊险、激情之后的征服速度、获取成就的愉悦感受。</p>
        <p>主要项目包括丛林龙卷风、暴风谷、急速丛林、绿野迷踪、光速飞瀑、绿洲风情池，每一样都能给游客带来high爆心脏的感受，给前来释放压力、寻求刺激的游客提供了一个亲近自然展现自我的好去处。</p>
      </div>
      <div class="img_box">
        <img src="./images/img3.jpg" alt class="img3" />
      </div>
      <img src="./images/4.jpg" alt class="order" />
      <div class="text text05">
        <span>4、律动海滨狂欢区</span>
        <p>将“雨林风情+娱乐狂欢”的规划理念融入其中，雨林海湾周围布设大型动物动态景观产品，主要以造浪体验、沙滩休闲、运动娱乐等游乐功能为主；海湾别致的狂欢体验，绝对能让大家载兴而归，深度享受度假生活。</p>
        <p>包括飓风海浪池、冲天大回旋、海滨狂欢舞台，皆是休闲娱乐的胜地。</p>
      </div>
      <div class="img_box">
        <img src="./images/img4.jpg" alt class="img4" />
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
    };
  },
  components: {
    innerHeader,
    stickyFooter
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-top: 50px;
  background: #fff;
  .banner {
    img {
      display: block;
      width: 100%;
    }
  }
  .text {
    font-size: 0.24rem;
    color: #333333;
    line-height: 0.48rem;
    padding: 0 0.3rem;
    p {
      text-indent: 2em;
    }
    span {
      color: #000;
      font-size: 0.24rem;
      text-indent: 0em;
      font-weight: bold;
    }
    &.text01 {
      margin: 0.25rem 0 0.9rem;
    }
    &.text02 {
      margin-bottom: 0.2rem;
    }
    &.text03 {
      margin-bottom: 0.1rem;
    }
    &.text04 {
      margin-bottom: 0.2rem;
    }
     &.text05 {
      margin-bottom: 0.1rem;
    }
  }
  .order {
    display: block;
    width: 1.98rem;
    margin: 0 auto 0.2rem;
  }
  .img1 {
    width: 7.29rem;
    margin: 0 auto 0.55rem;
  }
  .img2 {
    width: 7.29rem;
    margin: 0 auto 0.55rem;
  }
  .img3 {
    width: 7.29rem;
    margin: 0 auto 0.55rem;
  }
  .img4 {
    width: 7.29rem;
    margin: 0 auto 0.55rem;
  }
}
</style>
