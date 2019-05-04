import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { words } from './data'
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    words,
    audios: {},
    exludes: [],
    dark: false,
    gapikey: process.env.VUE_APP_GOOGLE_API_KEY || null,
  },
  mutations: {
    PERSIST_WORDS(state, {words, spliter}) {
      const arr = words.split(spliter).map(e => e.toLowerCase().trim()).filter(e => !!e);
      state.words = arr;
    },
    SET_WORD_AUDIO(state, {word, audio}) {
      state.audios[word] = audio;
    },
    SET_API_KEY(state, apiKey) {
      state.gapikey = apiKey;
    }
  },
  getters: {
    wordsCount: state => state.words.length,
  },
  actions: {
    getRandomWord({ state }) {
      const n = Math.floor(Math.random() * this.wordsCount);
      return state.words[n]
    },
    async genAudio({ commit, state }, word) {
      if (state.audios[word]) {
        return state.audios[word];
      }

      if (!state.gapikey) {
        alert('API Key required');
      }

      let res;
      try {
        res = await axios.post('https://texttospeech.googleapis.com/v1/text:synthesize?key=' + state.gapikey, {
          input: { text: word },
          voice:{
            'languageCode':'fr-fr',
            'name':'fr-FR-Standard-A',
            'ssmlGender' : 'FEMALE'
          },
          audioConfig: {
            'audioEncoding':'MP3'
          }
        });
        const audio = new Audio('data:audio/mp3;base64,' + res.data.audioContent);
        commit('SET_WORD_AUDIO', {word, audio})
        return audio;
      } catch(err) {
        alert('Failed to call api ' + err.message)
      }
    }
  }
})
