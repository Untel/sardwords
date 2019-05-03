<template>
  <v-container fluid fill-height>
      <v-toolbar absolute>
        <span>
          {{ wordsCount }} words
        </span>
        <v-spacer/>
        <v-slider max="2000" v-model="interval" @change="start" />
        <v-btn color="success" @click="start">Start</v-btn>
      </v-toolbar>
      <v-layout class="start-zone" justify-center align-center fill-height>
        <div class="display-6 word-zone">{{ wordSpread }}</div>
      </v-layout>
  </v-container>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'

  export default {
    data() {
      return {
        interval: 50,
        wordSpread: '',
        intervalRef: null,
      }
    },
    computed: {
      ...mapState(['words']),
      ...mapGetters(['wordsCount']),
    },
    methods: {
      start() {
        this.intervalRef = setInterval(() => {
          const n = Math.floor(Math.random() * this.wordsCount);
          this.wordSpread = this.words[n];
          console.log('word:', this.wordSpread, n)
        }, this.interval * 100)
      }
    }
  }
</script>

<style scoped>
  .word-zone {

  }
</style>
