<template>
    <div class="container-hook">
        <inner-header :text="text" :classname="classname"></inner-header>
        <div class="container">
            <ul class="faq_category">
                <li class="faq_wrap" v-for="(category, i) in faqList">
                    <h2 class="faq_category_name">{{category.categoryName}}</h2>
                    <ul class="faq_list">
                        <li class="faq_item" v-for="(item, index) in category.List" :class="{active: listIndex == i && itemIndex == index}" @click="toggleShow(i, index)">
                            <h2 class="faq_title">
                                <span>Q{{index+1}}.{{item.title}}</span>
                                <i></i>
                            </h2>
                            <div class="faq_detail" v-html="item.detail"></div>
                        </li>
                    </ul>
                </li>
            </ul>
            <router-link class="consult_btn" :to="{path: '/strategy/consult'}">找不到您想了解的问题？ 立即咨询！</router-link>
        </div>
        <sticky-footer></sticky-footer>
    </div>
</template>

<script>
import innerHeader from "components/inner-header/index";
import stickyFooter from "components/footer/index";
import faqList from "./faqList"

export default {
    data() {
        return {
            listIndex: -1,
            itemIndex: -1,
            text: "常见问题",
            classname: "common",
            faqList
        }
    },
    methods: {
        toggleShow(i, index) {
            if(this.listIndex == i && this.itemIndex == index) {
                this.listIndex = -1
                this.itemIndex = -1
            }else{
                this.listIndex = i
                this.itemIndex = index
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
@import "~common/less/mixin.less";

.container{
    background: #fff;
    .faq_category{
        padding-top: 50px;
        .faq_wrap{
            margin: 0 0.3rem;
            &:last-child{
                margin-bottom: 0.5rem;
            }
            .faq_category_name{
                font-size: 0.4rem;
                color: #0077cc;
                margin: 0.55rem 0;
                text-align: center;
            }
            .faq_list{
                .border-top-1px(#cccccc);
                .faq_item{
                   .border-bottom-1px(#cccccc);
                   .faq_title{
                       padding: 0.2rem;
                       position: relative;
                       span{
                           display: block;
                           width: 6.1rem;
                           font-size: 0.3rem;
                           color: #333333;
                       }
                       i{
                           width: 0.23rem;
                           height: 0.13rem;
                           background: url(./images/arrow.png);
                           background-size: 100% 100%;
                           position: absolute;
                           right: 0.2rem;
                           top: 0.34rem;
                           transition: all .5s;
                           transform-origin: center center;
                       }

                   }
                   .faq_detail{
                       padding: 0.2rem 0.2rem 0.4rem;
                       font-size: 0.24rem;
                       color: #5c5c5c;
                       line-height: 0.36rem;
                       display: none;
                   }
                   &.active{
                        background: #f7f7f7;
                       .faq_detail{
                            display: block;
                        }
                        .faq_title i{
                            transform: rotateZ(180deg);
                        }
                    }
                }
            }
        }
    }
    .consult_btn{
        display: block;
        width: 6.9rem;
        height: 1.02rem;
        line-height: 1.02rem;
        text-align: center;
        font-size: 0.3rem;
        color: #fff;
        margin: 0 auto 0.5rem;
        border-radius: 0.8rem;
        background: linear-gradient(to right, #2f4bfe, #4293fa);
        box-shadow: 0 4px 12px rgba(48, 78, 254, 0.3);
    }
}
</style>
