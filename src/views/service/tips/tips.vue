<template>
  <div class="container-hook">
    <inner-header :text="text" :classname="classname"></inner-header>
    <div class="container">
      <zone-nav @switchZone="switchZone"></zone-nav>
      <div class="hook" v-show="showIndex == 2">
        <p style="font-size: 0.36rem; text-align: center; padding: 0.5rem; color: #333;">敬请期待！</p>
      </div>
      <div class="hook" v-show="showIndex == 3">
        <div class="notice_item">
          <div class="notice_title">安全须知:</div>
          <div class="notice_text">
            <p>1、请遵守游乐设施的各项安全规定，按工作人员的要求使用、乘坐道具。</p>
            <p>2、在园区内因奔跑滑倒而受伤的比率是最高的，为了您的安全，请您勿在园区内奔跑。</p>
            <p>3、请妥善保管好您的随身物品，谨防丢失，贵重物品请寄存。</p>
            <p>4、老年人（60周岁以上）、孕妇、心脏病及相关疾病患者，请按照游玩须知或工作人员提示游玩相关项目。</p>
            <p>5、请家长按实时天气温度，为您的孩子及时穿好保暖衣物。</p>
          </div>
        </div>
      </div>
      <div class="hook" v-show="showIndex == 0">
        <div class="notice_item">
          <div class="notice_title">游客朋友们:</div>
          <div class="notice_text">
            <p>为了保障你们身体健康与安全，根据国家《游泳场所卫生标准》GB9667-1996文件中规定，严禁肝炎、心脏病、重症沙眼、急性结膜炎、中耳炎、肠道传染病、精神病等患者和酗酒者进入园内游泳。</p>
            <p>请各位游客配合，如有不便之处敬请谅解。</p>
          </div>
        </div>
        <div class="notice_item">
          <div class="notice_title">入园安检须知:</div>
          <div class="notice_text">
            <p>为了公共安全和卫生凡携带包裹和行李箱的游客需进行安全检查，所有液体、食品、玻璃制品、带拉环制品、奶制品、游泳圈、浮排、气垫船、冲浪板等直径大于50cm的水上充气游具、婴儿车、滑板车、行李箱、宠物、球类、易燃易爆品、违禁品、化学品等谢绝带入园内，敬请配合</p>
          </div>
        </div>
        <div class="notice_item">
          <div class="notice_title">入园游玩须知:</div>
          <div class="notice_text">
            <p>园内项目“暴风谷”“丛林龙卷风”“极速丛林”“绿野迷踪”“光速飞瀑”“精灵戏水屋”“冲天大回旋”等滑道项目，游客参与游玩需身高在1.5米以上，体重45—85KG之间，超出规定数据的游客不得参与，不便之处，敬请谅解！</p>
          </div>
        </div>
        <div class="notice_item">
          <div class="notice_title">着装提示:</div>
          <div class="notice_text">
            <p>1、为保持水质清洁，进入水上游乐区域前敬请穿泳装；</p>
            <p>2、参加游乐前，请把手表、眼镜、手镯、项目、戒指、发夹等饰物存放好，以免丢失、损坏或危及人身安全或损坏游乐设施。</p>
          </div>
        </div>
        <div class="notice_item">
          <div class="notice_title">安全提示:</div>
          <div class="notice_text">
            <p>1、在园区内因奔跑滑倒而受伤的比率是最高的，为了您的安全，请您勿在园区内奔跑。</p>
            <p>2、身高未满140CM的儿童，必须穿着救生衣游玩，请由家长陪同以防发生危险。</p>
            <p>3、身高未满140CM的儿童，必须穿着救生衣游玩，请由家长陪同以防发生危险。</p>
            <p>4、孕妇、心脏病、高血压、背疾及习惯骨折患者，请避免参玩滑道。</p>
            <p>5、遇下雨或是打雷等影响戏水安全的天气，请勿停留水域以免造成危险。</p>
            <p>6、每项游乐设施都有个别的安全使用方式及守则，请您按照使用规则参玩。</p>
            <p>7、儿童在水上乐园游玩时应注意保暖，游玩期间，请备好大毛巾。</p>
            <p>8、水上乐园全园铺设地毯，鞋子等物品请放在自己的更衣柜内，防止丢失。</p>
          </div>
        </div>
      </div>
      <div class="hook" v-show="showIndex == 1">
        <div class="notice_item">
          <div class="notice_title">温馨提示:</div>
          <div class="notice_text">
            <p>1、皮肤过敏者、孕妇、糖尿病患者及手术过后者不宜泡温泉；</p>
            <p>2、一位成人只可携带一名免费儿童（1.0M以下，不含1.0M）</p>
            <p>3、请冲淋后进入景区；</p>
            <p>4、游客温泉浸泡时间不宜超过15分钟，以免晕池；</p>
            <p>5、四季悦手牌为游客更衣柜钥匙，也可进行园内消费，请游客保管好自己手牌，如丢失需赔偿50元。（禁止游客私自调换手牌，可至大厅服务台更换，后果自负。）</p>
            <p>6、游客凭手牌后台结账并换取出门卡；</p>
            <p>7、炫彩滑道项目游玩须知：1.4M以上，80KG以下方可乘坐，需要2位符合要求的游客方可乘坐。</p>
            <p>8、四季恒温水乐园温馨提示：近期由于设备维护，园内每天会有部分池子不定期停开，如有不便，敬请谅解！</p>
            <p>9、温馨提示：四季恒温水乐园景区门票及园内自助餐的儿童免票政策的身高标准，自2018年6月1日起，四季恒温水乐园景区门票及自助餐均为1.5米以上（含1.5米）购买成人票，1.0米-1.5米购买儿童票（含1米），1米以下儿童免票。</p>
          </div>
        </div>
        <div class="notice_item">
          <div class="notice_title">安全提示:</div>
          <div class="notice_text">
            <p>为了您的安全，请您在进入本场地之前，仔细阅读以下入场须知：</p>
            <p>1、进场儿童必须有家长全程看护，请家长善尽监护义务，家长必须为年满18周岁以上行动方便的成年人。</p>
            <p>2、儿童身上的硬物、尖物（如：玩具、发卡、饰物等）不可带入场内。</p>
            <p>3、进场老年人必须有家属全程陪同，请家属请家长善尽监护义务，家长必须为年满18周岁以上行动方便的成年人。</p>
            <p>4、游客禁止赤脚行走，须穿鞋谨防意外受伤。</p>
            <p>5、园内禁止吸烟；禁止在水池里饮食；请保持园内环境卫生，禁止乱扔垃圾；</p>
            <p>6、禁止跳水，严禁在园内奔跑。</p>
            <p>7、本场内设施均出于安全考虑，凡违反以上规则而导致本人或他人伤害的，将由责任人一方承担，非设备质量问题造成的事故本场地概不负责。</p>
            <p>8、本场地不负看管责任，贵重物品请您自行保管，遗失概不负责。</p>
          </div>
        </div>
      </div>
    </div>
    <sticky-footer></sticky-footer>
  </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";
