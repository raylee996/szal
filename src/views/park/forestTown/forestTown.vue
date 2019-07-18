<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <!-- 轮播 -->
            <div class="banner_wrap">
                <div class="swiper-container banner">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in bannerList">
                            <a :href="item.url">
                                <img :src="item.img" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="swiper-pagination">
                        <span>
                            <em>{{currentIndex}}/{{bannerList.length}}</em>
                        </span>
                    </div>
                </div>
                <div class="cover"></div>
            </div>
            <!-- 轮播 -->
            <!-- 内页入口 -->
            <div class="entry">
                <a class="item" :href="item.path" :key="index" v-for="(item, index) in entryList">
                    <i></i>{{item.text}}
                </a>
            </div>
            <!-- 内页入口 -->
            <booking :inner="true"></booking>
            <!-- 超人气设施 -->
            <div class="facility" v-if="facilityList.length>0">
                <div class="title">
                    <h2>超人气设施</h2>
                    <router-link :to="{path: '/park/facility?area=森林小镇'}">更多 ></router-link>
                </div>
                <div class="facility-hook">
                    <ul class="facility_list">
                        <li v-for="(item, index) in facilityList">
                            <router-link :to="{path: '/facilityDetail?id='+item.id+'&area=森林小镇&from=recommend'}" :key="index">
                                <img :src="item.images" alt="">
                                <div class="shadow"></div>
                                <div class="rank">
                                    <span>{{index+1}}.</span>TOP
                                </div>
                                <div class="name">{{item.title}}</div>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 超人气设施 -->
            <!-- 人气攻略 -->
            <div class="strategy">
                <div class="title">
                    <h2>人气攻略</h2>
                    <router-link :to="{path: '/strategy/strategy?area=森林小镇'}">更多 ></router-link>
                </div>
                <strategy :strategyList="strategyList"></strategy>
            </div>
            <!-- 人气攻略 -->
            <!-- 景区服务 -->
            <div class="service">
                <div class="title">
                    <h2>景区服务</h2>
                    <router-link :to="{path: '/service/ticket'}">更多 ></router-link>
                </div>
                <div class="service_list">
                    <div class="service_left">
                        <img src="~/common/images/park/service01.jpg" alt="">
                        <div class="shadow"></div>
                        <div class="intro">
                            <h2>景区票价</h2>
                            <p>最低<span>80</span>元/张</p>
                        </div>
                    </div>
                    <div class="service_right">
                        <div class="service_time">
                            <h2>周一至周日 </h2>
                            <h3>9:00—17:00</h3>
                            <!-- <p>（2018年10月27日起）</p> -->
                            <em></em>
                            <span>运营时间</span>
                        </div>
                        <div class="service_more">
                            <div class="service_more_item service_map">
                                <router-link :to="{path: '/park/forestTown/map'}">
                                    <h2>景区地图</h2>
                                    <img src="~/common/images/park/service_icon01.png" alt="">
                                </router-link>
                            </div>
                            <div class="service_more_item service_notice">
                                <router-link :to="{path: '/service/notice'}">
                                    <h2>游客须知</h2>
                                    <img src="~/common/images/park/service_icon02.png" alt="">
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 景区服务 -->
            <!-- 关注微信 -->
            <footer-common :aboutUsPath="'/aboutUs'" :hotline="'0512-68717241'"></footer-common>
            <!-- 关注微信 -->
        </div>
        <sticky-footer></sticky-footer>
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import strategy from "components/strategy/index";
import footerCommon from "components/footer-common/index";
import booking from "components/booking/index";
import stickyFooter from "components/footer/index";
import Swiper from "swiper";
import parkMixin from "common/js/parkMixin";
import strategyMixin from "common/js/strategyMixin";

