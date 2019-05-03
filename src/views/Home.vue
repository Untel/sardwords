<template>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
          <v-textarea
            name="input-7-1"
            label="Inputs"
            v-model="unpersistedWords"
            :hint="`${wordsCount} words`"
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
      }
    },
    computed: {
      ...mapState(['words']),
      ...mapGetters(['wordsCount']),
    },
    watch: {
      unpersistedWords(val) {
        console.log('yo', val);
        this.$store.commit('PERSIST_WORDS', val)
      }
    }
  }
</script>
