<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <zone-nav @switchZone="switchZone" :currentArea="currentArea"></zone-nav>
            <ul class="strategy_list" v-for="item in strategyList" :key='item.id'>
                <li @click="routerGo(item.id)">
                    <div class="intro">
                        <h2 class="title">{{item.title}}</h2>
                        <!-- <div class="tags">
                            <span v-for="tag in item.tags">{{tag}}</span>
                        </div> -->
                    </div>
                    <div class="thumbnail">
                        <img :src="item.image" alt="">
                    </div>
                </li>
            </ul>
            <loading v-if="strategyList.length == 0 && !errMsg"></loading>
            <no-result v-if="errMsg" :words="errMsg"></no-result>
        </div>
        <router-view></router-view>
        <sticky-footer></sticky-footer>
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import {mapGetters} from "vuex";
import zoneNav from "components/zone-nav/index";
import stickyFooter from "components/footer/index";
import {getStrategy} from "common/js/api";
import loading from "components/loading/loading";
import noResult from "components/no-result/index";
import config from "common/js/config";
import {getQueryString} from "common/js/utils"

const dev = process.env.NODE_ENV !== 'production'

export default {
    data() {
        return {
            text: "游玩攻略",
            classname: "common",
            strategyList: [],
            errMsg: "",
            currentArea: this.$route.query.area || "森林水世界"
        }
    },
    mounted() {
        this._getStrategy(this.currentArea)
    },
    computed: {
        ...mapGetters([
            "zone"
        ])
    },
    methods: {
        switchZone(item) {
            this._getStrategy(item)
        },
        routerGo(id) {
            this.$router.push({
                path: `/strategy/strategy/detail?id=${id}`
            })
        },
        _getStrategy(areaname) {
            this.strategyList = []
            this.errMsg = ""
            getStrategy(areaname).then((response) => {
                if(response.code == 200) {
                    if(!response.data.list || response.data.list.length==0) {
                        this.errMsg = "没有更多了！"
                    }else {
                        response.data.list.forEach((element) => {
                            if(dev) {
                                if(element.image.indexOf("http") == -1) {
                                    element.image = config.domain+element.image
                                }
                            }
                        });
                        this.strategyList = response.data.list
                    }
                }else {
                    this.errMsg = response.msg
                }
            })
        }
    },
    components: {
        innerHeader,
        zoneNav,
        stickyFooter,
        loading,
        noResult
    }
}
</script>

<style lang="less" scoped>
@import "~common/less/mixin.less";

.container{
    padding-top: 50px;
    background: #f7f7f7;
    .strategy_list{
        margin: 0 0.3rem;
        li{
            display: flex;
            justify-content: space-between;
            padding: 0.38rem 0;
            .border-bottom-1px(#e6e6e6, 0, absolute, auto, 0, 0, 0);
            .intro{
                flex: 0 0 3.4rem;
                .title{
                    font-size: 0.3rem;
                    color: #292929;
                    margin-bottom: 0.3rem;
                }
                .tags{
                    span{
                        display: inline-block;
                        margin-right: 0.14rem;
                        margin-bottom: 0.14rem;
                        padding: 0.1rem 0.17rem;
                        background: #fff;
                        font-size: 0.24rem;
                        color: #4d4d4d;
                        .border-1px(#e6e6e6);
                    }
                }
            }
            .thumbnail{
                flex: 0 0 3.14rem;
                width: 3.14rem;
                img{
                    display: block;
                    width: 100%;
                }
            }
        }
    }
}
</style>
