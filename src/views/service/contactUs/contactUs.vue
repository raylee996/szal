<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <div class="contact_wrap">
                <div class="item">
                    <div class="icon"><img src="./images/address.png" alt=""><p>景区地址</p></div>
                    <div class="text"><p>苏州市阳山东路与<br>山神湾路交界处，山神湾路2号</p></div>
                </div>
                <div class="item">
                    <div class="icon"><img src="./images/phone.png" alt=""><p>联系方式</p></div>
                    <div class="text"><p>邮箱：szal@szal.cn <br>电话：0512-68717107，0512-68717149</p></div>
                </div>
                <div class="item">
                    <div class="icon"><img src="./images/gzh.png" alt=""><p>官方公众号</p></div>
                    <div class="text">
                        <div class="ewm_item">
                            <img src="./images/ewm-wx.jpg" alt="">
                            <p>官方微信</p>
                        </div>
                        <div class="ewm_item">
                            <img src="./images/ewm-wb.jpg" alt="">
                            <p>官方微博</p>
                        </div>
                        <div class="ewm_item">
                            <img src="./images/ewm-dy.jpg" alt="">
                            <p>官方抖音<br>ID：384968359</p>
                        </div>
                    </div>
                </div>
            </div>
            <img src="./images/logo.png" alt="" class="logo">
            <img src="./images/mascot.png" alt="" class="mascot">
        </div>
        <sticky-footer></sticky-footer>
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";

export default {
    data() {
        return {
            text: "联系我们",
            classname: "common"
        }
    },
    components: {
        innerHeader,
        stickyFooter
    }
}
</script>

<style lang="less" scoped>
.container{
    padding-top: 50px;
    background: #f7f7f7;
    .contact_wrap{
        background: #fff;
        padding: 0.5rem 0.3rem;
        .item{
            display: flex;
            margin-bottom: 0.3rem;
            .icon{
                flex: 0 0 1.24rem;
                width: 1.24rem;
                height: 1.24rem;
                border-radius: 100%;
                justify-content: center;
                align-items: center;
                text-align: center;
                display: flex;
                flex-wrap: wrap;
                box-sizing: border-box;
                padding: 0.2rem 0;
                p{
                    width: 100%;
                    font-size: 0.18rem;
                    color: #fff;
                }
                img{
                    // vertical-align: top;
                }
            }
            .text{
                display: flex;
                flex: 1;
                padding-left: 0.25rem;
                justify-content: center;
                align-items: center;
                p{
                    width: 100%;
                    font-size: 0.24rem;
                    color: #656565;
                }
            }
            &:nth-child(1){
                .icon{
                    background: #4998fc;
                    img{
                        width: 0.56rem;
                    }
                }
            }
            &:nth-child(2){
                .icon{
                    background: #ff4d40;
                    img{
                        width: 0.48rem;
                    }
                }
            }
            &:nth-child(3){
                .icon{
                    background: #469c35;
                    img{
                        width: 0.5rem;
                    }
                }
                .text{
                    align-items: baseline;
                    .ewm_item{
                        display: inline-block;
                        margin-right: 0.65rem;
                        text-align: center;
                        &:last-child{
                            margin-right: 0;
                        }
                        img{
                            width: 1.15rem;
                        }
                    }
                }
            }
        }
    }
    .logo{
        display: block;
        width: 3.5rem;
        margin: 0.7rem auto;
    }
    .mascot{
        display: block;
        width: 6.29rem;
        margin: 0 auto;
        margin-bottom: 0.7rem;
    }
}
</style>
