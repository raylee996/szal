<template>
  <transition :name="animationName">
    <div class="container_wrapper" v-if="showflag">
      <hotel-header :classname="'resortHotel'" :text="'美食餐饮'" :inner="true"></hotel-header>
      <div class="container">
        <scroll>
          <div class="content">
            <h2 class="title">赏食美味</h2>
            <p class="p1">在食物的时间，享受惬意人生</p>
            <div class="swiper-container banner">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <img src="./images/1.jpg" alt class="mainImg">
                </div>
                <div class="swiper-slide">
                  <img src="./images/2.jpg" alt class="mainImg">
                </div>
                <div class="swiper-slide">
                  <img src="./images/3.jpg" alt class="mainImg">
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>

            <p class="p2">静谧轻松、设计别致的大堂吧全天提供各式美酒供您享用，无论是清谈或畅饮，这里定是您休闲会友和商务洽谈的理想之地</p>
          </div>
          <hotel-footer></hotel-footer>
        </scroll>
      </div>
    </div>
  </transition>
</template>

<script>
import hotelHeader from "components/hotel-header/index";
import hotelFooter from "components/resort-hotel/footer";
import scroll from "components/scroll/scroll";
import Mixin from "common/js/mixin";
import Swiper from "swiper";
export default {
  mixins: [Mixin],
  data() {
    return {
      showflag: false,
    };
  },
  mounted() {
    this.showflag = true;
    this.$nextTick(() => {
      new Swiper(".swiper-container.banner", {
        loop: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 3000 //3秒切换一次
        },
        pagination: {
          el: ".swiper-container.banner .swiper-pagination"
        }
      });
    });
  },
  components: {
    hotelHeader,
    hotelFooter,
    scroll
  }
};
</script>

<style lang="less" scoped>
.container_wrapper {
  background: #fff;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 101;
  overflow-y: auto;
  // padding-bottom: 1.2rem;
  &.slide-enter-active,
  &.slide-leave-active {
    transition: all 0.5s;
  }
  &.slide-enter,
  &.slide-leave-active {
    transform: translate3d(100%, 0, 0);
  }
  .container {
    height: 100%;
    padding-top: 50px;
    overflow: hidden;
    .content {
      background: #f7f7f7;
      padding: 0.8rem 0 2rem;
      .banner {
        width: 100%;
        height: 4rem;
        img {
          width: 100%;
          display: block;
        }
      }
      .title {
        font-size: 0.54rem;
        color: #383838;
        text-align: center;
        &:after {
          content: "";
          display: block;
          width: 0.3rem;
          height: 0.04rem;
          background: #be9b57;
          margin: 0.2rem auto;
        }
      }
      .p1 {
        font-size: 0.24rem;
        color: #666666;
        text-align: center;
        margin-bottom: 0.35rem;
      }
      .mainImg {
        display: block;
        width: 100%;
        margin-bottom: 0.35rem;
      }
      .p2 {
        margin: 0 0.3rem 0.5rem;
        font-size: 0.24rem;
        color: #999999;
        line-height: 0.48rem;
        text-indent: 2em;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
