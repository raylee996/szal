<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <ul class="category_btn">
                <li :class="{'active': activeIndex==0}" @click="switchType(0)">主题活动</li>
                <li :class="{'active': activeIndex==1}" @click="switchType(1)">优惠信息</li>
            </ul>
            <ul class="activity_list" v-if="dataList.length > 0">
                <a v-if="item.WapUrl" class="item" v-for="item in dataList" :href="item.WapUrl" :key="item.id">
                    <img :src="item.image" alt="" class="thumbnail">
                    <div class="intro">
                        <div class="text">
                            <h2>{{item.title}}</h2>
                            <p>{{item.date}}</p>
                        </div>
                        <i></i>
                    </div>
                </a>
                <li v-if="!item.WapUrl" class="item" v-for="item in dataList" @click="routerGo(item.id)" :key="item.id">
                    <img :src="item.image" alt="" class="thumbnail">
                    <div class="intro">
                        <div class="text">
                            <h2>{{item.title}}</h2>
                            <p>{{item.date}}</p>
                        </div>
                        <i></i>
                    </div>
                </li>
            </ul>
            <loading v-if="dataList.length == 0 && !errMsg"></loading>
            <no-result v-if="errMsg" :words="errMsg"></no-result>
        </div>
        <router-view></router-view>
        <sticky-footer ref="stickyFooter"></sticky-footer>
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";
import {formatDate, getQueryString} from "common/js/utils";
import {getActivitys, getDiscounts} from "common/js/api"
import loading from "components/loading/loading";
import noResult from "components/no-result/index";
import config from "common/js/config";

const dev = process.env.NODE_ENV !== 'production'

export default {
    data() {
        return {
            text: "活动优惠",
            classname: "common",
            type: "activity",
            activeIndex: -1,
            errMsg: "",
            dataList: []
        }
    },
    mounted() {
        var type = this.$route.query.type
        if(type == "activity" || type == null) {
            this.activeIndex = 0;
            this.type = "activity";
            this._getActivitys();
        }
        if(type == "discount") {
            this.activeIndex = 1;
            this.type = "discount";
            this._getDiscounts();
        }
    },
    watch:{
        $route(to,from){
            var type = to.query.type
            if(type == "activity") {
                this.activeIndex = 0;
                this.type = "activity";
                if(from.path == "/activity" && to.path == "/activity") {
                    this._getActivitys();
                }
            }
            if(type == "discount") {
                this.activeIndex = 1;
                this.type = "discount";
                if(from.path == "/activity" && to.path == "/activity") {
                    this._getDiscounts();
                }
            }
            this.$refs.stickyFooter.switchBox(-1);
        }
    },
    filters: {
        formatDate(time){
            let date = new Date(time)
            return formatDate(date, "yyyy-MM-dd")
        }
    },
    methods: {
        switchType(index) {
            var type = "";
            if(index == 0) {
                type = "activity";
            }
            if(index == 1) {
                type = "discount";
            }
            this.type = type;
            this.activeIndex = index;
            this.$router.replace({
                path: `/activity?type=${type}`
            });
        },
        routerGo(id) {
            this.$router.push({
                path: `/activity/detail?id=${id}&type=${this.type}`
            })
        },
        _getActivitys() {
            this.dataList = []
            this.errMsg = ""
            var _data = []
            getActivitys().then((response) => {
                if(response.code == 200) {
                    if(!response.data || response.data.length == 0) {
                        this.errMsg = "没有更多了！"
                    }else {
                        response.data.forEach((item) => {
                            item.list.forEach((element) => {
                                if(dev) {
                                    if(element.image.indexOf("http") == -1) {
                                        element.image = config.domain+element.image
                                    }
                                }
                                _data = _data.concat(element)
                            });
                        });
                        this.dataList = _data
                    }
                }else {
                    this.errMsg = response.msg
                }
            })
        },
        _getDiscounts() {
            this.dataList = []
            this.errMsg = ""
            var _data = []
            getDiscounts().then((response) => {
                if(response.code == 200) {
                    if(!response.data || response.data.length == 0) {
                        this.errMsg = "没有更多了！"
                    }else {
                        response.data.forEach((item) => {
                            item.list.forEach((element) => {
                                if(dev) {
                                    if(element.image.indexOf("http") == -1) {
                                        element.image = config.domain+element.image
                                    }
                                }
                                _data = _data.concat(element)
                            });
                        });
                        this.dataList = _data
                    }
                }else {
                    this.errMsg = response.msg
                }
            })
        }
    },
    components: {
        innerHeader,
        stickyFooter,
        loading,
        noResult
    }
}
</script>

<style lang="less" scoped>
.container{
    padding: 50px 0.3rem 0;
    background: #f7f7f7;
    .category_btn{
        display: flex;
        justify-content: space-between;
        margin: 0.5rem 0;
        li{
            flex: 0 0 3.15rem;
            width: 3.15rem;
            height: 0.7rem;
            line-height: 0.7rem;
            font-size: 0.26rem;
            color: #808080;
            background: #fff;
            text-align: center;
            border-radius: 0.1rem;
            &.active{
                background: linear-gradient(to right, #fb4679, #fb4659);
                box-shadow: 0 7px 12px rgba(251, 70, 98, 0.3);
                color: #fff;
            }
        }
    }
    .activity_list{
        .item{
            display: block;
            background: #fff;
            border-radius: 0.1rem;
            box-shadow: 0 2px 16px rgba(0, 0, 0, .14);
            margin-bottom: 0.35rem;
            overflow: hidden;
            .thumbnail{
                display: block;
                width: 100%;
            }
            .intro{
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 0.2rem 0.3rem;
                .text{
                    flex: 1;
                    h2{
                        font-size: 0.3rem;
                        color: #ff2a49;
                        font-weight: bold;;
                    }
                    p{
                        font-size: 0.2rem;
                        color: #333333;
                    }
                }
                i{
                    flex: 0 0 0.13rem;
                    width: 0.13rem;
                    height: 0.23rem;
                    background: url(./images/arrow.png);
                    background-size: 100% 100%;
                }
            }
        }
    }
}
</style>
