<template>
  <div class="container-hook">
    <inner-header :text="text" :classname="classname"></inner-header>
    <div class="container">
      <ul class="park_list">
        <li class="item">
          <router-link :to="{path: '/park/waterWorld/waterWorld'}">森林水世界</router-link>
          <div class="thumbnail">
            <img src="./images/3.jpg" alt />
          </div>
          <!-- <img src="./images/coming.png" class="coming" alt=""> -->
        </li>
        <li class="item">
          <router-link :to="{path: '/park/waterPark/waterPark'}">四季恒温水乐园</router-link>
          <div class="thumbnail">
            <img src="./images/4.jpg" alt />
          </div>
        </li>
        <li class="item">
          <router-link :to="{path: '/park/forestWorld/forestWorld'}">森林世界</router-link>
          <div class="thumbnail">
            <img src="./images/1.jpg" alt />
          </div>
        </li>
        <li class="item">
          <router-link :to="{path: '/park/suxiansen/suxiansen'}">苏鲜森餐厅</router-link>
          <div class="thumbnail">
            <img src="./images/5.jpg" alt />
          </div>
        </li>
        <li class="item">
          <a href='javascript:;'>森林小镇</a>
          <div class="thumbnail">
            <img src="./images/2.jpg" alt />
          </div>
        </li>
      </ul>
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
      text: "旅游景区",
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
  background: #fff;
  padding-top: 50px;
  .park_list {
    width: 7.2rem;
    margin: 0 auto;
    padding: 0.45rem 0;
    .item {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 2.1rem;
      margin-bottom: 0.45rem;
      border-radius: 1rem;
      overflow: hidden;
      //   transform: rotateZ(0);
      .coming {
        width: 1.27rem;
        position: absolute;
        right: 0.5rem;
        top: 0.2rem;
      }
      a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 0.48rem;
        color: #fff;
        font-weight: bold;
        position: relative;
        z-index: 1;
      }
      .thumbnail {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        img {
          display: block;
          width: 100%;
          @-webkit-keyframes fadeInOut {
            0% {
              -webkit-transform: translateX(-20px);
              -webkit-transform: translateY(2px);
              -webkit-transform: scale(1);
            }
            50% {
              -webkit-transform: translateX(-24px);
              -webkit-transform: translateY(4px);
              -webkit-transform: scale(1.5);
            }
            100% {
              -webkit-transform: translateX(-20px);
              -webkit-transform: translateY(2px);
              -webkit-transform: scale(1);
            }
          }
        }
      }
      &:nth-child(1) .thumbnail img {
        -webkit-animation: fadeInOut 30s linear both infinite;
      }
      &:nth-child(2) .thumbnail img {
        -webkit-animation: fadeInOut 34s linear both infinite;
      }
      &:nth-child(3) .thumbnail img {
        -webkit-animation: fadeInOut 38s linear both infinite;
      }
      &:nth-child(4) .thumbnail img {
        -webkit-animation: fadeInOut 42s linear both infinite;
      }
      &:nth-child(5) .thumbnail img {
        -webkit-animation: fadeInOut 46s linear both infinite;
      }
    }
  }
}
</style>
