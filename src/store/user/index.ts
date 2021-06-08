import { Module } from 'vuex';
import { RootState, UserState } from '@/store/types';
import getters from '@/store/user/getters';
import mutations from '@/store/user/mutations';

const user: Module<UserState, RootState> = {
  state: {
    name: 'Mark',
    email: 'mark@gmail.com',
    id: 21,
    lastName: 'Lebel',
  },
  getters,
  mutations,
};

export default user;
