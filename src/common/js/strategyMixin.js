import {getRecommendStrategy} from "common/js/api"

export default {
    data() {
        return {
            strategyList: []
        }
    },
    methods: {
        _getRecommendStrategy(areaname) {
            var _list = []
            getRecommendStrategy(areaname).then((response) => {
                if(response.code == 200) {
                    if(areaname == "") {
                        response.data.forEach((item) => {
                            _list = _list.concat(item.List)
                        })
                    }else {
                        _list = response.data.List
                    }
                    this.strategyList = _list
                }else {
                    alert(response.msg)
                }
            })
        }
    }
}
