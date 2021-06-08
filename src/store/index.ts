import Vue from 'vue';
import Vuex from 'vuex';
import user from '@/store/user';
import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    counter: 1,
  },
  mutations: {
    SET_COUNTER(state, pl) {
      state.counter = pl;
    },
  },
  modules: {
    user,
  },
});
