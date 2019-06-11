function sleep(ms = 0) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}
const Store = ({
  namespaced: true,
  state: {
    playUrl: '',
  },
  actions: {
    clearStore({ commit }) {
      commit('CLEAR_STORE');
    },
    setPlayUrl({ commit }) {
      // sleep(500)
      commit('SET_PLAYURL', Math.random())
    },
    clearStore({ commit }) {
      commit('CLEAR_STORE')
    }
  },
  getters: {
  },
  mutations: {
    SET_PLAYURL(state, value) {
      state.playUrl = value
    },
    CLEAR_STORE(state) {
      console.log('before clear: ', state.playUrl)
      state.playUrl = '';
      console.log('cleared')
    }
  }
});

export default Store;
