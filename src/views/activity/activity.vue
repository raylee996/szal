<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <ul class="category_btn">
                <li :class="{'active': activeIndex==0}" @click="switchType(0)">主题活动</li>
                <li :class="{'active': activeIndex==1}" @click="switchType(1)">优惠信息</li>
            </ul>
            <keep-alive>      
                <component :is="currentTabComponent"></component>
            </keep-alive> 
        </div>
        <router-view></router-view>
        <sticky-footer ref="stickyFooter"></sticky-footer>
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";
import {formatDate, getQueryString} from "common/js/utils";
import config from "common/js/config";
import activity from "components/activity/activity"
import disount from "components/activity/discount"

export default {
    data() {
        return {
            text: "活动优惠",
            classname: "common",
            type: "activity",
            activeIndex: -1,
            currentTabComponent: activity
        }
    },
    mounted() {
        var type = this.$route.query.type
        if(type == "activity" || type == null) {
            this.activeIndex = 0;
            this.type = "activity";
        }
        if(type == "discount") {
            this.activeIndex = 1;
            this.type = "discount";
        }
    },
    watch:{
        $route(to,from){
            var type = to.query.type
            if(type == "activity") {
                this.activeIndex = 0;
                this.type = "activity";
                if(from.path == "/activity" && to.path == "/activity") {
                    this.currentTabComponent = activity;
                }
            }
            if(type == "discount") {
                this.activeIndex = 1;
                this.type = "discount";
                if(from.path == "/activity" && to.path == "/activity") {
                    this.currentTabComponent = disount;
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
    },
    components: {
        innerHeader,
        stickyFooter,
        activity,
        disount
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
}
</style>
