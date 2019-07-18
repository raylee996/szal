<template>
    <div class="container">
        <div class="search_header">
            <a href="javascript:;" @click="back" class="back"><i><</i></a>
			<div class="search_input">
                <form action='' onsubmit="return false;">
                    <input type="search" v-model="queryString" @search="search">
                    <i @click="search"></i>
                </form>
			</div>
            <a href="javascript:;" class="search_btn" @click="search">搜索</a>
        </div>
        <div class="search_result" v-show="result">
            <div class="search_category" v-show="result.news">
                <div class="search_title"><i></i>新闻</div>
                <div class="search_list">
                    <div class="item" v-for="item in result.news" @click="routerGo('newsDetail', item.id)">
                        <div class="text" v-html="item.title"></div>
                    </div>
                </div>
            </div>
            <div class="search_category" v-show="result.activity">
                <div class="search_title"><i></i>活动</div>
                <div class="search_list">
                    <a v-if="item.WapUrl" class="item" v-for="item in result.activity" :href="item.WapUrl">
                        <div class="text" v-html="item.title"></div>
                    </a>
                    <div v-if="!item.WapUrl" class="item" v-for="item in result.activity" @click="routerGo('activityDetail', item.id, 'activity')">
                        <div class="text" v-html="item.title"></div>
                    </div>
                </div>
            </div>
            <div class="search_category" v-show="result.discount">
                <div class="search_title"><i></i>优惠</div>
                <div class="search_list">
                    <div class="item" v-for="item in result.discount" @click="routerGo('activityDetail', item.id, 'discount')">
                        <div class="text" v-html="item.title"></div>
                    </div>
                </div>
            </div>
            <div class="search_category" v-show="result.strategy">
                <div class="search_title"><i></i>景区攻略</div>
                <div class="search_list">
                    <div class="item" v-for="item in result.strategy" @click="routerGo('strategyDetail', item.id)">
                        <div class="text" v-html="item.title"></div>
                    </div>
                </div>
            </div>
            <div class="search_category" v-show="result.facility">
                <div class="search_title"><i></i>景区设施</div>
                <div class="search_list">
                    <div class="item" v-for="item in result.facility" @click="routerGo('facilityDetail', item.id, item.area_name)">
                        <div class="text" v-html="item.title"></div>
                    </div>
                </div>
            </div>
        </div>
        <loading v-if="!result && !errMsg"></loading>
        <no-result v-if="errMsg" :words="errMsg"></no-result>
        <router-view></router-view>
        <sticky-footer ref="stickyFooter"></sticky-footer>
    </div>
</template>

<script>
import {back, getQueryString} from "common/js/utils";
import stickyFooter from "components/footer/index";
import {getSearch} from "common/js/api";
import loading from "components/loading/loading";
import noResult from "components/no-result/index";

export default {
    data() {
        return {
            queryString: this.$route.query.keywords,
            errMsg: "",
            result: {}
        }
    },
    methods: {
        back,
        routerGo(path, id, type, areaName) {
            var params = type ? `&type=${type}` : ""
            var area = path.indexOf("facility") > -1 ? `area=${areaName}&` : ""
            this.$router.push({
                path: `/search/${path}?${area}id=${id}${params}`
            })
        },
        search() {
            if(this.queryString == "") {
                alert("请输入您要搜索的内容")
                return
            }
            this.$router.replace({
                path: `/search/result?keywords=${this.queryString}`
            });
            this._getSearch()
        },
        _getSearch() {
            this.result = {}
            this.errMsg = ""
            var _data = {}
            getSearch(this.queryString).then((response) => {
                if(response.code == 200) {
                    if(!response.data || response.data.length == 0) {
                        this.errMsg = "没有更多了！"
                    }else {
                        response.data.forEach((item) => {
                            switch (item.type_id) {
                                case "1":
                                    _data.news = item.newsList
                                    break;
                                case "2":
                                    _data.strategy = item.newsList
                                    break;
                                case "3":
                                    _data.activity = item.newsList
                                    break;
                                case "4":
                                    _data.discount = item.newsList
                                    break;
                                case "5":
                                    _data.facility = item.newsList
                                    break;
                            }
                        })
                        this.result = _data
                    }
                }else {
                    alert(response.msg)
                }
            })
        }
    },
    mounted() {
        this._getSearch()
        // var keywords = getQueryString("keywords");
        // console.log(keywords)
    },
    components: {
        stickyFooter,
        loading,
        noResult
    }
}
</script>

<style lang="less" scoped>
@import "~common/less/mixin.less";

.container {
  .search_header {
    display: flex;
    padding: 0.3rem;
    background: #fff;
    justify-content: center;
    align-items: center;
    .back {
      display: inline-block;
      height: 100%;
      font-size: 0.5rem;
      color: #666362;
      i {
        display: inline-block;
        transform: scale(0.8, 1.5);
        transform-origin: center center;
      }
    }
    .search_input {
      flex: 1;
      height: 0.6rem;
      background: #f3f3f3;
      position: relative;
      border-radius: 0.3rem;
      margin: 0 0.4rem;
      input {
        position: absolute;
        left: 0;
        top: 0.075rem;
        border: none;
        outline: none;
        width: 3.4rem;
        height: 0.4rem;
        text-indent: 0.25rem;
        padding: 0;
        background: none;
      }
      i {
        width: 0.33rem;
        height: 0.33rem;
        background: url(~common/images/search.png);
        background-size: 100% 100%;
        position: absolute;
        right: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .search_btn {
      display: inline-block;
      font-size: 0.32rem;
      color: #ff6000;
    }
  }
  .search_result .search_category {
    margin-top: 0.15rem;
    background: #fff;
    &:last-child{
        margin-bottom: 0.15rem;
    }
  }
  .search_result .search_category .search_title {
    padding: 0.35rem 0.38rem;
    background: #fff;
    line-height: 0.3rem;
    font-size: 0.3rem;
    color: #10b786;
    text-indent: 0.25rem;
    position: relative;
    .border-bottom-1px(#cececc, 0, absolute, auto, 0, 0, 0);
  }
  .search_result .search_category .search_title i {
    position: absolute;
    left: 0.35rem;
    top: 0.35rem;
    width: 0.1rem;
    height: 0.3rem;
    background: #10b786;
    border-radius: 0.1rem;
  }
  .search_result .search_category .search_list .item {
    display: block;
    padding: 0.35rem 0.38rem;
    line-height: 0.42rem;
    font-size: 0.3rem;
    position: relative;
    .border-bottom-1px(#cececc, 0, absolute, auto, 0, 0, 0);
  }
  .search_result .search_category .search_list.ticket .item .text {
    float: left;
    width: 5rem;
  }
}
</style>
