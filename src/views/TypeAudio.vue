<template>
  <v-container fluid fill-height>
      <v-toolbar absolute>
        <template>

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
        <v-layout column align-center justify-center>
          <div>

            <v-btn small icon @click="audio.play()">
              <v-icon>play_arrow</v-icon>
            </v-btn>
            <v-btn v-for="voice in ['B', 'C', 'D']" :key="voice" small icon @click="playVoice(voice)">
              <v-icon>play_arrow</v-icon>
            </v-btn>

          </div>
          <v-text-field
            @blur="pauseTimer"
            :error="hasError"
            style="max-width: 400px"
            box
            placeholder="Type"
            v-model="input"
            @keydown.space="validate">
          </v-text-field>
          <v-card
            class="wpm-score mx-auto"
            color="lighten-4"
            max-width="600">
            <v-card-title>
              <v-layout
                column
                align-start
              >
                <div class="caption grey--text text-uppercase">
                  Words per minutes
                </div>
                <div v-if="timerRef">
                  <span
                    class="display-2 font-weight-black"
                    v-text="avg || '—'"
                  ></span>
                  <strong v-if="avg">W/m</strong>
                </div>
                <div v-else>
                  <v-icon>pause</v-icon>
                  <strong>Pause</strong>
                </div>
              </v-layout>

              <v-spacer></v-spacer>

              <v-btn icon class="align-self-start" size="28">
                <v-icon>mdi-arrow-right-thick</v-icon>
              </v-btn>
            </v-card-title>

            <v-sheet color="transparent">
              <v-sparkline
                :key="String(avg)"
                :smooth="5"
                :gradient="['green', 'red']"
                :line-width="4"
                :value="wpm"
                stroke-linecap="round"
              ></v-sparkline>
            </v-sheet>
          </v-card>
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
        avg: null,
        wpm: [],

        timerRef: null,
        wordAtTen: 0,
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
          this.wordAtTen++;
          this.doneWords.unshift({ word: this.todoWord, audio: this.audio })
          if (this.doneWords.length > 10) {
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
              helper[unvisible[idx].index].shown = true;
              this.helper = [...helper];
            }
          }
        }
      },

      pauseTimer() {
        if (this.timerRef) {
          clearInterval(this.timerRef);
          this.wpmTick();
          this.timerRef = null;
        }
      },
      
      wpmTick() {
        this.wpm.push(this.wordAtTen * 10);
        const avg = this.wpm.reduce((p, n) => p + n , 0) / this.wpm.length;
        this.avg = Math.round(avg * 100) / 100;
        this.wordAtTen = 0;
        this.charAtTen = 1;
      }
      
    },
    watch: {
      input(input) {
        if (!this.timerRef) {
          this.timerRef = setInterval(() => this.wpmTick(), 6 * 1000)
        }
        this.hasError = false;
      }
    }
  }
</script>

<style scoped>
  .start-zone {
    padding-top: 64px;
  }
  .active-word {
    font-size: 64px;
    color: green;
  }
  .words {
    padding: 10px;
  }

  .wpm-score {
    /* position: absolute;
    right: 0; */
  }
</style>
