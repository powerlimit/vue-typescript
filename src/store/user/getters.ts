import { GetterTree } from 'vuex';
import { RootState, UserState } from '@/store/types';

const getters:GetterTree<UserState, RootState> = {
  getEmail(state):string {
    return state.email;
  },
};

export default getters;
