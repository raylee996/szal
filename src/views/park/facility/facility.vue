<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container" :class="{noarea: noarea}">
            <div class="bgImg" v-if="!noarea">
                <img :src="currentBg" class="bg" alt="">
                <img src="./images/banner_cover.png" class="cover" alt="">
            </div>
            <div class="banner_wrap" v-if="!noarea">
                <div class="swiper-container banner banner-main" id="banner-list">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in areaList">
                            <div class="inner" :class="{'bgColor': item.bgColor}" :style="item.bgColor">
                                <div class="name">{{item.type}}</div>
                                <!-- <div class="time"><i></i>开放时间：{{item.open_hours}}</div> -->
                                <div class="detail" v-html="item.content"></div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination">
                        <span>
                            <em>{{currentIndex}}/{{areaList.length}}</em>
                        </span>
                    </div>
                </div>
            </div>
            <div class="main_content">
                <div class="intro" v-if="!noarea">
                    <h2>园区介绍</h2>
                    <div v-html="currentContent"></div>
                </div>
                <div class="facility">
                    <div class="title" v-if="!noarea">园区设施</div>
                    <ul class="facility_list">
                        <li v-for="(item, index) in parkDetail.list" :key="item.id">
                            <img :src="item.images" alt="">
                            <div class="detail">
                                <h2>{{item.title}}</h2>
                                <p v-if="item.type">项目类型：{{item.type}}</p>
                            </div>
                            <a href="javascript:;" class="more" @click="routerGo(item.id)"><span>查看更多</span></a>
                        </li>
                    </ul>
                    <loading v-if="isEmptyObject(parkDetail) && !errMsg"></loading>
                    <no-result v-if="!isEmptyObject(parkDetail) && !parkDetail.list"></no-result>
                </div>
            </div>
        </div>
        <router-view></router-view>
        <!-- <sticky-footer></sticky-footer> -->
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";
import Swiper from "swiper";
import {getQueryString, isEmptyObject} from "common/js/utils";
import {getArea, getFacility} from "common/js/api";
import config from "common/js/config";
import loading from "components/loading/loading";
import noResult from "components/no-result/index";

const dev = process.env.NODE_ENV !== 'production'

export default {
    data() {
        return {
            text: "景区设施",
            noarea: false,
            classname: "facility",
            errMsg: "",
            areaList: [],
            parkDetail: {},
            currentIndex: 1,
            areaname: this.$route.query.area,
            currentBg: "",
            currentContent: "",
            currentArea: {}
        }
    },
    methods: {
        isEmptyObject,
        routerGo(id) {
            this.$router.push({
                path: `/park/facility/detail?area=${this.$route.query.area}&id=${id}`
            })
        },
        _getArea() {
            var _ts = this;
            getArea(this.areaname).then((response) => {
                if(response.code == 200) {
                    response.data.forEach((element) => {
                        switch (element.type) {
                            case "涂鸦森林":
                                element.bgColor = {
                                    "background-color": "#bc8347"
                                }
                                break;
                            case "森灵树广场":
                                element.bgColor = {
                                    "background-color": "#d25d5d"
                                }
                                break;
                            case "藤蔓森林":
                                element.bgColor = {
                                    "background-color": "#639c38"
                                }
                                break;
                            case "水雾森林":
                                element.bgColor = {
                                    "background-color": "#388ea4"
                                }
                                break;
                            case "冻原森林":
                                element.bgColor = {
                                    "background-color": "#557fae"
                                }
                                break;
                            case "黑暗森林":
                                element.bgColor = {
                                    "background-color": "#986ba7"
                                }
                                break;
                        }
                    });
                    this.areaList = response.data
                    this.currentArea = this.areaList[this.currentIndex-1]
                    this.currentBg = this.currentArea.image
                    this.currentContent = this.currentArea.content
                    this.currentId = this.currentArea.id
                    this. _getFacility(this.currentId)
                    this.$nextTick(() => {
                        new Swiper('#banner-list', {
                            pagination: '#banner-list .swiper-pagination',
                            speed: 800,
                            spaceBetween: 0,
                            loop: true,
                            autoplay: 3000,
                            centeredSlides: true,
                            slidesPerView: 1.14,
                            on:{
                                slideChange: function() {
                                    _ts.currentIndex = this.realIndex+1;
                                    _ts.currentArea = _ts.areaList[_ts.currentIndex-1]
                                    _ts.currentBg = _ts.currentArea.image
                                    _ts.currentContent = _ts.currentArea.content
                                    _ts.currentId = _ts.currentArea.id
                                    _ts._getFacility(_ts.currentId)
                                }
                            }
                        });
                    })
                }else {
                    alert(response.msg)
                }
            })
        },
        _getFacility(id) {
            this.currentArea = {}
            this.errMsg = ""
            getFacility(id).then((response) => {
                if(response.code == 200) {
                    this.parkDetail = response.data
                }else {
                    this.errMsg = response.msg
                    alert(response.msg)
                }
            })
        }
    },
    components: {
        innerHeader,
        stickyFooter,
        loading,
        noResult
    },
    mounted() {
        if(this.$route.query.area == "森林世界") {
            this._getArea()
        }else {
            this._getFacility(this.areaname)
            this.noarea = true
        }
    }
}
</script>

