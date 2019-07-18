<template>
    <div class="scroll_wrap" ref="scroll">
        <div class="scroll">
            <slot></slot>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll"

export default {
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        },
        dataList: {
            type: Array,
            default() {
                return []
            }
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        pullup: {
            type: Boolean,
            default: true
        },
        delay: {
            type: Number,
            default: 100
        }
    },
    data() {
        return {
            showLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this._initscroll()
        },100)
    },
    methods: {
        scrollToEnd() {
            this.scroll.on("scrollEnd", (pos) => {
                if(pos.y<=this.scroll.maxScrollY){
                    this._refresh()
                }
            })
        },
        _initscroll() {
            if (!this.$refs.scroll) {
                return
            }
            this.scroll = new BScroll(this.$refs.scroll, {
                probeType: 3,
                click: true
            })

            if(this.listenScroll){
                this.watchScroll()
            }

            if(this.pullup){
                this.scrollToEnd()
            }
        },
        _refresh() {
            if(this.scroll){
                setTimeout(() => {
                    this.scroll.refresh()
                },20)
            }
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        },
        watchScroll() {
            let _this = this
            this.scroll.on("scroll", (pos) => {
                _this.$emit("watchScroll", pos)
            })
        }
    },
    watch: {
        data() {
            setTimeout(() => {
                this._refresh()
            },this.delay)
        },
        dataList() {
            setTimeout(() => {
                this._refresh()
            },this.delay)
        }
    }
}
</script>
<style lang="less">
.scroll_wrap {
  width: 100%;
  height: 100%;
}
</style>
