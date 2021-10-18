import { createStore } from 'vuex';

export default createStore({
  state: {
    AuthModalShow: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.AuthModalShow = !state.AuthModalShow;
    },
  },
  getters: {
    AuthModalShow: (state) => state.AuthModalShow,
  },
  // actions: {
  // },
  // modules: {
  // },
});
