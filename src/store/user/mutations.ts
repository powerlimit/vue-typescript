import { MutationTree } from 'vuex';
import { UserState } from '@/store/types';

const mutations: MutationTree<UserState> = {
  SET_EMAIL(state, payload: string): void {
    state.email = payload;
  },
};

export default mutations;
