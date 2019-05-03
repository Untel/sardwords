<template>
  <v-app :dark="isDark">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">
          <span>Sardwords</span>
          <span class="font-weight-light">0.0.1</span>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/">Words</v-btn>
      <!-- <v-btn to="train">Train</v-btn> -->
      <v-btn to="type">Type</v-btn>
      <v-btn to="type-audio">Type Audio</v-btn>
      <v-btn icon fab @click="isDark = !isDark">
        <v-icon>highlight</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      isDark: false,
    }
  }
}
</script>
