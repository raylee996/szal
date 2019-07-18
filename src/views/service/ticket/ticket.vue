<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <zone-nav @switchZone="switchZone"></zone-nav>
            <ul class="ticket_list">
                <li class="item" v-show="showIndex == 0">
                    <div class="ticket01">
                        <img src="./images/waitme.jpg" width="100%" alt="">
                    </div>
                </li>
                <li class="item" v-show="showIndex == 1">
                    <div class="ticket01">
                        <table>
                            <tr>
                                <th colspan="3">森林小镇票价</th>
                            </tr>
                            <tr>
                                <td>成人门票</td>
                                <td>1.5M以上</td>
                                <td><span>80</span>元/张</td>
                            </tr>
                            <tr>
                                <td>儿童门票</td>
                                <td>1.2m-1.5m之间，1.2m以下儿童免费</td>
                                <td><span>40</span>元/张</td>
                            </tr>
                        </table>
                        <p>儿童游园须有成人监护，1.2米以下的儿童游玩相关游乐项目须有成人陪同。</p>
                    </div>
                </li>
                <li class="item" v-show="showIndex == 2">
                    <div class="ticket01">
                        <table>
                            <tr>
                                <th colspan="3">森林水世界票价</th>
                            </tr>
                            <tr>
                                <td>成人门票</td>
                                <td>1.5M以上</td>
                                <td><span>198</span>元/张</td>
                            </tr>
                            <tr>
                                <td>儿童门票</td>
                                <td>1.2m-1.5m之间，1.2m以下儿童免费</td>
                                <td><span>128</span>元/张</td>
                            </tr>
                        </table>
                        <p>儿童游园须有成人监护，1.2米以下的儿童游玩相关游乐项目须有成人陪同。</p>
                    </div>
                    <div class="ticket02">
                        <div class="thumbnail clearfix">
                            <div class="text">
                                <h2>森林水世界个人3次卡</h2>
                                <h3><span>328元</span>/张</h3>
                            </div>
                            <img src="./images/pri_water_card11.jpg" alt="">
                        </div>
                        <div class="intro">
                            <p>1、2019年内持本卡可在森林水世界开放时间段内使用3次(森林水世界具体开放时间以官方公布为准)，本卡有效期为2019年森林水世界经营波段内。</p>
                            <p>2、购买森水个人3次卡送森林小镇门票一张，森林小镇赠票的使用日期截止至2019年4月30日。</p>
                            <p>3、本卡仅限1人使用，第一次入园须带好身份证到森林水世界客服中心办理摄像后方可入园，照片成像打印后，不得更改或转让他人使用。 </p>
                            <p>4、本卡遗失凭身份证可补办（收费以乐园公告为准）。 </p>
                            <p>5、未成年人不能单独入园，须成人陪同。</p>
                            <p>6、检票时若入园者与持卡人不一致，景区有权没收该卡，并终止其使用权。</p>
                        </div>
                    </div>
                    <div class="ticket02">
                        <div class="thumbnail clearfix">
                            <div class="text">
                                <h2>森林水世界家庭3次卡</h2>
                                <h3><span>868元</span>/张</h3>
                            </div>
                            <img src="./images/pri_water_card12.jpg" alt="">
                        </div>
                        <div class="intro">
                            <p>1、2019年内持本卡可在森林水世界开放时间段内使用3次(森林水世界具体开放时间以官方公布为准)，本卡有效期为2019年森林水世界经营波段内。</p>
                            <p>2、购买森水家庭3次卡送森林小镇门票三张，森林小镇赠票的使用日期截止至2019年4月30日。</p>
                            <p>3、本卡限2名成人和1名1.5米以下的儿童使用，第一次入园须带好身份证到森林水世界客服中心办理摄像后方可入园，照片成像打印后，不得更改或转让他人使用。 </p>
                            <p>4、本卡遗失凭身份证可补办（收费以乐园公告为准）。 </p>
                            <p>5、未成年人不能单独入园，须成人陪同。</p>
                            <p>6、检票时若入园者与持卡人不一致，景区有权没收该卡，并终止其使用权。</p>
                        </div>
                    </div>
                </li>
                <li class="item" v-show="showIndex == 3">
                    <div class="ticket01">
                        <table>
                            <tr>
                                <th colspan="3">四季恒温水乐园票价</th>
                            </tr>
                            <tr>
                                <td>成人票</td>
                                <td>1.5米以上成人</td>
                                <td><span>198</span>元/张</td>
                            </tr>
                            <tr>
                                <td>儿童票</td>
                                <td>1.2米--1.5米儿童购儿童票</td>
                                <td><span>128</span>元/张</td>
                            </tr>
                        </table>
                        <p>注：儿童如需要箱柜则按成人全票购票。1米以下儿童免票，不占箱位。</p>
                    </div>
                    <div class="ticket02">
                        <div class="thumbnail clearfix">
                            <div class="text">
                                <h2>四季恒温水乐园个人计次卡</h2>
                                <h3><span>488元</span>/张</h3>
                            </div>
                            <img src="./images/ticket01.png" alt="">
                        </div>
                        <div class="intro">
                            <p>1、2019年内持本卡可在四季恒温水乐园使用10次，本卡有效期为2018年12月1日-2019年12月31日。</p>
                            <p>2、本卡仅限1人使用，第一次入园须带好身份证到四季恒温水乐园客服中心办理摄像后方可入园，照片成像打印后，不得更改或转让他人使用。</p>
                            <p>3、本卡遗失凭身份证可补办（收费以乐园公告为准）。 </p>
                            <p>4、未成年人不能单独入园，须成人陪同。 </p>
                            <p>5、检票时若入园者与持卡人不一致，景区有权没收该卡，并终止其使用权。</p>
                            <p>6、本卡有效期截至2019年12月31日。</p>
                        </div>
                    </div>
                    <div class="ticket02">
                        <div class="thumbnail clearfix">
                            <div class="text">
                                <h2>四季恒温水乐园家庭计次卡</h2>
                                <h3><span>888元</span>/张</h3>
                            </div>
                            <img src="./images/pri_spa_card4.jpg" alt="">
                        </div>
                        <div class="intro">
                            <p>1、2019年内持本卡可在四季恒温水乐园使用10次，本卡有效期为2018年12月1日-2019年12月31日。</p>
                            <p>2、本卡限2名成人和1名1.5米以下的儿童使用，第一次入园须带好身份证到四季恒温水乐园客服中心办理摄像后方可入园，照片成像打印后，不得更改或转让他人使用。</p>
                            <p>3、本卡遗失凭身份证可补办（收费以乐园公告为准）。</p>
                            <p>4、未成年人不能单独入园，须成人陪同。</p>
                            <p>5、检票时若入园者与持卡人不一致，景区有权没收该卡，并终止其使用权。</p>
                            <p>6、本卡有效期截至2019年12月31日。</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <sticky-footer></sticky-footer>
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import zoneNav from "components/zone-nav/index";
import stickyFooter from "components/footer/index";
import {mapGetters} from "vuex"

