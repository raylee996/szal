<template>
    <transition :name="animationName">
        <div class="container_wrapper" v-if="showflag">
            <inner-header :text="text" :classname="classname"></inner-header>
            <div class="facility_detail">
                <scroll :data="detail" ref="scroll">
                    <div class="detail-hook" v-if="!isEmptyObject(detail)">
                        <div class="banner_wrap">
                            <div class="swiper-container banner" id="banner-detail">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="item in detail.images">
                                        <a href="javascript:;">
                                            <img :src="item.img" alt="">
                                        </a>
                                    </div>
                                </div>
                                <div class="swiper-pagination"><em>{{currentIndex}}</em>/<em>{{imgLength}}</em></div>
                            </div>
                        </div>
                        <div class="head">
                            <h2>{{detail.title}}</h2>
                            <p v-if="detail.type">项目类型：<span>{{detail.type}}</span></p>
                            <div v-if="detail.content">项目介绍：<div v-html="detail.content"></div></div>
                            <a href="javascript:;" class="like"><i></i>HOT</a>
                        </div>
                        <div class="detail">
                            <div class="detail_item" v-if="detail.open_hours">
                                <h2>开放时间</h2>
                                <p>{{detail.open_hours}}</p>
                            </div>
                            <div class="detail_item" v-if="detail.exponen">
                                <h2>欢乐指数</h2>
                                <p class="strong">{{detail.exponent}}</p>
                            </div>
                            <div class="detail_item" v-if="detail.duration">
                                <h2>所需时长</h2>
                                <p>约<span class="strong">{{detail.duration}}</span>分钟</p>
                            </div>
                            <div class="detail_item" v-if="detail.number">
                                <h2>定员</h2>
                                <p>{{detail.number}}人</p>
                            </div>
                            <div class="intro" v-if="detail.gardenName || detail.crowd">
                                <p v-if="detail.gardenName"><span>位置：</span>{{detail.gardenName}}</p>
                                <p v-if="detail.crowd"><span>适合人群：</span>{{detail.crowd}}</p>
                            </div>
                        </div>
                    </div>
                    <loading v-if="isEmptyObject(detail) && !errMsg"></loading>
                    <div class="recommend">
                        <div class="title">
                            <h2>更多推荐</h2>
                            <!-- <router-link :to="{path: '/park/facility'}">更多 ></router-link> -->
                        </div>
                        <ul class="recommend_list">
                            <li v-for="item in recommendList" @click="routerGo(item.id)" :key="item.id">
                                <div class="thumbnail">
                                    <img :src="item.images" alt="">
                                </div>
                                <div class="intro">
                                    <h2 class="name">{{item.title}}</h2>
                                    <p class="text" v-if="item.exponent">欢乐指数：<span class="star">{{item.exponent}}</span></p>
                                    <p class="text" v-if="item.feature">项目特征：{{item.feature}}</p>
                                </div>
                            </li>
                        </ul>
                        <loading v-if="recommendList.length==0 && !errMsg2"></loading>
                    </div>
                    <!-- <a href="javascript:;" @click="back" class="close">&times;</a> -->
                </scroll>
            </div>
            <!-- <sticky-footer v-show="from && from.length>0"></sticky-footer> -->
        </div>
    </transition>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";
import {back, isEmptyObject} from "common/js/utils";
import Swiper from "swiper";
import scroll from "components/scroll/scroll";
import Mixin from "common/js/mixin";
import loading from "components/loading/loading";
import {getFacilityDetails, getFacilityHot} from "common/js/api";

