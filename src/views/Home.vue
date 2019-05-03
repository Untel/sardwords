<template>
    <v-container grid-list-md>
      <v-layout column wrap>
          <v-textarea
            name="input-7-1"
            label="Inputs"
            v-model="unpersistedWords"
            @change="persist($event, spliter)"
            :hint="`${unpersistedWords.split(this.spliter).filter(e => !!e).length} words`"
          ></v-textarea>
      </v-layout>
    </v-container>
</template>

<script>
  import { mapState, mapGetters } from 'vuex'
  export default {
    data() {
      return {
        unpersistedWords: '',
        spliter: '\n',
      }
    },
    computed: {
      ...mapState(['words']),
      ...mapGetters(['wordsCount']),
    },
    watch: {
    },
    methods: {
      persist(words, spliter = '\n') {
        this.$store.commit('PERSIST_WORDS', { words, spliter })
      }
    }
  }
</script>
