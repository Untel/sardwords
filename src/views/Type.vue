<template>
  <v-container fluid fill-height>
      <v-toolbar absolute>
        <span>
          {{ idx }} / {{ wordsCount }} words
        </span>
        <v-btn color="success">Start</v-btn>
      </v-toolbar>
      <v-layout class="start-zone" column fill-height>
        <v-layout row align-center justify-center>
          <div class="words display-2" :class="{ 'active-word': n === 1 }" v-for="n in 3" :key="n">
            {{ words[idx + n - 1] }}
          </div>
        </v-layout>
        <v-layout fill-height align-center justify-center>
          <v-text-field :error="hasError" style="max-width: 400px" box placeholder="Type" v-model="input"></v-text-field>
        </v-layout>

        <v-card
          class="mx-auto"
          color="grey lighten-4"
          max-width="600"
        >
          <v-card-title>
            <v-icon
              :color="checking ? 'red lighten-2' : 'indigo'"
              class="mr-5"
              size="64"
              @click="validate"
            >
              mdi-heart-pulse
            </v-icon>
            <v-layout
              column
              align-start
            >
              <div class="caption grey--text text-uppercase">
                Heart rate
              </div>
              <div>
                <span
                  class="display-2 font-weight-black"
                  v-text="avg || '—'"
                ></span>
                <strong v-if="avg">WPM</strong>
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
              :smooth="16"
              :gradient="['#f72047', '#ffd200', '#1feaea']"
              :line-width="3"
              :value="wpm"
              auto-draw
              stroke-linecap="round"
            ></v-sparkline>
          </v-sheet>
        </v-card>
      </v-layout>
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
        avg: 0,
        timer: null,
        wpm: [],
      }
    },
    computed: {
      ...mapState(['words']),
      ...mapGetters(['wordsCount']),
    },
    methods: {
      validate() {
        console.log('IS EQUAL ?', this.words[this.idx], this.input, this.words[this.idx] === this.input)
        if (this.words[this.idx].toLowerCase().trim() === this.input.toLowerCase().trim()) {
          this.idx++;
          this.input = '';
        } else {
          this.hasError = true;
        }
      },

      startTimer() {
        this.timer = setInterval((evt) => {
          console.log('evt', evt);
        }, 100);
      }
    },
    watch: {
      input(input) {

        if (!this.timer) {
          this.startTimer();
        }
        console.log('input', input);
        this.hasError = false;
        if (input[input.length - 1] === ' ') {
          console.log('val');
          this.validate();
        }
      }
    }
  }
</script>

<style scoped>
  .start-zone {
    margin-top: 128px;
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
</style>
