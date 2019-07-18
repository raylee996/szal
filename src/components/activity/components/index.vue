<template>
    <div class="wrap">
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
</template>

<script>
import {getActivitys, getDiscounts} from "common/js/api"
import loading from "components/loading/loading";
import noResult from "components/no-result/index";
import config from "common/js/config";

const dev = process.env.NODE_ENV !== 'production'

export default {
    data() {
        return {
            errMsg: "",
            dataList: []
        }
    },
    mounted() {
        var type = this.$route.query.type
        if(type == "activity" || type == null) {
            this._getActivitys();
        }
        if(type == "discount") {
            this._getDiscounts();
        }
    },
    methods: {
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
    components:{
        loading,
        noResult
    }
}
</script>

<style lang="less">
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
</style>