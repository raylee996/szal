<template>
    <transition :name="animationName">
        <div class="container_wrapper" v-if="showflag">
            <hotel-header :classname="'resortHotel'" :text="'酒店概括'" :inner="true"></hotel-header>
            <div class="container">
                <scroll>
                    <div class="content">
                        <h2 class="title">四季悦度假酒店</h2>
                        <p class="p2">苏州乐园四季悦度假酒店从属于苏州乐园四季恒温水乐园的配套设施。共44间房间，现有34间标间，6间大床房，4间套间。</p>
                        <img src="./images/1.jpg" alt="" class="mainImg">
                        <p class="p2">在全身心放松享受温泉养生之后，踏进按精品酒店标准建造的舒适酒店，完美悠闲地度过假日放松心情。</p>
                        <img src="./images/2.jpg" alt="" class="mainImg">
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
