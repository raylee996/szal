<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <div class="search_box">
                <form action='' onsubmit="return false;">
                    <input type="search" v-model="queryString" @search="search" id="search" placeholder="搜索你想了解的问题"><i @click="search"></i>
                </form>
            </div>
            <div class="tags">
                <a href="javascript:;" v-for="(item, index) in tags" :class="{active: activeIndex==index}" @click="switchType(item, index)">{{item.type}}</a>
            </div>
            <ul class="consult_list">
                <li class="item" v-for="item in consultList">
                    <div class="user">
                        <i></i>
                        <div class="text">
                            <h2>{{item.username}}</h2>
                            <p>{{item.CreateDate}}</p>
                        </div>
                    </div>
                    <div class="question" v-html="item.question"></div>
                    <div class="answer">
                        <i></i>
                        <div class="text" v-html="item.subordinate.question"></div>
                    </div>
                </li>
            </ul>
            <loading v-if="consultList.length == 0 && !errMsg"></loading>
            <no-result v-if="errMsg" :words="errMsg"></no-result>
            <a href="javascript:;" class="edit" @click="showModal"><i></i></a>
            <transition name="slide">
                <div class="consult_modal" v-show="modalVisible">
                    <inner-header :text="text" :classname="classname"></inner-header>
                    <textarea cols="30" rows="10" v-model="content" placeholder="说出您的问题" style="resize:none;"></textarea>
                    <a href="javascript:;" class="submit" @click="showValidate">发布</a>
                </div>
            </transition>
            <div class="input_box_pop_wrap" v-show="validateFlag">
                <div class="input_box_pop_lay" @click="hideValidate"></div>
                <div class="input_box_pop">
                    <li>
                        <p>昵称：</p>
                        <input type="text" v-model.trim="nickname" id="nickname" placeholder="请输入您的昵称">
                    </li>
                    <li>
                        <p>手机号：</p>
                        <input type="text" v-model.trim="phone" id="phone" maxlength="11" placeholder="请输入您的手机号">
                    </li>
                    <li>
                        <p>类型：</p>
                        <select id="categorySelect" v-model="selected">
                            <option disabled value="">请选择</option>
                            <option v-for="item in tags.slice(1)" :value="item.value">{{item.type}}</option>
                        </select>
                    </li>
                    <li>
                        <p>验证码：<i id="yzmI">{{validateCode}}</i></p>
                        <input id="yzmInput" v-model.trim="answer" type="text" placeholder="请输入答案">
                    </li>
                    <a href="javascript:;" id="confirmBtn" @click="submitMessage">确认发表</a>
                </div>
            </div>
            <div class="submit_wrap" v-show="submiting">
                <loading :words="'正在提交'"></loading>
            </div>
        </div>
        <sticky-footer></sticky-footer>
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";
import {getMessageList, insertdata, captcha} from "common/js/api";
import loading from "components/loading/loading";
import noResult from "components/no-result/index";
import config from "common/js/config"

export default {
    data() {
        return {
            text: "游客咨询",
            classname: "common",
            activeIndex: 0,
            modalVisible: false,
            validateFlag: false,
            submiting: false,
            queryString: "",
            searchType: "",
            selected: "门票",
            nickname: "",
            phone: "",
            content: "",
            result: "",
            validateCode: "",
            answer: "",
            tags: [
                {
                    type: "全部",
                    value: ""
                },
                {
                    type: "门票",
                    value: "门票"
                },
                {
                    type: "住宿",
                    value: "住宿"
                },
                {
                    type: "交通",
                    value: "交通"
                },
                {
                    type: "年卡",
                    value: "年卡"
                }
            ],
            consultList: [],
            errMsg: ""
        }
    },
    mounted() {
        this._getMessageList({
            type: this.searchType,
            search: this.queryString
        })
    },
    methods: {
        hideValidate() {
            this.validateFlag = false
        },
        showValidate() {
            this.validateFlag = true
        },
        showModal() {
            this.modalVisible = !this.modalVisible
            if(this.validateCode == "") {
                this._captcha()
            }
        },
        _getMessageList(opts) {
            this.consultList = []
            this.errMsg = ""
            getMessageList(opts).then((response) => {
                if(response.code == 200) {
                    if(!response.data) {
                        this.errMsg = "没有更多了！"
                    }else {
                        this.consultList = response.data
                    }
                }else {
                    this.errMsg = response.msg
                }
            })
        },
        _captcha() {
            captcha().then((response) => {
                if(response.code == 200) {
                    this.validateCode = response.data
                }else {
                    alert(response.msg)
                }
            })
        },
        _insertdata() {
            if(this.nickname == "") {
                alert("请输入昵称")
                return
            }
            if(this.phone == "") {
                alert("手机号码不能为空")
                return
            }else {
                var reg = /^1[3-9]\d{9}$/
                if (!reg.test(this.phone)) {
                    alert("请输入正确格式的手机号码")
                    return
                }
            }
            if(this.content == "") {
                alert("请输入您的问题")
                return
            }
            if(this.answer == "") {
                alert("请输入答案")
                return
            }
            this.submiting = true

            let data = {
                type: this.selected,
                username: this.nickname,
                userphone: this.phone,
                content: this.content,
                captcha: this.answer
            }
            insertdata(data).then((response) => {
                this.submiting = false
                if(response.code == 200) {
                    if(response.data.data) {
                        alert("留言成功，请耐心等待管理员答复哦！")
                        window.location.reload()
                    }else {
                        alert(response.data.msg)
                    }
                }else {
                    alert(response.msg)
                }
            })
        },
        submitMessage() {
            this._insertdata()
        },
        search() {
            this._getMessageList({
                type: this.searchType,
                search: this.queryString
            })
        },
        switchType(item, index) {
            this.searchType = item.value
            this.activeIndex = index
            this._getMessageList({
                type: this.searchType,
                search: this.queryString
            })
        }
    },
    components: {
        innerHeader,
        stickyFooter,
        loading,
        noResult
    }
}
</script>

