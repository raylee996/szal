import * as type from "./mutation-types"

export default {
    [type.SET_CURRENTNAV](state, index) {
        state.currentNav = index
    },
    [type.SET_VISIBLESUBNAV](state, index) {
        state.visibleSubNav = index
    },
    [type.SET_INIT](state, flag) {
        state.init = flag
    }
}
