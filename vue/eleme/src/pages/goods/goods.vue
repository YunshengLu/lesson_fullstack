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
                    <li class="menu-item" v-for="item in goods" :key="item.name">
                        <span class="text">
                            <span class="icon" v-show="item.type > 0"></span>
                            {{ item.name }}
                        </span>
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
        };
    },
    mounted() {
        const fetchData = async () => {
            await getGoodsRequest()
        }
        fetchData()
    },
};
</script>

<style lang="stylus" scoped>
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
                .text
                    display table-cell
                    width 56px
                    vertical-align middle
                    border-1px(rgba(7, 17, 27, 0.1))
                    font-size 12px
</style>