export default {
    mixins: [parkMixin, strategyMixin],
    data() {
        return {
            text: "森林小镇",
            classname: "forestTown",
            bannerList: [
                {
                    img: require("./images/banner/1.jpg"),
                    url: "javascript:;"
                },
            ],
            currentIndex: 1,
            entryList: [
                {
                    path: "/park/forestTown/aboutUs",
                    text: "景区概括"
                },
                {
                    path: "/park/facility?area=森林小镇",
                    text: "景区设施"
                },
                {
                    path: "javascript:alert('敬请期待');",
                    text: "餐饮美食"
                },
                {
                    path: "/park/forestTown/map",
                    text: "景区地图"
                }
            ]
        }
    },
    components: {
        innerHeader,
        strategy,
        footerCommon,
        stickyFooter,
        booking
    },
    mounted() {
        var _ts = this;
        this._getRecommendStrategy("森林小镇");
        this.$nextTick(() => {
            setTimeout(() => {
                new Swiper('.banner', {
                    pagination: '.banner .swiper-pagination',
                    speed: 800,
                    spaceBetween: 0,
                    loop: true,
                    autoplay: 3000,
                    on:{
                        slideChange: function() {
                            _ts.currentIndex = this.realIndex+1;
                        }
                    }
                });
            }, 20)
        })
    }
}
</script>

