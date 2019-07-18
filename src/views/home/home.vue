<template>
	<div class="container-hook">
		<!-- 搜索框 -->
		<div class="search_wrap">
			<div class="logo">
				<img src="./images/logo.png" alt="">
			</div>
			<div class="search_input">
                <form action='' onsubmit="return false;">
                    <input type="search" v-model="queryString" @search="search">
                    <i @click="search"></i>
                </form>
			</div>
			<a href="javascript:;" class="share" @click="share"></a>
		</div>
		<!-- 搜索框 -->
		<div class="container">
                <img src="./images/cover.png" alt="" class="cover">
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
				</div>
				<!-- 轮播 -->
				<!-- 主要入口 -->
				<div class="entry">
					<router-link class="item" :to="{path: item.path}" :key="index" v-for="(item, index) in entryList">
						<i></i>{{item.text}}
					</router-link>
				</div>
				<!-- 主要入口 -->
                <booking></booking>
				<!-- 热门活动 -->
				<div class="activity">
					<div class="title">
						<div class="text">
							<h2>热门活动<img src="./images/act_icon.png" alt=""></h2>
							<p>更多更精彩的活动，尽在苏州乐园</p>
						</div>
						<router-link :to="{path: '/activity?type=activity'}" class="more">查看更多</router-link>
					</div>
					<div class="activity-hook">
                        <ul class="activity_list">
                            <li v-for="(item, index) in acticityList">
                                <a v-if="item.wapurl" :href="item.wapurl" :key="index">
                                    <img :src="item.image" alt="">
                                    <h2>{{item.title}}</h2>
                                    <p><i></i>{{formatDate1(new Date(item.StartDate), "yyyy.MM.dd")}}~{{formatDate1(new Date(item.EndDate), "yyyy.MM.dd")}}</p>
                                </a>
                                <router-link v-if="!item.wapurl" :to="{path: '/activityDetail?id='+item.id+'&type=activity&from=recommend'}" :key="index">
                                    <img :src="item.image" alt="">
                                    <h2>{{item.title}}</h2>
                                    <p><i></i>{{formatDate1(new Date(item.StartDate), "yyyy.MM.dd")}}~{{formatDate1(new Date(item.EndDate), "yyyy.MM.dd")}}</p>
                                </router-link>
                            </li>
                        </ul>
					</div>
				</div>
				<!-- 热门活动 -->
				<!-- 超值特惠 -->
				<div class="discount">
						<div class="title">
							<div class="text">
								<h2>超值特惠<img src="./images/discount_icon.png" alt=""></h2>
								<p>热门推荐，放心之选</p>
							</div>
							<a href="http://weixin.szal.cn/wap/index.htm" class="more">查看更多</a>
						</div>
						<div class="discount-hook">
								<ul class="discount_list">
										<li v-for="(item, index) in discountList">
												<a :href="item.url" :key="index">
														<img :src="item.img" alt="">
														<h2>{{item.title}}</h2>
														<p><span>¥{{item.price}}</span>起</p>
														<div class="tag"><span>HOT</span><!-- <em>{{item.tag}}</em> --></div>
														<div class="tag2"><span>HOT</span><!-- <em>{{item.tag}}</em> --></div>
												</a>
										</li>
								</ul>
						</div>
				</div>
				<!-- 超值特惠 -->
				<!-- 人气攻略 -->
				<div class="strategy">
                    <div class="title">
                            <div class="text">
                                    <h2>人气攻略<img src="./images/strategy_icon.png" alt=""></h2>
                                    <p>攻略在手，苏州我有！</p>
                            </div>
                            <router-link :to="{path: '/strategy/strategy'}" class="more">查看更多</router-link>
                    </div>
                    <strategy :strategyList="strategyList"></strategy>
				</div>
				<!-- 人气攻略 -->
				<!-- 关注微信 -->
				<footer-common :hotline="4008286660"></footer-common>
				<!-- 关注微信 -->
		</div>
        <sticky-footer></sticky-footer>
	</div>
</template>

