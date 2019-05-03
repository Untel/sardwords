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
      </v-toolbar>
      <v-layout class="start-zone" column fill-height>
        <v-layout row align-center justify-center>
          <div class="words display-2" :class="{ 'active-word': n === 1 }" v-for="n in 3" :key="n">
            {{ words[idx + n - 1] }}
          </div>
        </v-layout>
        <v-layout fill-height align-center justify-center>
          <v-text-field @keydown.space="validate" :disabled="!words[idx]" :error="hasError" style="max-width: 400px" box placeholder="Type" v-model="input"></v-text-field>
        </v-layout>

      </v-layout>
      <v-card
        class="wpm-score mx-auto"
        color="grey lighten-4"
        max-width="600">
        <v-card-title>
          <v-layout
            column
            align-start
          >
            <div class="caption grey--text text-uppercase">
              WPM
            </div>
            <div>
              <span
                class="display-2 font-weight-black"
                v-text="avg || '—'"
              ></span>
              <strong v-if="avg">words per minute</strong>
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
  </v-container>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
import { setInterval } from 'timers';

  export default {
    data() {
      return {
        idx: 0,
        input: '',
        hasError: false,
        avg: null,
        timerRef: null,
        start: null,
        end: null,
        wpm: [],
      }
    },
    computed: {
      ...mapState(['words']),
      ...mapGetters(['wordsCount']),
    },
    methods: {
      validate(evt) {
        if (evt) {
          evt.preventDefault();
        }
        if (this.words[this.idx].toLowerCase() === this.input.toLowerCase().trim()) {
          this.idx++;
          this.input = '';
          const now = new Date();
          this.wpm.push(now - this.start);
          this.avg = Math.round((this.wpm.reduce((prev, next) => prev + next, 0) / this.wpm.length) / 60);
          this.start = null;
        } else {
          this.hasError = true;
        }
      },
    },
    watch: {
      input(input) {
        if (!this.start) {
          this.start = new Date();
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
