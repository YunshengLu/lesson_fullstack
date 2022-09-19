import shop from '../../api/shop'
// vuex 将 reducer 函数一分为二
const state = () => ({
  all: []
});

const actions = {
  getAllProducts({ commit }) {
    // api 请求应该从 组件里 挪窝到 action里面
    shop.getProducts(products => {
      // products到了
      // vuex 多了 commit
      commit('setProducts', products);
    });
  }
};

// 状态的修改函数
// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products; // 只有这个写
  }
}

export default {
  namespaced: true, // 模块化
  state,
  actions,
  mutations
};
