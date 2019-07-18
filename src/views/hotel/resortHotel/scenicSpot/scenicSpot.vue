<template>
    <transition :name="animationName">
        <div class="container_wrapper" v-if="showflag">
            <hotel-header :classname="'resortHotel'" :text="'周边景点'" :inner="true"></hotel-header>
            <div class="container">
                <scroll>
                    <div class="content">
                        <h2 class="title">周边景点</h2>
                        <p class="p1">除了吃住之外，酒店周边还有你意想不到的惊喜</p>
                        <ul class="sopt_list">
                            <li class="item" v-for="item in soptList">
                                <img :src="item.imgUrl" alt="" class="thumbnail">
                                <div class="intro">
                                    <div class="name">{{item.name}}</div>
                                    <div class="address">地址：{{item.address}}</div>
                                    <div class="phone">电话：{{item.phone}}</div>
                                    <div class="distance"><span>{{item.distance}}</span>km</div>
                                </div>
                            </li>
                        </ul>
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
            showflag: false,
            soptList: [
                {
                    imgUrl: require("./images/1.jpg"),
                    name: "大阳山国家森林公园",
                    distance: 4.5,
                    address: "苏州市高新区浒关经济开发区山神弯路",
                    phone: "4008282667"
                },
                {
                    imgUrl: require("./images/2.jpg"),
                    name: "苏州乐园.森林水世界",
                    distance: 4.5,
                    address: "苏州市高新区阳山东路与山神弯路交叉口",
                    phone: "0512-68717241"
                },
                {
                    imgUrl: require("./images/3.jpg"),
                    name: "苏州乐园•四季恒温水乐园",
                    distance: 5.2,
                    address: "苏州市高新区树山生态村内",
                    phone: "0512-69581925"
                },
                {
                    imgUrl: require("./images/4.jpg"),
                    name: "白马涧.龙池",
                    distance: 6.2,
                    address: "苏州市高新区枫桥街道华山路",
                    phone: "0512-66658111"
                },
                {
                    imgUrl: require("./images/5.jpg"),
                    name: "泰迪农场",
                    distance: 12,
                    address: "苏州市高新区东渚镇黄区村北太湖大道",
                    phone: "4008280218"
                },
                {
                    imgUrl: require("./images/6.jpg"),
                    name: "贡山岛",
                    distance: 17.5,
                    address: "苏州市高新区镇湖街道马山村贡山岛",
                    phone: "0512-68717107"
                }
            ]
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
            .sopt_list{
                padding: 0 0.3rem;
                .item{
                    margin-bottom: 0.65rem;
                    background: #fff;
                    .thumbnail{
                        display: block;
                        width: 100%;
                    }
                    .intro{
                        padding: 0.28rem;
                        position: relative;
                        .name{
                            font-size: 0.4rem;
                            line-height: 0.68rem;
                            color: #4c4c4c;
                            margin-bottom: 0.35rem;
                        }
                        .address,.phone{
                            font-size: 0.24rem;
                            line-height: 0.48rem;
                            color: #4c4c4c;
                        }
                        .distance{
                            font-size: 0.38rem;
                            color: #4c4c4c;
                            line-height: 0.68rem;
                            position: absolute;
                            right: 0.28rem;
                            top: 0.28rem;
                            span{
                                color: #be9b57;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