import zoneNav from "components/zone-nav/index";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      text: "温馨提示",
      classname: "common",
      showIndex: 0
    };
  },
  computed: {
    ...mapGetters(["zone"])
  },
  methods: {
    switchZone(name) {
      this.zone.forEach((item, index) => {
        if (name == item) {
          if (index === 2 || index === 3) return false;
          this.showIndex = index;
        }
      });
    }
  },
  components: {
    innerHeader,
    stickyFooter,
    zoneNav
  }
};
</script>

<style lang="less" scoped>
.container {
  padding-top: 50px;
  background: #f7f7f7;
  .notice_item {
    background: #fff;
    border-radius: 0.2rem;
    margin-top: 0.55rem;
    padding: 0 0.3rem;
    .notice_title {
      display: flex;
      align-items: center;
      height: 0.8rem;
      font-size: 0.36rem;
      font-weight: bold;
    }
    .notice_text {
      font-size: 0.24rem;
      color: #5c5c5c;
      line-height: 0.48rem;
      padding: 0.2rem 0;
    }
    &:nth-child(1) {
      .notice_title {
        color: #23a949;
        border-bottom: 2px solid #23a949;
      }
    }
    &:nth-child(2) {
      .notice_title {
        color: #2b87d6;
        border-bottom: 2px solid #2b87d6;
      }
    }
    &:nth-child(3) {
      .notice_title {
        color: #f6412e;
        border-bottom: 2px solid #f6412e;
      }
    }
    &:nth-child(4) {
      .notice_title {
        color: #ffc62c;
        border-bottom: 2px solid #ffc62c;
      }
    }
    &:nth-child(5) {
      .notice_title {
        color: #e92cff;
        border-bottom: 2px solid #e92cff;
      }
    }
  }
}
</style>