<script>
import strategy from "components/strategy/index";
import footerCommon from "components/footer-common/index";
import booking from "components/booking/index";
import stickyFooter from "components/footer/index";
import Swiper from "swiper";
import soshm from "soshm";
import {getRecommendActivity} from "common/js/api";
import strategyMixin from "common/js/strategyMixin";
import config from "common/js/config";
import {formatDate1} from "common/js/utils"

const dev = process.env.NODE_ENV !== 'production'

export default {
    mixins: [strategyMixin],
	data() {
        return {
            queryString: "",
            bannerList: [
                {
                    img: require("./images/banner/2.jpg"),
                    url: "http://www.szal.cn/activity/2019waterWorld/#/home"
                },
                {
                    img: require("./images/banner/1.jpg"),
                    url: "javascript:;"
                }
            ],
            entryList: [
                {
                    path: "/park/index",
                    text: "旅游景区"
                },
                {
                    path: "/hotel/index",
                    text: "主题酒店"
                },
                {
                    path: "/strategy/strategy",
                    text: "游玩攻略"
                },
                {
                    path: "/service/ticket",
                    text: "景区票价"
                },
                {
                    path: "/activity?type=activity",
                    text: "活动优惠"
                },
                {
                    path: "/strategy/traffic",
                    text: "交通指南"
                },
                {
                    path: "/service/FAQ",
                    text: "常见问题"
                },
                {
                    path: "/service/contactUs",
                    text: "联系我们"
                },
            ],
            currentIndex: 1,
            acticityList: [],
            discountList: [
                {
                    url: "http://weixin.szal.cn/wap/ticket/buyTicket.htm?id=3321",
                    img: require("./images/discount05.jpg"),
                    title: "森林小镇",
                    price: 59.9
                },
                {
                    url: "http://weixin.szal.cn/wap/ticket/buyTicket.htm?id=3302",
                    img: require("./images/discount02.jpg"),
                    title: "四季恒温水乐园",
                    price: 119
                },
                {
                    url: "http://weixin.szal.cn/wap/ticket/buyTicket.htm?id=3500",
                    img: require("./images/discount03.jpg"),
                    title: "森林水世界次卡",
                    price: 298
                },
                {
                    url: "http://weixin.szal.cn/wap/ticket/buyTicket.htm?id=3541",
                    img: require("./images/discount04.jpg"),
                    title: "四季恒温水乐园次卡",
                    price: 488
                }
            ]
        }
    },
    components: {
        strategy,
        footerCommon,
        stickyFooter,
        booking
    },
    mounted() {
        var _ts = this;
        this._getRecommendActivity()
        this._getRecommendStrategy("")
        this.$nextTick(() => {
            new Swiper('.banner', {
                pagination: '.banner .swiper-pagination',
                speed: 800,
                spaceBetween: 30,
                loop: true,
                autoplay: 3000,
                on:{
                    slideChange: function() {
                        _ts.currentIndex = this.realIndex+1;
                    }
                }
            });
        })

    },
    methods: {
        formatDate1,
        share() {
            soshm.popIn({
                title: '弹窗分享',
                sites: ['weixin', 'weixintimeline', 'weibo', 'qzone', 'tqq', 'qq']
            });
        },
        search() {
            if(this.queryString == "") {
                alert("请输入您要搜索的内容")
                return
            }
            this.$router.push({
                path: `/search/result?keywords=${this.queryString}`
            })
        },
        _getRecommendActivity() {
            getRecommendActivity().then((response) => {
                if(response.code == 200) {
                    this.acticityList = response.data
                    this.acticityList.forEach((item) => {
                        if(dev && item.image.indexOf("http") == -1) {
                            item.image = config.domain+item.image
                        }
                    })
                }else {
                    alert(response.msg)
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
@import "~common/less/mixin.less";

.search_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.18rem 0.2rem;
  background: #fff;
  position: relative;
  z-index: 2;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  .logo {
    flex: 0 0 1.9rem;
    width: 1.9rem;
    height: 0.5rem;
    img {
      width: 100%;
      vertical-align: top;
    }
  }
  .search_input {
    flex: 0 0 4rem;
    width: 4rem;
    height: 0.55rem;
    background: #f3f3f3;
    position: relative;
    border-radius: 0.3rem;
    margin: 0 0.4rem;
    input {
      position: absolute;
      left: 0;
      top: 0.075rem;
      border: none;
      outline: none;
      width: 3.4rem;
      height: 0.4rem;
      text-indent: 0.25rem;
      padding: 0;
      background: none;
    }
    i {
      width: 0.33rem;
      height: 0.33rem;
      background: url(~common/images/search.png);
      background-size: 100% 100%;
      position: absolute;
      right: 0.2rem;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .share {
    flex: 0 0 0.41rem;
    width: 0.41rem;
    height: 0.41rem;
    background: url(./images/share.png);
    background-size: 100% 100%;
  }
}
.container {
  background: #f8f8f8;
  .cover {
    width: 100%;
    position: absolute;
    left: 0;
    top: 3.18rem;
  }
  .banner_wrap {
    background: #fff;
    // animation: bgMove 1.4s steps(1, start) infinite;
    background-image: url(./images/bg.gif);
    background-size: 100% auto;
    background-repeat: no-repeat;
    padding-top: 0.7rem;
    .banner {
      //   width: 6.9rem;
      margin: 0 auto;
      padding: 0 0.3rem 0.5rem;
      .swiper-container {
        overflow-x: hidden;
        overflow-y: visible;
      }
      .swiper-slide {
        width: 6.9rem;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        border-radius: 0.1rem;
        img {
          display: block;
          border-radius: 0.1rem;
          width: 100%;
        }
      }
      .swiper-pagination {
        width: 29.5px;
        height: 15px;
        background: url("~common/images/pagination.png");
        background-size: 100% 100%;
        z-index: 20;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0.6rem;
        font-size: 10px;
        color: #fff;
        text-align: center;
        line-height: 1;
        span {
          display: block;
          height: 15px;
          line-height: 15px;
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%);
          font-size: 0;
          em {
            display: inline-block;
            vertical-align: top;
            font-size: 10px;
            height: 15px;
            line-height: 15px;
          }
        }
      }
    }
  }
  .entry {
    padding: 0 0.3rem 0.5rem;
    background: #fff;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.1rem;
    .item {
      flex: 1;
      margin: 0.2rem 0.25rem 0.1rem;
      flex-wrap: wrap;
      font-size: 0.22rem;
      color: #7e7e7e;
      line-height: 0.36rem;
      text-align: center;
      i {
        display: block;
        margin: 0 auto;
        width: 54px;
        height: 60px;
        background-image: url(./images/icon.png);
        background-size: 321px auto;
      }
      &:nth-child(1) i {
        background-position: -3px 0;
      }
      &:nth-child(2) i {
        background-position: -90.5px 0;
      }
      &:nth-child(3) i {
        background-position: -178px 0;
      }
      &:nth-child(4) i {
        background-position: -265.5px 0;
      }
      &:nth-child(5) i {
        width: 62px;
        background-position: 0 -95.5px;
      }
      &:nth-child(6) i {
        background-position: -90.5px -94px;
      }
      &:nth-child(7) i {
        background-position: -178px -94px;
      }
      &:nth-child(8) i {
        background-position: -265.5px -94px;
      }
    }
  }
  .activity {
    padding: 0.4rem 0;
    background: #fff;
    margin-bottom: 0.1rem;
    overflow: hidden;
    .title {
      margin: 0 0.3rem;
      position: relative;
      .text {
        h2 {
          font-size: 0.4rem;
          color: #ff7928;
          img {
            width: 0.54rem;
            margin-left: 0.1rem;
          }
        }
        p {
          font-size: 0.24rem;
          color: #808080;
        }
      }
      .more {
        width: 1.36rem;
        height: 0.48rem;
        line-height: 0.48rem;
        text-align: center;
        font-size: 0.22rem;
        color: #ff7928;
        .border-1px(#ff7928, 0.6rem);
        position: absolute;
        right: 0;
        top: 0.1rem;
      }
    }
    .activity-hook {
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      font-size: 0;
      .activity_list {
        // width: 100%;
        display: flex;
        white-space: nowrap;
        margin: 0.35rem 0 0;
        padding-left: 0.3rem;
        box-sizing: border-box;
        li {
          // flex: 0 0 3.26rem;
          flex: 0 0 3.43rem;
          vertical-align: top;
          width: 3.43rem;
          border-radius: 0.1rem;
          overflow: hidden;
          transform: rotateZ(0);
          display: flex;
          /* justify-content: center;
          align-items: center; */
          a {
            display: inline-block;
            width: 3.26rem;
            position: relative;
            border-radius: 0.1rem;
            overflow: hidden;
            // transform: rotateZ(0);
            font-size: 0;
            padding-bottom: 0.3rem;
            height: 100%;
          }
          img {
            display: block;
            width: 100%;
            border-radius: 0.1rem;
          }
          h2 {
            width: 100%;
            font-size: 0.26rem;
            color: #4d4d4d;
            white-space: normal;
            margin: 0.1rem 0;
          }
          p {
            font-size: 12px;
            color: #b2b2b2;
            position: absolute;
            left: 0;
            bottom: 0.24rem;
            i {
              display: inline-block;
              //   vertical-align: top;
              width: 10px;
              height: 10px;
              background: url(./images/time.png);
              background-size: 100% 100%;
              margin-right: 0.05rem;
              //   margin-top: 3px;
            }
          }
        }
      }
    }
  }
  .discount {
    padding: 0.4rem 0;
    background: #fff;
    margin-bottom: 0.1rem;
    overflow: hidden;
    .title {
      margin: 0 0.3rem;
      position: relative;
      .text {
        h2 {
          font-size: 0.4rem;
          color: #ff7928;
          img {
            width: 0.5rem;
            margin-left: 0.1rem;
          }
        }
        p {
          font-size: 0.24rem;
          color: #808080;
        }
      }
      .more {
        width: 1.36rem;
        height: 0.48rem;
        line-height: 0.48rem;
        text-align: center;
        font-size: 0.22rem;
        color: #ff7928;
        .border-1px(#ff7928, 0.6rem);
        position: absolute;
        right: 0;
        top: 0.1rem;
      }
    }
    .discount-hook {
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      font-size: 0;
      .discount_list {
        display: flex;
        white-space: nowrap;
        margin: 0.35rem 0 0;
        padding-left: 0.3rem;
        box-sizing: border-box;
        white-space: nowrap;
        li {
          flex: 0 0 3.43rem;
          display: inline-block;
          width: 3.43rem;
          vertical-align: top;
          position: relative;
          border-radius: 0.1rem;
          overflow: hidden;
          //   transform: rotateZ(0);
          font-size: 0;
          a {
            display: inline-block;
            width: 3.26rem;
            position: relative;
            border-radius: 0.1rem;
            overflow: hidden;
            // transform: rotateZ(0);
            font-size: 0;
            padding-bottom: 0.36rem;
            height: 100%;
          }
          img {
            display: block;
            width: 100%;
            border-radius: 0.1rem;
          }
          h2 {
            font-size: 0.26rem;
            color: #4d4d4d;
            margin: 0.1rem 0 0.16rem;
          }
          p {
            font-size: 0.22rem;
            color: #b2b2b2;
            position: absolute;
            left: 0;
            bottom: 0.36rem;
            span {
              font-size: 0.36rem;
              color: #ff3232;
            }
          }
          .tag {
            display: inline-block;
            position: absolute;
            left: -0.18rem;
            top: -0.01rem;
            height: 0.4rem;
            line-height: 0.4rem;
            color: transparent;
            font-size: 0;
            span {
              display: inline-block;
              vertical-align: top;
              padding: 0 0.24rem;
              background: #ff5d4c;
              font-size: 0.24rem;
              text-indent: 0.1rem;
              transform: skewX(-30deg);
              transform-origin: left top;
            }
            em {
              display: inline-block;
              vertical-align: top;
              transform: skewX(-30deg);
              transform-origin: left top;
              padding: 0 0.35rem 0 0.25rem;
              margin: 0;
              background: rgba(0, 0, 0, 0.6);
              font-size: 0.18rem;
            }
          }
          .tag2 {
            display: inline-block;
            position: absolute;
            left: -0.18rem;
            top: -0.01rem;
            height: 0.4rem;
            line-height: 0.4rem;
            color: #fff;
            font-size: 0;
            span {
              display: inline-block;
              vertical-align: top;
              padding: 0 0.24rem;
              font-size: 0.24rem;
              text-indent: 0.1rem;
            }
            em {
              display: inline-block;
              vertical-align: top;
              margin: 0;
              padding: 0 0.35rem 0 0.25rem;
              font-size: 0.18rem;
            }
          }
        }
      }
    }
  }
  .strategy {
    padding: 0.4rem 0;
    background: #fff;
    margin-bottom: 0.1rem;
    overflow: hidden;
    .title {
      margin: 0 0.3rem;
      position: relative;
      .text {
        h2 {
          font-size: 0.4rem;
          color: #ff7928;
          img {
            width: 0.5rem;
            margin-left: 0.1rem;
          }
        }
        p {
          font-size: 0.2rem;
          color: #808080;
        }
      }
      .more {
        width: 1.36rem;
        height: 0.48rem;
        line-height: 0.48rem;
        text-align: center;
        font-size: 0.22rem;
        color: #ff7928;
        .border-1px(#ff7928, 0.6rem);
        position: absolute;
        right: 0;
        top: 0.1rem;
      }
    }
  }
}

.mCSB_horizontal.mCSB_inside > .mCSB_container {
  margin: 0;
}
.mCSB_scrollTools.mCSB_scrollTools_horizontal {
  height: 0;
  opacity: 0;
}

/* @keyframes bgMove {
  2.8% {
    background-image: url(./images/bg/000.jpg);
  }
  5.6% {
    background-image: url(./images/bg/001.jpg);
  }
  8.4% {
    background-image: url(./images/bg/002.jpg);
  }
  11.2% {
    background-image: url(./images/bg/003.jpg);
  }
  14% {
    background-image: url(./images/bg/004.jpg);
  }
  16.8% {
    background-image: url(./images/bg/005.jpg);
  }
  19.6% {
    background-image: url(./images/bg/006.jpg);
  }
  22.4% {
    background-image: url(./images/bg/007.jpg);
  }
  25.2% {
    background-image: url(./images/bg/008.jpg);
  }
  28% {
    background-image: url(./images/bg/009.jpg);
  }
  30.8% {
    background-image: url(./images/bg/010.jpg);
  }
  33.6% {
    background-image: url(./images/bg/011.jpg);
  }
  36.4% {
    background-image: url(./images/bg/012.jpg);
  }
  39.2% {
    background-image: url(./images/bg/013.jpg);
  }
  42% {
    background-image: url(./images/bg/014.jpg);
  }
  44.8% {
    background-image: url(./images/bg/015.jpg);
  }
  47.6% {
    background-image: url(./images/bg/016.jpg);
  }
  50.4% {
    background-image: url(./images/bg/017.jpg);
  }
  53.2% {
    background-image: url(./images/bg/018.jpg);
  }
  56% {
    background-image: url(./images/bg/019.jpg);
  }
  58.8% {
    background-image: url(./images/bg/020.jpg);
  }
  61.6% {
    background-image: url(./images/bg/021.jpg);
  }
  64.4% {
    background-image: url(./images/bg/022.jpg);
  }
  67.2% {
    background-image: url(./images/bg/023.jpg);
  }
  70% {
    background-image: url(./images/bg/024.jpg);
  }
  72.8% {
    background-image: url(./images/bg/025.jpg);
  }
  75.6% {
    background-image: url(./images/bg/026.jpg);
  }
  78.4% {
    background-image: url(./images/bg/027.jpg);
  }
  81.2% {
    background-image: url(./images/bg/028.jpg);
  }
  84% {
    background-image: url(./images/bg/029.jpg);
  }
  86.8% {
    background-image: url(./images/bg/030.jpg);
  }
  89.6% {
    background-image: url(./images/bg/031.jpg);
  }
  92.4% {
    background-image: url(./images/bg/032.jpg);
  }
  95.2% {
    background-image: url(./images/bg/033.jpg);
  }
  98% {
    background-image: url(./images/bg/034.jpg);
  }
  100% {
    background-image: url(./images/bg/035.jpg);
  }
} */
</style>
