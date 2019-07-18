<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"
import {sortNumber, getWxConfig} from "common/js/utils"

export default {
    name: 'App',
    data() {
        return {
            routes: [
                "/", "park", "hotel", "activity", "strategy", "service"
            ]
        }
    },
    computed: {
        ...mapGetters([
            "init"
        ])
    },
    methods: {
        ...mapMutations({
            setCurrentNav: "SET_CURRENTNAV",
            setVisibleSubNav: "SET_VISIBLESUBNAV",
            setInit: "SET_INIT"
        })
    },
    mounted() {
        // getWxConfig(['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage'], "苏州乐园官方网站", "苏州乐园官方网站", location.href);
    },
    created() {
        this.setInit(true)
    },
    updated() {
        if(this.init) {
            this.setInit(false);
        }
        var interval = setInterval(() => {
            if($(".container").length > 0) {
                $(".container").css("min-height", window.innerHeight-$(".footer_link").height());
                clearInterval(interval);
            }
        }, 50)
    },
    watch:{
        $route(to,from){
            console.log(window.location.href.split('#')[0])
            getWxConfig(['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage'], "苏州乐园官方网站", "苏州乐园官方网站", window.location.href.split('#')[0]);
            this.routes.forEach((item, index) => {
                if(item == to.path || to.path.indexOf(item) > 0) {
                    this.setCurrentNav(index);
                }
            });
            this.setVisibleSubNav(-1);
        }
    }
}
</script>

<style>
#app {
}
</style>
