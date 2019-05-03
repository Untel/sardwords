<template>
  <v-container fluid fill-height>
      <v-toolbar absolute>
          <v-slider
            :max="100"
            v-model="interval"
            :label="`Interval ${interval / 10}s`"
          ></v-slider>
        <v-spacer/>
        {{ $store.getters['wordsCount']() }}
        <v-btn color="success" @click="start">Start</v-btn>
      </v-toolbar>
      <v-layout class="start-zone" justify-center align-center fill-height>
        <div class="word-zone">{{ wordSpread }}</div>
      </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        interval: 50,
        wordSpread: '',
        intervalRef: null,
      }
    },
    methods: {
      start() {
        this.intervalRef = setInterval(() => {
          const w = this.$store.words;
          const n = Math.floor(Math.random() * w.length);
          this.wordSpread = w[n];
          console.log('word:', this.wordSpread)
        }, this.interval * 100)
      }
    }
  }
</script>

<style scoped>
  .word-zone {

  }
</style>
