<template>
    <div class="innerHead" :class="classname">
      <a href="javascript:;" @click="back" class="back"><i><</i></a>
      <div class="webTitle">{{text}}</div>
      <a href="javascript:;" class="share" @click="share"></a>
      <a href="http://weixin.szal.cn/wap/index.htm" class="book"></a>
  </div>
</template>

<script>
import soshm from "soshm";
import {back} from "common/js/utils";

export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    classname: {
      type: String,
      default: ''
    }
  },
  methods: {
    share() {
      soshm.popIn({
          title: '弹窗分享',
          sites: ['weixin', 'weixintimeline', 'weibo', 'qzone', 'tqq', 'qq']
      });
    },
    back
  }
}
</script>

<style lang="less" scoped>
.innerHead{
    display: flex;
    align-items: center;
    height: 50px;
    line-height: 50px;
    padding: 0 0.44rem;
    position: relative;
    .back{
        float: left;
        height: 100%;
        font-size: 0.5rem;
        color: #fff;
        position: relative;
        z-index: 1;
        i{
            display: inline-block;
            transform: scale(0.7, 1.2);
            transform-origin: center center;
        }
    }
    .webTitle{
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        text-align: center;
        font-size: 0.32rem;
        color: #fff;
    }
    .share{
        display: none;
        position: absolute;
        right: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
        width: 0.41rem;
        height: 0.41rem;
        background-image: url(./images/share01.png);
        background-size: 100% 100%;
    }
    .book{
        position: absolute;
        right: 0.2rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1.8rem;
        height: 0.56rem;
        background-image: url(./images/btn.png);
        background-size: 100% 100%;
    }
    &.inner_fixed{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 100
    }
    &.forestWorld{
        .book{
            display: none;
        }
        .share{
            display: block;
        }
        background: #11c175;
    }
    &.waterPark{
        .book{
            display: none;
        }
        .share{
            display: block;
        }
        background: #01b2a8;
    }
    &.waterWorld{
        .book{
            display: none;
        }
        .share{
            display: block;
        }
        background: #18a0ff;
    }
    &.forestTown{
        .book{
            display: none;
        }
        .share{
            display: block;
        }
        background: #92bd1d;
    }
    &.ecovillage{
        background: #b31d00;
    }
    &.facility{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 100;
        background: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        .share{
            background-image: url(./images/share02.png);
        }
        .back{
            color: #676767;
        }
        .webTitle{
            color: #676767;
        }
    }
    &.common{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 100;
        background: #fff;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        .share{
            background-image: url(./images/share03.png);
        }
        .back{
            color: #4e4b4a;
        }
        .webTitle{
            color: #4e4b4a;
        }
    }
}
</style>
