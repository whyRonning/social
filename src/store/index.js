import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    countPages: 1,
  },
  getters: {},
  mutations: {
    addPosts: (state, data) => {
      state.posts = data;
    },
    changeCountPages: (state, count) => {
      state.countPages = count;
    },
  },
  actions: {},
  modules: {},
});
