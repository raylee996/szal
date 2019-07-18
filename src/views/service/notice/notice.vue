<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <div class="notice_item">
                <div class="notice_title">
                    <i></i>温馨提示
                </div>
                <div class="notice_text">
                    <p>1.游园活动时间为上午9：00至下午17：00。特殊情况另行通知。</p>
                    <p>2.持乐园有效票据（磁卡门票、年卡等）从大门口对应的入园通道检票入园。</p>
                    <p>3.园内导览图、项目介绍与开放时间、购物餐饮服务、咨询电话等游园信息，可帮助您游玩或提供相关服务。</p>
                    <p>4.保持游园环境整洁,自觉将空饮料瓶、食品包装纸等废弃物按垃圾箱分类提示投入分类垃圾箱。</p>
                    <p>5.请爱护园内公共设施和花草树木，不浪费水资源。</p>
                    <p>6.请勿有下列行为：携带宠物入园、携带个人交通工具入园（婴儿车或残疾人轮椅除外）、携带个人运动器械游玩、出售商品等商业活动、未经允许的商业拍摄活动、捕捉鱼鸟等。 </p>
                    <p>7.游客需要帮助，请与游客服务中心或现场工作人员联系。</p>
                    <p>8.温馨提示：森林水世界及四季恒温水乐园内各项目需着泳衣游玩。</p>
                </div>
            </div>
            <div class="notice_item">
                <div class="notice_title">
                    <i></i>入园须知
                </div>
                <div class="notice_text">
                    <p>1.游客一律购票入园，讲究文明，注意礼貌，自觉遵守社会公德、公共秩序和园内的各项规则制度，服从并协助管理人员行使工作职权。</p>
                    <p>2.严禁携带枪支弹药、易燃易爆品及其它危险品入园。</p>
                    <p>3.请爱护园内设施设备、自然景观；禁止刻划、涂抹、攀爬、损坏园内建筑；不得损坏花草树木，践踏草坪植被；不得进入篱笆、护栏攀登拍照；严禁在园内张网捕鱼。</p>
                    <p>4.用于制作媒体节目、经营广告等的摄录机，未经许可，不得携带入园。</p>
                    <p>5.自觉维护公共卫生，不要随地吐痰、便溺和乱丢瓜皮、果壳、纸屑等；未经允许，任何车辆不得入园。</p>
                    <p>6.游客不得在园内出售物品和从事经营收费活动。</p>
                    <p>7.游客不得携带宠物入园。</p>
                    <p>8.禁止斗殴、流氓、赌博等其它违法乱纪行为。</p>
                    <p>9.内若出现异常紧急情况，请服从现场工作人员的管理与指挥。</p>
                </div>
            </div>
            <div class="notice_item">
                <div class="notice_title">
                    <i></i>安全提示
                </div>
                <div class="notice_text">
                    <p>1.儿童游园须有成人监护，1.2米以下的儿童游玩相关游乐项目须有成人陪同。</p>
                    <p>2.为了您的安全，游园活动应注意所在区域或项目的各种安全警示，提醒您游玩游乐项目须遵循游客须知，并根据自己身体状况判断是否适合。以下游乐项目谢绝孕妇、患有高血压、心脏病、颈椎病、脊椎病、眩晕症者以及高度近视、酒醉者乘坐。并且设置了身高限制。 </p>
                    <p>3.为保障游客安全，乐园所有游乐项目均会安排例行检修工作，可能会使部分游乐项目延迟或暂停开放，详情请参见乐园售票处、项目入口处和游客服务中心的告示。 </p>
                    <p>4.游乐项目运行中若出现异常或故障，必须停机检修，而恢复运行的时间可能无法即时确认和告知，请游客配合并服从现场工作人员引导，选择游玩其它游乐项目。</p>
                    <p>5.如遇异常天气及其它自然灾害等不可抗拒的情况（如：雷电、台风、大雨等），园内游乐项目部分关闭或全部关闭，表演项目也将停止，详情请参见项目入口处告示，乐园无需预告。</p>
                    <p>6.游玩项目或观看表演均须排队等候，请勿插入队列或做出其他危险行为。游乐项目或表演结束前，会预先告知停止排队的时间，届时将不再接受排队，敬请谅解。</p>
                    <p>7.请妥善保管随身携带的财物，请勿将贵重物品或行李放置在您视线范围外的地方或遗留在车辆、储存柜、餐桌、休闲椅上。</p>
                    <p>8.请勿在园内进行野炊、放风筝、露宿、打猎等不安全行为。请遵守乐园相关地点的安全告示内容。</p>
                    <p>9.严禁下列行为：在园内斗欧、赌博、偷盗等违法活动；携带枪支、管制刀具、烟花爆竹、其他危险化学品、恐布玩具等入园；妨碍乐园安全运营的其他一切行为。 </p>
                    <p>10.园内若出现异常紧急情况，请服从并配合工作人员的管理与指挥。对于在游园中因游客自身的疏忽、过失所引起的事故，游客应负相应的责任。</p>
                </div>
            </div>
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
            text: "游客须知",
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
    .notice_item{
        background: #fff;
        border-radius: 0.2rem;
        margin-top: 0.55rem;
        padding: 0 0.3rem;
        .notice_title{
            display: flex;
            align-items: center;
            height: 0.8rem;
            font-size: 0.36rem;
            font-weight: bold;
        }
        .notice_text{
            font-size: 0.24rem;
            color: #5c5c5c;
            line-height: 0.48rem;
            padding: 0.2rem 0;
        }
        &:nth-child(1){
            .notice_title{
                i{
                    display: inline-block;
                    width: 17.5px;
                    height: 19.5px;
                    margin-right: 0.1rem;
                    background: url(images/icon1.png);
                    background-size: 100% 100%;
                }
                color: #23a949;
                border-bottom: 2px solid #23a949;
            }
        }
        &:nth-child(2){
            .notice_title{
                i{
                    display: inline-block;
                    width: 18.5px;
                    height: 18.5px;
                    margin-right: 0.1rem;
                    background: url(images/icon2.png);
                    background-size: 100% 100%;
                }
                color: #2b87d6;
                border-bottom: 2px solid #2b87d6;
            }
        }
        &:nth-child(3){
            .notice_title{
                i{
                    display: inline-block;
                    width: 18.5px;
                    height: 18.5px;
                    margin-right: 0.1rem;
                    background: url(images/icon3.png);
                    background-size: 100% 100%;
                }
                color: #f6412e;
                border-bottom: 2px solid #f6412e;
            }
        }
    }
}
</style>
