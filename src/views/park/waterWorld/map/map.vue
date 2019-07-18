<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <div class="page_map">
                <div class="mapBox">
                    <div class="map_wrap">
                        <img id="mapImg" :src="imgurl" >
                    </div>
                    <div class="save">长按图片保存</div>
                </div>
            </div>
        </div>
        <!-- <sticky-footer></sticky-footer> -->
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";

export default {
    data() {
        return {
            text: "景区地图",
            classname: "common",
            imgurl: require("./images/map.jpg")
        }
    },
    mounted() {
        var _ts = this
        var img = new Image()
        img.src = this.imgurl
        img.onload = function(){
            setTimeout(function(){
                $(".page_map").css("height", $(window).height()-$(".innerHead").height()/* -$(".footer_link").height() */)
                _ts.fnMap();
            },20)
        }
    },
    methods: {
        fnMap() {
            var oMapP = $(".map_wrap");
            var oMap = $(".map_wrap img")[0];
            var wrapper = document.querySelector('.map_wrap');
            var element = document.querySelector('#mapImg');
            var vendors;
            var distance = {};
            var origin;
            var scale = 1;
            var isCanScale = false;

            var ow = oMap.offsetWidth
            var oh = oMap.offsetHeight

            oMapP.css("width", $(".mapBox").width())
            oMapP.css("height", $(".mapBox").height()/* -$(".footer").outerHeight() */)

            var pWidth = parseInt(oMapP.css("width"));
            var pHeight = parseInt(oMapP.css("height"));

            var mapW0 = oMap.naturalWidth;
            var mapH0 = oMap.naturalHeight;
            if(!mapW0 || !mapH0){
                var image = new Image()
                image.src = oMap.src
                mapW0 = image.width
                mapH0 = image.height
            }
            var halfW = oMapP[0].offsetWidth/2 ;
            var halfH = oMapP[0].offsetHeight/2 ;
            var m = 3;


            //拖动效果
            oMap.ontouchstart = function(ev){
                var oEvent = ev||event ;
                var oldL = oMap.offsetLeft+1 ;
                var oldT = oMap.offsetTop+1 ;
                var mapW = oMap.offsetWidth ;
                var mapH = oMap.offsetHeight ;
                var disX = oldL - getPos(oEvent).x ;
                var disY = oldT - getPos(oEvent).y ;


                if (oEvent.touches.length > 1) {
                    distance.start = getDistance({
                        x: oEvent.touches[0].screenX,
                        y: oEvent.touches[0].screenY
                    }, {
                        x: oEvent.touches[1].screenX,
                        y: oEvent.touches[1].screenY
                    });
                }

                if( oMap.setCapture){
                    oMap.ontouchmove = mouseMove ;
                    oMap.ontouchend = mouseUp ;
                    oMap.setCapture() ;
                }else{
                    document.ontouchmove = mouseMove;
                    document.ontouchend = mouseUp ;
                }
                function mouseMove(ev){
                    var oEvent = ev||event ;
                    var nowL = getPos(oEvent).x+disX;
                    var nowT = getPos(oEvent).y+disY;


                    if (oEvent.touches.length === 2) {
                        origin = getOrigin({
                            x: oEvent.touches[0].pageX,
                            y: oEvent.touches[0].pageY
                        }, {
                            x: oEvent.touches[1].pageX,
                            y: oEvent.touches[1].pageY
                        });
                        distance.stop = getDistance({
                            x: oEvent.touches[0].screenX,
                            y: oEvent.touches[0].screenY
                        }, {
                            x: oEvent.touches[1].screenX,
                            y: oEvent.touches[1].screenY
                        });
                        scale = distance.stop / distance.start;

                        isCanScale = true;
                        setScaleAnimation(scale, true);
                        return
                    }

                    if( nowL <= pWidth- mapW ){
                        nowL = pWidth- mapW ;
                    }else if( nowL >=0 ){
                        nowL =0 ;
                    }
                    if( nowT <= pHeight - mapH ){
                        nowT = pHeight - mapH ;
                    }else if( nowT >= 0){
                        nowT =0 ;
                    }
                    oMap.style.left= nowL+"px";
                    oMap.style.top = nowT+"px";
                }
                function mouseUp(){
                    this.ontouchmove = null;
                    this.ontouchend = function() {
                        scale = 1;
                        setScaleAnimation(scale);
                    };
                    if( oMap.setCapture ){
                        oMap.releaseCapture() ;
                    }
                }



                return false;
            }



            function vendor() {
                var TRANSITION = 'transition';
                var TRANSITION_END = 'transitionend';
                var TRANSFORM = 'transform';
                var TRANSFORM_PROPERTY = 'transform';
                var TRANSITION_PROPERTY = 'transition';

                if (typeof document.body.style.webkitTransform !== undefined) {
                    TRANSFORM = 'webkitTransform';
                    TRANSITION = 'webkitTransition';
                    TRANSITION_END = 'webkitTransitionEnd';
                    TRANSFORM_PROPERTY = '-webkit-transform';
                    TRANSITION_PROPERTY = '-webkit-transition';
                }
                return {
                    TRANSFORM: TRANSFORM,
                    TRANSITION: TRANSITION,
                    TRANSITION_END: TRANSITION_END,
                    TRANSFORM_PROPERTY: TRANSFORM_PROPERTY,
                    TRANSITION_PROPERTY: TRANSITION_PROPERTY
                };
            }
            function getOrigin(first, second) {
                return {
                    x: (first.x + second.x) / 2,
                    y: (first.y + second.y) / 2
                };
            }
            function getDistance(start, stop) {
                return Math.sqrt(Math.pow((stop.x - start.x), 2) + Math.pow((stop.y - start.y), 2));
            }
            function setScaleAnimation(scale, animation) {
                var transition_animation = '';
                var x, y;
                if (!isCanScale) {
                    return;
                }
                isCanScale = false;
                transition_animation = vendors.TRANSFORM_PROPERTY + ' 0.3s ease-out';
                oMap.style[vendors.TRANSITION] = transition_animation;
                x = origin.x + (-origin.x) * scale;
                y = origin.y + (-origin.y) * scale;


                if(x>30){
                    var m = Math.ceil(oMap.offsetWidth/mapW0*10);
                    if( m > 1){
                        m-- ;
                        var n = m/10 ;
                        var n2 = n+0.1 ;
                        var mw = mapW0*n < ow ? ow : mapW0*n
                        var mh = mapH0*n < oh ? oh : mapH0*n
                        var scaleX = mw/oMap.getBoundingClientRect().width
                        var scaleY = mh/oMap.getBoundingClientRect().height

                        oMap.style[vendors.TRANSFORM] = 'scale(' + scaleX + ',' + scaleY + ')'
                        document.ontouchmove = null;

                        setTimeout(function() {
                            var ol = oMap.getBoundingClientRect().left;
                            var ot = oMap.getBoundingClientRect().top - $(".map_wrap")[0].getBoundingClientRect().top;

                            oMap.style[vendors.TRANSITION] = ''
                            oMap.style[vendors.TRANSFORM] = ''

                            oMap.style.width = mw+"px";
                            oMap.style.height = mh+"px"
                            oMap.style.left =ol+"px";
                            oMap.style.top =ot+"px";
                            if(oMap.offsetLeft > 0 ){
                                oMap.style.left = 0+"px";
                            }else if( oMap.offsetLeft < pWidth-oMap.offsetWidth){
                                oMap.style.left = pWidth-oMap.offsetWidth+"px";
                            }
                            if( oMap.offsetTop >0 ){
                                oMap.style.top = 0+"px";
                            }else if( oMap.offsetTop < pHeight-oMap.offsetHeight){
                                oMap.style.top = pHeight-oMap.offsetHeight+"px";
                            }
                        }, 400)
                    }
                }else if(x<-30){
                    var m = Math.floor(oMap.offsetWidth/mapW0*10);
                    if( m <10){
                        m++ ;
                        var n = m/10 ;
                        var n2 = n-0.1 ;
                        var mw = mapW0*n < ow ? ow : mapW0*n
                        var mh = mapH0*n < oh ? oh : mapH0*n
                        var scaleX = mw/oMap.getBoundingClientRect().width
                        var scaleY = mh/oMap.getBoundingClientRect().height

                        oMap.style[vendors.TRANSFORM] = 'scale(' + scaleX + ',' + scaleY + ')'
                        document.ontouchmove = null;

                        setTimeout(function() {
                            var ol = oMap.getBoundingClientRect().left;
                            var ot = oMap.getBoundingClientRect().top - $(".map_wrap")[0].getBoundingClientRect().top;

                            oMap.style[vendors.TRANSITION] = ''
                            oMap.style[vendors.TRANSFORM] = ''

                            oMap.style.width = mw+"px";
                            oMap.style.height = mh+"px"
                            oMap.style.left =ol+"px";
                            oMap.style.top =ot+"px";
                            if(oMap.offsetLeft > 0 ){
                                oMap.style.left = 0+"px";
                            }else if( oMap.offsetLeft < pWidth-oMap.offsetWidth){
                                oMap.style.left = pWidth-oMap.offsetWidth+"px";
                            }
                            if( oMap.offsetTop >0 ){
                                oMap.style.top = 0+"px";
                            }else if( oMap.offsetTop < pHeight-oMap.offsetHeight){
                                oMap.style.top = pHeight-oMap.offsetHeight+"px";
                            }
                        }, 400)
                    }
                }

            }
            vendors = vendor()


            function getPos(ev){
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop ;
                var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft ;

                return { x:ev.touches[0].clientX+scrollLeft , y:ev.touches[0].clientY+scrollTop } ;
            }
        }
    },
    components: {
        innerHeader,
        stickyFooter
    }
}
</script>

<style lang="less" scoped>
.page_map {
  padding: 50px 0 0;
  height: 100%;
  .mapBox {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #666;
    .map_wrap {
      position: relative;
      img {
        position: absolute;
        top: 0;
        left: 0%;
        width: auto;
        height: 100%;
      }
    }
    .save {
      width: 1.92rem;
      height: 0.6rem;
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.22rem;
      color: #fff;
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      border-radius: 0.3rem;
      z-index: 10;
      background: linear-gradient(to right, #ff7033, #fb5b46);
      -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>
