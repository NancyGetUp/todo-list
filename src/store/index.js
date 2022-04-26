import { createStore } from 'vuex'

export default createStore({
  state: {
    list: ([
      { task: "eat sdfasdfdfasegv", status: false },
      { task: "cook  sdfasdfdfasegv", status: false },
      { task: "drink sdfasdfdfasegv", status: false },
    ]),
  },
  mutations: {
    addTask (state, payload) {
      state.list.push(payload);
    },
    delTask (state, payload) {
      state.list.splice(payload, 1)
    },
    clear (state, payload) {
      state.list = payload;

    }
  },
  actions: {
  },
  modules: {
  }
})
