import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    words: [],
  },
  mutations: {
    PERSIST_WORDS(state, words) {
      const arr = words.split('\n');
      if ((arr[arr.length - 1].length === 0)) {
        arr.splice(-1,1);
      }
      state.words = arr;
    }
  },
  getters: {
    wordsCount: state => state.words.length,
  },
  actions: {

  }
})
