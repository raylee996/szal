<template>
    <div class="container-hook">
        <hotel-header :classname="'ramada'" :inner="false"></hotel-header>
        <div class="container">
            <img src="./images/head.jpg" alt="" class="header">
            <div class="entry">
                <div class="entry01">
                    <div class="entry01_left">
                        <div class="item" @click="routerGo('/hotel/ramada/room')">
                            <span>客房与套房</span>
                            <i></i>
                        </div>
                    </div>
                    <div class="entry01_right">
                        <div class="item" @click="routerGo('/hotel/ramada/food')">
                            <span>美食餐饮</span>
                            <i></i>
                        </div>
                        <div class="item" @click="routerGo('/hotel/ramada/meeting')">
                            <span>会议与宴会</span>
                            <i></i>
                        </div>
                    </div>
                </div>
                <div class="entry02">
                    <div class="item" @click="routerGo('/hotel/ramada/intro')">
                        <span>酒店概括</span>
                        <i></i>
                    </div>
                    <div class="item" @click="routerGo('/hotel/ramada/traffic')">
                        <span>酒店交通</span>
                        <i></i>
                    </div>
                </div>
            </div>
            <div class="entry_img">
                <div class="item" @click="routerGo('/hotel/ramada/facility')">
                    <span>休闲设施</span>
                    <p>我们这里不只有住宿，还会配套设施等你体验</p>
                </div>
                <div class="item" @click="routerGo('/hotel/ramada/food')">
                    <span>美味餐饮</span>
                    <p>来四季悦度假酒店，邂逅全球美味</p>
                </div>
                <div class="item" @click="routerGo('/hotel/ramada/scenicSpot')">
                    <span>酒店周边</span>
                    <p>除了吃住之外，酒店周边还有您意想不到的惊喜</p>
                </div>
            </div>
            <div class="intro">
                <h2>四季悦度假酒店</h2>
                <p>苏州乐园四季悦度假酒店从属于苏州乐园四季恒温水乐园的配套设施，共44间房间，现有34间标间，6间大床房，4间套间，在全身心放松享受温泉养生之后，踏进按精品酒店标准建造的舒适酒店，完美悠闲地度过假日放松心情。</p>
                <router-link class="more" :to="{path: '/hotel/ramada/intro'}">了解更多＞</router-link>
            </div>
            <hotel-footer></hotel-footer>
        </div>
        <router-view></router-view>
        <sticky-footer></sticky-footer>
    </div>
</template>

<script>
import hotelHeader from "components/hotel-header/index";
import stickyFooter from "components/footer/index";
import hotelFooter from "components/ramada/footer";

export default {
    data() {
        return {
        }
    },
    methods: {
        routerGo(path) {
            this.$router.push({
                path: path
            })
        }
    },
    components: {
        hotelHeader,
        stickyFooter,
        hotelFooter
    }
}
</script>

<style lang="less" scoped>
.container{
    // padding-top: 1rem;
    .header{
        display: block;
        width: 100%;
    }
    .entry{
        padding: 0.6rem 0.3rem;
        background: #f7f7f7;
        .item{
            background: #ff364d;
            position: relative;
            font-size: 0;
            span{
                display: inline-block;
                font-size: 0.3rem;
                color: #fff;
                &:after{
                    content: "";
                    display: block;
                    width: 0.3rem;
                    height: 0.04rem;
                    background: #fff;
                    margin: 0.15rem 0 0;
                }
            }
        }
        .entry01{
            display: flex;
            justify-content: space-between;
            .entry01_left{
                flex: 0 0 3.36rem;
                .item{
                    width: 3.36rem;
                    height: 3.48rem;
                    padding-top: 0.74rem;
                    box-sizing: border-box;
                    text-align: center;
                    i{
                        width: 0.95rem;
                        height: 0.61rem;
                        background: url(~common/images/hotel/room.png);
                        background-size: 100% 100%;
                        position: absolute;
                        left: 50%;
                        bottom: 0.86rem;
                        transform: translateX(-50%);
                    }
                    span{
                        &:after{
                            margin: 15px auto 0;
                        }
                    }
                }
            }
            .entry01_right{
                flex: 0 0 3.36rem;
                .item{
                    width: 3.36rem;
                    height: 1.65rem;
                    margin-bottom: 0.18rem;
                    box-sizing: border-box;
                    padding: 0.3rem 0 0 0.26rem;
                    &:nth-child(1) {
                        i{
                            width: 0.85rem;
                            height: 0.85rem;
                            background: url(~common/images/hotel/food.png);
                            background-size: 100% 100%;
                            position: absolute;
                            right: 0.37rem;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }
                    &:nth-child(2) {
                        i{
                            width: 1.05rem;
                            height: 0.94rem;
                            background: url(~common/images/hotel/meeting.png);
                            background-size: 100% 100%;
                            position: absolute;
                            right: 0.26rem;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                    }
                }
            }
        }
        .entry02{
            display: flex;
            justify-content: space-between;
            .item{
                flex: 0 0 3.36rem;
                width: 3.36rem;
                height: 1.65rem;
                box-sizing: border-box;
                padding: 0.3rem 0 0 0.26rem;
                &:nth-child(1) {
                    i{
                        width: 0.74rem;
                        height: 0.74rem;
                        background: url(~common/images/hotel/intro.png);
                        background-size: 100% 100%;
                        position: absolute;
                        right: 0.3rem;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
                &:nth-child(2) {
                    i{
                        width: 0.9rem;
                        height: 0.71rem;
                        background: url(~common/images/hotel/traffic.png);
                        background-size: 100% 100%;
                        position: absolute;
                        right: 0.35rem;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }
        }
    }
    .entry_img{
        .item{
            width: 100%;
            height: 3.8rem;
            padding-top: 1.22rem;
            box-sizing: border-box;
            text-align: center;
            color: #fff;
            font-size: 0;
            span{
                display: inline-block;
                font-size: 0.4rem;
                &:after{
                    content: "";
                    display: block;
                    width: 0.3rem;
                    height: 0.04rem;
                    background: #fff;
                    margin: 0.12rem auto 0.24rem;
                }
            }
            p{
                font-size: 0.22rem;
            }
            &:nth-child(1) {
                background: url(./images/facility_bg.jpg);
                background-size: 100% 100%;
            }
            &:nth-child(2) {
                background: url(./images/food_bg.jpg);
                background-size: 100% 100%;
            }
            &:nth-child(3) {
                background: url(./images/around_bg.jpg);
                background-size: 100% 100%;
            }
        }
    }
    .intro{
        width: 100%;
        height: 7rem;
        padding-top: 1.05rem;
        box-sizing: border-box;
        background: url(./images/intro_bg.jpg);
        background-size: 100% 100%;
        h2{
            font-size: 0.48rem;
            font-weight: normal;
            color: #383838;
            text-align: center;
            margin-bottom: 0.35rem;
        }
        p{
            font-size: 0.24rem;
            line-height: 0.48rem;
            text-indent: 2em;
            color: #999999;
            padding: 0 0.3rem;
            margin-bottom: 0.7rem;
        }
        .more{
            display: block;
            width: 2rem;
            height: 0.6rem;
            line-height: 0.6rem;
            margin: 0 auto;
            text-align: center;
            font-size: 0.24rem;
            color: #fff;
            background: #e3144b;
        }
    }
}
</style>
