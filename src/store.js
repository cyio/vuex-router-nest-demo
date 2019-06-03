import Vue from "vue";
import Vuex from "vuex";
import aboutModule from './aboutModule'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curSub: null,
  },
  mutations: {
    SET_CURSUB(state, value) {
      state.curSub = value
    }
  },
  actions: {},
  modules: {
    aboutModule,
  }
});
