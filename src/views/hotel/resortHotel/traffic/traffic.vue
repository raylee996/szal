<template>
    <transition :name="animationName">
        <div class="container_wrapper" v-if="showflag">
            <hotel-header :classname="'resortHotel'" :text="'酒店交通'" :inner="true"></hotel-header>
            <div class="container">
                <scroll>
                    <div class="content">
                        <h2 class="title">交通信息</h2>
                        <p class="p1">让您能节省更多时间和精力，快速到达酒店</p>
                        <div id="bdMap"></div>
                        <div class="text">
                            <h2>市内交通指南</h2>
                            <p>苏州火车站北广场：乘坐529路、10路、6路、81路在“虎丘立交桥东”下车，换乘316路；直达“树山村”站台，下车后向南约600m后左转即到；</p>
                            <p>汽车北站方向：乘坐316路直达“树山村”站台，下车后向南约600m后左转即到；</p>
                            <p>汽车南站方向：乘坐931路、39路、60路、308路在“附二医院（体育中心）”下，转乘321路；直达“树山村”站台，下车后</p>
                        </div>
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
        this.$nextTick(() => {
            this.createMap();
        })
    },
    methods: {
        createMap() {
            var map = new BMap.Map("bdMap");//创建地图
            var point = new BMap.Point(120.461874,31.365271);//位置
            map.centerAndZoom(point,19); //层级
        }
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
            #bdMap{
                width: 100%;
                height: 4rem;
                margin-bottom: 0.4rem;
            }
            .text{
                padding: 0 0.3rem;
                h2{
                    font-size: 0.36rem;
                    font-weight: normal;
                    color: #373737;
                }
                p{
                    font-size: 0.24rem;
                    color: #818181;
                    line-height: 0.48rem;
                    margin-bottom: 0.4rem;
                }
            }
        }
    }
}
</style>
