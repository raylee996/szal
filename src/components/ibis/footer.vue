<template>
    <div class="footer_hook">
        <div class="footer">
            <p><i></i>4008286660</p>
            <p><i></i>24小时营业</p>
            <p><i></i>E-mail:szal@szal.cn</p>
            <p><i></i>苏州市阳山东路与山神湾路交界处，山神湾路2号</p>
            <img :src="logo" alt="" class="logo">
        </div>
        <div class="copyright">
            <p>苏州高新旅游产业集团有限公司版权所有     [互动力 承建 运营]</p>
            <p>苏ICP备12061969号-1</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logo: require("./images/logo.png")
        }
    }
}
</script>

<style lang="less" scoped>
.footer{
    padding: 0.45rem 0 0.7rem;
    background: #151922;
    text-align: center;
    p{
        font-size: 0.22rem;
        color: #fff;
        margin-bottom: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
        i{
            display: inline-block;
            vertical-align: top;
            margin-right: 0.3rem;
        }
        &:nth-child(1) {
            i{
                width: 17px;
                height: 18px;
                background: url(~common/images/hotel/kefu.png);
                background-size: 100% 100%;
            }
        }
        &:nth-child(2) {
            i{
                width: 15.5px;
                height: 15.5px;
                background: url(~common/images/hotel/time.png);
                background-size: 100% 100%;
            }
        }
        &:nth-child(3) {
            i{
                width: 16px;
                height: 12px;
                background: url(~common/images/hotel/mail.png);
                background-size: 100% 100%;
            }
        }
        &:nth-child(4) {
            i{
                width: 13px;
                height: 18px;
                background: url(~common/images/hotel/address.png);
                background-size: 100% 100%;
            }
        }
    }
    .logo{
        width: 2.65rem;
        margin-top: 0.4rem;
    }
}
.copyright{
    padding: 0.2rem 0;
    line-height: 0.3rem;
    font-size: 0.2rem;
    color: #fff;
    background: #0f1015;
    text-align: center;
}
</style>
