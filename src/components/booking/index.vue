<template>
    <div class="booking" :class="{inner: inner}">
        <a href="http://weixin.szal.cn/wap/index.htm"><img src="./images/booking.png" alt="" class="booking_img"></a>
        <img src="./images/tree1.png" class="tree1" alt="">
        <img src="./images/tree2.png" class="tree2" alt="">
        <img src="./images/bird.gif" alt="" class="bird">
    </div>
</template>

<script>
export default {
    props: {
        inner: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>
.booking {
  position: relative;
  padding: 0.3rem 0.3rem 0.9rem;
  &.inner{
    padding: 0.3rem 0.3rem 0.4rem;
    .tree1,.tree2,.bird{
        display: none;
    }
  }
  .booking_img {
    display: block;
    width: 100%;
  }
  .tree1 {
    width: 1.13rem;
    position: absolute;
    left: 0;
    bottom: -0.07rem;
    z-index: 1;
  }
  .tree2 {
    width: 2.87rem;
    position: absolute;
    right: 0;
    bottom: -0.21rem;
    z-index: 1;
  }
  .bird {
    width: 0.8rem;
    position: absolute;
    right: 1.44rem;
    bottom: 0.16rem;
    z-index: 1;
  }
}
</style>
