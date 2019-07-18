<template>
  <div class="container-hook">
    <inner-header :text="text" :classname="classname"></inner-header>
    <div class="container">
      <div class="banner">
        <img src="./images/banner.jpg" alt />
      </div>
      <div class="text text01">
        <p>全年玩水的四季恒温水乐园，位于环境优美、交通便利的自然生态村树山村内，是一个涵盖了巨碗滑道、造浪狂欢、童趣戏水、酒店餐饮的大型室内亲子水乐园。</p>
      </div>
      <!-- <div class="img_box">
        <img src="./images/img2.png" alt class="img1" />
      </div> -->
      <img src="./images/1.jpg" alt class="order" />
      <div class="text text02">
        <p>丰富的水上项目让大小朋友释放玩水天性，葱郁的热带植物景观仿佛置身热情森林，为亲子家庭带来一年四季戏水游乐的独特体验，周边配套原生态田园坏境，全家尽享欢乐自然的游玩赏景之旅。</p>
      </div>
      <div class="img_box">
        <img src="./images/img1.png" alt class="img1" />
      </div>
      <img src="./images/2.jpg" alt class="order" />
      <div class="text text03">
        <p>四季恒温水乐园拥有配套度假酒店——四季悦度假酒店，是集住宿、餐饮、会议培训、温泉理疗、休闲娱乐、旅游度假等服务为一体的舒适、便捷、高档的生态酒店，在全身心放松享受亲子水游、田园美景后，踏进按精品酒店标准建造的舒适酒店，完美悠闲地度过假日放松心情。</p>
      </div>
      <div class="img_box">
        <img src="./images/img2.png" alt class="img2" />
      </div>
      <img src="./images/3.png" alt class="order" />
      <div class="text text03">
        <p>四季恒温水乐园拥有配套餐厅——苏鲜森餐厅。苏鲜森融入森林主题，聚焦苏帮菜系和时令美味，秉承品质至上的产品理念与顾客至上的经营宗旨服务。在这里，可以享受精巧可口的苏帮美食，感受绿影扶疏的自然美景，欣赏老苏州人的生活美学——评弹。在这里，阅山林之美，品苏州之味！</p>
      </div>
      <div class="img_box">
        <img src="./images/img3.png" alt class="img2" />
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
    text-indent: 2em;
    padding: 0 0.3rem;
    &.text01 {
      margin: 0.25rem 0 0.9rem;
    }
    &.text02 {
      margin-bottom: 0.2rem;
    }
    &.text03 {
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
}
</style>