<style lang="less" scoped>
.container {
  background: #f8f8f8;
  .banner_wrap {
    position: relative;
    .banner {
      .swiper-slide {
        img {
          display: block;
          width: 100%;
        }
      }
      .swiper-pagination {
        width: 0.59rem;
        height: 0.3rem;
        background: url("~common/images/pagination.png");
        background-size: 100% 100%;
        z-index: 20;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0.2rem;
        font-size: 0.2rem;
        color: #fff;
        text-align: center;
        line-height: 1;
        span {
          display: block;
          height: 0.3rem;
          line-height: 0.3rem;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          font-size: 0;
          em {
            display: inline-block;
            font-size: 0.2rem;
            height: 0.3rem;
            line-height: 0.3rem;
          }
        }
      }
    }
    .cover {
      width: 100%;
      height: 0.44rem;
      position: absolute;
      left: 0;
      bottom: 0;
      background: url("~common/images/park/banner_cover.png");
      background-size: 100% 100%;
      z-index: 21;
    }
  }
  .entry {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.4rem 0.44rem 0.6rem;
    margin-bottom: 0.1rem;
    background: #fff;
    .item {
      flex: 1;
      font-size: 0.24rem;
      color: #656565;
      line-height: 0.36rem;
      text-align: center;
      i {
        display: block;
        margin: 0 auto;
        width: 56px;
        height: 56px;
        margin-bottom: 0.1rem;
        background: url("~common/images/park/entry.png");
        background-size: 318px auto;
      }
      &:nth-child(1) i {
        background-position: 0 0;
      }
      &:nth-child(2) i {
        background-position: -87.5px 0;
      }
      &:nth-child(3) i {
        background-position: -175px 0;
      }
      &:nth-child(4) i {
        background-position: -262px 0;
      }
    }
  }
  .facility {
    padding-bottom: 0.8rem;
    background: #fff;
    margin-bottom: 0.1rem;
    overflow: hidden;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.28rem 0.3rem;
      h2 {
        flex: 1;
        text-align: left;
        font-size: 0.4rem;
        color: #fd3b52;
      }
      a {
        flex: 0 0 1.22rem;
        width: 1.22rem;
        height: 0.42rem;
        line-height: 0.42rem;
        font-size: 0.22rem;
        text-align: center;
        border-radius: 0.3rem;
        color: #fff;
        background: linear-gradient(to right, #ff4e65, #ff7928);
      }
    }
    .facility-hook {
      overflow: auto;
      -webkit-overflow-scrolling: touch;
        font-size: 0;
      .facility_list {
        display: inline-block;
        padding-left: 0.3rem;
        box-sizing: border-box;
        white-space: nowrap;
        li {
          display: inline-block;
          vertical-align: top;
          position: relative;
          width: 4.6rem;
          margin-right: 0.17rem;
          border-radius: 0.1rem;
          overflow: hidden;
          transform: rotateZ(0);
          img {
            display: block;
            width: 100%;
          }
          .shadow {
            width: 100%;
            position: absolute;
            left: 0;
            top: 50%;
            bottom: 0;
            background: linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0),
              rgba(0, 0, 0, 0.5)
            );
          }
          .rank {
            width: 1.15rem;
            height: 0.34rem;
            background: url("~common/images/park/rank.png");
            background-size: 100% 100%;
            position: absolute;
            left: 0.1rem;
            bottom: 0.66rem;
            font-size: 0.3rem;
            color: #ffffff;
            line-height: 0.14rem;
            span {
              font-size: 0.6rem;
            }
          }
          .name {
            font-size: 0.3rem;
            color: #fff;
            position: absolute;
            left: 0.12rem;
            bottom: 0.15rem;
          }
        }
      }
    }
  }
  .strategy {
    padding-bottom: 0.4rem;
    background: #fff;
    margin-bottom: 0.1rem;
    overflow: hidden;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.28rem 0.3rem;
      h2 {
        flex: 1;
        text-align: left;
        font-size: 0.4rem;
        color: #fd3b52;
      }
      a {
        flex: 0 0 1.22rem;
        width: 1.22rem;
        height: 0.42rem;
        line-height: 0.42rem;
        font-size: 0.22rem;
        text-align: center;
        border-radius: 0.3rem;
        color: #fff;
        background: linear-gradient(to right, #ff4e65, #ff7928);
      }
    }
  }
  .service {
    padding-bottom: 0.8rem;
    background: #fff;
    margin-bottom: 0.1rem;
    overflow: hidden;
    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.28rem 0.3rem;
      h2 {
        flex: 1;
        text-align: left;
        font-size: 0.4rem;
        color: #fd3b52;
      }
      a {
        flex: 0 0 1.22rem;
        width: 1.22rem;
        height: 0.42rem;
        line-height: 0.42rem;
        text-align: center;
        border-radius: 0.3rem;
        font-size: 0.22rem;
        color: #fff;
        background: linear-gradient(to right, #ff4e65, #ff7928);
      }
    }
    .service_list {
      display: flex;
      justify-content: space-between;
      padding: 0 0.3rem;
      .service_left {
        flex: 0 0 3.4rem;
        width: 3.4rem;
        position: relative;
        border-radius: 0.1rem;
        overflow: hidden;
        transform: rotateZ(0);
        img {
          display: block;
          width: 100%;
        }
        .shadow {
          width: 100%;
          position: absolute;
          left: 0;
          top: 40%;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0),
            rgba(0, 0, 0, 0.5)
          );
        }
        .intro {
          position: absolute;
          left: 0.16rem;
          bottom: 0.16rem;
          color: #fff;
          h2 {
            font-size: 0.36rem;
            margin-bottom: 0.1rem;
          }
          p {
            font-size: 0.24rem;
            span {
              font-size: 0.5rem;
              color: #ffcc1b;
            }
          }
        }
      }
      .service_right {
        flex: 0 0 3.4rem;
        width: 3.4rem;
        .service_time {
          position: relative;
          width: 100%;
          height: 1.8rem;
          padding-top: 0.45rem;
          box-sizing: border-box;
          margin-bottom: 0.13rem;
          background: #f9f9f9;
          border-radius: 0.1rem;
          overflow: hidden;
          transform: rotateZ(0);
          text-align: center;
          h2 {
            font-size: 0.24rem;
            color: #808080;
          }
          h3 {
            font-size: 0.36rem;
            color: #4c4c4c;
          }
          p {
            font-size: 0.18rem;
            color: #808080;
          }
          em {
            width: 1.3rem;
            height: 0.48rem;
            background: #ff5125;
            transform: skewX(-10deg);
            border-radius: 0.1rem;
            position: absolute;
            left: -0.05rem;
            top: -0.05rem;
          }
          span {
            width: 1.3rem;
            height: 0.48rem;
            font-size: 0.22rem;
            color: #fff;
            line-height: 0.48rem;
            position: absolute;
            left: -0.05rem;
            top: -0.05rem;
          }
        }
        .service_more {
          display: flex;
          justify-content: space-between;
          .service_more_item {
            flex: 0 0 1.62rem;
            width: 1.62rem;
            height: 2.16rem;
            background: #f9f9f9;
            border-radius: 0.1rem;
            overflow: hidden;
            transform: rotateZ(0);
            text-align: center;
            h2 {
              font-size: 0.28rem;
              padding-top: 0.18rem;
              margin-bottom: 0.4rem;
            }
            &.service_map {
              h2 {
                color: #33b856;
              }
              img {
                width: 1.23rem;
              }
            }
            &.service_notice {
              h2 {
                color: #4c9bff;
              }
              img {
                width: 1.07rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
