<template>
    <div class="footer">
        <div class="footer_link">
            <a href="/" class="footer_link_btn" :class="{active: currentIndex == 0}">
                <div class="icon">
                    <img src="./images/home.png" alt="">
                </div>
                <p>首页</p>
            </a>
            <a href="javascript:;" class="footer_link_btn" :class="{active: currentIndex == 1}" @click="switchBox(0)">
                <div class="icon">
                    <img src="./images/icon_1.png" alt="">
                </div>
                <p>景区</p>
            </a>
            <a href="javascript:;" class="footer_link_btn" :class="{active: currentIndex == 2}" @click="switchBox(1)">
                <div class="icon">
                    <img src="./images/icon_2.png" alt="">
                </div>
                <p>酒店</p>
            </a>
            <a href="javascript:;" class="footer_link_btn" :class="{active: currentIndex == 3}" @click="switchBox(2)">
                <div class="icon">
                    <img src="./images/icon_3.png" alt="">
                </div>
                <p>活动</p>
            </a>
            <a href="javascript:;" class="footer_link_btn" :class="{active: currentIndex == 4}" @click="switchBox(3)">
                <div class="icon">
                    <img src="./images/icon_4.png" alt="">
                </div>
                <p>攻略</p>
            </a>
            <a href="javascript:;" class="footer_link_btn" :class="{active: currentIndex == 5}" @click="switchBox(4)">
                <div class="icon">
                    <img src="./images/icon_5.png" alt="">
                </div>
                <p>服务</p>
            </a>
        </div>
        <div class="footer_link_menu">
            <div class="footer_link_menu_box" :class="{active: visibleSubNav == 0}">
                <router-link class="subNavBtn" :to="{path: '/park/forestWorld/forestWorld'}">森林世界</router-link>
                <router-link class="subNavBtn" :to="{path: '/park/waterWorld/waterWorld'}">森林水世界</router-link>
                <router-link class="subNavBtn" :to="{path: '/park/waterPark/waterPark'}">四季恒温水乐园</router-link>
                <router-link class="subNavBtn" :to="{path: '/park/suxiansen/suxiansen'}">苏鲜森餐厅</router-link>
                <a class="subNavBtn" href='javascript:;'>森林小镇</a>
            </div>
            <div class="footer_link_menu_box" :class="{active: visibleSubNav == 1}">
                <router-link class="subNavBtn" :to="{path: '/hotel/resortHotel/index'}">四季悦度假酒店</router-link>
                <router-link class="subNavBtn" :to="{path: '/hotel/ramada/index'}">高新华美达</router-link>
                <router-link :to="{path: '/hotel/ibis/index'}">苏州乐园浒关酒店</router-link>
            </div>
            <div class="footer_link_menu_box" :class="{active: visibleSubNav == 2}">
                <router-link class="subNavBtn" :to="{path: '/activity?type=activity'}">主题活动</router-link>
                <router-link class="subNavBtn" :to="{path: '/activity?type=discount'}">优惠信息</router-link>
            </div>
            <div class="footer_link_menu_box" :class="{active: visibleSubNav == 3}">
                <router-link class="subNavBtn" :to="{path: '/strategy/strategy'}">景区攻略</router-link>
                <router-link class="subNavBtn" :to="{path: '/strategy/traffic'}">交通指南</router-link>
                <router-link class="subNavBtn" :to="{path: '/strategy/consult'}">游客咨询</router-link>
            </div>
            <div class="footer_link_menu_box" :class="{active: visibleSubNav == 4}">
                <!-- <router-link class="subNavBtn" :to="{path: '/service/ticket'}">景区票价</router-link> -->
                <!-- <router-link class="subNavBtn" :to="{path: '/service/map'}">景区地图</router-link> -->
                <!-- <router-link class="subNavBtn" :to="{path: '/service/notice'}">游客须知</router-link> -->
                <!-- <router-link class="subNavBtn" :to="{path: '/service/FAQ'}">常见问题</router-link> -->
                <!-- <router-link class="subNavBtn" :to="{path: '/service/contactUs'}">联系我们</router-link> -->
                <!-- <router-link class="subNavBtn" :to="{path: '/service/news'}">景区新闻</router-link> -->
                <router-link class="subNavBtn" :to="{path: '/service/tips'}">游园须知</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
    data() {
        return {
            currentIndex: -1
        }
    },
    computed: {
        ...mapGetters([
            "currentNav",
            "visibleSubNav"
        ])
    },
    mounted() {
        var _ts = this
        this.currentIndex = this.currentNav

        $("body div").on("touchstart", function(e) {
            if(e.currentTarget.className == "footer_link") {
                e.stopPropagation();
            }
            if(e.target.tagName == "A") {
                return
            }
            if(e.currentTarget.className !== "icon" && e.currentTarget.className !== "footer_link") {
                $(".footer_link_menu .footer_link_menu_box").removeClass("active")
                _ts.setVisibleSubNav(-1)
            }
        })
    },
    methods: {
        switchBox(index) {
            if(this.visibleSubNav == index) {
                this.setVisibleSubNav(-1)
            }else {
                this.setVisibleSubNav(index)
            }
        },
        ...mapMutations({
            setVisibleSubNav: "SET_VISIBLESUBNAV"
        })
    }
}
</script>

