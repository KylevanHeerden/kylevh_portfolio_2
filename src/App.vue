<template>
  <v-app>
    <v-app-bar v-if="$route.name !== 'Home'" app dark flat color="background">
      <v-btn to="/" elevation="0" color="background" text class="pb-5">
        <v-img
          lazy-src="https://github.com/KylevanHeerden/kylevh_portfolio_2/blob/main/src/assets/kyle_signature.png?raw=true"
          max-height="150"
          max-width="250"
          src="https://github.com/KylevanHeerden/kylevh_portfolio_2/blob/main/src/assets/kyle_signature.png?raw=true"
        ></v-img>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text class="font-weight-light">PROJECTS</v-btn>
      <v-btn text class="font-weight-light">ABOUT</v-btn>
      <v-btn text class="font-weight-light">RESUME</v-btn>
    </v-app-bar>

    <v-main>
      <vue-page-transition name="fade">
        <router-view />
      </vue-page-transition>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>

<style scoped>
.theme--dark.v-application {
  background-color: var(--v-background-base);
  color: var(--v-text-lighten2);
}
</style>
