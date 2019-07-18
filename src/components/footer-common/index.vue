<template>
	<div class="footer_common">
			<div class="ewm">
					<img src="./images/wechat.png" alt="">
			</div>
			<ul class="link">
					<li>
						<router-link :to="{path: aboutUsPath}">关于我们</router-link>
					</li>
					<li>
						<router-link :to="{path: '/service/FAQ'}">常见问题</router-link>
					</li>
					<li>
						<router-link :to="{path: '/service/contactUs'}">联系我们</router-link>
					</li>
			</ul>
			<div class="hotline">
					<a :href="'tel:'+hotline">
                        <p>客服热线：{{hotline}} <img src="./images/phone.png" alt=""></p>
                    </a>
			</div>
            <div class="copy_right">
                <p>苏ICP备12061969号-1</p>
                <p>苏州高新旅游产业集团有限公司版权所有</p>
                <p><a href="http://m.ipow.cn">[互动力 承建 运营]</a></p>
            </div>
	</div>
</template>

<script>
export default {
    props: {
        aboutUsPath: {
            type: String,
            default: "/aboutUs"
        },
        hotline: ""
    }
}
</script>

<style lang="less" scoped>
@import "~common/less/mixin.less";

.footer_common {
  padding: 0.45rem 0;
  background: #fff;
  .ewm {
    img {
      display: block;
      width: 7.42rem;
      margin: 0 auto;
    }
  }
  .link {
    margin: 0.6rem auto;
    text-align: center;
    font-size: 0;
    li {
      display: inline-block;
      height: 0.26rem;
      line-height: 0.26rem;
      position: relative;
      padding: 0 0.38rem;
    //   .border-right-1px(#a1a1a1, 0, absolute, 0, auto, 0, 0);
    border-right: 1px solid #a1a1a1;
      &:last-child {
        // .border-right-1px(transparent, 0, absolute, 0, auto, 0, 0);
        border: none;
      }
      a {
        font-size: 0.24rem;
        color: #757575;
        vertical-align: top;
      }
    }
  }
  .hotline {
    margin: 0.35rem 0;
    text-align: center;
    font-size: 0.3rem;
    a{
        color: #9a9a9a;
    }
    img {
      width: 0.32rem;
      margin-left: 0.1rem;
    }
  }
  .copy_right{
        color: #9a9a9a;
    margin: 0.55rem 0;
    text-align: center;
    font-size: 0.24rem;
    line-height: 0.48rem;
    a{
        color: #9a9a9a;
    }
  }
}
</style>