<style lang="less" scoped>
@import "~common/less/mixin.less";

.container{
    padding-top: 50px;
    background: #fff;
    .search_box{
        margin: 0.3rem;
        height: 0.64rem;
        background: #f3f3f3;
        position: relative;
        border-radius: 0.5rem;
        font-size: 0;
        input{
            width: 80%;
            border: none;
            outline: none;
            font-size: 0.22rem;
            color: #a6a6a6;
            background: none;
            text-indent: 0.24rem;
            height: 0.64rem;
            line-height: 0.4rem;
        }
        i{
            width: 0.33rem;
            height: 0.33rem;
            background: url(images/search.png);
            background-size: 100% 100%;
            position: absolute;
            right: 0.2rem;
            top: 50%;
            transform: translateY(-50%);
        }
    }
    .tags{
        padding: 0.3rem;
        font-size: 0;
        .border-bottom-1px(#e6e6e6, 0, absolute, auto, 0, 0, 0);
        a{
            display: inline-block;
            vertical-align: top;
            margin: 0 0.35rem 0.2rem 0;
            padding: 0.1rem 0.25rem;
            .border-1px(#676767, 1rem);
            font-size: 0.24rem;
            color: #676767;
            &.active{
                color: #ff4125;
                .border-1px(#ff4125, 1rem);
            }
        }
    }
    .consult_list{
        padding: 0.4rem 0.3rem;
        .item{
            margin-bottom: 0.8rem;
            .user{
                display: flex;
                align-items: center;
                margin-bottom: 0.45rem;
                i{
                    flex: 0 0 0.54rem;
                    width: 0.54rem;
                    height: 0.54rem;
                    margin-right: 0.16rem;
                    background: url(images/ask.png);
                    background-size: 100% 100%;
                }
                .text{
                    flex: 1;
                    h2{
                        font-size: 0.24rem;
                        color: #676767;
                    }
                    p{
                        font-size: 0.2rem;
                        color: #a6a6a6;
                    }
                }
            }
            .question{
                font-size: 0.3rem;
                color: #191919;
                margin-bottom: 0.25rem;
            }
            .answer{
                display: flex;
                align-items: center;
                padding: 0.3rem 0.15rem;
                background: #f7f7f7;
                border-radius: 0.2rem;
                i{
                    flex: 0 0 0.54rem;
                    width: 0.54rem;
                    height: 0.54rem;
                    margin-right: 0.16rem;
                    background: url(images/answer.png);
                    background-size: 100% 100%;
                }
                .text{
                    flex: 1;
                    font-size: 0.26rem;
                    color: #404040;
                }
            }
        }
    }
    .edit{
        position: fixed;
        right: 0.25rem;
        bottom: 1.6rem;
        z-index: 2;
        width: 1rem;
        height: 1rem;
        border-radius: 100%;
        background: linear-gradient(to right, #2f4bfe, #4294fa);
        box-shadow: 0 9px 18px rgba(30, 87, 216, .38);
        i{
            width: 0.46rem;
            height: 0.44rem;
            background: url(images/edit.png);
            background-size: 100% 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .consult_modal{
        &.slide-enter-active,&.slide-leave-active{
            transition: all .5s;
        }
        &.slide-enter,&.slide-leave-active{
            transform: translate3d(100%,0,0);
        }
        background: #fff;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 101;
        padding: 70px 0.1rem 0.35rem;
        overflow: hidden;
        textarea{
            width: 100%;
            height: 4.3rem;
            background: #f7f7f7;
            border-radius: 0.1rem;
            font-size: 0.24rem;
            color: #999999;
            border: none;
            outline: none;
            box-sizing: border-box;
            padding: 0.2rem;
        }
        .submit{
            display: block;
            width: 2.6rem;
            height: 0.68rem;
            line-height: 0.68rem;
            text-align: center;
            font-size: 0.32rem;
            color: #fff;
            margin: 0.9rem auto;
            background: linear-gradient(to right, #2f4bfe, #4294fa);
            box-shadow: 0 9px 18px rgba(30, 87, 216, .38);
            border-radius: 0.3rem;
        }
    }
    .input_box_pop_wrap{
        position:fixed;top:0;z-index:199;width:100%;height:100%;
        .input_box_pop_lay{
            width:100%;height:100%;background:rgba(0,0,0,0.8);
        }
        .input_box_pop{
            width:6rem;background:#fff;padding:0.3rem;position:fixed;z-index:10;border-radius:0.3rem;left:0.45rem;top:30%;margin-top:-3rem;
            li{
                border-bottom:0.012rem solid #dddddd;padding:0.3rem 0;display:flex;justify-content:space-between;line-height:0.7rem;
                p {
                    font-size: 0.26rem;
                    i{
                        color:#f45b0f;
                    }
                }
                input{height:0.5rem;width:4.6rem;font-size:0.24rem;}
                select{height:0.65rem;width:4.9rem;font-size:0.24rem;}
                &:nth-last-of-type(1) input{width:3rem;}
            }
            a{display:block;width:100%;margin:0 auto;height:1rem;background:#f45b0f;color:#fff;border-radius:0.1rem;margin-top:0.3rem;line-height:1rem;text-align:center;font-size:0.35rem;}
        }
    }
    .submit_wrap{
        position: fixed;
        left: 0;
        top: 0;
        width:100%;
        height:100%;
        background:rgba(0,0,0,0.7);
        z-index: 1000;
        .loading{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
