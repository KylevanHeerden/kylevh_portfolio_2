<template>
  <v-app>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Volkhov&display=swap");

body {
  font-family: "Volkhov", serif;
}
</style>

<style scoped>
.theme--dark.v-application {
  background-color: var(--v-background-base);
  color: var(--v-text-lighten2);
}
</style>
