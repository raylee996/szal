<template>
    <transition :name="animationName">
        <div class="container_wrapper" v-if="showflag">
            <hotel-header :classname="'resortHotel'" :text="'会议与宴会'" :inner="true"></hotel-header>
            <div class="container">
                <scroll>
                    <div class="content">
                        <h2 class="title">宴会活动</h2>
                        <p class="p1">美妙的安排，让您的商务之旅无与伦比</p>
                        <img src="./images/1.jpg" alt="" class="mainImg">
                        <p class="p2">酒店xxx平米的超大国际宴会厅和多个可以组合的多功能厅以及一流的会议设施是您举办大型会议、会展、私人集会、宴请及各类庆典的绝佳选择。</p>
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
        .content{
            background: #f7f7f7;
            padding: 0.8rem 0 2rem;
            .title{
                font-size: 0.54rem;
                color: #383838;
                text-align: center;
                &:after{
                    content: "";
                    display: block;
                    width: 0.3rem;
                    height: 0.04rem;
                    background: #be9b57;
                    margin: 0.2rem auto;
                }
            }
            .p1{
                font-size: 0.24rem;
                color: #666666;
                text-align: center;
                margin-bottom: 0.35rem;
            }
            .mainImg{
                display: block;
                width: 100%;
                margin-bottom: 0.35rem;
                &:last-child{
                    margin-bottom: 0;
                }
            }
            .p2{
                margin: 0 0.3rem 0.5rem;
                font-size: 0.24rem;
                color: #999999;
                line-height: 0.48rem;
                text-indent: 2em;
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
    }
}
</style>
