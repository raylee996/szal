import {mapGetters} from "vuex"

export default {
    data() {
        return {
            animationName: ""
        }
    },
    computed: {
        ...mapGetters([
            "init"
        ])
    },
    created() {
        if(this.$route.query.from == "recommend") {
            this.animationName = ""
            return
        }
        if(!this.init) {
            this.animationName = "slide"
        }
    }
}