export default {
    data() {
        return {
            text: "景区票价",
            classname: "common",
            showIndex: 0
        }
    },
    computed: {
        ...mapGetters([
            "zone"
        ])
    },
    methods: {
        switchZone(name) {
            this.zone.forEach((item, index) => {
                if(name == item) {
                    this.showIndex = index
                }
            });
            console.log(name)
        }
    },
    components: {
        innerHeader,
        zoneNav,
        stickyFooter
    }
}
</script>

<style lang="less" scoped>
@import "~common/less/mixin.less";

.container{
    padding-top: 50px;
    background: #fff;
    .ticket_list{
        padding: 0.7rem 0.3rem;
        .item{
            .ticket01{
                margin-bottom: 1.1rem;
                table{
                    width: 100%;
                    border-collapse: collapse;
                    border-spacing: 0;
                    margin-bottom: 0.1rem;
                    text-align: center;
                    th{
                        font-size: 0.3rem;
                        background: #14aa90;
                        color: #fff;
                        padding: 0.2rem 0;
                    }
                    td{
                        font-size: 0.24rem;
                        color: #808080;
                        padding: 0.2rem 0;
                        border: 1px solid #808080;
                        span{
                            color: #ff4f32;
                            font-size: 0.36rem;
                        }
                    }
                }
                p{
                    font-size: 0.2rem;
                    color: #9a9a9a;
                }
            }
            .ticket02{
                margin-bottom: 0.5rem;
                .thumbnail{
                    .text{
                        float: left;
                        width: 2.5rem;
                        h2{
                            font-size: 0.36rem;
                            color: #656565;
                            margin-bottom: 0.6rem;
                        }
                        h3{
                            font-size: 0.3rem;
                            color: #656565;
                            span{
                                color: #ff392a;
                            }
                        }
                    }
                    img{
                        width: 3.39rem;
                        float: right;
                    }
                }
                .intro{
                    font-size: 0.24rem;
                    color: #7f7f7f;
                    line-height: 0.48rem;
                }
            }
        }
    }
}
</style>
