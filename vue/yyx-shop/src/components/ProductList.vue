<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.title }} - {{ product.price }}
    </li>
  </ul>
</template>

<script>
// 数据管理后 组件 偏UI， data() 私有状态收回
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  mounted() {
    // Vue.use(Vuex)
    this.$store.dispatch('products/getAllProducts')
  }
  // methods: mapActions('')
  // computed:
  // 计算属性
  // computed: {
  //   products() {
  //     return [
  //       {
  //         id: 1,
  //         title: "iphone",
  //         price: 5999
  //       }
  //     ];
  //   }
  // }

  // data() {
  //   return {
  //     products: [
  //       {
  //         id: 1,
  //         title: 'iphone',
  //         price: 5999
  //       }
  //     ]
  //   }
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
