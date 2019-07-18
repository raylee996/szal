<template>
    <transition :name="animationName">
        <div class="container_wrapper" v-if="showflag">
            <inner-header :text="text" :classname="classname"></inner-header>
            <div class="container">
                <scroll :data="detail" v-if="detail">
                    <article-detail :detail="detail"></article-detail>
                </scroll>
                <loading v-if="isEmptyObject(detail) && !errMsg"></loading>
                <no-result v-if="errMsg" :words="errMsg"></no-result>
            </div>
        </div>
    </transition>
</template>

<script>
import {getQueryString, isEmptyObject} from "common/js/utils";
import innerHeader from "components/inner-header/index";
import articleDetail from "components/article-detail/index";
import scroll from "components/scroll/scroll";
import Mixin from "common/js/mixin";
import {getNewsDetails} from "common/js/api";
import loading from "components/loading/loading";
import noResult from "components/no-result/index";

export default {
    mixins: [Mixin],
    data() {
        return {
            text: "新闻详情",
            classname: "common",
            showflag: false,
            errMsg: "",
            detail: {}
        }
    },
    mounted() {
        var id = this.$route.query.id;
        this.showflag = true;
        this._getNewsDetails(id);
    },
    destroyed() {
        this.errMsg = ""
        this.detail = {}
    },
    methods: {
        isEmptyObject,
        _getNewsDetails(id) {
            this.errMsg = ""
            getNewsDetails(id).then((response) => {
                if(response.code == 200) {
                    this.detail = response.data
                }else {
                    this.errMsg = response.msg
                }
            })
        }
    },
    components: {
        innerHeader,
        articleDetail,
        scroll,
        loading,
        noResult
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
        overflow: hidden;;
    }
}
</style>
