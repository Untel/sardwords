<template>
  <v-container fluid fill-height>
      <v-toolbar absolute>
        <template>
          <v-btn small icon @click="audio.play()">
            <v-icon>play_arrow</v-icon>
          </v-btn>
          <v-btn v-for="voice in ['B', 'C', 'D']" :key="voice" small icon @click="playVoice(voice)">
            <v-icon>play_arrow</v-icon>
          </v-btn>
        </template>

        <v-spacer/>
        <div style="letter-spacing: 4px;" v-if="helper">
          <span v-for="(w, i) in helper" :key="`help-${i}`">
            {{ w.shown ? w.letter : '_' }}
          </span>
        </div>
        <v-btn small icon @click="giveHelp()">
          <v-icon>help_outline</v-icon>
        </v-btn>

      </v-toolbar>
      <v-layout class="start-zone" row fill-height>
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>
          <v-list-tile
            v-for="(item, i) in doneWords"
            :key="`itm-${i}`"
          >
            <v-list-tile-content>
              <v-list-tile-title>{{ item.word }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon @click="item.audio.play()">play_arrow</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
        <v-layout fill-height align-center justify-center>
          <v-text-field :error="hasError" style="max-width: 400px" box placeholder="Type" v-model="input" @keydown.space="validate"></v-text-field>
        </v-layout>
      </v-layout>
  </v-container>
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  import axios from 'axios';

  export default {
    data() {
      return {
        input: '',
        todoWord: null,
        audio: null,
        otherAudios: {},
        hasError: false,
        doneWords: [],
        helper: null,
      }
    },

    computed: {
      ...mapState(['words', 'audios']),
      ...mapGetters(['wordsCount']),
    },

    mounted() {
      this.next();
    },
  
    methods: {
      ...mapActions(['genAudio']),
      async next() {
        this.todoWord = this.getRandomWord();
        this.audio = await this.genAudio({ word: this.todoWord, voice: 'A' } );
        this.audio.play();
      },

      async playVoice(voice) {
        if (this.otherAudios[voice]) {
          this.otherAudios[voice].play();
        } else {
          this.otherAudios[voice] = await this.genAudio({ word: this.todoWord, voice } );
          this.otherAudios[voice].play();
        }
      },

      getRandomWord() {
        const n = Math.floor(Math.random() * this.wordsCount);
        return this.words[n];
      },

      validate($event) {
        if ($event) {
          $event.preventDefault();
        }

        if (this.input.toLowerCase().trim() === this.todoWord.toLowerCase().trim()) {
          this.input = '';
          this.otherAudios = {};
          this.doneWords.unshift({ word: this.todoWord, audio: this.audio })
          if (this.doneWords.length > 5) {
            this.doneWords.splice(-1, 1)
          }
          this.helper = null;
          this.next();
        } else {
          this.hasError = true;
        }
      },

      giveHelp() {
        if (this.todoWord) {
          if (!this.helper) {
            this.helper = this.todoWord.split('').map((letter, index) => ({
              letter,
              index,
              shown: false,
            }));
          } else {
            const unvisible = this.helper.filter(w => !w.shown);
            if (unvisible.length > 0) {
              const idx = Math.floor(Math.random() * unvisible.length);
              const helper = [...this.helper];
              console.log(helper, this.helper, idx, unvisible);
              helper[unvisible[idx].index].shown = true;
              this.helper = [...helper];
            }
          }
        }
      }
      
    },
    watch: {
      input(input) {
        this.hasError = false;
      }
    }
  }
</script>

<style scoped>
  .word-zone {

  }
  .active-word {
    font-size: 64px;
    color: green;
  }

  .words {
    padding: 10px;
  }

  .wpm-score {
    position: absolute;
    right: 0;
  }
</style>
