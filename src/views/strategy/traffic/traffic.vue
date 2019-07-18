<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <zone-nav @switchZone="switchZone"></zone-nav>
            <div class="traffic_route_hook">
                <div class="traffic_route" v-show="showIndex == 0">
                    <div id="bdMap1"></div>
                    <p style="font-size: 0.36rem; text-align: center; padding: 0.5rem; color: #333;">建设中...</p>
                </div>
                <div class="traffic_route" v-show="showIndex == 1">
                    <div id="bdMap2"></div>
                    <div class="traffic_item">
                        <div class="traffic_title">
                            一、外地到苏州乐园森林小镇
                        </div>
                        <div class="traffic_text">
                            <h2>1、上海、南京方向</h2>
                            <p>沪宁高速—苏州绕城天池山出口—太湖大道—阳山东路—山神湾路。</p>
                            <h2>2、杭州方向</h2>
                            <p>练杭高速—申嘉湖高速—沪宁高速——苏州绕城天池山出口（苏州方向）—太湖大道—阳山东路—山神湾路。</p>
                        </div>
                    </div>
                    <div class="traffic_item">
                        <div class="traffic_title">
                            二、苏州市内交通指南
                        </div>
                        <div class="traffic_text">
                            <h2>苏州市内</h2>
                            <p>1、高架向北—往太湖大道高架—太湖大道—阳山东路—山神湾路。</p>
                            <p>2、高架向北—往太湖大道高架—建林路朝红路出口下—建林路—象山路—阳山东路—山神湾路。</p>
                            <h2>公交路线</h2>
                            <p>322路到森林小镇西下车；356路、357路到森林小镇南下车。</p>
                            <h2>有轨电车1号线</h2>
                            <p>从苏州乐园站上车，阳山南路下车。</p>
                        </div>
                    </div>
                </div>
                <div class="traffic_route" v-show="showIndex == 2">
                    <div id="bdMap3"></div>
                    <div class="traffic_item">
                        <div class="traffic_title">
                            一、外地到苏州乐园森林水世界
                        </div>
                        <div class="traffic_text">
                            <h2>1、上海、南京方向</h2>
                            <p>沪宁高速—苏州绕城天池山出口—太湖大道—阳山东路—山神湾路。</p>
                            <h2>2、杭州方向</h2>
                            <p>练杭高速—申嘉湖高速—沪宁高速——苏州绕城天池山出口（苏州方向）—太湖大道—阳山东路—山神湾路。</p>
                        </div>
                    </div>
                    <div class="traffic_item">
                        <div class="traffic_title">
                            二、苏州市内交通指南
                        </div>
                        <div class="traffic_text">
                            <h2>苏州市内</h2>
                            <p>高架向北—往太湖大道高架—太湖大道—阳山东路—山神湾路。</p>
                            <h2>公交路线</h2>
                            <p>322路到森林小镇西下车；356路、357路到森林小镇南下车。</p>
                            <h2>有轨电车1号线</h2>
                            <p>从苏州乐园站上车，阳山南路下车。</p>
                        </div>
                    </div>
                </div>
                <div class="traffic_route" v-show="showIndex == 3">
                    <div id="bdMap4"></div>
                    <div class="traffic_item">
                        <div class="traffic_title">
                            一、自驾车游客线路
                        </div>
                        <div class="traffic_text">
                            <h2>线路一（苏州本地游客）</h2>
                            <p>1、市区游客可先上城市高架快速路，往高新区方向，沿北环西延快速路直行至太湖大道，往西行驶约10KM，到达地面道路的第二个红绿灯右转，沿浒通路 / 兴贤路 / 007乡道向北直行4KM，沿路可按路牌指示行驶至四季恒温水乐园。</p>
                            <p>2、新区游客沿建林路向北行驶，在观山路路口向西行驶进入树山生态村，途径云泉山庄后再行驶2KM至四季恒温水乐园。</p>
                            <p>3、从苏州乐园欢乐世界正门出发，沿长江路向北行驶，在鹿山路路口左转至北环西延快速路（往太湖大道方向），向西直行约10KM，至地面道路的第二个红绿灯右转，沿阳山环路向北行驶4KM即到。（沿路可按路牌指示行驶至四季恒温水乐园）</p>
                            <h2>线路二（外地游客）</h2>
                            <h2>（1）上海方向：</h2>
                            <p>1、请由沪宁高速新区出口下，经西环快速路转至北环快速路（往高新区方向），沿高架快速路直行至太湖大道，向西直行约10KM，至地面道路的第二个红绿灯右转，沿阳山环路行驶4KM即到。（沿路可按路牌指示行驶至四季恒温水乐园）</p>
                            <p>2、请由沪宁高速转至苏州绕城高速（S9、东山方向），在东渚/天池山出口下，转至太湖大道（往天池山方向），在出口后第一个红绿灯左转进入阳山环路，行驶4KM至四季恒温水乐园。</p>
                            <h2>（2）南京方向：</h2>
                            <p>请由沪宁高速转至苏州绕城高速（S9、东山方向），在东渚/天池山出口下，转至太湖大道（往天池山方向），在出口后第一个红绿灯左转进入阳山环路，行驶4KM至四季恒温水乐园。</p>
                            <h2>（3）杭州方向：</h2>
                            <p>1、请由苏嘉杭高速转至苏州绕城高速（S58、无锡方向），在东渚/天池山出口下，转至太湖大道（往天池山方向），在出口后第一个红绿灯左转进入阳山环路，行驶4KM至四季恒温水乐园。</p>
                            <p>2、请由苏嘉杭高速苏州城区出口下，随后右转至南环路，行驶约0.5KM后右转至东环快速路，行驶6KM后转至北环快速路（苏州高新区方向），沿北环快速路直行至太湖大道，到达地面道路的第二个红绿灯后右转，沿阳山环路向北直行4KM即到。（沿路可按路牌指示行驶至四季恒温水乐园）</p>
                            <h2>温馨提示：</h2>
                            <p>★  GPS导航可暂寻通安镇树山村村委会，村委会向南行驶150米往东即到四季恒温水乐园（可查看现场交通指示牌）</p>
                            <p>★  自2014年8月4日至10月30日高新区将对环阳山路（太湖大道至阳山南路）采取临时交通管理措施，上述路段将进行封闭施工，请游客车辆从阳山南路绕行，注意交通安全。</p>
                        </div>
                    </div>
                    <div class="traffic_item">
                        <div class="traffic_title">
                            二、市内交通指南：
                        </div>
                        <div class="traffic_text">
                            <p>316路、321路长线可直达"树山村"站台，下车后向南约600m后左转即到。</p>
                            <p>下车后详细路况如有疑问可咨询客服（0512-69581925）。</p>
                            <p>338路、319路至"树山首末站"下。</p>
                            <p>苏州火车站北广场：乘坐529路、10路、6路、81路在“虎丘立交桥东”下车，换乘316路；直达“树山村”站台，下车后向南约600m后左转即到；</p>
                            <p>汽车北站方向：乘坐316路直达“树山村”站台，下车后向南约600m后左转即到；</p>
                            <p>汽车南站方向：乘坐931路、39路、60路、308路在“附二医院（体育中心）”下，转乘321路；直达“树山村”站台，下车后向南约600m后左转即到；</p>
                            <p>京沪高铁苏州北方向：乘坐811路在“齐门北”下，转乘316路。直达“树山村”站台，下车后向南约600m后左转即到。</p>
                        </div>
                    </div>
                </div>
            </div>
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
            text: "交通指南",
            classname: "common",
            showIndex: 0
        }
    },
    computed: {
        ...mapGetters([
            "zone"
        ])
    },
    mounted() {
        this.createMap();
    },
    methods: {
        createMap() {
            var map1 = new BMap.Map("bdMap1");//创建地图
            var point1 = new BMap.Point(120.486171,31.3306);//位置
            map1.centerAndZoom(point1,19); //层级

            var map2 = new BMap.Map("bdMap2");//创建地图
            var point2 = new BMap.Point(120.478,31.3364);//位置
            map2.centerAndZoom(point2,19); //层级

            var map3 = new BMap.Map("bdMap3");//创建地图
            var point3 = new BMap.Point(120.478,31.3368);//位置
            map3.centerAndZoom(point3,19); //层级

            var map4 = new BMap.Map("bdMap4");//创建地图
            var point4 = new BMap.Point(120.461,31.36575);//位置
            map4.centerAndZoom(point4,19); //层级
        },
        switchZone(name) {
            this.zone.forEach((item, index) => {
                if(name == item) {
                    this.showIndex = index
                }
            });
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
.container {
  padding-top: 50px;
  background: #f7f7f7;
  #bdMap1,
  #bdMap2,
  #bdMap3,
  #bdMap4 {
    width: 100%;
    height: 5.65rem;
  }
  .traffic_route {
    .traffic_item {
      border-radius: 0.2rem;
      margin-top: 0.16rem;
      padding: 0 0.3rem;
      background: #fff;
      .traffic_title {
        display: flex;
        align-items: center;
        height: 0.8rem;
        font-size: 0.36rem;
        font-weight: bold;
        color: #2793df;
        border-bottom: 2px solid #2793df;
        i {
          display: inline-block;
          width: 0.34rem;
          height: 0.37rem;
          margin-right: 0.1rem;
          background: url(images/car.png);
          background-size: 100% 100%;
        }
      }
      .traffic_text {
        padding: 0.15rem 0 0.5rem;
        p {
          font-size: 0.24rem;
          line-height: 0.36rem;
          color: #5c5c5c;
          margin-bottom: 0.25rem;
        }
        h2 {
          font-size: 0.24rem;
          line-height: 0.36rem;
          color: #5c5c5c;
          margin-bottom: 0.15rem;
        }
        img {
          display: block;
          width: 100%;
          margin-top: 0.6rem;
        }
      }
    }
  }
}
</style>