<style lang="less" scoped>
.container {
  background-color: #f8f8f8;
  background-size: 100% auto;
  background-repeat: no-repeat;
  padding-top: 210px;
  &.noarea {
    padding-top: 60px;
  }
  .bgImg {
    width: 100%;
    position: absolute;
    left: 0;
    top: 50px;
    .bg {
      display: block;
      width: 100%;
    }
    .cover {
      display: block;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  .banner_wrap {
    margin-bottom: 0.1rem;
    .banner {
      padding-bottom: 0.7rem;
      .swiper-slide {
        width: 6.15rem;
        padding: 0 0.24rem;
        box-sizing: border-box;
        .inner {
          background: #fff;
          border-radius: 0.1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.14);
          height: 2.2rem;
          &.bgColor {
            .name,
            .time,
            .detail {
              color: #fff !important;
            }
          }
          .name {
            padding: 0.3rem 0.25rem;
            font-size: 0.36rem;
            color: #303030;
          }
          .time {
            margin: 0.1rem 0.25rem;
            font-size: 13px;
            color: #646464;
            i {
              display: inline-block;
              vertical-align: top;
              width: 12px;
              height: 12px;
              background: url(./images/time.png);
              background-size: 100% 100%;
              margin-right: 0.05rem;
              position: relative;
              top: 3px;
            }
          }
          .detail {
            font-size: 0.24rem;
            line-height: 0.36rem;
            color: #646464;
            height: 0.72rem;
            position: absolute;
            left: 0.45rem;
            right: 0.45rem;
            bottom: 0.25rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
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
        bottom: 0.1rem;
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
  }
  .main_content {
    .intro {
      margin-bottom: 0.14rem;
      background: #fff;
      padding: 0.45rem 0.3rem 0.5rem;
      h2 {
        font-size: 0.36rem;
        color: #4c4c4c;
        margin-bottom: 0.25rem;
      }
      div {
        font-size: 0.24rem;
        color: #646464;
        line-height: 0.36rem;
      }
    }
    .facility {
      padding: 0.1rem 0.3rem 0.2rem;
      background: #fff;
      .title {
        font-size: 0.36rem;
        color: #4c4c4c;
        padding: 0.4rem 0;
      }
      .facility_list {
        li {
          margin-bottom: 0.38rem;
          border-radius: 0.1rem;
          box-shadow: 0 2px 16px rgba(0, 0, 0, 0.14);
          position: relative;
          overflow: hidden;
          transform: rotateZ(0);
          img {
            display: block;
            width: 100%;
          }
          .detail {
            background: #fff;
            padding: 0.2rem 0.35rem;
            h2 {
              font-size: 0.3rem;
              color: #262626;
            }
            p {
              font-size: 0.26rem;
              color: #808080;
            }
          }
          .more {
            width: 1.18rem;
            height: 1.18rem;
            border-radius: 100%;
            background: linear-gradient(to right, #ff4e65, #ff7928);
            position: absolute;
            right: 0.45rem;
            bottom: 0.45rem;
            span {
              font-size: 0.24rem;
              color: #fff;
              width: 0.6rem;
              text-align: center;
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
            }
          }
        }
      }
    }
  }
}
</style>
