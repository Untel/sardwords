<template>
  <v-container fluid fill-height>
      <v-toolbar absolute>
        <span>
          {{ idx }} / {{ wordsCount }} words
        </span>
        <v-spacer />
        <!-- <v-checkbox
          v-model="checkbox"
          label="Random"
        ></v-checkbox> -->
        <v-text-field label="Go to" @keydown.enter="goto"></v-text-field>
      </v-toolbar>
      <v-layout class="start-zone" column fill-height>
        <v-layout row align-center justify-center class="display-words">
          <div class="display-1" v-if="parseInt(idx) > 1">{{ words[parseInt(idx) - 2] }}</div>
          <div class="display-1" v-if="parseInt(idx) > 0">{{ words[parseInt(idx) - 1] }}</div>
          <div class="display-3 active-word">{{ words[parseInt(idx)] }}</div>
          <div class="display-2">{{ words[parseInt(idx) + 1] }}</div>
          <div class="display-1">{{ words[parseInt(idx) + 2] }}</div>
        </v-layout>
        <v-layout column align-center justify-center>
          <v-text-field
            @blur="pauseTimer"
            @keydown.space="validate"
            :disabled="!words[idx]"
            :error="hasError"
            style="max-width: 400px"
            box
            placeholder="Type"
            v-model="input">
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
  import { mapState, mapGetters } from 'vuex'
  export default {
    data() {
      return {
        idx: localStorage.getItem('wordindex') || 0,
        input: '',
        hasError: false,

        avg: null,
        wpm: [],
        timerRef: null,
        wordAtTen: 0,
      }
    },
    computed: {
      ...mapState(['words']),
      ...mapGetters(['wordsCount']),
    },
    methods: {
      goto(evt) {
        const word = evt.target.value;
        const idx = this.words.indexOf(word);
        if (idx !== -1) {
          this.idx = idx;
          localStorage.setItem('wordindex', this.idx);          
        }
      },
      validate(evt) {
        if (evt) {
          evt.preventDefault();
        }

        if (this.words[this.idx].toLowerCase().trim() === this.input.toLowerCase().trim()) {
          this.idx++;
          localStorage.setItem('wordindex', this.idx);
          this.input = '';
          this.wordAtTen++;
        } else {
          this.hasError = true;
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
        this.avg = Math.round(avg * 100) / 100;        this.wordAtTen = 0;
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
  .word-zone {

  }
  .active-word {
    color: green;
  }

  .words {
    padding: 10px;
  }
  
  .display-words > div {
    padding: 7px;
  }

</style>
