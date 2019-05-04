<template>
    <v-container grid-list-md>
      <v-layout column wrap>
          <v-textarea
            name="input-7-1"
            label="Inputs"
            v-model="unpersistedWords"
            rows="20"
            @change="persist($event, spliter)"
          ></v-textarea>
          <!-- <v-text-field v-model="_spliter" @change="() => persist($event, spliter)"></v-text-field> -->
          <!-- <v-text-field label="Google API Key" :value="gapikey" @change="$store.commit('SET_API_KEY', $event)"></v-text-field> -->
          
          <!-- <h1>Exclude</h1>
          <v-layout v-for="(regex, i) in excludes" :key="`excl-${i}`">
            <v-text-field :value="regex
            "/>
          </v-layout>
          <v-text-field v-model="newExcl" @keydown.enter="() => { $store.commit('ADD_REGEX', $event);  }" /> -->
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
    mounted() {
      this.unpersistedWords = this.$store.state.words.join(this.spliter);
    },
    computed: {
      ...mapState(['words', 'excludes', 'gapikey']),
      ...mapGetters(['wordsCount']),
    },
    watch: {
    },
    methods: {
      persist(words, spliter) {
        this.$store.commit('PERSIST_WORDS', { words, spliter: spliter });
      }
    }
  }
</script>