<style lang="less" scoped>
.footer {
  padding-bottom: 60px;
  .footer_link {
    display: flex;
    width: 100%;
    height: 60px;
    background: #fff;
    box-sizing: border-box;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 99;
    box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);
    .footer_link_btn {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      padding: 0.1rem 0;
      flex-wrap: wrap;
      position: relative;
      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 0.8rem;
        margin-bottom: 0.25rem;
        // .active {
        //   display: none;
        // }
        // &.active {
          // img {
            // display: none;
          // }
        // }
      }
      &:nth-child(2) {
        .icon.active {
          .active {
            display: inline-block;
            width: 0.45rem;
          }
        }
      }
      &:nth-child(3) {
        .icon.active {
          .active {
            display: inline-block;
            width: 0.47rem;
          }
        }
      }
      &:nth-child(4) {
        .icon.active {
          .active {
            display: inline-block;
            width: 0.47rem;
          }
        }
      }
      &:nth-child(5) {
        .icon.active {
          .active {
            display: inline-block;
            width: 0.42rem;
          }
        }
      }
      &:nth-child(6) {
        .icon.active {
          .active {
            display: inline-block;
            width: 0.45rem;
          }
        }
      }
      p {
        font-size: 0.2rem;
        color: #757575;
        width: 100%;
        text-align: center;
        position: absolute;
        left: 0;
        bottom: 0.1rem;
      }
      &.active {
        p {
          color: #ff3c26;
        }
        &:nth-child(2) img {
          // display: none;
          &.active {
            display: inline-block;
            width: 0.45rem;
          }
        }
        &:nth-child(3) img {
          // display: none;
          &.active {
            display: inline-block;
            width: 0.47rem;
          }
        }
        &:nth-child(4) img {
          // display: none;
          &.active {
            display: inline-block;
            width: 0.47rem;
          }
        }
        &:nth-child(5) img {
          // display: none;
          &.active {
            display: inline-block;
            width: 0.42rem;
          }
        }
        &:nth-child(6) img {
          // display: none;
          &.active {
            display: inline-block;
            width: 0.45rem;
          }
        }
      }
      &:nth-child(1) img {
        width: 0.45rem;
      }
      &:nth-child(2) img {
        width: 0.44rem;
      }
      &:nth-child(3) img {
        width: 0.47rem;
      }
      &:nth-child(4) img {
        width: 0.46rem;
      }
      &:nth-child(5) img {
        width: 0.42rem;
      }
      &:nth-child(6) img {
        width: 0.4rem;
      }
    }
  }
  .footer_link_menu {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 98;
  }
  .footer_link_menu .footer_link_menu_box {
    display: inline-block;
    min-width: 2rem;
    border: 0.015rem solid #ddd;
    border-radius: 0.05rem;
    font-size: 0.28rem;
    background: #fff;
    box-shadow: 0 0 0.2rem rgba(50, 50, 50, 0.2);
    position: absolute;
    bottom: -5rem;
    opacity: 0;
    transition: 0.5s;
    transform: translateX(-0.36rem);
  }
  .footer_link_menu .footer_link_menu_box.active {
    opacity: 1;
    bottom: 75px;
    transition: 0.5s;
  }
  .footer_link_menu .footer_link_menu_box a {
    display: block;
    width: 80%;
    text-align: center;
    padding: 0.3rem 0;
    border-bottom: 0.015rem solid #bbbbbb;
    margin: 0 auto;
    color: #505050;
  }
  .footer_link_menu .footer_link_menu_box a:last-child {
    border: none;
  }
  .footer_link_menu .footer_link_menu_box::after {
    content: "";
    display: block;
    width: 0.56rem;
    height: 0.32rem;
    background: url(./images/arrow.png);
    background-size: 100% 100%;
    position: absolute;
    left: 50%;
    bottom: -0.32rem;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
  }
  .footer_link_menu .footer_link_menu_box:nth-child(1) {
    left: 16.7%;
  }
  .footer_link_menu .footer_link_menu_box:nth-child(2) {
    left: 33.3%;
  }
  .footer_link_menu .footer_link_menu_box:nth-child(3) {
    left: 50%;
  }
  .footer_link_menu .footer_link_menu_box:nth-child(4) {
    left: 66.7%;
  }
  .footer_link_menu .footer_link_menu_box:nth-child(5) {
    right: 0;
    transform: translateX(0);
  }
}
</style>
