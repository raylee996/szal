<template>
    <div class="hotel_header" :class="objectClass">
        <a href="javascript:;" @click="back" class="back"><i><</i></a>
        <div class="webTitle">
            <span v-show="inner">{{text}}</span>
            <img :src="imgUrl" alt="" v-show="!inner">
        </div>
        <a :href="href" class="book" v-show="!inner">客房预订</a>
    </div>
</template>

<script>
import {back} from "common/js/utils";

export default {
    props: {
        classname: "",
        inner: false,
        text: "",
        href: ""
    },
    data() {
        return{
            imgUrl: require(`./images/${this.classname}.png`),
            objectClass: {
                [this.classname]: true,
                'inner': this.inner
            }
        }
    },
    methods: {
        back
    }
}
</script>

<style lang="less" scoped>
.hotel_header{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    line-height: 50px;
    padding: 0 0.44rem 0;
    &.inner{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 100;
    }
    .back{
        display: inline-block;
        height: 100%;
        font-size: 0.5rem;
        i{
            display: inline-block;
            transform: scale(0.7, 1.2);
            transform-origin: center center;
        }
    }
    .webTitle{
        flex: 1;
        height: 100%;
        text-align: center;
        font-size: 0.32rem;
        position: relative;
        img{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .book{
        flex: 0 0 1.48rem;
        width: 1.48rem;
        height: 50px;
        text-align: center;
        font-size: 0.24rem;
        color: #fff;
        margin-right: -0.44rem;
    }
    &.resortHotel{
        background: #414141;
        .back{
            color: #fff;
        }
        .webTitle{
            color: #fff;
            img{
                width: 2.46rem;
            }
        }
        .book{
            background: #be9b57;
        }
    }
    &.ibis{
        background: #fff;
        .back{
            color: #666666;
        }
        .webTitle{
            color: #666666;
            img{
                width: 2.21rem;
            }
        }
        .book{
            background: #c72020;
        }
    }
    &.ramada{
        background: #fff;
        .back{
            color: #666666;
        }
        .webTitle{
            color: #666666;
            img{
                width: 1.27rem;
            }
        }
        .book{
            background: #e3144b;
        }
    }
}
</style>
