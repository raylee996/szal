import {getRecommendFacility} from "common/js/api";

export default {
    data() {
        return {
            facilityList: []
        }
    },
    mounted() {
        this._getRecommendFacility(this.text)
    },
    methods: {
        _getRecommendFacility(areaname) {
            getRecommendFacility(areaname).then((response) => {
                if(response.code == 200) {
                    this.facilityList = response.data.List
                }else {
                    alert(response.msg)
                }
            })
        }
    }
}
