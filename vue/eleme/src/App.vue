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
        <router-view/>
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
<style scoped></style>
