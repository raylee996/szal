<template>
    <div class="strategy_hook">
        <div class="strategy_common" v-if="strategyList.length > 0">
            <div class="strategy_left">
                <router-link :to="{path: '/strategyDetail?id='+strategyList[0].id+'&from=recommend'}">
                        <img :src="strategyList[0].image" alt="">
                        <p>{{strategyList[0].title}}</p>
                </router-link>
            </div>
            <div class="strategy_right">
                <div class="strategy_item" v-if="strategyList.length > 1">
                        <router-link :to="{path: '/strategyDetail?id='+strategyList[1].id+'&from=recommend'}">
                            <img :src="strategyList[1].image" alt="">
                            <p>{{strategyList[1].title}}</p>
                        </router-link>
                </div>
                <div class="strategy_item" v-if="strategyList.length > 2">
                        <router-link :to="{path: '/strategyDetail?id='+strategyList[2].id+'&from=recommend'}">
                            <img :src="strategyList[2].image" alt="">
                            <p>{{strategyList[2].title}}</p>
                        </router-link>
                </div>
                <div class="strategy_more1" v-if="strategyList.length == 1">
                    <p>更多游玩攻略<br>敬请期待！</p>
                </div>
                <div class="strategy_more2" v-if="strategyList.length == 2">
                    <p>更多游玩攻略<br>敬请期待！</p>
                </div>
            </div>
        </div>
        <p style="text-align: center; font-size: 14px; color: #333;" v-if="strategyList.length == 0">敬请期待</p>
    </div>
  <!-- <div class="strategy_common">
      <div class="strategy_left">
          <router-link :to="{path: ''}">
                <img src="./images/strategy01.jpg" alt="">
                <p>玩水全程汇报帖</p>
          </router-link>
      </div>
      <div class="strategy_right">
          <div class="strategy_item">
                <router-link :to="{path: ''}">
                <img src="./images/strategy02.jpg" alt="">
                    <p>奇镜森托邦</p>
                </router-link>
          </div>
          <div class="strategy_item">
                <router-link :to="{path: ''}">
                <img src="./images/strategy03.jpg" alt="">
                    <p>苏州乐园花漾春游季缤纷启幕</p>
                </router-link>
          </div>
      </div>
  </div> -->
</template>

<script>
export default {
    props: {
        strategyList: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>

<style lang="less" scoped>
.strategy_common {
  display: flex;
  justify-content: space-between;
  margin: 0.2rem 0.3rem;
  .strategy_left {
    flex: 0 0 3.4rem;
    width: 3.4rem;
    height: 3.9rem;
    position: relative;
    border-radius: 0.1rem;
    overflow: hidden;
    transform: rotateZ(0);
    img {
      height: 100%;
    // width: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    p {
      width: 100%;
      height: 0.45rem;
      line-height: 0.45rem;
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 0.2rem;
      text-indent: 0.1rem;
      color: #fff;
      background: rgba(0, 0, 0, 0.6);
    }
  }
  .strategy_right {
    flex: 0 0 3.4rem;
    width: 3.4rem;
    .strategy_item {
      width: 100%;
      height: 1.9rem;
      margin-bottom: 0.1rem;
      position: relative;
      border-radius: 0.1rem;
      overflow: hidden;
      transform: rotateZ(0);
      &:last-child {
        margin: 0;
      }
      img {
        // width: 150%;
        width: 100%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      p {
        width: 100%;
        height: 0.45rem;
        line-height: 0.45rem;
        position: absolute;
        left: 0;
        bottom: 0;
        font-size: 0.2rem;
        text-indent: 0.1rem;
        color: #fff;
        background: rgba(0, 0, 0, 0.6);
      }
    }
    .strategy_more1{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        width: 100%;
        height: 3.9rem;
        border-radius: 0.1rem;
        background: #ffede3;
        font-size: 0.28rem;
        color: #ff5062;
    }
    .strategy_more2{
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        width: 100%;
        height: 1.9rem;
        border-radius: 0.1rem;
        background: #ffede3;
        font-size: 0.28rem;
        color: #ff5062;
    }
  }
}
</style>
