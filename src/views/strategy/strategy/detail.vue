<template>
    <transition :name="animationName">
        <div class="container_wrapper" v-if="showflag">
            <inner-header :text="text" :classname="classname"></inner-header>
            <div class="container">
                <scroll :data="detail">
                    <article-detail :detail="detail"></article-detail>
                </scroll>
                <loading v-if="isEmptyObject(detail) && !errMsg"></loading>
                <no-result v-if="errMsg" :words="errMsg"></no-result>
            </div>
            <!-- <sticky-footer v-show="from && from.length>0"></sticky-footer> -->
        </div>
    </transition>
</template>

<script>
import {getQueryString, isEmptyObject} from "common/js/utils";
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";
import articleDetail from "components/article-detail/index";
import scroll from "components/scroll/scroll";
import Mixin from "common/js/mixin";
import {getStrategyDetails} from "common/js/api";
import loading from "components/loading/loading";
import noResult from "components/no-result/index";

export default {
    mixins: [Mixin],
    data() {
        return {
            text: "攻略详情",
            classname: "common",
            showflag: false,
            errMsg: "",
            detail: {},
            from: this.$route.query.from
        }
    },
    mounted() {
        var id = this.$route.query.id;
        this.showflag = true;
        this._getStrategyDetails(id);
    },
    destroyed() {
        this.errMsg = ""
        this.detail = {}
    },
    methods: {
        isEmptyObject,
        _getStrategyDetails(id) {
            this.errMsg = ""
            getStrategyDetails(id).then((response) => {
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
        stickyFooter,
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
