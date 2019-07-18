<template>
    <transition :name="animationName">
        <div class="container_wrapper" v-if="showflag">
            <hotel-header :classname="'ibis'" :text="'客房与套房'" :inner="true"></hotel-header>
            <div class="container">
                <scroll>
                    <ul class="room_list">
                        <li class="item">
                            <img src="./images/test.jpg" alt="" class="thumbnail">
                            <div class="intro">
                                <h2>普通双床房</h2>
                                <ul>
                                    <li>
                                        <i></i>24小时客房
                                    </li>
                                    <li>
                                        <i></i>无线高速上网
                                    </li>
                                    <li>
                                        <i></i>标准淋浴间
                                    </li>
                                    <li>
                                        <i></i>1.8mx2.3m
                                    </li>
                                    <li>
                                        <i></i>液晶电视
                                    </li>
                                </ul>
                                <p class="price">平日价：<span>259</span> 元/间</p>
                                <p class="price">假日价：<span>339</span> 元/间</p>
                            </div>
                        </li>
                        <li class="item">
                            <img src="./images/test.jpg" alt="" class="thumbnail">
                            <div class="intro">
                                <h2>普通双床房</h2>
                                <ul>
                                    <li>
                                        <i></i>24小时客房
                                    </li>
                                    <li>
                                        <i></i>无线高速上网
                                    </li>
                                    <li>
                                        <i></i>标准淋浴间
                                    </li>
                                    <li>
                                        <i></i>1.8mx2.3m
                                    </li>
                                    <li>
                                        <i></i>液晶电视
                                    </li>
                                </ul>
                                <p class="price">平日价：<span>259</span> 元/间</p>
                                <p class="price">假日价：<span>339</span> 元/间</p>
                            </div>
                        </li>
                    </ul>
                    <hotel-footer></hotel-footer>
                </scroll>
            </div>
        </div>
    </transition>
</template>

<script>
import hotelHeader from "components/hotel-header/index";
import hotelFooter from "components/ibis/footer";
import scroll from "components/scroll/scroll";
import Mixin from "common/js/mixin";

export default {
    mixins: [Mixin],
    data() {
        return {
            showflag: false
        }
    },
    mounted() {
        this.showflag = true;
    },
    components: {
        hotelHeader,
        hotelFooter,
        scroll
    }
}
</script>

<style lang="less" scoped>
.container_wrapper{
    background: #fff;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 101;
    overflow-y: auto;
    // padding-bottom: 1.2rem;
    &.slide-enter-active,&.slide-leave-active{
        transition: all .5s;
    }
    &.slide-enter,&.slide-leave-active{
        transform: translate3d(100%,0,0);
    }
    .container{
        height: 100%;
        padding-top: 50px;
        overflow: hidden;
        .room_list{
            padding: 0.55rem 0.3rem 0.7rem;
            background: #f7f7f7;
            .item{
                background: #fff;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.16);
                margin-bottom: 0.7rem;
                &:last-child{
                    margin-bottom: 0;
                }
                .thumbnail{
                    display: block;
                    width: 100%;
                }
                .intro{
                    padding: 0.3rem;
                    h2{
                        font-size: 0.4rem;
                        color: #686868;
                        &:after{
                            content: "";
                            display: block;
                            width: 0.3rem;
                            height: 0.04rem;
                            background: #bc995d;
                            margin: 0.1rem 0 0.4rem;
                        }
                    }
                    ul{
                        display: flex;
                        flex-wrap: wrap;
                        li{
                            display: flex;
                            align-items: center;
                            flex: 0 0 33%;
                            margin-bottom: 0.3rem;
                            font-size: 0.24rem;
                            color: #9a9a9a;
                            i{
                                display: inline-block;
                                margin-right: 0.1rem;
                            }
                            &:nth-child(1) {
                                i{
                                    width: 0.36rem;
                                    height: 0.36rem;
                                    background: url(./images/i1.png);
                                    background-size: 100% 100%;
                                }
                            }
                            &:nth-child(2) {
                                i{
                                    width: 0.39rem;
                                    height: 0.29rem;
                                    background: url(./images/i2.png);
                                    background-size: 100% 100%;
                                }
                            }
                            &:nth-child(3) {
                                i{
                                    width: 0.31rem;
                                    height: 0.34rem;
                                    background: url(./images/i3.png);
                                    background-size: 100% 100%;
                                }
                            }
                            &:nth-child(4) {
                                i{
                                    width: 0.36rem;
                                    height: 0.22rem;
                                    background: url(./images/i4.png);
                                    background-size: 100% 100%;
                                }
                            }
                            &:nth-child(5) {
                                i{
                                    width: 0.34rem;
                                    height: 0.34rem;
                                    background: url(./images/i5.png);
                                    background-size: 100% 100%;
                                }
                            }
                        }
                    }
                    .price{
                        font-size: 0.24rem;
                        color: #686868;
                        span{
                            font-size: 0.36rem;
                            color: #c09a58;
                        }
                    }
                }
            }
        }
    }
}
</style>
