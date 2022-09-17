<!--
 * @Description: 
 * @version: 
 * @Author: LuyunSheng
 * @Date: 2022-09-15 19:51:02
 * @LastEditTime: 2022-09-16 22:57:15
-->
<template>
    <div>
        <v-header :seller="seller" />
        <div class="tab">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <router-view :seller="seller" />
    </div>
</template>
<script>
import { getSellerRequest } from './api/request';
import header from './components/header/header.vue';
export default {
    data() {
        return {
            seller: {},
        };
    },
    mounted() {
        const getSellerData = async () => {
            const { data } = await getSellerRequest();
            this.seller = data;
            console.log(this.seller);
        };
        getSellerData();
    },
    components: {
        'v-header': header,
    },
};
</script>
<style lang="stylus" scoped>
@import './common/stylus/mixin.styl'
.tab
    display flex
    width 100%
    height 40px
    line-height 40px
    border-1px(rgba(7 , 17, 27, 0.1))
    .tab-item
        flex 1
        text-align center
        & > a
            display block
            font-size 14px
            color rgb(77, 85, 93)
            &.router-link-active
                color rgb(240, 20, 20)
</style>
