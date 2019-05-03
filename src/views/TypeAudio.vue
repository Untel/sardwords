<template>
  <v-container fluid fill-height>
      <v-toolbar absolute>
        <v-btn v-if="audio" small icon @click="audio.play()">
          <v-icon>play_arrow</v-icon>
        </v-btn>
        <v-spacer/>
        <v-btn v-if="audio" small icon>
          <v-icon @click="giveHelp()">help_outline</v-icon>
        </v-btn>

      </v-toolbar>
      <v-layout class="start-zone" row fill-height>
        <v-list subheader>
          <v-subheader>Recent chat</v-subheader>
          <v-list-tile
            v-for="item in doneWords"
            :key="item.word"
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
        hasError: false,
        doneWords: [],
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
        this.audio = await this.genAudio(this.todoWord);
        this.audio.play();
      },

      getRandomWord() {
        const n = Math.floor(Math.random() * this.wordsCount);
        return this.words[n];
      },

      validate($event) {
        if ($event) {
          $event.preventDefault();
        }

        if (this.input.toLowerCase().trim() === this.todoWord) {
          this.input = '';
          this.doneWords.push({ word: this.todoWord, audio: this.audio })
          this.next();
        } else {
          this.hasError = true;
        }
      },
      
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
