<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <zone-nav @switchZone="switchZone" :currentArea="currentArea"></zone-nav>
            <ul class="news_list" v-if="newsList.length > 0">
                <li class="item" v-for="item in newsList" @click="routerGo(item.id)" :key="item.id">
                    <div class="text">
                        <h2>{{item.title}}</h2>
                        <p>{{item.CreateDate}}</p>
                    </div>
                    <div class="tag">{{item.area_name}}</div>
                </li>
            </ul>
            <loading v-if="newsList.length == 0 && !errMsg"></loading>
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
import {getNews} from "common/js/api";
import loading from "components/loading/loading";
import noResult from "components/no-result/index";

export default {
    data() {
        return {
            text: "景区新闻",
            classname: "common",
            newsList: [],
            errMsg: "",
            currentArea: "森林水世界"
        }
    },
    mounted() {
        this._getNews(this.currentArea)
    },
    computed: {
        ...mapGetters([
            "zone"
        ])
    },
    methods: {
        switchZone(item) {
            this._getNews(item)
        },
        routerGo(id) {
            this.$router.push({
                path: `/service/news/detail?id=${id}`
            })
        },
        _getNews(area) {
            this.newsList = []
            this.errMsg = ""
            getNews(area).then((response) => {
                if(response.code == 200) {
                    if(!response.data.list || response.data.list.length==0) {
                        this.errMsg = "没有更多了！"
                    }else {
                        this.newsList = response.data.list
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
    .news_list{
        .item{
            display: flex;
            padding: 0.3rem;
            .border-bottom-1px(#e6e6e6, 0, absolute, auto, 0, 0, 0);
            .text{
                flex: 1;
                padding-right: 0.5rem;
                h2{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    font-size: 0.3rem;
                    color: #343434;
                    height: 0.84rem;
                    line-height: 0.42rem;
                    margin-bottom: 0.1rem;
                }
                p{
                    font-size: 0.24rem;
                    color: #b2b2b2;
                }
            }
            .tag{
                display: inline-block;
                padding: 0 0.1rem;
                background: #06b0b2;
                font-size: 0.2rem;
                height: 0.4rem;
                line-height: 0.4rem;
                vertical-align: top;
                color: #fff;
                border-radius: 0.05rem;
            }
        }
    }
}
</style>
