<template>
    <ul class="zone_btn">
        <li v-for="(item, index) in zone" :class="{active: activeArea == item}" @click="switchZone(item, index)">
            {{item}}
        </li>
    </ul>
</template>

<script>
import {mapGetters} from "vuex"

export default {
    props: {
        currentArea: {
            type: String,
            detault: "森林世界"
        }
    },
    data() {
        return {
            activeArea: "森林世界",
            zoneArr: []
        }
    },
    computed: {
        ...mapGetters([
            "zone"
        ])
    },
    mounted() {
        this.activeArea = this.currentArea || "森林世界"
        this.$nextTick(() => {
            setTimeout(() => {
                $(".zone_btn").mCustomScrollbar({
                    axis: "x"
                });
            }, 20);
        })
    },
    methods: {
        switchZone(item, index) {
            this.activeArea = item
            this.$emit("switchZone", item)
        }
    }
}
</script>

<style lang="less" scoped>
@import "~common/less/mixin.less";

.zone_btn{
    white-space: nowrap;
    padding: 0.4rem 0 0.3rem;
    // overflow-x: auto;
    .border-bottom-1px(#e6e6e6, 0, absolute, auto, 0, 0, 0);
    font-size: 0;
    li{
        display: inline-block;
        margin: 0 0.2rem;
        padding: 8px 14px;
        font-size: 14px;
        color: #4d4d4d;
        border-radius: 26px;
        &.active{
            background: linear-gradient(to right, #ff7033, #fb5b46);
            color: #fff;
        }
    }
}
</style>
