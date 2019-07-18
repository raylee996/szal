<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <ul class="park_list">
                <li class="item">
                    <router-link :to="{path: '/hotel/resortHotel/index'}">四季悦度假酒店</router-link>
                    <div class="thumbnail">
                        <img src="./images/1.jpg" alt="">
                    </div>
                </li>
                <li class="item">
                    <router-link :to="{path: '/hotel/ramada/index'}">高新华美达酒店</router-link>
                    <div class="thumbnail">
                        <img src="./images/2.jpg" alt="">
                    </div>
                </li>
                <li class="item">
                    <router-link :to="{path: '/hotel/ibis/index'}">浒关宜必思</router-link>
                    <div class="thumbnail">
                        <img src="./images/3.jpg" alt="">
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
            text: "主题酒店",
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
      }
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
      &:nth-child(1) img {
        -webkit-animation: fadeInOut 30s linear both infinite;
      }
      &:nth-child(2) img {
        -webkit-animation: fadeInOut 34s linear both infinite;
      }
      &:nth-child(3) img {
        -webkit-animation: fadeInOut 38s linear both infinite;
      }
    }
  }
}
</style>
