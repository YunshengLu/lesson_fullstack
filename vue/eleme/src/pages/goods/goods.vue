<!--
 * @Description:
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-16 22:50:13
 * @LastEditTime: 2022-09-16 22:58:14
-->
<template>
    <div>
        <div class="goods">
            <div class="menu-wrapper" ref="menuWrapper">
                <ul>
                    <li
                        class="menu-item"
                        v-for="(item, index) in goods"
                        :key="item.name"
                        :class="{ current: currentIndex === index }"
                        @click="selectMenu(index, $event)"
                    >
                        <span class="text">
                            <span
                                class="icon"
                                v-show="item.type > 0"
                                :class="classMap[item.type]"
                            ></span>
                            {{ item.name }}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="foods-wrapper" ref="foodsWrapper">
                <ul>
                    <li
                        class="food-list"
                        v-for="item in goods"
                        :key="item.name"
                        ref="foodList"
                    >
                        <h2 class="title">{{ item.name }}</h2>
                        <ul>
                            <li 
                                class="food-item"
                                v-for="food in item.foods"
                                :key="food.name"
                            >
                            <div class="icon">
                                <img :src="food.icon" width="57" height="57" alt="">
                            </div>
                            <div class="content">
                                <h3 class="name">{{food.name}}</h3>
                                <p class="desc">{{food.description}}</p>
                            </div>
                        </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import { getGoodsRequest } from '../../api/request';
export default {
    props: {
        seller: {
            type: Object,
        },
    },
    data() {
        return {
            goods: {},
            classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
        };
    },
    mounted() {
        const fetchData = async () => {
            let { data } = await getGoodsRequest();
            this.goods = data;
        };
        fetchData();
    },
    computed: {
        currentIndex() {
            return 0;
        },
    },
    methods: {
        selectMenu(index, event) {
            console.log(event);
        },
    },
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
        flex 0 0 80px
        width 80px
        background-color #f3f5f7
        .menu-item
            display table
            height 54px
            width 56px
            padding 0 12px
            line-height 14px
            &.current
                position relative
                z-index 10
                margin-top -1px
                background #fff
                font-weight 700
                .text
                    border-none()
            .icon
                display inline-block
                vertical-align top
                width 12px
                height 12px
                margin-right 2px
                background-size 12px 12px
                background-repeat no-repeat
                &.decrease
                    bg-image('./decrease_3')
                &.discount
                    bg-image('./discount_3')
                &.guarantee
                    bg-image('./guarantee_3')
                &.invoice
                    bg-image('./invoice_3')
                &.special
                    bg-image('./special_3')
            .text
                display table-cell
                width 56px
                vertical-align middle
                border-1px(rgba(7, 17, 27, 0.1))
                font-size 12px
    .foods-wrapper
        flex 1
        .title
            padding-left 14px
            height 26px
            line-height 26px
            border-left 2px solid #d9dde1
            font-size 12px
            color rgb(147, 153, 159)
            background #f3f5f7
        .food-item
            display flex
            margin 18px
            padding-bottom 18px
            border-1px(rgba(7 , 17, 27, 0.1))
            &:last-child
                border-none()
                margin-bottom 0
            .icon
                flex 0 0 57px
                margin-right 10px
            .content
                flex 1
                .name
                    margin 2px 0 8px 0
                    height 14px
                    line-height 14px
                    font-size 14px
                    color rgb(7, 17, 27)
                .desc, .extra
                    line-height 10px
                    font-size 10px
                    color rgb(147, 153, 159)
</style>