export default {
    mixins: [Mixin],
    data() {
        return {
            text: "景区设施",
            showflag: false,
            classname: "facility",
            errMsg: "",
            errMsg2: "",
            detail: {},
            imgLength: 0,
            recommendList: [],
            currentIndex: 1,
            from: this.$route.query.from
        }
    },
    methods: {
        isEmptyObject,
        back,
        routerGo(id) {
            this._getFacilityDetails(id)
            this.$refs.scroll.scrollTo(0,0,0)
            this.$router.replace({
                query: {
                    id,
                    area: this.$route.query.area
                }
            })
        },
        _getFacilityDetails(id) {
            this.detail = {}
            this.errMsg = ""
            getFacilityDetails(id).then((response) => {
                if(response.code == 200) {
                    this.detail = response.data
                    this.imgLength = this.detail.images.length
                    this.$nextTick(() => {
                        this.createSwiper()
                    })
                    console.log(this.detail)
                }else {
                    this.errMsg = response.msg
                    alert(response.msg)
                }
            })
        },
        createSwiper() {
            var _ts = this
            new Swiper('#banner-detail', {
                pagination: '#banner-detail .swiper-pagination',
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
        },
        _getFacilityHot(area) {
            this.recommendList = []
            this.errMsg2 = ""
            getFacilityHot(area).then((response) => {
                if(response.code == 200) {
                    this.recommendList = response.data.List
                }else {
                    this.errMsg2 = response.msg
                    alert(response.msg)
                }
            })
        }
    },
    mounted() {
        this.showflag = true
        this._getFacilityDetails(this.$route.query.id)
        this._getFacilityHot(this.$route.query.area)
    },
    components: {
        innerHeader,
        stickyFooter,
        scroll,
        loading
    }
}
</script>

<style lang="less" scoped>
@import "~common/less/mixin.less";

.container_wrapper{
    background: #f7f7f7;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
    // padding-bottom: 1.2rem;
    .container{
        height: 100%;
        overflow: hidden;;
    }
    &.slide-enter-active,&.slide-leave-active{
        transition: all .5s;
    }
    &.slide-enter,&.slide-leave-active{
        transform: translate3d(100%,0,0);
    }
    .facility_detail{
        width: 100%;
        height: calc(100% - 50px);
        margin-top: 50px;
        overflow: hidden;
        .banner_wrap{
            .banner{
                .swiper-slide{
                    img{
                        display: block;
                        width:100%;
                    }
                }
                .swiper-pagination{
                    padding: 0  0.25rem;
                    background: rgba(0, 0, 0, 0.6);
                    z-index: 20;
                    position: absolute;
                    right: 0.3rem;
                    bottom: 0.12rem;
                    font-size: 0.24rem;
                    color: #fff;
                    line-height: 0.36rem;
                    border-radius: 0.3rem;
                }
            }
        }
        .head{
            padding: 0.35rem 0.3rem;
            background: #fff;
            position: relative;
            overflow: hidden;
            h2{
                font-size: 0.5rem;
                color: #4c4c4c;
                font-weight: bold;
                margin-bottom: 0.3rem;
            }
            div,p{
                font-size: 0.24rem;
                color: #333333;
                line-height: 0.48rem;
                div,span{
                    color: #808080;
                }
            }
            .like{
                width: 1.84rem;
                height: 0.48rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background: linear-gradient(to right, #ff4e65, #ff7928);
                font-size: 0.3rem;
                color: #fff;
                position: absolute;
                right: -0.26rem;
                top: 0.38rem;
                border-radius: 0.3rem;
                i{
                    width: 0.27rem;
                    height: 0.29rem;
                    background: url(./images/like.png);
                    background-size: 100% 100%;
                    position: absolute;
                    left: 0.2rem;
                    top: 0.08rem;
                }
            }
        }
        .detail{
            margin: 0.15rem 0.3rem;
            background: #fff;
            border-radius: 0.1rem;
            .detail_item{
                padding: 0.3rem 0;
                margin: 0 0.45rem;
                text-align: center;
                h2{
                    font-size: 0.24rem;
                    color: #989898;
                    margin: 0.1rem 0;
                }
                p{
                    font-size: 0.32rem;
                    color: #4c4c4c;
                    margin: 0.1rem 0;
                    &.strong{
                        color: #ff652f;
                    }
                }
                &:last-child{
                    .border-bottom-1px(#dadada, 0, absolute, auto, 0, 0, 0);
                }
            }
            .intro{
                margin: 0 0.45rem;
                padding: 0.48rem 0;
                text-align: center;
                p{
                    font-size: 0.24rem;
                    line-height: 0.48rem;
                    color: #4c4c4c;
                    span{
                        color: #989898;
                    }
                }
            }
        }
        .recommend{
            padding: 0 0.3rem;
            .title{
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0.28rem 0.3rem;
                h2{
                    flex: 1;
                    text-align: left;
                    font-size: 0.4rem;
                    color: #fd3b52;
                }
                a{
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
            .recommend_list{
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li{
                    flex: 0 0 3.36rem;
                    width: 3.36rem;
                    border-radius: 0.1rem;
                    overflow: hidden;
                    transform: rotateZ(0);
                    margin-bottom: 0.42rem;
                    .thumbnail{
                        width: 100%;
                        height: 2.24rem;
                        position: relative;
                        overflow: hidden;
                        img{
                            width: 120%;
                            position: absolute;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                        }
                    }
                    .intro{
                        background: #fff;
                        padding: 0.15rem;
                        .name{
                            font-size: 0.3rem;
                            color: #424242;
                            margin-bottom: 0.18rem;
                        }
                        .text{
                            font-size: 0.24rem;
                            color: #666666;
                            line-height: 0.3rem;
                            .star{
                                color: #ff7734;
                            }
                        }
                    }
                }
            }
        }
        /* .close{
            font-size: 0.82rem;
            color: #fff;
            position: absolute;
            left: 0.3rem;
            top: 1rem;
            text-shadow: 0 0 3px rgba(0, 0, 0, .4);
            z-index: 3;
        } */
    }
}

</style>
